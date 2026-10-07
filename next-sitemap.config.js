/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zimasahealth.com',
  generateRobotsTxt: true,

  // Match Next.js trailingSlash:true so canonical URLs are /about/ not /about.
  // Spec 07_SEO-Spec.md §URL Conventions.
  trailingSlash: true,

  changefreq: 'weekly',
  priority: 0.7,

  transform: async (config, rawPath) => {
    // next-sitemap emits paths with trailing slashes when trailingSlash:true.
    // Normalise to "no-slash key" so the lookup tables below stay readable.
    const path = rawPath === '/' ? '/' : rawPath.replace(/\/$/, '');

    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if ([
      '/about',
      '/solutions',
      '/who-we-help',
      '/book-demo',
      '/contact-us',
      '/get-started',
    ].includes(path)) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if ([
      '/employers',
      '/insurers-tpas',
      '/healthcare-providers',
      '/solutions/zhep',
      '/solutions/zps',
      '/zimasa-go',
    ].includes(path)) {
      priority = 0.85;
      changefreq = 'monthly';
    } else if (path === '/insights') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/insights/')) {
      // Category pages and individual posts
      const segments = path.split('/').filter(Boolean);
      // segments: ['insights', '<category>'] (length 2) or ['insights','<cat>','<slug>'] (length 3)
      priority = segments.length === 2 ? 0.7 : 0.6;
      changefreq = 'monthly';
    } else if (['/privacy-centre', '/terms'].includes(path)) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: rawPath,
      changefreq,
      priority,
      lastmod: new Date().toISOString().split('T')[0],
      alternateRefs: [],
    };
  },

  exclude: [
    '/404',
    '/_error',
    '/_document',
    '/api/*',
  ],

  robotsTxtOptions: {
    sitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zimasahealth.com'}/sitemap.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
        crawlDelay: 1,
      },
    ],
  },
};
