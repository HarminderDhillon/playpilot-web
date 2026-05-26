'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/landing/ScrollReveal';
import { ObservationMockup, SupervisorMockup, ParentTimelineMockup } from '@/components/shared/Mockups';
import { FeatureCard } from '@/components/shared/FeatureCard';

const educatorFeatures = [
  {
    title: 'Voice-First Capture',
    description:
      'Speak your observation while it happens. PlayPilot transcribes your voice note, identifies developmental domains, and creates a draft learning story in seconds.',
    accent: 'bg-accent-blue/10 border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  {
    title: 'NNN Framework Built In',
    description:
      'Every observation flows through Noticing, Naming, and Nurturing. Professional documentation without the overwhelm.',
    accent: 'bg-accent-purple/10 border-accent-purple/30',
    dot: 'bg-accent-purple',
  },
  {
    title: 'Schema Recognition',
    description:
      'Spot transporting, trajectory, enclosing, rotation, and more. Identify repeated patterns of play and plan meaningful provocations.',
    accent: 'bg-accent-orange/10 border-accent-orange/30',
    dot: 'bg-accent-orange',
  },
  {
    title: '20+ Capture Modes',
    description:
      'Quick Jot, Voice Note, Photo, Handwriting Scan, Noticing Tiles, ABC Tracker, Disposition Radar, and more.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
  {
    title: 'Story Canvas',
    description:
      'Every child gets a living visual journey. Observations become moments, moments become threads, threads become a visible story of growth.',
    accent: 'bg-accent-pink/10 border-accent-pink/30',
    dot: 'bg-accent-pink',
  },
  {
    title: 'Offline Sync',
    description:
      'Full offline support with automatic sync. Capture observations anywhere and sync when you\'re back online.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
];

const leaderFeatures = [
  {
    title: 'Leadership Hub',
    description:
      'A web-based command center for directors and pedagogical leaders. See trends across classrooms, support educators with real data, and prepare for licensing visits.',
    accent: 'bg-primary/5 border-primary/20',
    dot: 'bg-primary',
  },
  {
    title: 'Reports',
    description:
      'Generate child learning, educator summary, curriculum usage, and program overview reports from real observation data.',
    accent: 'bg-accent-purple/10 border-accent-purple/30',
    dot: 'bg-accent-purple',
  },
  {
    title: 'Calendar & Operations',
    description:
      'Attendance, daily logs, incident reports, and scheduling. Less admin, more time with children.',
    accent: 'bg-accent-yellow/10 border-accent-yellow/30',
    dot: 'bg-accent-yellow',
  },
];

const familyFeatures = [
  {
    title: 'Portfolio & Family Sharing',
    description:
      'Beautiful, parent-friendly learning portfolios that celebrate each child\'s journey. Families see the learning behind the play.',
    accent: 'bg-accent-pink/10 border-accent-pink/30',
    dot: 'bg-accent-pink',
  },
  {
    title: 'Milestone Tracking',
    description:
      'Visual developmental progress at a glance. Track milestones across domains and see where each child is thriving.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
  {
    title: 'Team Communication',
    description:
      'Connect educators and families through group messaging and classroom announcements. Stay aligned and informed.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
];

export default function FeaturesPage() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <section className="section-mint px-6 pt-32 pb-16">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-text sm:text-5xl">Features</h1>
            <p className="mt-4 max-w-xl text-lg text-text-secondary">
              Every feature is designed to save you time, deepen your practice, and keep children at the centre.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Educators */}
      <section className="section-warm px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-widest text-accent-coral uppercase mb-3">
                  For Educators
                </p>
                <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
                  Be more present. Document with confidence.
                </h2>
              </ScrollReveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {educatorFeatures.map((f, i) => (
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

      {/* For Leaders */}
      <section className="section-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
            <ScrollReveal delay={150}>
              <div className="hidden lg:block sticky top-32">
                <SupervisorMockup />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-widest text-accent-teal uppercase mb-3">
                  For Leaders
                </p>
                <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
                  Empower your educators. Strengthen your program.
                </h2>
              </ScrollReveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {leaderFeatures.map((f, i) => (
                  <ScrollReveal key={f.title} delay={i * 60}>
                    <FeatureCard {...f} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Families */}
      <section className="section-cream px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-widest text-accent-yellow uppercase mb-3">
                  For Families
                </p>
                <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
                  See the learning. Feel connected.
                </h2>
              </ScrollReveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {familyFeatures.map((f, i) => (
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
