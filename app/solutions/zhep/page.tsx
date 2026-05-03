import type { Metadata } from 'next'
import { TrendingDown, XCircle, Repeat, Dumbbell, Leaf, HeartPulse, BookOpen, Users, Gift } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'ZHEP — Member Health Engagement Platform | Zimasa',
  description: 'ZHEP is Zimasa\'s member-facing Health Engagement OS. Four health tracks, two engagement engines, verified Active Days. White-label ready for payers and employers.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/solutions/zhep/',
    title: 'ZHEP — Member Health Engagement Platform | Zimasa',
    description: 'ZHEP is Zimasa\'s member-facing Health Engagement OS. Four health tracks, two engagement engines, verified Active Days. White-label ready for payers and employers.',
    images: [{ url: '/images/og-zhep.jpg', width: 1200, height: 630 }],
  },
}

export default function ZHEPPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Zimasa Health Engagement Platform"
        headline="The Engagement OS Your Members Will Actually Use"
        subheadline="ZHEP runs structured health engagement programmes through four tracks — MOVE, NOURISH, CARE, and LEARN — using behaviour design, incentives, and a verified provider network. Every engagement event is verified. Active Days is the headline metric."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See Payers Solution', href: '/insurers-tpas/' }}
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
            Most employer and payer wellness programmes suffer the same problem: low activation, no verification, and no measurable ROI. Members register once, use the platform for two weeks, and disappear. You're left with utilisation reports that measure logins, not health outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <TrendingDown size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Low Activation</h4>
              <p className="text-body text-body">Industry average activation rates sit below 20%. Most members never progress past onboarding.</p>
            </div>

            <div className="card">
              <XCircle size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No Verification</h4>
              <p className="text-body text-body">Self-reported activity data is unreliable. You cannot risk-adjust, report to boards, or design renewal strategy on unverified numbers.</p>
            </div>

            <div className="card">
              <Repeat size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">No Behaviour Change</h4>
              <p className="text-body text-body">Gym discounts and app downloads do not change behaviour. Without habit design, social accountability, and the right incentive structure, nothing sticks past Week 2.</p>
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
                  <p className="text-sm text-body">Expert Interventions, On Demand</p>
                </div>
              </div>
              <p className="text-body text-body mb-4">Access to credentialed health professionals for the conditions that drive claim costs. Therapy, physiotherapy, lab screenings, and specialist referrals — booked through the Zimasa provider network, verified on completion.</p>
              <ul className="text-sm text-body space-y-2">
                <li>✓ Mental health therapy</li>
                <li>✓ Physiotherapy</li>
                <li>✓ Preventive screening packages</li>
                <li>✓ Specialist referrals (verified)</li>
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
              <p className="text-body text-body mb-4">Guided prevention pathways and health education content built for the East African health context. Members earn Active Days for completing education modules, health assessments, and guided habit programmes.</p>
              <ul className="text-sm text-body space-y-2">
                <li>✓ Guided prevention pathways</li>
                <li>✓ Health education modules</li>
                <li>✓ Risk assessment tools</li>
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
            Most wellness platforms solve the access problem. ZHEP solves the engagement problem. Two engines keep members active past the first two weeks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-[80px] h-[80px] rounded-icon bg-green/10 flex items-center justify-center mb-4">
                <Users size={40} className="text-green" />
              </div>
              <h4 className="font-heading text-h4 text-dark mb-3">Community Engine</h4>
              <h5 className="font-heading text-dark mb-3">Social Accountability at Scale</h5>
              <p className="text-body text-body mb-6">Team challenges, individual streaks, leaderboards, and accountability features that make health a shared activity. Members who engage socially sustain Active Days 3× longer than solo members.</p>
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
              <h5 className="font-heading text-dark mb-3">Incentives That Drive Return Visits</h5>
              <p className="text-body text-body mb-6">Partner perks, wallet credits, and milestone rewards tied directly to verified Active Days. Members earn rewards by completing verified activities — not by logging in.</p>
              <ul className="text-body text-body space-y-2">
                <li>✓ Partner discount network</li>
                <li>✓ Wallet credits (KES-denominated)</li>
                <li>✓ Milestone reward unlocks</li>
                <li>✓ MPESA-native payout</li>
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
            ZHEP reports engagement using Active Days — the number of days in a period where a member completed at least one verified health activity. It is a hard metric. Every activity that counts toward an Active Day is verified at the point of service.
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
                  <td className="px-4 py-3 font-medium">Engagement snapshot</td>
                  <td className="px-4 py-3">Weekly</td>
                  <td className="px-4 py-3">Payer / Employer</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Cohort dashboard</td>
                  <td className="px-4 py-3">Monthly</td>
                  <td className="px-4 py-3">Payer / Employer</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Programme review</td>
                  <td className="px-4 py-3">30/60/90-day</td>
                  <td className="px-4 py-3">CMO / HR Director</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Renewal readiness</td>
                  <td className="px-4 py-3">90-day</td>
                  <td className="px-4 py-3">CMO / CRO</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-body text-sm mt-8">
            <strong>PHI note:</strong> Zimasa stores verification of engagement events, not health records or diagnoses. All reporting is at cohort or aggregate level. Individual member data is visible only to the member.
          </p>
        </div>
      </section>

      {/* Section 6: White-Label Capability */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="For Payers & Large Employers"
            headline="Deploy Under Your Brand"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            ZHEP is white-label ready. Payers and large employers can deploy the member experience under their own brand identity — logo, colours, and communications — while Zimasa runs the programme infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-heading text-h4 text-dark mb-4">What's white-labelled</h4>
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
                  <span>Reporting and analytics engine</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Band */}
      <CtaBand
        headline="See ZHEP in Action"
        subtext="We'll walk you through a live platform demo, a sample 90-day programme design, and your first activation forecast — in 30 minutes."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See Payers Solution', href: '/insurers-tpas/' }}
      />
    </main>
  )
}
