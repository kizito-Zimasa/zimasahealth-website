import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/lib/insights'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ category: string; slug: string }>
}

const BRAND_NAVY = '#0D2133'
const BRAND_BLUE = '#0A406E'

export default async function OG({ params }: Props) {
  const { category, slug } = await params
  const post = getBlogPost(category, slug)

  const title = post?.title ?? 'Zimasa Insights'
  const hasHero = !!post?.heroImage

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background: hero image or gradient */}
        {hasHero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zimasahealth.com'}${post!.heroImage}`}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : null}

        {/* Dark navy overlay (always present) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: hasHero
              ? 'rgba(13,33,51,0.72)'
              : `linear-gradient(135deg, ${BRAND_NAVY} 0%, ${BRAND_BLUE} 100%)`,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '64px',
            maxWidth: '900px',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Zimasa Insights
          </span>
          <span
            style={{
              color: 'white',
              fontSize: title.length > 70 ? '38px' : '46px',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>
            zimasahealth.com/insights
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
