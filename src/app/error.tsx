'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled error:', error);
  }, [error]);

  return (
    <section className="section-cream flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Error
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-text sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-text-secondary">
        We&apos;re sorry &mdash; an unexpected error occurred.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary transition-opacity hover:opacity-90"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="text-sm font-semibold text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
