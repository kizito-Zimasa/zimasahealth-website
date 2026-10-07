import { renderOgImage } from '@/lib/og'
export const alt = 'Zimasa — About Zimasa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({ title: 'About Zimasa', eyebrow: 'Our Story', theme: 'navy' })
}
