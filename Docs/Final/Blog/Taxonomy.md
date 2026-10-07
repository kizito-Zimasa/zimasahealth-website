# Blog Taxonomy — Phase 1
**Version**: 1.0  
**Date**: May 2026  
**Status**: LOCKED

---

## Categories (4)

These are the four fixed categories for Phase 1. Each maps to a URL segment.

| Category Name | Slug | URL | Audience Focus |
|--------------|------|-----|---------------|
| Health Engagement Playbook | `playbook` | `/insights/playbook/` | All buyers |
| For Payers & Schemes | `payers-schemes` | `/insights/payers-schemes/` | Payers, TPAs, schemes |
| For Employers & HR | `employers-hr` | `/insights/employers-hr/` | HR directors, CFOs |
| Zimasa Updates | `zimasa-updates` | `/insights/zimasa-updates/` | All |

Category pages are SSG, generated from MDX file location. No additional CMS required.

---

## Audience Tags (Simple Filter)

Phase 1 uses a single secondary filter — audience — applied across all categories.

| Tag | Slug | Who It's For |
|-----|------|-------------|
| Payers & Schemes | `payers` | Insurers, TPAs, medical schemes |
| Employers & HR | `employers` | HR directors, benefits managers, CFOs |
| Healthcare Providers | `providers` | Practice owners, clinic leads, gym operators |

**Implementation**: Filter is applied client-side on the pre-loaded post array. No server-side filtering needed for Phase 1 volume.

**Note**: Phase 2 will add topic tags and format tags. Do not implement these in Phase 1.

---

## URL Convention

```
/insights/[category-slug]/[article-slug]/
```

**Slug rules**:
- Lowercase, hyphen-separated
- No special characters or apostrophes
- Maximum 60 characters
- Descriptive and keyword-rich
- No dates in the slug

**Examples**:
```
/insights/playbook/5-behaviour-design-tactics-that-drive-engagement/
/insights/payers-schemes/building-a-renewal-ready-engagement-report/
/insights/employers-hr/why-wellness-benefits-fail-after-week-two/
/insights/zimasa-updates/from-processing-claims-to-preventing-them/
```

---

## Article MDX Frontmatter Template

Every article in `/content/blog/[category]/[slug].mdx` must begin with this frontmatter:

```yaml
---
title: "Article Title — Keyword Rich, Under 65 Characters"
description: "One or two sentence description for search snippets and OG tags. Under 160 characters."
category: "playbook"  # one of: playbook | payers-schemes | employers-hr | zimasa-updates
slug: "article-slug-here"
audience:
  - "payers"   # one or more of: payers | employers | providers
publishedAt: "2026-05-15"   # ISO 8601 date
modifiedAt: "2026-05-15"    # ISO 8601 date — update when content changes
author: "Kizito Ochieng"    # Full name as it should appear
readTime: 5                 # Estimated minutes — calculate as word count ÷ 200
ogImage: "/images/blog/[slug]-og.jpg"   # 1200×630
---
```

**Required fields**: `title`, `description`, `category`, `slug`, `publishedAt`, `author`  
**Optional fields**: `modifiedAt`, `audience`, `readTime`, `ogImage`

---

## Article Body Structure

Recommended structure for all articles. Not mandatory — adapt to content type.

```mdx
## The Opening Hook (no heading — just a strong first paragraph)

One or two punchy sentences that make the reader want to continue. Name the problem or insight directly.

## [Section Heading]

Body copy. Use `##` for section headings, `###` for sub-sections.

Use bullet lists for:
- Feature comparisons
- Step-by-step processes
- Key takeaways

Use numbered lists only for sequences where order matters.

**Bold key terms** on first use. Don't bold for emphasis — use sparingly.

> Use blockquotes for pull quotes, key statistics, or important callouts.

## Conclusion

Close with a specific takeaway or recommendation. Not a summary of what was said — a directive for what to do next.

## What This Means for You

*(Optional section)* — Audience-specific implication. Useful for playbook articles that serve multiple buyer types.
```

---

## All Migrated Posts (5 posts — crawl complete)

All 5 posts from the live WordPress site have been migrated. The "copy" post is actually Article 4 in the series — distinct content — and has been given a proper slug.

| Title | Category | WordPress URL | New URL | MDX File |
|-------|----------|---------------|---------|----------|
| The Half A Trillion Problem: Why Kenya Pays for Sickness Instead of Preventing It | playbook | `/health-engagement-series/why-we-need-a-health-engagement-platform-now/` | `/insights/playbook/half-trillion-problem-kenya-health-spending/` | `playbook-half-trillion-problem.mdx` |
| One Medical Crisis Could Break Most Kenyan Households | playbook | `/health-engagement-series/most-kenyan-households-are-one-medical-crisis-away-from-the-auctioneers-hammer-heres-why-thats-your-problem/` | `/insights/playbook/one-medical-crisis-kenyan-households-financial-resilience/` | `playbook-one-medical-crisis.mdx` |
| Empowering Africa's Health and Wellness Providers | playbook | `/health-engagement-playbook/empowering-africas-health-and-wellness-providers/` | `/insights/playbook/empowering-africas-health-wellness-providers/` | `playbook-empowering-providers.mdx` |
| From Processing Claims to Preventing Them: Why I Changed What I'm Building | zimasa-updates | `/health-engagement-series/from-processing-claims-to-preventing-them-why-i-changed-what-im-building/` | `/insights/zimasa-updates/from-processing-claims-to-preventing-them/` | `zimasa-updates-from-processing-claims.mdx` |
| Introducing Zimasa: The Health Engagement OS for Africa *(was: "Copy")* | zimasa-updates | `/health-engagement-series/from-processing-claims-to-preventing-them-why-i-changed-what-im-building-copy/` | `/insights/zimasa-updates/introducing-zimasa-health-engagement-os/` | `zimasa-updates-introducing-zimasa-engagement-os.mdx` |

**Notes**:
- The "Copy" post (Jan 6, 2026) is a distinct article — Article 4 in the series — that introduces Zimasa as the solution. It was incorrectly named in WordPress. New title: "Introducing Zimasa: The Health Engagement OS for Africa".
- Both WordPress `/insights/[old-slug]/` URLs and the category-prefixed WordPress URLs `/health-engagement-series/[slug]/` need redirects — see `03_Redirects.md`.
- All redirects are now complete in `03_Redirects.md`.

## Images

All post images downloaded to `Blog/Images/`. Copy to `/public/images/blog/` in the repo.

| File | Used In |
|------|---------|
| `half-trillion-problem-hero.jpg` | Half Trillion Problem (hero) |
| `one-medical-crisis-hero.jpg` | One Medical Crisis (hero) |
| `empowering-providers-hero.jpg` | Empowering Providers (hero) |
| `from-processing-claims-hero.jpg` | From Processing Claims (hero + OG) |
| `from-processing-claims-body.jpg` | From Processing Claims (inline body image) |
| `why-zimasa-hero.png` | Introducing Zimasa (hero + OG) |

**OG image note**: The scraped images are 1100×550. Resize to 1200×630 before use as OG images. Use as hero images at original dimensions — they are fine for `<Image>` components.

---

## OG Image Convention

- All blog OG images: 1200×630 px, JPG
- Store at: `/public/images/blog/[slug]-og.jpg`
- Default fallback: `/public/images/og-default.jpg`

---

## Publishing Checklist

Before merging any new blog post:

- [ ] Frontmatter complete — all required fields present
- [ ] `publishedAt` date is correct
- [ ] `slug` matches the file name and is unique
- [ ] `category` is one of the four valid values
- [ ] OG image exists at correct path (or default fallback is acceptable)
- [ ] No deprecated language (no Pillars, Wrappers, CONNECT, PERKS — use Tracks, Engines)
- [ ] No PHI, clinical data, or pricing on the page
- [ ] Redirect added to `03_Redirects.md` if migrating from WordPress URL
- [ ] Read time calculated and correct
- [ ] Founder sign-off on content (for external-facing posts)
