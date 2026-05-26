'use client';

import { ScrollReveal } from './ScrollReveal';

const capabilities = [
  { label: 'Objective noticing', color: 'bg-accent-blue' },
  { label: 'Reflective naming', color: 'bg-accent-purple' },
  { label: 'Intentional nurturing', color: 'bg-accent-green' },
  { label: 'Creative curriculum planning', color: 'bg-accent-orange' },
  { label: 'Leadership clarity', color: 'bg-primary' },
  { label: 'Family partnership', color: 'bg-accent-pink' },
];

export function PedagogicalShift() {
  return (
    <section className="section-warm px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        {/* Pedagogical Engine */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm text-text-muted">Not another observation app.</p>
            <h2 className="mt-2 text-3xl font-bold text-text sm:text-4xl tracking-tight">
              A pedagogical powerhouse.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mt-6 text-text-secondary leading-relaxed text-center">
            PlayPilot is a living infrastructure system that strengthens:
          </p>

          <div className="mt-8 mx-auto max-w-xs sm:max-w-sm text-left space-y-3">
            {capabilities.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.color}`} />
                <span className="text-base font-medium text-text">{c.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* The Shift */}
        <ScrollReveal delay={200}>
          <div className="mt-14 text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
              From pressure → to presence.
            </h3>
            <h3 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
              From compliance → to clarity.
            </h3>
            <h3 className="text-xl sm:text-2xl font-bold text-text tracking-tight">
              From scattered notes → to shared intelligence.
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
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
