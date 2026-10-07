# Site Map & URL Structure
**Version**: 1.2  
**Date**: May 2026  
**Status**: LOCKED

---

## Navigation Principle

> **Audience pages first. Solution pages second. Conversion pages always visible.**

Primary nav exposes audience pages directly. Solutions dropdown carries product pages only. Logo returns to home — "Home" does not occupy a nav slot.

---

## URL Hierarchy

```
zimasahealth.com/
│
│  ── AUDIENCE PAGES (primary nav) ──────────────────────────────
├── /insurers-tpas/                Audience: Insurers, TPAs & Medical Schemes
├── /employers/                    Audience: Employers & HR Teams
├── /zimasa-go/                    Audience: Members & Employees (Zimasa Go free tier)
├── /healthcare-providers/         Audience: Healthcare & Wellness Providers
│
│  ── SOLUTION PAGES (Solutions dropdown) ───────────────────────
├── /solutions/                    Solutions Hub — ZHEP + ZPS overview
│   ├── /solutions/zhep/           ZHEP — Health Engagement Platform (cross-cutting)
│   └── /solutions/zps/            ZPS — Zimasa Payer Solution (payer-specific)
│
│  ── COMPANY ────────────────────────────────────────────────────
├── /about/                        About Zimasa
├── /insights/                     Blog Hub
│   ├── /insights/playbook/        Category — Health Engagement Playbook
│   ├── /insights/payers-schemes/  Category — For Payers & Schemes
│   ├── /insights/employers-hr/    Category — For Employers & HR
│   ├── /insights/zimasa-updates/  Category — Zimasa Updates
│   └── /insights/[category]/[slug]/  Individual blog post
│
│  ── CONVERSION ─────────────────────────────────────────────────
├── /get-started/                  Self-serve: member path + employer-lite path
├── /book-demo/                    Enterprise demo request
├── /contact-us/                   Sales / general inquiry
│
│  ── SECONDARY (footer only) ────────────────────────────────────
├── /who-we-help/                  Buyer personas overview — not in primary nav
│
│  ── LEGAL ──────────────────────────────────────────────────────
├── /privacy-centre/               Privacy Policy + KDPA Compliance
└── /terms/                        Terms of Service
```

---

## Page Specifications

### Static Pages (SSG — generated at build time)

| Route | Component | Content Source | Nav Location | Notes |
|-------|-----------|---------------|-------------|-------|
| `/` | `app/page.tsx` | `content/pages/home.mdx` | Logo | 4-card audience self-ID section |
| `/insurers-tpas/` | `app/insurers-tpas/page.tsx` | `content/pages/payers.mdx` | Primary nav | Audience/buyer page |
| `/employers/` | `app/employers/page.tsx` | `content/pages/employers.mdx` | Primary nav | Audience/buyer page |
| `/zimasa-go/` | `app/zimasa-go/page.tsx` | `content/pages/zimasa-go.mdx` | Primary nav ("Members") | Zimasa Go free tier page |
| `/healthcare-providers/` | `app/healthcare-providers/page.tsx` | `content/pages/healthcare-providers.mdx` | Primary nav | Audience/ecosystem page |
| `/solutions/` | `app/solutions/page.tsx` | `content/pages/solutions-hub.mdx` | Solutions dropdown | Hub: ZHEP + ZPS |
| `/solutions/zhep/` | `app/solutions/zhep/page.tsx` | `content/pages/zhep.mdx` | Solutions dropdown | Product page |
| `/solutions/zps/` | `app/solutions/zps/page.tsx` | `content/pages/solutions/zps.mdx` | Solutions dropdown | Product page — Zimasa Payer Solution |
| `/about/` | `app/about/page.tsx` | `content/pages/about.mdx` | Primary nav | |
| `/get-started/` | `app/get-started/page.tsx` | `content/pages/get-started.mdx` | Header CTA button | Dual-path form |
| `/book-demo/` | `app/book-demo/page.tsx` | `content/pages/book-demo.mdx` | Header CTA button | Enterprise form |
| `/contact-us/` | `app/contact-us/page.tsx` | `content/pages/contact-us.mdx` | Footer | |
| `/who-we-help/` | `app/who-we-help/page.tsx` | `content/pages/who-we-help.mdx` | Footer only | Not in primary nav |
| `/privacy-centre/` | `app/privacy-centre/page.tsx` | `content/pages/privacy-centre.mdx` | Footer | |
| `/terms/` | `app/terms/page.tsx` | `content/pages/terms.mdx` | Footer | |

### Dynamic Pages (SSG with `generateStaticParams`)

| Route | Component | Content Source | Notes |
|-------|-----------|---------------|-------|
| `/insights/` | `app/insights/page.tsx` | All blog MDX files | Lists all posts |
| `/insights/[category]/` | `app/insights/[category]/page.tsx` | Filtered blog MDX | Category pages |
| `/insights/[category]/[slug]/` | `app/insights/[category]/[slug]/page.tsx` | `content/blog/[category]/[slug].mdx` | Individual post |

### API Routes (Server-side)

| Route | Handler | Purpose |
|-------|---------|---------|
| `/api/book-demo` | `app/api/book-demo/route.ts` | Form submission → Resend → sales@ |
| `/api/contact` | `app/api/contact/route.ts` | Form submission → Resend → support@ |
| `/api/get-started` | `app/api/get-started/route.ts` | Member: redirect to app. Employer: Resend → growth@ + redirect to dashboard |

---

## Navigation Structure

### Primary Navigation (Header)

```
[Logo]   Insurers & TPAs   Employers   Members   Providers   Solutions ▾   Insights   About   [Get Started]   [Book Demo]
```

**Navigation label → URL mapping:**

| Label | URL | Type |
|-------|-----|------|
| Logo | `/` | Home |
| Insurers & TPAs | `/insurers-tpas/` | Audience page |
| Employers | `/employers/` | Audience page |
| Members | `/zimasa-go/` | Audience/product page (Zimasa Go) |
| Providers | `/healthcare-providers/` | Audience page |
| Solutions ▾ | Dropdown | — |
| Insights | `/insights/` | Blog hub |
| About | `/about/` | Company page |
| Get Started | `/get-started/` | CTA button — self-serve conversion |
| Book Demo | `/book-demo/` | CTA button — enterprise conversion |

Solutions dropdown (product pages only — no audience pages):
```
┌──────────────────────────────────┐
│ ZHEP                             │
│ Health Engagement Platform       │
│ /solutions/zhep/                 │
│──────────────────────────────────│
│ ZPS                              │
│ Zimasa Payer Solution            │
│ /solutions/zps/                  │
└──────────────────────────────────┘
```

**Rule**: Do not add future solutions (Care Management, Gym/Movement, Group Memberships, HIS) to the dropdown until their pages are live. Placeholder entries make the product feel incomplete.

### Footer Navigation

```
[Logo + tagline: Turn Wellness Spending Into Verified Active Days]

Who We Serve          Solutions          Company            Contact
Insurers & TPAs       ZHEP               About              support@zimasahealth.com
Employers             ZPS                Insights           +254710241892
Members / Zimasa Go   Solutions Hub      Book Demo          [Office address]
Providers             Get Started
Who We Help

[Social icons: LinkedIn, Twitter, Facebook, Instagram]

Privacy Centre   Terms of Service   © 2026 Zimasa. All rights reserved.
```

---

## Blog URL Convention

**Pattern**: `/insights/[category-slug]/[article-slug]/`

| Category | Slug | Example URL |
|----------|------|-------------|
| Health Engagement Playbook | `playbook` | `/insights/playbook/5-behaviour-design-tactics/` |
| For Payers & Schemes | `payers-schemes` | `/insights/payers-schemes/preventing-claims-90-days/` |
| For Employers & HR | `employers-hr` | `/insights/employers-hr/why-wellness-fails/` |
| Zimasa Updates | `zimasa-updates` | `/insights/zimasa-updates/from-processing-to-preventing/` |

**Slug conventions**:
- Lowercase, hyphen-separated
- No special characters
- Max 60 characters
- Descriptive, keyword-rich

---

## Phase 2 Reserved Routes

These routes must not be used for other purposes in Phase 1. They are reserved for Phase 2 without breaking URL structure:

```
/solutions/care-management/        Care & Disease Management (Phase 2)
/solutions/gym-movement/           Gym & Movement Management (Phase 2)
/solutions/group-memberships/      Group Membership Management (Phase 2)
/solutions/his-integration/        HIS Integration (Phase 2)
/careers/                          Careers page (Phase 2)
```

---

## Metadata Defaults

Applied via `layout.tsx` root layout. Individual pages override as needed.

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://www.zimasahealth.com'),
  title: {
    default: 'Zimasa | Health Engagement OS for Payers & Employers',
    template: '%s | Zimasa',
  },
  description: 'Built for Africa. White-label ready. Measurable results. The Health Engagement OS connecting payers and employers to a vetted healthcare provider network.',
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
  robots: {
    index: true,
    follow: true,
  },
}
```

---

## `next.config.js` — Redirects

See `03_Redirects.md` for the full redirect list. Config structure:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // All entries from 03_Redirects.md go here
    ]
  },
}
```

---

## `next-sitemap.config.js`

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.zimasahealth.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
```
