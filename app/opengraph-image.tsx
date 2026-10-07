import { renderOgImage } from '@/lib/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({
    title: 'Health that shows up.',
    eyebrow: 'Zimasa — the Health Engagement OS',
    theme: 'green',
  })
}
