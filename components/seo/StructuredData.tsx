interface StructuredDataProps {
  data: Record<string, any>
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
  logo: 'https://www.zimasahealth.com/logo.png',
  description: 'Zimasa is a Nairobi-based health engagement technology company that builds the engagement infrastructure connecting payers, employers, and members to measurable health outcomes.',
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
    image: article.image || 'https://www.zimasahealth.com/images/og-blog.jpg',
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
        url: 'https://www.zimasahealth.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Zimasa',
    description: 'Health Engagement Platform for African Markets',
    image: 'https://www.zimasahealth.com/images/og-zimasa.jpg',
    url: 'https://www.zimasahealth.com',
    telephone: '+254-700-000-000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    priceRange: '$$$',
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
