import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/8 px-5 py-2">
          <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">Pedagogical Intelligence Platform</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
          Where documentation becomes{' '}
          <span className="text-primary">insight</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl leading-relaxed">
          PlayPilot is a living system for noticing, naming, and nurturing learning — connecting
          educators, families, supervisors, and communities through meaningful documentation
          and shared understanding.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/features"
            className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-text-on-primary shadow-lg transition-all hover:bg-primary-hover hover:shadow-xl"
          >
            Explore the Platform
          </Link>
          <Link
            href="/login"
            className="rounded-xl border border-border bg-surface px-8 py-4 text-base font-semibold text-text transition-colors hover:bg-surface-variant"
          >
            Leadership Console
          </Link>
        </div>

        {/* Vision statement */}
        <div className="mx-auto mt-16 max-w-2xl border-t border-divider pt-8">
          <p className="text-sm italic leading-relaxed text-text-secondary">
            &ldquo;We believe documentation should illuminate children&apos;s thinking, strengthen
            educator voice, and build trust across early learning communities.&rdquo;
          </p>
        </div>
      </div>

      {/* Decorative gradient blobs — deeper, more authoritative */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-40 h-96 w-96 rounded-full bg-accent-purple/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-accent-pink/5 blur-3xl" />
    </section>
  );
}
