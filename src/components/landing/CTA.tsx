import Link from 'next/link';

export function CTA() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl rounded-2xl bg-primary px-8 py-16 text-center shadow-xl sm:px-16">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-text-on-primary sm:text-3xl">Reclaim documentation.</p>
          <p className="text-2xl font-bold text-text-on-primary sm:text-3xl">Reclaim presence.</p>
          <p className="text-2xl font-bold text-text-on-primary sm:text-3xl">Reclaim leadership.</p>
        </div>

        <p className="mt-6 text-base text-text-on-primary/80">
          Join the movement.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="rounded-xl bg-surface px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-surface-variant"
          >
            Book a Walkthrough
          </Link>
          <Link
            href="/login"
            className="rounded-xl border border-text-on-primary/30 px-8 py-4 text-base font-semibold text-text-on-primary transition-colors hover:border-text-on-primary/60"
          >
            Join Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
