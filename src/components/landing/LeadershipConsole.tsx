'use client';

import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

const consoleFeatures = [
  'Documentation consistency across educators',
  'Emerging schemas across classrooms',
  'Domain coverage balance',
  'Milestone trends',
  'Family engagement metrics',
  'Educator reflection frequency',
  'Compliance readiness indicators',
];

const schemas = [
  { name: 'Transporting', pct: 28, color: 'bg-accent-orange' },
  { name: 'Trajectory', pct: 22, color: 'bg-accent-blue' },
  { name: 'Enclosing', pct: 18, color: 'bg-accent-purple' },
  { name: 'Rotation', pct: 15, color: 'bg-accent-green' },
  { name: 'Connecting', pct: 10, color: 'bg-accent-yellow' },
  { name: 'Other', pct: 7, color: 'bg-text-muted' },
];

const complianceChecks = [
  { label: 'Doc. Frequency', status: 'green' as const },
  { label: 'Portfolio Complete', status: 'green' as const },
  { label: 'Missing Reports', status: 'yellow' as const },
];

export function LeadershipConsole() {
  return (
    <section id="leadership-console" className="section-cream grid-bg px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-3">
                For Leaders
              </p>
              <h2 className="text-3xl font-bold text-text sm:text-4xl tracking-tight">
                The Leadership Console&trade;
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                A real-time view of your program&apos;s learning ecosystem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ul className="mt-8 space-y-3">
                {consoleFeatures.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                    style={{ animationDelay: `${120 + i * 50}ms` }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple" />
                    {f}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="mt-8 glass-card rounded-2xl px-5 py-3">
                <p className="text-sm font-semibold text-accent-purple">
                  PlayPilot doesn&apos;t just document learning — it reveals it.
                </p>
              </div>

              <Link
                href="/login"
                className="mt-6 inline-block btn-primary rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-on-primary"
              >
                Explore the Leadership Console
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — premium mock dashboard */}
          <ScrollReveal delay={150}>
            <div className="glass-card rounded-2xl p-6 animate-float-slow">
              {/* Status bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs font-medium text-text-muted">Live — Program Overview</span>
              </div>

              {/* Top metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { value: '94%', label: 'Doc. Frequency', color: 'accent-blue' },
                  { value: '87%', label: 'Compliance', color: 'accent-green' },
                  { value: '72%', label: 'Reflection Rate', color: 'accent-purple' },
                  { value: '61%', label: 'Family Engagement', color: 'accent-pink' },
                ].map((m) => (
                  <div key={m.label} className={`rounded-xl bg-${m.color}/10 p-3 text-center`}>
                    <p className={`text-2xl font-bold text-${m.color}`}>{m.value}</p>
                    <p className="text-[10px] text-text-muted">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Schema distribution — animated bars */}
              <div className="rounded-xl bg-surface-variant/60 p-4 mb-4">
                <p className="text-xs font-semibold text-text mb-3">Schema Distribution</p>
                <div className="space-y-2">
                  {schemas.map((s) => (
                    <div key={s.name} className="flex items-center gap-2">
                      <span className="text-[10px] text-text-muted w-20 shrink-0">{s.name}</span>
                      <div className="flex-1 h-2 rounded-full bg-surface">
                        <div
                          className={`h-2 rounded-full ${s.color} animate-bar`}
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-text-muted w-8 text-right">{s.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance readiness */}
              <div className="rounded-xl bg-surface-variant/60 p-4">
                <p className="text-xs font-semibold text-text mb-3">Compliance Readiness</p>
                <div className="grid grid-cols-3 gap-2">
                  {complianceChecks.map((c) => (
                    <div key={c.label} className="flex flex-col items-center gap-1.5">
                      <div
                        className={`h-3.5 w-3.5 rounded-full ${
                          c.status === 'green' ? 'bg-accent-green' : 'bg-accent-yellow'
                        }`}
                      />
                      <span className="text-[9px] text-text-muted text-center leading-tight">
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
