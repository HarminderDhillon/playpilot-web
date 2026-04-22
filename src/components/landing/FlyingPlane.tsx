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

      {/* Paper plane */}
      <div
        className={triggered ? 'plane-fly' : ''}
        style={{
          position: 'absolute',
          top: '85%',
          left: '-8%',
          opacity: triggered ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
          fontSize: 36,
          lineHeight: 1,
        }}
      >
        ✈️
      </div>

      <style>{`
        @keyframes sparkle-pop {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.4) rotate(180deg); }
          100% { opacity: 0.4; transform: scale(1) rotate(360deg); }
        }

        /* Path: M-50 180 Q 200 180, 350 120 T 600 60 T 850 100 T 1100 30 L 1250 20
           viewBox 1200x200 → percentages */
        @keyframes plane-flight {
          0% {
            left: -4%;
            top: 90%;
            transform: rotate(0deg);
          }
          10% {
            left: 8%;
            top: 85%;
            transform: rotate(-10deg);
          }
          20% {
            left: 20%;
            top: 72%;
            transform: rotate(-25deg);
          }
          30% {
            left: 29%;
            top: 60%;
            transform: rotate(-25deg);
          }
          40% {
            left: 40%;
            top: 42%;
            transform: rotate(-22deg);
          }
          50% {
            left: 50%;
            top: 30%;
            transform: rotate(-15deg);
          }
          60% {
            left: 60%;
            top: 35%;
            transform: rotate(12deg);
          }
          70% {
            left: 71%;
            top: 50%;
            transform: rotate(10deg);
          }
          80% {
            left: 80%;
            top: 38%;
            transform: rotate(-25deg);
          }
          90% {
            left: 89%;
            top: 18%;
            transform: rotate(-30deg);
          }
          100% {
            left: 96%;
            top: 10%;
            transform: rotate(-20deg);
          }
        }

        .plane-fly {
          animation: plane-flight 3s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
        }
      `}</style>
    </div>
  );
}
