import type { Metadata } from 'next'
import { CheckCircle, MapPin, Lock } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About Zimasa — Built for Africa\'s Health Engagement Challenge',
  description: 'Zimasa is a Nairobi-based health engagement technology company. We build the engagement infrastructure that connects payers, employers, and members to measurable health outcomes.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/about/',
    title: 'About Zimasa — Built for Africa\'s Health Engagement Challenge',
    description: 'Zimasa is a Nairobi-based health engagement technology company. We build the engagement infrastructure that connects payers, employers, and members to measurable health outcomes.',
  },
}

export default function AboutPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about/', current: true }]} className="mb-0" />
      </div>
      <Hero
        eyebrow="About Zimasa"
        headline="We Changed What We Were Building"
        subheadline="Zimasa started as a claims processing business. After spending years inside health insurance operations in East Africa, our founder concluded that the real problem wasn't processing claims faster — it was preventing them."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Read Our Story', href: '#our-story' }}
        backgroundVariant="navy"
        image={{ src: '/images/hero/about-hero.png', alt: 'Kizito Makatiani, founder of Zimasa' }}
      />

      <section id="our-story" className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Origin"
            headline="From Processing Claims to Preventing Them"
            align="left"
          />

          <div className="space-y-6 mb-12">
            <p className="text-body-lg text-body">
              After years working in health insurance operations across East Africa, our founder saw the same pattern repeating: low member engagement with wellness benefits, rising claims costs, and no feedback loop connecting payer investment to member behaviour.
            </p>

            <p className="text-body-lg text-body">
              The question was: what if instead of building better claims infrastructure, we built better engagement infrastructure?
            </p>

            <p className="text-body-lg text-body">
              That shift — from reactive to preventive, from transactional to behavioural — is the foundation of Zimasa.
            </p>

            <p className="text-body-lg text-body">
              We are building the Health Engagement OS for African health markets: a platform that connects payers and employers to a vetted provider network, runs structured health programmes, and generates the verified engagement data that risk-conscious buyers need.
            </p>
          </div>

          <blockquote className="border-l-4 border-green pl-8 py-6 italic text-h4 text-dark mb-12">
            "The real problem wasn't processing claims faster. It was preventing them."
          </blockquote>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Stand For"
            headline="Our Mission"
            align="center"
          />

          <p className="text-body-lg text-body text-center mb-12 max-w-2xl mx-auto">
            To drive measurable health activation across African member populations — through verified engagement, behaviour design, and a curated provider network.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <CheckCircle size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Verification Over Vanity</h4>
              <p className="text-body text-body">We only report what we can verify. Active Days are earned through confirmed activity — not app logins, self-declarations, or estimates. If we can't verify it, it doesn't count.</p>
            </div>

            <div className="card">
              <MapPin size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Africa-First, Always</h4>
              <p className="text-body text-body">Every product decision is made for East African market realities: MPESA-native rewards, local provider economics, NHIF-adjacent programme design, and infrastructure that works in variable connectivity.</p>
            </div>

            <div className="card">
              <Lock size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">PHI-Avoidant by Design</h4>
              <p className="text-body text-body">We built the platform to deliver engagement outcomes without touching protected health information. Payers and employers get the data they need; member clinical data stays where it belongs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Who We Are"
            headline="A Lean Team with Deep Domain Expertise"
            align="center"
          />

          <p className="text-body-lg text-body text-center mb-12">
            Zimasa is a 6–7 person team with a blend of health insurance operations, product engineering, and go-to-market experience across East Africa.
          </p>

          <div className="space-y-4 text-body text-body">
            <p>✓ Founder & CEO — health insurance operations background, East Africa</p>
            <p>✓ CTO — product and platform engineering</p>
            <p>✓ Programme Management — client onboarding and 90-day delivery</p>
            <p>✓ Provider Network — vetting, onboarding, and quality monitoring</p>
            <p>✓ Sales & Growth — payer and employer acquisition</p>
          </div>
        </div>
      </section>
    </main>
  )
}
