import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-cream flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-text sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
        <Link
          href="/features"
          className="text-sm font-semibold text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Browse Features
        </Link>
      </div>
    </section>
  );
}
