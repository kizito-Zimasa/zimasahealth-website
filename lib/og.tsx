// lib/og.tsx — shared OG image renderer
// Produces 1200×630 PNG with brand colour bg, white logo, Montserrat title.
// Used by every app/**/opengraph-image.tsx route.

import { ImageResponse } from 'next/og'

interface RenderOgImageOptions {
  title: string
  theme?: 'green' | 'navy'
  eyebrow?: string
}

// Brand colours
const BRAND_GREEN = '#0A6E38'
const BRAND_NAVY  = '#0D2133'
const BRAND_BLUE  = '#0A406E'

// Inlined white logo SVG (logo-icon-white.svg path data) — avoids fetch()
const WHITE_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 763.62 800.75" width="80" height="84">
  <path fill="#fff" d="M189.21,359l-19.1,8.87c-30.25,14.97-56.67,43.49-18.9,69.62,50.86,35.19,160.64,37.15,220.71,32.1,46.22-3.88,141.86-19.7,173.17-55.95,21.57-24.97,.3-45.13-22.47-56.55l-26.58-10.61c27.28,5.43,58.53,12.82,81.99,28.28,52.64,34.71,7.62,69.28-30.19,86.38-63.51,28.73-145.51,37.98-214.78,40.02-63.55,1.87-146.05-2.39-204.85-28.17-39.99-17.53-63.92-47.31-19.51-79.66,23.13-16.84,53.11-26.93,80.53-34.35Z"/>
  <path fill="#fff" d="M280.07,73.26c-2.1,11.07-4.57,22.1-5.84,33.33-7.91,70.42,9.52,141.61,53.27,197.43-5.93,6.68-11.84,13.23-17.02,20.53-7.46,10.5-15.29,22.86-22.12,33.84-10.19,16.37-19.39,33.22-27.71,50.63-18.6-24.77-34.66-51.98-45.11-81.28-24.08-67.52-15.84-132.95,19.65-194.35,12.53-21.68,27.96-41.73,44.88-60.13Z"/>
  <path fill="#fff" d="M642.2,185.19l-50.86,16.62c-83.78,30.7-159.84,79.68-214.74,150.67-26.1,33.75-46.88,71.71-61.77,111.72-5.53,1.82-11.21,.29-16.62,.11-13.79-.47-27.47-1.08-41.18-2.61,19.4-72.82,64.79-138.71,120.48-188.63,38.7-34.69,80.15-55.92,130.23-69.92,43.41-12.13,89.33-18.08,134.45-17.96Z"/>
  <path fill="#fff" d="M358.95,134.68c57.68-5.4,87.28,65.7,43.24,102.49-26.07,21.78-65.79,15.77-84.73-12.01-24.51-35.96-1.84-86.41,41.49-90.47Z"/>
  <path fill="#fff" d="M518.42,535.43c13.1,51.92,7.7,106.69-12.17,156.03-10.31-24.07-23.62-46.62-38.64-68.02-18.52-26.38-39.72-50.74-61.77-74.18,37.79-1.85,75.48-6.7,112.58-13.83Z"/>
  <path fill="#fff" d="M291.27,551.24c-2.25,13.63-4.56,27.38-5.92,41.15-3.94,39.9-2.57,76.71,.02,116.5,.06,.87,.49,4.11-.68,4.3-4.18-9.48-8.88-18.74-12.83-28.33-17.87-43.42-27.25-89.76-27.34-136.92l46.74,3.29Z"/>
</svg>`

export function renderOgImage({ title, theme = 'green', eyebrow }: RenderOgImageOptions): ImageResponse {
  const bgColor = theme === 'navy' ? BRAND_NAVY : BRAND_GREEN
  const accentColor = theme === 'navy' ? BRAND_BLUE : '#0D8444'

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
          background: `linear-gradient(135deg, ${bgColor} 0%, ${BRAND_BLUE} 100%)`,
          padding: '64px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: accentColor,
            opacity: 0.25,
          }}
        />

        {/* Logo mark area */}
        <div
          style={{
            position: 'absolute',
            top: '52px',
            left: '64px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(WHITE_LOGO_SVG)}`}
            width={40}
            height={42}
            alt="Zimasa logo"
          />
          <span
            style={{
              color: 'white',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Zimasa
          </span>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
          {eyebrow && (
            <span
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {eyebrow}
            </span>
          )}
          <span
            style={{
              color: 'white',
              fontSize: title.length > 60 ? '42px' : '52px',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '18px',
              fontWeight: 400,
            }}
          >
            zimasahealth.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
