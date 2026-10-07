'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks: { label: string; href: string; secondary?: boolean }[] = [
  { label: 'Insurers & TPAs', href: '/insurers-tpas/' },
  { label: 'Providers', href: '/healthcare-providers/' },
  { label: 'Employers', href: '/employers/' },
  { label: 'Members', href: '/zimasa-go/' },
  { label: 'ZHEP', href: '/solutions/zhep/' },
  { label: 'ZCare — care continuity on ZHEP', href: '/solutions/zhep/zcare/', secondary: true },
  { label: 'ZPS', href: '/solutions/zps/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about/' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-dark" aria-label="Open menu">
        <Menu size={24} />
      </button>
      {open && (
        <div
          className="fixed inset-0 bg-white z-50 flex flex-col p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setOpen(false)}>
              <img src="/images/logo.svg" alt="Zimasa" className="h-8" />
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} className="text-dark" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={link.secondary ? 'font-heading text-[16px] font-medium text-body text-center -mt-3' : 'font-heading text-[20px] font-semibold text-dark text-center'}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Link href="/book-demo/" onClick={() => setOpen(false)} className="btn-primary text-center">
              Book a Demo
            </Link>
            <Link href="/get-started/" onClick={() => setOpen(false)} className="btn-outline text-center">
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
