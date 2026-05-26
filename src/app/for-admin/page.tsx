'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/landing/ScrollReveal';
import { FeatureCard } from '@/components/shared/FeatureCard';

const features = [
  {
    title: 'Program Analytics Dashboard',
    description:
      'Real-time view of observations, educator activity, and documentation health across your organization.',
    accent: 'bg-accent-blue/10 border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  {
    title: 'Compliance & Audit Trail',
    description:
      'Every action logged. Every observation tracked. Licensing-ready documentation at your fingertips.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
  {
    title: 'Multi-Site Management',
    description:
      'See trends and compare quality across multiple classrooms and locations.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
  {
    title: 'Attendance & Daily Operations',
    description:
      'Sign-in/out tracking, daily logs, incident reports, and medication records in one place.',
    accent: 'bg-accent-yellow/10 border-accent-yellow/30',
    dot: 'bg-accent-yellow',
  },
  {
    title: 'Reports & Exports',
    description:
      'Generate child learning, educator summary, and program overview reports from real data.',
    accent: 'bg-accent-purple/10 border-accent-purple/30',
    dot: 'bg-accent-purple',
  },
  {
    title: 'Permission & Role Management',
    description:
      'Control who sees what. Educator, leader, family, and consultant access — all configurable.',
    accent: 'bg-primary/5 border-primary/20',
    dot: 'bg-primary',
  },
];

export default function ForAdminPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-sky px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Admin & Operations
            </p>
            <h1 className="font-serif italic text-3xl text-text sm:text-5xl">
              Clarity across your program.
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-xl mx-auto">
              Reporting, compliance, permissions, and organization tools — all powered by
              real documentation data.
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
              Running a childcare program means juggling compliance, staffing, reporting,
              and family communication — often across multiple sites.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-8 space-y-4 border-l-2 border-primary/20 pl-5">
              <p className="text-text-secondary">
                Spreadsheets that don&apos;t talk to each other.
              </p>
              <p className="text-text-secondary">Compliance prep that takes weeks.</p>
              <p className="text-text-secondary">
                No clear picture of what&apos;s happening across your program.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="glass-card mt-10 rounded-2xl p-6 text-center">
              <p className="text-lg font-semibold text-text">
                PlayPilot gives you operational visibility without adding more systems.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              Program management
            </p>
            <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
              What you get
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
      </section>

      {/* Callout */}
      <section className="section-cream px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xl font-semibold text-text">
                The clarity to lead with confidence.
              </p>
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
