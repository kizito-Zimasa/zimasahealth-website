# Design Tokens
**Version**: 1.0  
**Date**: May 2026  
**Status**: LOCKED — source of truth for all styling decisions  
**Derived from**: `06_Brand-Style-Guide.md`

> Copy the Tailwind config block into `tailwind.config.ts`. Copy the CSS variables block into `app/globals.css`. These two files are the only places where design decisions live.

---

## Tailwind Configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {

      // ─── COLOURS ────────────────────────────────────────────────────────
      colors: {
        // Primary brand
        'green':        { DEFAULT: '#0A6E38', dark: '#085C2F', light: '#0D8444' },
        'navy':         { DEFAULT: '#0D2133', dark: '#091929', light: '#122B44' },
        'orange':       { DEFAULT: '#F04F0D', dark: '#CC4209', light: '#F2611F' },
        'blue':         { DEFAULT: '#0A406E', dark: '#08365D', light: '#0C4D84' },

        // Extended palette
        'light-green':  { DEFAULT: '#82B540', dark: '#6E9936', light: '#92C450' },
        'pale-green':   '#ABCF7A',
        'cream':        '#FFFBFA',

        // Neutrals
        'dark':         '#222429',
        'body':         '#686666',
        'muted':        '#9E9C9C',
        'border':       'rgba(0,0,0,0.08)',
        'surface':      '#F8F9FA',
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────────────────
      fontFamily: {
        display:  ['"Montserrat Alternates"', 'sans-serif'],
        heading:  ['Montserrat', 'sans-serif'],
        ui:       ['"DM Sans"', 'sans-serif'],
        body:     ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        // Display / Hero
        'display':    ['56px', { lineHeight: '1.15', letterSpacing: '-0.02em',  fontWeight: '700' }],
        'display-sm': ['40px', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '700' }],

        // Headings
        'h2':   ['48px', { lineHeight: '1.3',  letterSpacing: '-0.013em', fontWeight: '700' }],
        'h3':   ['32px', { lineHeight: '1.3',  letterSpacing: '-0.013em', fontWeight: '700' }],
        'h4':   ['24px', { lineHeight: '1.3',  letterSpacing: 'normal',   fontWeight: '700' }],
        'h5':   ['18px', { lineHeight: '1.4',  letterSpacing: 'normal',   fontWeight: '700' }],
        'h6':   ['13px', { lineHeight: '1.4',  letterSpacing: '0.08em',   fontWeight: '700' }],

        // Body
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body':    ['16px', { lineHeight: '1.9' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5' }],

        // UI
        'label':   ['14px', { lineHeight: '1',    letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm':['12px', { lineHeight: '1',    letterSpacing: '0.05em', fontWeight: '600' }],
      },

      // ─── SPACING ──────────────────────────────────────────────────────────
      // All spacing is multiples of 8px (base unit)
      spacing: {
        // Section padding
        'section':    '80px',
        'section-sm': '48px',
        'section-xs': '32px',
        'hero':       '120px',
        'hero-sm':    '72px',
        'cta-band':   '64px',

        // Component
        'card':       '32px',
        'card-sm':    '24px',
        'nav':        '20px',
        'form-field': '12px',
      },

      // ─── BORDER RADIUS ────────────────────────────────────────────────────
      borderRadius: {
        'btn':    '4px',
        'card':   '8px',
        'input':  '6px',
        'badge':  '99px',
        'icon':   '50%',
        'modal':  '12px',
      },

      // ─── SHADOWS ──────────────────────────────────────────────────────────
      boxShadow: {
        'card':         '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card-hover':   '0 8px 32px rgba(10, 110, 56, 0.12)',
        'nav':          '0 2px 16px rgba(0, 0, 0, 0.08)',
        'dropdown':     '0 8px 32px rgba(0, 0, 0, 0.12)',
        'modal':        '0 24px 64px rgba(0, 0, 0, 0.16)',
        'btn':          '0 2px 8px rgba(240, 79, 13, 0.25)',
        'btn-green':    '0 2px 8px rgba(10, 110, 56, 0.25)',
        'focus':        '0 0 0 3px rgba(10, 110, 56, 0.2)',
      },

      // ─── MAX WIDTHS ────────────────────────────────────────────────────────
      maxWidth: {
        'content':  '1200px',
        'prose':    '72ch',
        'narrow':   '640px',
      },

      // ─── BREAKPOINTS (Tailwind defaults + custom) ──────────────────────────
      // sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
      // Custom: use 2xl at 1400px if needed for large content areas

      // ─── TRANSITIONS ───────────────────────────────────────────────────────
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // ─── GRADIENTS (via backgroundImage) ──────────────────────────────────
      backgroundImage: {
        'hero-green':  'linear-gradient(135deg, #0A6E38 0%, #0A406E 100%)',
        'hero-navy':   'linear-gradient(135deg, #0D2133 0%, #0A406E 100%)',
        'hero-overlay':'linear-gradient(to right, rgba(13,33,51,0.85) 0%, rgba(13,33,51,0.4) 100%)',
        'stat-card':   'linear-gradient(135deg, #0A6E38 0%, #0A406E 100%)',
        'cta-green':   'linear-gradient(135deg, #0A6E38 0%, #0D8444 100%)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## CSS Variables

Add to `app/globals.css` for any non-Tailwind usage (e.g., inline styles, MDX components):

```css
/* app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Colours */
  --color-green:         #0A6E38;
  --color-green-dark:    #085C2F;
  --color-green-light:   #0D8444;
  --color-navy:          #0D2133;
  --color-orange:        #F04F0D;
  --color-blue:          #0A406E;
  --color-light-green:   #82B540;
  --color-pale-green:    #ABCF7A;
  --color-cream:         #FFFBFA;
  --color-dark:          #222429;
  --color-body:          #686666;
  --color-muted:         #9E9C9C;
  --color-white:         #FFFFFF;

  /* Typography */
  --font-display:    "Montserrat Alternates", sans-serif;
  --font-heading:    Montserrat, sans-serif;
  --font-ui:         "DM Sans", sans-serif;

  /* Spacing */
  --spacing-section:  80px;
  --spacing-hero:     120px;
  --spacing-card:     32px;

  /* Radius */
  --radius-btn:   4px;
  --radius-card:  8px;
  --radius-input: 6px;
}

/* Base styles */
body {
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 1.9;
  color: var(--color-body);
  background-color: var(--color-white);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h5 {
  font-family: var(--font-display);
  color: var(--color-dark);
}

h3, h4, h6 {
  font-family: var(--font-heading);
  color: var(--color-dark);
}

h6 {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-green);
}

a {
  color: var(--color-green);
  text-decoration: none;
}

a:hover {
  color: var(--color-blue);
}
```

---

## Component Class Patterns

Reusable utility class patterns for common components. Define in `globals.css` under `@layer components`:

```css
@layer components {

  /* Buttons */
  .btn-primary {
    @apply inline-flex items-center justify-center px-10 py-[14px] bg-orange text-white font-ui text-label-sm font-semibold uppercase tracking-wider rounded-btn transition-all duration-200 hover:brightness-90 active:brightness-85 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center px-10 py-[14px] bg-light-green text-white font-ui text-label-sm font-semibold uppercase tracking-wider rounded-btn transition-all duration-200 hover:brightness-90;
  }

  .btn-outline {
    @apply inline-flex items-center justify-center px-10 py-[14px] bg-transparent border-2 border-green text-green font-ui text-label-sm font-semibold uppercase tracking-wider rounded-btn transition-all duration-200 hover:bg-green hover:text-white;
  }

  .btn-ghost {
    @apply inline-flex items-center justify-center px-10 py-[14px] bg-transparent border-2 border-white text-white font-ui text-label-sm font-semibold uppercase tracking-wider rounded-btn transition-all duration-200 hover:bg-white hover:text-dark;
  }

  .btn-b2b {
    @apply inline-flex items-center justify-center px-10 py-[14px] bg-blue text-white font-ui text-label-sm font-semibold uppercase tracking-wider rounded-btn transition-all duration-200 hover:brightness-90;
  }

  /* Section containers */
  .section-container {
    @apply max-w-content mx-auto px-6 lg:px-8;
  }

  .section-padding {
    @apply py-section;
  }

  .section-padding-sm {
    @apply py-section-sm;
  }

  /* Cards */
  .card {
    @apply bg-white rounded-card shadow-card p-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5;
  }

  /* Eyebrow labels */
  .eyebrow {
    @apply font-heading text-h6 font-bold text-green uppercase tracking-widest mb-3;
  }

  /* Form inputs */
  .form-input {
    @apply w-full border border-gray-200 rounded-input px-4 py-3 font-ui text-body text-dark placeholder-muted transition-all duration-200 focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20;
  }

  .form-label {
    @apply block font-ui text-body-sm font-semibold text-dark mb-1.5;
  }

  /* Hero section */
  .hero-section {
    @apply relative pt-hero pb-[100px] bg-hero-green text-white overflow-hidden;
  }

  /* Dark CTA band */
  .cta-band {
    @apply py-cta-band bg-green text-white text-center;
  }

  /* B2B section */
  .section-b2b {
    @apply bg-blue text-white;
  }
}
```

---

## Tokens Reference Card

Quick lookup for developers.

```
COLOURS
  Green:        #0A6E38   Tailwind: bg-green / text-green
  Navy:         #0D2133   Tailwind: bg-navy / text-navy
  Orange:       #F04F0D   Tailwind: bg-orange / text-orange
  Blue:         #0A406E   Tailwind: bg-blue / text-blue
  Light Green:  #82B540   Tailwind: bg-light-green
  Pale Green:   #ABCF7A   Tailwind: bg-pale-green
  Dark:         #222429   Tailwind: bg-dark / text-dark
  Body:         #686666   Tailwind: text-body
  White:        #FFFFFF   Tailwind: bg-white / text-white
  Cream:        #FFFBFA   Tailwind: bg-cream

FONTS
  Display headings:  font-display  (Montserrat Alternates 700)
  Body + headings:   font-heading  (Montserrat 400/700)
  Buttons + UI:      font-ui       (DM Sans 600)

SECTION SPACING
  Full:   py-section    (80px)
  Small:  py-section-sm (48px)
  Hero:   pt-hero       (120px)
  CTA:    py-cta-band   (64px)

BUTTONS
  Primary:    btn-primary   (Orange)
  Secondary:  btn-secondary (Light Green)
  Outline:    btn-outline   (Green border)
  Ghost:      btn-ghost     (White border, for dark backgrounds)
  B2B:        btn-b2b       (Mid Blue)

CARDS
  Default:  shadow-card → hover: shadow-card-hover + -translate-y-0.5
  Radius:   rounded-card (8px)
  Padding:  p-card (32px)
```
