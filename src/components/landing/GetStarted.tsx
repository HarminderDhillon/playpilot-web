'use client';

import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

const steps = [
  { num: '01', title: 'Sign up', desc: 'Free to get started. No credit card needed.' },
  { num: '02', title: 'Set up your classroom', desc: 'Add children, choose your framework.' },
  { num: '03', title: 'Capture your first moment', desc: 'Under 30 seconds. Promise.' },
];

export function GetStarted() {
  return (
    <section className="section-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-3">
            Get started in three
          </p>
        </ScrollReveal>
        <div className="mt-8 space-y-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100}>
              <div className="flex items-start gap-6">
                <span className="text-3xl font-serif italic text-primary/30 leading-none">{s.num}</span>
                <div>
                  <p className="text-lg font-bold text-text">{s.title}</p>
                  <p className="text-sm text-text-secondary mt-1">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-block btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary"
            >
              Get Started
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
