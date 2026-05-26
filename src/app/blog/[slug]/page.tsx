import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { BlogContent } from './BlogContent';

const COVER_COLORS: Record<string, { bg: string; text: string }> = {
  'accent-purple': { bg: 'bg-accent-purple/20', text: 'text-accent-purple' },
  'accent-blue': { bg: 'bg-accent-blue/20', text: 'text-accent-blue' },
  'accent-coral': { bg: 'bg-accent-coral/20', text: 'text-accent-coral' },
  'accent-teal': { bg: 'bg-accent-teal/20', text: 'text-accent-teal' },
  'accent-green': { bg: 'bg-accent-green/20', text: 'text-accent-green' },
  'accent-pink': { bg: 'bg-accent-pink/20', text: 'text-accent-pink' },
  'accent-yellow': { bg: 'bg-accent-yellow/20', text: 'text-accent-yellow' },
  'accent-orange': { bg: 'bg-accent-orange/20', text: 'text-accent-orange' },
};

const CATEGORY_LABELS: Record<string, string> = {
  pedagogy: 'Pedagogical Thinking',
  product: 'Product Updates',
  stories: 'From Educators',
  leadership: 'Presence & Practice',
  resources: 'Learning & Reflection',
  families: 'For Families',
  childvoice: 'Child Voice',
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found | PlayPilot' };

  return {
    title: `${post.title} | PlayPilot Blog`,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://playpilotlearning.com/blog/${slug}`,
      siteName: 'PlayPilot',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors mb-8"
        >
          &larr; All posts
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-block rounded-full ${COVER_COLORS[post.coverColor]?.bg ?? 'bg-accent-purple/20'} px-3 py-1 text-xs font-semibold ${COVER_COLORS[post.coverColor]?.text ?? 'text-accent-purple'} uppercase tracking-wider`}
            >
              {CATEGORY_LABELS[post.category] ?? post.category}
            </span>
            <span className="text-xs text-text-muted">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">{post.excerpt}</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-text-muted">
            <span className="font-medium text-text">{post.author}</span>
            <span>&middot;</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-divider mb-10" />

        {/* Content */}
        <article className="prose-playpilot">
          <BlogContent content={post.content} />
        </article>

        {/* Footer CTA */}
        <div className="mt-16 rounded-2xl bg-primary/5 border border-primary/10 p-8 text-center">
          <p className="text-lg font-bold text-text">
            Ready to reclaim your documentation?
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Join educators who are spending less time writing and more time with children.
          </p>
          <Link
            href="/pricing"
            className="mt-5 inline-block btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary"
          >
            Get Started
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors"
          >
            &larr; All posts
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              author: { '@type': 'Organization', name: post.author },
              datePublished: post.date,
              publisher: {
                '@type': 'Organization',
                name: 'PlayPilot',
                url: 'https://playpilotlearning.com',
              },
              mainEntityOfPage: `https://playpilotlearning.com/blog/${post.slug}`,
            }),
          }}
        />
      </div>
    </div>
  );
}
