import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogCategories, getBlogPostsByCategory, getBlogPost, getCategoryLabel } from '@/lib/insights'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { StructuredData, createArticleSchema } from '@/components/seo/StructuredData'
import ScrollTracker from '@/components/blog/ScrollTracker'

interface InsightsPostPageProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateMetadata({ params }: InsightsPostPageProps): Promise<Metadata> {
  const { category, slug } = await params
  const post = getBlogPost(category, slug)

  if (!post) {
    return {
      title: 'Not Found — Zimasa',
      description: 'Article not found',
    }
  }

  return {
    title: `${post.title} — Zimasa Insights`,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      url: `https://www.zimasahealth.com/insights/${category}/${slug}/`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  const categories = getBlogCategories()
  const allParams: Array<{ category: string; slug: string }> = []

  categories.forEach(category => {
    const posts = getBlogPostsByCategory(category)
    posts.forEach(post => {
      allParams.push({
        category,
        slug: post.slug,
      })
    })
  })

  return allParams
}

const components = {
  h1: (props: any) => <h1 className="font-display text-h1 text-dark mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="font-display text-h2 text-dark mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="font-heading text-h3 text-dark mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-body-lg text-body mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-body text-body space-y-2 mb-4 ml-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-body text-body space-y-2 mb-4 ml-2" {...props} />,
  li: (props: any) => <li className="text-body text-body" {...props} />,
  strong: (props: any) => <strong className="font-bold text-dark" {...props} />,
  em: (props: any) => <em className="italic text-body" {...props} />,
  a: (props: any) => <a className="text-green hover:underline" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-green pl-6 py-4 italic text-h4 text-dark my-6" {...props} />
  ),
  code: (props: any) => <code className="bg-surface px-2 py-1 rounded text-sm font-mono text-dark" {...props} />,
  pre: (props: any) => (
    <pre className="bg-surface p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono text-dark" {...props} />
  ),
  table: (props: any) => (
    <table className="w-full text-left text-sm border-collapse mb-4" {...props} />
  ),
  tr: (props: any) => <tr className="border-b border-border" {...props} />,
  th: (props: any) => <th className="px-4 py-2 bg-surface font-heading text-dark" {...props} />,
  td: (props: any) => <td className="px-4 py-2 text-body" {...props} />,
}

export default async function BlogPostPage({ params }: InsightsPostPageProps) {
  const { category, slug } = await params
  const post = getBlogPost(category, slug)

  if (!post) {
    return (
      <main>
        <section className="section-padding bg-white">
          <div className="section-container max-w-narrow mx-auto text-center py-12">
            <h1 className="font-display text-h2 text-dark mb-4">Post Not Found</h1>
            <p className="text-body-lg text-body mb-8">Sorry, we couldn't find that article.</p>
            <Link href="/insights/" className="text-green hover:underline font-medium">
              Back to Insights
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const postUrl = `https://www.zimasahealth.com/insights/${category}/${slug}/`
  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.excerpt,
    // Hero image if set; otherwise this post's generated Open Graph image (./opengraph-image.tsx).
    image: post.heroImage
      ? new URL(post.heroImage, 'https://www.zimasahealth.com').toString()
      : `${postUrl}opengraph-image`,
    datePublished: post.date,
    author: post.author,
    url: postUrl,
  })

  return (
    <main>
      <StructuredData data={articleSchema} />
      <ScrollTracker slug={slug} category={category} />
      {/* Header */}
      <section className="section-padding border-t-8 border-green bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Insights', href: '/insights/' },
              { label: getCategoryLabel(category), href: `/insights/${category}/` },
              { label: post.title, href: '#', current: true },
            ]}
          />

          {post.heroImage && (
            <Image
              src={post.heroImage}
              alt={post.title}
              width={1100}
              height={550}
              className="rounded-card mb-8 w-full object-cover"
              priority
            />
          )}

          <h1 className="font-display text-h1 text-dark mb-4">
            {post.title}
          </h1>

          <p className="text-body-lg text-body mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-muted">
            <span>{post.author}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <article className="section-container max-w-narrow mx-auto prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} />
        </article>
      </section>

      {/* Footer Navigation */}
      <section className="section-padding bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <div className="text-center">
            <h3 className="font-heading text-h3 text-dark mb-6">Read More</h3>
            <Link href="/insights/" className="inline-block text-green hover:underline font-medium">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
