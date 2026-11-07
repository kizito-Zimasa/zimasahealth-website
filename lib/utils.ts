// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// The site's custom font-size tokens (--text-* in app/globals.css). Without this,
// tailwind-merge reads e.g. `text-h2` as a text *colour* and drops it whenever a
// colour class such as `text-dark` follows, so headings rendered at body size.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'display-sm', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-lg', 'body-sm', 'label', 'label-sm'] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
