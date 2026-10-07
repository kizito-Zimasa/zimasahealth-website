import type { Metadata } from 'next'
import { Activity, ShieldCheck, Users, Building2, Stethoscope, Briefcase, Lock, BadgeCheck, MapPin, CheckCircle, Zap } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureCard from '@/components/sections/FeatureCard'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Zimasa | Health Engagement OS for Payers & Employers',
  description: 'Built for Africa. White-label ready. Measurable results. The Health Engagement OS connecting payers and employers to a vetted healthcare provider network.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com',
    title: 'Zimasa | Health Engagement OS for Payers & Employers',
    description: 'Built for Africa. White-label ready. Measurable results. The Health Engagement OS connecting payers and employers to a vetted healthcare provider network.',
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Health Engagement OS"
        headline="Turn Wellness Spending Into Verified Active Days"
        subheadline="Built for Africa. White-label ready. Measurable results. Zimasa connects payers and employers to a vetted healthcare provider network — and drives verified member engagement through behaviour design, incentives, and four health tracks."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
        backgroundVariant="green"
      />

      {/* Section 2A: Active Days Definition */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader headline="What Is Active Days?" align="center" />
          <p className="text-body-lg text-body text-center mb-8">
            Active Days measures verified health engagement — one day per member where they completed at least one action (logged steps, attended a class, completed a screening). This metric matters because it predicts programme ROI and member retention.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <p className="font-display text-h3 text-green mb-2">MOVE</p>
              <p className="text-body text-body text-sm">Gyms, classes, run clubs, steps</p>
            </div>
            <div>
              <p className="font-display text-h3 text-orange mb-2">NOURISH</p>
              <p className="text-body text-body text-sm">Nutrition habits, meal plans</p>
            </div>
            <div>
              <p className="font-display text-h3 text-blue mb-2">CARE</p>
              <p className="text-body text-body text-sm">Expert interventions & screenings</p>
            </div>
            <div>
              <p className="font-display text-h3 text-navy mb-2">LEARN</p>
              <p className="text-body text-body text-sm">Education & habit pathways</p>
            </div>
          </div>
          <p className="text-center text-body">
            <strong>Community Engine</strong> brings members together via challenges, teams, and leaderboards.
            <br />
            <strong>Rewards Engine</strong> incentivizes sustained engagement.
          </p>
        </div>
      </section>

      {/* Section 2: Stats Strip */}
      <StatsStrip
        stats={[
          { value: '50–70%', label: '90-day activation rate' },
          { value: '8–12', label: 'Active Days per member/month' },
          { value: '90 days', label: 'Time to measurable results' },
          { value: '4', label: 'Health tracks' },
        ]}
      />

      {/* Section 3: Audience Self-Identification */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Who Are You Here For?"
            headline="Zimasa Is Built for Four Buyers"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <FeatureCard
              icon={Building2}
              eyebrow="Health Schemes, TPAs & Insurers"
              headline="Measure member activation before renewal."
              body="30/60/90-day cohort dashboards, white-label member programmes, and renewal-ready engagement data — without touching PHI."
              cta={{ label: 'See Our Payer Solution', href: '/insurers-tpas/' }}
            />
            <FeatureCard
              icon={Briefcase}
              eyebrow="HR Directors & CFOs"
              headline="Give your workforce a wellness benefit they'll actually use."
              body="Start free with Zimasa Go — no procurement, no IT, no contract. Upgrade to the full programme when you're ready."
              cta={{ label: 'See Our Employer Solution', href: '/employers/' }}
            />
            <FeatureCard
              icon={Users}
              eyebrow="Individual Members & Employees"
              headline="Start tracking Active Days — free, today."
              body="Steps, challenges, squads, and share cards. No employer needed. No subscription. Under five minutes to your first Active Day."
              cta={{ label: 'Get Started Free', href: '/zimasa-go/' }}
            />
            <FeatureCard
              icon={Stethoscope}
              eyebrow="Gyms, Clinics, Dietitians & Labs"
              headline="Join the network. Receive engaged members."
              body="Become a vetted Zimasa provider and receive verified referrals from employer and payer programmes across Kenya."
              cta={{ label: 'Join the Network', href: '/healthcare-providers/' }}
            />
          </div>
        </div>
      </section>

      {/* Section 4: Solutions Overview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Build"
            headline="One Platform. Three Buyer Paths."
            subheadline="Whether you're a payer managing a member population, an employer investing in workforce health, or an individual looking to start — Zimasa has a path built for you."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <Badge variant="green" className="mb-4">For Payers & Employers</Badge>
              <Activity size={40} className="text-green mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">The Health Engagement OS</h3>
              <p className="text-body text-body mb-6">ZHEP connects your members to four health tracks — MOVE, NOURISH, CARE, and LEARN — using behaviour design, incentives, and a verified provider network. White-label ready. Reporting-first.</p>
              <a href="/solutions/zhep/" className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">Explore ZHEP →</a>
            </div>

            <div className="card">
              <Badge variant="navy" className="mb-4">For Insurers & TPAs</Badge>
              <ShieldCheck size={40} className="text-navy mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">Engagement That Reduces Risk</h3>
              <p className="text-body text-body mb-6">Built for CMOs and CROs at health schemes and TPAs. Zimasa delivers cohort-level health programmes, 30/60/90-day activation dashboards, and white-label renewal tools — all without touching PHI.</p>
              <a href="/insurers-tpas/" className="font-ui text-label text-navy uppercase tracking-wider hover:text-blue">See Payers Solution →</a>
            </div>

            <div className="card">
              <Badge variant="blue" className="mb-4">For Employers & Members</Badge>
              <Users size={40} className="text-blue mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">Free to Start. Built to Scale.</h3>
              <p className="text-body text-body mb-6">Zimasa Go is free for your workforce — steps tracking, challenges, leaderboards, and share cards. HR teams get an employer-lite dashboard. No procurement required.</p>
              <a href="/get-started/" className="font-ui text-label text-blue uppercase tracking-wider hover:text-green">Get Started Free →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Engagement Model"
            headline="Behaviour Design. Verified Activation. Measurable Outcomes."
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
              <p className="text-body text-body">Members join via employer or payer portal. They choose their health tracks and set their baseline.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-[80px] h-[80px] rounded-icon bg-orange/10 flex items-center justify-center">
                  <Zap size={40} className="text-orange" />
                </div>
              </div>
              <h4 className="font-heading text-h4 text-dark mb-3">Step 2 — Engage</h4>
              <p className="text-body text-body">The Community Engine runs challenges, streaks, and leaderboards. The Rewards Engine converts engagement into partner perks and wallet credits.</p>
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

      {/* Section 6: Who We Help */}
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
              <p className="eyebrow mb-2">CMO / CRO / Risk Manager</p>
              <h4 className="font-heading text-h4 text-dark mb-3">Risk visibility before renewal</h4>
              <p className="text-body text-body mb-6">See which cohorts are engaging, which tracks drive the best activation, and how your risk profile is shifting — 90 days into any programme.</p>
              <a href="/insurers-tpas/" className="font-ui text-label text-green uppercase tracking-wider hover:text-blue">Payers Solution →</a>
            </div>

            <div className="card">
              <Stethoscope size={40} className="text-orange mb-4" />
              <p className="eyebrow mb-2">Practice owners, clinic leads</p>
              <h4 className="font-heading text-h4 text-dark mb-3">Patients who come prepared</h4>
              <p className="text-body text-body mb-6">Join the Zimasa verified provider network and receive members who have been pre-engaged through CARE track activities — screenings, nutrition counselling, physio.</p>
              <a href="/healthcare-providers/" className="font-ui text-label text-orange uppercase tracking-wider hover:text-blue">Join the Network →</a>
            </div>

            <div className="card">
              <Briefcase size={40} className="text-blue mb-4" />
              <p className="eyebrow mb-2">HR Director / CFO</p>
              <h4 className="font-heading text-h4 text-dark mb-3">Utilisation you can show the board</h4>
              <p className="text-body text-body mb-6">Replace the wellness benefit nobody uses with a programme that generates Active Days, track-mix reports, and a verifiable ROI for each KES spent.</p>
              <a href="/employers/" className="font-ui text-label text-blue uppercase tracking-wider hover:text-green">Employers Solution →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Zimasa Go Freemium CTA */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Start Free"
            headline="Zimasa Go — Free for Members and Employers"
            subheadline="No contract. No credit card. Steps tracking, challenges, leaderboards, and share cards — free. HR teams who sign up get a basic employer dashboard to see how their team is doing."
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
                <h4 className="font-heading text-h4 text-dark">Squads (3–5 people)</h4>
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
                <h4 className="font-heading text-h4 text-dark">Employer-lite dashboard (for HR sign-ups)</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="text-center">
              <p className="font-heading text-h4 text-dark mb-4">I'm a Member</p>
              <Button href="/get-started/?path=member" variant="primary" className="w-full justify-center">
                Get Started Free
              </Button>
            </div>
            <div className="text-center">
              <p className="font-heading text-h4 text-dark mb-4">I'm an Employer</p>
              <Button href="/get-started/?path=employer" variant="secondary" className="w-full justify-center">
                Sign Up My Team
              </Button>
            </div>
          </div>
          <p className="text-center text-body text-sm">Already in a company programme? <a href="https://app.zimasahealth.com" className="text-green hover:underline">Sign in at app.zimasahealth.com</a></p>
        </div>
      </section>

      {/* Section 8: Early Partner Programme */}
      <section className="section-padding bg-light-green">
        <div className="section-container max-w-narrow mx-auto text-center">
          <p className="eyebrow mb-2">Pilot Cohort — 2026</p>
          <h2 className="font-display text-h2 text-dark mb-6">Join Our Early Partner Programme</h2>
          <p className="text-body-lg text-dark mb-8">We are onboarding 3–5 pilot clients for structured 90-day engagement programmes. Early partners receive a dedicated programme manager, weekly engagement snapshots, and direct input on feature priorities.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-left md:text-center">
            <div>
              <h4 className="font-heading text-dark mb-2">90-day structured programme</h4>
            </div>
            <div>
              <h4 className="font-heading text-dark mb-2">Dedicated programme manager</h4>
            </div>
            <div>
              <h4 className="font-heading text-dark mb-2">Weekly Active Days reports</h4>
            </div>
            <div>
              <h4 className="font-heading text-dark mb-2">Co-development on features</h4>
            </div>
          </div>

          <Button href="/book-demo/" variant="primary">Apply for Early Access</Button>
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
              <h4 className="font-heading text-h4 text-dark mb-3">PHI-Avoidant by Design</h4>
              <p className="text-body text-body">We verify engagement events, not health records. No protected health information is stored or transmitted through the platform.</p>
            </div>

            <div className="text-center">
              <BadgeCheck size={48} className="text-orange mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Vetted Provider Network</h4>
              <p className="text-body text-body">Every provider in the Zimasa network is verified, rated, and monitored. Members access only credentialed gyms, dietitians, therapists, and labs.</p>
            </div>

            <div className="text-center">
              <MapPin size={48} className="text-blue mx-auto mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Africa-First Architecture</h4>
              <p className="text-body text-body">Built for Kenyan market conditions — MPESA-native rewards, NHIF-adjacent programme design, and connectivity-resilient delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: CTA Band */}
      <CtaBand
        headline="Ready to See Measurable Results in 90 Days?"
        subtext="Book a 30-minute demo. We'll show you the platform, the programme model, and your first 90-day activation forecast."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
      />
    </main>
  )
}
