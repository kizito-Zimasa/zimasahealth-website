import type { Metadata } from 'next'
import Image from 'next/image'
import { Route, BellRing, CalendarCheck, Users, BarChart2, Stethoscope, Building2, Layers, Lock, Unlink } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const DESCRIPTION =
  'ZCare is care continuity on ZHEP: it operationalises agreed care pathways and makes follow-through measurable — between visits, after screening, across the care team. It supports clinical judgement; it does not replace it.'

export const metadata: Metadata = {
  title: { absolute: 'ZCare — Care Continuity on ZHEP | Zimasa' },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/solutions/zhep/zcare/',
    title: 'ZCare — Care Continuity on ZHEP | Zimasa',
    description: DESCRIPTION,
  },
}

const capabilities = [
  { icon: Route, title: 'Agreed care pathways', desc: 'ZCare lets your team turn the care pathway agreed with the member into clear, scheduled next steps.' },
  { icon: BellRing, title: 'Reminders and bookings', desc: 'Members get reminders for the next step and book it with a vetted provider through the platform.' },
  { icon: CalendarCheck, title: 'Follow-through sessions', desc: 'Follow-through sessions keep the pathway moving between visits and after screening.' },
  { icon: Users, title: 'Care-team visibility', desc: 'With member consent, the care team sees programme progress — who is on track and who needs a nudge.' },
  { icon: BarChart2, title: 'Measurable follow-through', desc: 'Follow-through is verified and reported, so it can be seen, not assumed.' },
]

const continuityMoments = [
  { src: '/images/cards/zcare-screening.jpg', alt: 'A nurse fitting a blood-pressure cuff', caption: 'A screening identifies a need.' },
  { src: '/images/cards/zcare-care-plan.jpg', alt: 'A clinician writing up a care plan on a clipboard', caption: 'A plan is agreed in the clinic.' },
  { src: '/images/cards/zcare-care-team.jpg', alt: 'Two clinicians reviewing information together at a laptop', caption: 'The care team needs to see what happens next.' },
]

export default function ZCarePage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions/' },
            { label: 'ZHEP', href: '/solutions/zhep/' },
            { label: 'ZCare', href: '/solutions/zhep/zcare/', current: true },
          ]}
          className="mb-0"
        />
      </div>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 1: Hero */}
      <Hero
        eyebrow="ZCare — care continuity on ZHEP"
        headline="Follow-through, between every visit."
        subheadline="ZCare operationalises agreed care pathways and makes follow-through measurable — between visits, after screening, across the care team. It supports the clinical judgement of the member's provider and the payer's medical team; it does not replace them."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Explore ZHEP', href: '/solutions/zhep/' }}
        backgroundVariant="green"
        image={{ src: '/images/hero/zcare-hero.jpg', alt: 'A clinician talking a patient through next steps after a blood-pressure check in a clinic', position: '15% 50%', priority: true }}
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 2: The continuity gap */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="The Continuity Gap"
            headline="Care Plans Are Agreed in the Clinic. Then They Get Lost."
            align="center"
          />
          <div className="flex justify-center mb-6">
            <Unlink size={40} className="text-orange" />
          </div>
          <p className="text-body-lg text-body">
            A consultation ends with a plan: a follow-up test, a review in six weeks, a change in routine. Between visits, that plan depends on the member remembering, booking and showing up — and the care team rarely sees whether it happened. After a screening, the same gap opens: the need is identified, but the next step is left to chance.
          </p>
        </div>
        {/* DRAFT-COPY 2026-11: captions for founder review */}
        <div className="section-container mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {continuityMoments.map((m) => (
            <figure key={m.src} className="m-0">
              <Image
                src={m.src}
                alt={m.alt}
                width={800}
                height={800}
                sizes="(min-width: 640px) 33vw, 100vw"
                className="block w-full h-auto rounded-[var(--radius-card)]"
              />
              <figcaption className="mt-3 text-center text-sm text-body">{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 3: What ZCare does */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="What ZCare Does"
            headline="Keeps Members on the Agreed Pathway"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="card">
                  <Icon size={40} className="text-green mb-4" />
                  <h4 className="font-heading text-h4 text-dark mb-3">{cap.title}</h4>
                  <p className="text-body text-body">{cap.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 4: Built around clinical judgement */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="Clinical Judgement First"
            headline="Built Around Clinical Judgement"
            align="center"
          />
          <p className="text-body-lg text-body">
            ZCare does not diagnose, treat or prescribe. Care pathways are agreed by the member&apos;s provider and, where relevant, the payer&apos;s medical team. ZCare supports their judgement by making the agreed steps easier to follow and easier to see.
          </p>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 5: For insurers / For providers */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Who It Serves"
            headline="For Insurers and For Providers"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <Building2 size={40} className="text-navy mb-4" />
              <Badge variant="navy" className="mb-4">For Insurers & TPAs</Badge>
              <h4 className="font-heading text-h4 text-dark mb-3">Continue care for selected cohorts</h4>
              <p className="text-body text-body mb-6">Extend selected cohorts from screening into care-continuity pathways, where scoped and governed — with aggregate follow-through reporting alongside your ZHEP for Payers programme.</p>
              <a href="/insurers-tpas/" className="font-ui text-label text-navy uppercase tracking-wider hover:text-blue">ZHEP for Payers →</a>
            </div>
            <div className="card">
              <Stethoscope size={40} className="text-green mb-4" />
              <Badge variant="green" className="mb-4">For Healthcare Providers</Badge>
              <h4 className="font-heading text-h4 text-dark mb-3">Keep members on agreed pathways</h4>
              <p className="text-body text-body mb-6">ZCare lets your team keep members on the care pathway you agreed with them between visits — with follow-through you can see.</p>
              <a href="/healthcare-providers/" className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">For Providers →</a>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 6: Part of ZHEP */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="Part of ZHEP"
            headline="Delivered With ZHEP"
            align="center"
          />
          <div className="flex justify-center mb-6">
            <Layers size={40} className="text-green" />
          </div>
          <p className="text-body-lg text-body mb-8">
            ZCare is part of ZHEP, the Zimasa Health Engagement Platform, and is sold with it. Members use the same Tracks, bookings and verified Active Days — and ZHEP integrates with your existing systems.
          </p>
          <Button href="/solutions/zhep/" variant="primary">Explore ZHEP</Button>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 7: Governance */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Governance"
            headline="Consent-Gated and Governed"
            align="center"
          />
          {/* FOUNDER-REVIEW: confirm the consent model and the governance conditions for provider-context health data (Health Data Doctrine gates) before naming any specific controls here. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <Badge variant="green" className="mb-4">Consent</Badge>
              <p className="text-body text-body">Care-team visibility of programme progress is consent-gated: it requires the member&apos;s consent.</p>
            </div>
            <div className="card">
              <Badge variant="orange" className="mb-4">Provider Contexts</Badge>
              <p className="text-body text-body">Provider contexts may handle regulated health data only under governance conditions.</p>
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

      {/* Section 8: CTA Band */}
      <CtaBand
        headline="See ZCare in a Live Demo"
        subtext="We'll show you how agreed care pathways, reminders, bookings and follow-through work on ZHEP — in 30 minutes."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Explore ZHEP', href: '/solutions/zhep/' }}
      />
    </main>
  )
}
