import type { Metadata } from 'next'
import { CalendarCheck, BarChart2, ShieldCheck, ClipboardList, Activity, FileText, Users } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'ZPS — Zimasa Payer Solution for Insurers & TPAs | Zimasa',
  description: 'The Zimasa Payer Solution gives health schemes and TPAs 30/60/90-day cohort dashboards, white-label member programmes, and renewal-ready engagement data — without PHI.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/solutions/zps/',
    title: 'ZPS — Zimasa Payer Solution for Insurers & TPAs | Zimasa',
    description: 'The Zimasa Payer Solution gives health schemes and TPAs 30/60/90-day cohort dashboards, white-label member programmes, and renewal-ready engagement data — without PHI.',
    images: [{ url: '/images/og-zps.jpg', width: 1200, height: 630 }],
  },
}

export default function ZPSPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Zimasa Payer Solution"
        headline="Engagement Data You Can Use at Renewal"
        subheadline="ZPS is the structured member engagement product for health schemes, TPAs, and insurers. 30/60/90-day cohort dashboards. White-label member programmes. PHI-avoidant architecture built for the Kenyan regulatory environment."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See the Problem We Solve', href: '/insurers-tpas/' }}
        backgroundVariant="navy"
      />

      {/* Section 2: What ZPS Delivers */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="The Product"
            headline="Three Things Every Payer Needs from a Health Engagement Partner"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-4">
            ZPS packages three capabilities that payer teams need but rarely get from standard wellness vendors: a structured programme your team can actually run, dashboards designed for payer decisions — not member app metrics — and engagement data clean enough for renewal conversations.
          </p>
          <p className="text-body text-body text-center mb-12 italic">
            In 90-day pilot programs, members achieve average 50–70% activation rate (measured as Active Days per eligible member). Contact for case studies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <CalendarCheck size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">Structured 90-Day Programmes</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Programmes With Start Dates and End Dates</h5>
              <p className="text-body text-body">ZPS runs as a defined 90-day engagement programme — not an open-ended app subscription. Programme design, member activation, and reporting all follow a fixed cadence. Your team knows what to expect and when.</p>
            </div>

            <div className="card">
              <BarChart2 size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">30/60/90-Day Cohort Dashboards</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Dashboards Built for Payer Decisions</h5>
              <p className="text-body text-body">Three purpose-built dashboards — activation at 30 days, engagement depth at 60 days, and renewal readiness at 90 days. Each is designed for a specific decision-maker: Member Experience leads, Risk Managers, and CMOs/CROs.</p>
            </div>

            <div className="card">
              <ShieldCheck size={40} className="text-orange mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-2">PHI-Avoidant Architecture</h4>
              <h5 className="font-ui text-label text-body mb-3 uppercase tracking-wider">Verification Without Clinical Data</h5>
              <p className="text-body text-body">ZPS verifies engagement events — a gym check-in, a dietitian booking, a health education module — without collecting or storing diagnoses, prescriptions, or lab results. Your compliance and legal teams will find nothing to flag.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 30/60/90 Dashboard Suite */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="Reporting"
            headline="Three Dashboards. Three Decisions."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Most wellness dashboards report what members did. ZPS dashboards are designed around what payer teams decide next. Each stage of the programme cycle has a corresponding dashboard built for that stage's stakeholders.
          </p>

          <div className="space-y-12">
            {/* Dashboard 1 */}
            <div className="card bg-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-[80px] h-[80px] rounded-icon bg-green/10 flex items-center justify-center flex-shrink-0">
                  <CalendarCheck size={40} className="text-green" />
                </div>
                <div>
                  <h4 className="font-heading text-h4 text-dark mb-1">30-Day Activation</h4>
                  <p className="text-body text-body"><strong>Audience:</strong> Head of Member Experience / CMO</p>
                  <p className="text-body text-body"><strong>Decision:</strong> Is the programme launching? Which cohorts need activation support?</p>
                </div>
              </div>
              <h5 className="font-heading text-dark mb-4">Headline metric: Activation Rate — members who completed at least one verified activity in the first 30 days</h5>
              <ul className="text-body text-body space-y-2">
                <li>✓ Total members enrolled vs. activated</li>
                <li>✓ Activation rate by cohort, age band, and geography</li>
                <li>✓ Track distribution (MOVE / NOURISH / CARE / LEARN)</li>
                <li>✓ Top 10 most active providers in network</li>
                <li>✓ Members with zero activity (flagged for re-engagement)</li>
              </ul>
            </div>

            {/* Dashboard 2 */}
            <div className="card bg-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-[80px] h-[80px] rounded-icon bg-blue/10 flex items-center justify-center flex-shrink-0">
                  <Activity size={40} className="text-blue" />
                </div>
                <div>
                  <h4 className="font-heading text-h4 text-dark mb-1">60-Day Engagement Depth</h4>
                  <p className="text-body text-body"><strong>Audience:</strong> CMO / Risk Manager</p>
                  <p className="text-body text-body"><strong>Decision:</strong> Who is forming habits? Where is the programme losing members?</p>
                </div>
              </div>
              <h5 className="font-heading text-dark mb-4">Headline metric: Active Days per member per month — by cohort</h5>
              <ul className="text-body text-body space-y-2">
                <li>✓ Active Days per member per month (by cohort and segment)</li>
                <li>✓ Track retention curves — who started MOVE and is still active?</li>
                <li>✓ Provider utilisation rate — booked vs. attended</li>
                <li>✓ Challenge participation and completion rates</li>
                <li>✓ Drop-off analysis by cohort (with last-activity date)</li>
              </ul>
            </div>

            {/* Dashboard 3 */}
            <div className="card bg-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-[80px] h-[80px] rounded-icon bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <FileText size={40} className="text-orange" />
                </div>
                <div>
                  <h4 className="font-heading text-h4 text-dark mb-1">90-Day Renewal Readiness</h4>
                  <p className="text-body text-body"><strong>Audience:</strong> CMO / CRO / Actuary</p>
                  <p className="text-body text-body"><strong>Decision:</strong> What does this programme demonstrate for the renewal conversation?</p>
                </div>
              </div>
              <h5 className="font-heading text-dark mb-4">Headline metric: Cohort-level Active Days trajectory — engagement trend from Day 1 to Day 90</h5>
              <ul className="text-body text-body space-y-2">
                <li>✓ Cohort-level Active Days trajectory</li>
                <li>✓ High-engagement vs. low-engagement segment split</li>
                <li>✓ CARE track completions — preventive interventions verified</li>
                <li>✓ Engagement programme ROI summary (cost per active member)</li>
                <li>✓ Renewal-ready cohort narrative (exportable for board packs)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Programme Delivery Model */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="How It Works"
            headline="Four Phases. Ninety Days. A Report You Can Use."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            Every ZPS engagement is structured as a 90-day programme. There is no undefined run time and no open-ended subscription. Zimasa delivers a programme with defined phases, deliverables at each stage, and a renewal-ready report at the end.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ClipboardList, num: '1', title: 'Programme Design', desc: 'Work with the Zimasa programme team to define your 90-day engagement brief: target cohort, track mix, incentive structure, reporting requirements, and success thresholds.' },
              { icon: Users, num: '2', title: 'Activation', desc: 'Members onboard to ZHEP under your brand. The Community Engine runs challenges and accountability structures from Day 1.' },
              { icon: Activity, num: '3', title: 'Engagement Depth', desc: 'Engagement moves from onboarding to habit formation. Zimasa monitors drop-off, runs targeted re-engagement for low-activity cohorts.' },
              { icon: FileText, num: '4', title: 'Renewal Readiness', desc: 'The final phase generates your renewal-ready evidence pack: cohort trajectory, segment analysis, CARE track interventions, and an ROI summary.' },
            ].map((phase, i) => {
              const Icon = phase.icon
              return (
                <div key={i} className="card">
                  <Icon size={40} className="text-green mb-4" />
                  <p className="font-display text-h2 text-green mb-2">Phase {phase.num}</p>
                  <h4 className="font-heading text-h4 text-dark mb-2">{phase.title}</h4>
                  <p className="text-body text-body text-sm">{phase.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Target Metrics */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Programme Goals"
            headline="What Success Looks Like"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h4 className="font-heading text-h4 text-dark mb-2">Active Days</h4>
              <p className="text-body text-body"><strong>50–70%</strong> of eligible members achieve 8+ Active Days per month in 90-day programs</p>
            </div>
            <div className="card bg-white">
              <h4 className="font-heading text-h4 text-dark mb-2">Track Utilisation</h4>
              <p className="text-body text-body"><strong>40%</strong> MOVE, <strong>35%</strong> CARE, <strong>20%</strong> NOURISH, <strong>5%</strong> LEARN (average mix)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: White-Label Deployment */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Your Brand, Our Infrastructure"
            headline="Members See Your Brand. You Get Our Engagement Engine."
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            ZPS deploys the member experience under your scheme or TPA brand identity. Members download an app or access a portal that carries your logo, your colours, and your communications — not Zimasa's. Zimasa runs everything behind it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Badge variant="green" className="mb-4">What You Control</Badge>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Brand identity across the member experience (logo, colours, communications)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Programme scope and benefit structure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Reporting cadence and format</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green font-bold">✓</span>
                  <span>Communication frequency and channel mix</span>
                </li>
              </ul>
            </div>

            <div>
              <Badge variant="navy" className="mb-4">What Zimasa Manages</Badge>
              <ul className="text-body text-body space-y-3">
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Provider vetting and network quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Verification infrastructure (QR, PIN, booking confirmation)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Community Engine and Rewards Engine operations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-navy font-bold">✓</span>
                  <span>Programme design, management, and activation support</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-body text-sm mt-8 italic">
            White-label deployment requires a contracted programme agreement. Available to health schemes, TPAs, and medical schemes. Not available on the self-serve tier.
          </p>
        </div>
      </section>

      {/* Section 7: PHI Architecture */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Data & Compliance"
            headline="Built Without PHI from the Ground Up"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            ZPS was designed for the payer compliance environment from the start. The platform verifies participation in health activities without accessing or storing clinical information. Your legal, compliance, and data protection teams have a clear story to tell.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <Badge variant="green" className="mb-4 block">What ZPS Records</Badge>
              <ul className="text-body text-body space-y-2">
                <li>✓ Verified engagement events</li>
                <li>✓ Active Days count per member per period</li>
                <li>✓ Cohort-level aggregate metrics</li>
              </ul>
            </div>

            <div className="card">
              <Badge variant="orange" className="mb-4 block">What ZPS Does Not Record</Badge>
              <ul className="text-body text-body space-y-2">
                <li>✓ Diagnoses, prescriptions, or treatment plans</li>
                <li>✓ Lab results or screening outcomes</li>
                <li>✓ Clinical notes or health records</li>
              </ul>
            </div>

            <div className="card">
              <Badge variant="blue" className="mb-4 block">Regulatory</Badge>
              <p className="text-body text-body mb-3">Kenya Data Protection Act 2019 compliant. KDPA Privacy Impact Assessment available on request.</p>
              <p className="text-body text-body text-sm"><strong>Reporting level:</strong> Cohort and aggregate only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: How ZPS Connects to ZHEP */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader
            eyebrow="Platform Architecture"
            headline="ZPS Is Powered by ZHEP"
            align="center"
          />
          <p className="text-body-lg text-body text-center mb-12">
            ZPS is the payer-configured deployment of the Zimasa Health Engagement Platform (ZHEP). The member experience — the four tracks, the Community Engine, the Rewards Engine, the verified provider network — is ZHEP. ZPS is the programme layer, the reporting layer, and the white-label wrapper that makes ZHEP work for payer procurement and compliance requirements.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3">ZHEP</th>
                  <th className="px-4 py-3">ZPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">What it is</td>
                  <td className="px-4 py-3">Member-facing engagement platform</td>
                  <td className="px-4 py-3">Payer-facing programme and reporting product</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Who uses it</td>
                  <td className="px-4 py-3">Members (employees, scheme members)</td>
                  <td className="px-4 py-3">CMOs, CROs, Risk Managers</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Core output</td>
                  <td className="px-4 py-3">Active Days (member metric)</td>
                  <td className="px-4 py-3">Cohort dashboards (payer metric)</td>
                </tr>
                <tr className="hover:bg-surface">
                  <td className="px-4 py-3 font-medium">Deployment</td>
                  <td className="px-4 py-3">White-label under payer brand</td>
                  <td className="px-4 py-3">Contracted 90-day programme</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button href="/solutions/zhep/" variant="primary">See the ZHEP Platform</Button>
          </div>
        </div>
      </section>

      {/* Section 9: CTA Band */}
      <CtaBand
        headline="See the 30/60/90 Dashboard in a Live Demo"
        subtext="We'll show you a real programme brief, the full dashboard suite, and a cohort activation forecast for your member population — in 30 minutes."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'See the Problem We Solve', href: '/insurers-tpas/' }}
        variant="navy"
      />
    </main>
  )
}
