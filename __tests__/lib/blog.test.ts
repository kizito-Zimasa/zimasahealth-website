import { getAllPosts, getPostsByCategory, getPost } from '@/lib/blog';

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
  });
});
