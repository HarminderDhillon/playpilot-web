'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/landing/ScrollReveal';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { ObservationMockup } from '@/components/shared/Mockups';

const features = [
  {
    title: 'Voice-First Capture',
    description:
      'Speak your observation while it happens. PlayPilot transcribes, identifies domains, and drafts a learning story in seconds.',
    accent: 'bg-accent-blue/10 border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  {
    title: 'NNN Framework',
    description:
      'Every observation flows through Noticing, Naming, and Nurturing. Professional documentation without the overwhelm.',
    accent: 'bg-accent-purple/10 border-accent-purple/30',
    dot: 'bg-accent-purple',
  },
  {
    title: 'Schema Recognition',
    description:
      'Spot transporting, trajectory, enclosing, and more. Identify patterns and plan meaningful provocations.',
    accent: 'bg-accent-orange/10 border-accent-orange/30',
    dot: 'bg-accent-orange',
  },
  {
    title: '20+ Capture Modes',
    description:
      'Quick Jot, Voice Note, Photo, Noticing Tiles, ABC Tracker, Disposition Radar, and more.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
  {
    title: 'Story Canvas',
    description:
      'Every child gets a living visual journey — moments become threads become a visible story of growth.',
    accent: 'bg-accent-pink/10 border-accent-pink/30',
    dot: 'bg-accent-pink',
  },
  {
    title: 'Offline Sync',
    description:
      'Capture anywhere. Sync when you\'re back online.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
];

export default function ForEducatorsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-sky px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-accent-coral uppercase mb-4">
              For Educators
            </p>
            <h1 className="font-serif italic text-3xl text-text sm:text-5xl">
              Be present. We&apos;ll handle the paperwork.
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-xl mx-auto">
              PlayPilot captures your observations in seconds — so you can stay where it matters
              most: with the children.
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
              You became an educator to nurture learning — not to spend evenings typing up
              observations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-8 space-y-4 border-l-2 border-accent-coral/30 pl-5">
              <p className="text-text-secondary">Post-it notes piling up.</p>
              <p className="text-text-secondary">Hours lost after children go home.</p>
              <p className="text-text-secondary">
                Documentation that feels like compliance, not reflection.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="glass-card mt-10 rounded-2xl p-6 text-center">
              <p className="text-lg font-semibold text-text">
                PlayPilot was built to give that back.
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
                <p className="text-xs font-semibold tracking-widest text-accent-coral uppercase mb-3">
                  Built for your workflow
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
                <ObservationMockup />
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
                &ldquo;I used to spend my evenings writing observations. Now I capture them in
                seconds during the day and actually get to be present with the children.&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-coral/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent-coral">SM</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text">Sarah M.</p>
                  <p className="text-xs text-text-muted">
                    Early Childhood Educator, Edmonton
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
