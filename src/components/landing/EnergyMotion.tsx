'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

/**
 * PlayPilot "Energy Motion" entrance animation.
 * Plays once per session (sessionStorage). On the website this renders
 * as a full-viewport overlay that fades out to reveal the page beneath.
 *
 * Sequence:
 *  0.0s  – cream background fades in
 *  0.3s  – 6 accent bubbles float in
 *  1.5s  – bubbles orbit inward
 *  2.2s  – merge into logo with glow pulse
 *  2.6s  – "PlayPilot" text fades in
 *  3.0s  – overlay fades out, page revealed
 */

const ACCENT_CIRCLES = [
  { color: '#3FA7F5', x: -90, y: -60, size: 38 },   // blue
  { color: '#7B5CF0', x: 70, y: -80, size: 32 },     // purple
  { color: '#5CCB8A', x: 100, y: 20, size: 36 },     // green
  { color: '#FFC83D', x: -80, y: 50, size: 30 },     // yellow
  { color: '#FF8C42', x: 40, y: 80, size: 34 },      // orange
  { color: '#FF5DA2', x: -40, y: -30, size: 28 },    // pink
];

export function EnergyMotion() {
  const [phase, setPhase] = useState<'idle' | 'bubbles' | 'orbit' | 'merge' | 'text' | 'done'>('idle');
  const [shouldPlay, setShouldPlay] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check sessionStorage — only play once per session
  useEffect(() => {
    try {
      if (sessionStorage.getItem('pp-splash-played')) {
        setPhase('done');
        return;
      }
    } catch {
      // SSR or storage unavailable
    }
    setShouldPlay(true);
  }, []);

  // Run the animation sequence
  useEffect(() => {
    if (!shouldPlay) return;

    // 0.0s – start
    setPhase('bubbles');

    const timers = [
      setTimeout(() => setPhase('orbit'), 1500),
      setTimeout(() => setPhase('merge'), 2200),
      setTimeout(() => setPhase('text'), 2600),
      setTimeout(() => {
        setPhase('done');
        try {
          sessionStorage.setItem('pp-splash-played', '1');
        } catch { /* noop */ }
      }, 3200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [shouldPlay]);

  // Once done, remove from DOM entirely after fade completes
  if (phase === 'done' && !shouldPlay) return null;

  const isFadingOut = phase === 'done';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: 'var(--background)',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.4s ease-out',
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
      onTransitionEnd={() => {
        if (isFadingOut) setShouldPlay(false);
      }}
    >
      {/* Background fade-in */}
      <div
        style={{
          opacity: phase !== 'idle' ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Accent bubbles */}
        {ACCENT_CIRCLES.map((circle, i) => {
          const isOrbit = phase === 'orbit' || phase === 'merge' || phase === 'text' || phase === 'done';
          const isMerged = phase === 'merge' || phase === 'text' || phase === 'done';

          // Float positions
          let tx = circle.x;
          let ty = circle.y;
          let scale = 1;
          let opacity = 0.85;

          if (phase === 'idle') {
            opacity = 0;
          } else if (phase === 'bubbles') {
            // Floating state — slight drift animation handled via CSS
            opacity = 0.85;
          }

          if (isOrbit) {
            // Move toward center in circular formation
            const angle = (i / ACCENT_CIRCLES.length) * Math.PI * 2;
            const radius = isMerged ? 0 : 30;
            tx = Math.cos(angle) * radius;
            ty = Math.sin(angle) * radius;
            scale = isMerged ? 0 : 0.6;
            opacity = isMerged ? 0 : 0.9;
          }

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: circle.size,
                height: circle.size,
                borderRadius: '50%',
                background: circle.color,
                opacity,
                transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
                transition:
                  phase === 'bubbles'
                    ? 'opacity 0.5s ease-out, transform 1s ease-in-out'
                    : isOrbit
                      ? 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      : 'all 0.3s ease-out',
                filter: isMerged ? 'blur(8px)' : 'blur(0px)',
              }}
            />
          );
        })}

        {/* Logo — appears on merge */}
        <div
          style={{
            opacity: phase === 'merge' || phase === 'text' || phase === 'done' ? 1 : 0,
            transform:
              phase === 'merge' || phase === 'text' || phase === 'done'
                ? 'scale(1)'
                : 'scale(0.5)',
            transition: 'opacity 0.3s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          className="relative z-10"
        >
          {/* Glow pulse */}
          <div
            style={{
              position: 'absolute',
              inset: -20,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(27,37,89,0.12) 0%, transparent 70%)',
              opacity: phase === 'merge' ? 1 : 0,
              transform: phase === 'merge' ? 'scale(1.3)' : 'scale(0.8)',
              transition: 'opacity 0.3s ease-out, transform 0.4s ease-out',
            }}
          />
          <Image
            src="/logo-plane.png"
            alt="PlayPilot"
            width={96}
            height={96}
            priority
            className="relative z-10"
          />
        </div>

        {/* "PlayPilot" text — appears at 2.6s */}
        <p
          style={{
            marginTop: 16,
            opacity: phase === 'text' || phase === 'done' ? 1 : 0,
            transform:
              phase === 'text' || phase === 'done'
                ? 'translateY(0)'
                : 'translateY(5px)',
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
          }}
          className="text-2xl font-bold text-primary tracking-tight relative z-10"
        >
          PlayPilot
        </p>
      </div>
    </div>
  );
}
