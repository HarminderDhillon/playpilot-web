'use client';

import { useEffect, useRef, useState } from 'react';

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
      { threshold: 0.2 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <div
      ref={sentinelRef}
      className="relative w-full overflow-hidden"
      style={{ height: 200 }}
    >
      {/* Curved SVG trail path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-50 180 Q 200 180, 350 120 T 600 60 T 850 100 T 1100 30 L 1250 20"
          stroke="rgba(31,42,68,0.1)"
          strokeWidth="2"
          strokeDasharray="8 6"
          strokeLinecap="round"
          style={{
            strokeDashoffset: triggered ? 0 : 2000,
            transition: 'stroke-dashoffset 3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          pathLength="2000"
        />
      </svg>

      {/* Sparkle particles along the path */}
      {triggered && (
        <>
          {[
            { x: '18%', y: '55%', color: '#3FA7F5', size: 10, delay: '0.5s' },
            { x: '32%', y: '38%', color: '#5CCB8A', size: 12, delay: '0.9s' },
            { x: '48%', y: '25%', color: '#7B5CF0', size: 8, delay: '1.3s' },
            { x: '62%', y: '35%', color: '#FF5DA2', size: 11, delay: '1.6s' },
            { x: '75%', y: '42%', color: '#FFC83D', size: 9, delay: '1.9s' },
            { x: '88%', y: '18%', color: '#FF8C42', size: 10, delay: '2.2s' },
          ].map((spark, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: spark.x,
                top: spark.y,
                width: spark.size,
                height: spark.size,
                borderRadius: '50%',
                backgroundColor: spark.color,
                boxShadow: `0 0 ${spark.size * 2}px ${spark.size / 2}px ${spark.color}40`,
                opacity: 0,
                animation: `sparkle-pop 0.8s ease-out ${spark.delay} forwards`,
              }}
            />
          ))}
        </>
      )}

      {/* Paper plane — glides along the exact SVG path */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            offsetPath: "path('M-50 180 Q 200 180, 350 120 T 600 60 T 850 100 T 1100 30 L 1250 20')",
            offsetRotate: 'auto',
            offsetDistance: triggered ? '100%' : '0%',
            transition: 'offset-distance 3s cubic-bezier(0.25, 0.1, 0.25, 1)',
            fontSize: 36,
            lineHeight: 1,
            opacity: triggered ? 1 : 0,
            position: 'absolute',
          } as React.CSSProperties}
        >
          ✈️
        </div>
      </div>

      <style>{`
        @keyframes sparkle-pop {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.4) rotate(180deg); }
          100% { opacity: 0.4; transform: scale(1) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
