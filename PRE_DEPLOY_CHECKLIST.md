# Pre-Deployment Checklist

Last updated: May 4, 2026

## 1. Environment Configuration

### Environment Variables
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` set in `.env.local`
- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain (https://www.zimasahealth.com)
- [ ] Resend email API key configured (`RESEND_API_KEY`)
- [ ] Rate limiting Redis credentials (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`)
- [ ] No hardcoded sensitive values in code
- [ ] Environment variables documented in `.env.example`

### Deployment Platform
- [ ] Vercel/hosting platform configured
- [ ] Build command: `npm run build && next-sitemap --config next-sitemap.config.js`
- [ ] Start command: `next start`
- [ ] Environment variables exported to deployment
- [ ] Deployment preview URLs working

## 2. Form Configuration & Testing

### Email Delivery
- [ ] Resend domain verified and authorized
- [ ] Emails sending to `hello@zimasahealth.com`
- [ ] Reply-to email configured correctly
- [ ] Email templates tested end-to-end

### Forms Present
- [ ] BookDemoForm (`/book-demo`) — working
- [ ] ContactUsForm (`/contact-us`) — working
- [ ] GetStartedForm (`/get-started`) — working

### Form Features
- [ ] Honeypot field present (spam protection)
- [ ] Rate limiting active (Upstash Redis)
- [ ] Validation working (client-side + server-side)
- [ ] Success page or redirect working
- [ ] Error messages displaying correctly
- [ ] Form fields have proper WCAG labels

### Form Testing
- [ ] [ ] Submit book-demo form → email received
- [ ] [ ] Submit contact form → email received
- [ ] [ ] Submit get-started form → email received
- [ ] [ ] Rapid submissions blocked (rate limit)
- [ ] [ ] Invalid email rejected
- [ ] [ ] Required fields enforced

## 3. Redirects & URL Rewriting

### Redirect Testing
- [ ] Legacy WordPress URLs redirect properly (`/index.php` → `/`)
- [ ] Blog path aliases work (`/blog/:slug` → `/blog/playbook/:slug`)
- [ ] Product redirects work (`/platform` → `/solutions`)
- [ ] Audience redirects work (`/for-employers` → `/employers`)
- [ ] Legal redirects work (`/privacy-policy` → `/privacy-centre`)
- [ ] CTA redirects work (`/demo` → `/book-demo`)
- [ ] All 38+ redirects tested
- [ ] No circular redirects

### URL Structure
- [ ] Main pages have clean URLs (no trailing slashes)
- [ ] Blog structure is `/blog/[category]/[slug]/`
- [ ] All internal links use relative paths
- [ ] No hardcoded domain names in links (except OG metadata)

## 4. SEO & Metadata

### Metadata Audit
- [ ] Homepage has proper title and description
- [ ] All pages have unique titles (max 60 chars)
- [ ] All pages have unique descriptions (max 160 chars)
- [ ] OpenGraph metadata present (og:title, og:description, og:image)
- [ ] Twitter card metadata present
- [ ] Canonical URLs set correctly

### Structured Data
- [ ] Organization schema present globally
- [ ] Blog posts have Article schema
- [ ] Breadcrumbs have BreadcrumbList schema
- [ ] No duplicate schema declarations
- [ ] JSON-LD is valid (use Schema.org validator)

### Sitemap & Robots
- [ ] `sitemap.xml` generated and accessible
- [ ] `robots.txt` created and correct
- [ ] All 31 pages in sitemap
- [ ] Blog pages indexed with correct priority
- [ ] Legal pages have lower priority (0.3)

### Search Console Ready
- [ ] Google Search Console domain property ready
- [ ] Bing Webmaster Tools configured
- [ ] Sitemaps submitted to search engines
- [ ] robots.txt allows all content (except /api, /admin)
- [ ] Mobile-friendly test passes

## 5. Security Headers

### HTTP Headers
- [ ] X-Content-Type-Options: nosniff ✓
- [ ] X-Frame-Options: DENY ✓
- [ ] X-XSS-Protection: 1; mode=block ✓
- [ ] Referrer-Policy: strict-origin-when-cross-origin ✓
- [ ] Permissions-Policy: camera=(), microphone=(), etc. ✓
- [ ] Content-Security-Policy configured ✓

### HTTPS & Certificates
- [ ] HTTPS enabled on production domain
- [ ] SSL/TLS certificate valid (not self-signed)
- [ ] Certificate covers wildcard (*.zimasahealth.com)
- [ ] HSTS header considered (optional, advanced)

### Content Security Policy (CSP)
- [ ] CSP allows Google Analytics (`www.googletagmanager.com`)
- [ ] CSP allows Resend emails (if embedded)
- [ ] CSP allows Next.js scripts
- [ ] CSP report-uri configured for monitoring
- [ ] No CSP violations in console

## 6. Image & Asset Optimization

### Image Formats
- [ ] WebP format enabled in next.config.js ✓
- [ ] AVIF fallback configured ✓
- [ ] Images have correct dimensions
- [ ] No JPEG/PNG stored on server (converted to WebP)
- [ ] OG images (1200x630) optimized

### Alt Text Audit
- [ ] All images have descriptive alt text
- [ ] Decorative images have empty alt (alt="")
- [ ] Alt text is not placeholder text
- [ ] Complex images have long description

### Static Assets
- [ ] Fonts are self-hosted (no external Google Fonts)
- [ ] Font files are WOFF2 format
- [ ] CSS is minified
- [ ] JavaScript is minified
- [ ] No unused CSS in final build

## 7. Performance & Build

### Build Verification
- [ ] `npm run build` completes without errors ✓
- [ ] No warnings in TypeScript compilation
- [ ] All 31 routes listed in build output
- [ ] Static pages marked with ○ (prerendered)
- [ ] Blog pages marked with ● (SSG)
- [ ] API routes marked with ƒ (dynamic)

### Build Output
- [ ] `.next/` directory created successfully
- [ ] Build size is reasonable (< 5MB)
- [ ] No circular imports
- [ ] Tree-shaking working (unused code removed)

### Performance Metrics
- [ ] Lighthouse score > 85 (Performance)
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.5s

### Production Start
- [ ] `npm run build && npm start` works locally
- [ ] Production build matches preview build
- [ ] No console errors in dev tools
- [ ] No console warnings (except known)

## 8. Responsive Design

### Mobile Testing (375px)
- [ ] Text is readable without zooming
- [ ] All buttons are tappable (44px min)
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Forms are usable on mobile

### Tablet Testing (768px)
- [ ] Two-column layouts display correctly
- [ ] Navigation is accessible
- [ ] All content is visible
- [ ] Touch targets are appropriate

### Desktop Testing (1280px+)
- [ ] Three-column layouts display correctly
- [ ] max-w-narrow constraint respected
- [ ] No text runs excessively long (< 80 chars)
- [ ] Hover states working (buttons, links)

### Browser Compatibility
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## 9. Accessibility (WCAG 2.1 AA)

### Color & Contrast
- [ ] Text contrast ratio ≥ 4.5:1
- [ ] Link contrast distinct from body text
- [ ] Color not sole indicator of state
- [ ] Focus indicators visible (border/outline)

### Structure & Navigation
- [ ] Heading hierarchy is logical (h1, h2, h3...)
- [ ] No skipped heading levels
- [ ] Form inputs have associated labels
- [ ] Tab order is logical
- [ ] Skip to main content link (optional, nice-to-have)

### Content & Semantics
- [ ] Semantic HTML (nav, main, article, footer)
- [ ] All images have alt text
- [ ] Tables have headers (th)
- [ ] Links have descriptive text (not "click here")
- [ ] Code is properly marked (code, pre, kbd)

### Interactive Elements
- [ ] Buttons are keyboard accessible
- [ ] Forms are fully keyboard accessible
- [ ] Modals are keyboard trapped (if any)
- [ ] Focus states are visible
- [ ] Touch targets are 44x44px minimum

## 10. Analytics & Tracking

### Google Analytics 4
- [ ] GA4 measurement ID in environment
- [ ] GA4 script injected via `@next/third-parties`
- [ ] Consent mode set to "denied" by default
- [ ] Page views tracked correctly
- [ ] Events firing correctly (form submissions, etc.)

### Conversion Tracking
- [ ] Form submissions logged as events
- [ ] CTA clicks tracked
- [ ] Outbound link clicks tracked
- [ ] Goal completions set up in GA4

### Debug Mode
- [ ] Google Analytics Debugger extension shows hits
- [ ] Real-time data showing in GA4
- [ ] No blocked data collection
- [ ] Privacy compliance (no PII in GA)

## 11. Third-Party Integrations

### Email Service (Resend)
- [ ] API key is valid
- [ ] Domain is verified
- [ ] Sender email is authorized
- [ ] Webhook configured (optional, for bounces)

### Rate Limiting (Upstash Redis)
- [ ] Redis credentials valid
- [ ] Rate limit thresholds set correctly
- [ ] Redis connection pooling configured
- [ ] Error handling for Redis failures

### Analytics (Google Analytics)
- [ ] GA measurement ID correct
- [ ] Consent cookie banner ready (CookieYes)
- [ ] Event parameters set correctly
- [ ] No duplicate data

### Monitoring (Optional)
- [ ] Error tracking (Sentry) if configured
- [ ] Uptime monitoring (Pingdom/UptimeRobot)
- [ ] Alert configured for high error rates

## 12. Language & Content Compliance

### Terminology Audit
- [ ] Product names correct (ZHEP, Zimasa Go, etc.)
- [ ] "Active Days" capitalized consistently
- [ ] "Member" used (not "user", "patient", "employee")
- [ ] British English spelling (programme, centre, behaviour)
- [ ] No deprecated terms used

### Content Quality
- [ ] No placeholder text remaining
- [ ] All sections have meaningful copy
- [ ] Links point to valid pages
- [ ] Blog posts are published with proper metadata
- [ ] Legal pages are complete

### Tone & Voice
- [ ] Copy is confident and specific
- [ ] No hedging language ("may", "hopes to")
- [ ] Data and metrics are referenced
- [ ] Regional specificity present (East Africa)

## 13. Legal & Compliance

### Legal Pages
- [ ] Privacy Policy (`/privacy-centre`) is complete
- [ ] Terms of Service (`/terms`) is complete
- [ ] GDPR/Kenya Data Protection Act compliance mentioned
- [ ] Contact information for data requests present

### Data Handling
- [ ] No PHI collected or stored
- [ ] Form data collected with consent
- [ ] Privacy policy explains data use
- [ ] Data retention policy documented
- [ ] User data deletion process available

### Compliance Standards
- [ ] Kenya Data Protection Act 2019 compliant
- [ ] NHIF regulations considered
- [ ] HIPAA-adjacent best practices followed
- [ ] Cookie policy in place (for analytics)

## 14. Domain & DNS

### Domain Setup
- [ ] Primary domain: www.zimasahealth.com
- [ ] Apex domain: zimasahealth.com (redirect to www)
- [ ] DNS records configured (A, CNAME, MX)
- [ ] Email domain verified (for Resend)
- [ ] SSL/TLS certificate provisioned

### DNS Records
- [ ] A record points to hosting IP
- [ ] CNAME for www points to hosting
- [ ] MX records for email (if needed)
- [ ] SPF record configured (for Resend)
- [ ] DKIM record configured (for Resend)

## 15. Go-Live Procedures

### Pre-Launch
- [ ] All stakeholders notified
- [ ] Launch date confirmed
- [ ] Backup of old website (if applicable)
- [ ] Deployment tested on staging environment
- [ ] Rollback plan documented

### Launch Day
- [ ] DNS switch executed
- [ ] Website accessible via primary domain
- [ ] All pages loading without errors
- [ ] Forms sending emails correctly
- [ ] Analytics showing traffic

### Post-Launch Monitoring
- [ ] Monitor error logs for 24 hours
- [ ] Check Google Search Console for crawl issues
- [ ] Monitor uptime and performance
- [ ] Check user feedback channels
- [ ] Monitor error rate (< 1% target)

## 16. Documentation

### Deployment Docs
- [ ] README.md updated with deploy instructions
- [ ] Environment variables documented
- [ ] Build & start scripts documented
- [ ] API route documentation present

### Content Docs
- [ ] Blog post adding instructions
- [ ] Page update instructions
- [ ] Form handling documentation
- [ ] Analytics setup guide

### Handoff
- [ ] Deployment access shared with team
- [ ] Monitoring dashboard access
- [ ] Support/escalation procedures documented
- [ ] Update procedures for non-technical staff

---

## Approval Sign-Off

- [ ] **Developer**: __________________ Date: ________
- [ ] **QA**: __________________ Date: ________
- [ ] **Product**: __________________ Date: ________
- [ ] **Launch Lead**: __________________ Date: ________

**Go/No-Go Decision**: ⭕ GO | ⭕ NO-GO

**Notes**:
_________________________________________________________________

---

## Post-Deployment

### Day 1
- [ ] Traffic looks normal
- [ ] No spike in errors
- [ ] Forms working (test each)
- [ ] All pages loading correctly
- [ ] Analytics data flowing

### Day 7
- [ ] No critical issues reported
- [ ] SEO crawling progressing
- [ ] User feedback positive
- [ ] Performance stable

### Month 1
- [ ] Search rankings improving
- [ ] Conversion metrics healthy
- [ ] No critical security issues
- [ ] Analytics insights available
