# Responsive Design QA Checklist

## Testing Breakpoints

- **Mobile (375px)**: iPhone SE / iPhone 12 mini
- **Tablet (768px)**: iPad Air / iPad Pro
- **Desktop (1280px)**: MacBook Air / standard laptop

## Component Responsive Behavior

### Navigation & Header
- [ ] Header navigation collapses properly at mobile
- [ ] Logo size is appropriate on all breakpoints
- [ ] Mobile menu (if implemented) opens/closes correctly
- [ ] Hero banner text is readable at all sizes
- [ ] Hero CTA buttons are properly sized and tappable (44px minimum height)

### Hero Section
- [ ] Hero headline is readable on mobile (font scaling)
- [ ] Subheadline is properly sized (not too small on mobile)
- [ ] Hero image/background fits viewport without stretching
- [ ] CTA buttons stack vertically on mobile, horizontal on desktop
- [ ] Background variants (navy, green) display correctly

### Section Layouts
- [ ] Two-column layouts (md:grid-cols-2) stack on mobile
- [ ] Three-column layouts (lg:grid-cols-3) reflow at tablet
- [ ] max-w-narrow (800px) constraint respected on desktop
- [ ] Padding (section-padding) proportional to viewport
- [ ] Margins between sections adequate on all sizes

### Cards & Feature Grid
- [ ] Card grid flows: 1 column (mobile) → 2 (tablet) → 3 (desktop)
- [ ] Card height consistent when using h-full
- [ ] Text within cards doesn't overflow
- [ ] Icons scale appropriately (40px default)
- [ ] Hover states work on touch devices (no pointer)

### Forms
- [ ] Form inputs are at least 44px tall (tappable)
- [ ] Form labels are visible above inputs
- [ ] Input width responds to parent constraints
- [ ] Validation messages display inline without overflow
- [ ] Submit button is full-width on mobile, auto on desktop

### Blog Pages
- [ ] Blog grid flows: 1 column (mobile) → 2 (tablet) → 3 (desktop)
- [ ] Breadcrumbs are readable and don't wrap excessively
- [ ] Blog post content (MDX) reflows properly
- [ ] Code blocks (pre) scroll horizontally if needed
- [ ] Tables are readable (may need horizontal scroll on mobile)

### FAQ/Tables
- [ ] Table cells display properly (may need font-size reduction on mobile)
- [ ] Long table rows have horizontal scroll or stack behavior
- [ ] Data is scannable at all breakpoints

### Images
- [ ] Images don't overflow container width
- [ ] Aspect ratios maintained across breakpoints
- [ ] WebP format loads correctly (fallback to PNG)
- [ ] OG images (1200x630) don't affect page layout
- [ ] Alt text is present for all images

### Footer
- [ ] Footer content stacks on mobile
- [ ] Links are tappable (44px target size)
- [ ] Copyright and legal links visible on all sizes
- [ ] Footer doesn't cause horizontal scroll

## Interaction Testing

### Touch Targets (Mobile)
- [ ] All clickable elements are at least 44x44px
- [ ] Buttons have adequate padding (px-4 py-2 minimum)
- [ ] Links in text are underlined or styled distinctly
- [ ] Form inputs have visible focus states

### Overflow & Scrolling
- [ ] No horizontal scroll on any viewport
- [ ] Text doesn't disappear off-screen
- [ ] Sticky headers (if any) don't obstruct content
- [ ] Anchor links work across all breakpoints

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] Focus indicators visible on all elements
- [ ] Form validation messages are announced
- [ ] Skip links (if implemented) work correctly

## Responsive Utilities Used in Codebase

### Tailwind Breakpoints
- `sm: 640px`
- `md: 768px`
- `lg: 1024px`
- `xl: 1280px`
- `2xl: 1536px`

### Common Responsive Patterns
- `grid-cols-1 md:grid-cols-2` — stacks on mobile, 2 columns on tablet
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — responsive 3-column on desktop
- `px-4 md:px-6 lg:px-8` — scaling padding based on viewport
- `text-sm md:text-base lg:text-lg` — responsive typography
- `flex-col md:flex-row` — stack on mobile, horizontal on tablet+

## Pages to Test

### P0 Pages (6)
- [ ] Home (`/`)
- [ ] Solutions (`/solutions`)
- [ ] Solutions - ZHEP (`/solutions/zhep`)
- [ ] Solutions - Payers (`/solutions/zps`)
- [ ] Employers (`/employers`)
- [ ] Zimasa Go (`/zimasa-go`)

### P1 Pages (10)
- [ ] About (`/about`)
- [ ] Who We Help (`/who-we-help`)
- [ ] Insurers & TPAs (`/insurers-tpas`)
- [ ] Healthcare Providers (`/healthcare-providers`)
- [ ] Book Demo (`/book-demo`)
- [ ] Get Started (`/get-started`)
- [ ] Contact Us (`/contact-us`)
- [ ] Privacy Centre (`/privacy-centre`)
- [ ] Terms (`/terms`)
- [ ] Blog Hub (`/blog`)

### Blog Pages (5)
- [ ] Blog - Playbook Category (`/blog/playbook`)
- [ ] Blog - Zimasa Updates Category (`/blog/zimasa-updates`)
- [ ] Blog - Sample Post (`/blog/playbook/engagement-mechanics-101`)
- [ ] (Test at least 1 post per category)

## Performance Metrics (Optional)

- [ ] First Contentful Paint (FCP) < 1.5s on mobile
- [ ] Largest Contentful Paint (LCP) < 2.5s on mobile
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Core Web Vitals pass on PageSpeed Insights

## Accessibility Checklist

- [ ] Color contrast ratio > 4.5:1 for body text
- [ ] Images have descriptive alt text
- [ ] Form inputs have associated labels
- [ ] Heading hierarchy is logical (h1 > h2 > h3, etc.)
- [ ] Links are distinguishable from body text
- [ ] Focus states are visible

## Browser & Device Testing

### Browsers
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Physical Devices / Emulation
- [ ] iPhone SE (375px)
- [ ] iPad Air (768px)
- [ ] MacBook Air 13" (1280px)
- [ ] Desktop monitor (1920px+)

## Known Issues & Workarounds

(Document any responsive issues found during testing)

---

## QA Sign-Off

- **Tester**: ____________________
- **Date**: ____________________
- **Notes**: ____________________

Once all checkboxes pass, the responsive design QA is complete.
