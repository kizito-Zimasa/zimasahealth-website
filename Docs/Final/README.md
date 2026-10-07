# Zimasa Website — Phase 1 Final Specification
**Status**: LOCKED — Ready for build  
**Date**: May 2026  
**Go-live target**: Before 30 June 2026

---

## How to Use This Folder

This is the single source of truth for the Phase 1 website build. Every file here is approved and locked. Do not edit without Founder sign-off. Do not reference documents outside this folder during development.

**Build order**: Read 01 → 06 before touching Content/. Build in the order below.

---

## Document Index

| # | File | Owner | Purpose | Status |
|---|------|-------|---------|--------|
| — | `README.md` | Dalton | This file — index and orientation | ✅ Done |
| 01 | `01_Brief.md` | Founder | Scope, decisions, constraints, go-live gate | ✅ Locked |
| 02 | `02_Site-Map.md` | Dalton | URL structure, routing, navigation | ✅ Locked |
| 03 | `03_Redirects.md` | Dalton | WordPress → Next.js 301 redirect map | ✅ Locked |
| 04 | `04_Design-Tokens.md` | Dalton | Tailwind config — colours, type, spacing | ✅ Locked |
| 05 | `05_Technical-Spec.md` | Dalton | Stack, architecture, component patterns | ✅ Locked |
| 06 | `06_Brand-Style-Guide.md` | Founder | Visual identity, tone, usage rules | ✅ Locked |
| 07 | `07_SEO-Spec.md` | Dalton | Titles, descriptions, structured data, CWV, GSC setup | ✅ Locked |
| 08 | `08_Employer-Dashboard-Spec.md` | Dalton | Model 3 employer-lite dashboard spec (separate authenticated app) | ✅ Locked |
| 09 | `09_Imagery-Spec.md` | Dalton | Image inventory, sourcing strategy, OG system, priority assets, file structure | ✅ Locked |

### Content Files (one per page)

| File | URL | Word Count | Priority |
|------|-----|-----------|----------|
| `Content/Home.md` | `/` | ~2,000 | P0 |
| `Content/Solutions-Hub.md` | `/solutions/` | ~1,000 | P0 |
| `Content/ZHEP.md` | `/solutions/zhep/` | ~1,500 | P0 |
| `Content/Payers.md` | `/insurers-tpas/` | ~2,000 | P0 | Audience page |
| `Content/ZPS.md` | `/solutions/zps/` | ~1,500 | P0 | Product page |
| `Content/Employers.md` | `/employers/` | ~1,500 | P0 | Audience page |
| `Content/Zimasa-Go.md` | `/zimasa-go/` | ~1,200 | P0 | Members page |
| `Content/Get-Started.md` | `/get-started/` | ~600 | P0 | |
| `Content/Healthcare-Providers.md` | `/healthcare-providers/` | ~1,000 | P1 | |
| `Content/Who-We-Help.md` | `/who-we-help/` | ~1,500 | P1 |
| `Content/About.md` | `/about/` | ~1,200 | P1 |
| `Content/Insights-Hub.md` | `/insights/` | ~500 | P1 |
| `Content/Book-Demo.md` | `/book-demo/` | ~400 | P0 |
| `Content/Contact-Us.md` | `/contact-us/` | ~400 | P1 |
| `Content/Privacy-Centre.md` | `/privacy-centre/` | ~1,500 | P1 |
| `Content/Terms.md` | `/terms/` | ~1,200 | P1 |

### Blog Files

| File | Purpose |
|------|---------|
| `Blog/Taxonomy.md` | Category definitions, URL pattern, MDX template, full post inventory |
| `Blog/Images/` | 6 post images downloaded from WordPress — copy to `/public/images/blog/` |
| `Blog/Posts/playbook-half-trillion-problem.mdx` | Series Article 1 (Dec 2, 2025) |
| `Blog/Posts/playbook-one-medical-crisis.mdx` | Series Article 2 (Dec 10, 2025) |
| `Blog/Posts/playbook-empowering-providers.mdx` | Standalone (Dec 15, 2025) |
| `Blog/Posts/zimasa-updates-from-processing-claims.mdx` | Series Article 3 (Dec 17, 2025) |
| `Blog/Posts/zimasa-updates-introducing-zimasa-engagement-os.mdx` | Series Article 4 (Jan 6, 2026) |

---

## Decisions Locked (Do Not Reopen)

| Decision | Answer |
|----------|--------|
| Framework | Next.js App Router (SSG) |
| Styling | Tailwind CSS |
| Content | Flat Markdown/MDX in GitHub |
| Hosting | Vercel (free tier) |
| Forms | Resend (email) |
| Analytics | GA4 |
| Phase 1 solutions | ZHEP + Payers Solution + Employers Solution (3) |
| Zimasa Go | Phase 1 freemium channel — /get-started/ — member + employer-lite |
| Extended solutions | Phase 2 (Care, Gym, Group, HIS) |
| Blog tagging | 4 categories + audience filter (Phase 1) |
| CMS | No CMS — Claude Code edits MDX directly |

---

## Language Rules (Non-Negotiable)

All copy in this folder complies with AI-OS Operating Canon v1.0.

| Use | Never Use |
|-----|-----------|
| Tracks (MOVE, NOURISH, CARE, LEARN) | Pillars |
| Community Engine, Rewards Engine | CONNECT, PERKS, Wrappers |
| Subscription, engagement, allowance | Premium, policy, coverage, claims |
| Active Days | Any clinical metric |
| Programme | ~~Program~~ (spelling) |

---

## Go-Live Gate (All must pass before DNS cutover)

- [ ] All 16 pages live with Founder-approved copy
- [ ] Zero 404s — all redirects in `03_Redirects.md` tested (full list, not just sample)
- [ ] GA4 tracking confirmed firing on all pages
- [ ] GA4 confirmed NOT firing before cookie consent is accepted (test in GA4 DebugView)
- [ ] Book Demo form tested end-to-end (submission → email received at sales@)
- [ ] Contact Us form tested end-to-end (submission → email received at support@)
- [ ] Get Started — member path tested (→ app.zimasahealth.com redirect)
- [ ] Get Started — employer path tested (email at growth@ + → dashboard.zimasahealth.com redirect)
- [ ] Form spam protection tested: honeypot discard confirmed; rate limiting middleware live
- [ ] UTM parameters appear in all form submission emails (test with `?utm_source=test`)
- [ ] KDPA cookie consent banner live
- [ ] Google PageSpeed ≥ 90 (mobile)
- [ ] All copy audited — zero deprecated terms (no Pillars, Wrappers, CONNECT, PERKS, "Health Outcomes" tagline)
- [ ] Responsive verified: mobile, tablet, desktop
- [ ] All Tier 1 imagery sourced, approved, and placed — see `09_Imagery-Spec.md` pre-launch checklist
- [ ] All product mockups reviewed for real data — zero PHI or identifiable information visible
- [ ] Founder sign-off on staging URL

---

**Questions**: Dalton (technical) · Founder (content/scope)
