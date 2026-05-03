// components/sections/SectionHeader.tsx
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export default function SectionHeader({ eyebrow, headline, subheadline, align = 'center', theme = 'light', className }: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'
  const headlineColor = theme === 'dark' ? 'text-white' : 'text-dark'
  const subColor = theme === 'dark' ? 'text-white/80' : 'text-body'
  const maxW = align === 'center' ? 'max-w-narrow mx-auto' : ''

  return (
    <div className={cn('mb-12', textAlign, className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={cn('font-display text-h2 mb-4', headlineColor, maxW)}>{headline}</h2>
      {subheadline && <p className={cn('text-body-lg', subColor, maxW)}>{subheadline}</p>}
    </div>
  )
}
