import Link from 'next/link';

const consoleFeatures = [
  'Documentation consistency across educators',
  'Emerging schemas across classrooms',
  'Domain coverage balance',
  'Milestone trends',
  'Family engagement metrics',
  'Educator reflection frequency',
  'Compliance readiness indicators',
];

export function LeadershipConsole() {
  return (
    <section id="leadership-console" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-3">For Leaders</p>
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              The Leadership Console&trade;
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A real-time view of your program&apos;s learning ecosystem.
            </p>

            <ul className="mt-8 space-y-3">
              {consoleFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg bg-accent-purple/5 px-4 py-3">
              <p className="text-sm font-medium text-accent-purple">
                PlayPilot doesn&apos;t just document learning — it reveals it.
              </p>
            </div>

            <Link
              href="/login"
              className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
            >
              Explore the Leadership Console
            </Link>
          </div>

          {/* Right — mock dashboard */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
            {/* Status bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-accent-green" />
              <span className="text-xs font-medium text-text-muted">Live — Program Overview</span>
            </div>

            {/* Top metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-lg bg-accent-blue/10 p-3 text-center">
                <p className="text-2xl font-bold text-accent-blue">94%</p>
                <p className="text-[10px] text-text-muted">Doc. Frequency</p>
              </div>
              <div className="rounded-lg bg-accent-green/10 p-3 text-center">
                <p className="text-2xl font-bold text-accent-green">87%</p>
                <p className="text-[10px] text-text-muted">Compliance</p>
              </div>
              <div className="rounded-lg bg-accent-purple/10 p-3 text-center">
                <p className="text-2xl font-bold text-accent-purple">72%</p>
                <p className="text-[10px] text-text-muted">Reflection Rate</p>
              </div>
              <div className="rounded-lg bg-accent-pink/10 p-3 text-center">
                <p className="text-2xl font-bold text-accent-pink">61%</p>
                <p className="text-[10px] text-text-muted">Family Engagement</p>
              </div>
            </div>

            {/* Schema distribution */}
            <div className="rounded-lg bg-surface-variant p-4 mb-4">
              <p className="text-xs font-semibold text-text mb-3">Schema Distribution</p>
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

            {/* Compliance readiness */}
            <div className="rounded-lg bg-surface-variant p-4">
              <p className="text-xs font-semibold text-text mb-3">Compliance Readiness</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Doc. Frequency', status: 'green' },
                  { label: 'Portfolio Complete', status: 'green' },
                  { label: 'Missing Reports', status: 'yellow' },
                ].map((c) => (
                  <div key={c.label} className="flex flex-col items-center gap-1">
                    <div className={`h-3 w-3 rounded-full ${c.status === 'green' ? 'bg-accent-green' : 'bg-accent-yellow'}`} />
                    <span className="text-[9px] text-text-muted text-center">{c.label}</span>
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
