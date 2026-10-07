'use client'

import { useEffect, useRef } from 'react'
import { trackEvent, trackArticleRead } from '@/lib/analytics'

interface ScrollTrackerProps {
  slug: string
  category: string
}

export default function ScrollTracker({ slug, category }: ScrollTrackerProps) {
  const milestones = useRef(new Set<number>())

  useEffect(() => {
    const fired = milestones.current
    const label = `${category}/${slug}`

    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const pct = Math.round((scrollTop / docHeight) * 100)

      const checkpoints = [25, 50, 75, 100] as const
      for (const checkpoint of checkpoints) {
        if (pct >= checkpoint && !fired.has(checkpoint)) {
          fired.add(checkpoint)
          trackEvent({
            event: 'scroll_depth',
            article_label: label,
            depth_percentage: checkpoint,
          })
          if (checkpoint === 75) {
            trackArticleRead(slug)
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug, category])

  return null
}
