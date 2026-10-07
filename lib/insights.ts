import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  author: string
  heroImage?: string
  /** Editorial review flag, e.g. "pending-founder-review-2026-10". Not rendered. */
  reviewStatus?: string
  /** Optional internal note for reviewers. Not rendered. */
  reviewNote?: string
  content: string
}

export interface BlogFrontmatter {
  title: string
  excerpt: string
  date: string
  author: string
  heroImage?: string
  reviewStatus?: string
  reviewNote?: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/**
 * Display order for Insights categories (payers and providers first).
 * Categories not listed here are appended alphabetically.
 */
export const CATEGORY_ORDER: readonly string[] = [
  'payers-schemes',
  'providers',
  'playbook',
  'zimasa-updates',
  'employers-hr',
]

const CATEGORY_LABELS: Record<string, string> = {
  'payers-schemes': 'For Payers & Schemes',
  providers: 'For Providers',
  playbook: 'Playbook',
  'zimasa-updates': 'Zimasa Updates',
  'employers-hr': 'For Employers & HR',
}

function sortCategories(categories: string[]): string[] {
  return [...categories].sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a)
    const ib = CATEGORY_ORDER.indexOf(b)
    if (ia !== -1 && ib !== -1) return ia - ib
    if (ia !== -1) return -1
    if (ib !== -1) return 1
    return a.localeCompare(b)
  })
}

function countPosts(category: string): number {
  const categoryPath = path.join(BLOG_DIR, category)
  if (!fs.existsSync(categoryPath)) return 0
  return fs.readdirSync(categoryPath).filter(f => f.endsWith('.mdx')).length
}

/**
 * Categories that currently contain at least one post, in display order.
 * Used for navigation and generateStaticParams, so empty categories are
 * never linked or pre-rendered. A direct visit to a known but empty category
 * still renders the category page's "No articles in this category yet" state.
 */
export function getBlogCategories(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const categories = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => countPosts(name) > 0)
  return sortCategories(categories)
}

function toPost(category: string, slug: string, fileContents: string): BlogPost {
  const { data, content } = matter(fileContents)
  return {
    slug,
    category,
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || '',
    heroImage: data.heroImage || undefined,
    reviewStatus: data.reviewStatus || undefined,
    reviewNote: data.reviewNote || undefined,
    content,
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const categoryPath = path.join(BLOG_DIR, category)

  if (!fs.existsSync(categoryPath)) {
    return []
  }

  const files = fs.readdirSync(categoryPath)
    .filter(f => f.endsWith('.mdx'))
    .sort()
    .reverse()

  return files.map(file => {
    const filePath = path.join(categoryPath, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return toPost(category, file.replace('.mdx', ''), fileContents)
  })
}

export function getAllBlogPosts(): BlogPost[] {
  const categories = getBlogCategories()
  const allPosts: BlogPost[] = []

  categories.forEach(category => {
    const posts = getBlogPostsByCategory(category)
    allPosts.push(...posts)
  })

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(category: string, slug: string): BlogPost | null {
  const categoryPath = path.join(BLOG_DIR, category)
  const filePath = path.join(categoryPath, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  return toPost(category, slug, fileContents)
}

export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category
}
