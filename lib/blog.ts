import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

const blogDir = path.join(process.cwd(), 'content', 'blog');

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

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;

      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter, content } = matter(fileContent);

      posts.push({
        slug: file.replace('.mdx', ''),
        category: category as any,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        date: frontmatter.date,
        author: frontmatter.author,
        content,
        readingTime: calculateReadingTime(content),
      });
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get blog posts filtered by category
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category === category);
}

// Get single blog post by slug and category
export async function getPost(category: string, slug: string): Promise<BlogPost | null> {
  const filePath = path.join(blogDir, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  return {
    slug,
    category: category as any,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    date: frontmatter.date,
    author: frontmatter.author,
    content,
    readingTime: calculateReadingTime(content),
  };
}

// Helper: estimate reading time (200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}
