// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {

      // ─── COLOURS ────────────────────────────────────────────────────────
      colors: {
        // Primary brand
        'green':        { DEFAULT: '#0A6E38', dark: '#085C2F', light: '#0D8444' },
        'navy':         { DEFAULT: '#0D2133', dark: '#091929', light: '#122B44' },
        'orange':       { DEFAULT: '#F04F0D', dark: '#CC4209', light: '#F2611F' },
        'blue':         { DEFAULT: '#0A406E', dark: '#08365D', light: '#0C4D84' },

        // Extended palette
        'light-green':  { DEFAULT: '#82B540', dark: '#6E9936', light: '#92C450' },
        'pale-green':   '#ABCF7A',
        'cream':        '#FFFBFA',

        // Neutrals
        'white':        '#FFFFFF',
        'dark':         '#222429',
        'body':         '#686666',
        'muted':        '#9E9C9C',
        'border':       'rgba(0,0,0,0.08)',
        'surface':      '#F8F9FA',
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────────────────
      fontFamily: {
        display:  ['"Montserrat Alternates"', 'sans-serif'],
        heading:  ['Montserrat', 'sans-serif'],
        ui:       ['"DM Sans"', 'sans-serif'],
        body:     ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        // Display / Hero
        'display':    ['56px', { lineHeight: '1.15', letterSpacing: '-0.02em',  fontWeight: '700' }],
        'display-sm': ['40px', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '700' }],

        // Headings
        'h2':   ['48px', { lineHeight: '1.3',  letterSpacing: '-0.013em', fontWeight: '700' }],
        'h3':   ['32px', { lineHeight: '1.3',  letterSpacing: '-0.013em', fontWeight: '700' }],
        'h4':   ['24px', { lineHeight: '1.3',  letterSpacing: 'normal',   fontWeight: '700' }],
        'h5':   ['18px', { lineHeight: '1.4',  letterSpacing: 'normal',   fontWeight: '700' }],
        'h6':   ['13px', { lineHeight: '1.4',  letterSpacing: '0.08em',   fontWeight: '700' }],

        // Body
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body':    ['16px', { lineHeight: '1.9' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5' }],

        // UI
        'label':   ['14px', { lineHeight: '1',    letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm':['12px', { lineHeight: '1',    letterSpacing: '0.05em', fontWeight: '600' }],
      },

      // ─── SPACING ──────────────────────────────────────────────────────────
      // All spacing is multiples of 8px (base unit)
      spacing: {
        // Standard spacing for @apply usage
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',

        // Section padding
        'section':    '80px',
        'section-sm': '48px',
        'section-xs': '32px',
        'hero':       '120px',
        'hero-sm':    '72px',
        'cta-band':   '64px',

        // Component
        'card':       '32px',
        'card-sm':    '24px',
        'nav':        '20px',
        'form-field': '12px',
      },

      // ─── BORDER RADIUS ────────────────────────────────────────────────────
      borderRadius: {
        'btn':    '4px',
        'card':   '8px',
        'input':  '6px',
        'badge':  '99px',
        'icon':   '50%',
        'modal':  '12px',
      },

      // ─── SHADOWS ──────────────────────────────────────────────────────────
      boxShadow: {
        'card':         '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card-hover':   '0 8px 32px rgba(10, 110, 56, 0.12)',
        'nav':          '0 2px 16px rgba(0, 0, 0, 0.08)',
        'dropdown':     '0 8px 32px rgba(0, 0, 0, 0.12)',
        'modal':        '0 24px 64px rgba(0, 0, 0, 0.16)',
        'btn':          '0 2px 8px rgba(240, 79, 13, 0.25)',
        'btn-green':    '0 2px 8px rgba(10, 110, 56, 0.25)',
        'focus':        '0 0 0 3px rgba(10, 110, 56, 0.2)',
      },

      // ─── MAX WIDTHS ────────────────────────────────────────────────────────
      maxWidth: {
        'content':  '1200px',
        'prose':    '72ch',
        'narrow':   '640px',
      },

      // ─── BREAKPOINTS (Tailwind defaults + custom) ──────────────────────────
      // sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
      // Custom: use 2xl at 1400px if needed for large content areas

      // ─── TRANSITIONS ───────────────────────────────────────────────────────
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // ─── GRADIENTS (via backgroundImage) ──────────────────────────────────
      backgroundImage: {
        'hero-green':  'linear-gradient(135deg, #0A6E38 0%, #0A406E 100%)',
        'hero-navy':   'linear-gradient(135deg, #0D2133 0%, #0A406E 100%)',
        'hero-overlay':'linear-gradient(to right, rgba(13,33,51,0.85) 0%, rgba(13,33,51,0.4) 100%)',
        'stat-card':   'linear-gradient(135deg, #0A6E38 0%, #0A406E 100%)',
        'cta-green':   'linear-gradient(135deg, #0A6E38 0%, #0D8444 100%)',
      },
    },
  },
  plugins: [],
}

export default config
