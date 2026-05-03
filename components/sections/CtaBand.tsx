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
