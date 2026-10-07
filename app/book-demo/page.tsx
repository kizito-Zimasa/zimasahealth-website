import type { Metadata } from 'next'
import Link from 'next/link'
import BookDemoForm from '@/components/forms/BookDemoForm'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const pageTitle = 'Book a Demo — See Zimasa in Action | Zimasa'
const pageDescription =
  'Book a 30-minute demo of Zimasa, the Health Engagement OS for insurers, TPAs and providers. See the platform, a sample 90-day programme design, and your 30/60/90 reporting view.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/book-demo/',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function BookDemoPage() {
  return (
    <main>
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Book a Demo', href: '/book-demo/', current: true }]} className="mb-4" />
              <h1 className="font-display text-h2 text-dark mb-3">Book Your 30-Minute Demo</h1>
              <p className="text-body-lg text-body mb-8">Tell us about your organisation. We&apos;ll show you the platform, a sample 90-day programme design, and your 30/60/90 reporting view.</p>
              <BookDemoForm />
              <p className="text-body text-muted text-sm mt-6">
                Prefer email? Write to <a href="mailto:sales@zimasahealth.com" className="text-green hover:underline">sales@zimasahealth.com</a>.
              </p>
            </div>

            {/* Right Column - What we'll show you */}
            <div>
              {/* DRAFT-COPY 2026-10: Founder review */}
              <h3 className="font-heading text-h3 text-dark mb-8">What We&apos;ll Show You</h3>

              <div className="space-y-8">
                <div>
                  <p className="font-heading text-dark font-bold mb-2">Insurers &amp; TPAs</p>
                  <p className="text-body text-body mb-3">How ZHEP for Payers keeps members engaged year-round, step by step:</p>
                  <ol className="text-body text-body space-y-1 ml-6 list-decimal">
                    <li><strong>Activate</strong> — members join and build Active Days before a crisis</li>
                    <li><strong>Screen</strong> — wellness checks through the vetted provider network, with verified completion</li>
                    <li><strong>Follow through</strong> — reminders, bookings and follow-through sessions for the appropriate next step</li>
                    <li><strong>Continue care</strong> — selected cohorts move into ZCare care-continuity pathways, where scoped and governed</li>
                    <li><strong>Prove</strong> — aggregate activation, screening completion, follow-through and Active Days at 30, 60 and 90 days</li>
                  </ol>
                  <p className="text-body text-body mt-3">Running payer administration too? We&apos;ll walk you through ZPS, the Zimasa Payer Solution: schemes, enrolment and eligibility, benefits, preauthorisation, claims and provider payments on one core.</p>
                </div>

                <div>
                  <p className="font-heading text-dark font-bold mb-2">Healthcare Providers</p>
                  <p className="text-body text-body">How ZCare, care continuity on ZHEP, lets your team keep members on agreed care pathways between visits, with follow-through you can see.</p>
                </div>

                <div>
                  <p className="font-heading text-dark font-bold mb-2">Employers and Members</p>
                  <p className="text-body text-body">
                    Zimasa GO is free to start, with no demo needed: <Link href="/get-started/" className="text-green hover:underline">get started here</Link>. Full programmes are available through your insurer, broker or scheme.
                  </p>
                </div>

                <hr className="my-6" />

                <div>
                  <p className="font-heading text-dark font-bold mb-2">In 30 minutes</p>
                  <ul className="text-body text-body space-y-2">
                    <li><strong>Platform walkthrough (10 min)</strong> — ZHEP live: the four Tracks, the Community and Rewards Engines, the member experience and reporting. Or ZPS, if payer administration is your focus.</li>
                    <li><strong>Programme design (10 min)</strong> — a sample 90-day programme for your organisation type.</li>
                    <li><strong>Your 30/60/90 reporting view (10 min)</strong> — how activation and Active Days would be reported for your cohort.</li>
                  </ul>
                </div>

                <hr className="my-6" />

                <div>
                  <h4 className="font-heading text-dark mb-4">How we work</h4>
                  <ul className="text-body text-body space-y-2">
                    <li>✓ Privacy-governed: verification of engagement events, not clinical data</li>
                    <li>✓ Aligned with the Kenya Data Protection Act, 2019</li>
                    <li>✓ Aggregate reporting only, with a minimum cohort of 25</li>
                    <li>✓ Verified Active Days, reported at 30, 60 and 90 days</li>
                    <li>✓ Start with a Controlled Go-to-Market and a 90-Day Growth Review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
