import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Load page content from /content/pages/{filename}.mdx
export function getPageContent(filename: string): string {
  const filePath = path.join(process.cwd(), 'content', 'pages', `${filename}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);
  return content;
}

// Load raw MDX + frontmatter (used for <MDXRemote>)
export function getPageWithMatter(filename: string): { frontmatter: Record<string, any>; content: string } {
  const filePath = path.join(process.cwd(), 'content', 'pages', `${filename}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);
  return { frontmatter, content };
}
