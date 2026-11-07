import type { Metadata } from 'next'
import Image from 'next/image'
import { Building2, Stethoscope, Briefcase, Users, Route, BellRing, UsersRound, Award, Lock, BadgeCheck, MapPin, Activity, ShieldCheck } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureCard from '@/components/sections/FeatureCard'
import CtaBand from '@/components/sections/CtaBand'
import Button from '@/components/ui/Button'

// DRAFT-COPY 2026-11: homepage rewrite after the 5 Nov Commercial Growth Review — founder review
const HERO_COPY =
  'Zimasa helps insurers, employers and healthcare providers keep people active and on top of their health all year round — and shows the organisations paying for it who is taking part.'

const SITE_DESCRIPTION =
  'Zimasa is the Health Engagement OS for East Africa — one platform that helps insurers, employers and healthcare providers keep people active and on top of their health all year round, and shows sponsors who is taking part.'

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

const howItWorks = [
  { icon: Route, title: 'Programmes', desc: 'Simple programmes people join through their insurer, employer or healthcare provider — or on their own.' },
  { icon: BellRing, title: 'Nudges', desc: 'Timely reminders that prompt the next healthy step, so good intentions turn into action.' },
  { icon: UsersRound, title: 'Community', desc: 'Squads and challenges with friends, family and colleagues keep people going together.' },
  { icon: Award, title: 'Recognition', desc: 'Streaks, milestones and rewards celebrate progress and help habits stick.' },
]

const tracks = [
  { name: 'MOVE', colour: 'text-green', desc: 'Movement habits and physical activity — walking, hiking, dancing, yoga, gyms, classes and more.', photos: [{ src: '/images/cards/track-move-1.jpg', alt: 'Friends hiking together on a forest trail' }, { src: '/images/cards/track-move-2.jpg', alt: 'An outdoor group dance-fitness class in a park' }, { src: '/images/cards/track-move-3.jpg', alt: 'Three people holding a yoga pose on a lawn' }, { src: '/images/cards/track-move-4.jpg', alt: 'Two people on exercise bikes at a gym' }] },
  { name: 'NOURISH', colour: 'text-orange', desc: 'Nutrition habits and lifestyle routines — what we eat, how we prepare it, meal plans and food education.', photos: [{ src: '/images/cards/track-nourish-1.jpg', alt: 'Two women exchanging fresh greens at a market stall' }, { src: '/images/cards/track-nourish-2.jpg', alt: 'A woman chopping vegetables in her kitchen beside an older relative' }, { src: '/images/cards/track-nourish-3.jpg', alt: 'A family preparing a healthy breakfast together' }, { src: '/images/cards/track-nourish-4.jpg', alt: 'A woman drinking water from a bottle at home' }] },
  { name: 'CARE', colour: 'text-blue', desc: 'Preventive actions and mental wellbeing — health screenings, physiotherapy, therapy and dietitian sessions.', photos: [{ src: '/images/cards/track-care-1.jpg', alt: 'A clinician checking a man’s blood pressure' }, { src: '/images/cards/track-care-2.jpg', alt: 'A physiotherapist in his treatment room' }, { src: '/images/cards/track-care-3.jpg', alt: 'A woman meditating with her eyes closed' }, { src: '/images/cards/track-care-4.jpg', alt: 'A counselling conversation in a calm room' }] },
  { name: 'LEARN', colour: 'text-navy', desc: 'The knowledge we need for our wellbeing — health education, habit-building programmes and financial wellbeing foundations.', photos: [{ src: '/images/cards/track-learn-1.jpg', alt: 'A facilitator leading a workshop at a flipchart' }, { src: '/images/cards/track-learn-2.jpg', alt: 'A man reading at his desk' }, { src: '/images/cards/track-learn-3.jpg', alt: 'Hands working out a budget with a calculator and notebook' }, { src: '/images/cards/track-learn-4.jpg', alt: 'A woman taking notes while learning online' }] },
]

// Illustrative only — not client data. A programme offered to 500 members.
const INVITED = 500
const sponsorView = [
  { label: 'Joined the programme', value: 320 },
  { label: 'Active in the first 30 days', value: 230 },
  { label: 'Still active at 60 days', value: 190 },
]

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="The Health Engagement OS"
        headline="Health that shows up."
        subheadline={HERO_COPY}
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
        backgroundVariant="green"
        image={{ src: '/images/hero/home-hero.jpg', alt: 'Three friends walking together along a tree-lined path in Homa Bay, Kenya', position: '45% 50%', priority: true }}
      />

      {/* Section 2: What Zimasa does — value first, then the four Tracks */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="What Zimasa Does"
            headline="Healthier Habits, Built Into Everyday Life"
            subheadline="Zimasa is a Health Engagement OS: one platform that runs everything needed to help people stay healthy — programmes, reminders, community, rewards and reporting — so insurers, employers and providers don't have to piece it together themselves."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {howItWorks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-[64px] h-[64px] rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-green" />
                </div>
                <h3 className="font-heading text-h4 text-dark mb-2">{title}</h3>
                <p className="text-body text-body text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <p className="font-heading text-h4 text-dark text-center mb-8">Four areas of everyday health</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((t) => (
              <div key={t.name} className="card overflow-hidden">
                <div className="-mx-8 -mt-8 mb-6 grid grid-cols-2 gap-0.5">
                  {t.photos.map((ph) => (
                    <Image key={ph.src} src={ph.src} alt={ph.alt} width={480} height={480} sizes="(min-width: 1024px) 150px, (min-width: 640px) 25vw, 50vw" className="block w-full h-auto" />
                  ))}
                </div>
                <p className={`font-display text-h3 ${t.colour} mb-2`}>{t.name}</p>
                <p className="text-body text-body text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Active Days, simply — with an illustrative sponsor view */}
      <section className="section-padding bg-surface">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Active Days</p>
            <h2 className="font-display text-h2 text-dark mb-6">Progress You Can See</h2>
            <p className="text-body-lg text-body mb-4">
              An <strong>Active Day</strong>{' '}is any day someone does something good for their health — a walk, a class, a screening. It counts only when it&apos;s confirmed, not just self-reported.
            </p>
            <p className="text-body-lg text-body">
              Organisations that sponsor a programme see how many people joined and how many are still taking part after 30 and 60 days — as group totals, never individual health details.
            </p>
          </div>

          <figure className="card bg-white m-0" aria-labelledby="sponsor-view-title">
            <p id="sponsor-view-title" className="font-heading text-h4 text-dark mb-1">What a sponsor sees</p>
            <p className="text-body text-sm mb-6">Illustrative example — a programme offered to {INVITED} members. Not client data.</p>
            <ul className="space-y-5 list-none p-0 m-0">
              {sponsorView.map((row) => {
                const pct = Math.round((row.value / INVITED) * 100)
                return (
                  <li key={row.label} title={`${row.label}: ${row.value} of ${INVITED} members (${pct}%)`}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-dark">{row.label}</span>
                      <span className="text-dark font-semibold">{row.value} <span className="text-body font-normal">({pct}%)</span></span>
                    </div>
                    <div className="h-3 rounded-full bg-green/10" aria-hidden="true">
                      <div className="h-3 rounded-full bg-green" style={{ width: `${pct}%` }} />
                    </div>
                  </li>
                )
              })}
            </ul>
            <p className="text-body text-sm mt-6">Plus <strong className="text-dark">5,400 Active Days</strong> logged across the group by day 60.</p>
          </figure>
        </div>
      </section>

      {/* Section 4: Who it's for — a map to the audience pages. Order: Insurers & TPAs → Providers → Employers → Individuals */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Who It's For"
            headline="Find Your Way In"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              icon={Building2}
              eyebrow="Insurers & TPAs"
              headline="Keep members engaged all year — not just at screening."
              body="Run wellness programmes members actually use, and see the results for your schemes."
              cta={{ label: 'For Insurers & TPAs', href: '/insurers-tpas/' }}
              image={{ src: '/images/hero/payers-hero.jpg', alt: 'A hand pointing to the next step on a printed nutrition plan', position: '40% 50%' }}
            />
            <FeatureCard
              icon={Stethoscope}
              eyebrow="Clinics, Diagnostics, Dietitians, Gyms & More"
              headline="Be the provider members keep coming back to."
              body="Join Zimasa's provider network and help patients stick to the plan you agreed, between visits."
              cta={{ label: 'For Healthcare Providers', href: '/healthcare-providers/' }}
              image={{ src: '/images/hero/providers-hero.jpg', alt: 'A clinician holding a patient’s hands in reassurance', position: '45% 50%' }}
            />
            <FeatureCard
              icon={Briefcase}
              eyebrow="Employers & HR Teams"
              headline="A wellness benefit your team will actually use."
              body="Share Zimasa GO with your team for free today. Full programmes come through your insurer, broker or scheme."
              cta={{ label: 'For Employers', href: '/employers/' }}
              image={{ src: '/images/hero/employers-hero.jpg', alt: 'Four colleagues doing a side stretch together outdoors', position: '50% 60%' }}
            />
            <FeatureCard
              icon={Users}
              eyebrow="Individuals"
              headline="Build healthy habits — free, today."
              body="Track your steps, join a squad and take on challenges with Zimasa GO. No employer needed."
              cta={{ label: 'Explore Zimasa GO', href: '/zimasa-go/' }}
              image={{ src: '/images/hero/members-hero.jpg', alt: 'A man resting on the grass after exercise, checking his phone', position: '50% 40%' }}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="/book-demo/">Book a Demo</Button>
            <Button variant="outline" href="/get-started/">Get Started Free</Button>
          </div>
        </div>
      </section>

      {/* Section 5: Our two solutions — short, links to product pages */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Build"
            headline="Two Solutions. Use Either, or Both."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={Activity}
              eyebrow="Health Engagement"
              headline="ZHEP — Zimasa Health Engagement Platform"
              body="Runs health programmes for members, with community, rewards and reporting — plus ZCare, which helps patients follow the plan agreed with their provider. Works alongside a payer's existing systems."
              cta={{ label: 'Explore ZHEP', href: '/solutions/zhep/' }}
            />
            <FeatureCard
              icon={ShieldCheck}
              eyebrow="Payer Administration"
              headline="ZPS — Zimasa Payer Solution"
              body="Software for insurers, schemes and TPAs to run their administration — members, benefits, providers and claims — in one place. You remain the insurer and the decision-maker."
              cta={{ label: 'Explore ZPS', href: '/solutions/zps/' }}
            />
          </div>
        </div>
      </section>

      {/* Section 6: Zimasa GO — free to start, member and employer sign-up routes */}
      <section className="section-padding bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Start Free</p>
            <h2 className="font-display text-h2 text-dark mb-4">Zimasa GO — Free to Start</h2>
            <p className="text-body-lg text-body mb-8">
              Track your steps, join a squad of up to five and take on challenges. No contract, no credit card.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="primary" href="/get-started/?path=member">I&apos;m a Member</Button>
              <Button variant="secondary" href="/get-started/?path=employer">I&apos;m an Employer</Button>
            </div>
            <p className="text-body text-sm">Already in a company programme? <a href="https://app.zimasahealth.com" className="text-green hover:underline">Sign in at app.zimasahealth.com</a></p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/cards/go-squads.jpg" alt="Three friends putting their hands together in a park" width={800} height={800} sizes="(min-width: 1024px) 25vw, 50vw" className="block w-full h-auto rounded-[var(--radius-card)]" />
            <Image src="/images/cards/go-active-days.jpg" alt="Two people checking their fitness watches after exercise" width={800} height={800} sizes="(min-width: 1024px) 25vw, 50vw" className="block w-full h-auto rounded-[var(--radius-card)] mt-12" />
          </div>
        </div>
      </section>

      {/* Section 7: Why trust Zimasa */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader eyebrow="Why Zimasa" headline="Built to Be Trusted" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Lock size={48} className="text-green mx-auto mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">Privacy First</h3>
              <p className="text-body text-body">Sponsors see group totals, not personal health details. Zimasa is registered with Kenya&apos;s Office of the Data Protection Commissioner. <a href="/privacy-centre/" className="text-green hover:underline">Privacy Centre</a></p>
            </div>
            <div className="text-center">
              <BadgeCheck size={48} className="text-orange mx-auto mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">Vetted Providers</h3>
              <p className="text-body text-body">Clinics, labs, gyms, dietitians and therapists are checked before they join the Zimasa network.</p>
            </div>
            <div className="text-center">
              <MapPin size={48} className="text-blue mx-auto mb-4" />
              <h3 className="font-heading text-h4 text-dark mb-3">Kenya-First</h3>
              <p className="text-body text-body">Built for the Kenyan health market and East Africa — with the insurers, providers and employers who serve it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Band */}
      <CtaBand
        headline="Health That Shows Up — See It in 30 Minutes"
        subtext="Book a 30-minute demo and we'll show you how a programme runs and what you'd see after 30 and 60 days."
        primaryCta={{ label: 'Book a Demo', href: '/book-demo/' }}
        secondaryCta={{ label: 'Get Started Free', href: '/get-started/' }}
      />
    </main>
  )
}
