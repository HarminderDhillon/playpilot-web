import Link from 'next/link';

const capabilities = [
  { label: 'Program trend analysis', icon: '📈' },
  { label: 'Emerging interests across rooms', icon: '🔭' },
  { label: 'Schema distribution patterns', icon: '🧩' },
  { label: 'Milestone tracking heatmaps', icon: '📊' },
  { label: 'Educator reflection support', icon: '🪞' },
  { label: 'Licensing-ready report generation', icon: '📋' },
];

export function LeadershipConsole() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-3">For Leaders</p>
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              The Leadership Console
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              More than a dashboard — a window into your program&apos;s pedagogical health.
              Support educators through data-informed reflection, identify emerging interests
              across rooms, and generate compliance-ready reports without chasing paperwork.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className="text-base">{c.icon}</span>
                  <span className="text-sm text-text-secondary">{c.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/login"
              className="mt-8 inline-block rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
            >
              Access the Console
            </Link>
          </div>

          {/* Right — mock dashboard preview */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-accent-green" />
              <span className="text-xs font-medium text-text-muted">Live — Sunshine Room Team</span>
            </div>

            {/* Mock stat cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="rounded-lg bg-accent-blue/10 p-3 text-center">
                <p className="text-2xl font-bold text-accent-blue">47</p>
                <p className="text-[10px] text-text-muted">Observations</p>
              </div>
              <div className="rounded-lg bg-accent-green/10 p-3 text-center">
                <p className="text-2xl font-bold text-accent-green">12</p>
                <p className="text-[10px] text-text-muted">Milestones</p>
              </div>
              <div className="rounded-lg bg-accent-purple/10 p-3 text-center">
                <p className="text-2xl font-bold text-accent-purple">8</p>
                <p className="text-[10px] text-text-muted">Schemas</p>
              </div>
            </div>

            {/* Mock schema distribution */}
            <div className="rounded-lg bg-surface-variant p-4">
              <p className="text-xs font-semibold text-text mb-3">Schema Distribution — This Month</p>
              <div className="space-y-2">
                {[
                  { name: 'Transporting', pct: 28, color: 'bg-accent-orange' },
                  { name: 'Trajectory', pct: 22, color: 'bg-accent-blue' },
                  { name: 'Enclosing', pct: 18, color: 'bg-accent-purple' },
                  { name: 'Rotation', pct: 15, color: 'bg-accent-green' },
                  { name: 'Connecting', pct: 10, color: 'bg-accent-yellow' },
                  { name: 'Other', pct: 7, color: 'bg-text-muted' },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-2">
                    <span className="text-[10px] text-text-muted w-20 shrink-0">{s.name}</span>
                    <div className="flex-1 h-2 rounded-full bg-surface">
                      <div className={`h-2 rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
                    </div>
                    <span className="text-[10px] text-text-muted w-8 text-right">{s.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
