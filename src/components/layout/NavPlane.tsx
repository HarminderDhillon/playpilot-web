'use client';

import { useEffect, useState } from 'react';

export function NavPlane() {
  const [fly, setFly] = useState(false);

  useEffect(() => {
    // Start after a short delay so the page loads first
    const timer = setTimeout(() => setFly(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none overflow-hidden"
      style={{ height: 64 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 64"
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }}
      >
        {/* Subtle dashed trail */}
        <path
          d="M-20 52 Q 200 52, 350 32 T 700 20 T 1050 36 T 1420 12"
          stroke="rgba(31,42,68,0.06)"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDashoffset: fly ? 0 : 1500,
            transition: 'stroke-dashoffset 4s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
          pathLength="1500"
        />

        {/* Plane riding the path */}
        {fly && (
          <text fontSize="20" dominantBaseline="central" textAnchor="middle">
            <animateMotion
              dur="4s"
              fill="freeze"
              rotate="auto"
              keySplines="0.25 0.1 0.25 1"
              calcMode="spline"
              keyTimes="0;1"
              path="M-20 52 Q 200 52, 350 32 T 700 20 T 1050 36 T 1420 12"
            />
            ✈️
          </text>
        )}
      </svg>
    </div>
  );
}
