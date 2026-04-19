'use client';

const SHAPES = [
  // Teal circle — upper left
  {
    type: 'circle' as const,
    size: 170,
    color: 'var(--accent-teal)',
    x: '5%', y: '8%',
    drift: { x: 40, y: 30 },
    duration: 18,
    delay: 0,
    breathDuration: 7,
    blur: 6,
  },
  // Purple rounded rect — upper right
  {
    type: 'rect' as const,
    width: 180, height: 90,
    color: 'var(--accent-purple)',
    x: '78%', y: '5%',
    drift: { x: -35, y: 40 },
    duration: 22,
    delay: 2,
    rotate: 18,
    breathDuration: 9,
    blur: 8,
  },
  // Yellow circle — center left
  {
    type: 'circle' as const,
    size: 130,
    color: 'var(--accent-yellow)',
    x: '15%', y: '55%',
    drift: { x: 50, y: -40 },
    duration: 20,
    delay: 4,
    breathDuration: 6,
    blur: 5,
  },
  // Pink rounded rect — top center
  {
    type: 'rect' as const,
    width: 130, height: 65,
    color: 'var(--accent-pink)',
    x: '45%', y: '3%',
    drift: { x: -30, y: 35 },
    duration: 24,
    delay: 1,
    rotate: -15,
    breathDuration: 8,
    blur: 7,
  },
  // Coral circle — right center
  {
    type: 'circle' as const,
    size: 120,
    color: 'var(--accent-coral)',
    x: '82%', y: '50%',
    drift: { x: -40, y: -30 },
    duration: 19,
    delay: 3,
    breathDuration: 7.5,
    blur: 6,
  },
  // Small teal circle — center top
  {
    type: 'circle' as const,
    size: 85,
    color: 'var(--accent-teal)',
    x: '55%', y: '15%',
    drift: { x: 30, y: 25 },
    duration: 16,
    delay: 5,
    breathDuration: 5.5,
    blur: 4,
  },
  // Purple circle — center
  {
    type: 'circle' as const,
    size: 110,
    color: 'var(--accent-purple)',
    x: '35%', y: '40%',
    drift: { x: 45, y: -25 },
    duration: 21,
    delay: 2,
    breathDuration: 8.5,
    blur: 7,
  },
  // Yellow rounded rect — lower right
  {
    type: 'rect' as const,
    width: 150, height: 60,
    color: 'var(--accent-yellow)',
    x: '68%', y: '72%',
    drift: { x: -30, y: -35 },
    duration: 23,
    delay: 6,
    rotate: 10,
    breathDuration: 6.5,
    blur: 5,
  },
  // Pink star — left center
  {
    type: 'star' as const,
    size: 85,
    color: 'var(--accent-pink)',
    x: '8%', y: '35%',
    drift: { x: 35, y: -20 },
    duration: 25,
    delay: 1,
    rotate: 35,
    breathDuration: 9.5,
    blur: 4,
  },
  // Coral squiggle — bottom center
  {
    type: 'squiggle' as const,
    size: 180,
    color: 'var(--accent-coral)',
    x: '40%', y: '80%',
    drift: { x: 50, y: -20 },
    duration: 20,
    delay: 3,
    breathDuration: 7,
    blur: 3,
  },
];

function StarSVG({ size, color }: { size: number; color: string }) {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? size / 2 : size / 4.5;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(`${size / 2 + r * Math.cos(angle)},${size / 2 + r * Math.sin(angle)}`);
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={points.join(' ')} fill={color} />
    </svg>
  );
}

function SquiggleSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size * 0.3} viewBox={`0 0 ${size} ${size * 0.3}`}>
      <path
        d={`M 0 ${size * 0.15} Q ${size * 0.12} 0, ${size * 0.25} ${size * 0.15} T ${size * 0.5} ${size * 0.15} T ${size * 0.75} ${size * 0.15} T ${size} ${size * 0.15}`}
        fill="none"
        stroke={color}
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {SHAPES.map((shape, i) => {
        const driftAnim = `hero-drift-${i}`;
        const breathAnim = `hero-breath-${i}`;
        const fadeAnim = 'hero-fade-in';
        const rotateStr = 'rotate' in shape && shape.rotate
          ? `rotate(${shape.rotate}deg)`
          : '';

        // Stagger fade-in: 0.2s apart per shape
        const fadeDelay = i * 0.2;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: shape.x,
              top: shape.y,
              opacity: 0,
              filter: `blur(${shape.blur}px)`,
              animation: [
                `${fadeAnim} 1.5s ease-out ${fadeDelay}s forwards`,
                `${driftAnim} ${shape.duration}s ease-in-out ${shape.delay}s infinite alternate`,
                `${breathAnim} ${shape.breathDuration}s ease-in-out infinite alternate`,
              ].join(', '),
            }}
          >
            <style>{`
              @keyframes ${driftAnim} {
                0% { translate: 0 0; ${rotateStr ? `rotate: ${'rotate' in shape ? shape.rotate : 0}deg;` : ''} }
                100% { translate: ${shape.drift.x}px ${shape.drift.y}px; ${rotateStr ? `rotate: ${(('rotate' in shape ? shape.rotate : 0) || 0) + 15}deg;` : ''} }
              }
              @keyframes ${breathAnim} {
                0% { scale: 0.95; }
                100% { scale: 1.06; }
              }
              @keyframes ${fadeAnim} {
                from { opacity: 0; }
                to { opacity: 0.14; }
              }
            `}</style>
            {shape.type === 'circle' && (
              <div
                style={{
                  width: shape.size,
                  height: shape.size,
                  borderRadius: '50%',
                  backgroundColor: shape.color,
                }}
              />
            )}
            {shape.type === 'rect' && (
              <div
                style={{
                  width: shape.width,
                  height: shape.height,
                  borderRadius: 20,
                  backgroundColor: shape.color,
                }}
              />
            )}
            {shape.type === 'star' && (
              <StarSVG size={shape.size} color={shape.color} />
            )}
            {shape.type === 'squiggle' && (
              <SquiggleSVG size={shape.size} color={shape.color} />
            )}
          </div>
        );
      })}
    </div>
  );
}
