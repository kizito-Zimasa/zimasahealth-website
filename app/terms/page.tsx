import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Zimasa Health Engagement Platform',
  description: 'Terms of Service for Zimasa Health Engagement Platform. Read our full terms, member obligations, provider requirements, and dispute resolution.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/terms/',
    title: 'Terms of Service — Zimasa Health Engagement Platform',
    description: 'Terms of Service for Zimasa Health Engagement Platform. Read our full terms, member obligations, provider requirements, and dispute resolution.',
    images: [{ url: '/images/og-terms.jpg', width: 1200, height: 630 }],
  },
}

export default function TermsPage() {
  return (
    <main>
      <section className="section-padding border-t-8 border-navy bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <div className="mb-8">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="font-display text-h2 text-dark mb-6">Terms of Service</h1>
            <p className="text-body-lg text-body">
              These Terms of Service govern your use of the Zimasa Health Engagement Platform ("Platform"). By accessing or using the Platform, you agree to these terms. If you do not agree, please do not use the Platform.
            </p>
            <p className="text-body text-muted mt-4 text-sm">
              Last updated: May 3, 2026. Effective date: May 3, 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-h2 text-dark mb-6">1. Definitions</h2>
              <p className="text-body-lg text-body mb-4">
                <strong>"Member"</strong> — An individual enrolled in a health engagement programme through an employer, payer, or scheme.
              </p>
              <p className="text-body-lg text-body mb-4">
                <strong>"Provider"</strong> — A healthcare provider (gym, clinic, dietitian, therapist, etc.) vetted and onboarded to the Zimasa Network.
              </p>
              <p className="text-body-lg text-body mb-4">
                <strong>"Payer"</strong> — A health insurance provider, medical scheme, or third-party administrator using Zimasa to run health engagement programmes.
              </p>
              <p className="text-body-lg text-body mb-4">
                <strong>"Employer"</strong> — An organisation using Zimasa to manage wellness programmes for their employees.
              </p>
              <p className="text-body-lg text-body mb-4">
                <strong>"Active Day"</strong> — A calendar day on which a Member completes one or more verified engagement activities (gym visit, provider appointment, content completion, etc.).
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">2. Member Obligations</h2>
              <p className="text-body-lg text-body mb-4">
                As a Member, you agree to:
              </p>
              <ul className="text-body text-body space-y-3 ml-6">
                <li>• Provide accurate and complete information during enrollment</li>
                <li>• Use the Platform only for your own health and wellness purposes</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Respect the intellectual property rights of Zimasa and its partners</li>
                <li>• Not attempt to hack, override, or disable any security features</li>
                <li>• Not share your login credentials with others</li>
                <li>• Not use the Platform to harass, abuse, or threaten others</li>
                <li>• Maintain accurate contact information on file</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">3. Provider Obligations</h2>
              <p className="text-body-lg text-body mb-4">
                Providers who join the Zimasa Network agree to:
              </p>
              <ul className="text-body text-body space-y-3 ml-6">
                <li>• Maintain all required licenses, certifications, and insurance</li>
                <li>• Operate within applicable health and safety regulations</li>
                <li>• Provide accurate service descriptions and pricing</li>
                <li>• Verify member check-ins using the Zimasa system</li>
                <li>• Report any data breaches or security incidents immediately</li>
                <li>• Maintain professional standards in all member interactions</li>
                <li>• Comply with all Zimasa Network onboarding and quality standards</li>
                <li>• Not discriminate against Members based on protected characteristics</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">4. Payment & Refunds</h2>
              <p className="text-body-lg text-body mb-4">
                <strong>Member Payments:</strong> Members may make payments through the Platform for services, rewards, or programme fees using the payment methods available in their region (MPESA, card, etc.). All payments are processed securely and subject to the payment processor's terms.
              </p>
              <p className="text-body-lg text-body mb-4">
                <strong>Refund Policy:</strong> Refunds are issued on a case-by-case basis. Contact support at <a href="mailto:hello@zimasahealth.com" className="text-green hover:underline">hello@zimasahealth.com</a> to request a refund.
              </p>
              <p className="text-body-lg text-body mb-4">
                <strong>Payer & Employer Billing:</strong> Billing terms are specified in the Service Agreement. Invoices are issued monthly or according to contract terms.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">5. Limitation of Liability</h2>
              <p className="text-body-lg text-body mb-4">
                To the maximum extent permitted by law, Zimasa is not liable for:
              </p>
              <ul className="text-body text-body space-y-3 ml-6 mb-4">
                <li>• Indirect, incidental, special, or consequential damages</li>
                <li>• Loss of profits, revenue, data, or use</li>
                <li>• Service interruptions or unavailability (except as provided in SLAs)</li>
                <li>• Member health outcomes or medical advice</li>
                <li>• Actions or services provided by third-party providers</li>
              </ul>
              <p className="text-body-lg text-body">
                Zimasa's total liability under these Terms shall not exceed the fees paid in the past 12 months.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">6. Disclaimer of Health Advice</h2>
              <p className="text-body-lg text-body mb-4">
                The Zimasa Platform is a health engagement tool, not a medical service. Zimasa does not:
              </p>
              <ul className="text-body text-body space-y-3 ml-6">
                <li>• Provide medical diagnoses or treatment recommendations</li>
                <li>• Act as a substitute for professional medical advice</li>
                <li>• Guarantee health outcomes based on engagement</li>
                <li>• Treat or cure any medical condition</li>
              </ul>
              <p className="text-body-lg text-body mt-4">
                Always consult with a licensed healthcare provider for medical advice. The Platform is designed to encourage healthier behaviours and increase preventive care utilisation.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">7. Data & Privacy</h2>
              <p className="text-body-lg text-body mb-4">
                Your use of the Platform is governed by our Privacy Policy. By using the Platform, you consent to our collection, use, and disclosure of your data as described in the Privacy Policy.
              </p>
              <p className="text-body-lg text-body">
                Zimasa does not store protected health information (PHI) and complies with the Kenya Data Protection Act 2019.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">8. Intellectual Property</h2>
              <p className="text-body-lg text-body mb-4">
                All content, features, and functionality of the Platform — including text, graphics, logos, icons, images, clips, downloads, and software — are owned by Zimasa or its licensors.
              </p>
              <p className="text-body-lg text-body mb-4">
                You may not reproduce, duplicate, copy, sell, or exploit any portion of the Platform without Zimasa's prior written consent.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">9. Termination</h2>
              <p className="text-body-lg text-body mb-4">
                Zimasa may suspend or terminate your access to the Platform if you:
              </p>
              <ul className="text-body text-body space-y-3 ml-6">
                <li>• Violate these Terms of Service</li>
                <li>• Engage in illegal or fraudulent activity</li>
                <li>• Harass or threaten other users or staff</li>
                <li>• Breach your Programme Agreement or contract with your employer/payer</li>
              </ul>
              <p className="text-body-lg text-body mt-4">
                You may also request account termination at any time by contacting <a href="mailto:hello@zimasahealth.com" className="text-green hover:underline">hello@zimasahealth.com</a>.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">10. Dispute Resolution</h2>
              <p className="text-body-lg text-body mb-4">
                If you have a dispute with Zimasa, please contact us first at <a href="mailto:hello@zimasahealth.com" className="text-green hover:underline">hello@zimasahealth.com</a>. We will attempt to resolve the issue within 30 days.
              </p>
              <p className="text-body-lg text-body mb-4">
                If the dispute cannot be resolved informally, both parties agree to attempt mediation before pursuing legal action. For Service Agreement disputes, the terms specified in the contract will govern.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">11. Governing Law</h2>
              <p className="text-body-lg text-body mb-4">
                These Terms of Service are governed by the laws of Kenya. Any legal action or proceeding shall take place in the courts of Kenya.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">12. Changes to Terms</h2>
              <p className="text-body-lg text-body mb-4">
                Zimasa may update these Terms of Service at any time. Your continued use of the Platform constitutes acceptance of the updated Terms.
              </p>
              <p className="text-body-lg text-body">
                We will provide notice of material changes via email or in-app notification.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h2 className="font-display text-h2 text-dark mb-6">13. Contact</h2>
              <p className="text-body-lg text-body mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <p className="text-body text-body">
                <strong>Zimasa Health</strong><br />
                Email: <a href="mailto:legal@zimasahealth.com" className="text-green hover:underline">legal@zimasahealth.com</a><br />
                Location: Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
