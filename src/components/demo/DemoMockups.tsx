'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/* ── Shared: Title bar dots ─────────────────────── */
function TitleBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
      <div className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
      <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
      <span className="ml-2 text-[10px] font-medium text-text-muted">{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 0 — Welcome: Animated logo + floating circles
   ═══════════════════════════════════════════════════ */
const CIRCLES = [
  { color: '#3FA7F5', x: -100, y: -70, size: 42, anim: 'animate-drift' },
  { color: '#7B5CF0', x: 80, y: -90, size: 36, anim: 'animate-drift-slow' },
  { color: '#5CCB8A', x: 110, y: 30, size: 40, anim: 'animate-drift-delay' },
  { color: '#FFC83D', x: -90, y: 60, size: 34, anim: 'animate-drift' },
  { color: '#FF8C42', x: 50, y: 90, size: 38, anim: 'animate-drift-slow' },
  { color: '#FF5DA2', x: -50, y: -40, size: 30, anim: 'animate-drift-delay' },
];

export function WelcomeMockup() {
  return (
    <div className="relative flex items-center justify-center h-[320px] sm:h-[380px]">
      {CIRCLES.map((c, i) => (
        <div
          key={i}
          className={c.anim}
          style={{
            position: 'absolute',
            width: c.size,
            height: c.size,
            borderRadius: '50%',
            background: c.color,
            opacity: 0.7,
            transform: `translate(${c.x}px, ${c.y}px)`,
          }}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center">
        <Image src="/logo-plane.png" alt="PlayPilot" width={80} height={80} priority />
        <p className="mt-3 text-xl font-bold text-primary tracking-tight">PlayPilot</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 1 — Capture: Observation screen with typing sim
   ═══════════════════════════════════════════════════ */
const CAPTURE_TEXT =
  'Liam built a marble run today, testing how fast different balls travel down the ramp. He adjusted the angle several times, observing changes in speed.';

export function CaptureMockup() {
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex >= CAPTURE_TEXT.length) return;
    const id = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= CAPTURE_TEXT.length) { clearInterval(id); return prev; }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="New Observation" />
      {/* Text area with typing effect */}
      <div className="rounded-lg bg-background/60 p-3 mb-3">
        <p className="text-[11px] text-text leading-relaxed whitespace-pre-wrap">
          {CAPTURE_TEXT.slice(0, charIndex)}
          <span className="animate-pulse">|</span>
        </p>
      </div>
      {/* Tag chips — delayed until after typing (~4.8s for 160 chars @ 30ms) */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {[
          { label: 'Cognitive', color: 'purple' },
          { label: 'Trajectory', color: 'orange' },
          { label: 'Transporting', color: 'blue' },
        ].map((tag, i) => (
          <span
            key={tag.label}
            className={`text-[9px] font-medium bg-accent-${tag.color}/12 text-accent-${tag.color} px-2.5 py-1 rounded-full`}
            style={{
              opacity: 0,
              animation: 'reveal-up 0.4s ease-out forwards',
              animationDelay: `${5.0 + i * 0.2}s`,
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
      {/* Save button */}
      <div
        className="flex justify-end"
        style={{
          opacity: 0,
          animation: 'reveal-up 0.4s ease-out forwards',
          animationDelay: '5.8s',
        }}
      >
        <div className="rounded-lg bg-accent-coral px-4 py-1.5">
          <span className="text-[10px] font-semibold text-white">Save Observation</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 2 — Enrichment: AI magic moment
   ═══════════════════════════════════════════════════ */
const enrichTags = [
  { label: 'Schema: Trajectory', color: 'orange', delay: '0.6s' },
  { label: 'Domain: Cognitive', color: 'purple', delay: '1.0s' },
  { label: 'Milestone: Problem Solving', color: 'blue', delay: '1.4s' },
];

export function EnrichmentMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="AI Enrichment" />
      {/* Original observation summary */}
      <div className="rounded-lg bg-background/60 p-3 mb-4">
        <p className="text-[10px] text-text-muted mb-1.5">Original Observation</p>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-surface-variant" />
          <div className="h-2 w-4/5 rounded bg-surface-variant" />
        </div>
      </div>
      {/* Tag chips popping in */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {enrichTags.map((tag) => (
          <span
            key={tag.label}
            className={`text-[9px] font-medium bg-accent-${tag.color}/12 text-accent-${tag.color} px-2.5 py-1 rounded-full`}
            style={{
              opacity: 0,
              transform: 'scale(0.5)',
              animation: 'pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              animationDelay: tag.delay,
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
      {/* Learning story draft */}
      <div
        className="rounded-lg bg-accent-purple/8 border border-accent-purple/15 p-3"
        style={{
          opacity: 0,
          animation: 'reveal-up 0.7s ease-out forwards',
          animationDelay: '1.8s',
        }}
      >
        <p className="text-[10px] font-semibold text-accent-purple mb-2">Learning Story Draft</p>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-accent-purple/10" />
          <div className="h-2 w-5/6 rounded bg-accent-purple/10" />
          <div className="h-2 w-3/4 rounded bg-accent-purple/10" />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 3 — Family Timeline
   ═══════════════════════════════════════════════════ */
const timelineEntries = [
  { color: 'bg-accent-blue', date: 'Mar 4', text: 'Built a marble run exploring trajectory', isNew: true },
  { color: 'bg-accent-purple', date: 'Mar 1', text: 'Wrapped toys in blankets: enclosing schema', isNew: false },
  { color: 'bg-accent-orange', date: 'Feb 26', text: 'Carried blocks across the room: transporting', isNew: false },
];

export function FamilyTimelineMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="Liam's Learning Journey" />
      <div className="space-y-4 mb-4">
        {timelineEntries.map((entry, i) => (
          <div
            key={entry.date}
            className="flex gap-3"
            style={{
              opacity: 0,
              animation: 'reveal-up 0.5s ease-out forwards',
              animationDelay: `${0.3 + i * 0.3}s`,
            }}
          >
            <div className="flex flex-col items-center">
              <div className={`h-3 w-3 rounded-full ${entry.color} shrink-0 mt-0.5 relative`}>
                {entry.isNew && (
                  <div
                    className={`absolute inset-[-4px] rounded-full ${entry.color}/30`}
                    style={{ animation: 'pulse-ring 2s ease-in-out infinite' }}
                  />
                )}
              </div>
              {i < timelineEntries.length - 1 && (
                <div className="w-px flex-1 bg-divider mt-1" />
              )}
            </div>
            <div>
              <p className="text-[9px] text-text-muted">{entry.date}</p>
              <p className="text-[10px] text-text leading-snug mt-0.5">{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-center"
        style={{
          opacity: 0,
          animation: 'reveal-up 0.4s ease-out forwards',
          animationDelay: '1.3s',
        }}
      >
        <div className="rounded-lg bg-accent-yellow px-4 py-1.5">
          <span className="text-[10px] font-semibold text-text">View Portfolio</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 4 — Dashboard: Program metrics
   ═══════════════════════════════════════════════════ */
const dashMetrics = [
  { label: 'Observations', value: '47', color: 'accent-blue' },
  { label: 'Schema Coverage', value: '94%', color: 'accent-green' },
  { label: 'Reflection Rate', value: '87%', color: 'accent-purple' },
  { label: 'Engagement', value: '61%', color: 'accent-orange' },
];

const weeklyBars = [40, 65, 55, 80, 70, 90, 60];
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const activityItems = [
  { initials: 'SM', color: 'bg-accent-coral', w1: 'w-24', w2: 'w-16' },
  { initials: 'PK', color: 'bg-accent-teal', w1: 'w-28', w2: 'w-20' },
  { initials: 'JL', color: 'bg-accent-purple', w1: 'w-20', w2: 'w-14' },
];

export function DashboardMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 pointer-events-none">
      <TitleBar label="PlayPilot Dashboard" />
      {/* Metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
        {dashMetrics.map((m) => (
          <div key={m.label} className={`rounded-lg bg-${m.color}/10 p-2.5 text-center`}>
            <p className={`text-xl font-bold text-${m.color}`}>{m.value}</p>
            <p className="text-[9px] text-text-muted mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
      {/* Weekly trend bars */}
      <div className="rounded-lg bg-surface-variant/60 p-3 mb-4">
        <p className="text-[9px] font-semibold text-text-muted mb-3">Weekly Trend</p>
        <div className="flex items-end gap-1.5 h-16">
          {weeklyBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-accent-teal/60 animate-bar"
              style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          {days.map((d, i) => (
            <span key={i} className="flex-1 text-center text-[7px] text-text-muted">{d}</span>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div className="rounded-lg bg-surface-variant/60 p-3">
        <p className="text-[9px] font-semibold text-text-muted mb-2">Recent Activity</p>
        <div className="space-y-2.5">
          {activityItems.map((item) => (
            <div key={item.initials} className="flex items-center gap-2.5">
              <div className={`h-6 w-6 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                <span className="text-[8px] font-bold text-white">{item.initials}</span>
              </div>
              <div className="space-y-1">
                <div className={`h-1.5 ${item.w1} rounded bg-surface-variant`} />
                <div className={`h-1.5 ${item.w2} rounded bg-surface-variant`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 5 — Leadership Console
   ═══════════════════════════════════════════════════ */
const leaderMetrics = [
  { value: '94%', label: 'Doc. Frequency', color: 'accent-blue' },
  { value: '87%', label: 'Compliance', color: 'accent-green' },
  { value: '72%', label: 'Reflection Rate', color: 'accent-purple' },
  { value: '61%', label: 'Family Engagement', color: 'accent-pink' },
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
  { label: 'Doc. Frequency', status: 'green' },
  { label: 'Portfolio Complete', status: 'green' },
  { label: 'Missing Reports', status: 'yellow' },
];

export function LeaderConsoleMockup() {
  return (
    <div className="glass-card rounded-2xl p-6 pointer-events-none">
      {/* Live indicator */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-accent-green animate-pulse" />
        <span className="text-xs font-medium text-text-muted">Live: Program Overview</span>
      </div>
      {/* 2x2 metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {leaderMetrics.map((m) => (
          <div key={m.label} className={`rounded-xl bg-${m.color}/10 p-3 text-center`}>
            <p className={`text-2xl font-bold text-${m.color}`}>{m.value}</p>
            <p className="text-[10px] text-text-muted">{m.label}</p>
          </div>
        ))}
      </div>
      {/* Schema bars */}
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
  );
}

/* ═══════════════════════════════════════════════════
   Step 6 — CTA: Final conversion
   ═══════════════════════════════════════════════════ */
export function CTAMockup({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="space-y-4 w-full max-w-sm"
        style={{
          opacity: 0,
          animation: 'reveal-up 0.6s ease-out forwards',
          animationDelay: '0.3s',
        }}
      >
        <Link
          href="/demo"
          className="block w-full btn-primary rounded-xl bg-accent-teal py-3.5 text-sm font-semibold text-white text-center"
        >
          Book a Walkthrough
        </Link>
        <Link
          href="/#features"
          className="block w-full btn-secondary rounded-xl border border-white/20 bg-white/10 py-3.5 text-sm font-semibold text-white text-center"
        >
          Explore Features
        </Link>
        <button
          onClick={onRestart}
          className="mt-2 text-sm text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
