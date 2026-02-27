import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
          Empowering the next generation of{' '}
          <span className="text-primary">early childhood leaders.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary sm:text-xl leading-relaxed">
          In a world moving faster every day, educators deserve systems that support
          presence — not pressure. PlayPilot transforms documentation from a compliance
          burden into a powerful engine for insight, creativity, and community.
        </p>

        <div className="mx-auto mt-8 max-w-lg">
          <p className="text-sm font-semibold text-text leading-relaxed">
            Learning happens through play.<br />
            Educators should be free to witness it — not trapped in documenting it.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#the-problem"
            className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-text-on-primary shadow-lg transition-all hover:bg-primary-hover hover:shadow-xl"
          >
            Reclaim Documentation
          </Link>
          <Link
            href="#the-vision"
            className="rounded-xl border border-border bg-surface px-8 py-4 text-base font-semibold text-text transition-colors hover:bg-surface-variant"
          >
            See the Vision
          </Link>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-40 h-96 w-96 rounded-full bg-accent-purple/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-accent-pink/5 blur-3xl" />
    </section>
  );
}
