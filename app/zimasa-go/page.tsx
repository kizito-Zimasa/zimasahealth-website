import type { Metadata } from 'next'
import { Footprints, Users, Trophy, Share2, UserPlus } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Zimasa Go — Free Health Engagement for Members | Zimasa',
  description: 'Zimasa Go is free for members and employees. Track steps, join squads, compete in challenges, and earn rewards. Start in under five minutes — no employer needed.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/zimasa-go/',
    title: 'Zimasa Go — Free Health Engagement for Members | Zimasa',
    description: 'Zimasa Go is free for members and employees. Track steps, join squads, compete in challenges, and earn rewards. Start in under five minutes — no employer needed.',
  },
}

export default function ZimasaGoPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Zimasa Go', href: '/zimasa-go/', current: true }]} className="mb-0" />
      </div>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Members & Employees"
        headline="Start Free. Build Active Days. Bring Your Squad."
        subheadline="Zimasa Go is free for anyone. Track movement, join challenges, build habits with a small squad, and share your progress — no employer sponsorship, no subscription, no waiting."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/?path=member' }}
        secondaryCta={{ label: 'Bring Zimasa to My Workplace', href: '/get-started/?path=employer' }}
        backgroundVariant="green"
      />

      {/* Section 2: What Is Zimasa Go */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Free for Everyone"
            headline="Your Health Journey Starts Here"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Zimasa Go is the free starting point for health engagement. Whether you're joining through your employer or starting on your own, Zimasa Go gives you the tools to track movement, build streaks, connect with a small squad, and see your Active Days grow.
            <br /><br />
            No gym membership required. No employer needed. Just you, your squad, and a goal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <Footprints size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Steps & Activity Tracking</h4>
              <p className="text-body text-body"><strong>Active Days</strong> — Earned when you log steps, join a class, or complete a challenge. One active day = one action logged.</p>
            </div>

            <div className="card">
              <Users size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Squads</h4>
              <p className="text-body text-body">Form a squad of 3–5 people — friends, family, colleagues. See each other's Active Days, cheer progress, and hold each other to account.</p>
            </div>

            <div className="card">
              <Trophy size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Public Challenges & Leaderboards</h4>
              <p className="text-body text-body">Join public monthly challenges. Climb the leaderboard. Zimasa Go runs community-wide challenges across categories — steps, consistency streaks, nutrition habits, and more.</p>
            </div>

            <div className="card">
              <Share2 size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Share Cards</h4>
              <p className="text-body text-body">Generate a share card when you hit milestones — weekly streak, squad challenge win, personal best. Designed for WhatsApp and Instagram Stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Get Started in Minutes"
            headline="Three Steps to Your First Active Day"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <UserPlus size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Step 1 — Sign Up Free</h4>
              <p className="text-body text-body">Go to Get Started and choose the member path. Enter your name and email. No credit card, no subscription.</p>
            </div>

            <div className="card">
              <Users size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Step 2 — Build Your Squad</h4>
              <p className="text-body text-body">Invite 2–4 people to join your squad. Share your squad link on WhatsApp. Everyone tracks together from day one.</p>
            </div>

            <div className="card">
              <Trophy size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Step 3 — Start Earning Active Days</h4>
              <p className="text-body text-body">Log your first activity. Track your streak. Join a public challenge. See your Active Days count grow on the leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What Zimasa Go Includes */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Free Forever"
            headline="Everything You Need to Start"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <Badge variant="green" className="mb-6 block">Zimasa Go — Always Free</Badge>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Steps and activity tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Squads (3–5 people)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Public challenges and community leaderboards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Share cards for milestones</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Personal Active Days streak</span>
                </li>
              </ul>
            </div>

            <div>
              <Badge variant="navy" className="mb-6 block">Full Programme (through employer or payer)</Badge>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Four health tracks: MOVE, NOURISH, CARE, LEARN</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Access to vetted providers — gyms, dietitians, physios, labs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Private company leagues and custom challenges</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Allowances and rewards for verified engagement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Employer HR dashboard</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-body text-sm mt-8 max-w-2xl mx-auto">
            <strong>Note:</strong> If your employer or health scheme uses Zimasa, you automatically get access to the full programme. Zimasa Go is your independent starting point if they don't — yet.
          </p>
        </div>
      </section>

      {/* Section 5: Already on a Programme */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto text-center">
          <p className="eyebrow mb-4">Already with Zimasa?</p>
          <p className="text-body-lg text-body mb-8">
            If your employer or health scheme already uses Zimasa, sign in at:
          </p>
          <a href="https://app.zimasahealth.com" className="inline-block">
            <Button variant="primary">Sign In at app.zimasahealth.com</Button>
          </a>
        </div>
      </section>

      {/* Section 6: Bring It to Your Workplace */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="For Employers"
            headline="Already Using Zimasa Go? Bring It to Your Team."
            align="center"
          />

          <div className="max-w-2xl mx-auto">
            <h4 className="font-heading text-h4 text-dark mb-6">Employer-Lite Dashboard</h4>
            <p className="text-body-lg text-body mb-8">
              Register your organisation and give your whole workforce a free employer-lite dashboard. See:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card bg-surface">
                <h5 className="font-heading text-dark mb-3">Activation Rate</h5>
                <p className="text-body text-body">% of workforce with at least one Active Day</p>
              </div>
              <div className="card bg-surface">
                <h5 className="font-heading text-dark mb-3">Active Days/Employee</h5>
                <p className="text-body text-body">Average per your workforce</p>
              </div>
              <div className="card bg-surface">
                <h5 className="font-heading text-dark mb-3">Track Mix</h5>
                <p className="text-body text-body">% engagement by MOVE, NOURISH, CARE, LEARN</p>
              </div>
              <div className="card bg-surface">
                <h5 className="font-heading text-dark mb-3">Challenge Participation</h5>
                <p className="text-body text-body">Members in active challenges</p>
              </div>
            </div>

            <p className="text-body text-body mb-8">
              <strong>Weekly Reports</strong> — Automatic digest to your inbox
              <br />
              Full reports and CSV export available in paid programmes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-started/?path=employer" variant="primary">Sign Up My Organisation</Button>
              <Button href="/employers/" variant="secondary">Learn about the Full Employer Programme</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Band */}
      <CtaBand
        headline="Start Free. No Contract. No Credit Card."
        subtext="Join thousands of members building Active Days across Kenya. Your first step takes less than five minutes."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/?path=member' }}
        secondaryCta={{ label: 'Book a Demo for Your Organisation', href: '/book-demo/' }}
      />
    </main>
  )
}
