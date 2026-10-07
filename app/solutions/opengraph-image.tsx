import { renderOgImage } from '@/lib/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OG() {
  return renderOgImage({ title: 'ZHEP and ZPS', eyebrow: 'Zimasa Solutions', theme: 'green' })
}
