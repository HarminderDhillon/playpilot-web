'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ProductMockup } from './ProductMockup';
import { SkyBackground } from './SkyBackground';

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
    <section className="section-sky relative overflow-hidden px-6 pt-32 pb-24 sm:pt-44 sm:pb-36">
      <SkyBackground />
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
        {/* Left — copy */}
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 border border-primary/10">
            <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">Built for Early Childhood Leaders</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text">
            <span className="font-serif italic">Less pressure.</span><br />
            <span className="font-serif italic">More presence.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base sm:text-lg text-text-secondary leading-relaxed">
            Early learning documentation for educators, leaders, and families.
          </p>

          <p className="mt-4 max-w-md text-sm font-semibold text-text leading-relaxed">
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
          {/* Scaled mockup with parallax */}
          <div ref={mockupRef} className="origin-center" style={{ transform: 'scale(1.2)' }}>
            <ProductMockup />
          </div>
        </div>
      </div>

    </section>
  );
}
