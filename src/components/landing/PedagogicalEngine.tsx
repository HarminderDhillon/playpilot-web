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

export function PedagogicalEngine() {
  return (
    <section id="pedagogical-engine" className="section-warm px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="text-sm text-text-muted">Not another observation app.</p>
          <h2 className="mt-2 text-3xl font-bold text-text sm:text-4xl tracking-tight">
            A pedagogical powerhouse.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mt-6 text-text-secondary leading-relaxed">
            PlayPilot is a living infrastructure system that strengthens:
          </p>

          <div className="mt-8 mx-auto max-w-sm text-left space-y-3">
            {capabilities.map((c, i) => (
              <div key={c.label} className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.color}`} />
                <span className="text-base font-medium text-text">{c.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 space-y-2">
            <p className="text-sm text-text-muted">This is not digital paperwork.</p>
            <p className="text-lg font-bold text-primary tracking-tight">
              This is pedagogical power: structured, supported, and scalable.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
