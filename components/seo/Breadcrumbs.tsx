import { Fragment } from 'react'
import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.zimasahealth.com${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap gap-2 text-sm text-muted">
          {items.map((item, index) => (
            <Fragment key={item.href}>
              <li>
                {item.current ? (
                  <span className="text-body font-medium">{item.label}</span>
                ) : (
                  <Link href={item.href} className="text-green hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
              {index < items.length - 1 && <li className="text-muted">/</li>}
            </Fragment>
          ))}
        </ol>
      </nav>
    </>
  )
}
