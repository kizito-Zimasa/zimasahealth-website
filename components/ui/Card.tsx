import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn('card', !hover && 'hover:shadow-card hover:translate-y-0', className)}>
      {children}
    </div>
  )
}
