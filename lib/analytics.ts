// lib/analytics.ts
// GA4 wrapper utilities for type-safe analytics event tracking

// Type definition for GA4 events
export interface GAEvent {
  event: string;
  [key: string]: string | number | boolean;
}

// Wrapper around gtag() for type-safe analytics calls
export function trackEvent(event: GAEvent): void {
  if (typeof window === 'undefined') return; // SSR safety

  // Only fire if gtag is defined (user has consented)
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', event.event, event);
  }
}

// Helper: Track page views (GA4 handles auto-tracking, but useful for custom routes)
export function trackPageView(pagePath: string, pageTitle: string): void {
  trackEvent({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
  });
}

// Helper: Track form submissions
export function trackFormSubmit(formId: string): void {
  trackEvent({
    event: 'form_submit',
    form_id: formId,
  });
}

// Helper: Track demo form submit
export function trackDemoFormSubmit(): void {
  trackFormSubmit('book_demo');
}

// Helper: Track contact form submit
export function trackContactFormSubmit(): void {
  trackFormSubmit('contact_us');
}

// Helper: Track member signup
export function trackMemberSignup(): void {
  trackEvent({
    event: 'signup',
    type: 'member',
    tier: 'go',
  });
}

// Helper: Track employer signup
export function trackEmployerSignup(): void {
  trackEvent({
    event: 'signup',
    type: 'employer',
    tier: 'lite',
  });
}

// Helper: Track CTA clicks
export function trackCTAClick(label: string, page: string): void {
  trackEvent({
    event: 'cta_click',
    cta_label: label,
    page,
  });
}

// Helper: Track article read (scroll >75%)
export function trackArticleRead(articleSlug: string): void {
  trackEvent({
    event: 'article_read',
    article_slug: articleSlug,
  });
}

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, event: string, config?: Record<string, any>) => void;
  }
}
