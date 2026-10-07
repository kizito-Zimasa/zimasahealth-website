interface StructuredDataProps {
  data: Record<string, unknown>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zimasa',
  url: 'https://www.zimasahealth.com',
  logo: 'https://www.zimasahealth.com/images/logo.svg',
  slogan: 'Health that shows up.',
  description: 'Zimasa is a Nairobi-based Health Engagement OS for insurers, TPAs and providers in East Africa — activating members, making follow-through measurable, and proving engagement with verified Active Days.',
  sameAs: [
    'https://www.linkedin.com/company/zimasa',
    'https://twitter.com/zimasahealth',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'hello@zimasahealth.com',
    availableLanguage: ['en'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nairobi',
    addressCountry: 'KE',
  },
}

export function createArticleSchema(article: {
  title: string
  description: string
  image?: string
  datePublished: string
  author?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    // Default to the site-level generated Open Graph image (app/opengraph-image.tsx).
    image: article.image || 'https://www.zimasahealth.com/opengraph-image',
    datePublished: article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || 'Zimasa Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zimasa',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.zimasahealth.com/images/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
