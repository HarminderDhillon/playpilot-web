'use client';

/* ── Educator Mockup: Observation capture screen ── */
export function ObservationMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 animate-float-slow">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
        <span className="ml-2 text-[10px] font-medium text-text-muted">New Observation</span>
      </div>
      {/* Text area placeholder */}
      <div className="rounded-lg bg-background/60 p-3 mb-3 space-y-2">
        <div className="h-2 w-full rounded bg-surface-variant" />
        <div className="h-2 w-5/6 rounded bg-surface-variant" />
        <div className="h-2 w-3/4 rounded bg-surface-variant" />
        <div className="h-2 w-2/3 rounded bg-surface-variant" />
      </div>
      {/* Tag chips */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="text-[9px] font-medium bg-accent-purple/12 text-accent-purple px-2.5 py-1 rounded-full">Cognitive</span>
        <span className="text-[9px] font-medium bg-accent-orange/12 text-accent-orange px-2.5 py-1 rounded-full">Trajectory</span>
        <span className="text-[9px] font-medium bg-accent-blue/12 text-accent-blue px-2.5 py-1 rounded-full">Transporting</span>
      </div>
      {/* Save button */}
      <div className="flex justify-end">
        <div className="rounded-lg bg-accent-coral px-4 py-1.5">
          <span className="text-[10px] font-semibold text-white">Save Observation</span>
        </div>
      </div>
    </div>
  );
}

/* ── Leader Mockup: Supervisor dashboard ── */
export function SupervisorMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 animate-float-slow">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
        <span className="ml-2 text-[10px] font-medium text-text-muted">Program Overview</span>
      </div>
      {/* 2x2 metric grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-lg bg-accent-teal/10 p-2.5 text-center">
          <p className="text-lg font-bold text-accent-teal">12</p>
          <p className="text-[9px] text-text-muted">Educators</p>
        </div>
        <div className="rounded-lg bg-accent-blue/10 p-2.5 text-center">
          <p className="text-lg font-bold text-accent-blue">142</p>
          <p className="text-[9px] text-text-muted">This Month</p>
        </div>
        <div className="rounded-lg bg-accent-purple/10 p-2.5 text-center">
          <p className="text-lg font-bold text-accent-purple">94%</p>
          <p className="text-[9px] text-text-muted">Compliance</p>
        </div>
        <div className="rounded-lg bg-accent-green/10 p-2.5 text-center">
          <p className="text-lg font-bold text-accent-green">7/8</p>
          <p className="text-[9px] text-text-muted">Schemas</p>
        </div>
      </div>
      {/* Compliance status dots */}
      <div className="rounded-lg bg-background/60 p-3">
        <p className="text-[9px] font-semibold text-text mb-2">Compliance Status</p>
        <div className="space-y-1.5">
          {[
            { name: 'Room A', status: 'bg-accent-green' },
            { name: 'Room B', status: 'bg-accent-green' },
            { name: 'Room C', status: 'bg-accent-yellow' },
          ].map((r) => (
            <div key={r.name} className="flex items-center justify-between">
              <span className="text-[9px] text-text-muted">{r.name}</span>
              <div className="flex items-center gap-1.5">
                <div className={`h-2 w-2 rounded-full ${r.status}`} />
                <span className="text-[8px] text-text-muted">{r.status.includes('green') ? 'On track' : 'Needs review'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Family Mockup: Parent timeline ── */
export function ParentTimelineMockup() {
  return (
    <div className="glass-card rounded-2xl p-5 animate-float-slow">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
        <span className="ml-2 text-[10px] font-medium text-text-muted">Liam&apos;s Learning Journey</span>
      </div>
      {/* Timeline entries */}
      <div className="space-y-4 mb-4">
        {[
          { color: 'bg-accent-blue', date: 'Feb 24', text: 'Built a marble run exploring trajectory' },
          { color: 'bg-accent-purple', date: 'Feb 21', text: 'Wrapped toys in blankets: Enclosing' },
          { color: 'bg-accent-orange', date: 'Feb 18', text: 'Carried blocks across the room: Transporting' },
        ].map((entry) => (
          <div key={entry.date} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`h-3 w-3 rounded-full ${entry.color} shrink-0 mt-0.5`} />
              <div className="w-px flex-1 bg-divider mt-1" />
            </div>
            <div>
              <p className="text-[9px] text-text-muted">{entry.date}</p>
              <p className="text-[10px] text-text leading-snug mt-0.5">{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* View portfolio button */}
      <div className="flex justify-center">
        <div className="rounded-lg bg-accent-yellow px-4 py-1.5">
          <span className="text-[10px] font-semibold text-text">View Portfolio</span>
        </div>
      </div>
    </div>
  );
}
