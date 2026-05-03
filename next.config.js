import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

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
