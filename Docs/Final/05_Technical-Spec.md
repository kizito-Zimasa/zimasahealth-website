# Technical Specification — Phase 1
**Version**: 1.1  
**Date**: May 2026  
**Status**: LOCKED  
**Owner**: Dalton (CTO)

> This document specifies the architecture, file structure, component patterns, and coding conventions for the Phase 1 Next.js build. Claude Code works within these patterns; Dalton reviews and merges.

---

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js App Router | 14+ |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | 3.4+ |
| Content | MDX | `@next/mdx` + `next-mdx-remote` |
| Email | Resend SDK | latest |
| Analytics | `@next/third-parties` | latest |
| Icons | Lucide React | latest |
| Linting | ESLint + Prettier | Next.js defaults |
| Node | LTS (20+) | — |

---

## Repository Structure

```
zimasahealth-website/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — fonts, nav, footer, GA4, consent
│   ├── page.tsx                  # Home /
│   ├── solutions/
│   │   ├── page.tsx              # /solutions/ — hub
│   │   ├── zhep/
│   │   │   └── page.tsx          # /solutions/zhep/
│   │   └── zps/
│   │       └── page.tsx          # /solutions/zps/ — Zimasa Payer Solution
│   ├── employers/
│   │   └── page.tsx              # /employers/ — audience page
│   ├── zimasa-go/
│   │   └── page.tsx              # /zimasa-go/ — nav label: "Members"
│   ├── get-started/
│   │   └── page.tsx              # /get-started/ — self-serve conversion
│   ├── insurers-tpas/
│   │   └── page.tsx              # /insurers-tpas/ — audience page
│   ├── healthcare-providers/
│   │   └── page.tsx              # /healthcare-providers/
│   ├── who-we-help/
│   │   └── page.tsx              # /who-we-help/
│   ├── about/
│   │   └── page.tsx              # /about/
│   ├── insights/
│   │   ├── page.tsx              # /insights/ — blog hub
│   │   └── [category]/
│   │       ├── page.tsx          # /insights/[category]/
│   │       └── [slug]/
│   │           └── page.tsx      # /insights/[category]/[slug]/
│   ├── book-demo/
│   │   └── page.tsx              # /book-demo/
│   ├── contact-us/
│   │   └── page.tsx              # /contact-us/
│   ├── privacy-centre/
│   │   └── page.tsx              # /privacy-centre/
│   ├── terms/
│   │   └── page.tsx              # /terms/
│   ├── api/
│   │   ├── book-demo/
│   │   │   └── route.ts          # POST → Resend → sales@
│   │   ├── contact/
│   │   │   └── route.ts          # POST → Resend → support@
│   │   └── get-started/
│   │       └── route.ts          # POST → Resend → growth@ (employer) or redirect (member)
│   └── globals.css               # CSS variables + @layer components
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── NavDropdown.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Card.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SolutionsGrid.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── TestimonialRow.tsx
│   │   ├── CtaBand.tsx
│   │   ├── TrustLogos.tsx
│   │   └── BlogGrid.tsx
│   └── forms/
│       ├── BookDemoForm.tsx
│       ├── ContactForm.tsx
│       └── GetStartedForm.tsx    # Dual-path: member (→ app) + employer (→ dashboard)
│
├── content/
│   ├── pages/
│   │   ├── home.mdx
│   │   ├── payers.mdx            # /insurers-tpas/ — audience page
│   │   ├── employers.mdx         # /employers/ — audience page
│   │   ├── zimasa-go.mdx         # /zimasa-go/ — Members / Zimasa Go
│   │   ├── healthcare-providers.mdx
│   │   ├── solutions-hub.mdx     # /solutions/ hub
│   │   ├── zhep.mdx              # /solutions/zhep/ product page
│   │   ├── solutions/
│   │   │   └── zps.mdx           # /solutions/zps/ product page
│   │   ├── who-we-help.mdx
│   │   ├── about.mdx
│   │   ├── insights-hub.mdx
│   │   ├── get-started.mdx
│   │   ├── book-demo.mdx
│   │   ├── contact-us.mdx
│   │   ├── privacy-centre.mdx
│   │   └── terms.mdx
│   └── blog/
│       ├── playbook/
│       │   └── [slug].mdx
│       ├── payers-schemes/
│       │   └── [slug].mdx
│       ├── employers-hr/
│       │   └── [slug].mdx
│       └── zimasa-updates/
│           └── [slug].mdx
│
├── public/
│   ├── images/
│   │   ├── og-default.jpg        # 1200×630 OG image
│   │   ├── logo.svg
│   │   └── logo-white.svg
│   └── fonts/                    # If self-hosting fonts (optional)
│
├── lib/
│   ├── mdx.ts                    # MDX loading utilities
│   ├── blog.ts                   # Blog post helpers (getAllPosts, getPost)
│   └── analytics.ts              # GA4 event helpers
│
├── types/
│   └── blog.ts                   # BlogPost, BlogFrontmatter types
│
├── tailwind.config.ts            # Design tokens (from 04_Design-Tokens.md)
├── next.config.js                # Redirects, security headers, image config
├── next-sitemap.config.js        # Sitemap generation
├── tsconfig.json
└── .env.local                    # RESEND_API_KEY, GA_MEASUREMENT_ID (never commit)
```

---

## Page Component Pattern

All marketing pages follow this pattern:

```tsx
// app/[page]/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description.',
}

export default function PageName() {
  return (
    <main>
      <HeroSection />
      <Section1 />
      <CtaBand />
    </main>
  )
}
```

Pages are server components by default. Client components are marked `'use client'` and used only where interactivity is required (forms, mobile menu, dropdowns).

---

## MDX Content Loading

### Page Content

```ts
// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

export async function getPageContent(slug: string) {
  const filePath = path.join(process.cwd(), 'content/pages', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  const { content: mdxContent } = await compileMDX({ source: content })
  return { frontmatter: data, content: mdxContent }
}
```

### Blog Posts

```ts
// lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  category: string
  title: string
  description: string
  publishedAt: string
  modifiedAt?: string
  author: string
  tags: string[]
  audience: string[]
  readTime: number
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  const categories = fs.readdirSync(BLOG_DIR)
  const posts: BlogPost[] = []

  for (const category of categories) {
    const categoryDir = path.join(BLOG_DIR, category)
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.mdx'))

    for (const file of files) {
      const slug = file.replace('.mdx', '')
      const source = fs.readFileSync(path.join(categoryDir, file), 'utf8')
      const { data } = matter(source)
      posts.push({ slug, category, ...data } as BlogPost)
    }
  }

  return posts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(p => p.category === category)
}

export async function getPost(category: string, slug: string) {
  const filePath = path.join(BLOG_DIR, category, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  const { compileMDX } = await import('next-mdx-remote/rsc')
  const { content: mdxContent } = await compileMDX({ source: content })
  return { frontmatter: data as BlogPost, content: mdxContent }
}
```

### Blog Dynamic Routes

```tsx
// app/insights/[category]/[slug]/page.tsx
import { getAllPosts, getPost } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    category: post.category,
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const { frontmatter, content } = await getPost(params.category, params.slug)
  return (
    <article>
      <header>{frontmatter.title}</header>
      {content}
    </article>
  )
}
```

---

## API Routes

### Book Demo

```ts
// app/api/book-demo/route.ts
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Honeypot — bots fill hidden fields, humans leave them empty
  if (body.website) {
    return NextResponse.json({ success: true }) // silent discard
  }

  const required = ['name', 'email', 'company', 'phone']
  for (const field of required) {
    if (!body[field] || typeof body[field] !== 'string') {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  // Maximum field lengths
  if (body.name.length > 100 || body.email.length > 254 || body.company.length > 200) {
    return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 })
  }

  // Escape HTML to prevent injection in email body
  const escape = (s: string) =>
    s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')

  try {
    await resend.emails.send({
      from: 'website@zimasahealth.com',
      to: 'sales@zimasahealth.com',
      subject: `Demo Request — ${escape(body.company)}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${escape(body.name)}</p>
        <p><strong>Email:</strong> ${escape(body.email)}</p>
        <p><strong>Company:</strong> ${escape(body.company)}</p>
        <p><strong>Phone:</strong> ${escape(body.phone)}</p>
        <p><strong>Role:</strong> ${escape(body.role || '—')}</p>
        <p><strong>Solution Interest:</strong> ${escape(body.solutionInterest || '—')}</p>
        <p><strong>Timeline:</strong> ${escape(body.timeline || '—')}</p>
        <p><strong>UTM Source:</strong> ${escape(body.utmSource || '—')}</p>
        <p><strong>UTM Medium:</strong> ${escape(body.utmMedium || '—')}</p>
        <p><strong>UTM Campaign:</strong> ${escape(body.utmCampaign || '—')}</p>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

### Contact Us

```ts
// app/api/contact/route.ts
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Honeypot — bots fill hidden fields, humans leave them empty
  if (body.website) {
    return NextResponse.json({ success: true }) // silent discard
  }

  const required = ['name', 'email', 'message']
  for (const field of required) {
    if (!body[field] || typeof body[field] !== 'string') {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  // Maximum field lengths
  if (body.name.length > 100 || body.email.length > 254 || body.message.length > 2000) {
    return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 })
  }

  // Escape HTML to prevent injection in email body
  const escape = (s: string) =>
    s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')

  try {
    await resend.emails.send({
      from: 'website@zimasahealth.com',
      to: 'support@zimasahealth.com',
      subject: `Contact Form — ${escape(body.inquiryType || 'General')} from ${escape(body.name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escape(body.name)}</p>
        <p><strong>Email:</strong> ${escape(body.email)}</p>
        <p><strong>Company:</strong> ${escape(body.company || '—')}</p>
        <p><strong>Inquiry Type:</strong> ${escape(body.inquiryType || '—')}</p>
        <p><strong>Message:</strong></p>
        <p>${escape(body.message)}</p>
        <p><strong>UTM Source:</strong> ${escape(body.utmSource || '—')}</p>
        <p><strong>UTM Medium:</strong> ${escape(body.utmMedium || '—')}</p>
        <p><strong>UTM Campaign:</strong> ${escape(body.utmCampaign || '—')}</p>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

### Get Started (Zimasa Go)

Dual-path: member path redirects to app.zimasahealth.com; employer path sends email to growth@ then returns a redirect URL to dashboard.zimasahealth.com.

```ts
// app/api/get-started/route.ts
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Honeypot
  if (body.website) {
    return NextResponse.json({ success: true })
  }

  const { path } = body // 'member' | 'employer'

  if (path === 'member') {
    const required = ['name', 'email']
    for (const field of required) {
      if (!body[field] || typeof body[field] !== 'string') {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }
    if (body.name.length > 100 || body.email.length > 254) {
      return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 })
    }
    // Member path: redirect to member onboarding app
    return NextResponse.json({
      success: true,
      redirect: `https://app.zimasahealth.com/signup?email=${encodeURIComponent(body.email)}`,
    })
  }

  if (path === 'employer') {
    const required = ['orgName', 'email', 'workforceSize']
    for (const field of required) {
      if (!body[field] || typeof body[field] !== 'string') {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }
    if (body.orgName.length > 200 || body.email.length > 254) {
      return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 })
    }

    const escape = (s: string) =>
      s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')

    try {
      await resend.emails.send({
        from: 'website@zimasahealth.com',
        to: 'growth@zimasahealth.com',
        subject: `Employer Sign-Up — ${escape(body.orgName)}`,
        html: `
          <h2>New Employer Sign-Up (Zimasa Go)</h2>
          <p><strong>Organisation:</strong> ${escape(body.orgName)}</p>
          <p><strong>Email:</strong> ${escape(body.email)}</p>
          <p><strong>Workforce Size:</strong> ${escape(body.workforceSize)}</p>
          <p><strong>UTM Source:</strong> ${escape(body.utmSource || '—')}</p>
          <p><strong>UTM Medium:</strong> ${escape(body.utmMedium || '—')}</p>
          <p><strong>UTM Campaign:</strong> ${escape(body.utmCampaign || '—')}</p>
        `,
      })
      return NextResponse.json({
        success: true,
        redirect: 'https://dashboard.zimasahealth.com/setup',
      })
    } catch (error) {
      return NextResponse.json({ error: 'Failed to process sign-up' }, { status: 500 })
    }
  }

  return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
}
```

---

## Form Security Requirements

All API routes must implement:

| Requirement | Implementation |
|------------|----------------|
| Honeypot field | Hidden `<input name="website">` in form HTML; server rejects any submission where `body.website` is set |
| Input escaping | All string fields passed to email HTML are escaped via the `escape()` helper before insertion |
| Maximum field lengths | All text inputs validated server-side against documented maximums |
| Server-side rate limiting | Add `@upstash/ratelimit` or equivalent before go-live — 5 submissions per IP per 10 minutes |
| No client-side API keys | `RESEND_API_KEY` is server-only; `NEXT_PUBLIC_GA_MEASUREMENT_ID` is the only public env var |
| UTM passthrough | All forms include hidden UTM fields populated from URL params by the client form component |

Rate limiting is not shown in the code samples above — add it as middleware on all `/api/` routes before go-live.

---

## Root Layout

**KDPA / GA4 Consent Mode requirement**: Script ordering alone does not guarantee GA4 is blocked until consent. Implement Google Consent Mode v2: set `analytics_storage: 'denied'` as the default state *before* any GA4 tags initialise. CookieYes (configured in the CookieYes dashboard for Consent Mode) then calls `gtag('consent', 'update', { analytics_storage: 'granted' })` when the user accepts. Verify in GA4 DebugView that no events fire before acceptance.

```tsx
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
  twitter: {
    card: 'summary_large_image',
    site: '@zimasahealth',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode v2 — default denied BEFORE any GA4 tags initialise.
            CookieYes updates this via gtag('consent','update') on user acceptance.
            Script ordering alone is insufficient — this inline block is required. */}
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
        {/* CookieYes — must be configured in CookieYes dashboard to use Consent Mode API */}
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

---

## `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.cookieyes.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.google-analytics.com https://api.resend.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ]
  },

  async redirects() {
    // Single source of truth: 03_Redirects.md § "next.config.js Implementation Block"
    // Copy that block verbatim here. Never maintain redirects in two places —
    // 03_Redirects.md is the authority; this array must match it exactly.
    return [
      // ← paste full list from 03_Redirects.md
    ]
  },

  images: {
    formats: ['image/webp'],
    remotePatterns: [],
  },
}

module.exports = nextConfig
```

---

## Component Patterns

### Button Component

```tsx
// components/ui/Button.tsx
import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'b2b'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  outline:   'btn-outline',
  ghost:     'btn-ghost',
  b2b:       'btn-b2b',
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(variantClasses[variant], className)

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
```

### Card Component

```tsx
// components/ui/Card.tsx
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn('card', !hover && 'hover:shadow-card hover:translate-y-0', className)}>
      {children}
    </div>
  )
}
```

### Hero Section

```tsx
// components/sections/Hero.tsx
import Button from '@/components/ui/Button'

interface HeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundVariant?: 'green' | 'navy'
}

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundVariant = 'green',
}: HeroProps) {
  return (
    <section className={`hero-section bg-${backgroundVariant === 'navy' ? 'hero-navy' : 'hero-green'}`}>
      <div className="section-container text-center">
        {eyebrow && <p className="eyebrow text-pale-green">{eyebrow}</p>}
        <h1 className="font-display text-display text-white max-w-narrow mx-auto mb-6">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-body-lg text-white/80 max-w-prose mx-auto mb-10">
            {subheadline}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" href={primaryCta.href}>{primaryCta.label}</Button>
          {secondaryCta && (
            <Button variant="ghost" href={secondaryCta.href}>{secondaryCta.label}</Button>
          )}
        </div>
      </div>
    </section>
  )
}
```

### CTA Band

```tsx
// components/sections/CtaBand.tsx
import Button from '@/components/ui/Button'

interface CtaBandProps {
  headline: string
  subtext?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'green' | 'navy'
}

export default function CtaBand({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  variant = 'green',
}: CtaBandProps) {
  return (
    <section className={`cta-band ${variant === 'navy' ? 'bg-navy' : 'bg-green'}`}>
      <div className="section-container">
        <h2 className="font-display text-h2 text-white mb-4">{headline}</h2>
        {subtext && <p className="text-body-lg text-white/80 mb-8">{subtext}</p>}
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" href={primaryCta.href}>{primaryCta.label}</Button>
          {secondaryCta && (
            <Button variant="ghost" href={secondaryCta.href}>{secondaryCta.label}</Button>
          )}
        </div>
      </div>
    </section>
  )
}
```

---

## Analytics Helpers

```ts
// lib/analytics.ts

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function trackCtaClick(label: string, page: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', { cta_label: label, page })
  }
}

export function trackFormSubmit(formId: 'book_demo' | 'contact_us') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', { form_id: formId })
  }
}

export function trackSignup(type: 'member' | 'employer') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'signup', {
      type,
      tier: type === 'member' ? 'go' : 'lite',
    })
  }
}

export function trackArticleRead(slug: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'article_read', { article_slug: slug })
  }
}
```

---

## Environment Variables

**`.env.local`** (never commit — add to `.gitignore`):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Vercel dashboard settings** (required before first deploy):
- `RESEND_API_KEY` — from Resend dashboard
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — from GA4 property

---

## Structured Data

Add to blog post pages for SEO:

```tsx
// In app/insights/[category]/[slug]/page.tsx
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: frontmatter.title,
  description: frontmatter.description,
  datePublished: frontmatter.publishedAt,
  dateModified: frontmatter.modifiedAt ?? frontmatter.publishedAt,
  author: { '@type': 'Person', name: frontmatter.author },
  publisher: {
    '@type': 'Organization',
    name: 'Zimasa',
    url: 'https://www.zimasahealth.com',
  },
}

// In JSX:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

Add Organization schema to home page layout:

```tsx
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zimasa',
  url: 'https://www.zimasahealth.com',
  logo: 'https://www.zimasahealth.com/images/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254710241892',
    contactType: 'sales',
  },
  sameAs: [
    'https://www.linkedin.com/company/zimasa',
  ],
}
```

---

## Coding Conventions

| Rule | Detail |
|------|--------|
| Components | PascalCase, one per file |
| Hooks | `use` prefix, camelCase |
| Utilities | camelCase in `lib/` |
| Types | PascalCase, co-located or in `types/` |
| CSS | Tailwind utility classes + `@layer components` for repeating patterns |
| Imports | Use `@/` alias for all internal imports |
| Images | Always use `next/image` with explicit `width` and `height` |
| Links | Always use `next/link` for internal navigation |
| Client components | `'use client'` directive; keep minimal — forms and interactive UI only |
| Server components | Default for all page routes and data fetching |
| Error handling | API routes return `{ error: string }` with appropriate HTTP status |
| Comments | Only where the why is non-obvious |
| Content file naming | Source files in `Content/` use PascalCase `.md` (e.g. `Home.md`). Build targets in `content/pages/` use kebab-case `.mdx` (e.g. `home.mdx`). Source files are spec/reference only — the repo uses kebab-case `.mdx` exclusively. |
| Product screenshots | Must use mocked / anonymised data only — never real user names, emails, or health data. PHI-avoidant requirement — see `06_Brand-Style-Guide.md` §12.5 |

---

## Pre-Deploy Checklist (Dalton)

- [ ] All env vars set in Vercel dashboard
- [ ] `RESEND_API_KEY` verified — test email send on all three forms
- [ ] GA4 DebugView confirmed: no events fire before cookie consent is accepted
- [ ] CookieYes Consent Mode integration enabled in CookieYes dashboard (not just script order)
- [ ] Cookieyes ID inserted in `layout.tsx`
- [ ] Form spam: honeypot discard tested; rate limiting middleware in place on all `/api/` routes
- [ ] UTM parameters appear in email submissions (test with `?utm_source=test&utm_medium=test`)
- [ ] All redirect rules in `next.config.js` copied from `03_Redirects.md` — full list tested, not sample
- [ ] `next-sitemap.config.js` `siteUrl` correct
- [ ] OG image `/public/images/og-default.jpg` at 1200×630
- [ ] Logo SVGs at `/public/images/logo.svg` and `logo-white.svg`
- [ ] CSP headers tested — no console errors in production
- [ ] `robots.txt` generated correctly (no staging URLs)
- [ ] Get Started member path tested end-to-end → redirects to app.zimasahealth.com
- [ ] Get Started employer path tested end-to-end → email received at growth@ + redirects to dashboard
- [ ] Resend domain verified — SPF, DKIM, and Return-Path records for `website@zimasahealth.com` confirmed in Resend dashboard before first email send
- [ ] Blog post scroll-tracker client component implemented — fires `article_read` event at >75% scroll depth on all blog post pages
