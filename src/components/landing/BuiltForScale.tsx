'use client';

import { ScrollReveal } from './ScrollReveal';

export function BuiltForScale() {
  return (
    <section id="the-vision" className="section-cream grid-bg relative section-fade-bottom px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            The Vision
          </p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl tracking-tight">
            Let&apos;s build stronger early learning ecosystems, together.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
            <p>The world is advancing quickly.</p>
            <p>Early childhood education deserves infrastructure that advances with it.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8 space-y-3 text-text-secondary leading-relaxed">
            <p>
              Not systems that increase pressure.
              <br />
              <span className="font-semibold text-text">But systems that increase clarity.</span>
            </p>
            <p>
              Not tools that add noise.
              <br />
              <span className="font-semibold text-text">But platforms that amplify presence.</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 glass-card rounded-2xl px-8 py-5">
            <p className="text-sm font-semibold text-primary">
              PlayPilot is built for the leaders shaping the future of early learning.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
