import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

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

  // Simple markdown-to-HTML for MDX content (headings, paragraphs, bold, italic, lists)
  const html = post.content
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      // Headings
      if (trimmed.startsWith('### '))
        return `<h3 class="text-lg font-bold text-text mt-8 mb-3">${trimmed.slice(4)}</h3>`;
      if (trimmed.startsWith('## '))
        return `<h2 class="text-xl font-bold text-text mt-10 mb-4">${trimmed.slice(3)}</h2>`;

      // Blockquote
      if (trimmed.startsWith('> '))
        return `<blockquote class="border-l-4 border-primary/20 pl-5 my-6 italic text-text-secondary">${trimmed.slice(2)}</blockquote>`;

      // Unordered list
      if (trimmed.startsWith('- ')) {
        const items = trimmed
          .split('\n')
          .filter((l) => l.trim().startsWith('- '))
          .map((l) => `<li class="ml-4">${inlineFormat(l.trim().slice(2))}</li>`)
          .join('\n');
        return `<ul class="list-disc pl-5 my-4 space-y-2 text-text-secondary leading-relaxed">${items}</ul>`;
      }

      // Ordered list
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed
          .split('\n')
          .filter((l) => /^\d+\.\s/.test(l.trim()))
          .map((l) => `<li class="ml-4">${inlineFormat(l.trim().replace(/^\d+\.\s/, ''))}</li>`)
          .join('\n');
        return `<ol class="list-decimal pl-5 my-4 space-y-2 text-text-secondary leading-relaxed">${items}</ol>`;
      }

      // Paragraph
      return `<p class="text-base text-text-secondary leading-relaxed my-4">${inlineFormat(trimmed)}</p>`;
    })
    .join('\n');

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
              className={`inline-block rounded-full bg-${post.coverColor}/20 px-3 py-1 text-xs font-semibold text-${post.coverColor} uppercase tracking-wider`}
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
        <article
          className="prose-playpilot"
          dangerouslySetInnerHTML={{ __html: html }}
        />

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
      </div>
    </div>
  );
}

/** Inline formatting for bold, italic, and code */
function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-surface-variant px-1.5 py-0.5 rounded text-sm">$1</code>');
}
