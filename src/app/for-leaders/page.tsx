'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/landing/ScrollReveal';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { SupervisorMockup } from '@/components/shared/Mockups';

const features = [
  {
    title: 'Educator Documentation Trends',
    description:
      'See how documentation patterns evolve across your program in real time.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
  {
    title: 'Reflective Coaching Tools',
    description:
      'Support educators with evidence-based feedback grounded in real observations.',
    accent: 'bg-accent-purple/10 border-accent-purple/30',
    dot: 'bg-accent-purple',
  },
  {
    title: 'Cross-Classroom Insights',
    description:
      'Compare learning patterns, schema trends, and documentation quality across classrooms.',
    accent: 'bg-accent-blue/10 border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  {
    title: 'Compliance Readiness',
    description:
      'Auto-track documentation frequency, portfolio completeness, and coverage gaps.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
  {
    title: 'Site Visit Documentation',
    description:
      'Structured visit tracking with notes, goals, and follow-up actions.',
    accent: 'bg-accent-orange/10 border-accent-orange/30',
    dot: 'bg-accent-orange',
  },
  {
    title: 'Program-Wide Reports',
    description:
      'Generate reports from real observation data — not manual data entry.',
    accent: 'bg-primary/5 border-primary/20',
    dot: 'bg-primary',
  },
];

export default function ForLeadersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-sky px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-accent-teal uppercase mb-4">
              For Leaders
            </p>
            <h1 className="font-serif italic text-3xl text-text sm:text-5xl">
              Support practice. Strengthen quality.
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-xl mx-auto">
              Whether you&apos;re a consultant, supervisor, director, or pedagogical leader
              — PlayPilot helps you guide educators thoughtfully, without creating pressure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/demo"
                className="btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary text-center"
              >
                Try the Demo
              </Link>
              <Link
                href="/pricing"
                className="btn-secondary rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text text-center"
              >
                Get Started
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Empathy */}
      <section className="section-warm px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-lg text-text leading-relaxed">
              You want to elevate practice across your program. But quality enhancement
              shouldn&apos;t feel like surveillance.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-8 space-y-4 border-l-2 border-accent-teal/30 pl-5">
              <p className="text-text-secondary">Compliance visits that feel stressful.</p>
              <p className="text-text-secondary">
                No visibility into what educators actually need.
              </p>
              <p className="text-text-secondary">
                Quality improvement that creates pressure instead of growth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="glass-card mt-10 rounded-2xl p-6 text-center">
              <p className="text-lg font-semibold text-text">
                PlayPilot gives you visibility without micromanaging.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-widest text-accent-teal uppercase mb-3">
                  Quality enhancement
                </p>
                <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
                  How PlayPilot helps
                </h2>
              </ScrollReveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((f, i) => (
                  <ScrollReveal key={f.title} delay={i * 60}>
                    <FeatureCard {...f} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={150}>
              <div className="hidden lg:block sticky top-32">
                <SupervisorMockup />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-cream px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-lg italic text-text leading-relaxed">
                &ldquo;For the first time, I can see what&apos;s happening across all my
                educators without micromanaging. Compliance visits went from stressful to
                straightforward.&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-teal/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent-teal">JL</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text">Jennifer L.</p>
                  <p className="text-xs text-text-muted">
                    Program Director, Red Deer
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <div className="px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/demo"
            className="btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary text-center"
          >
            Try the Demo
          </Link>
          <Link
            href="/pricing"
            className="btn-secondary rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
