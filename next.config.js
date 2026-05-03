import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  /* Redirects for SEO and legacy URLs */
  async redirects() {
    return [
      // Legacy WordPress URLs to new Next.js structure
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/wordpress/:path*', destination: '/', permanent: true },

      // Legacy blog paths to new insights structure
      { source: '/blog/:slug', destination: '/insights/playbook/:slug', permanent: true },
      { source: '/post/:slug', destination: '/insights/playbook/:slug', permanent: true },
      { source: '/article/:slug', destination: '/insights/playbook/:slug', permanent: true },
      { source: '/blog/:path*', destination: '/insights/:path*', permanent: true },

      // Product/solution aliases
      { source: '/platform', destination: '/solutions', permanent: true },
      { source: '/zhep-platform', destination: '/solutions/zhep', permanent: true },
      { source: '/health-engagement-os', destination: '/solutions/zhep', permanent: true },
      { source: '/payers-solution', destination: '/insurers-tpas', permanent: true },
      { source: '/for-payers', destination: '/insurers-tpas', permanent: true },
      { source: '/for-insurers', destination: '/insurers-tpas', permanent: true },

      // Audience path aliases
      { source: '/for-members', destination: '/', permanent: true },
      { source: '/for-employers', destination: '/employers', permanent: true },
      { source: '/employer-wellness', destination: '/employers', permanent: true },
      { source: '/for-providers', destination: '/healthcare-providers', permanent: true },
      { source: '/provider-network', destination: '/healthcare-providers', permanent: true },
      { source: '/for-partner', destination: '/healthcare-providers', permanent: true },

      // Freemium product aliases
      { source: '/free-tier', destination: '/zimasa-go', permanent: true },
      { source: '/zimasa-lite', destination: '/zimasa-go', permanent: true },
      { source: '/member-app', destination: '/zimasa-go', permanent: true },

      // Company info aliases
      { source: '/company', destination: '/about', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/our-story', destination: '/about', permanent: true },
      { source: '/mission', destination: '/about', permanent: true },

      // Legal and support pages
      { source: '/policy/privacy', destination: '/privacy-centre', permanent: true },
      { source: '/legal/privacy', destination: '/privacy-centre', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-centre', permanent: true },
      { source: '/policy/terms', destination: '/terms', permanent: true },
      { source: '/legal/terms', destination: '/terms', permanent: true },
      { source: '/tos', destination: '/terms', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/get-in-touch', destination: '/contact-us', permanent: true },

      // CTA aliases
      { source: '/demo', destination: '/book-demo', permanent: true },
      { source: '/schedule-demo', destination: '/book-demo', permanent: true },
      { source: '/request-demo', destination: '/book-demo', permanent: true },
      { source: '/signup', destination: '/get-started', permanent: true },
      { source: '/register', destination: '/get-started', permanent: true },
      { source: '/enroll', destination: '/get-started', permanent: true },

      // Catch trailing slashes (handled by Next.js, but explicit for clarity)
      { source: '/:path+/', destination: '/:path+', permanent: false },
    ];
  },

  /* Headers for security, CSP, and caching */
  async headers() {
    const isProd = process.env.NODE_ENV === 'production'

    const securityHeaders = [
      { key: 'X-Content-Type-Options',  value: 'nosniff' },
      { key: 'X-Frame-Options',         value: 'DENY' },
      { key: 'X-XSS-Protection',        value: '1; mode=block' },
      { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy',      value: 'camera=(), microphone=(), geolocation=(), payment=()' },
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.cookieyes.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
      },
    ]

    const headers = [
      { source: '/:path*', headers: securityHeaders },
    ]

    // Only apply aggressive caching in production — dev cache breaks HMR
    if (isProd) {
      headers.push(
        {
          source: '/images/:path*',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
        },
        {
          source: '/_next/static/:path*',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
        },
        {
          source: '/fonts/:path*',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
        },
        {
          source: '/:path((?!_next|api|images|fonts)[^.]*)',
          headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' }],
        },
      )
    }

    return headers
  },

  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
