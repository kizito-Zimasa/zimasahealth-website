# SEO Specification — Phase 1
**Version**: 1.2  
**Date**: May 2026  
**Status**: LOCKED  
**Owner**: Dalton (implementation) · Founder (content approvals)

> Single source of truth for all SEO implementation decisions. Cross-references `02_Site-Map.md` (metadata defaults), `03_Redirects.md` (301 map), and `05_Technical-Spec.md` (structured data code).

---

## 1. Migration SEO Priority

The primary SEO risk at go-live is **losing ranking equity** from the WordPress site during the transition. Every decision in this document is weighted toward preservation first, improvement second.

**Preservation checklist (must pass before DNS cutover):**
- [ ] All WordPress URLs return 301 to new URLs (see `03_Redirects.md`)
- [ ] `sitemap.xml` is live and submitted to Google Search Console before cutover
- [ ] Google Search Console property verified on Vercel URL before DNS switch
- [ ] No indexed WordPress URLs return 404 on day one

---

## 2. URL Structure

**Canonical rule:** All URLs use a trailing slash. No mixed variants.

```
✓  https://www.zimasahealth.com/about/
✗  https://www.zimasahealth.com/about
```

**www vs non-www:** `www` is canonical. Vercel redirects bare domain to `www` — confirm this is configured before go-live.

**Protocol:** HTTPS only. Vercel enforces this by default.

**Canonical tags:** Next.js App Router sets the canonical automatically via `metadataBase`. Verify no duplicate canonicals are generated for blog category pages.

---

## 3. Page Titles

**Pattern:** `[Page Title] | Zimasa`  
**Home page:** `Zimasa | Health Engagement OS for Payers & Employers` (no template suffix)

**Rules:**
- 50–65 characters including the `| Zimasa` suffix
- Primary keyword near the front
- No keyword stuffing
- Each page title must be unique

**Title targets per page:**

| Page | Title | Characters |
|------|-------|------------|
| Home | `Zimasa \| Health Engagement OS for Payers & Employers` | 54 |
| Solutions Hub | `Solutions — ZHEP & ZPS Health Engagement Platforms \| Zimasa` | 62 |
| ZHEP | `ZHEP — Member Health Engagement Platform \| Zimasa` | 51 |
| ZPS | `ZPS — Zimasa Payer Solution for Insurers & TPAs \| Zimasa` | 57 |
| Payers (audience) | `Insurers & TPAs — Health Engagement That Moves the Needle \| Zimasa` | 65 |
| Employers | `Employers — Workforce Wellness That Gets Used \| Zimasa` | 55 |
| Members / Zimasa Go | `Zimasa Go — Free Health Engagement for Members \| Zimasa` | 57 |
| Get Started | `Get Started Free — Zimasa Go for Members & Employers \| Zimasa` | 63 |
| Healthcare Providers | `Healthcare Providers — Join the Zimasa Network \| Zimasa` | 57 |
| Who We Help | `Who We Help — Payers, Employers & Providers \| Zimasa` | 54 |
| About | `About Zimasa — Built for Africa's Health Engagement Challenge` | 61 |
| Insights Hub | `Insights — Health Engagement Playbook \| Zimasa` | 48 |
| Book Demo | `Book a Demo — See ZHEP in Action \| Zimasa` | 44 |
| Contact Us | `Contact Us — Zimasa` | 20 |
| Privacy Centre | `Privacy Centre — Data Protection & Security \| Zimasa` | 54 |
| Terms | `Terms of Service \| Zimasa` | 26 |

---

## 4. Meta Descriptions

**Length:** 140–160 characters  
**Purpose:** Improve click-through rate from search results — not a ranking signal  
**Rule:** Every page must have a unique meta description. Never duplicate.

**Description targets per page:**

| Page | Meta Description |
|------|-----------------|
| Home | Built for Africa. White-label ready. Measurable results. The Health Engagement OS connecting payers and employers to a vetted healthcare provider network. |
| Solutions Hub | ZHEP and ZPS: Zimasa's two health engagement platforms built for African payers and employers. White-label ready, PHI-avoidant, measurable in 90 days. |
| ZHEP | ZHEP is Zimasa's member-facing Health Engagement OS. Four health tracks, verified Active Days, community and rewards engines. White-label ready for payers and employers. |
| ZPS | The Zimasa Payer Solution gives health schemes and TPAs 30/60/90-day cohort dashboards, white-label member programmes, and renewal-ready engagement data — without PHI. |
| Payers (audience) | Zimasa gives health insurers, TPAs, and medical schemes measurable member engagement in 90 days. Cohort dashboards, white-label programmes, PHI-avoidant architecture. |
| Employers | Zimasa helps HR teams drive workforce wellness with verified Active Days. Start free with Zimasa Go — no procurement needed. Upgrade to the full programme when ready. |
| Members / Zimasa Go | Zimasa Go is free for members and employees. Track steps, join squads, compete in challenges, and earn rewards. Start in under five minutes — no employer needed. |
| Get Started | Sign up for Zimasa Go — free for individual members. HR teams can also register their organisation and get a free employer-lite dashboard. No credit card required. |
| Healthcare Providers | Join the Zimasa vetted provider network. Receive verified member referrals from payer and employer programmes. Gyms, dietitians, therapists, physios, and labs welcome. |
| Who We Help | Zimasa serves health insurers and TPAs, employers and HR teams, and healthcare providers across East Africa. See how each buyer benefits from the ZHEP platform. |
| About | Zimasa is a Nairobi-based health engagement technology company. We build the engagement infrastructure that connects payers, employers, and members to measurable health outcomes. |
| Insights Hub | The Zimasa Insights hub. Practical guidance on health engagement strategy for payers, schemes, employers, and HR teams across East Africa. |
| Book Demo | Book a 30-minute demo of the Zimasa Health Engagement OS. We'll show you the platform, a sample 90-day programme design, and your first activation forecast. |
| Contact Us | Get in touch with the Zimasa team. Sales inquiries, provider network applications, support questions, and media requests. |
| Privacy Centre | Zimasa's privacy policy, data protection practices, and security trust information. KDPA-compliant. PHI-avoidant architecture. |
| Terms | Terms of service for zimasahealth.com and the Zimasa Health Engagement Platform. |

---

## 5. Primary Keywords Per Page

One primary keyword per page. Used in: title, H1, first 100 words, at least one subheading, meta description.

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Home | health engagement platform Africa | health engagement OS, payer wellness platform |
| Solutions Hub | health engagement solutions | ZHEP platform, payer engagement |
| ZHEP | member health engagement platform | health engagement OS, active days, wellness platform |
| ZPS | payer health engagement solution | Zimasa Payer Solution, TPA health programme, medical scheme engagement |
| Payers (audience) | health engagement for insurers Kenya | payer wellness, health scheme activation, TPA engagement platform |
| Employers | workforce wellness programme Kenya | employee health engagement, Zimasa Go employers |
| Members / Zimasa Go | Zimasa Go free health app | free wellness tracker, employee wellness free, health engagement free |
| Get Started | Zimasa Go free sign-up | free member health app, employer wellness free |
| Healthcare Providers | healthcare provider network Kenya | join provider network, wellness provider referrals |
| Who We Help | health engagement for payers employers | who zimasa helps, health scheme engagement |
| About | health engagement technology Africa | Zimasa about, health OS Kenya |
| Insights Hub | health engagement playbook | health engagement strategy Africa |
| Book Demo | book health engagement demo | ZHEP demo, Zimasa demo |

**Blog posts — keyword targets:**

| Post | Primary Keyword |
|------|----------------|
| Half Trillion Problem | Kenya healthcare spending prevention |
| One Medical Crisis | Kenyan household medical financial risk |
| Empowering Providers | health wellness providers Africa platform |
| From Processing Claims | health engagement insurance Africa |
| Introducing Zimasa | health engagement operating system Africa |

---

## 6. Heading Structure

**Rule:** One `<h1>` per page. It must contain the primary keyword or a natural variant.

`<h1>` comes from the hero headline in each page component — not the `<title>` tag.

**H1 targets per page:**

| Page | H1 |
|------|-----|
| Home | Turn Wellness Spending Into Verified Active Days |
| Solutions Hub | Engagement Infrastructure for Health Buyers |
| ZHEP | The Engagement OS Your Members Will Actually Use |
| ZPS | Engagement Data You Can Use at Renewal |
| Payers (audience) | Your Members Can Be Activated. Here Is the Evidence. |
| Employers | Workforce Wellness That Actually Gets Used |
| Members / Zimasa Go | Start Free. Build Active Days. Bring Your Squad. |
| Get Started | Start Free. Track Progress. Build Habits. |
| Healthcare Providers | Receive Members Who Are Ready to Engage |
| Who We Help | Built for the People Making Population Health Decisions |
| About | We Changed What We Were Building |
| Insights Hub | The Health Engagement Playbook |
| Book Demo | Book Your 30-Minute Demo |
| Contact Us | Get in Touch |

**Subheading rules:**
- `h2` for major sections
- `h3` for sub-sections within a major section
- `h4` and below for component-level labels (card titles, etc.) — these are presentational, not structural
- No skipping levels (no `h1` → `h3`)

---

## 7. Open Graph & Twitter Cards

Applied via root `layout.tsx`. Individual pages override `title`, `description`, and `images`.

```ts
// Root defaults (layout.tsx)
openGraph: {
  type: 'website',
  locale: 'en_KE',
  url: 'https://www.zimasahealth.com',
  siteName: 'Zimasa',
  images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
},
twitter: {
  card: 'summary_large_image',
  site: '@zimasahealth',
},
```

**OG image requirements:**
- Size: 1200×630 px (enforced — do not use other sizes)
- Format: JPG preferred (smaller file, faster load)
- Text overlay: keep text minimal — images render small in feeds
- Required images: one per page + one per blog post
- Fallback: `/images/og-default.jpg` used when no page-specific image exists

**OG image file list (required at go-live):**

| File | Used by |
|------|---------|
| `/images/og-default.jpg` | Fallback for all pages |
| `/images/og-home.jpg` | Home |
| `/images/og-solutions.jpg` | Solutions Hub |
| `/images/og-zhep.jpg` | ZHEP |
| `/images/og-insurers-tpas.jpg` | Insurers & TPAs (audience page) |
| `/images/og-zps.jpg` | ZPS product page |
| `/images/og-zimasa-go.jpg` | Members / Zimasa Go |
| `/images/og-employers.jpg` | Employers |
| `/images/og-get-started.jpg` | Get Started |
| `/images/og-providers.jpg` | Healthcare Providers |
| `/images/og-who-we-help.jpg` | Who We Help |
| `/images/og-about.jpg` | About |
| `/images/og-insights.jpg` | Insights Hub |
| `/images/og-book-demo.jpg` | Book Demo |
| `/images/og-contact.jpg` | Contact Us |
| `/images/blog/half-trillion-problem-hero.jpg` | Blog post (resize to 1200×630) |
| `/images/blog/one-medical-crisis-hero.jpg` | Blog post (resize to 1200×630) |
| `/images/blog/empowering-providers-hero.jpg` | Blog post (resize to 1200×630) |
| `/images/blog/from-processing-claims-hero.jpg` | Blog post (resize to 1200×630) |
| `/images/blog/why-zimasa-hero.png` | Blog post (resize to 1200×630) |

---

## 8. Structured Data (JSON-LD)

### Organization (Home page only)

```tsx
// app/page.tsx
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zimasa',
  url: 'https://www.zimasahealth.com',
  logo: 'https://www.zimasahealth.com/images/logo.svg',
  description: 'Health Engagement OS for payers and employers across East Africa.',
  foundingDate: '2024',
  areaServed: ['KE', 'TZ', 'UG'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254710241892',
    email: 'support@zimasahealth.com',
    contactType: 'customer service',
    areaServed: 'KE',
  },
  sameAs: [
    'https://www.linkedin.com/company/zimasa',
  ],
}
```

### BreadcrumbList (All pages except Home)

```tsx
// Example: /solutions/zhep/
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zimasahealth.com/' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.zimasahealth.com/solutions/' },
    { '@type': 'ListItem', position: 3, name: 'ZHEP', item: 'https://www.zimasahealth.com/solutions/zhep/' },
  ],
}
```

Build a `Breadcrumb` component that accepts a `items` prop and generates both the visible UI element and the JSON-LD script tag.

### Article (Blog posts only)

```tsx
// app/insights/[category]/[slug]/page.tsx
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: frontmatter.title,
  description: frontmatter.description,
  image: `https://www.zimasahealth.com${frontmatter.ogImage}`,
  datePublished: frontmatter.publishedAt,
  dateModified: frontmatter.modifiedAt ?? frontmatter.publishedAt,
  author: {
    '@type': 'Person',
    name: frontmatter.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Zimasa',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.zimasahealth.com/images/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://www.zimasahealth.com/insights/${frontmatter.category}/${frontmatter.slug}/`,
  },
}
```

---

## 9. Sitemap

Generated automatically by `next-sitemap` on every Vercel build.

```js
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.zimasahealth.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  // Blog posts are SSG — they appear automatically via generateStaticParams
}
```

**Sitemap priorities (default next-sitemap behaviour is fine — do not override):**
Next-sitemap assigns `priority: 1.0` to the home page and `0.7` to other pages by default. This is acceptable for Phase 1.

**Submit to Google Search Console** after first Vercel deploy:
1. Verify the property at `https://www.zimasahealth.com`
2. Submit `https://www.zimasahealth.com/sitemap.xml`
3. Confirm all 16+ URLs appear in the sitemap

---

## 10. robots.txt

Generated by `next-sitemap`. The default output is correct — allow all crawlers on all pages.

```
User-agent: *
Allow: /

Sitemap: https://www.zimasahealth.com/sitemap.xml
```

**Do not add `Disallow` rules** unless Dalton creates a staging environment that shares the domain (it shouldn't — use a separate Vercel preview URL for staging).

---

## 11. Image SEO

**Alt text rules:**

| Image type | Alt text |
|-----------|----------|
| Hero images | Describe the scene meaningfully: "African professionals in a health engagement meeting" |
| Product screenshots | Describe what's shown: "ZHEP 30-day activation dashboard" |
| Icons | Empty alt (`alt=""`) — they are decorative |
| Logo | "Zimasa" |
| Blog post images | Describe the image; incorporate post topic where natural |

**Never:**
- Leave `alt` undefined (accessibility failure + missed SEO signal)
- Use `alt="image"` or `alt="photo"`
- Keyword-stuff alt text

**File naming:** Use descriptive hyphenated names (`health-engagement-dashboard.jpg`, not `IMG_4892.jpg`). File names are a minor signal.

**Format:** WebP via Next.js `<Image>` — configured in `next.config.js`:
```js
images: { formats: ['image/webp'] }
```

**Dimensions:** Always specify `width` and `height` on `<Image>` — prevents layout shift (CLS) and is required by Next.js anyway.

---

## 12. Internal Linking

Internal links pass ranking signals between pages. Every page should link to at least 2 other pages.

**Required internal links:**

| From | To | Link text |
|------|----|-----------|
| Home | `/solutions/zhep/` | "Explore ZHEP" |
| Home | `/insurers-tpas/` | "See Payers Solution" |
| Home | `/book-demo/` | "Book a Demo" |
| Solutions Hub | `/solutions/zhep/` | "Explore ZHEP" |
| Solutions Hub | `/insurers-tpas/` | "See Payers Solution" |
| ZHEP | `/insurers-tpas/` | "See Payers Solution" |
| ZHEP | `/book-demo/` | "Book a Demo" |
| Payers Solution | `/solutions/zhep/` | "See ZHEP Platform" |
| Payers Solution | `/book-demo/` | "Book a Demo" |
| About | `/privacy-centre/` | "Read our Privacy Centre" |
| Blog posts | `/book-demo/` | CTA in body or end of post |
| Blog posts | Relevant solution page | Contextual link in body |
| Insights Hub | All 4 category pages | Category filter tabs |

**Avoid:**
- "Click here" or "Read more" as link text — use descriptive anchor text
- More than 1 link to the same destination from the same page (unless one is a nav CTA and one is in body)

---

## 13. Core Web Vitals

Performance targets from `01_Brief.md`:

| Metric | Target | Implementation |
|--------|--------|----------------|
| LCP (Largest Contentful Paint) | < 2.5s | Preload hero image with `priority` prop on `<Image>` |
| FID / INP (Interaction to Next Paint) | < 100ms | Minimal client JS; forms submit via API route |
| CLS (Cumulative Layout Shift) | < 0.1 | Fixed image dimensions; no layout-shifting fonts |
| PageSpeed (mobile) | ≥ 90 | SSG, WebP, Lucide icons, no unused CSS |

**Hero image preload — required on all pages with a large above-the-fold image:**
```tsx
<Image src="/images/hero-bg.jpg" priority width={1440} height={600} alt="..." />
```
The `priority` prop tells Next.js to preload the image — critical for LCP.

**Font loading:** Google Fonts are imported in `globals.css` with `display=swap`. This prevents invisible text during load (FOIT) and is correct for CLS.

---

## 14. Google Search Console Setup

**Before DNS cutover:**
1. Add property `https://www.zimasahealth.com` in Search Console
2. Verify via HTML meta tag (add to `layout.tsx` temporarily) or DNS TXT record
3. Note the current impression/click data for existing WordPress pages as a baseline

**After DNS cutover:**
1. Submit `sitemap.xml`
2. Request indexing for all 16 static pages manually (speeds up re-crawl)
3. Monitor "Coverage" report for any 404s or redirect errors
4. Check "Core Web Vitals" report after 28 days of data

**30-day post-launch check:**
- All 5 blog posts appearing in index
- No 404s in Coverage report
- Old WordPress URLs showing as "Moved Permanently" (301) not "Not Found"

---

## 15. What Is Not in Scope (Phase 2)

- Keyword research and content expansion strategy
- Link building
- Local SEO (Google Business Profile for Nairobi office)
- Blog SEO beyond the 5 migrated posts
- Schema markup for `FAQPage`, `HowTo`, or `Product`
- Hreflang (multi-language — not needed until non-English content exists)
