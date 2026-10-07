import { renderOgImage } from '@/lib/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({ title: 'Payer administration, run on one core.', eyebrow: 'ZPS — Zimasa Payer Solution', theme: 'navy' })
}
