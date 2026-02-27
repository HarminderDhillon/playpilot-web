import Link from 'next/link';

export function CTA() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-14 text-center shadow-lg sm:px-16">
        <h2 className="text-3xl font-bold text-text-on-primary sm:text-4xl">
          Ready to transform your documentation?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-text-on-primary/80">
          Join educators across Australia who are spending less time on paperwork and more time with children.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="rounded-xl bg-surface px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-surface-variant"
          >
            Get Started Free
          </Link>
          <Link
            href="/features"
            className="rounded-xl border border-text-on-primary/30 px-8 py-3.5 text-base font-semibold text-text-on-primary transition-colors hover:border-text-on-primary/60"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
