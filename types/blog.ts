export interface BlogPost {
  slug: string;
  category: 'playbook' | 'zimasa-updates' | 'payers-schemes' | 'employers-hr';
  title: string;
  excerpt: string;
  date: string; // ISO 8601
  author: string;
  content: string; // Raw MDX content
  readingTime: number; // minutes
}

export type BlogCategory = BlogPost['category'];

export const BLOG_CATEGORIES: Record<BlogCategory, string> = {
  playbook: 'Zimasa Playbook',
  'zimasa-updates': 'Zimasa Updates',
  'payers-schemes': 'Payers & Schemes',
  'employers-hr': 'Employers & HR',
};
