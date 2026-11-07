import type { Metadata } from 'next'
import { TrendingDown, AlertTriangle, FileX, Zap, Target, ShieldCheck, Layers, BarChart2, Lock } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const DESCRIPTION =
  'Zimasa helps insurers and TPAs activate members year-round, lift screening completion, support appropriate follow-through, and extend selected cohorts into care continuity — with ZHEP for Payers.'

export const metadata: Metadata = {
  title: { absolute: 'Insurers & TPAs — Wellness That Continues After Screening | Zimasa' },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/insurers-tpas/',
    title: 'Insurers & TPAs — Wellness That Continues After Screening | Zimasa',
    description: DESCRIPTION,
  },
}

const steps = [
  {
    num: '1',
    title: 'Activate',
    desc: 'Members join and build Active Days before a crisis — through the four Tracks and the Community and Rewards Engines.',
  },
  {
    num: '2',
    title: 'Screen',
    desc: 'Members complete wellness checks through the vetted provider network. Completion is verified.',
  },
  {
    num: '3',
    title: 'Follow through',
    desc: 'Members take the appropriate next step — reminders, bookings, follow-through sessions and CARE Track pathways.',
  },
  {
    num: '4',
    title: 'Continue care',
    desc: 'Selected cohorts move into ZCare care-continuity pathways, where scoped and governed.',
    link: { label: 'About ZCare', href: '/solutions/zhep/zcare/' },
  },
  {
    num: '5',
    title: 'Prove',
    desc: 'Aggregate activation, screening completion, follow-through and Active Days, reported at 30, 60 and 90 days.',
  },
]

export default function InsurersTPAsPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insurers & TPAs', href: '/insurers-tpas/', current: true }]} className="mb-0" />
      </div>
      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 1: Hero */}
      <Hero
        eyebrow="For Insurers & TPAs"
        headline="Wellness that continues after screening."
        subheadline="Zimasa helps insurers and TPAs activate members year-round, lift screening completion, support appropriate follow-through, and extend selected cohorts into care continuity — with ZHEP for Payers."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Discuss a Controlled Go-to-Market', href: '/contact-us/' }}
        backgroundVariant="navy"
        image={{ src: '/images/hero/payers-hero.jpg', alt: 'A hand pointing to the next step on a printed nutrition plan during a follow-up conversation', position: '40% 50%', priority: true }}
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 2: The Gap */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Gap"
            headline="Most Wellness Programmes Stop at Awareness"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Most wellness programmes stop at awareness, events or an annual screening. Screening identifies the need — but members often don&apos;t take the next step. And renewal conversations happen without engagement evidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <TrendingDown size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Engagement Stops at Events</h4>
              <p className="text-body text-body">Health days and awareness campaigns come and go. Between them, there is little to keep members active — and little visibility into which cohorts are.</p>
            </div>

            <div className="card">
              <AlertTriangle size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Screening Without a Next Step</h4>
              <p className="text-body text-body">A screening identifies the need. Without reminders, bookings and follow-through, the next step is left to chance.</p>
            </div>

            <div className="card">
              <FileX size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No Engagement Evidence</h4>
              <p className="text-body text-body">Self-reported activity can&apos;t be verified. When renewal conversations begin, there is no engagement evidence to put on the table.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 3: How it works — five steps */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="How It Works"
            headline="Activate. Screen. Follow Through. Continue Care. Prove."
            subheadline="ZHEP for Payers takes members from first activity to verified follow-through — and shows you the evidence."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="card">
                <p className="font-display text-h2 text-green mb-2">{step.num}</p>
                <h4 className="font-heading text-h4 text-dark mb-2">{step.title}</h4>
                <p className="text-body text-body text-sm mb-4">{step.desc}</p>
                {step.link && (
                  <a href={step.link.href} className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">
                    {step.link.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 4: Packages */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="ZHEP for Payers"
            headline="Three Packages. One Platform."
            subheadline="Choose the depth that fits each cohort."
            align="center"
          />
          {/* FOUNDER-REVIEW: package pricing intentionally not shown; confirm whether any commercial framing (e.g. PEPM) should appear publicly. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <Zap size={40} className="text-green mb-4" />
              <Badge variant="green" className="mb-4">Engage</Badge>
              <h4 className="font-heading text-h4 text-dark mb-3">Broad engagement and member value</h4>
              <p className="text-body text-body">Tracks, Community and Rewards Engines, nudges, and scheme/cohort reporting.</p>
            </div>
            <div className="card">
              <Target size={40} className="text-blue mb-4" />
              <Badge variant="blue" className="mb-4">Activate</Badge>
              <h4 className="font-heading text-h4 text-dark mb-3">Rising-risk cohorts and screening-completion campaigns</h4>
              <p className="text-body text-body">Engage plus cohort programmes, a governance cadence and optional cohort rewards.</p>
            </div>
            <div className="card">
              <ShieldCheck size={40} className="text-navy mb-4" />
              <Badge variant="navy" className="mb-4">Manage</Badge>
              <h4 className="font-heading text-h4 text-dark mb-3">Chronic and high-cost cohorts</h4>
              <p className="text-body text-body">Activate plus stricter eligibility, caps and higher-touch governance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 5: Fits your existing systems */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="Integration"
            headline="Fits Your Existing Systems"
            align="center"
          />
          <div className="flex justify-center mb-6">
            <Layers size={40} className="text-navy" />
          </div>
          <p className="text-body-lg text-body mb-8">
            ZHEP integrates with your existing core administration system — no replacement needed. Need to modernise administration too? ZPS, the Zimasa Payer Solution, is payer administration software your team can run on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/solutions/zhep/" variant="primary">Explore ZHEP</Button>
            <Button href="/solutions/zps/" variant="outline">Explore ZPS</Button>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 6: Prove — what you see */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Prove"
            headline="What You See at 30, 60 and 90 Days"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12 max-w-narrow mx-auto">
            Reporting follows the programme: an activation ladder at 30 days, Active Days and screening completion as the programme deepens, and follow-through by 90 days — leading-indicator movement by cohort, reported at 30/60/90 days.
          </p>

          <div className="max-w-md mx-auto card text-center">
            <BarChart2 size={40} className="text-green mx-auto mb-4" />
            <p className="font-display text-h2 text-green mb-2">30 · 60 · 90</p>
            <p className="text-body-lg text-dark mb-2">Activation ladder. Active Days. Screening completion. Follow-through.</p>
            <p className="text-body text-body">Aggregate reporting only, with a minimum cohort of 25. Individual results never go to employers.</p>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 7: Data governance */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Data Governance"
            headline="Privacy-Governed by Design"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            In employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Provider contexts may handle regulated health data only under governance conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Badge variant="green" className="mb-4">What Zimasa Records</Badge>
              <p className="text-body text-dark">Verification of engagement events and Active Days</p>
            </div>
            <div>
              <Badge variant="orange" className="mb-4">Reporting</Badge>
              <p className="text-body text-dark">Aggregate only, minimum cohort of 25</p>
            </div>
            <div>
              <Badge variant="blue" className="mb-4">Applicable Regulation</Badge>
              <p className="text-body text-dark">Aligned with the Kenya Data Protection Act, 2019. Registered with the ODPC as a Data Controller and Data Processor.</p>
            </div>
          </div>

          <p className="text-center text-body text-sm mt-8 flex items-center justify-center gap-2">
            <Lock size={16} className="text-navy" />
            <span>Read more in our <a href="/privacy-centre/" className="text-green hover:underline">Privacy Centre</a>.</span>
          </p>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 8: First Customer Cohort */}
      <section className="section-padding bg-light-green">
        <div className="section-container max-w-narrow mx-auto text-center">
          <p className="eyebrow mb-2">First Customer Cohort — 2026</p>
          <h2 className="font-display text-h2 text-dark mb-6">Start With a Controlled Go-to-Market</h2>
          <p className="text-body-lg text-dark mb-12">
            A defined cohort, an agreed programme, and a 90-Day Growth Review.
          </p>

          <ul className="text-left max-w-md mx-auto space-y-3 mb-12">
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">A defined cohort, chosen with your team</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">An agreed programme and governance cadence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">Aggregate reporting at 30, 60 and 90 days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">A 90-Day Growth Review</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green font-bold mt-1">✓</span>
              <span className="text-body">Input on the platform roadmap</span>
            </li>
          </ul>

          <Button href="/book-demo/" variant="primary">Discuss a Controlled Go-to-Market</Button>
        </div>
      </section>

      {/* Section 9: CTA Band */}
      <CtaBand
        headline="See ZHEP for Payers in a Live Demo"
        subtext="We'll show you a sample 90-day programme design and 30/60/90 reporting — in 30 minutes."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Discuss a Controlled Go-to-Market', href: '/contact-us/' }}
        variant="navy"
      />
    </main>
  )
}
