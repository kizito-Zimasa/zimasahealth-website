'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const solutions = [
  { label: 'ZHEP', subtitle: 'Health Engagement Platform — incl. ZCare care continuity', href: '/solutions/zhep/', secondary: false },
  { label: 'ZCare', subtitle: 'Care continuity on ZHEP', href: '/solutions/zhep/zcare/', secondary: true },
  { label: 'ZPS', subtitle: 'Zimasa Payer Solution', href: '/solutions/zps/', secondary: false },
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
              className={`block py-3 hover:bg-cream transition-colors duration-150 ${item.secondary ? 'ml-5 pl-4 pr-5 border-l-2 border-green/40' : 'px-5'}`}
            >
              <p className={`font-ui font-semibold text-dark ${item.secondary ? 'text-[13px]' : 'text-[14px]'}`}>{item.label}</p>
              <p className="font-ui text-[12px] text-body">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
