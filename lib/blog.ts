/**
 * Legacy blog module. The site reads posts through `@/lib/insights`; this file
 * re-exports that module (single source of truth for categories, ordering and
 * frontmatter) and keeps the async helper names used by the test suite.
 */
import {
  getAllBlogPosts,
  getBlogPostsByCategory,
  getBlogPost,
  type BlogPost,
} from './insights'

export * from './insights'

export interface BlogPostWithReadingTime extends BlogPost {
  /** Estimated reading time in minutes (200 words per minute, minimum 1). */
  readingTime: number
}

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function withReadingTime(post: BlogPost): BlogPostWithReadingTime {
  return { ...post, readingTime: calculateReadingTime(post.content) }
}

export async function getAllPosts(): Promise<BlogPostWithReadingTime[]> {
  return getAllBlogPosts().map(withReadingTime)
}

export async function getPostsByCategory(category: string): Promise<BlogPostWithReadingTime[]> {
  return getBlogPostsByCategory(category).map(withReadingTime)
}

export async function getPost(category: string, slug: string): Promise<BlogPostWithReadingTime | null> {
  const post = getBlogPost(category, slug)
  return post ? withReadingTime(post) : null
}
