# Zimasa Brand Style Guide
**Version**: 1.1 — Next.js Site Edition  
**Date**: May 2026  
**Source**: Brand Guidelines 2025 (PDF) + Live site extraction (zimasahealth.com, May 2026)  
**Status**: APPROVED — use for all Phase 1 build decisions

> This document governs every visual decision in the Phase 1 website build. Where the live site deviates from the official Brand Guidelines 2025, this document states the **correct** behaviour for the new site. Deviations are flagged and resolved.

---

## 1. Brand in One Sentence

> "Zimasa empowers people to take charge of their health — before problems begin."

**External positioning**: "Built for Africa. White-label ready. Measurable results."  
**Tagline**: "Turn Wellness Spending Into Verified Active Days"

---

## 2. Voice & Tone

### B2B (Payer / Employer — primary audience for Phase 1)

| Attribute | Guideline |
|-----------|-----------|
| **Tone** | Professional, data-driven, outcomes-focused |
| **Language** | Precise, strategic, ROI-oriented |
| **Focus** | Measurable outcomes, engagement metrics, risk reduction |
| **Character** | Trusted partner — credible, collaborative, never clinical |
| **What to avoid** | Jargon, insurance language, clinical claims, "unlimited" promises |

### B2C (Member-facing)

| Attribute | Guideline |
|-----------|-----------|
| **Tone** | Warm, reassuring, empowering |
| **Language** | Simple, clear, action-oriented |
| **Focus** | Prevention, progress, community |
| **Character** | Compassionate and confident |

### Writing Rules (All Outputs)

- Use Tracks: MOVE, NOURISH, CARE, LEARN (not "Pillars")
- Use **Community Engine** and **Rewards Engine** as the correct product terms in all copy — B2B, B2C, and technical. Plain language equivalents are acceptable where brevity is needed: "challenges and leaderboards" (Community Engine), "rewards and partner perks" (Rewards Engine).
- Never use insurance language: premium, claims, policy, underwriting, coverage
- Never make clinical claims or reference PHI
- Sentences are short. Paragraphs are tight. Lead with the outcome.

---

## 3. Colour Palette

### 3.1 Primary Palette (Use for all elements)

| Name | Hex | RGB | Live Site Value | Role |
|------|-----|-----|-----------------|------|
| **Zimasa Green** | `#0A6E38` | rgb(10, 110, 56) | `#0B6D38` (≈match) | Dominant brand colour — hero backgrounds, section accents, nav CTA |
| **Zimasa Navy** | `#0D2133` | rgb(13, 33, 51) | `#222429` (drift — correct to spec) | Page backgrounds, footer, dark sections |
| **Zimasa Orange** | `#F04F0D` | rgb(240, 79, 13) | Not in use on live site — **restore for Phase 1** | Accent only — primary CTAs, heading punctuation mark |
| **Zimasa Mid Blue** | `#0A406E` | rgb(10, 64, 110) | `#0B416C` (≈match) | B2B/payer emphasis — section backgrounds, nav, secondary buttons |

### 3.2 Extended Palette

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| **Light Green** | `#82B540` | rgb(130, 181, 64) | Secondary CTAs, active states, positive indicators |
| **Pale Green** | `#ABCF7A` | rgb(171, 207, 122) | Light backgrounds, tinted sections |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Page background, card backgrounds, reverse text |
| **Off-White / Cream** | `#FFFBFA` | rgb(255, 251, 250) | Subtle page backgrounds (2% tint of Orange) |
| **Body Grey** | `#686666` | rgb(104, 102, 102) | Body copy, secondary text |
| **Dark Charcoal** | `#222429` | rgb(34, 36, 41) | Footer background, dark headings |

### 3.3 Semantic Colour Usage

| Context | Colour |
|---------|--------|
| **Primary CTA button** | `#F04F0D` Orange — accent, draws eye, distinct from brand nav |
| **Secondary CTA button** | `#82B540` Light Green |
| **Navigation "Book Demo" button** | `#0A6E38` Green |
| **B2B / Payer sections** | `#0A406E` Mid Blue as primary (per Brand Guidelines B2B rule) |
| **Hero backgrounds** | `#0A6E38` Green or `#0D2133` Navy (image overlay at 60–70% opacity) |
| **Section background (light)** | `#FFFFFF` or `#FFFBFA` Off-White |
| **Section background (tinted)** | `#ABCF7A` Pale Green at 15% opacity |
| **Footer** | `#222429` Dark Charcoal |
| **Body text** | `#686666` Body Grey |
| **Heading text (on light bg)** | `#222429` Dark Charcoal |
| **Heading text (on dark bg)** | `#FFFFFF` White |
| **Link colour** | `#0A6E38` Green |
| **Link hover** | `#0A406E` Mid Blue |

### 3.4 Colour Do Nots

- Do not use Orange as a background colour for large sections
- Do not use Light Green (`#82B540`) for body text — readability contrast is insufficient
- Do not swap Green and Orange roles (Green = brand identity, Orange = CTA punctuation)
- Icons use Greens and Blues only — never Orange
- B2B materials: shift to Mid Blue as primary, single-colour treatments

### 3.5 Deviation from Live Site — Resolved

The live site does not use Orange (`#F04F0D`) for CTAs, defaulting to Navy and Green instead. The Brand Guidelines 2025 specify Orange as the accent/CTA colour.

**Resolution for Phase 1**: Restore Orange as the primary CTA button colour. This creates stronger visual hierarchy (Orange CTA stands out from Green nav elements). Update the primary CTA component.

---

## 4. Typography

### 4.1 Type System

Two primary typefaces. One UI typeface for buttons and navigation.

| Typeface | Source | Role |
|----------|--------|------|
| **Montserrat Alternates** | Google Fonts | Display headings (H1, H2, H5) — brand identity |
| **Montserrat** | Google Fonts | Body copy, secondary headings (H3, H4, H6), captions |
| **DM Sans** | Google Fonts | UI elements: buttons, navigation, labels, form fields |

> **Note**: The live site also uses Alexandria and Space Grotesk. These are **not carried forward** to Phase 1. Consolidating to Montserrat family + DM Sans is cleaner, more consistent, and reduces font load time.

### 4.2 Type Scale (Desktop)

| Level | Element | Size | Weight | Family | Line Height | Letter Spacing | Colour |
|-------|---------|------|--------|--------|------------|----------------|--------|
| **Display** | H1 (hero) | 56px | 700 | Montserrat Alternates | 1.15 | -0.02em | White (on dark bg) |
| **H2** | Section heading | 48px | 700 | Montserrat Alternates | 1.3 | -0.013em | `#222429` or White |
| **H3** | Sub-section heading | 32px | 700 | Montserrat | 1.3 | -0.013em | `#222429` or White |
| **H4** | Card heading | 24px | 700 | Montserrat | 1.3 | normal | `#222429` |
| **H5** | Label heading | 18px | 700 | Montserrat Alternates | 1.4 | normal | `#222429` or `#0A6E38` |
| **H6** | Eyebrow label | 13px | 700 | Montserrat | 1.4 | 0.08em | `#0A6E38` (uppercase) |
| **Body Large** | Lead copy | 18px | 400 | Montserrat | 1.7 | normal | `#686666` |
| **Body** | Standard copy | 16px | 400 | Montserrat | 1.9 | normal | `#686666` |
| **Body Small** | Supporting text | 14px | 400 | Montserrat | 1.6 | normal | `#686666` |
| **Caption** | Image captions, meta | 12px | 400 | DM Sans | 1.5 | normal | `#686666` |
| **UI Label** | Buttons, nav items | 12–14px | 600 | DM Sans | 1 | 0.05em | White or `#222429` |

### 4.3 Mobile Type Scale

Reduce display sizes on mobile (375px breakpoint):

| Desktop | Mobile |
|---------|--------|
| H1 56px | H1 36px |
| H2 48px | H2 32px |
| H3 32px | H3 24px |
| H4 24px | H4 20px |
| Body 16px | Body 16px (unchanged) |

### 4.4 Typography Rules

- **Heading case**: Sentence case (not UPPERCASE) for H1–H5 on website — brand guidelines specify uppercase for print/PDF; websites use sentence case for readability
- **Eyebrow labels** (H6): Always uppercase, tight letter-spacing, Green colour
- **Orange full stop** (`·`): Add to section headings where brand personality is needed — home page hero and section titles. Do not apply to body copy or card headings.
- **Maximum line length**: 65–75 characters for body copy columns (prevents eye strain on wide screens)
- **Text on dark backgrounds**: Always use White (`#FFFFFF`) — never grey
- **Links in body copy**: `#0A6E38` Green, underlined on hover

### 4.5 Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&family=Montserrat:wght@300;400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
```

---

## 5. Buttons

### 5.1 Button Hierarchy

| Level | Style | Background | Text | Use For |
|-------|-------|-----------|------|---------|
| **Primary** | Filled | `#F04F0D` Orange | White | Main conversion CTA ("Book Demo", "Book Pilot") |
| **Primary Alt** | Filled | `#0A6E38` Green | White | Nav "Book Demo" button only |
| **Secondary** | Filled | `#82B540` Light Green | White | Secondary page CTAs ("See How It Works", "Join Network") |
| **Tertiary** | Outline | Transparent, `#0A6E38` Green border | `#0A6E38` Green | Supporting CTAs ("Learn More", "Explore") |
| **Ghost** | Outline | Transparent, White border | White | CTAs on dark/coloured backgrounds |
| **B2B** | Filled | `#0A406E` Mid Blue | White | Payer-specific CTAs on B2B pages |

### 5.2 Button Anatomy

```
[  BUTTON LABEL  ]
```

- **Font**: DM Sans, 600 weight
- **Size**: 12–14px, uppercase
- **Letter-spacing**: 0.05em
- **Padding**: 14px 40px (standard), 10px 24px (small), 18px 60px (large/hero)
- **Border-radius**: 4px (slight rounding — improvement on current 0px sharp corners)
- **Transition**: background-color 200ms ease

> **Improvement over live site**: The live site uses 0px border-radius (sharp corners). Phase 1 adopts 4px rounding for a more modern feel while staying brand-consistent.

### 5.3 Button States

| State | Visual Treatment |
|-------|-----------------|
| Default | Defined fill/outline per hierarchy |
| Hover | 10% darkening of background (`filter: brightness(0.9)`) |
| Active | 15% darkening (`filter: brightness(0.85)`) |
| Focus | 2px offset outline in `#0A6E38` Green (accessibility) |
| Disabled | 40% opacity, cursor: not-allowed |

### 5.4 Arrow Suffix

CTAs using arrows follow the live site convention: "See How It Works →"
- Arrow is part of the label text (→ character, not an icon)
- Animates right on hover: `transform: translateX(3px)`

---

## 6. Layout & Spacing

### 6.1 Grid System

- **Base unit**: 8px
- **Content max-width**: 1200px (centered, auto horizontal margins)
- **Column gutter**: 24px (desktop), 16px (mobile)
- **Section max-width**: Full-bleed for background colours; 1200px for content

### 6.2 Section Spacing

| Context | Top Padding | Bottom Padding |
|---------|-------------|----------------|
| Standard content section | 80px | 80px |
| Compact section (stats, logos) | 48px | 48px |
| Hero section | 120px | 100px |
| CTA banner | 64px | 64px |
| Footer | 60px | 40px |

**Mobile** (375px breakpoint): Reduce all values by 40% (e.g., 80px → 48px)

### 6.3 Component Spacing

| Component | Internal Padding |
|-----------|-----------------|
| Card | 32px all sides |
| Feature icon + text block | 24px between icon and text; 16px between heading and body |
| Form field | 12px vertical, 16px horizontal |
| Nav bar | 20px vertical, 40px side padding |

### 6.4 Breakpoints (Tailwind-aligned)

| Name | Breakpoint | Context |
|------|-----------|---------|
| `sm` | 640px | Large mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1400px | Wide desktop |

---

## 7. Logo

### 7.1 Usage Rules

- **Default**: Full colour logo on white or light backgrounds
- **Dark backgrounds**: White version of logo
- **Clear space**: Minimum = height of the "Z" in the logotype on all sides
- **Minimum size**: 371px wide (horizontal), 59px wide (vertical/stacked)

### 7.2 Logo Do Nots

- Do not distort, rotate, or recolour the logo
- Do not place on low-contrast backgrounds
- Do not use a different typeface in place of the logotype
- Do not add effects (shadows, glows, outlines) to the logo

### 7.3 Favicon

- Use logomark only (the "Z" symbol without the wordmark)
- Sizes: 32x32, 16x16 (browser), 180x180 (Apple touch icon), 192x192 (Android)

### 7.4 Asset Location

Logo files available at:
`drive.google.com/drive/folders/1JvQZgf-wP24TwqBzShFkpC8neCv0o8dZ`

---

## 8. Iconography

### 8.1 Icon Style

| Principle | Guideline |
|-----------|-----------|
| Style | Outline (stroke-based), consistent stroke weight — Lucide React default style. No solid fill for Phase 1. |
| Colours | Zimasa Greens (`#0A6E38`, `#82B540`) and Blues (`#0A406E`) only — never Orange |
| Size | 24px (inline), 40px (feature icon), 60px (hero feature icon) |
| Source | Lucide React — tree-shakeable, React-native, no CDN dependency. Replaces Font Awesome from WordPress site. |

### 8.2 Icon in Feature Cards

```
[60px icon — Green circle background]
H4 Feature Title
Body description text
```

- Icon container: 60px × 60px circle, `#0A6E38` Green at 10% opacity background
- Icon: 32px, `#0A6E38` Green
- Spacing: 16px between icon and heading

> **Recommendation for Phase 1**: Use Lucide React icon library. Tree-shakeable, consistent style, no CDN dependency. Replace Font Awesome entirely.

### 8.3 Icon Asset Location

`drive.google.com/drive/folders/115qH5AMAdlzqcjYgCN-re5bOKER7jxMSu`

---

## 9. Cards & Surfaces

### 9.1 Feature Card

```css
background: #FFFFFF;
border-radius: 8px;
padding: 32px;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
border: 1px solid rgba(0, 0, 0, 0.06);
```

Hover state:
```css
box-shadow: 0 8px 32px rgba(10, 110, 56, 0.12);
transform: translateY(-2px);
transition: all 200ms ease;
```

### 9.2 Blog Post Card

```css
background: #FFFFFF;
border-radius: 8px;
overflow: hidden; /* clips the featured image */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
```

- Featured image: 16:9 ratio, top of card
- Content padding: 24px
- Category tag: H6 eyebrow style, `#0A6E38` Green, above title

### 9.3 Stat / Proof Card

```css
background: linear-gradient(135deg, #0A6E38, #0A406E);
border-radius: 8px;
padding: 32px;
color: #FFFFFF;
```

- Stat number: 48px, Montserrat Alternates 700, White
- Stat label: 14px, DM Sans 400, White at 80% opacity

### 9.4 CTA Banner

```css
background: #0A6E38; /* or linear-gradient */
padding: 64px 0;
color: #FFFFFF;
```

---

## 10. Navigation

### 10.1 Header

```css
background: #FFFFFF; /* sticky on scroll */
height: 72px;
border-bottom: 1px solid rgba(0, 0, 0, 0.06);
```

Scroll state (sticky):
```css
box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
```

### 10.2 Nav Link Styles

```css
font-family: 'DM Sans', sans-serif;
font-size: 14px;
font-weight: 500;
color: #222429;
```

Hover:
```css
color: #0A6E38;
```

Active (current page):
```css
color: #0A6E38;
font-weight: 600;
```

> **Improvement over live site**: Live site nav links use Light Green `#82B540` — too bright and low contrast against a white header. Phase 1 uses Dark Charcoal with Green hover for better readability.

### 10.3 Dropdown (Solutions submenu)

- Background: White
- Border: 1px solid `rgba(0,0,0,0.06)`
- Box-shadow: `0 8px 32px rgba(0,0,0,0.12)`
- Border-radius: 8px (bottom corners only)
- Item padding: 12px 20px
- Item hover background: `#FFFBFA` Off-White

### 10.4 Mobile Navigation

- Hamburger icon: 24px, `#222429`
- Mobile drawer: full-screen overlay, `#FFFFFF` background
- Nav items: 20px, Montserrat 600, centered
- CTA button: full-width, Primary Orange style

---

## 11. Section Patterns

### 11.1 Hero Section

**Structure**: Full-width background (Green or Navy with image overlay) + left-aligned content

```
[Background: #0A6E38 or #0D2133 with image overlay at 50–60% opacity]
│
│  [Eyebrow label — H6, uppercase, Green on dark bg = White]
│  [H1 — Display, White, max 12 words]
│  [Body Large — 18px, White at 80% opacity, max 2 sentences]
│  [Primary CTA button] [Ghost CTA button]
│
[Right side: hero image or product screenshot]
```

### 11.2 Value Proposition / Stats Strip

```
[Background: Off-White #FFFBFA or Pale Green tint]
[4 stat blocks, evenly spaced]
│  Stat number (48px, Green)
│  Stat label (14px, Body Grey)
```

### 11.3 Feature Grid

```
[Background: White]
[Section header: eyebrow + H2 + optional subheading]
[2 or 3-column card grid]
```

### 11.4 Dark CTA Section

```
[Background: #0A6E38 Green]
[Centred content]
│  [H2 — White]
│  [Body — White at 80% opacity]
│  [Primary Orange CTA] [Ghost CTA]
```

### 11.5 B2B / Payer Section

Per brand guidelines, B2B-focused sections shift to Blue as primary:

```
[Background: #0A406E Mid Blue]
│  [H2 — White]
│  [Body — White at 80% opacity]
│  [White outline CTA or Light Green CTA]
```

---

## 12. Imagery & Photography

### 12.0 Imagery Philosophy

> **Zimasa imagery should make prevention, participation, connection, and progress feel real and African.**

Imagery does four jobs simultaneously: builds trust, supports positioning, improves conversion, and maintains consistency. If an image does not do at least two of these jobs, it should not be on the site.

**The test**: If all text is removed from a page, does it still feel like Zimasa — optimistic, measurable, community-driven, and East African? If not, the imagery system is not working.

---

### 12.1 Image Types

Four distinct image types are used across the site. Do not mix types within a single section.

| Type | Purpose | Used On |
|------|---------|---------|
| **Brand / lifestyle photography** | Human connection, community, everyday wellness, Africa relevance | Home, About, Employers, Zimasa Go, Healthcare Providers |
| **Product / interface imagery** | Make the platform tangible; show dashboards, app screens, share cards | ZHEP, Payers, Employers, Zimasa Go sections |
| **Illustration / diagrams** | Explain processes, platform architecture, and models where photos would be generic | How It Works sections, platform ecosystem, programme flow diagrams |
| **Icons** | Structure and scanning support in feature cards and benefit lists | All pages — governed by §8 |

**Rule**: Product/interface imagery is not optional decoration. Zimasa's value proposition is operational and measurable. The platform must look real and tangible — not just a concept.

---

### 12.2 Photography Rules

#### What to show

- Active people in everyday Kenyan and East African contexts: walking, exercising, eating well, working, gathered in small groups
- Colleagues and small groups — squads, teams, accountability pairs — community and connection are core to the product
- Workplaces that reflect Nairobi's modern office context (not glass towers, not European boardrooms)
- Health activities that are not clinical: movement, nutrition moments, active conversations, people using phones or checking progress
- Diverse ages, professions, and settings — reflect the breadth of who uses the platform

#### What to avoid

| Avoid | Reason |
|-------|--------|
| Hospitals, medical equipment, stethoscopes, IV drips, lab coats in clinical settings | Contradicts PHI-avoidant positioning; wrong emotional register |
| "Before/after" body transformation imagery | Implies clinical health claims — never appropriate |
| Generic Western corporate stock (glass boardrooms, handshakes, American office settings) | Breaks Africa relevance; makes the brand feel imported |
| Wellness clichés (yoga on a mountaintop, green smoothies on marble, isolated individual with dumbbells) | Feels inauthentically aspirational; not community-focused |
| Individuals used as implied testimonials without explicit permission | Legal risk; avoid |
| Product screenshots showing real or identifiable user data | PHI risk — see §12.5 |

---

### 12.3 Per-Audience Visual Territories

Each primary audience has a distinct visual register. Do not apply the same imagery treatment across all pages.

#### Home — Broad Brand Blend
**Feel**: "This is modern, credible, and human."
Mix of: people in motion + workplace community + one product moment. Neither too B2B nor too consumer-only. The hero image should work for all three audiences simultaneously.

#### Payers & Schemes (`/insurers-tpas/`)
**Feel**: "These people understand structured engagement and measurable reporting."
Visual register: structured, professional, outcomes-oriented. Modern African business/healthcare professionals. Always pair with a dashboard or data visual — the product must feel concrete, not just emotional.

#### Employers (`/employers/`)
**Feel**: "This could actually help our teams participate — not just look good on a benefits slide."
Visual register: team-based, social, energetic, workplace-relevant. Lean more human than Payers. Show groups, not individuals. Show participation in progress.

#### Zimasa Go / Member-facing (`/get-started/`, freemium sections)
**Feel**: "This is easy to start, social, and worth trying."
Visual register: simple, mobile-first, energetic, community-led. App screens are primary. Photography should feel spontaneous, not posed. Younger skew than B2B pages.

#### Healthcare Providers (`/healthcare-providers/`)
**Feel**: "Zimasa is a credible ecosystem partner that sends prepared members."
Visual register: professional but warm, health/wellness-service context. Avoid clinical settings. Favour modern wellness providers (gym, dietitian, physio) over hospital imagery.

#### About (`/about/`)
**Feel**: "This team has conviction and understands the African context."
Visual register: authentic, founder-led, purpose-driven. Less polished-stock, more real. A genuine founder photo outperforms a styled corporate headshot every time.

---

### 12.4 Photo vs Product UI Ratio Per Page

Too many stock photos feels generic. Too many screenshots feels like a brochure from 2010. Use these ratios as a guide:

| Page | Photography | Product/UI | Diagrams/Illustration |
|------|-------------|------------|-----------------------|
| Home | 50% | 30% | 20% |
| ZHEP | 20% | 60% | 20% |
| Payers | 35% | 40% | 25% |
| Employers | 55% | 25% | 20% |
| Zimasa Go sections | 45% | 45% | 10% |
| Healthcare Providers | 55% | 10% | 35% |
| About | 80% | 5% | 15% |
| Insights Hub | 0% | 0% | — (blog card thumbnails only) |

Pages not listed (Book Demo, Contact Us, Get Started, Privacy Centre, Terms) use solid colour backgrounds — no photography required.

---

### 12.5 Product / Interface Imagery Rules

When using app screens, dashboards, or UI crops:

- **Always use mocked or anonymised data.** Never use screenshots containing real user names, real email addresses, real health data, or any identifiable information. This is a PHI-avoidant requirement, not just a design preference.
- Use realistic-looking but clearly fictional data (e.g. "Amina W., 12 Active Days this week" — plausible but not real)
- Show the UI in context: phone held in hand, laptop on a desk, not floating on a white background
- Crop to the most compelling part of the interface — leaderboards, Active Days counts, challenge progress — not empty states
- Keep UI crops up to date: a screenshot of an outdated interface undermines credibility

---

### 12.6 Colour Treatment Rules

**Hero images**: Always apply a dark overlay for text legibility.
- Green hero: `rgba(10, 110, 56, 0.55)` — primary brand treatment
- Navy hero: `rgba(13, 33, 51, 0.60)` — B2B / payer sections
- Implementation: CSS `mix-blend-mode` or Tailwind `bg-blend-overlay` — no Photoshop required

**Card and section images**: Natural colour — no overlay. Overlay on cards makes the grid look heavy and reduces image value.

**B2B pages (Payers)**: Mid Blue tint overlay acceptable — `rgba(10, 64, 110, 0.50)` — to reinforce the B2B visual territory distinction.

**Rule**: Do not apply random or inconsistent filters page by page. Every overlay is one of the three above or nothing.

---

### 12.7 Composition & Aspect Ratios

| Image Use | Ratio | Pixel Size | Max File Size | Format |
|-----------|-------|-----------|---------------|--------|
| Hero background | 16:9 widescreen | 1920 × 1080px | 200KB | WebP |
| Section / feature image | 16:9 | 1200 × 675px | 120KB | WebP |
| Feature card image | 16:9 | 800 × 450px | 80KB | WebP |
| Blog featured image | 16:9 | 1200 × 675px | 120KB | WebP |
| OG / social share image | Custom | 1200 × 630px | 150KB | JPG (not WebP — crawler compatibility) |
| Author avatar | 1:1 square | 200 × 200px | 30KB | WebP |
| Logo (horizontal) | — | — | 20KB | SVG |
| App screen mockup | Portrait | 390 × 844px (iPhone standard) | 100KB | WebP |

**Composition rules**:
- Hero images: wide, immersive, single clear focal point — no busy backgrounds
- Card images: always 16:9; crop to show faces when people are the subject
- People: a mix of looking at camera (trust) and in-action (energy) — do not default to one only
- Product screens: show context (device frame or hand holding device) — not floating UI alone

---

### 12.8 Illustration Style

Used for How It Works flows, platform architecture, programme diagrams, and ecosystem explanations.

- Clean, geometric shapes with rounded edges (border-radius consistent with card style)
- Solid fills only — no gradients in illustrations
- Palette: Zimasa Greens (`#0A6E38`, `#82B540`) and Blues (`#0A406E`, `#0D2133`) only — never Orange
- Line weight: consistent stroke at 2px if outline elements are used
- Characters (where used): expressive, simplified, inclusive — East African skin tones
- Avoid: overly complex diagrams that need to be zoomed to read; unnecessary decorative elements

---

### 12.9 Image Consistency Checklist

Before any image is approved for use on the site:

| Check | Question |
|-------|---------|
| **Audience fit** | Is it right for this page's primary audience — payer, employer, member, or provider? |
| **Brand fit** | Does it feel warm, modern, African, and prevention-oriented? |
| **Use-case fit** | Does it actively support the section's message, or is it decorative? |
| **Visual consistency** | Does it match the rest of the site in tone, crop, colour treatment, and style? |
| **Technical fit** | Is it the right size, format, ratio, and within file size limits? |
| **Legal fit** | Do we have commercial rights? Are model releases in place if required? |
| **Accessibility fit** | Will text remain readable with the overlay? Is alt text writeable for this image? |
| **PHI fit** | If it shows a product screen, does it contain zero real or identifiable user data? |

---

## 13. Graphic Elements

### 13.1 Decorative Lines / Flourish

Per brand guidelines:
- 2–3 overlapping lines as corner decoration
- Lines may overlap once only
- Permitted colours: Green, Blue, White — never Orange
- Purpose: visual interest only — use sparingly (1 per page max)

### 13.2 Background Shapes / Blobs

For subtle section interest:
- Use Pale Green (`#ABCF7A`) at 15–20% opacity
- Organic, rounded shapes (border-radius: 40–60%)
- Behind content, never obscuring text
- One per section maximum

---

## 14. Forms

### 14.1 Input Field Style

```css
border: 1.5px solid rgba(0, 0, 0, 0.15);
border-radius: 6px;
padding: 12px 16px;
font-family: 'DM Sans', sans-serif;
font-size: 16px;
color: #222429;
background: #FFFFFF;
```

Focus:
```css
border-color: #0A6E38;
outline: none;
box-shadow: 0 0 0 3px rgba(10, 110, 56, 0.15);
```

Error:
```css
border-color: #DC2626;
```

### 14.2 Form Label

```css
font-family: 'DM Sans', sans-serif;
font-size: 14px;
font-weight: 600;
color: #222429;
margin-bottom: 6px;
```

Required indicator: `*` in `#F04F0D` Orange after label text

### 14.3 Error Message

```css
font-size: 12px;
color: #DC2626;
margin-top: 4px;
```

### 14.4 Submit Button

Use Primary CTA button style (Orange). Full-width on mobile.

---

## 15. Data Visualisation

Per brand guidelines:
- Clean, structured layouts — clarity over decoration
- Colour cues aligned to brand palette (Greens and Blues for positive, neutral tones for comparison)
- Charts/dashboards: White background, thin gridlines (`rgba(0,0,0,0.06)`)
- Avoid 3D charts or complex gradients

---

## 16. Accessibility Standards

| Standard | Target |
|----------|--------|
| Colour contrast (text on background) | WCAG AA minimum (4.5:1 for body, 3:1 for large text) |
| Focus indicators | Visible 2px outline in `#0A6E38` (never remove default focus) |
| Alt text | Required on all images (descriptive, not decorative for icons) |
| Font size minimum | 14px for any readable text (12px labels acceptable) |
| Touch targets | 44 × 44px minimum on mobile |

**Contrast check results** (against White `#FFFFFF` background):

| Colour | Ratio | AA Pass? |
|--------|-------|----------|
| Body Grey `#686666` on White | 4.6:1 | ✅ AA |
| Green `#0A6E38` on White | 7.2:1 | ✅ AAA |
| Orange `#F04F0D` on White | 3.5:1 | ✅ Large text / buttons only |
| Mid Blue `#0A406E` on White | 8.9:1 | ✅ AAA |
| White `#FFFFFF` on Green `#0A6E38` | 7.2:1 | ✅ AAA |

---

## 17. Motion & Transitions

Minimal — performance and professionalism first.

| Element | Transition |
|---------|-----------|
| Button hover | 200ms ease — background colour |
| Card hover | 200ms ease — shadow + translateY(−2px) |
| Nav dropdown | 150ms ease — opacity + translateY(8px → 0) |
| CTA arrow | 200ms ease — translateX(3px) |
| Page transitions | None (SSG; instantaneous) |

**No auto-playing animations** on content sections. Scroll-reveal only if used minimally (1–2 sections max on home page).

---

## 18. Tailwind Configuration Reference

Translate this style guide to Tailwind custom config:

```js
// tailwind.config.js — key custom values
module.exports = {
  theme: {
    extend: {
      colors: {
        'zimasa-green': '#0A6E38',
        'zimasa-navy': '#0D2133',
        'zimasa-orange': '#F04F0D',
        'zimasa-blue': '#0A406E',
        'zimasa-light-green': '#82B540',
        'zimasa-pale-green': '#ABCF7A',
        'zimasa-cream': '#FFFBFA',
        'zimasa-body': '#686666',
        'zimasa-dark': '#222429',
      },
      fontFamily: {
        display: ['"Montserrat Alternates"', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        ui: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['48px', { lineHeight: '1.3', letterSpacing: '-0.013em' }],
        'h3': ['32px', { lineHeight: '1.3', letterSpacing: '-0.013em' }],
        'h4': ['24px', { lineHeight: '1.3' }],
        'h5': ['18px', { lineHeight: '1.4' }],
        'h6': ['13px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        'section': '80px',
        'section-sm': '48px',
        'hero': '120px',
      },
      borderRadius: {
        'card': '8px',
        'btn': '4px',
        'icon': '50%',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px rgba(10,110,56,0.12)',
        'nav': '0 2px 16px rgba(0,0,0,0.08)',
        'dropdown': '0 8px 32px rgba(0,0,0,0.12)',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
}
```

---

## 19. Key Improvements Over Current Site

| Issue on Live Site | Resolution for Phase 1 |
|-------------------|------------------------|
| Orange (`#F04F0D`) not used for CTAs — brand spec not followed | Restore Orange as primary CTA button; creates clear hierarchy |
| 4 font families in use (Montserrat Alternates, Alexandria, Space Grotesk, DM Sans) | Consolidate to 3: Montserrat Alternates (display), Montserrat (body), DM Sans (UI) |
| 0px border-radius on buttons (sharp corners) | Apply 4px rounding — modern, brand-consistent |
| Nav link colour `#82B540` (Light Green) on White header — low hierarchy | Dark Charcoal nav links with Green hover — better readability and hierarchy |
| Footer `#222429` drifts from brand spec `#0D2133` | Accept live site value `#222429` as canonical for digital (adequate; not worth changing) |
| Body copy colour uses grey `#686666` not the specified Green `#0A6E38` | Accept `#686666` for body copy — the Green on Green combination would reduce readability |
| No consistent card/surface treatment | Define card spec (8px radius, light shadow, 32px padding) |
| No explicit section spacing system | Lock to 8px base grid, 80px section padding |

---

## 20. Quick Reference

```
BRAND SENTENCE: Zimasa empowers people to take charge of their health — before problems begin.

COLOURS (dominant):   #0A6E38 Green  |  #0D2133 Navy
COLOURS (accent):     #F04F0D Orange (CTAs)  |  #0A406E Blue (B2B)
COLOURS (support):    #82B540 Light Green  |  #ABCF7A Pale Green
COLOURS (neutral):    #686666 Body Grey  |  #222429 Dark Charcoal  |  #FFFFFF White

FONTS:  Montserrat Alternates 700 (display headings)
        Montserrat 400/700 (body + secondary headings)
        DM Sans 600 (buttons, nav, UI labels)

BUTTONS:  Primary = Orange #F04F0D | Secondary = Light Green #82B540 | B2B = Blue #0A406E
BORDER-RADIUS:  Buttons 4px | Cards 8px | Icons 50%
SPACING:  Section 80px | Hero 120px | Cards 32px padding

B2B SHIFT:  Swap Green → Blue (#0A406E) as primary. Single-colour. Data-driven tone.
LOGO MIN SIZE:  371 × 150px (horizontal) | Clear space = height of "Z"
```

---

**Document owner**: Founder (brand decisions) + Dalton (Tailwind implementation)  
**Next**: Translate this guide into `04_Design-Tokens.md` as Tailwind config  
**Last updated**: May 2026
