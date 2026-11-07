import type { Metadata } from 'next'
import Image from 'next/image'
import { Footprints, Users, Trophy, Share2, UserPlus, Link2, BarChart2 } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Zimasa GO — Free Health Engagement for Members',
  description: 'Zimasa GO is free to start. Track steps, join a squad of up to five, take on public challenges and share your milestones. Start in under five minutes — no employer needed.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/zimasa-go/',
    title: 'Zimasa GO — Free Health Engagement for Members | Zimasa',
    description: 'Zimasa GO is free to start. Track steps, join a squad of up to five, take on public challenges and share your milestones. Start in under five minutes — no employer needed.',
  },
}

const goMoments = [
  { src: '/images/cards/go-active-days.jpg', alt: 'Two people checking their fitness watches after exercise', caption: 'Every health action builds your Active Days.' },
  { src: '/images/cards/go-squads.jpg', alt: 'Three friends putting their hands together in a park', caption: 'Bring a squad of up to five.' },
  { src: '/images/cards/go-family.jpg', alt: 'Two adults walking hand in hand with a small child across a field', caption: 'Friends, family, colleagues — move together.' },
]

export default function ZimasaGoPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Zimasa GO', href: '/zimasa-go/', current: true }]} className="mb-0" />
      </div>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Members & Employees"
        headline="Start Free. Build Active Days. Bring Your Squad."
        subheadline="Zimasa GO is free to start. Track movement, join challenges, build habits with a small squad and share your progress — no employer sponsorship, no subscription, no waiting."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/?path=member' }}
        secondaryCta={{ label: 'Bring Zimasa GO to My Workplace', href: '/get-started/?path=employer' }}
        backgroundVariant="green"
        image={{ src: '/images/hero/members-hero.jpg', alt: 'A man resting on the grass after exercise, checking his phone', position: '50% 40%', priority: true }}
      />

      {/* Section 2: What Is Zimasa GO */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Free to Start"
            headline="Your Health Journey Starts Here"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Zimasa GO is the free starting point for health engagement. Whether you&apos;re joining through your employer or starting on your own, Zimasa GO gives you the tools to track movement, build streaks, connect with a small squad and see your Active Days grow.
            <br /><br />
            No gym membership required. No employer needed. Just you, your squad and a goal.
          </p>

          {/* DRAFT-COPY 2026-11: captions for founder review */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {goMoments.map((m) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <Footprints size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Steps & Activity Tracking</h4>
              <p className="text-body text-body"><strong>Active Days</strong> — An Active Day is a calendar day on which a member completes at least one health action. Several actions on the same day still count as one Active Day.</p>
            </div>

            <div className="card">
              <Users size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Squads</h4>
              <p className="text-body text-body">Form a squad of up to five people — friends, family, colleagues. See each other&apos;s Active Days, cheer progress and hold each other to account.</p>
            </div>

            <div className="card">
              <Trophy size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Public Challenges & Leaderboards</h4>
              <p className="text-body text-body">Join public monthly challenges. Climb the leaderboard. Zimasa GO runs community-wide challenges across categories — steps, consistency streaks, nutrition habits and more.</p>
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
              <p className="text-body text-body">Invite up to four people to join your squad. Share your squad link on WhatsApp. Everyone tracks together from day one.</p>
            </div>

            <div className="card">
              <Trophy size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Step 3 — Start Building Active Days</h4>
              <p className="text-body text-body">Complete your first health action. Track your streak. Join a public challenge. See your Active Days count grow on the leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What Zimasa GO Includes */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Free to Start"
            headline="Everything You Need to Start"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <Badge variant="green" className="mb-6 block">Zimasa GO — Free to Start</Badge>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Steps and activity tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Squads of up to five people</span>
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
              <Badge variant="navy" className="mb-6 block">Full Programme (through your insurer, broker or scheme)</Badge>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Four Health Tracks: MOVE, NOURISH, CARE, LEARN</span>
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
                  <span>Rewards Engine — streaks, levels, recognition and partner perks</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-body text-sm mt-8 max-w-2xl mx-auto">
            <strong>Note:</strong> If your employer or health scheme uses Zimasa, you may already have access to the full programme. Zimasa GO is your independent starting point if they don&apos;t — yet.
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

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 6: Bring It to Your Workplace */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="For Employers"
            headline="Already Using Zimasa GO? Bring It to Your Team."
            align="center"
          />

          <div className="max-w-2xl mx-auto">
            <p className="text-body-lg text-body mb-8 text-center">
              Bring Zimasa GO to your team — share one invite link. Your team downloads and uses Zimasa GO free. For reporting, ask about the full programme, available through your insurer, broker or scheme.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card bg-surface">
                <Link2 size={32} className="text-green mb-3" />
                <h5 className="font-heading text-dark mb-3">One Invite Link</h5>
                <p className="text-body text-body">Sign up your organisation and share a single link with your whole team. No contract, no IT integration.</p>
              </div>
              <div className="card bg-surface">
                <BarChart2 size={32} className="text-navy mb-3" />
                <h5 className="font-heading text-dark mb-3">Reporting Through the Full Programme</h5>
                <p className="text-body text-body">Programme reporting is aggregate only, with a minimum cohort of 25. Individual results never go to employers.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-started/?path=employer" variant="primary">Sign Up My Organisation</Button>
              <Button href="/employers/" variant="secondary">Learn About the Full Programme</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Band */}
      <CtaBand
        headline="Start Free. No Contract. No Credit Card."
        subtext="Start building Active Days in under five minutes."
        primaryCta={{ label: 'Get Started Free', href: '/get-started/?path=member' }}
        secondaryCta={{ label: 'Bring Zimasa GO to My Workplace', href: '/get-started/?path=employer' }}
      />
    </main>
  )
}
