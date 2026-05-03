'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const solutions = [
  { label: 'ZHEP', subtitle: 'Health Engagement Platform', href: '/solutions/zhep/' },
  { label: 'ZPS', subtitle: 'Zimasa Payer Solution', href: '/solutions/zps/' },
]

export default function NavDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 font-ui text-[14px] font-medium text-dark hover:text-green transition-colors duration-150"
        aria-expanded={open}
      >
        Solutions <ChevronDown size={14} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-[260px] bg-white rounded-b-card border border-black/5 shadow-dropdown z-50">
          {solutions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 hover:bg-cream transition-colors duration-150"
            >
              <p className="font-ui text-[14px] font-semibold text-dark">{item.label}</p>
              <p className="font-ui text-[12px] text-body">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
