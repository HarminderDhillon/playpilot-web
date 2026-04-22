'use client';

import { useEffect, useRef, useState } from 'react';

// SVG paper plane icon — simple, clean silhouette
function PlaneSVG({ size = 28, color = '#1F2A44' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 12L4 10.5L10 12.5L19 5.5L12 14.5L14 20.5L12.5 22L9.5 15.5L2.5 12Z"
        fill={color}
        opacity={0.85}
      />
      <path
        d="M19 5.5L10 12.5L9.5 15.5L12 14.5L19 5.5Z"
        fill={color}
        opacity={0.6}
      />
    </svg>
  );
}

export function FlyingPlane() {
  const [triggered, setTriggered] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <div
      ref={sentinelRef}
      className="relative w-full overflow-hidden"
      style={{ height: 80 }}
    >
      {/* Dashed trail */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: triggered ? '85%' : '0%',
          height: 0,
          borderTop: '2px dashed rgba(31, 42, 68, 0.15)',
          transition: 'width 2.5s cubic-bezier(0.22, 1, 0.36, 1)',
          transformOrigin: 'left center',
        }}
      />

      {/* Colored accent dots along the trail */}
      {triggered && (
        <>
          {[
            { color: '#3FA7F5', left: '15%', delay: '0.4s' },
            { color: '#5CCB8A', left: '35%', delay: '0.8s' },
            { color: '#7B5CF0', left: '55%', delay: '1.2s' },
            { color: '#FFC83D', left: '70%', delay: '1.5s' },
          ].map((dot, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: dot.left,
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: dot.color,
                marginTop: -3,
                opacity: 0,
                animation: `plane-dot-pop 0.4s ease-out ${dot.delay} forwards`,
              }}
            />
          ))}
        </>
      )}

      {/* Paper plane */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: triggered ? '85%' : '-5%',
          transform: 'translateY(-50%) rotate(-20deg)',
          transition: 'left 2.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <PlaneSVG size={28} color="#1F2A44" />
      </div>

      <style>{`
        @keyframes plane-dot-pop {
          0% { opacity: 0; transform: scale(0); }
          60% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0.5; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
