import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="section-container">
        {/* Logo & Tagline */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <Image src="/images/logo-white.svg" alt="Zimasa" width={140} height={69} style={{ height: 'auto' }} className="mb-3" />
          <p className="text-body-sm text-white/80 max-w-sm">Health that shows up.</p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Who We Serve */}
          <div>
            <h3 className="font-heading text-h5 mb-4">Who We Serve</h3>
            <ul className="space-y-2">
              <li><Link href="/insurers-tpas/" className="text-white/70 hover:text-white transition-colors">Insurers & TPAs</Link></li>
              <li><Link href="/healthcare-providers/" className="text-white/70 hover:text-white transition-colors">Providers</Link></li>
              <li><Link href="/employers/" className="text-white/70 hover:text-white transition-colors">Employers</Link></li>
              <li><Link href="/zimasa-go/" className="text-white/70 hover:text-white transition-colors">Members / Zimasa GO</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading text-h5 mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/zhep/" className="text-white/70 hover:text-white transition-colors">ZHEP</Link></li>
              <li className="pl-3"><Link href="/solutions/zhep/zcare/" className="text-white/70 hover:text-white transition-colors">ZCare — care continuity</Link></li>
              <li><Link href="/solutions/zps/" className="text-white/70 hover:text-white transition-colors">ZPS</Link></li>
              <li><Link href="/get-started/" className="text-white/70 hover:text-white transition-colors">Get Started Free</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-h5 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/insights/" className="text-white/70 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/book-demo/" className="text-white/70 hover:text-white transition-colors">Book a Demo</Link></li>
              <li><Link href="/contact-us/" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-h5 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@zimasahealth.com" className="text-white/70 hover:text-white transition-colors">hello@zimasahealth.com</a></li>
              <li><a href="tel:+254710241892" className="text-white/70 hover:text-white transition-colors">+254710241892</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8 pb-8 border-b border-white/10">
          <a href="https://linkedin.com/company/zimasa" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.25 3.5h-2.5v8.5h2.5z"/></svg>
          </a>
          <a href="https://twitter.com/zimasahealth" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.87.39-1.8.65-2.78.77 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.15 1.1C7.7 8.94 4.1 7.08 1.67 4.18c-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.38 3.29 4.48 3.33-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.7-7.35 13.7-13.71 0-.21 0-.41-.01-.61.94-.68 1.76-1.53 2.41-2.5z"/></svg>
          </a>
          <a href="https://facebook.com/zimasahealth" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://instagram.com/zimasahealth" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-white/60 text-sm">
          <p>&copy; 2026 Zimasa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-centre/" className="hover:text-white transition-colors">Privacy Centre</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
