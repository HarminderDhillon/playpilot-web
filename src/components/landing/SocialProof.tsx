'use client';

import { ScrollReveal } from './ScrollReveal';

const testimonials = [
  {
    quote:
      'I used to spend my evenings writing observations. Now I capture them in seconds during the day and actually get to be present with the children.',
    name: 'Sarah M.',
    role: 'Dayhome Educator, Edmonton',
    initials: 'SM',
    color: 'bg-accent-coral',
  },
  {
    quote:
      'The schema detection blew my mind. It identified patterns in my observations I never would have noticed on my own — and helped me plan better provocations.',
    name: 'Priya K.',
    role: 'ECE, Calgary',
    initials: 'PK',
    color: 'bg-accent-teal',
  },
  {
    quote:
      'For the first time, I can see what\'s happening across all my educators without micromanaging. Compliance visits went from stressful to straightforward.',
    name: 'Jennifer L.',
    role: 'Program Director, Red Deer',
    initials: 'JL',
    color: 'bg-accent-purple',
  },
];

export function SocialProof() {
  return (
    <section className="section-gradient px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-3">
              From the Community
            </p>
            <h2 className="text-3xl font-bold text-text sm:text-4xl tracking-tight">
              Educators are feeling the difference.
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
                <p className="text-sm italic text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-divider">
                  <div className={`h-9 w-9 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                    <span className="text-[10px] font-bold text-white">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
