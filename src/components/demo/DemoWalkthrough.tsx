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
      'Click through the entire PlayPilot experience — 20 capture tools, AI-powered enrichment, family journeys, classroom spaces, and leadership intelligence. No sign-up required.',
    accent: 'accent-teal',
    bg: 'section-gradient',
  },
  {
    title: '20 Ways to Capture Learning',
    subtitle: 'The Capture Hub',
    description:
      'Quick Jot, Voice Note, Mark Growth, Smart Swipe, ABC Tracker, Learning Thread, Child Voice — 20 purpose-built tools so educators capture the right way every time, without leaving the moment.',
    accent: 'accent-coral',
    bg: 'section-warm',
  },
  {
    title: 'AI That Understands Pedagogy',
    subtitle: 'Intelligent Enrichment',
    description:
      'PlayPilot detects development domains (Cognitive, Physical, Creative), learning dispositions (Curiosity, Persistence), and schemas (Transporting, Trajectory) — then drafts interpretations and next steps automatically.',
    accent: 'accent-purple',
    bg: 'section-cream',
  },
  {
    title: 'Families See the Full Picture',
    subtitle: 'Family Learning Journey',
    description:
      'Parents receive a living timeline of their child\'s growth across all five domains. Every observation links to dispositions, schemas, and educator insights — building deep trust and partnership.',
    accent: 'accent-yellow',
    bg: 'section-warm',
  },
  {
    title: 'One Classroom, Five Lenses',
    subtitle: 'The Classroom Space',
    description:
      'Moments, Journey, Community, Culture, and Insights — five sections give educators, families, and consultants different views of the same classroom, each tailored to their role.',
    accent: 'accent-teal',
    bg: 'section-white',
  },
  {
    title: 'Leadership with Signal, Not Noise',
    subtitle: 'The Leadership Hub',
    description:
      'Seven sections — Overview, Classrooms, Educators, Children, Insights, Compliance, Community. Signal-first language (Strong, Growing, Steady, Quiet) replaces raw metrics with human understanding.',
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
  const isNavy = step.bg === 'section-navy';
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
    <div className={`${step.bg} min-h-screen flex flex-col transition-colors duration-500`}>
      {/* ── Progress bar ───────────────────────── */}
      <div className={`sticky top-16 z-30 ${isNavy ? 'bg-primary/80' : 'bg-surface/80'} backdrop-blur-md border-b ${isNavy ? 'border-white/10' : 'border-border'}`}>
        {/* Thin fill bar */}
        <div className="h-1 w-full">
          <div
            className="h-full bg-accent-teal transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / TOTAL) * 100}%` }}
          />
        </div>
        {/* Step indicators */}
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-center gap-2 sm:gap-3">
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
                className={`
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `sm:w-8 sm:h-8 w-3 h-3 rounded-full bg-accent-teal ${isNavy ? 'text-white' : 'text-white'} text-xs font-bold flex items-center justify-center`
                    : isCompleted
                      ? `sm:w-7 sm:h-7 w-2.5 h-2.5 rounded-full bg-accent-teal/30 ${isNavy ? 'text-white/60' : 'text-accent-teal'} text-[10px] font-medium flex items-center justify-center`
                      : `sm:w-7 sm:h-7 w-2.5 h-2.5 rounded-full ${isNavy ? 'bg-white/10 text-white/30' : 'bg-surface-variant text-text-muted'} text-[10px] font-medium flex items-center justify-center`
                  }
                `}
                aria-label={`Step ${i + 1}: ${STEPS[i].title}`}
              >
                <span className="hidden sm:inline">{i + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main content ───────────────────────── */}
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
      <div className={`sticky bottom-0 z-30 ${isNavy ? 'bg-primary/80' : 'bg-surface/80'} backdrop-blur-md border-t ${isNavy ? 'border-white/10' : 'border-border'}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Back */}
          {currentStep > 0 ? (
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
          ) : (
            <div />
          )}

          {/* Step counter */}
          <span className={`text-xs font-medium ${isNavy ? 'text-white/40' : 'text-text-muted'}`}>
            {currentStep + 1} of {TOTAL}
          </span>

          {/* Next / Get Started */}
          {currentStep < TOTAL - 1 ? (
            <button
              onClick={() => { disableAutoPlay(); next(); }}
              disabled={isTransitioning}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer ${
                isNavy
                  ? 'text-accent-teal hover:text-accent-teal/80'
                  : 'text-primary hover:text-primary-hover'
              } disabled:opacity-40`}
            >
              {currentStep === TOTAL - 2 ? 'Get Started' : 'Next'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {autoPlay && !isLastStep && <CountdownRing progress={progress} />}
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
