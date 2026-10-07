// app/layout.tsx
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { StructuredData, organizationSchema } from '@/components/seo/StructuredData'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zimasahealth.com'),
  title: {
    default: 'Zimasa | Health Engagement OS for Payers & Employers',
    template: '%s | Zimasa',
  },
  description: 'Built for Africa. White-label ready. Measurable results. The Health Engagement OS connecting payers and employers to a vetted healthcare provider network.',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.zimasahealth.com',
    siteName: 'Zimasa',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zimasahealth',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationSchema} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500,
          });
        `}} />
        {/* CookieYes consent manager — replace COOKIEYES_ID with the live Site ID from app.cookieyes.com */}
        {process.env.NEXT_PUBLIC_COOKIEYES_ID && (
          <script
            id="cookieyes"
            type="text/javascript"
            src={`https://cdn-cookieyes.com/client_data/${process.env.NEXT_PUBLIC_COOKIEYES_ID}/script.js`}
            async
          />
        )}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  )
}
