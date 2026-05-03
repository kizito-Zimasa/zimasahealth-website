import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'navy' | 'blue' | 'orange'
  className?: string
}

const variantClasses = {
  green:  'bg-green/10 text-green',
  navy:   'bg-navy/10 text-navy',
  blue:   'bg-blue/10 text-blue',
  orange: 'bg-orange/10 text-orange',
}

export default function Badge({ children, variant = 'green', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-badge font-ui text-label-sm',
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  )
}
