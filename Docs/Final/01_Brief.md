# Project Brief — Phase 1
**Version**: 2.3  
**Date**: May 2026  
**Status**: LOCKED

---

## One-Line Goal

Migrate zimasahealth.com from WordPress to Next.js as a fast, AI-maintainable, payer-first marketing site featuring ZHEP, Payers Solution, Employers Solution, and Zimasa Go — live before 30 June 2026.

---

## What We Are Building

A public-facing marketing site serving three buyer segments and one direct-to-member freemium channel:

1. **Payers** (Insurers, TPAs, Health Schemes) — primary commercial target; CMO/CRO audience; highest ARR potential
2. **Employers** (HR Directors, CFOs) — workforce wellness; self-serve sign-up via Zimasa Go + full programme via demo
3. **Members** (individuals) — Zimasa Go free tier; self-serve sign-up; B2C acquisition and advocacy flywheel

Phase 1 is acquisition and conversion. The marketing site handles sign-up flows and routes to separate authenticated apps (employer dashboard, member app). No e-commerce.

---

## Phase 1 Page List — 16 static pages + dynamic blog

Navigation principle: **audience-first**. Primary nav exposes audience pages directly. Solutions dropdown carries product pages only.

**Primary navigation:**
```
[Logo]  Insurers & TPAs  Employers  Members  Providers  Solutions ▾  Insights  About  [Get Started]  [Book Demo]
```

**Solutions dropdown:** ZHEP · ZPS (two product pages only — no audience pages in dropdown)

**Static pages:**

| # | Page | URL | Purpose |
|---|------|-----|---------|
| 1 | Home | `/` | Hero, 4-card audience self-ID, solutions overview, Zimasa Go CTA |
| 2 | Insurers & TPAs | `/insurers-tpas/` | Audience/buyer page — payer outcomes; links to ZPS for product detail |
| 3 | Employers | `/employers/` | Audience/buyer page — workforce wellness outcomes; links to Zimasa Go + Book Demo |
| 4 | Members (Zimasa Go) | `/zimasa-go/` | Free member tier page — Zimasa Go features, self-serve sign-up |
| 5 | Healthcare Providers | `/healthcare-providers/` | Audience/ecosystem page — join the network |
| 6 | Solutions Hub | `/solutions/` | Hub: ZHEP + ZPS — product overview |
| 7 | ZHEP | `/solutions/zhep/` | Product page — cross-cutting engagement platform |
| 8 | ZPS | `/solutions/zps/` | Product page — Zimasa Payer Solution; CMO/CRO ROI, 30/60/90 dashboards |
| 9 | About | `/about/` | Mission, founder story, credentials |
| 10 | Insights Hub | `/insights/` | Blog listing, 4 category filters |
| 11 | Get Started | `/get-started/` | Self-serve conversion: member path + employer-lite path |
| 12 | Book Demo | `/book-demo/` | Enterprise demo request form |
| 13 | Contact Us | `/contact-us/` | Sales/general inquiry form |
| 14 | Who We Help | `/who-we-help/` | Buyer personas overview — footer link only, not in primary nav |
| 15 | Privacy Centre | `/privacy-centre/` | Privacy policy, compliance, security trust |
| 16 | Terms | `/terms/` | Terms of service |

**Dynamic pages:**

| Route | Purpose |
|-------|---------|
| `/insights/[category]/` | Category blog pages (4 categories) |
| `/insights/[category]/[slug]/` | Individual blog posts — 5 migrated at launch |

---

## Zimasa Go — Freemium Channel (Phase 1)

Zimasa Go is the free-to-start member tier and the primary Q2 lead generation mechanism.

**Public name**: Zimasa Go  
**Internal tier code**: GO / F0  
**Dedicated page**: `/zimasa-go/` (nav label: "Members")  
**Sign-up URL**: `/get-started/`

**What GO includes:**
- Steps and basic activity tracking
- Squads (3–5 people)
- Public challenges and leaderboards
- Share cards

**What GO excludes** (requires paid programme):
- Employer admin and HR dashboard
- Marketplace provider access
- Allowances or subsidies
- SLAs
- Private company leagues

**Funnel:** awareness → sign-up → first Active Day → squad formation → sustained engagement → employer or payer referral

**Employer lite (Model 3):** Employers who self-sign-up at `/get-started/` receive an employer-lite dashboard (see `08_Employer-Dashboard-Spec.md`). The dashboard is a separate authenticated app at `dashboard.zimasahealth.com` — not part of the marketing site. The marketing site captures the sign-up and routes to the dashboard.

---

## What Is Explicitly Out of Scope (Phase 2)

- `/solutions/care-management/` — Care & Disease Management
- `/solutions/gym-movement/` — Gym & Movement Management
- `/solutions/group-memberships/` — Group Membership Management
- `/solutions/his-integration/` — HIS Integration
- Authenticated member portal (member dashboard — separate app, separate roadmap)
- WooCommerce / e-commerce (18 products from WordPress)
- Blog expansion: author pages, multi-author features, advanced tagging

---

## Stack (All Locked)

| Layer | Decision | Notes |
|-------|----------|-------|
| Framework | Next.js 14+ App Router | SSG for all marketing pages |
| Styling | Tailwind CSS | Custom tokens in `04_Design-Tokens.md` |
| Content | Flat MDX files in `/content/` | No CMS; Claude Code edits directly |
| Hosting | Vercel (free tier) | Auto-deploy from GitHub main branch |
| Forms | Resend | Email to sales@zimasahealth.com |
| Analytics | Google Analytics 4 | Tag via `@next/third-parties` |
| Cookie consent | Cookieyes or Osano (KDPA-compliant) | Free tier acceptable |
| Images | Next.js `<Image>` + WebP | See `06_Brand-Style-Guide.md` §12 |
| Icons | Lucide React | Replaces Font Awesome; tree-shakeable |
| Version control | GitHub | Dalton merges; Claude Code commits to feature branches |

---

## Content Management Model

All content lives as MDX files in the repository. No external CMS.

```
/content/
  pages/
    home.mdx
    solutions-hub.mdx
    zhep.mdx
    payers.mdx
    healthcare-providers.mdx
    who-we-help.mdx
    about.mdx
    insights-hub.mdx
    book-demo.mdx
    contact-us.mdx
    privacy-centre.mdx
    terms.mdx
  blog/
    [category]/
      [slug].mdx
```

To update copy: edit the relevant MDX file and commit. Next.js rebuilds on Vercel automatically. Claude Code can update any file via a single prompt.

---

## Forms

Three forms. Book Demo and Contact Us use Resend for email delivery. Get Started routes to the external onboarding app.

| Form | Destination | Fields | Success action |
|------|-------------|--------|----------------|
| Book Demo | sales@zimasahealth.com | Name, Email, Company, Phone, Role, Solution Interest, Timeline | Thank-you message on page; no redirect |
| Contact Us | support@zimasahealth.com | Name, Email, Company, Message, Inquiry Type | Thank-you message on page |
| Get Started — Member | Redirect to member onboarding app | Name, Email, (optional) employer code | Redirect to app.zimasahealth.com |
| Get Started — Employer | Resend to growth@zimasahealth.com + redirect to dashboard | Org name, Email, Workforce size | Redirect to dashboard.zimasahealth.com |

No Calendly integration in Phase 1. Form fields defined in `Content/Get-Started.md`, `Content/Book-Demo.md`, and `Content/Contact-Us.md`.

---

## Analytics Requirements

| Event | Trigger | GA4 Parameter |
|-------|---------|---------------|
| Page view | Every page load | Auto (GA4 default) |
| Demo form submit | Book Demo form success | `event: 'form_submit', form_id: 'book_demo'` |
| Contact form submit | Contact Us form success | `event: 'form_submit', form_id: 'contact_us'` |
| Member sign-up | Get Started — member path success | `event: 'signup', type: 'member', tier: 'go'` |
| Employer sign-up | Get Started — employer path success | `event: 'signup', type: 'employer', tier: 'lite'` |
| CTA click | Any primary CTA button | `event: 'cta_click', cta_label: '[button text]', page: '[url]'` |
| Blog read | Blog post scroll >75% | `event: 'article_read', article_slug: '[slug]'` — requires a client-side scroll-tracker component (`'use client'`) on blog post pages; add to build scope |

UTM parameters preserved on all form submissions (source/medium/campaign from URL).

---

## SEO Requirements

- Canonical URLs on all pages (no trailing slash variants)
- `robots.txt`: allow all; no staging URLs in production build
- `sitemap.xml`: auto-generated via `next-sitemap`
- Structured data: `Organization` on home; `BreadcrumbList` on all pages; `Article` on blog posts
- Open Graph tags: all pages (title, description, image 1200×630)
- Twitter Card: `summary_large_image` on all pages
- Blog post dates: `datePublished` and `dateModified` in ISO 8601

---

## Performance Targets

| Metric | Target | How |
|--------|--------|-----|
| Google PageSpeed (mobile) | ≥ 90 | SSG, WebP images, Lucide icons, no unused CSS |
| Largest Contentful Paint | < 2.5s | Hero image preload, critical CSS inline |
| First Input Delay | < 100ms | Minimal client JS; forms submit via API route |
| Cumulative Layout Shift | < 0.1 | Fixed image dimensions; no layout-shifting fonts |

---

## Security Requirements

- HTTPS enforced (Vercel default)
- Content Security Policy (CSP) headers via `next.config.js`
- No secrets in repository (env vars via Vercel dashboard)
- No PHI collected, stored, or referenced on any page
- Form submissions: server-side API route — no client-side API keys exposed
- KDPA cookie consent before GA4 fires (implement via Google Consent Mode — script order alone is insufficient)
- All user inputs sanitized/escaped before insertion into email HTML
- Honeypot field on all forms; server-side rate limiting on all API routes
- Get Started form: server-side input validation + maximum length limits on all fields

---

## Roles

| Person | Responsibility |
|--------|---------------|
| Founder | All content approvals; copy sign-off; go-live decision |
| Dalton (CTO) | All code, merges, deploys; Vercel + GitHub setup; Technical Spec owner |
| Claude Code | Scaffold, component build, content migration, MDX editing — all under Dalton review |

Merges to `main` branch: Dalton only. Claude Code works on feature branches.

---

## Timeline

| Week | Dates | Milestone |
|------|-------|-----------|
| 1 | May 5–9 | Repo setup, Design Tokens, component scaffold |
| 2–3 | May 12–23 | All 14 static pages built; content migrated; forms wired |
| 4 | May 26–Jun 6 | Polish, responsive QA, redirects, analytics, Zimasa Go sign-up flow |
| 5 | Jun 9–13 | Pre-launch checklist complete; staging sign-off |
| Go-live | Jun 16–30 | DNS cutover to Vercel |

---

## Compliance

- **Kenya Data Protection Act 2019**: KDPA-compliant consent banner before any tracking fires. Privacy Centre documents all data handling.
- **No PHI**: Marketing site does not collect, reference, or store protected health information.
- **Language compliance**: All copy follows AI-OS Operating Canon v1.0 — zero deprecated terms.
- **Pricing**: Not quoted on the public site. CTAs direct to demo booking or free sign-up (Zimasa Go) only.
