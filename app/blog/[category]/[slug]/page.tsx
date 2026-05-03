import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogCategories, getBlogPostsByCategory, getBlogPost, getCategoryLabel } from '@/lib/blog'

interface BlogPostPageProps {
  params: Promise<{ category: string; slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { category, slug } = await params
  const post = getBlogPost(category, slug)

  if (!post) {
    return {
      title: 'Not Found — Zimasa',
      description: 'Blog post not found',
    }
  }

  return {
    title: `${post.title} — Zimasa Blog`,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      url: `https://www.zimasahealth.com/blog/${category}/${slug}/`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: '/images/og-blog.jpg', width: 1200, height: 630 }],
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params
  const post = getBlogPost(category, slug)

  if (!post) {
    return (
      <main>
        <section className="section-padding bg-white">
          <div className="section-container max-w-narrow mx-auto text-center py-12">
            <h1 className="font-display text-h2 text-dark mb-4">Post Not Found</h1>
            <p className="text-body-lg text-body mb-8">Sorry, we couldn't find that article.</p>
            <Link href="/blog/" className="text-green hover:underline font-medium">
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      {/* Header */}
      <section className="section-padding border-t-8 border-green bg-surface">
        <div className="section-container max-w-narrow mx-auto">
          <Link href={`/blog/${category}/`} className="text-green hover:underline text-sm font-medium mb-4 inline-block">
            ← {getCategoryLabel(category)}
          </Link>

          <h1 className="font-display text-h1 text-dark mb-4">
            {post.title}
          </h1>

          <p className="text-body-lg text-body mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-muted">
            <span>{post.author}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
            <Link href="/blog/" className="inline-block text-green hover:underline font-medium">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
