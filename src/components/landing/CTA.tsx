'use client';

import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

export function CTA() {
  return (
    <section className="section-navy px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-text-on-primary sm:text-3xl tracking-tight">
              Reclaim documentation.
            </p>
            <p className="text-2xl font-bold text-text-on-primary sm:text-3xl tracking-tight">
              Reclaim presence.
            </p>
            <p className="text-2xl font-bold text-text-on-primary sm:text-3xl tracking-tight">
              Reclaim leadership.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mt-6 text-base text-text-on-primary/80">Join the movement.</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="rounded-xl bg-surface px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-surface-variant hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Walkthrough
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-text-on-primary/30 px-7 py-3.5 text-sm font-semibold text-text-on-primary transition-all hover:border-text-on-primary/60 hover:bg-white/5 hover:-translate-y-0.5"
            >
              Join Early Access
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
