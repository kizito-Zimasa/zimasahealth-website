import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Who We Help — Payers, Employers & Providers | Zimasa',
  description: 'Zimasa serves health insurers and TPAs, employers and HR teams, and healthcare providers across East Africa. See how each buyer benefits from the ZHEP platform.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/who-we-help/',
    title: 'Who We Help — Payers, Employers & Providers | Zimasa',
    description: 'Zimasa serves health insurers and TPAs, employers and HR teams, and healthcare providers across East Africa. See how each buyer benefits from the ZHEP platform.',
    images: [{ url: '/images/og-who-we-help.jpg', width: 1200, height: 630 }],
  },
}

export default function WhoWeHelpPage() {
  return (
    <main>
      <Hero
        eyebrow="Buyer Personas"
        headline="Built for the People Making Population Health Decisions"
        subheadline="Zimasa serves three buyer types — each with distinct goals, metrics, and decision-making structures. Our platform is designed around the outcomes each buyer needs to demonstrate."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        backgroundVariant="navy"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader eyebrow="Segment 1" headline="Health Insurers, TPAs & Medical Schemes" align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-heading text-h4 text-dark mb-4">Roles</h4>
              <p className="text-body text-body mb-6">CMO · CRO · Risk Manager · Head of Member Experience</p>

              <h4 className="font-heading text-h4 text-dark mb-4">The Challenge</h4>
              <p className="text-body text-body mb-8">Payers carry the cost risk of a member population they cannot easily influence. Low member activation means wellness benefits are a cost line, not a risk tool. Renewal conversations happen without engagement evidence.</p>

              <h4 className="font-heading text-h4 text-dark mb-4">What They Need from Zimasa</h4>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ Verified cohort-level engagement data</li>
                <li>✓ A structured 90-day programme they can point to at renewal</li>
                <li>✓ White-label member experience under their scheme brand</li>
                <li>✓ Dashboards CMOs can present to actuaries and boards</li>
              </ul>
            </div>

            <div className="card bg-surface">
              <h5 className="font-heading text-dark mb-6">Key Metrics</h5>
              <ul className="text-body text-body space-y-3">
                <li>• Activation rate by cohort and age band</li>
                <li>• Active Days per member per month</li>
                <li>• CARE track utilisation (preventive interventions)</li>
                <li>• 90-day engagement trajectory</li>
              </ul>
              <hr className="my-6" />
              <Button href="/insurers-tpas/" variant="primary" className="w-full justify-center">See Payers Solution</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader eyebrow="Segment 2" headline="Practice Owners, Clinic Leads & Gym Operators" align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-heading text-h4 text-dark mb-4">Roles</h4>
              <p className="text-body text-body mb-6">Practice Owner · Clinic Lead · Gym Manager · Dietitian · Therapist</p>

              <h4 className="font-heading text-h4 text-dark mb-4">The Challenge</h4>
              <p className="text-body text-body mb-8">Healthcare providers spend resources acquiring patients through word-of-mouth or social media. Quality referrals are expensive and unpredictable. Patients often arrive without context on their health goals.</p>

              <h4 className="font-heading text-h4 text-dark mb-4">What They Need from Zimasa</h4>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ A consistent stream of pre-engaged, verified member referrals</li>
                <li>✓ Simple check-in system that records activity automatically</li>
                <li>✓ Visibility into booking patterns and utilisation</li>
                <li>✓ No acquisition cost — network membership replaces referral spend</li>
              </ul>
            </div>

            <div className="card bg-white">
              <h5 className="font-heading text-dark mb-6">Key Metrics</h5>
              <ul className="text-body text-body space-y-3">
                <li>• Monthly member visits</li>
                <li>• Track-specific booking volume</li>
                <li>• Member satisfaction ratings</li>
              </ul>
              <hr className="my-6" />
              <Button href="/healthcare-providers/" variant="primary" className="w-full justify-center">Join the Network</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader eyebrow="Segment 3" headline="HR Directors, CFOs & People Teams" align="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-heading text-h4 text-dark mb-4">Roles</h4>
              <p className="text-body text-body mb-6">HR Director · CFO · Head of People · Benefits Manager</p>

              <h4 className="font-heading text-h4 text-dark mb-4">The Challenge</h4>
              <p className="text-body text-body mb-8">Employers invest in wellness benefits that generate low utilisation and no measurable ROI. Annual health check budgets are spent on services that don't change member behaviour. The board asks for evidence of impact and the HR team has none.</p>

              <h4 className="font-heading text-h4 text-dark mb-4">What They Need from Zimasa</h4>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ A workforce wellness programme with verifiable utilisation data</li>
                <li>✓ Track-mix reporting they can present at board level</li>
                <li>✓ A per-employee-per-month model with predictable cost</li>
                <li>✓ A programme that goes beyond gym subsidies</li>
              </ul>
            </div>

            <div className="card bg-surface">
              <h5 className="font-heading text-dark mb-6">Key Metrics</h5>
              <ul className="text-body text-body space-y-3 mb-6">
                <li>• Active Days per employee per month</li>
                <li>• Track utilisation mix (MOVE / NOURISH / CARE / LEARN)</li>
                <li>• Engagement rate vs. enrolled population</li>
                <li>• Cost per active member</li>
              </ul>
              <p className="text-body text-body text-sm mb-6"><strong>Available Now:</strong> Zimasa Go (free tier)<br/><strong>Coming Q4 2026:</strong> Full programme with dashboards and SLAs</p>
              <Button href="/book-demo/" variant="primary" className="w-full justify-center">Book a Demo</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green text-white">
        <div className="section-container max-w-narrow mx-auto text-center">
          <h2 className="font-display text-h2 text-white mb-4">What Every Buyer Shares</h2>
          <p className="text-body-lg text-white/80 mb-8">
            Every buyer type has a different goal — payers want risk visibility, employers want utilisation evidence, providers want qualified referrals. What they share is a need for data they can trust.
          </p>
          <p className="text-body-lg text-white mb-8">
            Zimasa's verification model means every Active Day is earned, not estimated. Every engagement event is confirmed at the point of service. Every report reflects real behaviour, not app sessions or self-declarations.
          </p>
          <p className="font-heading text-h4 text-white">50–70% activation rate within 90 days. 8–12 Active Days per member per month for engaged members.</p>
        </div>
      </section>

      <CtaBand
        headline="Which Buyer Are You?"
        subtext="Tell us about your organisation and goals. We'll match you with the right programme design and show you what 90-day results look like for your specific context."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Contact Sales', href: '/contact-us/' }}
      />
    </main>
  )
}
