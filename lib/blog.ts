import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogCategory } from '@/types/blog';

const blogDir = path.join(process.cwd(), 'content', 'blog');

// Type guard to validate category
function isValidCategory(category: string): category is BlogCategory {
  return ['playbook', 'zimasa-updates', 'payers-schemes', 'employers-hr'].includes(category);
}

// Helper to construct blog post object with validation
function createBlogPost(
  slug: string,
  category: BlogCategory,
  frontmatter: Record<string, any>,
  content: string
): BlogPost | null {
  // Validate required fields
  if (!frontmatter.title || !frontmatter.date || !frontmatter.author || !frontmatter.excerpt) {
    console.warn(`Malformed post: ${category}/${slug} missing required frontmatter fields`);
    return null;
  }

  return {
    slug,
    category,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    date: frontmatter.date,
    author: frontmatter.author,
    content,
    readingTime: calculateReadingTime(content),
  };
}

// Get all blog posts across all categories
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const categories = fs.readdirSync(blogDir);
  const posts: BlogPost[] = [];

  for (const category of categories) {
    const categoryPath = path.join(blogDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    if (!isValidCategory(category)) {
      console.warn(`Skipping invalid category: ${category}`);
      continue;
    }

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;

      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter, content } = matter(fileContent);

      const post = createBlogPost(file.replace('.mdx', ''), category, frontmatter, content);
      if (post) {
        posts.push(post);
      }
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get blog posts filtered by category
export async function getPostsByCategory(category: BlogCategory): Promise<BlogPost[]> {
  const categoryPath = path.join(blogDir, category);

  if (!fs.existsSync(categoryPath)) return [];

  const files = fs.readdirSync(categoryPath);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;

    const filePath = path.join(categoryPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    const post = createBlogPost(file.replace('.mdx', ''), category, frontmatter, content);
    if (post) posts.push(post);
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single blog post by slug and category
export async function getPost(category: string, slug: string): Promise<BlogPost | null> {
  if (!isValidCategory(category)) return null;

  const filePath = path.join(blogDir, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  return createBlogPost(slug, category, frontmatter, content);
}

// Helper: estimate reading time (200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}
