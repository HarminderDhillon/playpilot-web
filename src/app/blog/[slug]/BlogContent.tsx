'use client';

import Markdown from 'react-markdown';
import type { Components } from 'react-markdown';

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-text mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-text mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-bold text-text mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-bold text-text mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-base text-text-secondary leading-relaxed my-4">
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/20 pl-5 my-6 italic text-text-secondary">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 my-4 space-y-2 text-text-secondary leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 my-4 space-y-2 text-text-secondary leading-relaxed">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-4">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-text">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children, className }) => {
    // Fenced code blocks get a className like "language-js"
    if (className) {
      return (
        <code className="block bg-surface-variant p-4 rounded-lg text-sm font-mono overflow-x-auto max-w-full my-4">
          {children}
        </code>
      );
    }
    // Inline code
    return (
      <code className="bg-surface-variant px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-surface-variant rounded-lg overflow-x-auto max-w-full my-4 p-4 text-sm">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt ?? ''}
      className="rounded-xl my-6 max-w-full h-auto"
    />
  ),
  hr: () => <hr className="my-8 border-divider" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-surface-variant">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-divider px-4 py-2 text-left font-semibold text-text">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-divider px-4 py-2 text-text-secondary">
      {children}
    </td>
  ),
};

export function BlogContent({ content }: { content: string }) {
  return <Markdown components={components}>{content}</Markdown>;
}
