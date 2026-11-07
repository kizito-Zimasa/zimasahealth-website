import type { Metadata } from 'next'
import { Activity, ShieldCheck, CheckCircle, Brain, Layers, MapPin, HeartPulse } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const DESCRIPTION =
  'Two solutions from Zimasa: ZHEP, the Health Engagement Platform with ZCare care continuity, and ZPS, payer administration software for insurers, schemes and TPAs. Kenya-first, built for East Africa.'

export const metadata: Metadata = {
  title: { absolute: 'Solutions — ZHEP and ZPS | Zimasa' },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/solutions/',
    title: 'Solutions — ZHEP and ZPS | Zimasa',
    description: DESCRIPTION,
  },
}

export default function SolutionsPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions/', current: true }]} className="mb-0" />
      </div>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="What We Build"
        headline="Two Solutions: ZHEP and ZPS"
        subheadline="ZHEP, the Zimasa Health Engagement Platform — with ZCare care continuity — activates members and makes follow-through measurable. ZPS, the Zimasa Payer Solution, runs payer administration. Use either, or both."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        backgroundVariant="navy"
        image={{ src: '/images/hero/solutions-hero.jpg', alt: 'A team gathered around a tablet during a programme planning discussion', position: '30% 40%', priority: true }}
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 2: Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Our Solutions"
            headline="Engagement and Administration. One Partner."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ZHEP Card */}
            <div className="card">
              <Badge variant="green" className="mb-6">Health Engagement Platform</Badge>
              <Activity size={40} className="text-green mb-6" />
              <h3 className="font-heading text-h3 text-dark mb-2">ZHEP — Zimasa Health Engagement Platform</h3>
              <p className="text-body text-dark mb-4 italic">Four Tracks. Two engines. Verified Active Days.</p>
              <p className="text-body text-body mb-6">
                ZHEP is the engagement platform for insurers, providers, employers and members. Four Tracks — MOVE, NOURISH, CARE and LEARN — are coordinated by the Community Engine (challenges, squads, leaderboards) and the Rewards Engine (streaks, levels, recognition and partner perks), with provider bookings and 30/60/90 reporting.
              </p>
              <p className="text-body text-body mb-6">ZHEP integrates with a payer&apos;s existing core administration system — no replacement needed. Insurers and TPAs buy it as <strong>ZHEP for Payers</strong>, in three packages: Engage, Activate and Manage.</p>

              <h5 className="font-heading text-dark mb-4">Features:</h5>
              <ul className="text-body text-body space-y-2 mb-6">
                <li>✓ MOVE: Gym access, classes, run clubs, step challenges</li>
                <li>✓ NOURISH: Nutrition habits, meal plans, food education</li>
                <li>✓ CARE: Therapy, dietitian, physio, labs, screenings</li>
                <li>✓ LEARN: Guided prevention pathways, health education</li>
                <li>✓ Community Engine: challenges, streaks, team leaderboards</li>
                <li>✓ Rewards Engine: streaks, levels, recognition and partner perks</li>
              </ul>

              <div className="flex items-start gap-3 mb-8 p-4 rounded-lg bg-surface">
                <HeartPulse size={28} className="text-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-dark mb-1">ZCare — care continuity on ZHEP</p>
                  <p className="text-body text-body text-sm mb-2">ZCare operationalises agreed care pathways and makes follow-through measurable — between visits, after screening, across the care team. It supports clinical judgement; it does not replace it.</p>
                  <a href="/solutions/zhep/zcare/" className="font-ui text-label text-blue uppercase tracking-wider hover:text-green">About ZCare →</a>
                </div>
              </div>

              <Button href="/solutions/zhep/" variant="primary" className="w-full justify-center">Explore ZHEP</Button>
            </div>

            {/* ZPS Card */}
            <div className="card">
              <Badge variant="navy" className="mb-6">Payer Administration</Badge>
              <ShieldCheck size={40} className="text-navy mb-6" />
              <h3 className="font-heading text-h3 text-dark mb-2">ZPS — Zimasa Payer Solution</h3>
              <p className="text-body text-dark mb-4 italic">Payer administration, run on one core.</p>
              <p className="text-body text-body mb-6">
                Payer administration software for insurers, schemes and TPAs. Your team runs its administration on ZPS; you remain the insurer and the decision-maker.
              </p>
              <p className="text-body text-body mb-8">Delivered as SaaS — licence, implementation, support, and technology and infrastructure managed services. Works with ZHEP when you want both.</p>

              <h5 className="font-heading text-dark mb-4">What your team runs on ZPS:</h5>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ Schemes and products</li>
                <li>✓ Member enrolment and eligibility</li>
                <li>✓ Benefits and limits</li>
                <li>✓ Provider networks</li>
                <li>✓ Preauthorisation, claims processing and adjudication</li>
                <li>✓ Provider payments, reporting and compliance</li>
                <li>✓ Role-based access and audit trails</li>
              </ul>

              <Button href="/solutions/zps/" variant="primary" className="w-full justify-center">Explore ZPS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How the Platform Works */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="How It Fits Together"
            headline="One Engagement Model, Configured for Each Partner"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h4 className="font-heading text-h4 text-dark mb-4">Insurer or TPA</h4>
              <p className="text-body text-body">Configures programme scope, cohorts and reporting cadence. Receives aggregate 30/60/90 reporting (minimum cohort of 25). Runs administration on its existing core — or on ZPS.</p>
            </div>

            <div className="card">
              <h4 className="font-heading text-h4 text-dark mb-4">ZHEP Platform</h4>
              <p className="text-body text-body">Routes members to relevant tracks. Runs the Community Engine. Manages the Rewards Engine. Verifies every engagement event. ZCare carries agreed care pathways between visits.</p>
            </div>

            <div className="card">
              <h4 className="font-heading text-h4 text-dark mb-4">Provider Network</h4>
              <p className="text-body text-body">Vetted clinics, diagnostics, gyms, dietitians, therapists and labs. Members book through the platform; completion is verified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Platform Differentiators */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why Zimasa"
            headline="What Makes ZHEP Different"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <CheckCircle size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Verified, Not Self-Reported</h4>
              <p className="text-body text-body">Gym check-ins, screening completions, and expert sessions are all verified at the point of service. Active Days is a hard metric, not a survey result.</p>
            </div>

            <div className="card">
              <Brain size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Behaviour Design, Not Nudges Alone</h4>
              <p className="text-body text-body">Built on behaviour design: streaks, social accountability, rewards.</p>
            </div>

            <div className="card">
              <Layers size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Fits Your Existing Systems</h4>
              <p className="text-body text-body">ZHEP integrates with your existing core administration system — no replacement needed. Need to modernise administration too? ZPS is the core.</p>
            </div>

            <div className="card">
              <MapPin size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Kenya-First</h4>
              <p className="text-body text-body">Kenya-first, built for East Africa. Privacy-governed: engagement events, not clinical data. Aligned with the Kenya Data Protection Act, 2019.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA Band */}
      <CtaBand
        headline="Start With a Controlled Go-to-Market"
        subtext="A defined cohort, an agreed programme, and a 90-Day Growth Review."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact-us/' }}
      />
    </main>
  )
}
