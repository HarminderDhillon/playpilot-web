'use client';

const SHAPES = [
  // Top left — teal circle
  { type: 'circle', size: 140, color: 'var(--accent-teal)', x: '3%', y: '5%', opacity: 0.08 },
  // Top right — purple rounded rect
  { type: 'rect', width: 160, height: 70, color: 'var(--accent-purple)', x: '82%', y: '3%', rotate: 12, opacity: 0.07 },
  // Left center — pink star
  { type: 'star', size: 70, color: 'var(--accent-pink)', x: '6%', y: '40%', rotate: 20, opacity: 0.09 },
  // Center top — yellow circle
  { type: 'circle', size: 90, color: 'var(--accent-yellow)', x: '50%', y: '8%', opacity: 0.07 },
  // Right center — coral circle
  { type: 'circle', size: 110, color: 'var(--accent-coral)', x: '88%', y: '45%', opacity: 0.08 },
  // Bottom left — green circle
  { type: 'circle', size: 100, color: 'var(--accent-green)', x: '12%', y: '75%', opacity: 0.07 },
  // Bottom center — coral squiggle
  { type: 'squiggle', size: 150, color: 'var(--accent-coral)', x: '45%', y: '85%', opacity: 0.06 },
  // Bottom right — purple circle
  { type: 'circle', size: 120, color: 'var(--accent-purple)', x: '78%', y: '72%', opacity: 0.06 },
  // Mid left — yellow rounded rect
  { type: 'rect', width: 100, height: 45, color: 'var(--accent-yellow)', x: '20%', y: '55%', rotate: -8, opacity: 0.06 },
  // Mid right — teal circle
  { type: 'circle', size: 75, color: 'var(--accent-teal)', x: '70%', y: '25%', opacity: 0.07 },
] as const;

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
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            opacity: shape.opacity,
            transform: 'rotate' in shape && shape.rotate ? `rotate(${shape.rotate}deg)` : undefined,
          }}
        >
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
                borderRadius: 16,
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
      ))}
    </div>
  );
}
