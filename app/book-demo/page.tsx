import type { Metadata } from 'next'
import BookDemoForm from '@/components/forms/BookDemoForm'

export const metadata: Metadata = {
  title: 'Book a Demo — See ZHEP in Action | Zimasa',
  description: 'Book a 30-minute demo of the Zimasa Health Engagement OS. We\'ll show you the platform, a sample 90-day programme design, and your first activation forecast.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/book-demo/',
    title: 'Book a Demo — See ZHEP in Action | Zimasa',
    description: 'Book a 30-minute demo of the Zimasa Health Engagement OS. We\'ll show you the platform, a sample 90-day programme design, and your first activation forecast.',
    images: [{ url: '/images/og-book-demo.jpg', width: 1200, height: 630 }],
  },
}

export default function BookDemoPage() {
  return (
    <main>
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-h2 text-dark mb-3">Book Your 30-Minute Demo</h1>
              <p className="text-body-lg text-body mb-8">Tell us about your organisation. We'll show you the platform, a sample programme design, and your first activation forecast.</p>
              <BookDemoForm />
            </div>

            {/* Right Column - Value Proof */}
            <div>
              <h3 className="font-heading text-h3 text-dark mb-8">What Happens in the Demo</h3>

              <div className="space-y-8">
                <div>
                  <p className="font-heading text-dark font-bold mb-2">1. Platform Walkthrough (10 min)</p>
                  <p className="text-body text-body">We show you ZHEP live — the four health tracks, the engagement engines, the member experience, and the reporting suite.</p>
                </div>

                <div>
                  <p className="font-heading text-dark font-bold mb-2">2. Programme Design (10 min)</p>
                  <p className="text-body text-body">We design a sample 90-day programme for your buyer type — showing how we'd structure activation, track mix, and reporting for your specific context.</p>
                </div>

                <div>
                  <p className="font-heading text-dark font-bold mb-2">3. Your Activation Forecast (10 min)</p>
                  <p className="text-body text-body">Based on your member population size and goals, we show you what 90-day activation typically looks like — and what an engaged cohort looks like at Day 90.</p>
                </div>

                <hr className="my-6" />

                <div>
                  <h4 className="font-heading text-dark mb-4">Social Proof</h4>
                  <ul className="text-body text-body space-y-2">
                    <li>✓ <strong>Target:</strong> 50–70% activation rate in 90-day programmes</li>
                    <li>✓ <strong>Target:</strong> 8–12 Active Days per member per month for engaged members</li>
                    <li>✓ <strong>Approach:</strong> PHI-avoidant — no protected health data collected</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-dark mb-4">Trust Badges</h4>
                  <ul className="text-body text-body space-y-2">
                    <li>✓ Kenya Data Protection Act 2019 compliant</li>
                    <li>✓ PHI-avoidant architecture</li>
                    <li>✓ Verified engagement data only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
