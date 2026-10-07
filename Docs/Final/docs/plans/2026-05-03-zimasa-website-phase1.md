# Zimasa Website Phase 1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate zimasahealth.com from WordPress to Next.js 14 App Router as a fast, SEO-preserved, KDPA-compliant marketing site with 16 static pages, a 5-post blog, 3 form API routes, and Zimasa Go sign-up flows — live before 30 June 2026.

**Architecture:** SSG-first Next.js App Router with flat MDX files as the content layer. Server components by default; `'use client'` only for forms, mobile nav, and the blog scroll tracker. Three API routes handle all form submissions via Resend with honeypot + rate limiting. Separate authenticated apps (app.zimasahealth.com, dashboard.zimasahealth.com) are out of scope — the marketing site routes to them via redirect after form success.

**Tech Stack:** Next.js 14 (App Router), TypeScript 5, Tailwind CSS 3.4, `@next/mdx` + `next-mdx-remote`, Resend SDK, `@next/third-parties` (GA4), Lucide React, `@upstash/ratelimit` + `@upstash/redis`, `next-sitemap`, `gray-matter`

**Spec references (read before starting):**
- `01_Brief.md` — scope, forms, analytics events, security requirements
- `02_Site-Map.md` — URL structure, nav, footer
- `03_Redirects.md` — complete 301 redirect map (copy-pasteable `next.config.js` block)
- `04_Design-Tokens.md` — Tailwind config and `globals.css` (copy-paste ready)
- `05_Technical-Spec.md` — file structure, component patterns, API route code
- `06_Brand-Style-Guide.md` — colours, typography, button hierarchy, imagery rules
- `07_SEO-Spec.md` — page titles, meta descriptions, H1s, structured data
- `08_Employer-Dashboard-Spec.md` — dashboard scope (separate app — do not build)
- `09_Imagery-Spec.md` — image inventory, file structure, priority tiers
- `Content/*.md` — one file per page; complete copy and section structure
- `Blog/Taxonomy.md` — MDX frontmatter template, category slugs, post inventory
- `Blog/Posts/*.mdx` — 5 migrated blog posts

---

## Task 1: Repository Scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.js` (skeleton — full redirects added in Task 15)
- Create: `.gitignore`
- Create: `.env.local` (template only — never commit real values)

**Step 1: Initialise Next.js project**

```bash
npx create-next-app@latest zimasahealth-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"
cd zimasahealth-website
```

**Step 2: Install additional dependencies**

```bash
npm install \
  next-mdx-remote \
  gray-matter \
  resend \
  @next/third-parties \
  lucide-react \
  @upstash/ratelimit \
  @upstash/redis \
  next-sitemap

npm install -D @types/node
```

**Step 3: Create `.env.local` template**

```
# Never commit real values — set in Vercel dashboard
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# Upstash Redis (for rate limiting) — get from upstash.com
UPSTASH_REDIS_REST_URL=https://xxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxx
```

Add `.env.local` to `.gitignore`.

**Step 4: Add `.gitignore` entries**

Ensure `.gitignore` contains: `.env.local`, `.env*.local`, `node_modules/`, `.next/`, `out/`

**Step 5: Commit**

```bash
git add .
git commit -m "feat: initialise Next.js 14 App Router project with dependencies"
```

---

## Task 2: Design Tokens — Tailwind Config & Global CSS

**Files:**
- Modify: `tailwind.config.ts` (replace generated config)
- Modify: `app/globals.css` (replace generated styles)

**Step 1: Replace `tailwind.config.ts`**

Copy the full Tailwind config block verbatim from `04_Design-Tokens.md` § "Tailwind Configuration". This defines all custom colours, fonts, spacing, shadows, border-radius, and gradients. Do not add or remove anything — the spec is the source of truth.

Key tokens to verify are present after copying:
- `colors.green`, `colors.navy`, `colors.orange`, `colors.blue`, `colors.light-green`
- `fontFamily.display`, `fontFamily.heading`, `fontFamily.ui`
- `spacing.section`, `spacing.hero`, `spacing.cta-band`
- `boxShadow.card`, `boxShadow.card-hover`
- `backgroundImage.hero-green`, `backgroundImage.hero-navy`

**Step 2: Replace `app/globals.css`**

Copy the CSS variables block verbatim from `04_Design-Tokens.md` § "CSS Variables". This includes:
1. Google Fonts `@import` (Montserrat Alternates, Montserrat, DM Sans)
2. `@tailwind` directives
3. `:root` CSS variables
4. Base `body`, heading, and link styles
5. The full `@layer components` block (`.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-ghost`, `.btn-b2b`, `.section-container`, `.card`, `.eyebrow`, `.form-input`, `.form-label`, `.hero-section`, `.cta-band`, `.section-b2b`)

**Step 3: Create `lib/utils.ts`** (needed by Button component)

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install deps: `npm install clsx tailwind-merge`

**Step 4: Verify tokens compile**

```bash
npm run dev
```

Open http://localhost:3000. The default page will look unstyled — that's fine. Confirm no Tailwind compilation errors in the terminal.

**Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css lib/utils.ts
git commit -m "feat: apply Zimasa design tokens — Tailwind config and global CSS"
```

---

## Task 3: Root Layout Shell

**Files:**
- Modify: `app/layout.tsx`
- Create: `public/images/` (directory structure — empty placeholders for now)

**Step 1: Create public image directory structure**

```bash
mkdir -p public/images/hero public/images/product public/images/blog
touch public/images/og-default.jpg  # placeholder — replace with real 1200x630 before launch
touch public/images/logo.svg        # placeholder
touch public/images/logo-white.svg  # placeholder
```

**Step 2: Write `app/layout.tsx`**

Copy the root layout code verbatim from `05_Technical-Spec.md` § "Root Layout". Critical details:
- Google Consent Mode v2 inline `<script>` block MUST appear in `<head>` **before** any other scripts. This is what blocks GA4 until consent is accepted — script order alone is not sufficient.
- CookieYes `<script>` src contains `[YOUR_ID]` placeholder — leave it; Dalton inserts the real ID before go-live.
- `<GoogleAnalytics>` from `@next/third-parties/google` goes in `<body>` after CookieYes.
- `<Header />` and `<Footer />` are imported but not yet built — add empty placeholder components now.

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

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
  twitter: { card: 'summary_large_image', site: '@zimasahealth' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500,
          });
        `}} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <script
          src="https://cdn.cookieyes.com/client_data/[YOUR_ID]/script.js"
          type="text/javascript"
          async
        />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  )
}
```

**Step 3: Create placeholder layout components**

```typescript
// components/layout/Header.tsx
export default function Header() {
  return <header className="h-[72px] bg-white border-b border-black/5" />
}

// components/layout/Footer.tsx
export default function Footer() {
  return <footer className="bg-dark text-white py-16" />
}
```

**Step 4: Verify dev server starts**

```bash
npm run dev
```
Expected: no errors, blank page with nav shell visible at localhost:3000.

**Step 5: Commit**

```bash
git add app/layout.tsx components/layout/Header.tsx components/layout/Footer.tsx public/
git commit -m "feat: root layout with Consent Mode v2, GA4, placeholder header/footer"
```

---

## Task 4: UI Primitives — Button, Card, Badge

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/Card.tsx`
- Create: `components/ui/Badge.tsx`

**Step 1: Write `components/ui/Button.tsx`**

Copy the Button component code verbatim from `05_Technical-Spec.md` § "Button Component". It handles both `<Link>` and `<button>` variants based on whether `href` is provided. Variants map to CSS class names defined in `globals.css`: `btn-primary`, `btn-secondary`, `btn-outline`, `btn-ghost`, `btn-b2b`.

**Step 2: Write `components/ui/Card.tsx`**

Copy from `05_Technical-Spec.md` § "Card Component".

**Step 3: Write `components/ui/Badge.tsx`**

```typescript
// components/ui/Badge.tsx
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'navy' | 'blue' | 'orange'
  className?: string
}

const variantClasses = {
  green:  'bg-green/10 text-green',
  navy:   'bg-navy/10 text-navy',
  blue:   'bg-blue/10 text-blue',
  orange: 'bg-orange/10 text-orange',
}

export default function Badge({ children, variant = 'green', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-badge font-ui text-label-sm',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  )
}
```

**Step 4: Verify TypeScript**

```bash
npx tsc --noEmit
```
Expected: no errors.

**Step 5: Commit**

```bash
git add components/ui/
git commit -m "feat: Button, Card, Badge UI primitives"
```

---

## Task 5: Section Components

**Files:**
- Create: `components/sections/Hero.tsx`
- Create: `components/sections/CtaBand.tsx`
- Create: `components/sections/StatsStrip.tsx`
- Create: `components/sections/FeatureCard.tsx`
- Create: `components/sections/SectionHeader.tsx`

**Step 1: Write `components/sections/Hero.tsx`**

Copy verbatim from `05_Technical-Spec.md` § "Hero Section". Props: `eyebrow`, `headline`, `subheadline`, `primaryCta`, `secondaryCta`, `backgroundVariant` ('green' | 'navy').

**Step 2: Write `components/sections/CtaBand.tsx`**

Copy verbatim from `05_Technical-Spec.md` § "CTA Band".

**Step 3: Write `components/sections/StatsStrip.tsx`**

```typescript
// components/sections/StatsStrip.tsx
interface Stat { value: string; label: string }

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-navy py-section-sm">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-h2 text-white mb-2">{stat.value}</p>
              <p className="font-ui text-label text-white/70 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Write `components/sections/FeatureCard.tsx`**

```typescript
// components/sections/FeatureCard.tsx
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  eyebrow?: string
  headline: string
  body: string
  cta?: { label: string; href: string }
}

export default function FeatureCard({ icon: Icon, eyebrow, headline, body, cta }: FeatureCardProps) {
  return (
    <div className="card">
      <div className="w-[60px] h-[60px] rounded-icon bg-green/10 flex items-center justify-center mb-6">
        <Icon size={32} className="text-green" />
      </div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h4 className="font-heading text-h4 text-dark mb-3">{headline}</h4>
      <p className="text-body text-body mb-6">{body}</p>
      {cta && (
        <a href={cta.href} className="font-ui text-label text-green uppercase tracking-wider hover:text-blue transition-colors duration-200">
          {cta.label} →
        </a>
      )}
    </div>
  )
}
```

**Step 5: Write `components/sections/SectionHeader.tsx`**

```typescript
// components/sections/SectionHeader.tsx
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export default function SectionHeader({ eyebrow, headline, subheadline, align = 'center', theme = 'light', className }: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'
  const headlineColor = theme === 'dark' ? 'text-white' : 'text-dark'
  const subColor = theme === 'dark' ? 'text-white/80' : 'text-body'
  const maxW = align === 'center' ? 'max-w-narrow mx-auto' : ''

  return (
    <div className={cn('mb-12', textAlign, className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={cn('font-display text-h2 mb-4', headlineColor, maxW)}>{headline}</h2>
      {subheadline && <p className={cn('text-body-lg', subColor, maxW)}>{subheadline}</p>}
    </div>
  )
}
```

**Step 6: Commit**

```bash
git add components/sections/
git commit -m "feat: Hero, CtaBand, StatsStrip, FeatureCard, SectionHeader section components"
```

---

## Task 6: Header & Footer (Full Implementation)

**Files:**
- Modify: `components/layout/Header.tsx`
- Create: `components/layout/NavDropdown.tsx`
- Create: `components/layout/MobileMenu.tsx`
- Modify: `components/layout/Footer.tsx`

**Step 1: Write `components/layout/NavDropdown.tsx`**

Solutions dropdown — shows on hover/click of "Solutions" nav item. Client component.

```typescript
'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const solutions = [
  { label: 'ZHEP', subtitle: 'Health Engagement Platform', href: '/solutions/zhep/' },
  { label: 'ZPS', subtitle: 'Zimasa Payer Solution', href: '/solutions/zps/' },
]

export default function NavDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 font-ui text-[14px] font-medium text-dark hover:text-green transition-colors duration-150"
        aria-expanded={open}
      >
        Solutions <ChevronDown size={14} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-[260px] bg-white rounded-b-card border border-black/5 shadow-dropdown z-50">
          {solutions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 hover:bg-cream transition-colors duration-150"
            >
              <p className="font-ui text-[14px] font-semibold text-dark">{item.label}</p>
              <p className="font-ui text-[12px] text-body">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
```

**Step 2: Write `components/layout/MobileMenu.tsx`**

Full-screen overlay, client component.

```typescript
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Insurers & TPAs', href: '/insurers-tpas/' },
  { label: 'Employers', href: '/employers/' },
  { label: 'Members', href: '/zimasa-go/' },
  { label: 'Providers', href: '/healthcare-providers/' },
  { label: 'ZHEP', href: '/solutions/zhep/' },
  { label: 'ZPS', href: '/solutions/zps/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about/' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-dark" aria-label="Open menu">
        <Menu size={24} />
      </button>
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setOpen(false)}>
              <img src="/images/logo.svg" alt="Zimasa" className="h-8" />
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} className="text-dark" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-[20px] font-semibold text-dark text-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Link href="/get-started/" onClick={() => setOpen(false)} className="btn-primary text-center">
              Get Started Free
            </Link>
            <Link href="/book-demo/" onClick={() => setOpen(false)} className="btn-outline text-center">
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
```

**Step 3: Write full `components/layout/Header.tsx`**

Sticky header, 72px tall, white background with shadow on scroll.

```typescript
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavDropdown from './NavDropdown'
import MobileMenu from './MobileMenu'

const primaryLinks = [
  { label: 'Insurers & TPAs', href: '/insurers-tpas/' },
  { label: 'Employers', href: '/employers/' },
  { label: 'Members', href: '/zimasa-go/' },
  { label: 'Providers', href: '/healthcare-providers/' },
]

const secondaryLinks = [
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about/' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 h-[72px] bg-white border-b border-black/5 transition-shadow duration-200 ${scrolled ? 'shadow-nav' : ''}`}>
      <div className="section-container h-full flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image src="/images/logo.svg" alt="Zimasa" width={140} height={36} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-ui text-[14px] font-medium text-dark hover:text-green transition-colors duration-150">
              {link.label}
            </Link>
          ))}
          <NavDropdown />
          {secondaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-ui text-[14px] font-medium text-dark hover:text-green transition-colors duration-150">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/get-started/" className="btn-secondary text-sm px-6 py-2">
            Get Started
          </Link>
          <Link href="/book-demo/" className="btn-primary text-sm px-6 py-2">
            Book Demo
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
```

**Step 4: Write full `components/layout/Footer.tsx`**

Reference `02_Site-Map.md` § "Footer Navigation" for the exact columns, links, address, and phone number (`+254710241892`). Use `logo-white.svg`. Include tagline "Turn Wellness Spending Into Verified Active Days". Footer columns: Who We Serve / Solutions / Company / Contact. Bottom bar: Privacy Centre, Terms, © 2026 Zimasa.

**Step 5: Verify dev server — check nav renders**

```bash
npm run dev
```
Inspect header at localhost:3000. Confirm sticky behaviour, dropdown opens, mobile breakpoint shows hamburger.

**Step 6: Commit**

```bash
git add components/layout/
git commit -m "feat: full Header with sticky scroll, Solutions dropdown, mobile menu, Footer"
```

---

## Task 7: Content Layer — MDX Utilities & Blog Types

**Files:**
- Create: `lib/mdx.ts`
- Create: `lib/blog.ts`
- Create: `types/blog.ts`
- Create: `content/pages/` (directory)
- Create: `content/blog/playbook/` `content/blog/zimasa-updates/` `content/blog/payers-schemes/` `content/blog/employers-hr/` (directories)

**Step 1: Create content directory structure**

```bash
mkdir -p content/pages content/blog/playbook content/blog/zimasa-updates content/blog/payers-schemes content/blog/employers-hr
```

**Step 2: Write `types/blog.ts`**

```typescript
// types/blog.ts
export interface BlogPost {
  slug: string
  category: string
  title: string
  description: string
  publishedAt: string
  modifiedAt?: string
  author: string
  tags?: string[]
  audience?: string[]
  readTime?: number
  ogImage?: string
  series?: string
  seriesPart?: number
}
```

**Step 3: Write `lib/mdx.ts`**

Copy verbatim from `05_Technical-Spec.md` § "MDX Content Loading — Page Content".

**Step 4: Write `lib/blog.ts`**

Copy verbatim from `05_Technical-Spec.md` § "MDX Content Loading — Blog Posts". Includes `getAllPosts()`, `getPostsByCategory()`, `getPost()`.

**Step 5: Write test for `getAllPosts` and `getPost`**

```typescript
// __tests__/lib/blog.test.ts
import { getAllPosts, getPostsByCategory } from '@/lib/blog'

// These tests will fail until blog MDX files are in place (Task 12)
// Run them after Task 12 to verify blog loading works

describe('blog utilities', () => {
  test('getAllPosts returns array', () => {
    const posts = getAllPosts()
    expect(Array.isArray(posts)).toBe(true)
  })

  test('posts are sorted newest first', () => {
    const posts = getAllPosts()
    if (posts.length < 2) return
    const dates = posts.map(p => new Date(p.publishedAt).getTime())
    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i]).toBeGreaterThanOrEqual(dates[i + 1])
    }
  })

  test('getPostsByCategory filters correctly', () => {
    const posts = getPostsByCategory('playbook')
    posts.forEach(p => expect(p.category).toBe('playbook'))
  })
})
```

Install Jest: `npm install -D jest @types/jest jest-environment-node ts-jest` and add `jest.config.ts`.

**Step 6: Commit**

```bash
git add lib/ types/ content/ __tests__/
git commit -m "feat: MDX utilities, blog types, content directory structure, blog tests"
```

---

## Task 8: Analytics Helpers & Scroll Tracker

**Files:**
- Create: `lib/analytics.ts`
- Create: `components/blog/ScrollTracker.tsx`

**Step 1: Write `lib/analytics.ts`**

Copy verbatim from `05_Technical-Spec.md` § "Analytics Helpers". Exports: `trackCtaClick`, `trackFormSubmit`, `trackSignup`, `trackArticleRead`.

**Step 2: Write test for analytics helpers**

```typescript
// __tests__/lib/analytics.test.ts
import { trackCtaClick, trackFormSubmit, trackSignup, trackArticleRead } from '@/lib/analytics'

describe('analytics helpers', () => {
  let gtagCalls: unknown[][] = []

  beforeEach(() => {
    gtagCalls = []
    window.gtag = (...args: unknown[]) => { gtagCalls.push(args) }
  })

  test('trackCtaClick fires cta_click event', () => {
    trackCtaClick('Book Demo', '/book-demo/')
    expect(gtagCalls[0]).toEqual(['event', 'cta_click', { cta_label: 'Book Demo', page: '/book-demo/' }])
  })

  test('trackFormSubmit fires form_submit event', () => {
    trackFormSubmit('book_demo')
    expect(gtagCalls[0]).toEqual(['event', 'form_submit', { form_id: 'book_demo' }])
  })

  test('trackSignup fires signup event with correct tier', () => {
    trackSignup('member')
    expect(gtagCalls[0]).toEqual(['event', 'signup', { type: 'member', tier: 'go' }])
    trackSignup('employer')
    expect(gtagCalls[1]).toEqual(['event', 'signup', { type: 'employer', tier: 'lite' }])
  })

  test('trackArticleRead fires article_read event', () => {
    trackArticleRead('half-trillion-problem')
    expect(gtagCalls[0]).toEqual(['event', 'article_read', { article_slug: 'half-trillion-problem' }])
  })
})
```

**Step 3: Run tests**

```bash
npx jest __tests__/lib/analytics.test.ts
```
Expected: all 4 pass.

**Step 4: Write `components/blog/ScrollTracker.tsx`**

Client component — fires `article_read` GA4 event once when scroll depth exceeds 75%.

```typescript
'use client'
import { useEffect, useRef } from 'react'
import { trackArticleRead } from '@/lib/analytics'

export default function ScrollTracker({ slug }: { slug: string }) {
  const fired = useRef(false)

  useEffect(() => {
    function onScroll() {
      if (fired.current) return
      const el = document.documentElement
      const scrolled = el.scrollTop + el.clientHeight
      const total = el.scrollHeight
      if (scrolled / total >= 0.75) {
        trackArticleRead(slug)
        fired.current = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])

  return null
}
```

**Step 5: Commit**

```bash
git add lib/analytics.ts components/blog/ __tests__/lib/analytics.test.ts
git commit -m "feat: analytics helpers with tests, ScrollTracker client component"
```

---

## Task 9: API Routes — Book Demo, Contact, Get Started

**Files:**
- Create: `app/api/book-demo/route.ts`
- Create: `app/api/contact/route.ts`
- Create: `app/api/get-started/route.ts`
- Create: `lib/ratelimit.ts`

**Step 1: Write `lib/ratelimit.ts`**

```typescript
// lib/ratelimit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '10 m'),
  analytics: false,
})
```

**Step 2: Write `app/api/book-demo/route.ts`**

Copy verbatim from `05_Technical-Spec.md` § "Book Demo" API route. Then add rate limiting at the top of the POST handler:

```typescript
// Add after honeypot check:
const ip = req.headers.get('x-forwarded-for') ?? 'anonymous'
const { success } = await ratelimit.limit(ip)
if (!success) {
  return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
}
```

Import `ratelimit` from `@/lib/ratelimit`.

**Step 3: Write `app/api/contact/route.ts`**

Copy verbatim from `05_Technical-Spec.md` § "Contact Us" API route. Add the same rate limiting block.

**Step 4: Write `app/api/get-started/route.ts`**

Copy verbatim from `05_Technical-Spec.md` § "Get Started (Zimasa Go)" API route. Add rate limiting.

**Step 5: Write API route tests**

```typescript
// __tests__/api/book-demo.test.ts
import { POST } from '@/app/api/book-demo/route'
import { NextRequest } from 'next/server'

// Mock Resend and ratelimit
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: jest.fn().mockResolvedValue({ id: 'test-id' }) }
  }))
}))
jest.mock('@/lib/ratelimit', () => ({
  ratelimit: { limit: jest.fn().mockResolvedValue({ success: true }) }
}))

function makeRequest(body: object) {
  return new NextRequest('http://localhost/api/book-demo', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
  })
}

describe('POST /api/book-demo', () => {
  test('rejects honeypot submissions silently', async () => {
    const res = await POST(makeRequest({ website: 'bot', name: 'A', email: 'a@b.com', company: 'X', phone: '1234' }))
    const json = await res.json()
    expect(json.success).toBe(true) // silent discard
  })

  test('rejects missing required fields', async () => {
    const res = await POST(makeRequest({ name: 'A', email: 'a@b.com' })) // missing company and phone
    expect(res.status).toBe(400)
  })

  test('rejects oversized inputs', async () => {
    const res = await POST(makeRequest({ name: 'A'.repeat(101), email: 'a@b.com', company: 'X', phone: '1234' }))
    expect(res.status).toBe(400)
  })

  test('returns success on valid submission', async () => {
    const res = await POST(makeRequest({ name: 'Amina Wanjiru', email: 'amina@co.ke', company: 'Acme', phone: '+254711111111' }))
    const json = await res.json()
    expect(json.success).toBe(true)
  })
})
```

**Step 6: Run API tests**

```bash
npx jest __tests__/api/
```
Expected: all pass.

**Step 7: Commit**

```bash
git add app/api/ lib/ratelimit.ts __tests__/api/
git commit -m "feat: API routes for book-demo, contact, get-started with honeypot, validation, rate limiting"
```

---

## Task 10: Form Components

**Files:**
- Create: `components/forms/BookDemoForm.tsx`
- Create: `components/forms/ContactForm.tsx`
- Create: `components/forms/GetStartedForm.tsx`

All forms are `'use client'`. Pattern: controlled inputs, client-side validation, UTM passthrough, success state in-place (no redirect for Book Demo / Contact Us), redirect on success for Get Started.

**Step 1: Write `components/forms/BookDemoForm.tsx`**

Fields per `Content/Book-Demo.md` § "Form Fields": Full Name (required), Work Email (required), Company (required), Phone (required), Role (select, optional), Solution Interest (select, optional), Timeline (select, optional), honeypot `website` (hidden).

On success: show in-place success message (copy from spec). Fire `trackFormSubmit('book_demo')`.

```typescript
'use client'
import { useState, useEffect } from 'react'
import { trackFormSubmit, trackCtaClick } from '@/lib/analytics'

// Capture UTM params from URL
function getUtmParams() {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  return {
    utmSource: p.get('utm_source') ?? '',
    utmMedium: p.get('utm_medium') ?? '',
    utmCampaign: p.get('utm_campaign') ?? '',
  }
}

export default function BookDemoForm() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', phone: '', role: '', solutionInterest: '', timeline: '', website: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function validate() {
    const e: Record<string, string> = {}
    if (!fields.name.trim()) e.name = 'Please enter your name'
    if (!fields.email.trim()) e.email = 'Please enter your email address'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Please enter a valid email address'
    if (!fields.company.trim()) e.company = 'Please enter your organisation name'
    if (!fields.phone.trim()) e.phone = 'Please enter your phone number'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...fields, ...getUtmParams() }),
      })
      if (res.ok) {
        setStatus('success')
        trackFormSubmit('book_demo')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 bg-green/5 rounded-card border border-green/20">
        <h3 className="font-display text-h3 text-dark mb-3">You're booked.</h3>
        <p className="text-body text-body mb-6">Thank you, {fields.name}. A member of the Zimasa team will be in touch within 1 business day to confirm your demo time.</p>
        <div className="flex gap-4">
          <a href="/solutions/zhep/" className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">Read about ZHEP →</a>
          <a href="/insurers-tpas/" className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">Explore Payers Solution →</a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from users, filled only by bots */}
      <input type="text" name="website" value={fields.website} onChange={e => setFields(f => ({...f, website: e.target.value}))} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="form-label">Full Name <span className="text-orange">*</span></label>
          <input className="form-input" type="text" placeholder="Your name" value={fields.name} onChange={e => setFields(f => ({...f, name: e.target.value}))} maxLength={100} />
          {errors.name && <p className="text-[12px] text-red-600 mt-1">{errors.name}</p>}
        </div>
        {/* Email */}
        <div>
          <label className="form-label">Work Email <span className="text-orange">*</span></label>
          <input className="form-input" type="email" placeholder="you@company.com" value={fields.email} onChange={e => setFields(f => ({...f, email: e.target.value}))} maxLength={254} />
          {errors.email && <p className="text-[12px] text-red-600 mt-1">{errors.email}</p>}
        </div>
        {/* Company */}
        <div>
          <label className="form-label">Company / Organisation <span className="text-orange">*</span></label>
          <input className="form-input" type="text" placeholder="Organisation name" value={fields.company} onChange={e => setFields(f => ({...f, company: e.target.value}))} maxLength={200} />
          {errors.company && <p className="text-[12px] text-red-600 mt-1">{errors.company}</p>}
        </div>
        {/* Phone */}
        <div>
          <label className="form-label">Phone Number <span className="text-orange">*</span></label>
          <input className="form-input" type="tel" placeholder="+254 7XX XXX XXX" value={fields.phone} onChange={e => setFields(f => ({...f, phone: e.target.value}))} maxLength={20} />
          {errors.phone && <p className="text-[12px] text-red-600 mt-1">{errors.phone}</p>}
        </div>
        {/* Role */}
        <div>
          <label className="form-label">Your Role</label>
          <select className="form-input" value={fields.role} onChange={e => setFields(f => ({...f, role: e.target.value}))}>
            <option value="">Select your role</option>
            <option>CMO / CRO / Risk Manager</option>
            <option>HR Director / Benefits Manager</option>
            <option>CEO / CFO</option>
            <option>Practice Owner / Clinic Lead</option>
            <option>Other</option>
          </select>
        </div>
        {/* Solution Interest */}
        <div>
          <label className="form-label">Solution Interest</label>
          <select className="form-input" value={fields.solutionInterest} onChange={e => setFields(f => ({...f, solutionInterest: e.target.value}))}>
            <option value="">Select solution</option>
            <option>ZHEP (Member Engagement Platform)</option>
            <option>Payers Solution</option>
            <option>Healthcare Provider Network</option>
            <option>Not sure yet</option>
          </select>
        </div>
        {/* Timeline */}
        <div>
          <label className="form-label">Timeline</label>
          <select className="form-input" value={fields.timeline} onChange={e => setFields(f => ({...f, timeline: e.target.value}))}>
            <option value="">Select timeline</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Exploring options</option>
          </select>
        </div>

        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
          {status === 'loading' ? 'Sending...' : 'Book My Demo'}
        </button>

        {status === 'error' && <p className="text-[12px] text-red-600 text-center">Something went wrong. Please try again or email us at sales@zimasahealth.com.</p>}

        <p className="text-[12px] text-body text-center">We'll never share your details. By submitting you agree to our <a href="/privacy-centre/" className="text-green hover:underline">Privacy Policy</a>.</p>
      </div>
    </form>
  )
}
```

**Step 2: Write `components/forms/ContactForm.tsx`**

Fields per `Content/Contact-Us.md`: Name (required), Email (required), Company (optional), Inquiry Type (select, optional), Message (required, max 2000). On success: in-place message. Fire `trackFormSubmit('contact_us')`.

Follow same pattern as BookDemoForm above. POST to `/api/contact`.

**Step 3: Write `components/forms/GetStartedForm.tsx`**

Dual-path component. Reads `?path=member` or `?path=employer` from URL on mount to pre-select. Each path shows its own set of fields (per `Content/Get-Started.md`).

On member success: `window.location.href = redirect` (from API response). Fire `trackSignup('member')`.
On employer success: `window.location.href = redirect`. Fire `trackSignup('employer')`.

```typescript
// Key structure (implement full form following BookDemoForm pattern):
'use client'
// ... read URL param on mount
const [path, setPath] = useState<'member' | 'employer' | null>(null)
useEffect(() => {
  const p = new URLSearchParams(window.location.search).get('path')
  if (p === 'member' || p === 'employer') setPath(p)
}, [])

// Two path cards — clicking one sets path and scrolls to form
// Form A (member): name, email, employerCode (optional), honeypot website
// Form B (employer): orgName, email, workforceSize (select), honeypot website
// On success: window.location.href = json.redirect
```

**Step 4: Commit**

```bash
git add components/forms/
git commit -m "feat: BookDemoForm, ContactForm, GetStartedForm with validation, UTM passthrough, GA4 events"
```

---

## Task 11: Content Files — All 16 Pages

**Files:**
- Create: `content/pages/home.mdx` through `content/pages/terms.mdx` (16 files)

**Step 1: Migrate each page's copy from the Content/*.md spec files**

For each page, the corresponding spec file in `Content/` contains the complete copy, structured by section. The content files go into `content/pages/` as `.mdx` files.

For pages that are primarily structured (most of them), the MDX file holds the **frontmatter** and the page component reads from it. The simplest approach: use frontmatter to hold all structured content as data, and build the page component against the spec.

Minimal MDX format — just frontmatter + any long-form copy that's markdown:

```mdx
---
title: "Zimasa | Health Engagement OS for Payers & Employers"
description: "Built for Africa. White-label ready. Measurable results..."
ogImage: "/images/og-home.jpg"
---
```

Pages with prose body (Privacy Centre, Terms, About mission section) include MDX body. All other pages are built from component props driven by the spec directly in the page component.

**Files to create with correct slugs:**
- `content/pages/home.mdx`
- `content/pages/payers.mdx` (for `/insurers-tpas/`)
- `content/pages/employers.mdx`
- `content/pages/zimasa-go.mdx`
- `content/pages/healthcare-providers.mdx`
- `content/pages/solutions-hub.mdx`
- `content/pages/zhep.mdx`
- `content/pages/solutions/zps.mdx` ← nested directory
- `content/pages/who-we-help.mdx`
- `content/pages/about.mdx`
- `content/pages/insights-hub.mdx`
- `content/pages/get-started.mdx`
- `content/pages/book-demo.mdx`
- `content/pages/contact-us.mdx`
- `content/pages/privacy-centre.mdx`
- `content/pages/terms.mdx`

**Step 2: Commit**

```bash
git add content/pages/
git commit -m "feat: migrate all 16 page content files to content/pages/"
```

---

## Task 12: Blog Post Migration

**Files:**
- Create: `content/blog/playbook/half-trillion-problem-kenya-health-spending.mdx`
- Create: `content/blog/playbook/one-medical-crisis-kenyan-households-financial-resilience.mdx`
- Create: `content/blog/playbook/empowering-africas-health-wellness-providers.mdx`
- Create: `content/blog/zimasa-updates/from-processing-claims-to-preventing-them.mdx`
- Create: `content/blog/zimasa-updates/introducing-zimasa-health-engagement-os.mdx`
- Copy: `Blog/Images/*` → `public/images/blog/`

**Step 1: Copy blog images to public**

```bash
cp "Blog/Images/half-trillion-problem-hero.jpg" public/images/blog/
cp "Blog/Images/one-medical-crisis-hero.jpg" public/images/blog/
cp "Blog/Images/empowering-providers-hero.jpg" public/images/blog/
cp "Blog/Images/from-processing-claims-hero.jpg" public/images/blog/
cp "Blog/Images/from-processing-claims-body.jpg" public/images/blog/
cp "Blog/Images/why-zimasa-hero.png" public/images/blog/
```

**Step 2: Copy each MDX post to the correct path**

Source files are in `Blog/Posts/`. Move each one to `content/blog/[category]/[correct-slug].mdx`.

| Source file | Target path |
|---|---|
| `playbook-half-trillion-problem.mdx` | `content/blog/playbook/half-trillion-problem-kenya-health-spending.mdx` |
| `playbook-one-medical-crisis.mdx` | `content/blog/playbook/one-medical-crisis-kenyan-households-financial-resilience.mdx` |
| `playbook-empowering-providers.mdx` | `content/blog/playbook/empowering-africas-health-wellness-providers.mdx` |
| `zimasa-updates-from-processing-claims.mdx` | `content/blog/zimasa-updates/from-processing-claims-to-preventing-them.mdx` |
| `zimasa-updates-introducing-zimasa-engagement-os.mdx` | `content/blog/zimasa-updates/introducing-zimasa-health-engagement-os.mdx` |

**Step 3: Verify frontmatter on each post**

Each post must have these required fields per `Blog/Taxonomy.md`: `title`, `description`, `category`, `slug`, `publishedAt`, `author`. Verify `slug` matches the filename (without `.mdx`). Verify `category` is one of: `playbook`, `zimasa-updates`, `payers-schemes`, `employers-hr`.

**Step 4: Run blog utility tests**

```bash
npx jest __tests__/lib/blog.test.ts
```
Expected: 3 tests pass. If `getAllPosts` returns 5 posts sorted by date, blog migration is correct.

**Step 5: Commit**

```bash
git add content/blog/ public/images/blog/
git commit -m "feat: migrate 5 blog posts to correct content paths with images"
```

---

## Task 13: P0 Static Pages — Home, Payers, ZHEP, ZPS, Employers, Zimasa Go

Build pages in the order that proves the most surface area first. Use section components built in Tasks 4–6.

### Page Build Pattern

For each page:
1. Create `app/[route]/page.tsx`
2. Export `metadata` (copy title + description from `07_SEO-Spec.md`)
3. Build each section as spec'd in `Content/[Page].md` using section components
4. Verify at localhost:3000/[route]
5. Commit after each page

**Files:**
- Create: `app/page.tsx` (Home `/`)
- Create: `app/insurers-tpas/page.tsx`
- Create: `app/solutions/zhep/page.tsx`
- Create: `app/solutions/zps/page.tsx`
- Create: `app/employers/page.tsx`
- Create: `app/zimasa-go/page.tsx`

**Step 1: Build Home page (`app/page.tsx`)**

10 sections per `Content/Home.md`:
1. Hero — eyebrow "Health Engagement OS", headline "Turn Wellness Spending Into Verified Active Days", two CTAs
2. StatsStrip — 4 stats (50–70%, 8–12, 90 days, 4)
3. Audience self-ID — 2×2 grid of FeatureCards (Insurers, Employers, Members, Providers)
4. Solutions overview — 3-column card grid (ZHEP, Payers Solution, Employers + Zimasa Go)
5. How It Works — 3-step process (Enrol → Engage → Verify)
6. Who We Help — 3 persona cards
7. Zimasa Go freemium CTA — two-path sign-up prompt
8. Early Partner Programme — B2B offer block (bg-blue)
9. Trust & Credentials — 3 trust points
10. CtaBand — "Ready to See Measurable Results in 90 Days?"

Add Organization JSON-LD schema (copy from `07_SEO-Spec.md` § "Organization").

**Step 2: Build Insurers & TPAs page (`app/insurers-tpas/page.tsx`)**

Per `Content/Payers.md`. Key: B2B blue visual territory, navy hero, paired dashboard mockup visual, CtaBand. Use `btn-b2b` variant for CTAs on blue sections.

**Step 3: Build ZHEP page (`app/solutions/zhep/page.tsx`)**

Per `Content/ZHEP.md`.

**Step 4: Build ZPS page (`app/solutions/zps/page.tsx`)**

Per `Content/ZPS.md`. Tabbed or stacked 30/60/90 dashboard section (3 panels). Note the deeper nested path — `app/solutions/zps/page.tsx` and content source is `content/pages/solutions/zps.mdx`.

**Step 5: Build Employers page (`app/employers/page.tsx`)**

Per `Content/Employers.md`.

**Step 6: Build Zimasa Go page (`app/zimasa-go/page.tsx`)**

Per `Content/Zimasa-Go.md`. Nav label is "Members" but URL is `/zimasa-go/`.

**Step 7: Verify all 6 P0 pages render**

```bash
npm run build && npm run start
```
Visit each URL. Check: no build errors, correct H1, correct CTA buttons render with orange primary style, nav active state highlights correctly.

**Step 8: Commit after all 6 P0 pages**

```bash
git add app/
git commit -m "feat: P0 static pages — Home, Insurers & TPAs, ZHEP, ZPS, Employers, Zimasa Go"
```

---

## Task 14: Conversion Pages & P1 Static Pages

**Files:**
- Create: `app/get-started/page.tsx`
- Create: `app/book-demo/page.tsx`
- Create: `app/solutions/page.tsx`
- Create: `app/healthcare-providers/page.tsx`
- Create: `app/who-we-help/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/contact-us/page.tsx`
- Create: `app/privacy-centre/page.tsx`
- Create: `app/terms/page.tsx`

**Step 1: Build Get Started page (`app/get-started/page.tsx`)**

Import `GetStartedForm`. Layout per `Content/Get-Started.md`: short green hero, two path-selector cards, form, reassurance strip, "Already a member?" block, "What happens next" (employer path only).

**Step 2: Build Book Demo page (`app/book-demo/page.tsx`)**

Import `BookDemoForm`. Split layout: form left (60%), value proof right (40%). Per `Content/Book-Demo.md`.

**Step 3: Build Solutions Hub (`app/solutions/page.tsx`)**

Per `Content/Solutions-Hub.md`. Two product cards (ZHEP, ZPS) with CTAs.

**Step 4: Build remaining P1 pages**

Follow the page build pattern. Each page: metadata → sections → verify → commit.

- `Healthcare Providers` — per `Content/Healthcare-Providers.md`
- `Who We Help` — per `Content/Who-We-Help.md` (footer-only; no hero image required)
- `About` — per `Content/About.md`
- `Contact Us` — imports `ContactForm`; per `Content/Contact-Us.md`
- `Privacy Centre` — long-form text content; per `Content/Privacy-Centre.md`
- `Terms` — long-form text; per `Content/Terms.md`

**Step 5: Verify all 16 pages render at build time**

```bash
npm run build
```
Expected: 16 static pages generated. No "params" warnings. No missing component errors.

**Step 6: Commit**

```bash
git add app/
git commit -m "feat: all conversion and P1 static pages complete — 16 pages total"
```

---

## Task 15: Blog Routes — Hub, Category Pages, Individual Posts

**Files:**
- Create: `app/insights/page.tsx`
- Create: `app/insights/[category]/page.tsx`
- Create: `app/insights/[category]/[slug]/page.tsx`
- Create: `components/blog/PostCard.tsx`
- Create: `components/blog/CategoryFilter.tsx`

**Step 1: Write `components/blog/PostCard.tsx`**

```typescript
// components/blog/PostCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/types/blog'

export default function PostCard({ post }: { post: BlogPost }) {
  const href = `/insights/${post.category}/${post.slug}/`
  return (
    <article className="bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200">
      {post.ogImage && (
        <Link href={href}>
          <Image src={post.ogImage} alt={post.title} width={800} height={450} className="w-full aspect-video object-cover" />
        </Link>
      )}
      <div className="p-6">
        <p className="eyebrow mb-2">{post.category.replace('-', ' ')}</p>
        <h3 className="font-heading text-h4 text-dark mb-3">
          <Link href={href} className="hover:text-green transition-colors duration-150">{post.title}</Link>
        </h3>
        <p className="text-body-sm text-body mb-4 line-clamp-3">{post.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-ui text-[12px] text-muted">{post.author} · {post.readTime ?? 5} min read</span>
          <Link href={href} className="font-ui text-label-sm text-green uppercase tracking-wider hover:text-blue">Read →</Link>
        </div>
      </div>
    </article>
  )
}
```

**Step 2: Write `components/blog/CategoryFilter.tsx`**

Client component — audience filter applied client-side against the pre-loaded post array.

```typescript
'use client'
import { useState } from 'react'
import { BlogPost } from '@/types/blog'
import PostCard from './PostCard'

const AUDIENCES = ['All', 'payers', 'employers', 'providers'] as const

export default function CategoryFilter({ posts }: { posts: BlogPost[] }) {
  const [audience, setAudience] = useState<string>('All')
  const filtered = audience === 'All' ? posts : posts.filter(p => p.audience?.includes(audience))

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {AUDIENCES.map(a => (
          <button
            key={a}
            onClick={() => setAudience(a)}
            className={`px-4 py-2 rounded-badge font-ui text-label-sm uppercase tracking-wider transition-colors duration-150 ${audience === a ? 'bg-green text-white' : 'bg-surface text-body hover:bg-green/10'}`}
          >
            {a === 'All' ? 'All posts' : a}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(post => <PostCard key={`${post.category}-${post.slug}`} post={post} />)}
      </div>
    </div>
  )
}
```

**Step 3: Build Insights Hub (`app/insights/page.tsx`)**

```typescript
// app/insights/page.tsx
import { getAllPosts } from '@/lib/blog'
import CategoryFilter from '@/components/blog/CategoryFilter'
import Hero from '@/components/sections/Hero'

export const metadata = {
  title: 'Insights — Health Engagement Playbook | Zimasa',
  description: 'The Zimasa Insights hub. Practical guidance on health engagement strategy for payers, schemes, employers, and HR teams across East Africa.',
}

export default function InsightsPage() {
  const posts = getAllPosts()
  return (
    <main>
      <Hero headline="The Health Engagement Playbook" eyebrow="Insights" primaryCta={{ label: 'View All Posts', href: '#posts' }} />
      <section id="posts" className="section-padding">
        <div className="section-container">
          <CategoryFilter posts={posts} />
        </div>
      </section>
    </main>
  )
}
```

**Step 4: Build Category page (`app/insights/[category]/page.tsx`)**

```typescript
import { getAllPosts, getPostsByCategory } from '@/lib/blog'
import PostCard from '@/components/blog/PostCard'

export async function generateStaticParams() {
  const categories = ['playbook', 'payers-schemes', 'employers-hr', 'zimasa-updates']
  return categories.map(category => ({ category }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category)
  return (
    <main className="section-padding">
      <div className="section-container">
        <h1 className="font-display text-h2 text-dark mb-8 capitalize">{params.category.replace('-', ' ')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
      </div>
    </main>
  )
}
```

**Step 5: Build Individual Post page (`app/insights/[category]/[slug]/page.tsx`)**

Copy the `generateStaticParams` and page component pattern from `05_Technical-Spec.md` § "Blog Dynamic Routes". Add:
1. Article JSON-LD schema (copy from `07_SEO-Spec.md` § "Article")
2. BreadcrumbList schema
3. `<ScrollTracker slug={params.slug} />` as the first element in the article body
4. `<Image>` for the post's `ogImage` as the hero
5. MDX content rendered in a `prose` wrapper

**Step 6: Verify blog routes build**

```bash
npm run build
```
Expected: 5 blog post pages generated (one per slug), 4 category pages, 1 insights hub. No `generateStaticParams` errors.

**Step 7: Commit**

```bash
git add app/insights/ components/blog/
git commit -m "feat: blog routes — hub, category pages, individual posts with structured data and scroll tracking"
```

---

## Task 16: `next.config.js` — Redirects, Headers, Images

**Files:**
- Modify: `next.config.js`

**Step 1: Copy full `next.config.js`**

Start from the skeleton in `05_Technical-Spec.md` § "`next.config.js`". It has three sections:
1. `headers()` — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, X-XSS-Protection
2. `redirects()` — paste the full block verbatim from `03_Redirects.md` § "next.config.js Implementation Block" (35+ redirect entries)
3. `images` — `formats: ['image/webp']`

**Step 2: Verify redirect count**

```bash
node -e "const c = require('./next.config.js'); c.redirects().then(r => console.log(r.length + ' redirects'))"
```
Expected: 35+ redirects listed. If count is lower, a section was missed — recheck `03_Redirects.md`.

**Step 3: Verify build with redirects**

```bash
npm run build
```
Expected: clean build, no config errors.

**Step 4: Commit**

```bash
git add next.config.js
git commit -m "feat: next.config.js with full redirect map (03_Redirects.md), CSP headers, WebP images"
```

---

## Task 17: Sitemap, robots.txt, SEO Final Pass

**Files:**
- Create: `next-sitemap.config.js`
- Verify all `metadata` exports on all pages match `07_SEO-Spec.md`

**Step 1: Write `next-sitemap.config.js`**

Copy verbatim from `02_Site-Map.md` § "`next-sitemap.config.js`":

```javascript
module.exports = {
  siteUrl: 'https://www.zimasahealth.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
```

Add to `package.json` scripts:
```json
"postbuild": "next-sitemap"
```

**Step 2: SEO metadata audit — all 16 pages**

For each page, verify that `metadata.title` matches `07_SEO-Spec.md` § "Page Titles" and `metadata.description` matches § "Meta Descriptions". Fix any that differ.

**Step 3: Add BreadcrumbList to all non-home pages**

Create a `Breadcrumb` component that renders both visible breadcrumb UI and the JSON-LD script, per `07_SEO-Spec.md` § "BreadcrumbList". Add to every page except Home.

```typescript
// components/ui/Breadcrumb.tsx
interface BreadcrumbItem { name: string; href: string }

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://www.zimasahealth.com${item.href}`,
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="section-container py-4">
        <ol className="flex items-center gap-2 font-ui text-[12px] text-muted">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              <a href={item.href} className="hover:text-green transition-colors duration-150">{item.name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
```

**Step 4: Build and verify sitemap**

```bash
npm run build
```
Check `out/sitemap.xml` exists and contains all 16 page URLs + 5 blog post URLs.

**Step 5: Commit**

```bash
git add next-sitemap.config.js components/ui/Breadcrumb.tsx app/
git commit -m "feat: sitemap, robots.txt, breadcrumb structured data, SEO metadata final pass"
```

---

## Task 18: Mobile Responsive QA Pass

**Step 1: Check all pages at 375px (iPhone), 768px (tablet), 1280px (desktop)**

For each breakpoint, verify:
- Nav: mobile shows hamburger; tablet/desktop shows full nav
- Hero: font size scales correctly (56px desktop → 36px mobile per `06_Brand-Style-Guide.md` §4.3)
- Cards: stack on mobile, 2-col on tablet, 3-col on desktop
- Forms: full-width inputs, submit button full-width on mobile
- Section padding: ~80px desktop, ~48px mobile

**Step 2: Fix any layout breakage found**

Common issues to check:
- `max-w-content` (1200px) with `mx-auto px-6` — verify no horizontal scroll on mobile
- Grid items that don't collapse at `md` breakpoint
- Hero text overflow on small screens

**Step 3: Verify PageSpeed ≥ 90 (mobile)**

```bash
npm run build && npm run start
```
Run Lighthouse on localhost:3000 with mobile preset. Target: ≥ 90. Common fixes if below:
- Add `priority` prop to hero `<Image>` on all pages (critical for LCP)
- Ensure all `<Image>` components have explicit `width` and `height` (prevents CLS)
- Check Google Fonts are loading with `display=swap` (prevent FOIT)

**Step 4: Commit any responsive fixes**

```bash
git add .
git commit -m "fix: responsive layout pass — mobile/tablet/desktop breakpoints verified"
```

---

## Task 19: Language Compliance Audit

**Step 1: Scan for deprecated terms**

```bash
grep -r "Pillar\|Pillars\|Wrappers\|CONNECT\|PERKS\|Health Outcomes" app/ content/ components/ --include="*.tsx" --include="*.mdx" --include="*.ts"
```
Expected: zero matches.

**Step 2: Scan for insurance language**

```bash
grep -ri "premium\|claims\| policy\|underwriting\|coverage" app/ content/ components/ --include="*.tsx" --include="*.mdx"
```
Review each match — some are legitimate (e.g. "CSS" or "Privacy Policy"). Flag and fix any that are insurance-language violations.

**Step 3: Verify "Programme" spelling (not "Program")**

```bash
grep -r "\bprogram\b" app/ content/ --include="*.tsx" --include="*.mdx" -i
```
Exceptions: `React` uses "program" in technical contexts — those are fine. Fix any copy instances.

**Step 4: Commit any fixes**

```bash
git add .
git commit -m "fix: language compliance audit — zero deprecated terms, correct programme spelling"
```

---

## Task 20: Pre-Deploy Checklist Verification

Work through the full checklist from `05_Technical-Spec.md` § "Pre-Deploy Checklist":

**Step 1: Environment variables**
- Confirm `RESEND_API_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` are set in Vercel dashboard.

**Step 2: Resend domain verification**
- Confirm SPF, DKIM, and Return-Path records for `website@zimasahealth.com` are in DNS and verified in Resend dashboard. Forms will 500 without this.

**Step 3: CookieYes integration**
- Insert real CookieYes ID into `layout.tsx` (replace `[YOUR_ID]`).
- Enable "Google Consent Mode" in CookieYes dashboard settings.
- Test in GA4 DebugView: open site, do not accept cookies → confirm no GA4 events fire. Accept cookies → confirm events fire.

**Step 4: Form tests end-to-end**
- Book Demo: submit form → confirm email arrives at sales@zimasahealth.com with all fields + UTM params.
- Contact Us: submit form → confirm email arrives at support@.
- Get Started (member): submit → confirm redirect to app.zimasahealth.com.
- Get Started (employer): submit → confirm email at growth@ + redirect to dashboard.zimasahealth.com.

**Step 5: Redirect tests**
Test each item in `03_Redirects.md` § "Pre-Launch Redirect Testing Checklist" using curl:
```bash
curl -I https://staging.zimasahealth.com/home1/
# Expected: HTTP/2 301 and location: https://www.zimasahealth.com/
curl -I https://staging.zimasahealth.com/wp-admin/
# Expected: 301 → /
```

**Step 6: Honeypot + rate limit test**
- Submit Book Demo form with `website` field populated via browser dev tools → confirm silent 200 discard (no email received).
- Submit same form 6 times in quick succession → confirm 6th returns 429.

**Step 7: PHI check on product mockups**
- Inspect all product screenshots and dashboard mockups — confirm zero real names, emails, or health data visible.

**Step 8: Alt text audit**
```bash
grep -r 'alt=""' app/ components/ --include="*.tsx"
```
All empty `alt` values should only be on decorative icons. Every content image must have meaningful alt text.

**Step 9: Final build + Lighthouse**
```bash
npm run build
```
Run Lighthouse (mobile) on staging URL. Target ≥ 90 PageSpeed.

**Step 10: Founder staging sign-off**
Share staging URL. Get explicit written sign-off before DNS cutover.

**Step 11: Commit pre-deploy state**
```bash
git add .
git commit -m "chore: pre-deploy verification pass — all checklist items confirmed"
```

---

## Task 21: DNS Cutover (Go-Live)

**Step 1: Pre-cutover confirmation**
All items in the README.md go-live gate checklist must be ticked. Do not proceed until they are all complete.

**Step 2: Verify www redirect on Vercel**
In Vercel project settings: confirm that `zimasahealth.com` (bare domain) redirects to `www.zimasahealth.com` (canonical).

**Step 3: Cut over DNS**
Point `www.zimasahealth.com` CNAME to Vercel. Wait for propagation (up to 1 hour).

**Step 4: Submit sitemap to Google Search Console**
```
https://www.zimasahealth.com/sitemap.xml
```
Request manual indexing for the 16 static pages.

**Step 5: Verify live site**
- Home page loads, GA4 fires after cookie consent
- Book Demo form submits successfully
- One old WordPress URL (e.g. `/about-3/`) returns 301 → `/about/`
- `/sitemap.xml` and `/robots.txt` return 200

**Step 6: 30-day monitoring**
Monitor Google Search Console Coverage report for 404s. Check Core Web Vitals report after 28 days.

---

## Summary Table

| Task | Scope | Phase |
|------|-------|-------|
| 1 | Repo scaffold + deps | Setup |
| 2 | Tailwind tokens + globals.css | Setup |
| 3 | Root layout + consent | Setup |
| 4 | Button, Card, Badge | UI |
| 5 | Section components | UI |
| 6 | Header + Footer (full) | UI |
| 7 | MDX utilities + types | Content |
| 8 | Analytics + ScrollTracker | Analytics |
| 9 | API routes + rate limiting | Backend |
| 10 | Form components | Frontend |
| 11 | 16 content MDX files | Content |
| 12 | 5 blog post migration | Content |
| 13 | 6 P0 pages | Pages |
| 14 | 10 P1 + conversion pages | Pages |
| 15 | Blog routes (hub/category/post) | Pages |
| 16 | Redirects + CSP headers | Config |
| 17 | Sitemap + SEO final pass | SEO |
| 18 | Mobile responsive QA | QA |
| 19 | Language compliance audit | QA |
| 20 | Pre-deploy checklist | Launch |
| 21 | DNS cutover | Launch |

**Timeline alignment with `01_Brief.md`:**
- Week 1 (May 5–9): Tasks 1–6 (scaffold + UI components)
- Weeks 2–3 (May 12–23): Tasks 7–15 (content + all pages)
- Week 4 (May 26–Jun 6): Tasks 16–19 (config + QA)
- Week 5 (Jun 9–13): Task 20 (pre-deploy + staging sign-off)
- Go-live (Jun 16–30): Task 21 (DNS cutover)
