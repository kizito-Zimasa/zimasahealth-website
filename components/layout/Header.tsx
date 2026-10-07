'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavDropdown from './NavDropdown'
import MobileMenu from './MobileMenu'

const primaryLinks = [
  { label: 'Insurers & TPAs', href: '/insurers-tpas/' },
  { label: 'Employers', href: '/employers/' },
  { label: 'Members', href: '/zimasa-go/' },
  { label: 'Providers', href: '/healthcare-providers/' },
]

const secondaryLinks = [
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about/' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 h-[72px] bg-white border-b border-black/5 transition-shadow duration-200 ${scrolled ? 'shadow-nav' : ''}`}>
      <div className="section-container h-full flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image src="/images/logo.svg" alt="Zimasa" width={140} height={69} style={{ height: 'auto' }} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-ui text-[14px] font-medium text-dark hover:text-green transition-colors duration-150">
              {link.label}
            </Link>
          ))}
          <NavDropdown />
          {secondaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-ui text-[14px] font-medium text-dark hover:text-green transition-colors duration-150">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/get-started/" className="btn-secondary">
            Get Started
          </Link>
          <Link href="/book-demo/" className="btn-primary">
            Book Demo
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
