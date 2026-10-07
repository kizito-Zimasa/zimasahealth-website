import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Spec 07_SEO-Spec.md §URL Conventions: all URLs use a trailing slash.
  // Next.js then auto-301s the non-trailing-slash variant to the canonical form.
  trailingSlash: true,

  turbopack: {
    root: __dirname,
  },

  /* Redirects — translation of Docs/Final/03_Redirects.md (LOCKED).
     Keep ordering stable; do not de-duplicate by destination — Next.js matches
     the first applicable source. */
  async redirects() {
    return [
      // ─── WordPress system & legacy entry points ─────────────────
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/wp-admin/', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/wordpress/:path*', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
      { source: '/feed/', destination: '/insights/', permanent: true },

      // ─── Home page variants ────────────────────────────────────
      { source: '/home/', destination: '/', permanent: true },
      { source: '/home1/', destination: '/', permanent: true },
      { source: '/home2/', destination: '/', permanent: true },
      { source: '/home3/', destination: '/', permanent: true },
      { source: '/home4/', destination: '/', permanent: true },
      { source: '/home5/', destination: '/', permanent: true },

      // ─── About page variants ───────────────────────────────────
      { source: '/about-3/', destination: '/about/', permanent: true },
      { source: '/about-4/', destination: '/about/', permanent: true },
      { source: '/about-6/', destination: '/about/', permanent: true },
      { source: '/about21/', destination: '/about/', permanent: true },
      { source: '/about1h12/', destination: '/about/', permanent: true },
      // Defensive about aliases (not in WP migration spec)
      { source: '/company/', destination: '/about/', permanent: true },
      { source: '/team/', destination: '/about/', permanent: true },
      { source: '/our-story/', destination: '/about/', permanent: true },
      { source: '/mission/', destination: '/about/', permanent: true },

      // ─── Solutions ─────────────────────────────────────────────
      { source: '/our-solutions/', destination: '/solutions/', permanent: true },
      { source: '/zimasa-health-engagement-platform/', destination: '/solutions/zhep/', permanent: true },
      { source: '/zhep/', destination: '/solutions/zhep/', permanent: true },
      { source: '/payers-solution/', destination: '/solutions/zps/', permanent: true },
      { source: '/gym-management/', destination: '/solutions/', permanent: true },
      { source: '/gym-movement-management/', destination: '/solutions/', permanent: true },
      { source: '/care-disease-management/', destination: '/solutions/zhep/zcare/', permanent: true },
      { source: '/hr-solution/', destination: '/employers/', permanent: true },
      // Defensive solution aliases
      { source: '/platform/', destination: '/solutions/', permanent: true },
      { source: '/zhep-platform/', destination: '/solutions/zhep/', permanent: true },
      { source: '/health-engagement-os/', destination: '/solutions/zhep/', permanent: true },

      // ─── Who We Help (page removed, S7/F4) & audience aliases ──
      { source: '/who-we-help/', destination: '/insurers-tpas/', permanent: true },
      { source: '/who-we-serve/', destination: '/insurers-tpas/', permanent: true },
      { source: '/for-employers/', destination: '/employers/', permanent: true },
      { source: '/for-payers/', destination: '/insurers-tpas/', permanent: true },
      { source: '/for-insurers/', destination: '/insurers-tpas/', permanent: true },
      { source: '/for-providers/', destination: '/healthcare-providers/', permanent: true },
      { source: '/provider-network/', destination: '/healthcare-providers/', permanent: true },
      { source: '/employer-wellness/', destination: '/employers/', permanent: true },
      { source: '/for-members/', destination: '/zimasa-go/', permanent: true },

      // ─── Contact & demo ────────────────────────────────────────
      { source: '/contact/', destination: '/contact-us/', permanent: true },
      { source: '/contact3/', destination: '/contact-us/', permanent: true },
      { source: '/get-in-touch/', destination: '/contact-us/', permanent: true },
      { source: '/demo/', destination: '/book-demo/', permanent: true },
      { source: '/request-demo/', destination: '/book-demo/', permanent: true },
      { source: '/schedule-demo/', destination: '/book-demo/', permanent: true },
      { source: '/signup/', destination: '/get-started/', permanent: true },
      { source: '/register/', destination: '/get-started/', permanent: true },
      { source: '/enroll/', destination: '/get-started/', permanent: true },

      // ─── Free-tier aliases ─────────────────────────────────────
      { source: '/free-tier/', destination: '/zimasa-go/', permanent: true },
      { source: '/zimasa-lite/', destination: '/zimasa-go/', permanent: true },
      { source: '/member-app/', destination: '/zimasa-go/', permanent: true },

      // ─── Legal ─────────────────────────────────────────────────
      { source: '/privacy-policy/', destination: '/privacy-centre/', permanent: true },
      { source: '/policy/privacy/', destination: '/privacy-centre/', permanent: true },
      { source: '/legal/privacy/', destination: '/privacy-centre/', permanent: true },
      { source: '/terms-of-service/', destination: '/terms/', permanent: true },
      { source: '/policy/terms/', destination: '/terms/', permanent: true },
      { source: '/legal/terms/', destination: '/terms/', permanent: true },
      { source: '/tos/', destination: '/terms/', permanent: true },

      // ─── Blog hub ──────────────────────────────────────────────
      { source: '/blog/', destination: '/insights/', permanent: true },

      // ─── Blog: WP /insights/{slug}/ permalinks (no category) ───
      {
        source: '/insights/from-processing-claims-to-preventing-them-why-i-changed-what-im-building/',
        destination: '/insights/zimasa-updates/from-processing-claims-to-preventing-them/',
        permanent: true,
      },
      {
        source: '/insights/from-processing-claims-to-preventing-them-why-i-changed-what-im-building-copy/',
        destination: '/insights/zimasa-updates/introducing-zimasa-health-engagement-os/',
        permanent: true,
      },
      {
        source: '/insights/empowering-africas-health-and-wellness-providers/',
        destination: '/insights/providers/empowering-africas-health-providers/',
        permanent: true,
      },

      // ─── Blog: WP category-path canonical URLs ─────────────────
      {
        source: '/health-engagement-series/from-processing-claims-to-preventing-them-why-i-changed-what-im-building/',
        destination: '/insights/zimasa-updates/from-processing-claims-to-preventing-them/',
        permanent: true,
      },
      {
        source: '/health-engagement-series/from-processing-claims-to-preventing-them-why-i-changed-what-im-building-copy/',
        destination: '/insights/zimasa-updates/introducing-zimasa-health-engagement-os/',
        permanent: true,
      },
      {
        source: '/health-engagement-series/why-we-need-a-health-engagement-platform-now/',
        destination: '/insights/playbook/half-trillion-problem-kenya-health-spending/',
        permanent: true,
      },
      {
        source: '/health-engagement-series/most-kenyan-households-are-one-medical-crisis-away-from-the-auctioneers-hammer-heres-why-thats-your-problem/',
        destination: '/insights/playbook/one-medical-crisis-kenyan-households-financial-resilience/',
        permanent: true,
      },
      {
        source: '/health-engagement-playbook/empowering-africas-health-and-wellness-providers/',
        destination: '/insights/providers/empowering-africas-health-providers/',
        permanent: true,
      },

      // ─── Blog: removed AI-drafted posts (S13) and their emptied categories ──
      { source: '/insights/zimasa-updates/launch-announcement/', destination: '/insights/', permanent: true },
      { source: '/insights/zimasa-updates/active-days-metric/', destination: '/insights/', permanent: true },
      { source: '/insights/payers-schemes/cohort-design-renewal/', destination: '/insights/', permanent: true },
      { source: '/insights/employers-hr/workforce-wellness-activation/', destination: '/insights/', permanent: true },
      { source: '/insights/playbook/engagement-mechanics-101/', destination: '/insights/', permanent: true },
      { source: '/insights/payers-schemes/', destination: '/insights/', permanent: true },
      { source: '/insights/employers-hr/', destination: '/insights/', permanent: true },

      // ─── Blog: WP category & author archives ───────────────────
      { source: '/category/health-engagement-series/', destination: '/insights/', permanent: true },
      { source: '/category/health-engagement-playbook/', destination: '/insights/playbook/', permanent: true },
      { source: '/category/employers-n-hr/', destination: '/insights/', permanent: true },
      { source: '/category/payers-n-schemes/', destination: '/insights/', permanent: true },
      { source: '/category/providers/', destination: '/insights/providers/', permanent: true },
      { source: '/author/kizito-makatiani/', destination: '/insights/', permanent: true },
      { source: '/author/eunice-muthoni/', destination: '/insights/', permanent: true },
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
