'use client';

import { ScrollReveal } from './ScrollReveal';

export function TheShift() {
  return (
    <section id="the-problem" className="section-cream grid-bg px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-text text-center sm:text-4xl tracking-tight">
            Educators are drowning in documentation pressure.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-10 space-y-6 text-text-secondary leading-relaxed">
            <p>Early childhood educators are asked to do everything.</p>

            <div className="pl-5 border-l-2 border-primary/15 space-y-1 text-text-secondary">
              <p>Be present.</p>
              <p>Be observant.</p>
              <p>Be reflective.</p>
              <p>Be compliant.</p>
              <p>Be accountable.</p>
            </div>

            <p>And somehow — document it all.</p>

            <p>
              But when documentation becomes a checklist, something sacred gets lost.
            </p>

            <div className="pl-5 border-l-2 border-accent-pink/30 space-y-1">
              <p className="font-semibold text-text">Presence.</p>
              <p className="font-semibold text-text">Curiosity.</p>
              <p className="font-semibold text-text">Objectivity.</p>
              <p className="font-semibold text-text">Joy.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 glass-card rounded-2xl px-8 py-6 text-center">
            <p className="text-xl font-bold text-primary tracking-tight">
              PlayPilot was built to give that back.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
