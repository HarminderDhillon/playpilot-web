'use client';

import { ScrollReveal } from './ScrollReveal';

const commitments = [
  { label: 'Strength-based language', color: 'bg-accent-green' },
  { label: 'Bias-aware reflection', color: 'bg-accent-purple' },
  { label: 'Cultural responsiveness', color: 'bg-accent-blue' },
  { label: 'Educator voice protected', color: 'bg-accent-coral' },
  { label: 'Privacy-first infrastructure', color: 'bg-primary' },
];

export function EthicsSection() {
  return (
    <section className="section-warm px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest text-accent-green uppercase mb-3 text-center">
            Our Commitment
          </p>
          <h2 className="text-3xl font-bold text-text text-center sm:text-4xl tracking-tight">
            Built on dignity. Designed for growth.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-8 mx-auto max-w-sm space-y-3">
            {commitments.map((c, i) => (
              <div
                key={c.label}
                className="flex items-center gap-3"
                style={{ animationDelay: `${150 + i * 80}ms` }}
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.color}`} />
                <span className="text-base font-medium text-text">{c.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 glass-card rounded-2xl px-8 py-5 text-center">
            <p className="text-sm font-semibold text-accent-green">
              Technology should protect the human work of teaching — not replace it.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
