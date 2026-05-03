/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Redirects — full list added in Task 16 */
  async redirects() {
    return [];
  },

  /* Headers for security and caching — added in Task 16 */
  async headers() {
    return [];
  },

  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
