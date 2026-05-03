import type { Metadata } from 'next'
import Link from 'next/link'
import { getBlogCategories, getBlogPostsByCategory, getCategoryLabel } from '@/lib/insights'
import Button from '@/components/ui/Button'

interface InsightsCategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: InsightsCategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const label = getCategoryLabel(category)

  return {
    title: `${label} — Zimasa Blog`,
    description: `Articles from the Zimasa blog about ${label.toLowerCase()}. Insights on health engagement and member activation.`,
    openGraph: {
      type: 'website',
      url: `https://www.zimasahealth.com/insights/${category}/`,
      title: `${label} — Zimasa Blog`,
      description: `Articles about ${label.toLowerCase()}`,
      images: [{ url: '/images/og-blog.jpg', width: 1200, height: 630 }],
    },
  }
}

export async function generateStaticParams() {
  const categories = getBlogCategories()
  return categories.map(category => ({
    category,
  }))
}

export default async function BlogCategoryPage({ params }: InsightsCategoryPageProps) {
  const { category } = await params
  const posts = getBlogPostsByCategory(category)
  const label = getCategoryLabel(category)
  const allCategories = getBlogCategories()

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding border-t-8 border-navy bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <div className="mb-8">
            <Link href="/insights/" className="text-green hover:underline text-sm font-medium mb-4 inline-block">
              ← Back to Blog
            </Link>
            <p className="eyebrow mb-4">Category</p>
            <h1 className="font-display text-h2 text-dark mb-6">{label}</h1>
            <p className="text-body-lg text-body">
              {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href="/insights/" className="inline-flex">
              <Button variant="outline">
                All Articles
              </Button>
            </Link>
            {allCategories.map(cat => (
              <Link key={cat} href={`/insights/${cat}/`} className="inline-flex">
                <Button variant="outline" className={cat === category ? 'bg-green text-white border-green hover:bg-green/90' : ''}>
                  {getCategoryLabel(cat)}
                </Button>
              </Link>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/insights/${category}/${post.slug}/`}
                className="group"
              >
                <article className="card h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-green mb-2">{label}</p>
                    <h3 className="font-heading text-h4 text-dark group-hover:text-green transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  <p className="text-body text-body mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm text-muted">
                      <span>{post.author}</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body-lg text-body">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
