import type { Metadata } from 'next'
import { Activity, ShieldCheck, CheckCircle, Brain, Layers, MapPin } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Solutions — Zimasa Health Engagement OS',
  description: 'ZHEP and the Payers Solution: two engagement products built for African health markets. White-label ready, PHI-avoidant, measurable in 90 days.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/solutions/',
    title: 'Solutions — Zimasa Health Engagement OS',
    description: 'ZHEP and the Payers Solution: two engagement products built for African health markets. White-label ready, PHI-avoidant, measurable in 90 days.',
    images: [{ url: '/images/og-solutions.jpg', width: 1200, height: 630 }],
  },
}

export default function SolutionsPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="What We Build"
        headline="Engagement Infrastructure for Health Buyers"
        subheadline="Zimasa delivers two core products for Phase 1: ZHEP, the member-facing Health Engagement OS, and our Payers Solution — a CMO/CRO toolkit for cohort engagement and renewal leverage."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        backgroundVariant="navy"
      />

      {/* Section 2: Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Phase 1 Products"
            headline="Two Products. One Engagement Model."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ZHEP Card */}
            <div className="card">
              <Badge variant="green" className="mb-6">Member Engagement Platform</Badge>
              <Activity size={40} className="text-green mb-6" />
              <h3 className="font-heading text-h3 text-dark mb-2">The Health Engagement OS</h3>
              <p className="text-body text-dark mb-4 italic">Four tracks. Two engines. Verified activation.</p>
              <p className="text-body text-body mb-6">
                ZHEP gives members access to four health tracks — MOVE, NOURISH, CARE, and LEARN — coordinated by the Community Engine (challenges, leaderboards, accountability) and the Rewards Engine (incentives, partner perks, wallet credits).
              </p>
              <p className="text-body text-body mb-8">Every engagement event is verified. Active Days are the headline metric. White-label ready for payers and employers.</p>

              <h5 className="font-heading text-dark mb-4">Features:</h5>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ MOVE: Gym access, classes, run clubs, step challenges</li>
                <li>✓ NOURISH: Nutrition habits, meal plans, food education</li>
                <li>✓ CARE: Therapy, dietitian, physio, labs, screenings</li>
                <li>✓ LEARN: Guided prevention pathways, health education</li>
                <li>✓ Community Engine: challenges, streaks, team leaderboards</li>
                <li>✓ Rewards Engine: partner perks, wallet credits, incentives</li>
              </ul>

              <Button href="/solutions/zhep/" variant="primary" className="w-full justify-center">Explore ZHEP</Button>
            </div>

            {/* Payers Solution Card */}
            <div className="card">
              <Badge variant="navy" className="mb-6">For Insurers & TPAs</Badge>
              <ShieldCheck size={40} className="text-navy mb-6" />
              <h3 className="font-heading text-h3 text-dark mb-2">Cohort Engagement for Risk-Conscious Buyers</h3>
              <p className="text-body text-dark mb-4 italic">30/60/90-day dashboards. White-label. No PHI.</p>
              <p className="text-body text-body mb-6">
                The Payers Solution gives CMOs, CROs, and Risk Managers the tools to run structured health programmes for their member populations and use activation data at renewal.
              </p>
              <p className="text-body text-body mb-8">30-day: activation rate and track mix. 60-day: engagement depth and provider utilisation. 90-day: cohort risk trajectory and renewal readiness report.</p>

              <h5 className="font-heading text-dark mb-4">Features:</h5>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ Cohort-level engagement dashboards</li>
                <li>✓ 30/60/90-day activation snapshots</li>
                <li>✓ White-label member experience</li>
                <li>✓ Programme design support</li>
                <li>✓ PHI-avoidant architecture</li>
                <li>✓ Renewal leverage reporting</li>
              </ul>

              <Button href="/insurers-tpas/" variant="primary" className="w-full justify-center">See Payers Solution</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How the Platform Works */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Architecture"
            headline="One Platform, Configured for Each Buyer"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h4 className="font-heading text-h4 text-dark mb-4">Payer or Employer</h4>
              <p className="text-body text-body">Configures programme scope, benefit budget, and reporting cadence. Receives white-label portal and weekly/monthly dashboards.</p>
            </div>

            <div className="card">
              <h4 className="font-heading text-h4 text-dark mb-4">ZHEP Platform</h4>
              <p className="text-body text-body">Routes members to relevant tracks. Runs the Community Engine. Manages the Rewards Engine. Verifies every engagement event.</p>
            </div>

            <div className="card">
              <h4 className="font-heading text-h4 text-dark mb-4">Provider Network</h4>
              <p className="text-body text-body">Verified gyms, dietitians, therapists, labs. Members access via booking flow. Providers receive verified member referrals.</p>
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
              <h4 className="font-heading text-h4 text-dark mb-3">Behaviour Design, Not Nudges</h4>
              <p className="text-body text-body">The engagement model is built on habit formation science — streaks, social accountability, variable reward cycles. Members stay active beyond Week 2.</p>
            </div>

            <div className="card">
              <Layers size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">White-Label Ready</h4>
              <p className="text-body text-body">Payers and employers deploy ZHEP under their own brand. Member-facing app, communications, and portal carry your identity.</p>
            </div>

            <div className="card">
              <MapPin size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Africa-First</h4>
              <p className="text-body text-body">Built for Kenyan market realities. MPESA-native rewards, connectivity-resilient design, NHIF-adjacent programme architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Phase 2 Preview */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="What's Coming"
            headline="Phase 2 Solutions (2026 H2)"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">Phase 2 will extend the Zimasa platform for employers with dedicated HR tools, plus specialist modules for gym operators, group schemes, and provider HIS integration.</p>

          <div className="max-w-3xl mx-auto overflow-x-auto mb-12">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3">Module</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-white">
                  <td className="px-4 py-3 font-medium">HR Solution</td>
                  <td className="px-4 py-3">In development</td>
                </tr>
                <tr className="hover:bg-white">
                  <td className="px-4 py-3 font-medium">Care & Disease Management</td>
                  <td className="px-4 py-3">Planned</td>
                </tr>
                <tr className="hover:bg-white">
                  <td className="px-4 py-3 font-medium">Gym & Movement Platform</td>
                  <td className="px-4 py-3">Planned</td>
                </tr>
                <tr className="hover:bg-white">
                  <td className="px-4 py-3 font-medium">Group Membership Management</td>
                  <td className="px-4 py-3">Planned</td>
                </tr>
                <tr className="hover:bg-white">
                  <td className="px-4 py-3 font-medium">HIS Integration</td>
                  <td className="px-4 py-3">Planned</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Button href="/contact-us/" variant="primary">Register Interest</Button>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Band */}
      <CtaBand
        headline="Start With a 90-Day Programme"
        subtext="We onboard new clients with a structured pilot — dedicated programme manager, weekly reports, and measurable activation data at Day 90."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Contact Sales', href: '/contact-us/' }}
      />
    </main>
  )
}
