import type { Metadata } from 'next'
import { CheckCircle, MapPin, Lock } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About Zimasa — Built for East Africa\'s Health Engagement Challenge',
  description: 'Zimasa is a Nairobi-based health engagement technology company — the Health Engagement OS connecting payers, providers, employers and members through verified engagement.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/about/',
    title: 'About Zimasa — Built for East Africa\'s Health Engagement Challenge',
    description: 'Zimasa is a Nairobi-based health engagement technology company — the Health Engagement OS connecting payers, providers, employers and members through verified engagement.',
  },
}

export default function AboutPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about/', current: true }]} className="mb-0" />
      </div>
      {/* DRAFT-COPY 2026-10: Founder review */}
      <Hero
        eyebrow="About Zimasa"
        headline="A Strong Core. Members Who Engage."
        subheadline="Zimasa is the Health Engagement OS for insurers, TPAs and providers in East Africa — built by a team that spent years building insurance technology."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Read Our Story', href: '#our-story' }}
        backgroundVariant="navy"
        image={{ src: '/images/hero/about-hero.png', alt: 'Kizito Makatiani, founder of Zimasa' }}
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      <section id="our-story" className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Origin"
            headline="Processing Claims Well. Preventing Avoidable Ones."
            align="left"
          />

          <div className="space-y-6 mb-12">
            <p className="text-body-lg text-body">
              Zimasa grew out of years building insurance technology for insurers across Africa. Processing claims well is necessary — payers need a strong core. But preventing avoidable claims needs something different: members who engage before a crisis.
            </p>

            <p className="text-body-lg text-body">
              Zimasa brings both: ZPS for payer administration and ZHEP for health engagement.
            </p>

            {/* FOUNDER-REVIEW: confirm insurer count before adding a number */}
            {/* FOUNDER-REVIEW: confirm wording of the founder's Turnkey Africa / TurnQuest role */}
            <p className="text-body-lg text-body">
              Our founder&apos;s background is in insurance technology at Turnkey Africa, building TurnQuest — insurance software used by insurers across seven African countries.
            </p>

            <p className="text-body-lg text-body">
              Zimasa is the Health Engagement OS for insurers, TPAs and providers in East Africa — activating members, making follow-through measurable, and proving engagement with verified Active Days.
            </p>
          </div>

          <blockquote className="border-l-4 border-green pl-8 py-6 italic text-h4 text-dark mb-12">
            &ldquo;Processing claims well is necessary. Preventing avoidable claims needs members who engage before a crisis.&rdquo;
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

          {/* DRAFT-COPY 2026-10: Founder review */}
          <p className="text-body-lg text-body text-center mb-12 max-w-2xl mx-auto">
            To activate members before a crisis and make health engagement verifiable — through verified engagement, behaviour design and a curated provider network. Kenya-first, built for East Africa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <CheckCircle size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Verification Over Vanity</h4>
              <p className="text-body text-body">We only report what we can verify. Active Days are earned through confirmed activity — not app logins, self-declarations or estimates. If we can&apos;t verify it, it doesn&apos;t count.</p>
            </div>

            <div className="card">
              <MapPin size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Kenya-First, Always</h4>
              <p className="text-body text-body">Every product decision starts from Kenyan and East African market realities: mobile-first design, local provider economics and infrastructure that works in variable connectivity.</p>
            </div>

            <div className="card">
              <Lock size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Privacy-Governed by Design</h4>
              <p className="text-body text-body">In employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Provider contexts may handle regulated health data only under governance conditions. Aligned with the Kenya Data Protection Act, 2019. Zimasa is registered with the Office of the Data Protection Commissioner (ODPC) as a Data Controller and Data Processor.</p>
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
            Zimasa is a 6–7 person team with a blend of insurance technology, health insurance operations, product engineering and go-to-market experience in East Africa.
          </p>

          <div className="space-y-4 text-body text-body">
            <p>✓ Founder & CEO — insurance technology and health insurance operations background</p>
            <p>✓ CTO — product and platform engineering</p>
            <p>✓ Programme Management — client onboarding and 90-day delivery</p>
            <p>✓ Provider Network — vetting, onboarding and quality review</p>
            <p>✓ Sales & Growth — payer, broker and provider partnerships</p>
          </div>
        </div>
      </section>
    </main>
  )
}
