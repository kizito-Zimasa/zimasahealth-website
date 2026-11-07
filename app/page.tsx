import type { Metadata } from 'next'
import Image from 'next/image'
import { Activity, ShieldCheck, Users, Building2, Stethoscope, Briefcase, Lock, BadgeCheck, MapPin, CheckCircle, Zap, HeartPulse } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureCard from '@/components/sections/FeatureCard'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const SITE_DESCRIPTION =
  'Zimasa is the Health Engagement OS for insurers, TPAs and providers in East Africa — activating members, making follow-through measurable, and proving engagement with verified Active Days.'

export const metadata: Metadata = {
  title: { absolute: 'Zimasa | Health Engagement OS for insurers, TPAs and providers' },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com',
    title: 'Zimasa | Health Engagement OS for insurers, TPAs and providers',
    description: SITE_DESCRIPTION,
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="The Health Engagement OS"
        headline="Health that shows up."
        subheadline={SITE_DESCRIPTION}
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
        backgroundVariant="green"
        image={{ src: '/images/hero/home-hero.jpg', alt: 'Three friends walking together along a tree-lined path in Homa Bay, Kenya', position: '45% 50%', priority: true }}
      />

      {/* Section 2A: Active Days Definition */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader headline="What Is an Active Day?" align="center" />
          <p className="text-body-lg text-body text-center mb-8">
            An Active Day is a calendar day on which a member completes at least one health action. Several actions on the same day still count as one Active Day. Every Active Day is verified — logged steps, an attended class, a completed screening — not self-reported.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <Image src="/images/cards/track-move.jpg" alt="A man cycling along a rural road" width={800} height={800} sizes="(min-width: 768px) 180px, 45vw" className="block w-full h-auto rounded-[var(--radius-card)] mb-4" />
              <p className="font-display text-h3 text-green mb-2">MOVE</p>
              <p className="text-body text-body text-sm">Gyms, classes, run clubs, steps</p>
            </div>
            <div>
              <Image src="/images/cards/track-nourish.jpg" alt="Two women exchanging fresh greens at a market stall" width={800} height={800} sizes="(min-width: 768px) 180px, 45vw" className="block w-full h-auto rounded-[var(--radius-card)] mb-4" />
              <p className="font-display text-h3 text-orange mb-2">NOURISH</p>
              <p className="text-body text-body text-sm">Nutrition habits, meal plans</p>
            </div>
            <div>
              <Image src="/images/cards/track-care.jpg" alt="A woman writing in a journal on her sofa at home" width={800} height={800} sizes="(min-width: 768px) 180px, 45vw" className="block w-full h-auto rounded-[var(--radius-card)] mb-4" />
              <p className="font-display text-h3 text-blue mb-2">CARE</p>
              <p className="text-body text-body text-sm">Expert sessions, screenings and follow-through</p>
            </div>
            <div>
              <Image src="/images/cards/track-learn.jpg" alt="A facilitator writing on a flipchart during a session" width={800} height={800} sizes="(min-width: 768px) 180px, 45vw" className="block w-full h-auto rounded-[var(--radius-card)] mb-4" />
              <p className="font-display text-h3 text-navy mb-2">LEARN</p>
              <p className="text-body text-body text-sm">Education & habit pathways</p>
            </div>
          </div>
          <p className="text-center text-body">
            <strong>Community Engine</strong> brings members together via challenges, teams, and leaderboards.
            <br />
            <strong>Rewards Engine</strong> sustains engagement with streaks, levels, recognition and partner perks.
          </p>
        </div>
      </section>

      {/* Section 2: Method Strip (no figures — approved proof language only) */}
      <StatsStrip
        stats={[
          { value: 'Verified', label: 'Active Days' },
          { value: '30 · 60 · 90', label: 'Day activation reporting' },
          { value: '4', label: 'Health tracks' },
          { value: 'n ≥ 25', label: 'Minimum reporting cohort' },
        ]}
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 3: Audience Self-Identification — order: Insurers & TPAs → Providers → Employers → Members */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Who Are You Here For?"
            headline="Zimasa Is Built for Four Audiences"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <FeatureCard
              icon={Building2}
              eyebrow="Insurers & TPAs"
              headline="Wellness that continues after screening."
              body="Activate members year-round, lift screening completion, support appropriate follow-through, and extend selected cohorts into care continuity — with ZHEP for Payers. Aggregate 30/60/90 reporting on verified Active Days."
              cta={{ label: 'See ZHEP for Payers', href: '/insurers-tpas/' }}
            />
            <FeatureCard
              icon={Stethoscope}
              eyebrow="Clinics, Diagnostics, Dietitians, Gyms & More"
              headline="Be the provider members keep coming back to."
              body="Join Zimasa's curated provider network and use ZCare to keep members on agreed care pathways between visits — with follow-through you can see."
              cta={{ label: 'Join the Network', href: '/healthcare-providers/' }}
            />
            <FeatureCard
              icon={Briefcase}
              eyebrow="Employers & HR Teams"
              headline="Give your team a wellness habit they'll actually use."
              body="Share Zimasa GO with your team free via an invite link — no procurement, no IT, no contract. Full programmes are available through your insurer, broker or scheme."
              cta={{ label: 'See the Employer Path', href: '/employers/' }}
            />
            <FeatureCard
              icon={Users}
              eyebrow="Individual Members"
              headline="Start tracking Active Days — free, today."
              body="Steps, squads of up to five, public challenges and share cards. No employer needed. Free to start."
              cta={{ label: 'Get Started Free', href: '/zimasa-go/' }}
            />
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 4: Solutions Overview — two products: ZHEP (incl. ZCare) and ZPS */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Build"
            headline="Two Solutions. One Engagement Model."
            subheadline="ZHEP activates members and makes follow-through measurable. ZPS runs payer administration. Use either — or both."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <Badge variant="green" className="mb-4">Health Engagement</Badge>
              <Activity size={40} className="text-green mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">ZHEP — Zimasa Health Engagement Platform</h3>
              <p className="text-body text-body mb-4">Four Tracks — MOVE, NOURISH, CARE and LEARN — with the Community and Rewards Engines, provider bookings, verified Active Days and 30/60/90 reporting. Integrates with a payer&apos;s existing core administration system — no replacement needed.</p>
              <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-surface">
                <HeartPulse size={24} className="text-blue flex-shrink-0 mt-1" />
                <p className="text-body text-body text-sm">
                  <strong>Includes ZCare — care continuity on ZHEP.</strong> ZCare operationalises agreed care pathways and makes follow-through measurable between visits and after screening.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <a href="/solutions/zhep/" className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">Explore ZHEP →</a>
                <a href="/solutions/zhep/zcare/" className="font-ui text-label text-blue uppercase tracking-wider hover:text-green">About ZCare →</a>
              </div>
            </div>

            <div className="card">
              <Badge variant="navy" className="mb-4">Payer Administration</Badge>
              <ShieldCheck size={40} className="text-navy mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">ZPS — Zimasa Payer Solution</h3>
              <p className="text-body text-body mb-6">Payer administration software for insurers, schemes and TPAs: schemes and products, member enrolment and eligibility, benefits and limits, provider networks, preauthorisation, claims processing and adjudication, provider payments, reporting and compliance. Your team runs its administration on ZPS; you remain the insurer and the decision-maker.</p>
              <a href="/solutions/zps/" className="font-ui text-label text-navy uppercase tracking-wider hover:text-blue">Explore ZPS →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Engagement Model"
            headline="Verified Active Days. 30/60/90 Reporting."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-[80px] h-[80px] rounded-icon bg-green/10 flex items-center justify-center">
                  <Users size={40} className="text-green" />
                </div>
              </div>
              <h4 className="font-heading text-h4 text-dark mb-3">Step 1 — Enrol</h4>
              <p className="text-body text-body">Members join through their insurer, scheme or programme. They choose their health tracks and set their baseline.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-[80px] h-[80px] rounded-icon bg-orange/10 flex items-center justify-center">
                  <Zap size={40} className="text-orange" />
                </div>
              </div>
              <h4 className="font-heading text-h4 text-dark mb-3">Step 2 — Engage</h4>
              <p className="text-body text-body">The Community Engine runs challenges, squads and leaderboards. The Rewards Engine recognises progress with streaks, levels, recognition and partner perks.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-[80px] h-[80px] rounded-icon bg-blue/10 flex items-center justify-center">
                  <CheckCircle size={40} className="text-blue" />
                </div>
              </div>
              <h4 className="font-heading text-h4 text-dark mb-3">Step 3 — Verify</h4>
              <p className="text-body text-body">Every activity is verified — gym check-ins, screenings, expert sessions. We report Active Days, not self-reported data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Buyer Personas */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Buyer Personas"
            headline="Built for the People Making Population Health Decisions"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <Building2 size={40} className="text-green mb-4" />
              <p className="eyebrow mb-2">CMO / Head of Wellness / Medical Team</p>
              <h4 className="font-heading text-h4 text-dark mb-3">Engagement evidence before renewal</h4>
              <p className="text-body text-body mb-6">See which cohorts are engaging, which tracks drive activation, and leading-indicator movement by cohort, reported at 30/60/90 days.</p>
              <a href="/insurers-tpas/" className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">ZHEP for Payers →</a>
            </div>

            {/* DRAFT-COPY 2026-10: Founder review */}
            <div className="card">
              <Stethoscope size={40} className="text-orange mb-4" />
              <p className="eyebrow mb-2">Practice owners, clinic leads</p>
              <h4 className="font-heading text-h4 text-dark mb-3">Follow-through between visits</h4>
              <p className="text-body text-body mb-6">Join the Zimasa provider network and use ZCare to keep members on agreed care pathways — reminders, bookings and follow-through sessions — with follow-through you can see.</p>
              <a href="/healthcare-providers/" className="font-ui text-label text-orange uppercase tracking-wider hover:text-blue">Join the Network →</a>
            </div>

            {/* DRAFT-COPY 2026-10: Founder review */}
            <div className="card">
              <Briefcase size={40} className="text-blue mb-4" />
              <p className="eyebrow mb-2">HR Director / CFO</p>
              <h4 className="font-heading text-h4 text-dark mb-3">A wellness benefit people use</h4>
              <p className="text-body text-body mb-6">Start free with Zimasa GO. Full programmes, with aggregate Active Days reporting, are available through your insurer, broker or scheme. Aggregate reporting only (n ≥ 25); individual results never go to employers.</p>
              <a href="/employers/" className="font-ui text-label text-blue uppercase tracking-wider hover:text-green">For Employers →</a>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 7: Zimasa GO Freemium CTA */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Start Free"
            headline="Zimasa GO — Free to Start"
            subheadline="No contract. No credit card. Steps, squads, public challenges and share cards — free for members. Employers can share Zimasa GO with their team via an invite link; reporting comes through the full programme, available through your insurer, broker or scheme."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4">
              <Activity size={24} className="text-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-h4 text-dark">Steps & activity tracking</h4>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users size={24} className="text-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-h4 text-dark">Squads of up to five</h4>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Activity size={24} className="text-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-h4 text-dark">Public challenges & leaderboards</h4>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Activity size={24} className="text-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-h4 text-dark">Share cards</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="text-center">
              <p className="font-heading text-h4 text-dark mb-4">I&apos;m a Member</p>
              <Button href="/get-started/" variant="primary" className="w-full justify-center">
                Get Started Free
              </Button>
            </div>
            <div className="text-center">
              <p className="font-heading text-h4 text-dark mb-4">I&apos;m an Employer</p>
              <Button href="/employers/" variant="secondary" className="w-full justify-center">
                Share With My Team
              </Button>
            </div>
          </div>
          <p className="text-center text-body text-sm">Already in a company programme? <a href="https://app.zimasahealth.com" className="text-green hover:underline">Sign in at app.zimasahealth.com</a></p>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 8: First Customer Cohort */}
      <section className="section-padding bg-light-green">
        <div className="section-container max-w-narrow mx-auto text-center">
          <p className="eyebrow mb-2">First Customer Cohort — 2026</p>
          <h2 className="font-display text-h2 text-dark mb-6">Start With a Controlled Go-to-Market</h2>
          <p className="text-body-lg text-dark mb-8">A defined cohort, an agreed programme, and a 90-Day Growth Review. Built for insurers, TPAs and providers ready to put engagement evidence on the table.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-left md:text-center">
            <div>
              <h4 className="font-heading text-dark mb-2">A defined cohort</h4>
            </div>
            <div>
              <h4 className="font-heading text-dark mb-2">An agreed programme</h4>
            </div>
            <div>
              <h4 className="font-heading text-dark mb-2">30/60/90 Active Days reporting</h4>
            </div>
            <div>
              <h4 className="font-heading text-dark mb-2">Input on the platform roadmap</h4>
            </div>
          </div>

          <Button href="/book-demo/" variant="primary">Discuss a Controlled Go-to-Market</Button>
        </div>
      </section>

      {/* Section 9: Trust & Credentials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why Zimasa"
            headline="Built on Verified Engagement, Not Vanity Metrics"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Lock size={48} className="text-green mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Privacy-Governed by Design</h4>
              <p className="text-body text-body">In employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Provider contexts may handle regulated health data only under governance conditions. Aligned with the Kenya Data Protection Act, 2019. Zimasa is registered with the Office of the Data Protection Commissioner (ODPC) as a Data Controller and Data Processor.</p>
            </div>

            <div className="text-center">
              <BadgeCheck size={48} className="text-orange mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Vetted Provider Network</h4>
              <p className="text-body text-body">Providers are vetted before they join the Zimasa network. Members book with credentialed clinics, diagnostics, gyms, dietitians, therapists and labs.</p>
            </div>

            <div className="text-center">
              <MapPin size={48} className="text-blue mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Kenya-First</h4>
              <p className="text-body text-body">Kenya-first, built for East Africa. Programmes are designed around the Kenyan health market and the insurers, TPAs and providers who serve it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: CTA Band */}
      <CtaBand
        headline="Health That Shows Up — See It in 30 Minutes"
        subtext="Book a 30-minute demo. We'll show you the platform, a sample 90-day programme design and 30/60/90 reporting."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
      />
    </main>
  )
}
