import { renderOgImage } from '@/lib/og'
export const alt = 'Zimasa GO — free to start'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({ title: 'Zimasa GO — Free to Start', eyebrow: 'For Members', theme: 'green' })
}
