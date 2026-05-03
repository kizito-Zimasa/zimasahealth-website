'use client';

import { useEffect, useRef } from 'react';
import { trackArticleRead } from '@/lib/analytics';

interface ScrollTrackerProps {
  slug: string; // Blog post slug
  threshold?: number; // Scroll depth percentage (default: 75)
}

export default function ScrollTracker({ slug, threshold = 75 }: ScrollTrackerProps) {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    // Guard: Only track once per session
    if (hasTrackedRef.current) return;

    // Guard: Only track in browser (not SSR)
    if (typeof window === 'undefined') return;

    // Guard: Only track if gtag is available (user has consented)
    if (typeof window.gtag === 'undefined') {
      console.debug('[ScrollTracker] gtag not available (user may not have consented)');
      return;
    }

    const handleScroll = () => {
      // Calculate scroll depth
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Fire event when threshold is crossed
      if (scrollPercent >= threshold && !hasTrackedRef.current) {
        hasTrackedRef.current = true;
        trackArticleRead(slug);
        console.debug(`[ScrollTracker] Article read tracked: ${slug} (${scrollPercent.toFixed(0)}% scroll)`);
        // Remove listener after tracking
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Debounce scroll events (max 1 per 200ms)
    let scrollTimeout: NodeJS.Timeout | null = null;
    const debouncedScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 200);
    };

    window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [slug, threshold]);

  // Render nothing — this is a tracking-only component
  return null;
}
