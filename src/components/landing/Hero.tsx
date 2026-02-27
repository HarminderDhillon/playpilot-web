import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-purple/10 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-xs font-semibold text-accent-purple">Built for Australian ECE</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
          Document learning,{' '}
          <span className="text-primary">not paperwork</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">
          PlayPilot helps early childhood educators capture observations, spot schemas,
          track milestones, and share beautiful learning stories — all from your phone.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/features"
            className="rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-text-on-primary shadow-md transition-colors hover:bg-primary-hover"
          >
            See How It Works
          </Link>
          <Link
            href="/login"
            className="rounded-xl border border-border bg-surface px-8 py-3.5 text-base font-semibold text-text transition-colors hover:bg-surface-variant"
          >
            Open Dashboard
          </Link>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-32 h-80 w-80 rounded-full bg-accent-pink/10 blur-3xl" />
    </section>
  );
}
