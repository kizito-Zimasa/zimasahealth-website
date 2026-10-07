import { getAllPosts, getPostsByCategory, getPost } from '@/lib/blog';
import { getBlogCategories, getCategoryLabel, CATEGORY_ORDER } from '@/lib/insights';

describe('Blog utilities', () => {
  describe('getAllPosts', () => {
    test('returns all blog posts sorted by date (newest first)', async () => {
      const posts = await getAllPosts();
      expect(Array.isArray(posts)).toBe(true);
      // If posts exist, verify sorting
      if (posts.length > 1) {
        for (let i = 0; i < posts.length - 1; i++) {
          expect(new Date(posts[i].date).getTime()).toBeGreaterThanOrEqual(
            new Date(posts[i + 1].date).getTime()
          );
        }
      }
    });

    test('each post has required fields', async () => {
      const posts = await getAllPosts();
      posts.forEach(post => {
        expect(post.slug).toBeDefined();
        expect(post.category).toBeDefined();
        expect(post.title).toBeDefined();
        expect(post.excerpt).toBeDefined();
        expect(post.date).toBeDefined();
        expect(post.author).toBeDefined();
        expect(post.content).toBeDefined();
        expect(typeof post.readingTime).toBe('number');
      });
    });

    test('removed AI-drafted posts are not published', async () => {
      const slugs = (await getAllPosts()).map(p => p.slug);
      [
        'launch-announcement',
        'active-days-metric',
        'cohort-design-renewal',
        'workforce-wellness-activation',
        'engagement-mechanics-101',
      ].forEach(slug => expect(slugs).not.toContain(slug));
    });
  });

  describe('getPostsByCategory', () => {
    test('filters posts by category', async () => {
      const posts = await getPostsByCategory('playbook');
      posts.forEach(post => {
        expect(post.category).toBe('playbook');
      });
    });
  });

  describe('getPost', () => {
    test('returns null for non-existent post', async () => {
      const post = await getPost('playbook', 'non-existent-slug');
      expect(post).toBeNull();
    });

    test('returns the migrated providers post', async () => {
      const post = await getPost('providers', 'empowering-africas-health-providers');
      expect(post).not.toBeNull();
      expect(post?.date).toBe('2025-12-15');
    });
  });

  describe('categories', () => {
    test('only lists categories that contain posts, in payer/provider-first order', async () => {
      const categories = getBlogCategories();
      for (const category of categories) {
        expect((await getPostsByCategory(category)).length).toBeGreaterThan(0);
      }
      const known = categories.filter(c => CATEGORY_ORDER.includes(c));
      const expected = CATEGORY_ORDER.filter(c => known.includes(c));
      expect(known).toEqual(expected);
    });

    test('labels the providers category', () => {
      expect(getCategoryLabel('providers')).toBe('For Providers');
    });
  });
});
