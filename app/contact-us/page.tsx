import type { Metadata } from 'next'
import ContactUsForm from '@/components/forms/ContactUsForm'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Us — Let\'s Talk | Zimasa',
  description: 'Get in touch with the Zimasa team. We\'ll respond within 24 business hours. Sales, partnerships, press, and general inquiries welcome.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/contact-us/',
    title: 'Contact Us — Let\'s Talk | Zimasa',
    description: 'Get in touch with the Zimasa team. We\'ll respond within 24 business hours. Sales, partnerships, press, and general inquiries welcome.',
  },
}

export default function ContactUsPage() {
  return (
    <main>
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact-us/', current: true }]} className="mb-4" />
              <h1 className="font-display text-h2 text-dark mb-3">Get in Touch</h1>
              <p className="text-body-lg text-body mb-8">Tell us about your project, question, or partnership opportunity. We respond within 24 business hours.</p>
              <ContactUsForm />
            </div>

            {/* Right Column - Contact Details */}
            <div>
              <h3 className="font-heading text-h3 text-dark mb-8">Other Ways to Reach Us</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-heading text-dark mb-2">Email</h4>
                  <p className="text-body text-body">
                    <a href="mailto:hello@zimasahealth.com" className="text-green hover:underline">hello@zimasahealth.com</a>
                  </p>
                  <p className="text-body text-muted text-sm mt-2">General inquiries and partnerships</p>
                </div>

                <div>
                  <h4 className="font-heading text-dark mb-2">Sales</h4>
                  <p className="text-body text-body">
                    <a href="mailto:sales@zimasahealth.com" className="text-green hover:underline">sales@zimasahealth.com</a>
                  </p>
                  <p className="text-body text-muted text-sm mt-2">Demo requests, pricing, contract questions</p>
                </div>

                <div>
                  <h4 className="font-heading text-dark mb-2">Provider Network</h4>
                  <p className="text-body text-body">
                    <a href="mailto:providers@zimasahealth.com" className="text-green hover:underline">providers@zimasahealth.com</a>
                  </p>
                  <p className="text-body text-muted text-sm mt-2">Provider onboarding and questions</p>
                </div>

                <hr className="my-6" />

                <div>
                  <h4 className="font-heading text-dark mb-4">Location</h4>
                  <p className="text-body text-body">Nairobi, Kenya</p>
                </div>

                <div>
                  <h4 className="font-heading text-dark mb-4">Response Time</h4>
                  <p className="text-body text-body">Monday–Friday, 9am–5pm EAT</p>
                  <p className="text-body text-muted text-sm mt-2">We respond within 24 business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
