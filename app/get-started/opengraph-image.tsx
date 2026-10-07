import { renderOgImage } from '@/lib/og'
export const alt = 'Zimasa — Get Started Free with Zimasa GO'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({ title: 'Get Started Free', eyebrow: 'Zimasa GO', theme: 'green' })
}
