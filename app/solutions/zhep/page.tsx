import type { Metadata } from 'next'
import { TrendingDown, XCircle, Repeat, Dumbbell, Leaf, HeartPulse, BookOpen, Users, Gift, Layers, Zap, Target, ShieldCheck } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

const DESCRIPTION =
  'ZHEP, the Zimasa Health Engagement Platform, serves insurers, providers, employers and members: four Tracks, the Community and Rewards Engines, provider bookings, verified Active Days, 30/60/90 reporting and ZCare care continuity. Integrates with your existing core.'

export const metadata: Metadata = {
  title: { absolute: 'ZHEP — Zimasa Health Engagement Platform | Zimasa' },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/solutions/zhep/',
    title: 'ZHEP — Zimasa Health Engagement Platform | Zimasa',
    description: DESCRIPTION,
  },
}

export default function ZHEPPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions/' }, { label: 'ZHEP', href: '/solutions/zhep/', current: true }]} className="mb-0" />
      </div>
      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 1: Hero */}
      <Hero
        eyebrow="ZHEP — Zimasa Health Engagement Platform"
        headline="The Platform Behind Health That Shows Up"
        subheadline="ZHEP is the engagement platform for insurers, providers, employers and members. Four Tracks — MOVE, NOURISH, CARE and LEARN — the Community and Rewards Engines, provider bookings and verified Active Days, reported at 30, 60 and 90 days. It integrates with a payer's existing core administration system, and includes ZCare for care continuity."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See ZHEP for Payers', href: '/insurers-tpas/' }}
        backgroundVariant="green"
      />

      {/* Section 2: The Problem */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Challenge"
            headline="Wellness Benefits That Nobody Uses"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Many employer and payer wellness programmes share the same problem: low activation, no verification, and no clear evidence of engagement. Members register once and drift away. You&apos;re left with utilisation reports that measure logins, not verified activity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <TrendingDown size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Low Activation</h4>
              <p className="text-body text-body">Many members never progress past onboarding — and without verified data, you cannot see which ones.</p>
            </div>

            <div className="card">
              <XCircle size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No Verification</h4>
              <p className="text-body text-body">Self-reported activity data is unreliable. You cannot report to boards or plan programme decisions on unverified numbers.</p>
            </div>

            <div className="card">
              <Repeat size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No Follow-Through</h4>
              <p className="text-body text-body">Gym discounts and app downloads are not a programme. Without habit design, social accountability and a clear next step after screening, engagement fades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Four Tracks */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="What Members Access"
            headline="Four Health Tracks. One Coordinated Programme."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MOVE */}
            <div className="card border-l-4 border-green">
              <div className="flex items-start gap-4 mb-4">
                <Dumbbell size={32} className="text-green flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-h4 text-dark">MOVE</h4>
                  <p className="text-sm text-body">Physical Activity, Verified</p>
                </div>
              </div>
              <p className="text-body text-body mb-4">Access to a vetted network of gyms, fitness classes, run clubs, and step challenge programmes. Check-ins are verified at point of service via QR or PIN. Active Days count only when movement is confirmed.</p>
              <ul className="text-sm text-body space-y-2">
                <li>✓ Gym access (network partners)</li>
                <li>✓ Fitness classes (in-person and live-stream)</li>
                <li>✓ Run clubs and group challenges</li>
                <li>✓ Step tracking with verified milestones</li>
              </ul>
            </div>

            {/* NOURISH */}
            <div className="card border-l-4 border-light-green">
              <div className="flex items-start gap-4 mb-4">
                <Leaf size={32} className="text-light-green flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-h4 text-dark">NOURISH</h4>
                  <p className="text-sm text-body">Nutrition Habits That Form</p>
                </div>
              </div>
              <p className="text-body text-body mb-4">Guided nutrition programmes delivered by registered dietitians in the Zimasa network. Members access meal planning tools, food education content, and 1:1 nutrition consultations — all verified.</p>
              <ul className="text-sm text-body space-y-2">
                <li>✓ Registered dietitian consultations</li>
                <li>✓ Personalised meal plans</li>
                <li>✓ Food education pathways</li>
                <li>✓ Nutrition habit streaks</li>
              </ul>
            </div>

            {/* CARE */}
            <div className="card border-l-4 border-blue">
              <div className="flex items-start gap-4 mb-4">
                <HeartPulse size={32} className="text-blue flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-h4 text-dark">CARE</h4>
                  <p className="text-sm text-body">Expert Sessions and Follow-Through</p>
                </div>
              </div>
              <p className="text-body text-body mb-4">Therapy, physiotherapy, screenings and follow-through sessions with credentialed health professionals. Booked through vetted providers in the Zimasa network, verified on completion.</p>
              <ul className="text-sm text-body space-y-2">
                <li>✓ Mental health therapy</li>
                <li>✓ Physiotherapy</li>
                <li>✓ Preventive screening packages</li>
                <li>✓ Follow-through sessions after screening</li>
              </ul>
            </div>

            {/* LEARN */}
            <div className="card border-l-4 border-navy">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen size={32} className="text-navy flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-h4 text-dark">LEARN</h4>
                  <p className="text-sm text-body">Prevention Through Education</p>
                </div>
              </div>
              <p className="text-body text-body mb-4">Guided prevention pathways and health education content built for the East African health context. Members earn Active Days for completing education modules and guided habit programmes.</p>
              <ul className="text-sm text-body space-y-2">
                <li>✓ Guided prevention pathways</li>
                <li>✓ Health education modules</li>
                <li>✓ Habit formation programmes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Two Engines */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="How Engagement Happens"
            headline="Behaviour Design, Not Just Access"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Most wellness platforms solve the access problem. ZHEP is designed for the engagement problem. Two engines give members reasons to come back.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-[80px] h-[80px] rounded-icon bg-green/10 flex items-center justify-center mb-4">
                <Users size={40} className="text-green" />
              </div>
              <h4 className="font-heading text-h4 text-dark mb-3">Community Engine</h4>
              <h5 className="font-heading text-dark mb-3">Social Accountability at Scale</h5>
              <p className="text-body text-body mb-6">Team challenges, individual streaks, leaderboards, and accountability features that make health a shared activity.</p>
              <ul className="text-body text-body space-y-2">
                <li>✓ Team and individual challenges</li>
                <li>✓ Leaderboard rankings</li>
                <li>✓ Streak tracking</li>
                <li>✓ Challenge creation tools</li>
              </ul>
            </div>

            <div>
              <div className="w-[80px] h-[80px] rounded-icon bg-orange/10 flex items-center justify-center mb-4">
                <Gift size={40} className="text-orange" />
              </div>
              <h4 className="font-heading text-h4 text-dark mb-3">Rewards Engine</h4>
              <h5 className="font-heading text-dark mb-3">Recognition That Drives Return Visits</h5>
              <p className="text-body text-body mb-6">Streaks, levels, recognition and partner perks tied directly to verified Active Days. Members are rewarded for completing verified activities — not for logging in.</p>
              <ul className="text-body text-body space-y-2">
                <li>✓ Streaks and levels</li>
                <li>✓ Milestone recognition</li>
                <li>✓ Partner perks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Reporting & Verification */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Data Layer"
            headline="Active Days, Not App Sessions"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            An Active Day is a calendar day on which a member completes at least one health action. Several actions on the same day still count as one Active Day. Every activity that counts toward an Active Day is verified at the point of service.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3">Report</th>
                  <th className="px-4 py-3">Timing</th>
                  <th className="px-4 py-3">Audience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Member dashboard</td>
                  <td className="px-4 py-3">Real-time</td>
                  <td className="px-4 py-3">Member</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Engagement snapshot (aggregate)</td>
                  <td className="px-4 py-3">Weekly</td>
                  <td className="px-4 py-3">Programme sponsor</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Cohort dashboard (aggregate)</td>
                  <td className="px-4 py-3">Monthly</td>
                  <td className="px-4 py-3">Programme sponsor</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Activation, screening completion and follow-through</td>
                  <td className="px-4 py-3">30/60/90-day</td>
                  <td className="px-4 py-3">CMO / medical and wellness teams</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">90-Day Growth Review</td>
                  <td className="px-4 py-3">90-day</td>
                  <td className="px-4 py-3">Programme sponsor and Zimasa</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-body text-sm mt-8">
            <strong>Data note:</strong> Privacy-governed by design. In employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Provider contexts may handle regulated health data only under governance conditions. Aggregate reporting only, with a minimum cohort of 25. Individual results never go to employers.
          </p>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 6: ZHEP for Payers */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="For Insurers & TPAs"
            headline="ZHEP for Payers"
            subheadline="The insurer and TPA offer, delivered on ZHEP. It integrates with your existing core administration system — no replacement needed."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <Zap size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Engage</h4>
              <p className="text-body text-body">Tracks, Community and Rewards Engines, nudges, and scheme/cohort reporting. For broad engagement and member value.</p>
            </div>
            <div className="card">
              <Target size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Activate</h4>
              <p className="text-body text-body">Engage plus cohort programmes, a governance cadence and optional cohort rewards. For rising-risk cohorts and screening-completion campaigns.</p>
            </div>
            <div className="card">
              <ShieldCheck size={40} className="text-navy mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Manage</h4>
              <p className="text-body text-body">Activate plus stricter eligibility, caps and higher-touch governance. For chronic and high-cost cohorts.</p>
            </div>
          </div>

          <div className="text-center">
            <Button href="/insurers-tpas/" variant="primary">See ZHEP for Payers</Button>
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      {/* Section 7: ZCare */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto text-center">
          <SectionHeader
            eyebrow="Care Continuity"
            headline="ZCare — Care Continuity on ZHEP"
            align="center"
          />
          <p className="text-body-lg text-body mb-6">
            ZCare operationalises agreed care pathways and makes follow-through measurable — between visits, after screening, across the care team. It supports the clinical judgement of the member&apos;s provider and the payer&apos;s medical team; it does not replace them, and it does not diagnose, treat or prescribe.
          </p>
          <p className="text-body text-body mb-8">ZCare is part of ZHEP and is delivered with it.</p>
          <Button href="/solutions/zhep/zcare/" variant="primary">Explore ZCare</Button>
        </div>
      </section>

      {/* Section 8: White-Label Capability */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="For Insurers & TPAs"
            headline="Deploy Under Your Brand"
            align="center"
          />
          {/* FOUNDER-REVIEW: confirm white-label deployment is available and contractable today before launch. */}
          <p className="text-body-lg text-body text-center mb-12">
            ZHEP is white-label ready. Insurers and TPAs can deploy the member experience under their own brand identity — logo, colours, and communications — while Zimasa runs the programme infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-heading text-h4 text-dark mb-4">What&apos;s white-labelled</h4>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Member-facing app and portal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Email and SMS communications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Challenge and programme branding</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Provider booking confirmation flow</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-h4 text-dark mb-4">What stays Zimasa</h4>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Provider vetting and network management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Verification infrastructure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Programme design and management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Reporting engine</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-12 p-4 rounded-lg bg-surface">
            <Layers size={24} className="text-navy flex-shrink-0 mt-1" />
            <p className="text-body text-body text-sm">
              <Badge variant="navy" className="mr-2">Need administration too?</Badge>
              ZHEP works with your existing core. If you are modernising payer administration as well, see <a href="/solutions/zps/" className="text-green hover:underline">ZPS — Zimasa Payer Solution</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: CTA Band */}
      <CtaBand
        headline="See ZHEP in Action"
        subtext="We'll walk you through a live platform demo, a sample 90-day programme design and 30/60/90 reporting — in 30 minutes."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See ZHEP for Payers', href: '/insurers-tpas/' }}
      />
    </main>
  )
}
