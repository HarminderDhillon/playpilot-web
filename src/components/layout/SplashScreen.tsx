'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const DOTS = [
  { color: '#3FA7F5', scatterX: -80, scatterY: -100, angle: 0 },
  { color: '#7B5CF0', scatterX: 90, scatterY: -80, angle: 60 },
  { color: '#5CCB8A', scatterX: 100, scatterY: 30, angle: 120 },
  { color: '#FFC83D', scatterX: -85, scatterY: 80, angle: 180 },
  { color: '#FF8C42', scatterX: 50, scatterY: 95, angle: 240 },
  { color: '#FF5DA2', scatterX: -60, scatterY: -30, angle: 300 },
];

const ORBIT_RADIUS = 85;
const LOGO_SIZE = 140;

export function SplashScreen() {
  const [phase, setPhase] = useState<'scatter' | 'converge' | 'logo' | 'done'>('scatter');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if splash was already shown this session
    if (sessionStorage.getItem('splash-shown')) {
      setVisible(false);
      return;
    }

    // Phase timeline
    const t1 = setTimeout(() => setPhase('converge'), 100);
    const t2 = setTimeout(() => setPhase('logo'), 1200);
    const t3 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('splash-shown', '1');
    }, 3200);
    const t4 = setTimeout(() => setVisible(false), 3700);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: '#F7F3EC',
        opacity: phase === 'done' ? 0 : 1,
        pointerEvents: phase === 'done' ? 'none' : 'auto',
      }}
    >
      {/* Scatter/converge dots */}
      {DOTS.map((dot, i) => (
        <div
          key={`scatter-${i}`}
          style={{
            position: 'absolute',
            width: phase === 'logo' ? 10 : 24,
            height: phase === 'logo' ? 10 : 24,
            borderRadius: '50%',
            backgroundColor: dot.color,
            opacity: phase === 'scatter' ? 0 : phase === 'converge' ? 0.9 : 0,
            transform: phase === 'converge'
              ? 'translate(0px, 0px) scale(0.3)'
              : `translate(${dot.scatterX}px, ${dot.scatterY}px) scale(0.5)`,
            transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.07}s`,
          }}
        />
      ))}

      {/* Logo + orbit */}
      <div
        style={{
          opacity: phase === 'logo' || phase === 'done' ? 1 : 0,
          transform: phase === 'logo' || phase === 'done' ? 'scale(1)' : 'scale(0)',
          transition: 'opacity 0.4s ease-out, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div style={{ position: 'relative', width: 160, height: 160 }}>
          {/* Logo image — centered in the orbit area */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: LOGO_SIZE,
            height: LOGO_SIZE,
          }}>
            <Image
              src="/logo-plane.png"
              alt="PlayPilot"
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Orbiting dots — centered on the same point */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              animation: phase === 'logo' ? 'splash-orbit 8s linear infinite' : undefined,
            }}
          >
            {DOTS.map((dot, i) => {
              const angleDeg = dot.angle;
              return (
                <div
                  key={`orbit-${i}`}
                  style={{
                    position: 'absolute',
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: dot.color,
                    boxShadow: `0 0 10px 3px ${dot.color}50`,
                    top: '50%',
                    left: '50%',
                    marginTop: -6,
                    marginLeft: -6,
                    opacity: phase === 'logo' ? 1 : 0,
                    transform: phase === 'logo'
                      ? `rotate(${angleDeg}deg) translateY(-${ORBIT_RADIUS}px)`
                      : `rotate(${angleDeg}deg) translateY(0px)`,
                    transition: `opacity 0.3s ease-out ${0.3 + i * 0.05}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + i * 0.05}s`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes splash-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
