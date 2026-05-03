import type { Metadata } from 'next'
import { UserPlus, Activity, LayoutDashboard, ArrowUpCircle, CheckCircle, Lock, Zap, Grid3x3, Trophy, Gift, BarChart2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Employers Solution — Workforce Wellness & Zimasa Go | Zimasa',
  description: 'Zimasa Go is free for your workforce — steps tracking, challenges, leaderboards, and an employer dashboard. Upgrade to the full programme when you\'re ready.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/employers/',
    title: 'Employers Solution — Workforce Wellness & Zimasa Go | Zimasa',
    description: 'Zimasa Go is free for your workforce — steps tracking, challenges, leaderboards, and an employer dashboard. Upgrade to the full programme when you\'re ready.',
    images: [{ url: '/images/og-employers.jpg', width: 1200, height: 630 }],
  },
}

export default function EmployersPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="For Employers & HR Teams"
        headline="Workforce Wellness That Actually Gets Used"
        subheadline="Zimasa Go is free for your team — no procurement, no contract. Employees track steps, join challenges, and build habits. You see aggregate Active Days from day one."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
        secondaryCta={{ label: 'See the Full Programme', href: '#full-programme' }}
        backgroundVariant="navy"
      />

      {/* Section 2: Two Paths */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Start Free or Go Full Scale"
            headline="Two Paths to Workforce Health Engagement"
            align="center"
          />
          <p className="text-body-lg text-body text-center">
            <strong>Zimasa Go</strong> — Free tier for employees (available now). Steps, squads, challenges, leaderboards. Self-serve sign-up.
            <br /><br />
            <strong>Enterprise Programmes</strong> — Full engagement platform with HR admin dashboard, employer allowances, and SLAs (launching Phase 2, Q4 2026).
          </p>
        </div>
      </section>

      {/* Section 3: Zimasa Go (Free Tier) */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="Start Free. No Contract."
            headline="Zimasa Go — Free for Your Workforce"
            align="center"
          />
          <p className="text-body-lg text-body mb-8">
            Zimasa Go is free for your workforce — no procurement, no contract, no IT integration. Employees download the app and start tracking Active Days immediately. You get a basic employer dashboard showing aggregate activation and Active Days from day one.
          </p>
          <Button href="/zimasa-go/" variant="primary">See Everything Zimasa Go Includes</Button>
        </div>
      </section>

      {/* Section 4: The Full Programme */}
      <section id="full-programme" className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="For Employers Who Want More"
            headline="The Full Programme — Active Days at Scale"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            When you are ready to move beyond the free tier, the Zimasa full employer programme gives your HR team the tools to design, run, and report on a structured 90-day health engagement programme — with a dedicated programme manager and weekly Active Days reporting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <Grid3x3 size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Four Health Tracks</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">MOVE, NOURISH, CARE, LEARN</h5>
              <p className="text-body text-body">Employees access gym and fitness activities (MOVE), nutrition guidance (NOURISH), expert health sessions — dietitians, therapy, physio, labs (CARE), and prevention education (LEARN). Every activity is verified and counted as an Active Day.</p>
            </div>

            <div className="card">
              <Trophy size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Challenges and Leaderboards</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Peer Accountability at Scale</h5>
              <p className="text-body text-body">Private company leagues, team challenges, and department leaderboards. Employees compete with colleagues in a structured, time-bound programme — not a passive app they forget about.</p>
            </div>

            <div className="card">
              <Gift size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Rewards and Partner Perks</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Verified Engagement Earns Rewards</h5>
              <p className="text-body text-body">Active Days convert into partner perks — gym discounts, nutrition vouchers, wellbeing credits. Rewards are tied to verified engagement, not self-reported claims.</p>
            </div>

            <div className="card">
              <BarChart2 size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">HR Dashboard and Reporting</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Weekly Active Days Reports</h5>
              <p className="text-body text-body">Your HR team sees aggregate engagement data weekly — activation rate, Active Days per employee, track mix, and challenge participation. Exportable for board reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Employer Journey"
            headline="From Sign-Up to Active Days in Under Two Weeks"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <UserPlus size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 1: Sign Up (Free)</h4>
              <p className="text-body text-body text-sm">Sign up your organisation at `/get-started/` in under five minutes. You receive an invite link to share with your team.</p>
            </div>

            <div className="card">
              <Activity size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 2: Employees Start Tracking</h4>
              <p className="text-body text-body text-sm">Employees create profiles, join squads, and begin logging Active Days. Steps are tracked automatically.</p>
            </div>

            <div className="card">
              <LayoutDashboard size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 3: See Your Dashboard</h4>
              <p className="text-body text-body text-sm">Your employer dashboard updates weekly with aggregate Active Days, activation rate, and challenge participation.</p>
            </div>

            <div className="card">
              <ArrowUpCircle size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Step 4: Upgrade When Ready</h4>
              <p className="text-body text-body text-sm">When you are ready for private leagues, marketplace access, and a dedicated programme manager, book a demo.</p>
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
              <p className="text-body text-body">Every gym check-in, screening, expert session, and nutrition appointment is verified through the Zimasa provider network. Your report is not based on what employees say they did — it is based on what the system confirmed.</p>
            </div>

            <div className="card">
              <Lock size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">PHI-Avoidant by Design</h4>
              <p className="text-body text-body">Zimasa does not collect or store protected health information. Your HR dashboard shows population-level engagement — activation rates, Active Days, track mix — never individual diagnoses, prescriptions, or clinical records.</p>
            </div>

            <div className="card">
              <Zap size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No IT Integration Required</h4>
              <p className="text-body text-body">Zimasa Go runs on a single invite link. Employees sign up on their own devices. No SSO, no HRIS integration, no IT procurement required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Pricing Framing */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Simple Pricing"
            headline="Start Free. Pay for Results."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <Badge variant="green" className="mb-6 block">Zimasa Go — Free</Badge>
              <h4 className="font-heading text-h4 text-dark mb-4">For employers who want to start now</h4>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ Steps and activity tracking</li>
                <li>✓ Squads and public challenges</li>
                <li>✓ Employer-lite dashboard (aggregate only)</li>
                <li>✓ Invite link for unlimited employees</li>
                <li>✓ No contract, no credit card</li>
              </ul>
              <Button href="/get-started/" variant="primary" className="w-full justify-center">Get Started Free</Button>
            </div>

            <div className="card bg-white">
              <Badge variant="navy" className="mb-6 block">Full Programme</Badge>
              <h4 className="font-heading text-h4 text-dark mb-4">For employers who want measurable outcomes</h4>
              <ul className="text-body text-body space-y-2 mb-8">
                <li>✓ Everything in Zimasa Go, plus:</li>
                <li>✓ Four health tracks with verified provider access</li>
                <li>✓ Private leagues and custom challenges</li>
                <li>✓ Allowances and rewards management</li>
                <li>✓ Dedicated programme manager</li>
                <li>✓ Weekly Active Days reports with export</li>
              </ul>
              <Button href="/book-demo/" variant="secondary" className="w-full justify-center">Book a Demo</Button>
            </div>
          </div>

          <p className="text-center text-body text-sm mt-8">
            <strong>Pricing note:</strong> Pricing is per employee per month (PEPM). Quoted on demo — dependent on programme scope and workforce size.
          </p>
        </div>
      </section>

      {/* Section 8: CTA Band */}
      <CtaBand
        headline="Your Team's Active Days Start Here"
        subtext="Sign up free in under five minutes. No contract, no procurement, no IT involvement. When you see results, we talk about the full programme."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
        secondaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
      />
    </main>
  )
}
