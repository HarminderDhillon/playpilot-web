import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | PlayPilot',
  description:
    'Insights on early childhood pedagogy, documentation best practices, and building stronger learning ecosystems.',
};

const CATEGORY_LABELS: Record<string, string> = {
  pedagogy: 'Pedagogy',
  product: 'Product',
  stories: 'Educator Stories',
  leadership: 'Leadership',
  resources: 'Resources',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p !== featured);

  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-xl text-lg text-text-secondary">
          Insights on pedagogy, documentation, and building stronger early learning ecosystems.
        </p>

        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mt-12 group">
            <div className={`rounded-2xl bg-${featured.coverColor}/10 border border-${featured.coverColor}/20 p-8 sm:p-10 transition-all group-hover:-translate-y-1 group-hover:shadow-lg`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block rounded-full bg-${featured.coverColor}/20 px-3 py-1 text-xs font-semibold text-${featured.coverColor} uppercase tracking-wider`}>
                  {CATEGORY_LABELS[featured.category] ?? featured.category}
                </span>
                <span className="text-xs text-text-muted">{featured.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                {featured.title}
              </h2>
              <p className="mt-3 text-base text-text-secondary leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-text-muted">
                <span>{featured.author}</span>
                <span>&middot;</span>
                <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Post grid */}
        {rest.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col transition-all group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`h-2 w-2 rounded-full bg-${post.coverColor}`} />
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-divider flex items-center justify-between text-xs text-text-muted">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-lg text-text-muted">Posts coming soon.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-2xl bg-primary/5 border border-primary/10 p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-text">Stay in the loop</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-md mx-auto">
            Get pedagogical insights, product updates, and educator stories delivered to your inbox.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="btn-primary rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-on-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
