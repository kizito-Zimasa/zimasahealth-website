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
  content: string
}

export interface BlogFrontmatter {
  title: string
  excerpt: string
  date: string
  author: string
  heroImage?: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getBlogCategories(): string[] {
  const categories = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
  return categories.sort()
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
    const { data, content } = matter(fileContents)

    return {
      slug: file.replace('.mdx', ''),
      category,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || '',
      heroImage: data.heroImage || undefined,
      content,
    }
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
  const { data, content } = matter(fileContents)

  return {
    slug,
    category,
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || '',
    heroImage: data.heroImage || undefined,
    content,
  }
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    playbook: 'Playbook',
    'zimasa-updates': 'Zimasa Updates',
    'payers-schemes': 'For Payers & Schemes',
    'employers-hr': 'For Employers & HR',
  }
  return labels[category] || category
}
