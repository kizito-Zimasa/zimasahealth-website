import { renderOgImage } from '@/lib/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({ title: 'Who We Help', eyebrow: 'Zimasa Buyers', theme: 'navy' })
}
