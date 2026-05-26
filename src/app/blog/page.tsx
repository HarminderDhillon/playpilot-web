import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | PlayPilot',
  description:
    'Moments, reflections, and ideas from the world of early learning. Written for educators who care deeply.',
};

const COVER_COLORS: Record<string, { bg: string; bgSubtle: string; dot: string }> = {
  'accent-purple': { bg: 'bg-accent-purple', bgSubtle: 'bg-accent-purple/6', dot: 'bg-accent-purple' },
  'accent-blue': { bg: 'bg-accent-blue', bgSubtle: 'bg-accent-blue/6', dot: 'bg-accent-blue' },
  'accent-coral': { bg: 'bg-accent-coral', bgSubtle: 'bg-accent-coral/6', dot: 'bg-accent-coral' },
  'accent-teal': { bg: 'bg-accent-teal', bgSubtle: 'bg-accent-teal/6', dot: 'bg-accent-teal' },
  'accent-green': { bg: 'bg-accent-green', bgSubtle: 'bg-accent-green/6', dot: 'bg-accent-green' },
  'accent-pink': { bg: 'bg-accent-pink', bgSubtle: 'bg-accent-pink/6', dot: 'bg-accent-pink' },
  'accent-yellow': { bg: 'bg-accent-yellow', bgSubtle: 'bg-accent-yellow/6', dot: 'bg-accent-yellow' },
  'accent-orange': { bg: 'bg-accent-orange', bgSubtle: 'bg-accent-orange/6', dot: 'bg-accent-orange' },
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

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p !== featured);

  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="relative">
          {/* Subtle moment bubbles in hero only */}
          <div className="moment-bubble bg-accent-purple w-4 h-4 top-0 right-16 animate-float" />
          <div className="moment-bubble bg-accent-teal w-3 h-3 top-10 right-6 animate-float-slow" />

          <p className="text-xs tracking-widest uppercase text-text-muted font-semibold mb-3">
            From the Field
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif italic text-text leading-tight">
            Moments, reflections, and ideas
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            from the world of early learning.
          </p>
        </div>

        {/* Featured story */}
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mt-14 group">
            <div className="relative rounded-2xl bg-surface border border-border p-8 sm:p-10 overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
              {/* Decorative watercolor circle */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-accent-purple/8 via-accent-teal/6 to-accent-pink/8 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-block rounded-full bg-primary/8 px-3 py-1 text-[10px] font-semibold text-primary uppercase tracking-widest">
                    Featured Story
                  </span>
                  <span className="text-xs text-text-muted">{featured.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-text leading-tight">
                  {featured.title}
                </h2>

                {/* Pull quote */}
                <p className="mt-4 text-base font-serif italic text-text-secondary leading-relaxed max-w-2xl">
                  &ldquo;{featured.excerpt}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="font-medium text-text">{featured.author}</span>
                    <span>&middot;</span>
                    <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* A Moment From the Field — signature slow moment */}
        <div className="mt-14 py-10 border-t border-b border-divider">
          <p className="text-[10px] tracking-widest uppercase text-text-muted font-semibold mb-5">
            A Moment From the Field
          </p>
          <p className="text-lg font-serif italic text-text leading-relaxed max-w-2xl">
            &ldquo;Today a child handed me a leaf and whispered,
            &lsquo;This one is tired.&rsquo; We spent the next ten minutes
            talking about how leaves rest.&rdquo;
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Priya, Early Childhood Educator
          </p>
        </div>

        {/* Asymmetric editorial grid */}
        {rest.length > 0 && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post, i) => {
              const isWide = i % 3 === 0;

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group ${isWide ? 'md:col-span-2' : ''}`}
                >
                  <div className="glass-card rounded-2xl p-6 h-full flex flex-col transition-all group-hover:-translate-y-1 relative overflow-hidden">
                    {/* Subtle accent glow on wide cards */}
                    {isWide && (
                      <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full ${COVER_COLORS[post.coverColor]?.bgSubtle ?? 'bg-accent-purple/6'} blur-2xl pointer-events-none`} />
                    )}

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`h-2 w-2 rounded-full ${COVER_COLORS[post.coverColor]?.dot ?? 'bg-accent-purple'}`} />
                        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                          {CATEGORY_LABELS[post.category] ?? post.category}
                        </span>
                      </div>

                      <h3 className={`font-bold text-text leading-snug group-hover:text-primary transition-colors ${isWide ? 'text-xl' : 'text-lg'}`}>
                        {post.title}
                      </h3>

                      {/* Pull quote on wide cards if available */}
                      {isWide && post.pullQuote && (
                        <p className="mt-3 text-sm font-serif italic text-text-muted leading-relaxed">
                          &ldquo;{post.pullQuote}&rdquo;
                        </p>
                      )}

                      <p className={`mt-2 text-text-secondary leading-relaxed flex-1 ${isWide ? 'text-base' : 'text-sm'}`}>
                        {post.excerpt}
                      </p>

                      <div className="mt-4 pt-3 border-t border-divider flex items-center justify-between text-xs text-text-muted">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {posts.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-lg font-serif italic text-text-muted">Stories are coming.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-2xl bg-primary/5 border border-primary/10 p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-text">
            Written for educators who care deeply
          </h2>
          <p className="mt-2 text-sm text-text-secondary max-w-md mx-auto">
            Reflections on presence, play, and the quiet work of noticing. Delivered when we have something worth sharing.
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
