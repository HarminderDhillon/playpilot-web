'use client';

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

function SignalBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
      style={{ backgroundColor: `${color}20`, color }}
    >
      {label}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   Step 0 — Welcome: FAB with orbiting dots
   ═══════════════════════════════════════════════════ */
const ORBIT_DOTS = [
  { color: '#3FA7F5', offset: 0 },
  { color: '#7B5CF0', offset: 60 },
  { color: '#5CCB8A', offset: 120 },
  { color: '#FFC83D', offset: 180 },
  { color: '#FF8C42', offset: 240 },
  { color: '#FF5DA2', offset: 300 },
];

export function WelcomeMockup() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[320px] sm:h-[380px]">
      {/* Orbit container — rotates the whole ring */}
      <div
        className="relative"
        style={{ width: 200, height: 200 }}
      >
        {/* Rotating ring of dots */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            animation: 'fab-orbit 20s linear infinite',
          }}
        >
          {ORBIT_DOTS.map((dot) => (
            <div
              key={dot.color}
              style={{
                position: 'absolute',
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: dot.color,
                boxShadow: `0 0 10px 2px ${dot.color}80`,
                top: '50%',
                left: '50%',
                transform: `rotate(${dot.offset}deg) translateY(-80px) translate(-50%, -50%)`,
              }}
            />
          ))}
        </div>

        {/* Center FAB circle with logo */}
        <div
          className="absolute rounded-full flex items-center justify-center overflow-hidden"
          style={{
            width: 120,
            height: 120,
            backgroundColor: '#1F2A44',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 8px 32px rgba(31,42,68,0.4)',
          }}
        >
          <img
            src="/logo-plane.png"
            alt="PlayPilot"
            style={{
              width: 520,
              height: 347,
              objectFit: 'cover',
              objectPosition: '52% 28%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -54%)',
            }}
          />
        </div>
      </div>

      {/* Title below */}
      <p className="mt-5 text-2xl font-bold tracking-tight" style={{ color: '#1F2A44' }}>
        PlayPilot
      </p>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes fab-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 1 — Capture Hub: 16+ capture modes in 3 sections
   ═══════════════════════════════════════════════════ */
const captureSections = [
  {
    title: 'Quick Capture',
    icon: '⚡',
    modes: [
      { icon: '✏️', label: 'Quick Jot', desc: 'Type a fast note' },
      { icon: '🎤', label: 'Voice Note', desc: 'Speak your observation' },
      { icon: '📷', label: 'Picture', desc: 'Snap a photo' },
      { icon: '🎥', label: 'Video Note', desc: 'Record a short clip' },
      { icon: '✍️', label: 'Handwriting', desc: 'Scan handwritten notes' },
      { icon: '🌱', label: 'Mark Growth', desc: 'Tag a development win' },
    ],
  },
  {
    title: 'Guided Observation',
    icon: '🔍',
    modes: [
      { icon: '☑️', label: 'Noticing Tiles', desc: 'Tap what you observed' },
      { icon: '👆', label: 'Smart Swipe', desc: 'Swipe through prompts' },
      { icon: '📋', label: 'ABC Tracker', desc: 'Antecedent-Behaviour-Consequence' },
      { icon: '🕸️', label: 'Activity Web', desc: 'Map group play' },
      { icon: '⏱️', label: 'Time Pulse', desc: 'Timed check-ins' },
      { icon: '📝', label: 'Guided Report', desc: 'Step-by-step draft' },
    ],
  },
  {
    title: 'Reflect & Grow',
    icon: '💡',
    modes: [
      { icon: '🧵', label: 'Learning Thread', desc: 'Link moments over time' },
      { icon: '✅', label: 'Checklist Pulse', desc: 'Milestone check' },
      { icon: '📊', label: 'Disposition Radar', desc: 'Rate learning traits' },
      { icon: '🗣️', label: 'Child Voice', desc: "Capture child's own words" },
    ],
  },
];

export function CaptureMockup() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % captureSections.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const section = captureSections[activeSection];

  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="Capture Hub — 16+ Documentation Tools" />
      {/* Section tabs */}
      <div className="flex gap-2 mb-4">
        {captureSections.map((s, i) => (
          <div
            key={s.title}
            className={`text-[9px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
              i === activeSection
                ? 'bg-primary text-white'
                : 'bg-surface-variant text-text-muted'
            }`}
          >
            {s.icon} {s.title}
          </div>
        ))}
      </div>
      {/* Mode grid */}
      <div className="grid grid-cols-3 gap-2">
        {section.modes.slice(0, 6).map((mode, i) => (
          <div
            key={mode.label}
            className="rounded-xl bg-background/60 p-2.5 text-center"
            style={{
              opacity: 0,
              animation: 'reveal-up 0.3s ease-out forwards',
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <div className="text-lg mb-1">{mode.icon}</div>
            <p className="text-[9px] font-semibold text-text">{mode.label}</p>
            <p className="text-[7px] text-text-muted mt-0.5">{mode.desc}</p>
          </div>
        ))}
      </div>
      {section.modes.length > 6 && (
        <p className="text-[8px] text-text-muted text-center mt-2">
          +{section.modes.length - 6} more tools
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 2 — AI Enrichment: Real domains, dispositions, schemas
   ═══════════════════════════════════════════════════ */
const CAPTURE_TEXT =
  'Aroha spent 20 minutes at the water table, carefully pouring water between different-sized containers. She experimented with filling a large jug using a small cup, counting each pour.';

const enrichmentTags = [
  { label: 'Cognitive', type: 'Domain', color: '#3FA7F5', delay: '0.4s' },
  { label: 'Physical', type: 'Domain', color: '#FF8C42', delay: '0.7s' },
  { label: 'Curiosity', type: 'Disposition', color: '#7B5CF0', delay: '1.0s' },
  { label: 'Persistence', type: 'Disposition', color: '#2EC4B6', delay: '1.3s' },
  { label: 'Transporting', type: 'Schema', color: '#FF5DA2', delay: '1.6s' },
];

export function EnrichmentMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="AI-Powered Enrichment" />
      {/* Original observation */}
      <div className="rounded-lg bg-background/60 p-3 mb-3">
        <p className="text-[10px] text-text-muted mb-1">Educator&apos;s observation</p>
        <p className="text-[10px] text-text leading-relaxed">{CAPTURE_TEXT}</p>
      </div>
      {/* AI-detected tags with types */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {enrichmentTags.map((tag) => (
          <span
            key={tag.label}
            className="text-[8px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1"
            style={{
              backgroundColor: `${tag.color}15`,
              color: tag.color,
              opacity: 0,
              transform: 'scale(0.5)',
              animation: 'pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              animationDelay: tag.delay,
            }}
          >
            <span className="text-[7px] opacity-60">{tag.type}:</span> {tag.label}
          </span>
        ))}
      </div>
      {/* Generated interpretation */}
      <div
        className="rounded-lg border p-3 mb-3"
        style={{
          backgroundColor: 'rgba(123,92,240,0.05)',
          borderColor: 'rgba(123,92,240,0.15)',
          opacity: 0,
          animation: 'reveal-up 0.5s ease-out forwards',
          animationDelay: '2.0s',
        }}
      >
        <p className="text-[9px] font-semibold text-accent-purple mb-1.5">Interpretation</p>
        <p className="text-[9px] text-text leading-relaxed">
          Aroha is developing her understanding of volume and measurement through hands-on exploration. Her sustained engagement shows a growing ability to focus and persist.
        </p>
      </div>
      {/* Next steps */}
      <div
        className="rounded-lg border p-3"
        style={{
          backgroundColor: 'rgba(46,196,182,0.05)',
          borderColor: 'rgba(46,196,182,0.15)',
          opacity: 0,
          animation: 'reveal-up 0.5s ease-out forwards',
          animationDelay: '2.5s',
        }}
      >
        <p className="text-[9px] font-semibold text-accent-teal mb-1.5">Next Steps</p>
        <div className="space-y-1">
          <p className="text-[8px] text-text">• Introduce measuring cups with markings</p>
          <p className="text-[8px] text-text">• Outdoor water channel with guttering and funnels</p>
          <p className="text-[8px] text-text-muted">🏠 At bath time, ask &ldquo;which holds more?&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 3 — Family View: Child journey + growth + care circle
   ═══════════════════════════════════════════════════ */
const journeyMoments = [
  { domain: 'Cognitive', color: '#3FA7F5', date: 'Today', text: 'Water play — measuring & counting', disposition: 'Curiosity' },
  { domain: 'Creative', color: '#FFC83D', date: 'Yesterday', text: 'Painted a family beach story with narration', disposition: 'Confidence' },
  { domain: 'Social & Emotional', color: '#FF5DA2', date: 'Mon', text: 'Led cooperative hospital play with Mia', disposition: 'Collaboration' },
];

const growthDomains = [
  { name: 'Cognitive', pct: 85, color: '#3FA7F5' },
  { name: 'Social & Emotional', pct: 72, color: '#FF5DA2' },
  { name: 'Physical', pct: 68, color: '#FF8C42' },
  { name: 'Language', pct: 60, color: '#7B5CF0' },
  { name: 'Creative', pct: 55, color: '#FFC83D' },
];

export function FamilyTimelineMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="Aroha's Learning Journey — Family View" />
      {/* Journey timeline */}
      <div className="space-y-3 mb-4">
        {journeyMoments.map((m, i) => (
          <div
            key={m.date}
            className="flex gap-3"
            style={{
              opacity: 0,
              animation: 'reveal-up 0.4s ease-out forwards',
              animationDelay: `${0.2 + i * 0.25}s`,
            }}
          >
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: m.color }} />
              {i < journeyMoments.length - 1 && <div className="w-px flex-1 bg-divider mt-1" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[9px] text-text-muted">{m.date}</p>
                <span className="text-[7px] font-medium px-1.5 py-0.5 rounded-full" style={{ backgroundColor: `${m.color}15`, color: m.color }}>
                  {m.domain}
                </span>
              </div>
              <p className="text-[10px] text-text leading-snug mt-0.5">{m.text}</p>
              <p className="text-[8px] text-text-muted mt-0.5">Disposition: {m.disposition}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Growth snapshot */}
      <div
        className="rounded-lg bg-surface-variant/60 p-3"
        style={{ opacity: 0, animation: 'reveal-up 0.4s ease-out forwards', animationDelay: '1.0s' }}
      >
        <p className="text-[9px] font-semibold text-text mb-2">Growth Snapshot</p>
        <div className="space-y-1.5">
          {growthDomains.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <span className="text-[8px] text-text-muted w-20 shrink-0">{d.name}</span>
              <div className="flex-1 h-1.5 rounded-full bg-surface">
                <div
                  className="h-1.5 rounded-full animate-bar"
                  style={{ width: `${d.pct}%`, backgroundColor: d.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 4 — Classroom Space: 5 sections with real data
   ═══════════════════════════════════════════════════ */
const classroomSections = [
  { id: 'moments', label: 'Moments', icon: '❤️' },
  { id: 'journey', label: 'Journey', icon: '🌱' },
  { id: 'community', label: 'Community', icon: '👥' },
  { id: 'culture', label: 'Culture', icon: '🎨' },
  { id: 'insights', label: 'Insights', icon: '📊' },
];

const recentMoments = [
  { child: 'Aroha', note: 'Water play — pouring & counting', domains: ['Cognitive', 'Physical'], time: '2h ago' },
  { child: 'Liam', note: 'Block tower with structural reasoning', domains: ['Cognitive', 'Social & Emotional'], time: '3h ago' },
  { child: 'Mia', note: 'Beach painting with narrative storytelling', domains: ['Creative', 'Language'], time: '5h ago' },
];

export function DashboardMockup() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveTab((p) => (p + 1) % classroomSections.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="Kids Club — Classroom Space" />
      {/* Section pill tabs */}
      <div className="flex gap-1.5 mb-4 overflow-hidden">
        {classroomSections.map((s, i) => (
          <div
            key={s.id}
            className={`text-[8px] font-semibold px-2.5 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
              i === activeTab ? 'bg-primary text-white' : 'bg-surface-variant text-text-muted'
            }`}
          >
            {s.icon} {s.label}
          </div>
        ))}
      </div>
      {/* Recent moments feed */}
      <div className="space-y-2.5 mb-4">
        {recentMoments.map((m, i) => (
          <div
            key={m.child}
            className="rounded-lg bg-background/60 p-2.5"
            style={{
              opacity: 0,
              animation: 'reveal-up 0.3s ease-out forwards',
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-text">{m.child}</span>
              <span className="text-[8px] text-text-muted">{m.time}</span>
            </div>
            <p className="text-[9px] text-text-secondary">{m.note}</p>
            <div className="flex gap-1 mt-1.5">
              {m.domains.map((d) => (
                <span key={d} className="text-[7px] font-medium text-accent-blue bg-accent-blue/10 px-1.5 py-0.5 rounded-full">
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Weekly stat */}
      <div className="flex items-center gap-3 rounded-lg bg-accent-teal/8 p-3">
        <span className="text-2xl font-bold text-accent-teal">12</span>
        <div>
          <p className="text-[9px] font-semibold text-text">moments this week</p>
          <p className="text-[8px] text-text-muted">across 8 children</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Step 5 — Leadership Hub: Signal-first with real metrics
   ═══════════════════════════════════════════════════ */
const pulseCards = [
  { title: 'Active Classrooms', value: '3', signal: 'Strong', color: '#5CCB8A', icon: '🏫' },
  { title: 'Moments Captured', value: '47', signal: 'Strong', color: '#5CCB8A', icon: '📸' },
  { title: 'Educator Engagement', value: '4/4', signal: 'Growing', color: '#3FA7F5', icon: '👩‍🏫' },
  { title: 'Program Climate', value: '', signal: 'Strong', color: '#5CCB8A', icon: '☀️' },
];

const classroomCards = [
  { name: 'Kids Club', children: 4, moments: 8, educators: ['S', 'P'], signal: 'Strong', color: '#5CCB8A' },
  { name: 'Rainbow Room', children: 4, moments: 4, educators: ['J'], signal: 'Growing', color: '#3FA7F5' },
];

const complianceItems = [
  { label: 'Documentation Coverage', value: '75%', signal: 'Steady', color: '#FFC83D' },
  { label: 'Consent Completion', value: '6/8', signal: 'Growing', color: '#3FA7F5' },
  { label: 'Program Readiness', value: '', signal: 'Growing', color: '#3FA7F5' },
];

export function LeaderConsoleMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 pointer-events-none">
      <TitleBar label="Leadership Hub — Program at a Glance" />
      {/* Section pills */}
      <div className="flex gap-1.5 mb-4 overflow-hidden">
        {['Overview', 'Classrooms', 'Educators', 'Children', 'Insights', 'Compliance', 'Community'].map((s, i) => (
          <div
            key={s}
            className={`text-[8px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
              i === 0 ? 'bg-primary text-white' : 'bg-surface-variant text-text-muted'
            }`}
          >
            {s}
          </div>
        ))}
      </div>
      {/* Program Pulse — signal-first cards */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {pulseCards.map((c) => (
          <div key={c.title} className="rounded-xl bg-background/60 p-2.5">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs">{c.icon}</span>
              <span className="text-[8px] text-text-muted">{c.title}</span>
            </div>
            <p className="text-sm font-bold" style={{ color: c.color }}>{c.signal}</p>
            {c.value && <p className="text-[9px] text-text-muted">{c.value}</p>}
          </div>
        ))}
      </div>
      {/* Classroom snapshots */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {classroomCards.map((cls) => (
          <div key={cls.name} className="rounded-xl bg-background/60 overflow-hidden">
            <div className="h-1" style={{ backgroundColor: cls.color }} />
            <div className="p-2.5">
              <p className="text-[10px] font-semibold text-text">{cls.name}</p>
              <p className="text-[8px] text-text-muted">{cls.children} children · {cls.moments} moments</p>
              <div className="flex items-center gap-1 mt-1.5">
                {cls.educators.map((e, i) => (
                  <div key={i} className="h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-[7px] font-bold text-white">{e}</span>
                  </div>
                ))}
                <SignalBadge label={cls.signal} color={cls.color} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Compliance row */}
      <div className="rounded-xl bg-surface-variant/60 p-3">
        <p className="text-[9px] font-semibold text-text mb-2">Compliance</p>
        <div className="space-y-1.5">
          {complianceItems.map((c) => (
            <div key={c.label} className="flex items-center justify-between">
              <span className="text-[8px] text-text-muted">{c.label}</span>
              <div className="flex items-center gap-1.5">
                {c.value && <span className="text-[9px] font-semibold text-text">{c.value}</span>}
                <SignalBadge label={c.signal} color={c.color} />
              </div>
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
