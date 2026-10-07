# Image Implementation Brief
**Date**: 2026-05-04
**For**: Dalton (technical delivery)
**From**: Kizito
**Reference**: `09_Imagery-Spec.md` for full inventory and standards

This brief tells you exactly what images are ready to place, what still needs to be sourced or built, and where everything goes in the project.

---

## 1. What Is Ready Right Now

These assets are in `Final/Images/` and can be placed into the project immediately.

### Logos — place these first, they block everything else

All four are SVG. Use SVG only — ignore the PNG files in the same folder.

| File | Destination in project | When to use |
|------|----------------------|-------------|
| `logos/logo.svg` | `/public/images/logo.svg` | Nav header on white/light backgrounds |
| `logos/logo-white.svg` | `/public/images/logo-white.svg` | Footer, hero sections, dark/coloured backgrounds |
| `logos/logo-icon.svg` | `/public/images/logo-icon.svg` | Favicon source, app icon, very small spaces |
| `logos/logo-icon-white.svg` | `/public/images/logo-icon-white.svg` | Icon on dark/coloured backgrounds |

The logo wordmark reads **ZIMASA / HEALTH MADE SIMPLE** in a horizontal layout (icon left, text right). This is the correct format for the nav.

### Founder photo — About page

| File | Destination in project | Notes |
|------|----------------------|-------|
| `content/founder-kizito.png` | `/public/images/hero/about-hero.jpg` | Formal headshot, white background. Acceptable at launch. Replace with a candid shot post-launch. Convert to JPG and compress before placing — current file is PNG at 145KB. |

### Blog post images — all five posts

Copy the entire `Final/Blog/Images/` folder to `/public/images/blog/`. Rename files to match the slugs below.

| Current filename | Rename to | Post |
|-----------------|-----------|------|
| `half-trillion-problem-hero.jpg` | `half-trillion-problem-hero.jpg` | No change needed |
| `one-medical-crisis-hero.jpg` | `one-medical-crisis-hero.jpg` | No change needed |
| `empowering-providers-hero.jpg` | `empowering-providers-hero.jpg` | No change needed |
| `from-processing-claims-hero.jpg` | `from-processing-claims-hero.jpg` | No change needed |
| `from-processing-claims-body.jpg` | `from-processing-claims-body.jpg` | No change needed |
| `why-zimasa-hero.png` | `why-zimasa-hero.png` | PNG — compress before placing (521KB) |

All blog images are 1100×550px. Adequate for hero use in `<Image>` components.

### App screen reference

`content/app-screen.png` is a crop from the current live site showing the Zimasa app UI (847×1024px portrait). **Do not place this on the site** — it is a reference only for when you build the product UI mockups for the ZHEP and Zimasa Go sections.

---

## 2. What Still Needs to Be Sourced (Photography)

These are hero images for audience pages. Use stock photography at launch — see `09_Imagery-Spec.md §5` for recommended sources (Unsplash, Pexels, Getty) and search terms.

| Page | File to create | Brief | Priority |
|------|---------------|-------|----------|
| Home `/` | `/public/images/hero/home-hero.jpg` | Small group of African professionals in motion or connection; NOT a boardroom; green CSS overlay applied | **Tier 1** |
| Insurers & TPAs `/insurers-tpas/` | `/public/images/hero/payers-hero.jpg` | Modern African business/professional context; NOT a hospital or clinical setting; navy CSS overlay | **Tier 1** |
| Employers `/employers/` | `/public/images/hero/employers-hero.jpg` | Small group of African colleagues in a workplace; green CSS overlay. Can reuse home-hero.jpg if it fits. | **Tier 1** |
| Healthcare Providers `/healthcare-providers/` | `/public/images/hero/providers-hero.jpg` | Wellness provider context — gym, dietitian, physio; NOT a hospital; green overlay | **Tier 2** |
| Members / Zimasa Go `/zimasa-go/` | `/public/images/hero/members-hero.jpg` | Individual or pair; movement; spontaneous feel; warmer tone than B2B heroes; green overlay | **Tier 2** |

**What to avoid:** studio white backgrounds, US/European office settings, three people grinning at a laptop, handshakes, stock poses that read as staged. Filter by African/Kenyan contexts.

**CSS overlay approach:** Do not edit the photos in Photoshop. Apply a semi-transparent brand colour overlay via CSS (`background-blend-mode` or a positioned `::before` pseudo-element). Green `rgba(10, 110, 56, 0.65)` for most pages; navy `rgba(13, 33, 51, 0.70)` for Payers pages.

---

## 3. What Needs to Be Created (Product UI Mockups)

These are designed/built assets, not sourced photography. Build in Figma and export as WebP.

| Asset | Destination | Dimensions | Priority |
|-------|------------|------------|----------|
| Payers dashboard (30/60/90 view) | `/public/images/product/payers-dashboard.webp` | 1200×675 | **Tier 1 — most important visual on the site** |
| Zimasa app — steps/challenge screen | `/public/images/product/zhep-app-screen.webp` | 800×450 | Tier 2 |
| Employers dashboard (lite view) | `/public/images/product/employers-dashboard.webp` | 800×450 | Tier 2 |
| Zimasa Go — challenge leaderboard | `/public/images/product/zimasa-go-challenge.webp` | 800×450 | Tier 2 |

**Payers dashboard spec** (build this first — it is the most critical product visual):
- Show a 30/60/90-day activation timeline
- Key metrics visible: activation rate %, Active Days count, cohort breakdown
- Use plausible Kenyan numbers: e.g. "47% activation at Day 30 → 61% at Day 60 → 74% at Day 90"
- Fictitious org name only: e.g. "Savannah Health Scheme — Q1 2026 Programme"
- Zero real client names, member names, or health data
- Navy background (`#1A2332`) with white UI elements — matches ZPS page

---

## 4. OG Images (All Pages)

Build one Canva or Figma template and generate all 17 OG images by swapping the title and background colour. Takes 30–45 minutes total.

**Template spec:**
- Size: 1200×630px
- Background: green `#0A6E38` (most pages) or navy `#0D2133` (Payers/B2B pages)
- Logo: `logo-white.svg`, top-left, ~180px wide
- Page title: Montserrat Bold, 52px, white, vertically centred
- Output: JPG, destination `/public/images/`

| File | Page | Background |
|------|------|-----------|
| `og-home.jpg` | Home | Green |
| `og-insurers-tpas.jpg` | Insurers & TPAs | Navy |
| `og-employers.jpg` | Employers | Green |
| `og-zimasa-go.jpg` | Zimasa Go | Green |
| `og-healthcare-providers.jpg` | Healthcare Providers | Green |
| `og-solutions.jpg` | Solutions Hub | Navy |
| `og-zhep.jpg` | ZHEP | Green |
| `og-zps.jpg` | ZPS | Navy |
| `og-about.jpg` | About | Navy |
| `og-insights.jpg` | Insights Hub | Green |
| `og-get-started.jpg` | Get Started | Green |
| `og-book-demo.jpg` | Book Demo | Navy |
| `og-contact.jpg` | Contact Us | Navy |
| `og-who-we-help.jpg` | Who We Help | Navy |
| `og-privacy-centre.jpg` | Privacy Centre | Navy |
| `og-terms.jpg` | Terms | Navy |
| `og-default.jpg` | Fallback | Green |

Blog OG images: resize the 5 existing hero images to 1200×630 (add padding or crop) and save as `/public/images/blog/[slug]-og.jpg`.

---

## 5. What NOT to Use From the Current Site

The following images were scraped from the live site and saved in `Final/Images/content/` for reference. **Do not place any of these on the new site.**

| File | Why not |
|------|---------|
| `challenge.jpg` | Old branded infographic — Zimasa logo and text baked into the image |
| `wellness-1.jpg` | Generic stock pose (man meditating in office chair) — doesn't match new direction |
| `content-2.jpg` through `content-6.jpg` | Generic western stock photography — doesn't fit imagery brief |
| `about-photo-1.jpg` | Not relevant to current brand context |
| `about-photo-2.jpg` | Generic stock — person at a conference |
| `heroes/home-hero.jpg` | Boardroom photo used as CSS background on old site — doesn't match new hero brief |
| `heroes/about-us-banner.jpg` | Glass globe on foliage — not relevant |
| `logos/logo-primary.png`, `logo-white.png`, `logo-secondary.png` | PNGs scraped from the live site — use the SVGs from `logos/logo.svg` etc. instead |

---

## 6. Final `/public/images/` Folder Structure

```
/public/images/
├── logo.svg                          ✅ Ready
├── logo-white.svg                    ✅ Ready
├── logo-icon.svg                     ✅ Ready
├── logo-icon-white.svg               ✅ Ready
├── og-default.jpg                    🎨 Create
├── og-home.jpg                       🎨 Create
├── og-insurers-tpas.jpg              🎨 Create
├── og-employers.jpg                  🎨 Create
├── og-zimasa-go.jpg                  🎨 Create
├── og-healthcare-providers.jpg       🎨 Create
├── og-solutions.jpg                  🎨 Create
├── og-zhep.jpg                       🎨 Create
├── og-zps.jpg                        🎨 Create
├── og-about.jpg                      🎨 Create
├── og-insights.jpg                   🎨 Create
├── og-get-started.jpg                🎨 Create
├── og-book-demo.jpg                  🎨 Create
├── og-contact.jpg                    🎨 Create
├── og-who-we-help.jpg                🎨 Create
├── og-privacy-centre.jpg             🎨 Create
├── og-terms.jpg                      🎨 Create
├── hero/
│   ├── home-hero.jpg                 🔲 Source
│   ├── payers-hero.jpg               🔲 Source
│   ├── employers-hero.jpg            🔲 Source
│   ├── providers-hero.jpg            🔲 Source
│   ├── members-hero.jpg              🔲 Source
│   └── about-hero.jpg                ✅ Ready (founder-kizito.png — convert + compress)
├── product/
│   ├── payers-dashboard.webp         🎨 Create — Tier 1
│   ├── zhep-app-screen.webp          🎨 Create — Tier 2
│   ├── employers-dashboard.webp      🎨 Create — Tier 2
│   └── zimasa-go-challenge.webp      🎨 Create — Tier 2
└── blog/
    ├── half-trillion-problem-hero.jpg     ✅ Ready
    ├── half-trillion-problem-og.jpg       🎨 Resize from hero
    ├── one-medical-crisis-hero.jpg        ✅ Ready
    ├── one-medical-crisis-og.jpg          🎨 Resize from hero
    ├── empowering-providers-hero.jpg      ✅ Ready
    ├── empowering-providers-og.jpg        🎨 Resize from hero
    ├── from-processing-claims-hero.jpg    ✅ Ready
    ├── from-processing-claims-body.jpg    ✅ Ready
    ├── from-processing-claims-og.jpg      🎨 Resize from hero
    ├── why-zimasa-hero.png                ✅ Ready (compress first)
    └── why-zimasa-og.jpg                  🎨 Resize from hero
```

---

## 7. Technical Requirements (Next.js)

- All images used in `<Image>` components: set `width` and `height` props — prevents layout shift
- Home hero: add `priority` prop — it is the LCP element
- All images: write descriptive `alt` text — no blanks, no "hero image"
- Format: WebP for product mockups; JPG for hero photography and OG images; SVG for logos
- Blog images should be output as WebP via `<Image>` component's automatic optimisation — no manual conversion needed
- Before placing any image: confirm zero real client data, member names, or health information is visible

---

## 8. Approval Required Before Go-Live

The following images need sign-off from Kizito before staging sign-off:

- [ ] Home hero photo selection
- [ ] Payers hero photo selection
- [ ] Employers hero photo selection
- [ ] Payers dashboard mockup (mocked data review)
- [ ] Founder photo on About page — confirm this version is acceptable or provide replacement
