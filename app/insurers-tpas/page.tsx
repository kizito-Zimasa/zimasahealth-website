import type { Metadata } from 'next'
import { TrendingDown, AlertTriangle, FileX, CalendarCheck, BarChart2, ShieldCheck } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Insurers & TPAs — Health Engagement That Moves the Needle | Zimasa',
  description: 'Zimasa gives health insurers, TPAs, and medical schemes measurable member engagement in 90 days. Cohort dashboards, white-label programmes, PHI-avoidant architecture.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/insurers-tpas/',
    title: 'Insurers & TPAs — Health Engagement That Moves the Needle | Zimasa',
    description: 'Zimasa gives health insurers, TPAs, and medical schemes measurable member engagement in 90 days. Cohort dashboards, white-label programmes, PHI-avoidant architecture.',
  },
}

export default function InsurersTPAsPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insurers & TPAs', href: '/insurers-tpas/', current: true }]} className="mb-0" />
      </div>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="For Insurers & TPAs"
        headline="Your Members Can Be Activated. Here Is the Evidence."
        subheadline="Zimasa runs structured 90-day health engagement programmes for health schemes, TPAs, and insurers — measuring cohort-level activation at 30, 60, and 90 days, without touching PHI."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See the ZPS Platform', href: '/solutions/zps/' }}
        backgroundVariant="navy"
      />

      {/* Section 2: The Payer Problem */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Challenge"
            headline="You're Paying for Wellness Benefits That Don't Move the Needle"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Most health schemes and TPAs offer wellness benefits — gym discounts, app subscriptions, health checks. The utilisation numbers are low, the data is unverified, and there is no clear line between wellness spend and risk trajectory. Renewal conversations happen without engagement evidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <TrendingDown size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Low Member Activation</h4>
              <p className="text-body text-body">Members register and disappear. Engagement drops below 15% after the first month. You have no visibility into which cohorts are genuinely active.</p>
            </div>

            <div className="card">
              <AlertTriangle size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Unverified Data</h4>
              <p className="text-body text-body">Self-reported wellness activity cannot support risk adjustment or board reporting. Without verification, your wellness spend is a cost centre, not a risk tool.</p>
            </div>

            <div className="card">
              <FileX size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No Renewal Leverage</h4>
              <p className="text-body text-body">When renewal negotiations begin, you lack the activation data to justify your engagement investment or demonstrate risk trajectory improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Zimasa Delivers */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Deliver"
            headline="Structured Programmes. Verified Activation. Renewal-Ready Reports."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            The Zimasa Payer Solution (ZPS) gives health schemes and TPAs a complete engagement infrastructure — programme design, white-label member experience, verified activity tracking, and cohort-level dashboards designed for CMO and CRO decision-making. Every engagement runs as a defined 90-day programme with deliverables at 30, 60, and 90 days.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] rounded-icon bg-green/10 flex items-center justify-center mb-4">
                <CalendarCheck size={40} className="text-green" />
              </div>
              <h4 className="font-heading text-h4 text-dark mb-2">Structured 90-Day Programmes</h4>
              <p className="text-body text-body">Structured 90-day programmes with defined phases, deliverables, and success thresholds agreed at contract signature.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] rounded-icon bg-green/10 flex items-center justify-center mb-4">
                <BarChart2 size={40} className="text-green" />
              </div>
              <h4 className="font-heading text-h4 text-dark mb-2">Cohort Dashboards</h4>
              <p className="text-body text-body">30/60/90-day cohort dashboards giving activation rates, engagement depth, and a renewal-ready report exportable for actuarial and board audiences.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] rounded-icon bg-green/10 flex items-center justify-center mb-4">
                <ShieldCheck size={40} className="text-green" />
              </div>
              <h4 className="font-heading text-h4 text-dark mb-2">PHI-Avoidant Architecture</h4>
              <p className="text-body text-body">PHI-avoidant architecture — verification of engagement events, never clinical records — with full KDPA compliance documentation available on request.</p>
            </div>
          </div>

          <div className="text-center">
            <Button href="/solutions/zps/" variant="primary">See the Full ZPS Platform</Button>
          </div>
        </div>
      </section>

      {/* Section 4: The Dashboard Suite */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Reporting"
            headline="Three Dashboards. Three Decisions."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            ZPS delivers purpose-built dashboards at 30, 60, and 90 days — each designed for a specific decision-maker and a specific stage of the programme cycle. The 30-day dashboard tells your Member Experience lead whether activation is on track. The 60-day dashboard shows Risk Managers where engagement is deepening and where it is dropping off. The 90-day report gives CMOs and CROs a renewal-ready evidence pack they can put in front of actuaries and boards.
          </p>

          <div className="max-w-sm mx-auto card text-center">
            <p className="font-display text-h2 text-green mb-2">30 · 60 · 90</p>
            <p className="text-body-lg text-dark mb-2">Activation rate. Engagement depth. Renewal readiness.</p>
            <p className="text-body text-body mb-6">Every metric is at cohort level. No individual member data.</p>
            <Button href="/solutions/zps/" variant="primary">See the Full Dashboard Suite</Button>
          </div>
        </div>
      </section>

      {/* Section 5: White-Label Deployment */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Your Brand, Our Infrastructure"
            headline="Members See Your Brand. You Get Our Engagement Engine."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            ZPS deploys under your scheme or TPA brand identity. Members experience a fully branded health engagement platform — your logo, your colours, your communications. Zimasa runs the infrastructure: the provider network, the verification layer, the programme management, and the dashboards.
          </p>
          <div className="text-center">
            <Button href="/solutions/zps/" variant="primary">See How White-Label Deployment Works</Button>
          </div>
        </div>
      </section>

      {/* Section 6: PHI Policy */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Data & Compliance"
            headline="Built Without PHI from the Ground Up"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Zimasa does not collect, store, or transmit protected health information. The platform verifies engagement events — a member completed a gym session, booked a dietitian appointment, finished a health education module — without accessing or recording clinical data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Badge variant="green" className="mb-4">What Zimasa Records</Badge>
              <p className="text-body text-dark">Verified engagement events and Active Days</p>
            </div>
            <div>
              <Badge variant="orange" className="mb-4">What Zimasa Does Not Record</Badge>
              <p className="text-body text-dark">Diagnoses, prescriptions, lab results, or clinical notes</p>
            </div>
            <div>
              <Badge variant="blue" className="mb-4">Applicable Regulation</Badge>
              <p className="text-body text-dark">Kenya Data Protection Act 2019 compliant</p>
            </div>
          </div>

          <p className="text-center text-body text-sm mt-8">
            <strong>Reporting level:</strong> Cohort and aggregate — individual member data is visible only to the member
          </p>
        </div>
      </section>

      {/* Section 7: Early Partner Programme */}
      <section className="section-padding bg-light-green">
        <div className="section-container max-w-narrow mx-auto text-center">
          <p className="eyebrow mb-2">2026 Pilot Cohort</p>
          <h2 className="font-display text-h2 text-dark mb-6">Join as an Early Partner</h2>
          <p className="text-body-lg text-dark mb-12">
            We are building our first contracted payer cohort in 2026. Early partners receive a dedicated programme manager, weekly engagement snapshots, direct input on dashboard design, and preferential pricing for Year 2.
          </p>

          <ul className="text-left max-w-md mx-auto space-y-3 mb-12">
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">Dedicated programme manager (not shared)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">Weekly Active Days reports</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">Custom dashboard configuration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">Input on Q3 2026 platform roadmap</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">Preferential Year 2 pricing</span>
            </li>
          </ul>

          <Button href="/book-demo/" variant="primary">Apply for Early Access</Button>
        </div>
      </section>

      {/* Section 8: CTA Band */}
      <CtaBand
        headline="See the 30/60/90 Dashboard in a Live Demo"
        subtext="We'll show you a real programme design, the dashboard suite, and your first cohort activation forecast — in 30 minutes."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See the ZPS Platform', href: '/solutions/zps/' }}
        variant="navy"
      />
    </main>
  )
}
