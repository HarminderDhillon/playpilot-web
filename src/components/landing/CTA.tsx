import Link from 'next/link';

export function CTA() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl rounded-2xl bg-primary px-8 py-16 text-center shadow-xl sm:px-16">
        <h2 className="text-3xl font-bold text-text-on-primary sm:text-4xl">
          Ready to strengthen your learning ecosystem?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-text-on-primary/80 leading-relaxed">
          PlayPilot isn&apos;t another observation app. It&apos;s pedagogical infrastructure
          for early childhood — and it starts with your team.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="rounded-xl bg-surface px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-surface-variant"
          >
            Get Started Free
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-text-on-primary/30 px-8 py-4 text-base font-semibold text-text-on-primary transition-colors hover:border-text-on-primary/60"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
