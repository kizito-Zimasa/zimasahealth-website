import type { Metadata } from 'next'
import { Layers, Users, ClipboardList, Network, FileCheck, Wallet, BarChart2, ShieldCheck, KeyRound, ScrollText, Server, Wrench, LifeBuoy, FileSignature, Activity, Lock } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const DESCRIPTION =
  'ZPS — Zimasa Payer Solution: payer administration software for insurers, schemes and TPAs. Schemes, enrolment and eligibility, benefits, provider networks, preauthorisation, claims, provider payments, reporting and compliance — delivered as SaaS.'

export const metadata: Metadata = {
  title: { absolute: 'ZPS — Zimasa Payer Solution | Payer Administration Software | Zimasa' },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/solutions/zps/',
    title: 'ZPS — Zimasa Payer Solution | Payer Administration Software | Zimasa',
    description: DESCRIPTION,
  },
}

const capabilities = [
  { icon: Layers, title: 'Schemes and products', desc: 'Set up and maintain schemes, products and plan structures in one place.' },
  { icon: Users, title: 'Member enrolment and eligibility', desc: 'Enrol members and dependants and keep eligibility current.' },
  { icon: ClipboardList, title: 'Benefits and limits', desc: 'Configure benefits, limits and rules for each scheme and product.' },
  { icon: Network, title: 'Provider networks', desc: 'Manage the providers in your network and the terms they work under.' },
  { icon: FileCheck, title: 'Preauthorisation, claims processing and adjudication', desc: 'Receive, assess and adjudicate preauthorisation requests and claims against benefits and limits.' },
  { icon: Wallet, title: 'Provider payments', desc: 'Manage payments to providers for adjudicated claims.' },
  { icon: BarChart2, title: 'Reporting and compliance', desc: 'Operational and regulatory reporting from the same core your team runs on.' },
]

export default function ZPSPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions/' }, { label: 'ZPS', href: '/solutions/zps/', current: true }]} className="mb-0" />
      </div>
      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 1: Hero */}
      <Hero
        eyebrow="ZPS — Zimasa Payer Solution"
        headline="Payer administration, run on one core."
        subheadline="ZPS is payer administration software for insurers, schemes and TPAs — schemes and products, member enrolment and eligibility, benefits and limits, provider networks, preauthorisation, claims, provider payments, reporting and compliance. Your team runs its administration on ZPS; you remain the insurer and the decision-maker."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact-us/' }}
        backgroundVariant="navy"
        image={{ src: '/images/hero/zps-hero.jpg', alt: 'Two colleagues working through a task together at a laptop', position: '60% 50%', priority: true }}
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 2: What your team runs on ZPS */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Core"
            headline="What Your Team Runs on ZPS"
            subheadline="One core for payer administration — with role-based access and audit trails across every module."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="card">
                  <Icon size={40} className="text-navy mb-4" />
                  <h4 className="font-heading text-h4 text-dark mb-3">{cap.title}</h4>
                  <p className="text-body text-body">{cap.desc}</p>
                </div>
              )
            })}
            <div className="card">
              <KeyRound size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Role-based access and audit trails</h4>
              <p className="text-body text-body">Each user sees and does only what their role allows, and actions are recorded in audit trails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 3: You stay in control */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Your Business, Your Decisions"
            headline="You Stay in Control"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            ZPS is the core your team runs on. You remain the insurer and the decision-maker — on eligibility, benefits, preauthorisation, claims and payments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheck size={40} className="text-navy mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">You decide</h4>
              <p className="text-body text-body">Your team makes the administration and claims decisions, on your rules.</p>
            </div>
            <div className="text-center">
              <KeyRound size={40} className="text-navy mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Role-based access</h4>
              <p className="text-body text-body">Access is set by role, so people see only what their work requires.</p>
            </div>
            <div className="text-center">
              <ScrollText size={40} className="text-navy mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Audit trails</h4>
              <p className="text-body text-body">Actions in ZPS are recorded, so every decision can be traced.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 4: Delivered as SaaS */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="How It Is Delivered"
            headline="Delivered as SaaS"
            subheadline="ZPS comes as one service — so your team can focus on running the business, not the system."
            align="center"
          />
          {/* FOUNDER-REVIEW: no implementation timelines, hosting locations, uptime or support SLAs are stated; add only once confirmed. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <FileSignature size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Licence</h4>
              <p className="text-body text-body">Access to the ZPS platform for your team.</p>
            </div>
            <div className="card">
              <Wrench size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Implementation</h4>
              <p className="text-body text-body">Configuration of your schemes, products, benefits and provider networks.</p>
            </div>
            <div className="card">
              <LifeBuoy size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Support</h4>
              <p className="text-body text-body">Ongoing support for your administration team.</p>
            </div>
            <div className="card">
              <Server size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Managed services</h4>
              <p className="text-body text-body">Technology and infrastructure managed services, run by Zimasa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 5: Works with ZHEP */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="Optional"
            headline="Works With ZHEP"
            align="center"
          />
          <div className="flex justify-center mb-6">
            <Activity size={40} className="text-green" />
          </div>
          <p className="text-body-lg text-body mb-8">
            Want member engagement as well as administration? ZPS works with ZHEP, the Zimasa Health Engagement Platform: eligibility and cohort signals flow from ZPS to ZHEP, so engagement programmes reach the right members. Insurers and TPAs buy the engagement offer as ZHEP for Payers.
          </p>
          <Button href="/insurers-tpas/" variant="primary">See ZHEP for Payers</Button>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 6: Data governance */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Data Governance"
            headline="Your Data, Governed"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <Badge variant="navy" className="mb-4">Inside ZPS</Badge>
              <p className="text-body text-body">Claims and preauthorisation data stay inside ZPS by default, under role-based access and audit trails.</p>
            </div>
            <div className="card">
              <Badge variant="green" className="mb-4">Roles</Badge>
              <p className="text-body text-body">You are the data controller. Zimasa is the processor.</p>
            </div>
            <div className="card">
              <Badge variant="blue" className="mb-4">Regulatory</Badge>
              <p className="text-body text-body">Aligned with the Kenya Data Protection Act, 2019. Zimasa is registered with the Office of the Data Protection Commissioner (ODPC) as a Data Controller and Data Processor.</p>
            </div>
          </div>
          <p className="text-center text-body text-sm mt-8 flex items-center justify-center gap-2">
            <Lock size={16} className="text-navy" />
            <span>Read more in our <a href="/privacy-centre/" className="text-green hover:underline">Privacy Centre</a>.</span>
          </p>
        </div>
      </section>

      {/* Section 7: CTA Band */}
      <CtaBand
        headline="See ZPS in a Live Demo"
        subtext="We'll walk you through how your team would run schemes, eligibility, benefits, preauthorisation and claims on ZPS — in 30 minutes."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact-us/' }}
        variant="navy"
      />
    </main>
  )
}
