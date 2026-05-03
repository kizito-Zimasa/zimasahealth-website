export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zimasahealth.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }

    if ([
      '/about',
      '/solutions',
      '/who-we-help',
      '/book-demo',
      '/contact-us',
      '/get-started',
    ].includes(path)) {
      priority = 0.9;
      changefreq = 'monthly';
    }

    if ([
      '/employers',
      '/insurers-tpas',
      '/healthcare-providers',
      '/solutions/zhep',
      '/solutions/zps',
      '/zimasa-go',
    ].includes(path)) {
      priority = 0.85;
      changefreq = 'monthly';
    }

    if (path === '/insights') {
      priority = 0.8;
      changefreq = 'weekly';
    }

    if (path.startsWith('/insights/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    if (['/privacy-centre', '/terms'].includes(path)) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
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
