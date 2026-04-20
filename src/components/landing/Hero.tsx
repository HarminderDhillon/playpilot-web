'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ProductMockup } from './ProductMockup';

export function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (mockupRef.current && window.innerWidth > 1024) {
          const scrollY = window.scrollY;
          mockupRef.current.style.transform = `scale(1.2) translateY(${scrollY * -0.15}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="section-overlay-top relative overflow-hidden grid-bg px-6 pt-32 pb-24 sm:pt-44 sm:pb-36">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
        {/* Left — copy */}
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 border border-primary/10">
            <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">Built for Early Childhood Leaders</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.5rem]">
            Empowering the next generation of{' '}
            <span className="text-primary">early childhood leaders.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-text-secondary leading-relaxed">
            In a world moving faster every day, educators deserve systems that support
            presence, not pressure. PlayPilot transforms documentation from a compliance
            burden into a powerful engine for insight, creativity, and community.
          </p>

          <p className="mt-6 max-w-md text-sm font-semibold text-text leading-relaxed">
            Learning happens through play.<br />
            Educators should be free to witness it, not trapped in documenting it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#the-problem" className="btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary text-center">
              Reclaim Documentation
            </Link>
            <Link href="#the-vision" className="btn-secondary rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text text-center">
              See the Vision
            </Link>
          </div>
        </div>

        {/* Right — product mockup with floating shapes */}
        <div className="reveal hidden lg:block relative" style={{ animationDelay: '200ms' }}>
          {/* Floating accent shapes */}
          <div className="pointer-events-none absolute -top-8 -left-10 h-20 w-20 rounded-full bg-accent-teal/15 animate-drift" />
          <div className="pointer-events-none absolute top-12 -right-6 h-16 w-24 rounded-2xl bg-accent-purple/12 animate-drift-slow" />
          <div className="pointer-events-none absolute -bottom-4 left-8 h-14 w-14 rounded-full bg-accent-yellow/15 animate-drift-delay" />
          <div className="pointer-events-none absolute bottom-20 -right-8 h-12 w-12 rounded-lg bg-accent-pink/12 animate-drift rotate-12" />

          {/* Scaled mockup with parallax */}
          <div ref={mockupRef} className="origin-center" style={{ transform: 'scale(1.2)' }}>
            <ProductMockup />
          </div>
        </div>
      </div>

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/4 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-purple/5 blur-3xl" />
    </section>
  );
}
