import type { Metadata } from 'next'
import { User, Building2 } from 'lucide-react'
import GetStartedForm from '@/components/forms/GetStartedForm'

export const metadata: Metadata = {
  title: 'Get Started Free — Zimasa Go for Members & Employers | Zimasa',
  description: 'Sign up for Zimasa Go — free for individual members. HR teams can register their organisation and get a free employer-lite dashboard. No credit card required.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/get-started/',
    title: 'Get Started Free — Zimasa Go for Members & Employers | Zimasa',
    description: 'Sign up for Zimasa Go — free for individual members. HR teams can register their organisation and get a free employer-lite dashboard. No credit card required.',
    images: [{ url: '/images/og-get-started.jpg', width: 1200, height: 630 }],
  },
}

export default function GetStartedPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-hero-green">
        <div className="section-container text-center">
          <h1 className="font-display text-h2 text-white mb-3">Start Free. No Contract. No Credit Card.</h1>
          <p className="text-body-lg text-white/80">Zimasa Go is free for members and employers. Choose your path below.</p>
        </div>
      </section>

      {/* Path Selector & Form */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <GetStartedForm />
        </div>
      </section>
    </main>
  )
}
