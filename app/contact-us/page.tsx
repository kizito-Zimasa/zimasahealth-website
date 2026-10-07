import type { Metadata } from 'next'
import ContactUsForm from '@/components/forms/ContactUsForm'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

// FOUNDER-REVIEW: "We respond within 24 business hours" removed from metadata and page copy (unverified response SLA). Confirm a commitment before restoring.

export const metadata: Metadata = {
  title: 'Contact Us — Let\'s Talk',
  description: 'Get in touch with the Zimasa team. Sales, provider network, partnerships, press and general enquiries welcome.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/contact-us/',
    title: 'Contact Us — Let\'s Talk | Zimasa',
    description: 'Get in touch with the Zimasa team. Sales, provider network, partnerships, press and general enquiries welcome.',
  },
}

export default async function ContactUsPage({
  searchParams,
}: {
  searchParams: Promise<{ enquiry?: string | string[] }>
}) {
  const { enquiry } = await searchParams
  const initialEnquiry = typeof enquiry === 'string' ? enquiry : undefined

  return (
    <main>
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact-us/', current: true }]} className="mb-4" />
              <h1 className="font-display text-h2 text-dark mb-3">Get in Touch</h1>
              <p className="text-body-lg text-body mb-8">Tell us about your question, partnership or provider enquiry, and the right person on our team will get back to you.</p>
              <ContactUsForm initialEnquiry={initialEnquiry} />
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
                  <p className="text-body text-muted text-sm mt-2">General enquiries and partnerships</p>
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
                  <h4 className="font-heading text-dark mb-4">Office Hours</h4>
                  <p className="text-body text-body">Monday–Friday, 9am–5pm EAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
