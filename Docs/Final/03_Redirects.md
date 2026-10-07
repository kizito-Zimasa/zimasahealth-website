# Redirect Map — WordPress to Next.js
**Version**: 1.0  
**Date**: May 2026  
**Status**: LOCKED — implement in `next.config.js` before go-live

> **Rule**: Zero 404s at go-live. Every current WordPress URL must either resolve to a live Next.js page or redirect via 301. Test all redirects before DNS cutover.

---

## Implementation

Add all entries below to `next.config.js`:

```js
async redirects() {
  return [
    {
      source: '/old-path/',
      destination: '/new-path/',
      permanent: true, // 301
    },
    // ... all entries below
  ]
}
```

---

## Home Page Variants → `/`

WordPress had multiple home page variants. All redirect to the canonical home.

| Source (WordPress) | Destination | Type |
|-------------------|-------------|------|
| `/home/` | `/` | 301 |
| `/home1/` | `/` | 301 |
| `/home2/` | `/` | 301 |
| `/home3/` | `/` | 301 |
| `/home4/` | `/` | 301 |
| `/home5/` | `/` | 301 |

---

## About Page Variants → `/about/`

| Source (WordPress) | Destination | Type |
|-------------------|-------------|------|
| `/about/` | `/about/` | 200 (same URL — no redirect needed) |
| `/about-3/` | `/about/` | 301 |
| `/about-4/` | `/about/` | 301 |
| `/about-6/` | `/about/` | 301 |
| `/about21/` | `/about/` | 301 |
| `/about1h12/` | `/about/` | 301 |

---

## Solutions Pages

| Source (WordPress) | Destination | Type |
|-------------------|-------------|------|
| `/our-solutions/` | `/solutions/` | 301 |
| `/solutions/` | `/solutions/` | 200 |
| `/zimasa-health-engagement-platform/` | `/solutions/zhep/` | 301 |
| `/zhep/` | `/solutions/zhep/` | 301 |
| `/payers-solution/` | `/insurers-tpas/` | 301 |
| `/insurers-tpas/` | `/insurers-tpas/` | 200 |
| `/gym-management/` | `/solutions/` | 301 |
| `/care-disease-management/` | `/solutions/` | 301 |
| `/hr-solution/` | `/employers/` | 301 |

---

## Who We Help

| Source (WordPress) | Destination | Type |
|-------------------|-------------|------|
| `/who-we-help/` | `/who-we-help/` | 200 |
| `/who-we-serve/` | `/who-we-help/` | 301 |
| `/for-employers/` | `/who-we-help/` | 301 |
| `/for-payers/` | `/insurers-tpas/` | 301 |
| `/for-providers/` | `/healthcare-providers/` | 301 |

---

## Contact & Demo

| Source (WordPress) | Destination | Type |
|-------------------|-------------|------|
| `/contact/` | `/contact-us/` | 301 |
| `/contact-us/` | `/contact-us/` | 200 |
| `/contact3/` | `/contact-us/` | 301 |
| `/book-demo/` | `/book-demo/` | 200 (live page) |
| `/demo/` | `/book-demo/` | 301 |
| `/request-demo/` | `/book-demo/` | 301 |
| `/get-started/` | `/get-started/` | 200 (live page — Zimasa Go sign-up) |

---

## Legal Pages

| Source (WordPress) | Destination | Type |
|-------------------|-------------|------|
| `/privacy-policy/` | `/privacy-centre/` | 301 |
| `/privacy-centre/` | `/privacy-centre/` | 200 |
| `/terms-of-service/` | `/terms/` | 301 |
| `/terms/` | `/terms/` | 200 |

---

## Blog / Insights

All 5 WordPress posts have been crawled and mapped. Redirects are complete.

| Source (WordPress) | Destination | Type | Notes |
|-------------------|-------------|------|-------|
| `/insights/` | `/insights/` | 200 | Blog hub — same URL |
| `/blog/` | `/insights/` | 301 | WordPress /blog/ fallback |
| `/insights/from-processing-claims-to-preventing-them-why-i-changed-what-im-building/` | `/insights/zimasa-updates/from-processing-claims-to-preventing-them/` | 301 | Series Article 3 |
| `/insights/from-processing-claims-to-preventing-them-why-i-changed-what-im-building-copy/` | `/insights/zimasa-updates/introducing-zimasa-health-engagement-os/` | 301 | Series Article 4 — distinct content, not duplicate |
| `/insights/empowering-africas-health-and-wellness-providers/` | `/insights/playbook/empowering-africas-health-wellness-providers/` | 301 | Playbook post |
| `/health-engagement-series/from-processing-claims-to-preventing-them-why-i-changed-what-im-building/` | `/insights/zimasa-updates/from-processing-claims-to-preventing-them/` | 301 | WordPress category-path URL |
| `/health-engagement-series/from-processing-claims-to-preventing-them-why-i-changed-what-im-building-copy/` | `/insights/zimasa-updates/introducing-zimasa-health-engagement-os/` | 301 | WordPress category-path URL |
| `/health-engagement-series/why-we-need-a-health-engagement-platform-now/` | `/insights/playbook/half-trillion-problem-kenya-health-spending/` | 301 | Series Article 1 |
| `/health-engagement-series/most-kenyan-households-are-one-medical-crisis-away-from-the-auctioneers-hammer-heres-why-thats-your-problem/` | `/insights/playbook/one-medical-crisis-kenyan-households-financial-resilience/` | 301 | Series Article 2 |
| `/health-engagement-playbook/empowering-africas-health-and-wellness-providers/` | `/insights/playbook/empowering-africas-health-wellness-providers/` | 301 | WordPress category-path URL |
| `/category/health-engagement-series/` | `/insights/` | 301 | WP category archive |
| `/category/health-engagement-playbook/` | `/insights/playbook/` | 301 | WP category archive |
| `/category/employers-n-hr/` | `/insights/employers-hr/` | 301 | WP category archive |
| `/category/payers-n-schemes/` | `/insights/payers-schemes/` | 301 | WP category archive |
| `/category/providers/` | `/insights/playbook/` | 301 | WP category archive |
| `/author/kizito-makatiani/` | `/insights/` | 301 | WP author archive |
| `/author/eunice-muthoni/` | `/insights/` | 301 | WP author archive |

---

## WordPress Admin & System URLs (Block)

These should return 410 Gone or redirect to home — prevent WordPress admin exposure:

| Source | Destination | Type |
|--------|-------------|------|
| `/wp-admin/` | `/` | 301 |
| `/wp-login.php` | `/` | 301 |
| `/wp-content/` | `/` | 301 |
| `/xmlrpc.php` | `/` | 301 |
| `/feed/` | `/insights/` | 301 |
| `/wp-json/` | `/` | 301 |

---

## Feed & XML Redirects

| Source | Destination | Type |
|--------|-------------|------|
| `/feed/` | `/insights/` | 301 |
| `/sitemap.xml` | `/sitemap.xml` | 200 (Next.js generates this) |
| `/robots.txt` | `/robots.txt` | 200 (Next.js generates this) |

---

## next.config.js Implementation Block

Copy-paste ready. Add to `next.config.js` redirects array:

```js
// Home variants
{ source: '/home/', destination: '/', permanent: true },
{ source: '/home1/', destination: '/', permanent: true },
{ source: '/home2/', destination: '/', permanent: true },
{ source: '/home3/', destination: '/', permanent: true },
{ source: '/home4/', destination: '/', permanent: true },
{ source: '/home5/', destination: '/', permanent: true },

// About variants
{ source: '/about-3/', destination: '/about/', permanent: true },
{ source: '/about-4/', destination: '/about/', permanent: true },
{ source: '/about-6/', destination: '/about/', permanent: true },
{ source: '/about21/', destination: '/about/', permanent: true },
{ source: '/about1h12/', destination: '/about/', permanent: true },

// Solutions
{ source: '/our-solutions/', destination: '/solutions/', permanent: true },
{ source: '/zimasa-health-engagement-platform/', destination: '/solutions/zhep/', permanent: true },
{ source: '/zhep/', destination: '/solutions/zhep/', permanent: true },
{ source: '/payers-solution/', destination: '/insurers-tpas/', permanent: true },
{ source: '/gym-management/', destination: '/solutions/', permanent: true },
{ source: '/care-disease-management/', destination: '/solutions/', permanent: true },
{ source: '/hr-solution/', destination: '/employers/', permanent: true },

// Who We Help
{ source: '/who-we-serve/', destination: '/who-we-help/', permanent: true },
{ source: '/for-employers/', destination: '/who-we-help/', permanent: true },
{ source: '/for-payers/', destination: '/insurers-tpas/', permanent: true },
{ source: '/for-providers/', destination: '/healthcare-providers/', permanent: true },

// Contact & Demo
{ source: '/contact/', destination: '/contact-us/', permanent: true },
{ source: '/contact3/', destination: '/contact-us/', permanent: true },
{ source: '/demo/', destination: '/book-demo/', permanent: true },
{ source: '/request-demo/', destination: '/book-demo/', permanent: true },
// /get-started/ is a live Phase 1 page — no redirect

// Legal
{ source: '/privacy-policy/', destination: '/privacy-centre/', permanent: true },
{ source: '/terms-of-service/', destination: '/terms/', permanent: true },

// Blog — hub
{ source: '/blog/', destination: '/insights/', permanent: true },

// Blog — /insights/ path variants (old WordPress permalink style)
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
  destination: '/insights/playbook/empowering-africas-health-wellness-providers/',
  permanent: true,
},

// Blog — WordPress category-path URLs (actual WP canonical URLs)
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
  destination: '/insights/playbook/empowering-africas-health-wellness-providers/',
  permanent: true,
},

// WordPress category and author archives
{ source: '/category/health-engagement-series/', destination: '/insights/', permanent: true },
{ source: '/category/health-engagement-playbook/', destination: '/insights/playbook/', permanent: true },
{ source: '/category/employers-n-hr/', destination: '/insights/employers-hr/', permanent: true },
{ source: '/category/payers-n-schemes/', destination: '/insights/payers-schemes/', permanent: true },
{ source: '/category/providers/', destination: '/insights/playbook/', permanent: true },
{ source: '/author/kizito-makatiani/', destination: '/insights/', permanent: true },
{ source: '/author/eunice-muthoni/', destination: '/insights/', permanent: true },

// WordPress system URLs
{ source: '/wp-admin/', destination: '/', permanent: true },
{ source: '/wp-login.php', destination: '/', permanent: true },
{ source: '/wp-content/:path*', destination: '/', permanent: true },
{ source: '/xmlrpc.php', destination: '/', permanent: true },
{ source: '/wp-json/:path*', destination: '/', permanent: true },
{ source: '/feed/', destination: '/insights/', permanent: true },
```

---

## Pre-Launch Redirect Testing Checklist

Before DNS cutover, verify a sample of redirects manually:

- [ ] `/home1/` → `/` (301)
- [ ] `/about-3/` → `/about/` (301)
- [ ] `/contact/` → `/contact-us/` (301)
- [ ] `/book-demo/` → `/book-demo/` (200, not looping)
- [ ] `/privacy-policy/` → `/privacy-centre/` (301)
- [ ] `/wp-admin/` → `/` (301, not 404)
- [ ] Old blog post URL → New blog URL (301)
- [ ] `/insights/` → `/insights/` (200)
- [ ] `/sitemap.xml` → 200 with valid XML
- [ ] `/robots.txt` → 200 with valid content

Tool: `curl -I https://www.zimasahealth.com/home1/` — should return `HTTP/2 301` and `location: https://www.zimasahealth.com/`
