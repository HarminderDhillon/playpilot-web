import Link from 'next/link';
import { ProductMockup } from './ProductMockup';

export function Hero() {
  return (
    <section className="relative overflow-hidden grid-bg px-6 pt-32 pb-24 sm:pt-44 sm:pb-36">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left — copy */}
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 border border-primary/10">
            <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">Built for Early Childhood Leaders</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.5rem]">
            Empowering the next generation of{' '}
            <span className="text-primary">early childhood leaders.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-text-secondary leading-relaxed">
            In a world moving faster every day, educators deserve systems that support
            presence — not pressure. PlayPilot transforms documentation from a compliance
            burden into a powerful engine for insight, creativity, and community.
          </p>

          <p className="mt-6 max-w-md text-sm font-semibold text-text leading-relaxed">
            Learning happens through play.<br />
            Educators should be free to witness it — not trapped in documenting it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#the-problem" className="btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary text-center">
              Reclaim Documentation
            </Link>
            <Link href="#the-vision" className="btn-secondary rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text text-center">
              See the Vision
            </Link>
          </div>
        </div>

        {/* Right — product mockup */}
        <div className="reveal hidden lg:block" style={{ animationDelay: '200ms' }}>
          <ProductMockup />
        </div>
      </div>

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/4 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-purple/5 blur-3xl" />
    </section>
  );
}
