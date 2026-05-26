'use client';

export function ProductMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Glow behind devices */}
      <div className="absolute inset-0 bg-primary/8 blur-3xl rounded-full scale-110" />

      {/* Dashboard mockup (back) */}
      <div className="relative glass-card rounded-2xl p-5 animate-float-slow">
        {/* Title bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
          <div className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
          <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
          <span className="ml-2 text-[10px] font-medium text-text-muted">Leadership Console</span>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="rounded-lg bg-accent-blue/10 p-2.5 text-center">
            <p className="text-lg font-bold text-accent-blue">47</p>
            <p className="text-[9px] text-text-muted">Observations</p>
          </div>
          <div className="rounded-lg bg-accent-green/10 p-2.5 text-center">
            <p className="text-lg font-bold text-accent-green">94%</p>
            <p className="text-[9px] text-text-muted">Compliance</p>
          </div>
          <div className="rounded-lg bg-accent-purple/10 p-2.5 text-center">
            <p className="text-lg font-bold text-accent-purple">8</p>
            <p className="text-[9px] text-text-muted">Schemas</p>
          </div>
        </div>

        {/* Schema bars */}
        <div className="rounded-lg bg-background/60 p-3">
          <p className="text-[9px] font-semibold text-text mb-2">Schema Distribution</p>
          <div className="space-y-1.5">
            {[
              { name: 'Transporting', pct: 28, color: 'bg-accent-orange' },
              { name: 'Trajectory', pct: 22, color: 'bg-accent-blue' },
              { name: 'Enclosing', pct: 18, color: 'bg-accent-purple' },
              { name: 'Rotation', pct: 15, color: 'bg-accent-green' },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-1.5">
                <span className="text-[8px] text-text-muted w-16 shrink-0">{s.name}</span>
                <div className="flex-1 h-1.5 rounded-full bg-surface-variant">
                  <div className={`h-1.5 rounded-full ${s.color} animate-bar`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile mockup (front, overlapping) */}
      <div className="absolute -bottom-6 -right-4 w-36 glass-card rounded-2xl p-3 animate-float-delay shadow-xl">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="h-5 w-5 rounded-full bg-accent-blue/15 flex items-center justify-center">
            <span className="text-[8px] font-bold text-accent-blue">N</span>
          </div>
          <span className="text-[8px] font-semibold text-text">New Observation</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-surface-variant" />
          <div className="h-2 w-3/4 rounded bg-surface-variant" />
          <div className="flex gap-1 mt-2">
            <span className="text-[7px] bg-accent-purple/15 text-accent-purple px-1.5 py-0.5 rounded">Cognitive</span>
            <span className="text-[7px] bg-accent-orange/15 text-accent-orange px-1.5 py-0.5 rounded">Trajectory</span>
          </div>
        </div>
      </div>
    </div>
  );
}
