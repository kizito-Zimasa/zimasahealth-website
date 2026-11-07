// components/sections/FeatureCard.tsx
import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  eyebrow?: string
  headline: string
  body: string
  cta?: { label: string; href: string }
  /** Optional photo shown edge-to-edge at the top of the card in place of the icon. */
  image?: { src: string; alt: string; position?: string }
}

export default function FeatureCard({ icon: Icon, eyebrow, headline, body, cta, image }: FeatureCardProps) {
  return (
    <div className={image ? 'card overflow-hidden flex flex-col' : 'card'}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="-mx-8 -mt-8 mb-6 block aspect-[16/9] w-[calc(100%+4rem)] max-w-none object-cover"
          style={{ objectPosition: image.position ?? '50% 50%' }}
        />
      ) : (
        <div className="w-[60px] h-[60px] rounded-full bg-green/10 flex items-center justify-center mb-6">
          <Icon size={32} className="text-green" />
        </div>
      )}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h4 className="font-heading text-h4 text-dark mb-3">{headline}</h4>
      <p className="text-body text-body mb-6">{body}</p>
      {cta && (
        <a href={cta.href} className={`font-ui text-label text-green uppercase tracking-wider hover:text-blue transition-colors duration-200${image ? ' mt-auto' : ''}`}>
          {cta.label} →
        </a>
      )}
    </div>
  )
}
