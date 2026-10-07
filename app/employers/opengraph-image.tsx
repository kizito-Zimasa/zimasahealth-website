import { renderOgImage } from '@/lib/og'
export const alt = 'Zimasa — Employers & HR Teams'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({ title: 'Employers & HR Teams', eyebrow: 'Workforce Wellness', theme: 'green' })
}
