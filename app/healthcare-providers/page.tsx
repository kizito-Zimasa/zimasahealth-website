import type { Metadata } from 'next'
import Image from 'next/image'
import { Network, Route, BadgeCheck, Lock } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import SectionHeader from '@/components/sections/SectionHeader'
import FeatureCard from '@/components/sections/FeatureCard'
import CtaBand from '@/components/sections/CtaBand'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Healthcare Providers — Provider Network & ZCare Care Continuity',
  description: 'Join Zimasa\'s curated provider network and use ZCare to keep members on agreed care pathways between visits — with follow-through you can see.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/healthcare-providers/',
    title: 'Healthcare Providers — Provider Network & ZCare Care Continuity | Zimasa',
    description: 'Join Zimasa\'s curated provider network and use ZCare to keep members on agreed care pathways between visits — with follow-through you can see.',
  },
}

// "Apply to Join the Network" preselects the "Provider Network" enquiry type on the contact form.
// A dedicated provider application form can replace this later.
const APPLY_HREF = '/contact-us/?enquiry=provider'
const ZCARE_HREF = '/solutions/zhep/zcare/'

const providerCategories = [
  { image: '/images/cards/provider-clinic.jpg', alt: 'A clinician explaining an X-ray to a patient', title: 'Clinics and Doctors', desc: 'Primary care clinics and doctors delivering consultations and follow-through sessions for members of Zimasa programmes.' },
  { image: '/images/cards/provider-diagnostics.jpg', alt: 'A laboratory technician working with sample tubes at a lab bench', title: 'Diagnostics and Screening', desc: 'Laboratories and screening providers delivering wellness checks and preventive screening packages.' },
  { image: '/images/cards/provider-dietitian.jpg', alt: 'A dietitian writing a weekly meal plan with a client beside a bowl of fruit', title: 'Dietitians and Nutrition', desc: 'Registered dietitians and nutritionists supporting the NOURISH Track and agreed care pathways.' },
  { image: '/images/cards/provider-counselling.jpg', alt: 'A counsellor and client in conversation in a calm room', title: 'Mental Health', desc: 'Licensed therapists and counsellors delivering sessions within the CARE Track.' },
  { image: '/images/cards/provider-physio.jpg', alt: 'A physiotherapist guiding an older man through an arm-raise exercise', title: 'Physiotherapy', desc: 'Registered physiotherapists supporting movement, recovery and follow-through sessions.' },
  { image: '/images/cards/provider-gym.jpg', alt: 'A small group doing lunges together in an indoor fitness studio', title: 'Gyms and Movement', desc: 'Gyms, fitness centres and movement providers delivering the MOVE Track.' },
]

const steps = [
  { n: '1', colour: 'text-green', title: 'Apply', desc: 'Tell us about your practice or facility, your credentials and the services you offer.' },
  { n: '2', colour: 'text-orange', title: 'Agreement', desc: 'We verify licences and credentials, and agree the services you will deliver and the standards we work to.' },
  { n: '3', colour: 'text-blue', title: 'Onboarding', desc: 'We set up your services on the platform, including bookings and check-in verification.' },
  { n: '4', colour: 'text-navy', title: 'Bookings', desc: 'Members of Zimasa programmes book your services through the platform, and completed sessions are verified.' },
]

export default function HealthcareProvidersPage() {
  return (
    <main>
      <div className="section-container py-3">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Healthcare Providers', href: '/healthcare-providers/', current: true }]} className="mb-0" />
      </div>

      {/* DRAFT-COPY 2026-10: Founder review */}
      <Hero
        eyebrow="For Healthcare Providers"
        headline="Be the provider members keep coming back to."
        subheadline="Join Zimasa's curated provider network and use ZCare to keep members on agreed care pathways between visits — with follow-through you can see."
        primaryCta={{ label: 'Apply to Join the Network', href: APPLY_HREF }}
        secondaryCta={{ label: 'Explore ZCare', href: ZCARE_HREF }}
        backgroundVariant="green"
        image={{ src: '/images/hero/providers-hero.jpg', alt: 'A clinician holding a patient’s hands in reassurance during a consultation', position: '45% 50%', priority: true }}
      />

      {/* DRAFT-COPY 2026-10: Founder review */}
      <section id="two-ways" className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Two Ways to Work with Zimasa"
            headline="Join the Network. Keep Care Continuous."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={Network}
              eyebrow="1 — Provider Network"
              headline="Deliver services to members of Zimasa programmes"
              body="Deliver screenings, consultations, follow-through sessions and wellness services to members of Zimasa programmes. Bookings and verification run through the platform."
              cta={{ label: 'Apply to Join the Network', href: APPLY_HREF }}
            />
            <FeatureCard
              icon={Route}
              eyebrow="2 — Care Continuity with ZCare"
              headline="Keep members on agreed care pathways"
              body="ZCare operationalises agreed care pathways and makes follow-through measurable — between visits, after screening, across the care team. It supports your clinical judgement and the payer's medical team; it does not replace them, and it does not diagnose, treat or prescribe."
              cta={{ label: 'Learn About ZCare', href: ZCARE_HREF }}
            />
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="ZCare — Care Continuity on ZHEP"
            headline="Follow-Through You Can See"
            subheadline="ZCare is part of ZHEP, the Zimasa Health Engagement Platform. It lets your team:"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Agreed Care Pathways', desc: 'Put the care plan agreed in the clinic into practice, step by step, between visits.' },
              { title: 'Reminders and Bookings', desc: 'Prompt members towards their next agreed step and let them book it through the platform.' },
              { title: 'Follow-Through Sessions', desc: 'Deliver follow-through sessions after screening or a consultation, verified on completion.' },
              { title: 'Care-Team Visibility', desc: 'See members’ progress on their programme, with member consent.' },
              { title: 'Measurable Follow-Through', desc: 'Know which agreed next steps were taken — not just which appointments were booked.' },
            ].map((item) => (
              <div key={item.title} className="card bg-white">
                <h5 className="font-heading text-dark mb-2">{item.title}</h5>
                <p className="text-body text-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Who We Work With"
            headline="Providers Across the Care Journey"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providerCategories.map(({ image, alt, title, desc }) => (
              <div key={title} className="card overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="-mx-8 -mt-8 mb-6 block aspect-[4/3] w-[calc(100%+4rem)] max-w-none object-cover"
                />
                <h4 className="font-heading text-h4 text-dark mb-3">{title}</h4>
                <p className="text-body text-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      <section id="how-it-works" className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="How It Works"
            headline="From Application to First Booking"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.n} className="card text-center bg-white">
                <p className={`font-display text-h3 ${step.colour} mb-2`}>{step.n}</p>
                <h5 className="font-heading text-dark mb-2">{step.title}</h5>
                <p className="text-body text-body text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRAFT-COPY 2026-10: Founder review */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Curated, Not an Open Marketplace"
            headline="Every Provider Is Vetted Before Going Live"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <BadgeCheck size={40} className="text-green mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">A Curated Network</h4>
              <p className="text-body text-body">Zimasa&apos;s provider network is curated, not an open marketplace. We verify every provider before they go live, and quality review continues after onboarding — so insurers and members can trust where a booking leads.</p>
            </div>

            <div className="card">
              <Lock size={40} className="text-blue mb-4" />
              <h4 className="font-heading text-h4 text-dark mb-3">Privacy-Governed by Design</h4>
              <p className="text-body text-body">In employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Provider contexts may handle regulated health data only under governance conditions. Aligned with the Kenya Data Protection Act, 2019. Zimasa is registered with the Office of the Data Protection Commissioner (ODPC) as a Data Controller and Data Processor.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to Join the Network?"
        subtext="Tell us about your practice or facility. Our provider team will review your application and be in touch."
        primaryCta={{ label: 'Apply to Join the Network', href: APPLY_HREF }}
        secondaryCta={{ label: 'Explore ZCare', href: ZCARE_HREF }}
      />
    </main>
  )
}
