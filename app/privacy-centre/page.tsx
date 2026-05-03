import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Centre — Your Data, Your Control | Zimasa',
  description: 'Zimasa\'s privacy-first approach. We don\'t store protected health information. Full transparency on data handling, member control, and compliance standards.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/privacy-centre/',
    title: 'Privacy Centre — Your Data, Your Control | Zimasa',
    description: 'Zimasa\'s privacy-first approach. We don\'t store protected health information. Full transparency on data handling, member control, and compliance standards.',
    images: [{ url: '/images/og-privacy.jpg', width: 1200, height: 630 }],
  },
}

export default function PrivacyCentrePage() {
  return (
    <main>
      <section className="section-padding border-t-8 border-green bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <div className="mb-8">
            <p className="eyebrow mb-4">Privacy & Data</p>
            <h1 className="font-display text-h2 text-dark mb-6">Privacy Centre</h1>
            <p className="text-body-lg text-body">
              Zimasa is built on a simple principle: members control their data. We don't store protected health information, and every member can request access to, correction of, or deletion of their data at any time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-narrow mx-auto">
          <h2 className="font-display text-h2 text-dark mb-8">Our Approach</h2>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">PHI-Avoidant Architecture</h3>
              <p className="text-body-lg text-body mb-4">
                Zimasa is designed to measure engagement and activation without collecting, storing, or processing protected health information (PHI). We do not access:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• Medical diagnoses or treatment history</li>
                <li>• Prescription or medication data</li>
                <li>• Genetic information</li>
                <li>• Mental health or counselling records</li>
                <li>• Lab results or clinical test outcomes</li>
              </ul>
              <p className="text-body-lg text-body">
                What we do track: verified engagement events (gym visits, dietitian appointments, therapy sessions, educational content completion) and member-selected health goals.
              </p>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Member Data Rights</h3>
              <p className="text-body-lg text-body mb-4">
                Under the Kenya Data Protection Act 2019, members have the right to:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• <strong>Access</strong> — Request a copy of all personal data Zimasa holds about them</li>
                <li>• <strong>Correction</strong> — Update inaccurate or incomplete information</li>
                <li>• <strong>Deletion</strong> — Request deletion of personal data (subject to legal retention requirements)</li>
                <li>• <strong>Portability</strong> — Download their data in portable format</li>
                <li>• <strong>Objection</strong> — Opt out of specific data processing activities</li>
              </ul>
              <p className="text-body-lg text-body">
                All requests are processed within 30 days. Members can submit requests via their member portal or by emailing <a href="mailto:privacy@zimasahealth.com" className="text-green hover:underline">privacy@zimasahealth.com</a>.
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
                <li>• <strong>Enrollment</strong> — Programme affiliation, employer or scheme membership</li>
                <li>• <strong>Health Goals</strong> — Member-selected wellness interests (e.g., "improve fitness", "manage nutrition")</li>
                <li>• <strong>Engagement Events</strong> — Verified visits to providers, classes attended, content completed</li>
                <li>• <strong>Preferences</strong> — Notification settings, communication preferences, reward preferences</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Data Security</h3>
              <p className="text-body-lg text-body mb-4">
                Zimasa implements industry-standard security controls:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>• Role-based access control (RBAC) limiting who can view member data</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Secure data deletion upon request or programme end</li>
                <li>• Multi-factor authentication for all team access</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Compliance</h3>
              <p className="text-body-lg text-body mb-4">
                Zimasa complies with all applicable data protection regulations:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• <strong>Kenya Data Protection Act 2019</strong> — Full compliance with KDPA requirements</li>
                <li>• <strong>NHIF Regulations</strong> — Compliance with NHIF data handling standards for health schemes</li>
                <li>• <strong>HIPAA-Adjacent Practices</strong> — While HIPAA does not apply in Kenya, we follow HIPAA best practices for health data security</li>
              </ul>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="font-heading text-h3 text-dark mb-4">Payer & Employer Data</h3>
              <p className="text-body-lg text-body mb-4">
                For payers and employers, Zimasa provides:
              </p>
              <ul className="text-body text-body space-y-2 ml-6 mb-6">
                <li>• <strong>Aggregated Reporting</strong> — Cohort-level activation, not individual member health data</li>
                <li>• <strong>White-Label Data</strong> — Payers/employers control their own member-facing brand and communication</li>
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
                <strong>Data Protection Officer</strong><br />
                Email: <a href="mailto:privacy@zimasahealth.com" className="text-green hover:underline">privacy@zimasahealth.com</a><br />
                Response time: 24 business hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
