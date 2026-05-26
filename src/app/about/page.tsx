'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/landing/ScrollReveal';

const nnnPillars = [
  {
    label: 'Noticing',
    desc: 'Objective observation of what children are doing, saying, and exploring.',
    dot: 'bg-accent-blue',
    bg: 'bg-accent-blue/10 border-accent-blue/30',
  },
  {
    label: 'Naming',
    desc: 'Connecting behaviour to learning theory, schemas, and developmental domains.',
    dot: 'bg-accent-purple',
    bg: 'bg-accent-purple/10 border-accent-purple/30',
  },
  {
    label: 'Nurturing',
    desc: 'Planning responsive next steps and intentional provocations.',
    dot: 'bg-accent-green',
    bg: 'bg-accent-green/10 border-accent-green/30',
  },
];

const frameworks = [
  'FLIGHT', 'EYLF', 'Te Wh\u0101riki', 'EYFS', 'Head Start ELOF',
  'Reggio Emilia', 'Montessori', 'BC ELOF', 'Ontario HDLH',
  'Saskatchewan Play & Exploration', 'Manitoba ELF', 'Quebec',
  'Nova Scotia LLDP', 'NNN',
];

const frameworkColors = [
  'bg-accent-blue/10 text-accent-blue',
  'bg-accent-teal/10 text-accent-teal',
  'bg-accent-green/10 text-accent-green',
  'bg-accent-purple/10 text-accent-purple',
  'bg-accent-orange/10 text-accent-orange',
  'bg-accent-pink/10 text-accent-pink',
  'bg-accent-coral/10 text-accent-coral',
  'bg-accent-yellow/10 text-accent-yellow',
];

const privacyCards = [
  { icon: '\u{1F6E1}', title: 'PIPEDA & COPPA compliant', desc: 'Canadian & US privacy standards' },
  { icon: '\u{1F512}', title: 'No ads. No tracking. Ever.', desc: 'Children are not the product.' },
  { icon: '\u{1F4E1}', title: 'Works offline', desc: 'Syncs when connected.' },
  { icon: '\u{1F4CB}', title: 'Data minimisation', desc: 'We only collect what we need.' },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="section-warm px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-text sm:text-5xl">About PlayPilot</h1>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-text-secondary">
              <p>
                Early childhood educators are some of the most important people in a child&apos;s life.
                They notice the small moments that matter: a child&apos;s first attempt at writing their name,
                a three-year-old negotiating turns in the sandpit, the quiet persistence of a toddler
                stacking blocks for the twentieth time.
              </p>
              <p>
                But the systems meant to support this work often get in the way. Hours spent typing up
                observations after the children go home. Paper forms that pile up. Documentation that
                ticks compliance boxes but doesn&apos;t actually help you teach better.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-cream px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-text font-semibold text-lg">
              PlayPilot was built to change that.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <blockquote className="mt-8 border-l-4 border-primary/20 pl-6">
              <p className="text-2xl sm:text-3xl font-serif italic text-text leading-snug">
                Documentation should be a tool for reflection, not a chore.
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mt-8 text-base text-text-secondary leading-relaxed">
              It should help you see patterns in children&apos;s play, plan meaningful next steps,
              and share the story of learning with families without burning out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* NNN Framework */}
      <section className="section-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
              Built on Noticing, Naming, Nurturing
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {nnnPillars.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 80}>
                <div className={`rounded-xl border p-5 ${p.bg} h-full`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${p.dot}`} />
                    <h3 className="text-base font-semibold text-text">{p.label}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-cream px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
              14+ Curriculum Frameworks
            </h2>
            <p className="mt-3 text-base text-text-secondary leading-relaxed">
              Used by educators across Canada, Australia, New Zealand, the UK, and the US.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-6 flex flex-wrap gap-2">
              {frameworks.map((f, i) => (
                <span
                  key={f}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${frameworkColors[i % frameworkColors.length]}`}
                >
                  {f}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Built With Educators */}
      <section className="section-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
              Built With Educators
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-6 glass-card rounded-2xl px-6 py-5">
              <p className="text-base text-text-secondary leading-relaxed">
                PlayPilot isn&apos;t built in a vacuum. Every feature is informed by conversations with
                real educators: room leaders, educational leaders, family day care educators,
                and centre directors.
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">
                If it doesn&apos;t save you time or deepen your practice, it doesn&apos;t make it into the app.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Privacy */}
      <section className="section-warm px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text sm:text-3xl tracking-tight">
              Privacy First
            </h2>
            <p className="mt-3 text-base text-text-secondary leading-relaxed">
              We take the privacy of children, families, and educators seriously.
              PlayPilot is designed with data minimisation, secure storage, and
              transparent practices from the ground up.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {privacyCards.map((card) => (
                <div key={card.title} className="glass-card rounded-2xl p-5 text-center">
                  <span className="text-2xl">{card.icon}</span>
                  <p className="mt-2 text-sm font-semibold text-text">{card.title}</p>
                  <p className="mt-1 text-xs text-text-muted">{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mt-6 text-sm text-text-secondary">
              Read our full{' '}
              <Link href="/privacy" className="font-medium text-primary hover:text-primary-hover">Privacy Policy</Link>.
            </p>
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
