'use client';

import { ScrollReveal } from './ScrollReveal';

const educatorPoints = [
  'Capture in seconds.',
  'Use strength-based language.',
  'Reflect without overwhelm.',
  'Leave work at work.',
];

const leaderPoints = [
  'See trends across classrooms.',
  'Support staff with clarity.',
  'Prepare for licensing without panic.',
  'Build consistency without micromanaging.',
];

export function StakeholderPillars() {
  return (
    <>
      {/* FOR EDUCATORS */}
      <section className="section-warm px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-accent-coral uppercase mb-3">
              For Educators
            </p>
            <h2 className="text-3xl font-bold text-text sm:text-4xl tracking-tight">
              Be more present. Document with confidence.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 space-y-3">
              {educatorPoints.map((point, i) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${150 + i * 60}ms` }}
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-coral" />
                  <span className="text-base text-text-secondary">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="mt-8 glass-card rounded-2xl px-6 py-4">
              <p className="text-sm font-semibold text-accent-coral">
                Your role is to witness learning — not chase paperwork.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOR LEADERS */}
      <section className="section-cream grid-bg px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-accent-teal uppercase mb-3">
              For Leaders
            </p>
            <h2 className="text-3xl font-bold text-text sm:text-4xl tracking-tight">
              Empower your educators. Strengthen your program.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 space-y-3">
              {leaderPoints.map((point, i) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${150 + i * 60}ms` }}
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent-teal" />
                  <span className="text-base text-text-secondary">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="mt-8 glass-card rounded-2xl px-6 py-4">
              <p className="text-sm font-semibold text-accent-teal">
                Leadership becomes supportive — not reactive.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOR FAMILIES */}
      <section className="section-warm px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-accent-yellow uppercase mb-3">
              For Families
            </p>
            <h2 className="text-3xl font-bold text-text sm:text-4xl tracking-tight">
              It takes a village.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
              <p>Families don&apos;t just receive updates.</p>
              <div className="pl-5 border-l-2 border-accent-yellow/40 space-y-1">
                <p className="font-medium text-text">They understand learning.</p>
                <p className="font-medium text-text">They see growth.</p>
                <p className="font-medium text-text">They feel connected.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="mt-8 glass-card rounded-2xl px-6 py-4">
              <p className="text-sm font-semibold text-accent-orange">
                When documentation is meaningful, partnership becomes natural.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
