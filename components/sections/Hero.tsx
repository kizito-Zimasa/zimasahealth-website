// components/sections/Hero.tsx
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

interface HeroProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundVariant?: 'green' | 'navy'
  /** `position` is a CSS object-position (e.g. '40% 50%') that keeps the subject
   *  in frame when the hero is cropped to a narrow (mobile) or wide viewport. */
  image?: { src: string; alt: string; priority?: boolean; position?: string }
}

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundVariant = 'green',
  image,
}: HeroProps) {
  return (
    <section className={cn('hero-section', backgroundVariant === 'navy' ? 'bg-hero-navy' : 'bg-hero-green')}>
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            // Next 16 deprecates `priority`; heroes are above the fold, so load eagerly.
            loading={image.priority ? 'eager' : undefined}
            fetchPriority={image.priority ? 'high' : undefined}
            sizes="100vw"
            className="object-cover"
            style={{ zIndex: 0, objectPosition: image.position ?? '50% 50%' }}
          />
          <div
            className={cn(
              'absolute inset-0',
              backgroundVariant === 'navy' ? 'hero-overlay-navy' : 'hero-overlay-green'
            )}
            style={{ zIndex: 1 }}
          />
        </>
      )}
      <div className="section-container text-center" style={{ position: 'relative', zIndex: 2 }}>
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
