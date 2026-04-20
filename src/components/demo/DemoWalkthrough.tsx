'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  WelcomeMockup,
  CaptureMockup,
  EnrichmentMockup,
  FamilyTimelineMockup,
  DashboardMockup,
  LeaderConsoleMockup,
  CTAMockup,
} from './DemoMockups';

/* ── Step data ──────────────────────────────────── */
interface Step {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  bg: string;
}

const STEPS: Step[] = [
  {
    title: 'See PlayPilot in Action',
    subtitle: 'Interactive Walkthrough',
    description:
      'Click through the entire PlayPilot experience. Explore multiple capture modes, AI-powered enrichment, family journeys, and classroom spaces. No sign-up required.',
    accent: 'accent-teal',
    bg: 'section-gradient',
  },
  {
    title: '16+ Ways to Capture Learning',
    subtitle: 'The Capture Hub',
    description:
      'Quick Jot, Voice Note, Mark Growth, Smart Swipe, ABC Tracker, Learning Thread, Child Voice, and more. 16+ purpose-built tools so educators capture the right way every time, without leaving the moment.',
    accent: 'accent-coral',
    bg: 'section-warm',
  },
  {
    title: 'AI That Understands Pedagogy',
    subtitle: 'Intelligent Enrichment',
    description:
      'PlayPilot detects development domains (Cognitive, Physical, Creative), learning dispositions (Curiosity, Persistence), and schemas (Transporting, Trajectory). It then drafts interpretations and next steps automatically.',
    accent: 'accent-purple',
    bg: 'section-cream',
  },
  {
    title: 'Families See the Full Picture',
    subtitle: 'Family Learning Journey',
    description:
      'Parents receive a living timeline of their child\'s growth across all five domains. Every observation links to dispositions, schemas, and educator insights, building deep trust and partnership.',
    accent: 'accent-yellow',
    bg: 'section-warm',
  },
  {
    title: 'One Classroom, Five Lenses',
    subtitle: 'The Classroom Space',
    description:
      'Moments, Journey, Community, Culture, and Insights. Five sections give educators, families, and consultants different views of the same classroom, each tailored to their role.',
    accent: 'accent-teal',
    bg: 'section-white',
  },
  {
    title: 'Leadership Tools (Coming Soon)',
    subtitle: 'The Leadership Hub',
    description:
      'A program-level view for supervisors and educational leaders. Signal-first language (Strong, Growing, Steady, Quiet) replaces raw metrics with human understanding. Currently in development.',
    accent: 'accent-purple',
    bg: 'section-cream',
  },
  {
    title: 'Ready to Transform Documentation?',
    subtitle: 'Get Started',
    description:
      'Join early childhood programs that are replacing paperwork pressure with presence-first documentation.',
    accent: 'accent-teal',
    bg: 'section-navy',
  },
];

const TOTAL = STEPS.length;
const TRANSITION_MS = 400;
const AUTO_ADVANCE_MS = 8000;

/* ── SVG countdown ring ─────────────────────────── */
const RING_SIZE = 20;
const RING_STROKE = 2;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function CountdownRing({ progress }: { progress: number }) {
  const offset = RING_CIRCUMFERENCE * (1 - progress / 100);
  return (
    <svg width={RING_SIZE} height={RING_SIZE} className="shrink-0 -rotate-90">
      <circle
        cx={RING_SIZE / 2}
        cy={RING_SIZE / 2}
        r={RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth={RING_STROKE}
        opacity={0.2}
      />
      <circle
        cx={RING_SIZE / 2}
        cy={RING_SIZE / 2}
        r={RING_RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth={RING_STROKE}
        strokeDasharray={RING_CIRCUMFERENCE}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-[stroke-dashoffset] duration-75 ease-linear"
      />
    </svg>
  );
}

/* ── Component ──────────────────────────────────── */
export function DemoWalkthrough() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [visible, setVisible] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Touch swipe refs
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const step = STEPS[currentStep];
  const isNavy = currentStep === TOTAL - 1;
  const isLastStep = currentStep === TOTAL - 1;

  const disableAutoPlay = useCallback(() => setAutoPlay(false), []);

  const goTo = useCallback(
    (target: number, dir: 'next' | 'prev') => {
      if (isTransitioning || target < 0 || target >= TOTAL) return;
      setIsTransitioning(true);
      setDirection(dir);
      setVisible(false);

      setTimeout(() => {
        setCurrentStep(target);
        setDirection(dir);
        setVisible(true);
        setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
      }, TRANSITION_MS);
    },
    [isTransitioning],
  );

  const next = useCallback(() => goTo(currentStep + 1, 'next'), [currentStep, goTo]);
  const prev = useCallback(() => goTo(currentStep - 1, 'prev'), [currentStep, goTo]);
  const restart = useCallback(() => goTo(0, 'prev'), [goTo]);

  // Keep a ref to `next` so the timer always calls the latest version
  const nextRef = useRef(next);
  useEffect(() => { nextRef.current = next; }, [next]);

  // Auto-advance timer
  useEffect(() => {
    if (!autoPlay || isLastStep) {
      setProgress(0);
      return;
    }
    setProgress(0);
    const tick = 50;
    const totalTicks = AUTO_ADVANCE_MS / tick;
    let count = 0;
    const id = setInterval(() => {
      count++;
      setProgress((count / totalTicks) * 100);
      if (count >= totalTicks) {
        clearInterval(id);
        nextRef.current();
      }
    }, tick);
    return () => clearInterval(id);
  }, [autoPlay, isLastStep, currentStep]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { disableAutoPlay(); next(); }
      if (e.key === 'ArrowLeft') { disableAutoPlay(); prev(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, disableAutoPlay]);

  // Touch swipe handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      disableAutoPlay();
      if (deltaX < 0) next();   // swipe left → next
      else prev();              // swipe right → prev
    }
  }, [next, prev, disableAutoPlay]);

  /* ── Transition inline styles ───────────────── */
  const slideOffset = direction === 'next' ? 32 : -32;

  const contentStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${slideOffset}px)`,
    transition: `opacity ${TRANSITION_MS}ms ease-out, transform ${TRANSITION_MS}ms ease-out`,
  };

  /* ── Mockup renderer ────────────────────────── */
  function renderMockup() {
    switch (currentStep) {
      case 0: return <WelcomeMockup />;
      case 1: return <CaptureMockup />;
      case 2: return <EnrichmentMockup />;
      case 3: return <FamilyTimelineMockup />;
      case 4: return <DashboardMockup />;
      case 5: return <LeaderConsoleMockup />;
      case 6: return <CTAMockup onRestart={restart} />;
      default: return null;
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500"
      style={{ backgroundColor: isNavy ? '#1F2A44' : '#F7F3EC' }}
    >
      {/* ── Main content ───────────────────────── */}
      <div className="pt-16" />
      <div
        className="flex-1 flex items-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-full max-w-5xl mx-auto px-6 py-12 sm:py-16">
          <div
            className={`grid gap-10 lg:gap-16 ${
              currentStep === 6 ? 'lg:grid-cols-1 max-w-2xl mx-auto text-center' : 'lg:grid-cols-2'
            } lg:items-center`}
          >
            {/* Text column */}
            <div style={contentStyle} className={currentStep === 6 ? '' : ''}>
              <p className={`text-xs font-semibold tracking-widest uppercase mb-3 text-${step.accent}`}>
                {step.subtitle}
              </p>
              <h1 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isNavy ? 'text-white' : 'text-text'}`}>
                {step.title}
              </h1>
              <p className={`mt-4 text-base leading-relaxed ${isNavy ? 'text-white/70' : 'text-text-secondary'}`}>
                {step.description}
              </p>
            </div>

            {/* Mockup column */}
            <div style={contentStyle} className={currentStep === 6 ? '' : 'pointer-events-none'} key={currentStep}>
              {renderMockup()}
            </div>
          </div>
        </div>
      </div>

      {/* ── Navigation ─────────────────────────── */}
      <div className={`sticky bottom-0 z-30 ${isNavy ? 'bg-primary/90' : 'bg-surface/90'} backdrop-blur-md border-t ${isNavy ? 'border-white/10' : 'border-border'} shadow-[0_-2px_12px_rgba(0,0,0,0.06)]`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Back — hidden on step 1 */}
          <div className="w-24">
            {currentStep > 0 && (
              <button
                onClick={() => { disableAutoPlay(); prev(); }}
                disabled={isTransitioning}
                className={`flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
                  isNavy ? 'text-white/60 hover:text-white' : 'text-text-muted hover:text-text'
                } disabled:opacity-40`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
          </div>

          {/* Step dots */}
          <div className="flex items-center gap-2.5">
            {STEPS.map((_, i) => {
              const isActive = i === currentStep;
              const isCompleted = i < currentStep;
              return (
                <button
                  key={i}
                  onClick={() => {
                    if (i !== currentStep) {
                      disableAutoPlay();
                      goTo(i, i > currentStep ? 'next' : 'prev');
                    }
                  }}
                  className="transition-all duration-300 cursor-pointer rounded-full"
                  style={{
                    width: isActive ? 10 : 7,
                    height: isActive ? 10 : 7,
                    backgroundColor: isActive
                      ? (isNavy ? '#FFFFFF' : '#1F2A44')
                      : isCompleted
                        ? (isNavy ? 'rgba(255,255,255,0.4)' : 'rgba(31,42,68,0.35)')
                        : 'transparent',
                    border: !isActive && !isCompleted
                      ? (isNavy ? '1.5px solid rgba(255,255,255,0.3)' : '1.5px solid rgba(31,42,68,0.2)')
                      : 'none',
                  }}
                  aria-label={`Step ${i + 1}: ${STEPS[i].title}`}
                />
              );
            })}
          </div>

          {/* Next / Get Started — pill button */}
          <div className="w-24 flex justify-end">
            {currentStep < TOTAL - 1 && (
              <button
                onClick={() => { disableAutoPlay(); next(); }}
                disabled={isTransitioning}
                className={`flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer disabled:opacity-40 ${
                  isNavy
                    ? 'bg-accent-teal/15 text-accent-teal hover:bg-accent-teal/25'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {currentStep === TOTAL - 2 ? 'Get Started' : 'Next'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {autoPlay && !isLastStep && <CountdownRing progress={progress} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
