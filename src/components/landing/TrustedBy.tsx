'use client';

import { useEffect, useRef } from 'react';

const programs = [
  'Sunshine Dayhome',
  'Little Explorers',
  'Prairie Child Co.',
  'Bright Beginnings',
  'First Steps Academy',
  'Wildflower Learning',
  'Roots & Wings ELC',
  'Tiny Trailblazers',
  'Maple Leaf Montessori',
  'Northern Lights CDC',
  'Pebble Creek Preschool',
  'Golden Prairie ELC',
  'Blue Sky Childcare',
  'Rosewood Academy',
  'Stepping Stones Learning',
  'Cedar Grove Dayhome',
];

const accents = [
  'bg-accent-coral/10 text-accent-coral',
  'bg-accent-teal/10 text-accent-teal',
  'bg-accent-purple/10 text-accent-purple',
  'bg-accent-blue/10 text-accent-blue',
  'bg-accent-green/10 text-accent-green',
  'bg-accent-orange/10 text-accent-orange',
  'bg-accent-yellow/10 text-accent-yellow',
  'bg-accent-pink/10 text-accent-pink',
];

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    const speed = 0.5; // px per frame
    let rafId: number;

    const step = () => {
      offset -= speed;
      // Reset when first half has fully scrolled out
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(offset) >= halfWidth) {
        offset = 0;
      }
      track.style.transform = `translateX(${offset}px)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const doubled = [...programs, ...programs];

  return (
    <section className="section-white border-y border-divider px-6 py-16 sm:py-20 overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-widest text-text-muted uppercase mb-8">
        Trusted by early learning programs across Canada
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold ${accents[i % accents.length]}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
