import type { Metadata } from 'next'
import GetStartedForm from '@/components/forms/GetStartedForm'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Get Started Free — Zimasa GO for Members & Employers',
  description: 'Sign up for Zimasa GO — free to start for individual members. HR teams can share Zimasa GO with their workforce, free. No credit card required.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/get-started/',
    title: 'Get Started Free — Zimasa GO for Members & Employers | Zimasa',
    description: 'Sign up for Zimasa GO — free to start for individual members. HR teams can share Zimasa GO with their workforce, free. No credit card required.',
  },
}

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // "I'm an Employer" links use ?path=employer to open the employer tab.
  const initialPath = (await searchParams).path === 'employer' ? 'employer' : 'member'
  return (
    <main>
      {/* Breadcrumb */}
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Get Started', href: '/get-started/', current: true }]} className="mb-0" />
      </div>

      {/* Hero */}
      <section className="section-padding bg-hero-green">
        <div className="section-container text-center">
          <h1 className="font-display text-h2 text-white mb-3">Start Free. No Contract. No Credit Card.</h1>
          <p className="text-body-lg text-white/80">Zimasa GO is free to start for members, and free for employers to share with their team. Choose your path below.</p>
        </div>
      </section>

      {/* Path Selector & Form */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <GetStartedForm initialPath={initialPath} />
          {/* DRAFT-COPY 2026-10: Founder review */}
          <p className="text-center text-body-sm text-muted mt-8">
            Looking for a full programme with Health Tracks, provider access and aggregate reporting? Full programmes are available through your insurer, broker or scheme.
          </p>
        </div>
      </section>
    </main>
  )
}
