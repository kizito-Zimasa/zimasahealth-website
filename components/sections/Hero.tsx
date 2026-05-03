// components/sections/Hero.tsx
import { cn } from '@/lib/utils'
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
    <section className={cn('hero-section', backgroundVariant === 'navy' ? 'bg-hero-navy' : 'bg-hero-green')}>
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
