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
