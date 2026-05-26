'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/landing/ScrollReveal';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { ParentTimelineMockup } from '@/components/shared/Mockups';

const features = [
  {
    title: 'Portfolio & Family Sharing',
    description:
      'Beautiful learning portfolios that celebrate your child\'s journey. See the learning behind the play.',
    accent: 'bg-accent-pink/10 border-accent-pink/30',
    dot: 'bg-accent-pink',
  },
  {
    title: 'Milestone Tracking',
    description:
      'Visual developmental progress at a glance. See where your child is thriving and growing.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
  {
    title: 'Learning Journey Timeline',
    description:
      'A living timeline of your child\'s moments, stories, and growth — updated by their educator.',
    accent: 'bg-accent-blue/10 border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  {
    title: 'Home Connection Activities',
    description:
      'Ideas and provocations to extend your child\'s learning at home.',
    accent: 'bg-accent-orange/10 border-accent-orange/30',
    dot: 'bg-accent-orange',
  },
];

export default function ForFamiliesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-sky px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-accent-yellow uppercase mb-4">
              For Families
            </p>
            <h1 className="font-serif italic text-3xl text-text sm:text-5xl">
              See the learning behind the play.
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-xl mx-auto">
              PlayPilot connects you to your child&apos;s daily learning journey — the moments, the
              growth, the stories that matter.
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
              You drop your child off each morning wondering: What did they learn today? Are they
              growing? Are they happy?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-8 space-y-4 border-l-2 border-accent-yellow/30 pl-5">
              <p className="text-text-secondary">A photo and a sentence isn&apos;t enough.</p>
              <p className="text-text-secondary">You want to understand the learning.</p>
              <p className="text-text-secondary">You want to feel connected.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="glass-card mt-10 rounded-2xl p-6 text-center">
              <p className="text-lg font-semibold text-text">
                PlayPilot brings you into your child&apos;s world.
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
                <p className="text-xs font-semibold tracking-widest text-accent-yellow uppercase mb-3">
                  Your child&apos;s learning, visible
                </p>
                <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
                  What you&apos;ll see
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
                <ParentTimelineMockup />
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
                &ldquo;For the first time, I actually understand what my daughter is learning through
                play. The stories from her educator make drop-off conversations so much
                richer.&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-yellow/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent-yellow">AR</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text">Anika R.</p>
                  <p className="text-xs text-text-muted">Parent, Calgary</p>
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
