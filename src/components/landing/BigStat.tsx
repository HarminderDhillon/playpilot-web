'use client';

import { ScrollReveal } from './ScrollReveal';

const stats = [
  { value: '85%', label: 'of educator time lost to documentation stress', accent: 'text-accent-coral' },
  { value: '7+', label: 'systems educators juggle daily', accent: 'text-primary' },
  { value: '3hrs', label: 'average after-hours documentation per week', accent: 'text-accent-purple' },
];

export function BigStat() {
  return (
    <section className="section-warm px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-3 text-center">
        {stats.map((s, i) => (
          <ScrollReveal key={s.value} delay={i * 120}>
            <p className={`text-5xl font-bold tracking-tight ${s.accent} sm:text-6xl`}>{s.value}</p>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
