'use client';

import { ScrollReveal } from './ScrollReveal';

export function ObservationPipeline() {
  return (
    <section className="section-gradient relative section-fade-bottom px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
              From pressure → to presence.
            </h2>
            <h2 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
              From compliance → to clarity.
            </h2>
            <h2 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
              From scattered notes → to shared intelligence.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-10 space-y-4 text-text-secondary leading-relaxed text-center">
            <p>Every observation becomes part of something larger.</p>
            <div className="space-y-1">
              <p>Patterns emerge.</p>
              <p>Strengths are highlighted.</p>
              <p>Learning stories deepen.</p>
              <p>Programs evolve.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="mt-10 glass-card rounded-2xl px-8 py-5 text-center">
            <p className="text-sm font-semibold text-accent-green">
              Documentation becomes a tool for empowerment, not exhaustion.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
