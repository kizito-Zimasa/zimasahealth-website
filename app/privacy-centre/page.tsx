import type { Metadata } from 'next'
import Breadcrumbs from '@/components/seo/Breadcrumbs'

/*
 * FOUNDER-REVIEW (Privacy Centre, content refresh 2026-10):
 * The following statements were removed from visible copy pending verification
 * by the Technology Lead. Restore any of them only once evidenced.
 *   - "Encryption in transit (TLS 1.3) and at rest (AES-256)"
 *   - "Regular security audits and penetration testing"
 *   - "Multi-factor authentication for all team access"
 *   - "Secure data deletion upon request or programme end" (as a stated security control)
 *   - "Data Protection Officer" title and "Response time: 24 business hours"
 *     (DPO appointment and response SLA unconfirmed; contact now shown as "Privacy Team")
 *   - "All requests are processed within 30 days" (request SLA)
 *   - "via their member portal" (member portal not confirmed)
 *   - Portability reworded from "Download their data" to "Request their data" (self-service download not confirmed)
 * Also removed as unsupported (not for restoration): NHIF compliance claim; HIPAA best-practice
 * claim; "PHI-avoidant" / "we don't store PHI" statements; "White-Label Data" bullet.
 * C-04: "therapy sessions" removed from the engagement-event examples. Confirm Doctrine tier
 * treatment before naming any mental-health service type.
 * Whole page is under legal review against Health Data Doctrine v1.2 (S10, F11).
 */

const pageDescription =
  'Privacy-governed by design. In employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Aligned with the Kenya Data Protection Act, 2019.'

export const metadata: Metadata = {
  title: 'Privacy Centre — Your Data, Your Control',
  description: pageDescription,
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/privacy-centre/',
    title: 'Privacy Centre — Your Data, Your Control | Zimasa',
    description: pageDescription,
  },
}

export default function PrivacyCentrePage() {
  return (
    <main>
      <section className="section-padding border-t-8 border-green bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Centre', href: '/privacy-centre/', current: true }]} className="mb-4" />
          <div className="mb-8">
            <p className="eyebrow mb-4">Privacy & Data</p>
            <h1 className="font-display text-h2 text-dark mb-6">Privacy Centre</h1>
            <p className="text-body-lg text-body">
              Zimasa is built on a simple principle: members control their data. Privacy-governed by design: in employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Every member can request access to, correction of, or deletion of their data at any time.
            </p>
            <p className="text-body text-muted mt-4 text-sm">
              This page is being reviewed by our legal advisers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <h2 className="font-display text-h2 text-dark mb-8">Our Approach</h2>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Privacy-Governed Architecture</h3>
              <p className="text-body-lg text-body mb-4">
                Privacy-governed by design. In employer, payer and freemium contexts, Zimasa stores verification of engagement events, not clinical data. Provider contexts may handle regulated health data only under governance conditions.
              </p>
              <p className="text-body-lg text-body mb-4">
                In employer, payer and freemium contexts, Zimasa does not store:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• Medical diagnoses or treatment history</li>
                <li>• Prescription or medication data</li>
                <li>• Genetic information</li>
                <li>• Mental health or counselling records</li>
                <li>• Lab results or clinical test outcomes</li>
              </ul>
              <p className="text-body-lg text-body">
                What we do record: verification that an engagement event took place (for example, a class attended, a booked session completed, or educational content completed) and member-selected health goals.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Member Data Rights</h3>
              <p className="text-body-lg text-body mb-4">
                Under the Kenya Data Protection Act, 2019, members have the right to:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• <strong>Access</strong> — Request a copy of all personal data Zimasa holds about them</li>
                <li>• <strong>Correction</strong> — Update inaccurate or incomplete information</li>
                <li>• <strong>Deletion</strong> — Request deletion of personal data (subject to legal retention requirements)</li>
                <li>• <strong>Portability</strong> — Request their data in a portable format</li>
                <li>• <strong>Objection</strong> — Opt out of specific data processing activities</li>
              </ul>
              <p className="text-body-lg text-body">
                Members can submit requests by emailing <a href="mailto:privacy@zimasahealth.com" className="text-green hover:underline">privacy@zimasahealth.com</a>.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Data We Collect</h3>
              <p className="text-body-lg text-body mb-4">
                Zimasa collects only the data necessary to run health engagement programmes:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• <strong>Identity</strong> — Name, phone, email, date of birth, gender (for demographic tracking)</li>
                <li>• <strong>Enrolment</strong> — Programme affiliation, employer or scheme membership</li>
                <li>• <strong>Health Goals</strong> — Member-selected wellness interests (e.g., &ldquo;improve fitness&rdquo;, &ldquo;manage nutrition&rdquo;)</li>
                <li>• <strong>Engagement Events</strong> — Verified visits to providers, classes attended, content completed</li>
                <li>• <strong>Preferences</strong> — Notification settings, communication preferences, reward preferences</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Data Security</h3>
              <p className="text-body-lg text-body mb-4">
                Zimasa protects member data with these controls:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• Role-based access controls limiting who can view member data</li>
                <li>• Audit trails recording access to member data</li>
                <li>• Consent management, so members decide what is shared</li>
                <li>• Data minimisation: we collect only what a programme needs</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Compliance</h3>
              <p className="text-body-lg text-body mb-4">
                Aligned with the Kenya Data Protection Act, 2019. Zimasa is registered with the Office of the Data Protection Commissioner (ODPC) as a Data Controller and Data Processor.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Payer & Employer Data</h3>
              <p className="text-body-lg text-body mb-4">
                For payers and employers, Zimasa provides:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• <strong>Aggregate Reporting</strong> — Aggregate reporting only, with a minimum cohort of 25. Individual results never go to employers.</li>
                <li>• <strong>No Third-Party Sale</strong> — Zimasa does not sell or share payer/employer data with third parties</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Contact the Privacy Team</h3>
              <p className="text-body-lg text-body mb-4">
                Questions about privacy, data handling, or data rights? Reach out:
              </p>
              <p className="text-body text-body">
                <strong>Privacy Team</strong><br />
                Email: <a href="mailto:privacy@zimasahealth.com" className="text-green hover:underline">privacy@zimasahealth.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
