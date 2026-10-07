import type { Metadata } from 'next'
import { UserPlus, Activity, Users, ArrowUpCircle, CheckCircle, Lock, Zap, Grid3x3, Trophy, Gift, BarChart2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Employers — Workforce Wellness with Zimasa GO',
  description: 'Zimasa GO is free for your team to download and use — steps, squads and challenges, shared through one invite link. Full programmes are available through your insurer, broker or scheme.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/employers/',
    title: 'Employers — Workforce Wellness with Zimasa GO | Zimasa',
    description: 'Zimasa GO is free for your team to download and use — steps, squads and challenges, shared through one invite link. Full programmes are available through your insurer, broker or scheme.',
  },
}

export default function EmployersPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Employers', href: '/employers/', current: true }]} className="mb-0" />
      </div>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="For Employers & HR Teams"
        headline="Workforce Wellness That Actually Gets Used"
        subheadline="Zimasa GO is free for your team to start — no procurement, no contract. Share one invite link and employees track steps, join squads and take on challenges. Full programmes are available through your insurer, broker or scheme."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
        secondaryCta={{ label: 'See the Full Programme', href: '#full-programme' }}
        backgroundVariant="green"
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 2: Two Paths */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Start Free, Then Go Further"
            headline="Two Paths to Workforce Health Engagement"
            align="center"
          />
          <p className="text-body-lg text-body text-center">
            <strong>Zimasa GO</strong> — Free to start. Steps, squads, public challenges and share cards. Self-serve: share one invite link with your team.
            <br /><br />
            <strong>The full programme</strong> — Health Tracks, vetted provider access, the Rewards Engine and aggregate reporting. Full programmes are available through your insurer, broker or scheme.
          </p>
        </div>
      </section>

      {/* Section 3: Zimasa GO (Free Tier) */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="Start Free. No Contract."
            headline="Zimasa GO — Free for Your Workforce"
            align="center"
          />
          <p className="text-body-lg text-body mb-8">
            Zimasa GO is free for your team to download and use — no procurement, no contract, no IT integration. Employees download the app and start building Active Days straight away. Employer reporting comes through the full programme.
          </p>
          <Button href="/zimasa-go/" variant="primary">See Everything Zimasa GO Includes</Button>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 4: The Full Programme */}
      <section id="full-programme" className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="For Employers Who Want More"
            headline="The Full Programme — Through Your Insurer, Broker or Scheme"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            When you are ready to move beyond Zimasa GO, the full Zimasa programme gives your workforce structured health engagement on the Zimasa platform. Full programmes are available through your insurer, broker or scheme — ask them about Zimasa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <Grid3x3 size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Four Health Tracks</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">MOVE, NOURISH, CARE, LEARN</h5>
              <p className="text-body text-body">Employees access fitness activities (MOVE), nutrition guidance (NOURISH), expert health sessions — dietitians, therapy, physio, labs (CARE), and prevention education (LEARN). Activities are verified and count towards Active Days.</p>
            </div>

            <div className="card">
              <Trophy size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Challenges and Leaderboards</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Peer Accountability</h5>
              <p className="text-body text-body">Private company leagues, team challenges and department leaderboards. Employees take part with colleagues in a structured, time-bound programme — not a passive app they forget about.</p>
            </div>

            <div className="card">
              <Gift size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Rewards Engine</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Recognition for Verified Engagement</h5>
              <p className="text-body text-body">Streaks, levels, recognition and partner perks. Rewards are tied to verified engagement, not self-reported claims.</p>
            </div>

            <div className="card">
              <BarChart2 size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Aggregate Reporting</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Activation at 30, 60 and 90 Days</h5>
              <p className="text-body text-body">Programme reporting covers activation at 30, 60 and 90 days and verified Active Days. Aggregate reporting only, with a minimum cohort of 25. Individual results never go to employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 5: How It Works */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Employer Journey"
            headline="From Sign-Up to Your Team's First Active Days"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <UserPlus size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 1: Sign Up (Free)</h4>
              <p className="text-body text-body text-sm">Sign up your organisation on Get Started in under five minutes. You receive an invite link to share with your team.</p>
            </div>

            <div className="card">
              <Activity size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 2: Employees Start Tracking</h4>
              <p className="text-body text-body text-sm">Employees create profiles, join squads and begin building Active Days. Steps are tracked automatically.</p>
            </div>

            <div className="card">
              <Users size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 3: Squads and Challenges</h4>
              <p className="text-body text-body text-sm">Employees form squads of up to five, join public challenges and share milestones — keeping each other on track.</p>
            </div>

            <div className="card">
              <ArrowUpCircle size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 4: Ask About the Full Programme</h4>
              <p className="text-body text-body text-sm">For Health Tracks, provider access and aggregate reporting, ask your insurer, broker or scheme about the full Zimasa programme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Employer Proof Points */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why It Works"
            headline="Built on Verified Engagement, Not Self-Reported Data"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <CheckCircle size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Active Days Are Verified</h4>
              <p className="text-body text-body">In the full programme, gym check-ins, screenings, expert sessions and nutrition appointments are verified through the Zimasa provider network. Reporting is based on what the system confirmed — not on what employees say they did.</p>
            </div>

            <div className="card">
              <Lock size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Privacy-Governed by Design</h4>
              <p className="text-body text-body">In employer programmes Zimasa stores verification of engagement events, not clinical data. Aggregate reporting only, with a minimum cohort of 25. Individual results never go to employers.</p>
            </div>

            <div className="card">
              <Zap size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No IT Integration Required</h4>
              <p className="text-body text-body">Zimasa GO runs on a single invite link. Employees sign up on their own devices. No SSO, no HRIS integration, no IT procurement required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* FOUNDER-REVIEW: B-16 — confirm the headline "Start free. Grow with your insurer or broker." (replaces "Start Free. Pay for Results."). PEPM pricing note removed. */}
      {/* Section 7: Two Ways In */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Two Ways In"
            headline="Start Free. Grow with Your Insurer or Broker."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <Badge variant="green" className="mb-6 block">Zimasa GO — Free to Start</Badge>
              <h4 className="font-heading text-h4 text-dark mb-4">For employers who want to start now</h4>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ Steps and activity tracking</li>
                <li>✓ Squads of up to five and public challenges</li>
                <li>✓ Share cards for milestones</li>
                <li>✓ One invite link for your whole team</li>
                <li>✓ No contract, no credit card</li>
              </ul>
              <Button href="/get-started/" variant="primary" className="w-full justify-center">Get Started Free</Button>
            </div>

            <div className="card bg-white">
              <Badge variant="navy" className="mb-6 block">Full Programme</Badge>
              <h4 className="font-heading text-h4 text-dark mb-4">For employers who want a structured programme</h4>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ Everything in Zimasa GO, plus:</li>
                <li>✓ Four Health Tracks with verified provider access</li>
                <li>✓ Private leagues and custom challenges</li>
                <li>✓ Rewards Engine — streaks, levels, recognition and partner perks</li>
                <li>✓ Activation at 30, 60 and 90 days (aggregate only, minimum cohort of 25)</li>
              </ul>
              <p className="text-body text-body font-semibold">
                Full programmes are available through your insurer, broker or scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Band */}
      <CtaBand
        headline="Your Team's Active Days Start Here"
        subtext="Sign up free in under five minutes. No contract, no procurement, no IT involvement. Full programmes are available through your insurer, broker or scheme."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
        secondaryCta={{ label: 'Explore Zimasa GO', href: '/zimasa-go/' }}
      />
    </main>
  )
}
