import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts, getBlogCategories, getCategoryLabel } from '@/lib/blog'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Insights & Blog — Zimasa',
  description: 'Read the latest insights on health engagement, member activation, and building wellness programs for African markets. Articles from the Zimasa team.',
  openGraph: {
    type: 'website',
    url: 'https://www.zimasahealth.com/blog/',
    title: 'Insights & Blog — Zimasa',
    description: 'Read the latest insights on health engagement, member activation, and building wellness programs for African markets.',
    images: [{ url: '/images/og-blog.jpg', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts()
  const categories = getBlogCategories()

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding border-t-8 border-navy bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <div className="mb-8">
            <p className="eyebrow mb-4">Insights</p>
            <h1 className="font-display text-h2 text-dark mb-6">Zimasa Insights</h1>
            <p className="text-body-lg text-body">
              Research, guides, and insights on health engagement from the Zimasa team. Learn how to design member activation programmes, measure engagement, and build sustainable wellness at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href="/blog/" className="inline-flex">
              <Button variant="outline" className={allPosts.length > 0 ? 'bg-green text-white border-green hover:bg-green/90' : ''}>
                All Articles
              </Button>
            </Link>
            {categories.map(category => (
              <Link key={category} href={`/blog/${category}/`} className="inline-flex">
                <Button variant="outline">
                  {getCategoryLabel(category)}
                </Button>
              </Link>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map(post => (
              <Link
                key={`${post.category}-${post.slug}`}
                href={`/blog/${post.category}/${post.slug}/`}
                className="group"
              >
                <article className="card h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-green mb-2">{getCategoryLabel(post.category)}</p>
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

          {allPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body-lg text-body">No articles yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
