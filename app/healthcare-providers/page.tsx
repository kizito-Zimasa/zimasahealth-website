import type { Metadata } from 'next'
import { BadgeCheck, BarChart2, CheckCircle } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Healthcare Providers — Join the Zimasa Network | Zimasa',
  description: 'Join the Zimasa vetted provider network. Receive verified member referrals from payer and employer programmes. Gyms, dietitians, therapists, physios, and labs welcome.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/healthcare-providers/',
    title: 'Healthcare Providers — Join the Zimasa Network | Zimasa',
    description: 'Join the Zimasa vetted provider network. Receive verified member referrals from payer and employer programmes. Gyms, dietitians, therapists, physios, and labs welcome.',
    images: [{ url: '/images/og-providers.jpg', width: 1200, height: 630 }],
  },
}

export default function HealthcareProvidersPage() {
  return (
    <main>
      <Hero
        eyebrow="For Healthcare Providers"
        headline="Receive Members Who Are Ready to Engage"
        subheadline="Zimasa sends verified, pre-engaged members from employer and payer health programmes to network providers. No cold acquisition. No referral fees. Members arrive through structured MOVE, NOURISH, CARE, and LEARN tracks."
        primaryCta={{ label: 'Join the Network', href: '/contact-us/' }}
        secondaryCta={{ label: 'Learn How It Works', href: '#how-it-works' }}
        backgroundVariant="green"
      />

      <section id="how-it-works" className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why Join"
            headline="Qualified Referrals. Verified Engagement. Predictable Volume."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Most healthcare providers spend money acquiring patients through word-of-mouth or social media. Zimasa offers a different model: structured referrals from employer and payer wellness programmes, with pre-engaged members who have already committed to a health track.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <BadgeCheck size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Verified Referrals</h4>
              <p className="text-body text-body">Members in the Zimasa network arrive through structured health tracks — not cold acquisition. They have already onboarded, selected their health interests, and activated their engagement programme.</p>
            </div>

            <div className="card">
              <BarChart2 size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Predictable Volume</h4>
              <p className="text-body text-body">Payer and employer programmes generate consistent monthly member flow. Providers in high-demand tracks see predictable booking volumes.</p>
            </div>

            <div className="card">
              <CheckCircle size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No Referral Fees</h4>
              <p className="text-body text-body">Zimasa does not charge per-referral fees to providers. Network membership is based on vetting and quality standards. Member payment flows are handled through the platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Who Qualifies"
            headline="Four Tracks. Multiple Provider Categories."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            The Zimasa provider network is structured around the four ZHEP health tracks. We accept verified providers in each category:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h4 className="font-heading text-h4 text-green mb-4">MOVE Track Providers</h4>
              <ul className="text-body text-body space-y-2">
                <li>✓ Accredited gyms and fitness centres</li>
                <li>✓ Group fitness instructors (in-person and live-stream)</li>
                <li>✓ Personal training studios</li>
                <li>✓ Run clubs and sports organisations</li>
              </ul>
            </div>

            <div className="card bg-white">
              <h4 className="font-heading text-h4 text-light-green mb-4">NOURISH Track Providers</h4>
              <ul className="text-body text-body space-y-2">
                <li>✓ Registered dietitians</li>
                <li>✓ Certified nutritionists</li>
                <li>✓ Meal planning services</li>
                <li>✓ Food education practitioners</li>
              </ul>
            </div>

            <div className="card bg-white">
              <h4 className="font-heading text-h4 text-blue mb-4">CARE Track Providers</h4>
              <ul className="text-body text-body space-y-2">
                <li>✓ Licensed mental health therapists and counsellors</li>
                <li>✓ Registered physiotherapists</li>
                <li>✓ Accredited diagnostic labs (preventive screening packages)</li>
                <li>✓ Specialist referral partners</li>
              </ul>
            </div>

            <div className="card bg-white">
              <h4 className="font-heading text-h4 text-navy mb-4">LEARN Track Providers</h4>
              <ul className="text-body text-body space-y-2">
                <li>✓ Accredited health education content creators</li>
                <li>✓ Wellness practitioners running evidence-based programmes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Quality Standards"
            headline="Every Provider Is Vetted Before Going Live"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="card text-center">
              <p className="font-display text-h3 text-green mb-2">1</p>
              <h5 className="font-heading text-dark mb-2">Application</h5>
              <p className="text-body text-body text-sm">Submit your provider profile, credentials, and service offering.</p>
            </div>

            <div className="card text-center">
              <p className="font-display text-h3 text-orange mb-2">2</p>
              <h5 className="font-heading text-dark mb-2">Verification</h5>
              <p className="text-body text-body text-sm">Zimasa verifies licences and certifications. 5–7 business days.</p>
            </div>

            <div className="card text-center">
              <p className="font-display text-h3 text-blue mb-2">3</p>
              <h5 className="font-heading text-dark mb-2">Onboarding</h5>
              <p className="text-body text-body text-sm">QR check-in setup, booking integration, and dashboard access.</p>
            </div>

            <div className="card text-center">
              <p className="font-display text-h3 text-navy mb-2">4</p>
              <h5 className="font-heading text-dark mb-2">Go Live</h5>
              <p className="text-body text-body text-sm">Your facility becomes discoverable to members in relevant tracks.</p>
            </div>

            <div className="card text-center">
              <p className="font-display text-h3 text-green mb-2">5</p>
              <h5 className="font-heading text-dark mb-2">Monitoring</h5>
              <p className="text-body text-body text-sm">Zimasa monitors member satisfaction and engagement quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Network Offer"
            headline="More Than Referrals"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Member Volume', desc: 'Structured member flow from payer and employer programmes — not one-off bookings.' },
              { title: 'Booking Management', desc: 'Simple booking flow integrated with ZHEP. No extra software required.' },
              { title: 'Verified Check-In', desc: 'QR or PIN-based check-in system. Each check-in is automatically recorded as an engagement event.' },
              { title: 'Provider Dashboard', desc: 'Monthly summary of member visits, track activity, and satisfaction ratings.' },
              { title: 'Network Visibility', desc: 'Listed on the Zimasa provider directory — visible to all member-facing programmes using ZHEP.' },
              { title: 'Programme Integration', desc: 'Featured in specific 90-day programme designs for payer and employer clients.' },
            ].map((benefit, i) => (
              <div key={i} className="card">
                <h5 className="font-heading text-dark mb-2">{benefit.title}</h5>
                <p className="text-body text-body text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to Join the Network?"
        subtext="Tell us about your practice or facility. Our provider team will review your application and be in touch within 5–7 business days."
        primaryCta={{ label: 'Apply to Join', href: '/contact-us/' }}
      />
    </main>
  )
}
