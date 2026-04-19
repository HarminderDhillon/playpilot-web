'use client';

import { ScrollReveal } from './ScrollReveal';

const metrics = [
  { label: 'Observations', value: '47', color: 'text-accent-blue', bg: 'bg-accent-blue/15' },
  { label: 'Schema Coverage', value: '94%', color: 'text-accent-green', bg: 'bg-accent-green/15' },
  { label: 'Reflection Rate', value: '87%', color: 'text-accent-purple', bg: 'bg-accent-purple/15' },
  { label: 'Family Engagement', value: '61%', color: 'text-accent-orange', bg: 'bg-accent-orange/15' },
];

const weeklyBars = [40, 65, 55, 80, 70, 90, 60];

const activityItems = [
  { initials: 'SM', color: 'bg-accent-coral', line1: 'w-24', line2: 'w-16' },
  { initials: 'PK', color: 'bg-accent-teal', line1: 'w-28', line2: 'w-20' },
  { initials: 'JL', color: 'bg-accent-purple', line1: 'w-20', line2: 'w-14' },
];

const features = [
  { icon: '📊', title: 'Real-time schema trends', desc: 'See how play patterns evolve across your program in real time.' },
  { icon: '🔄', title: 'Reflection frequency tracking', desc: 'Know which educators are reflecting and who needs support.' },
  { icon: '✅', title: 'Compliance readiness indicators', desc: 'Always know where you stand before licensing visits.' },
  { icon: '👨‍👩‍👧', title: 'Family engagement metrics', desc: 'Track how families interact with portfolios and updates.' },
];

export function ProductShowcase() {
  return (
    <section className="section-navy-gradient px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-accent-teal uppercase mb-3">
              The Dashboard
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
              Everything your program needs. One view.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* Left — Dashboard mockup */}
          <ScrollReveal>
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 sm:p-6 animate-float-slow">
              {/* Title bar */}
              <div className="flex items-center gap-2 mb-5">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
                <span className="ml-2 text-[10px] font-medium text-white/50">PlayPilot Dashboard</span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {metrics.map((m) => (
                  <div key={m.label} className={`${m.bg} rounded-lg p-3 text-center`}>
                    <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                    <p className="text-[9px] text-white/50 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Weekly trend bars */}
              <div className="rounded-lg bg-white/5 p-3 mb-4">
                <p className="text-[9px] font-semibold text-white/60 mb-3">Weekly Trend</p>
                <div className="flex items-end gap-1.5 h-16">
                  {weeklyBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-accent-teal/60 animate-bar"
                      style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <span key={i} className="flex-1 text-center text-[7px] text-white/30">{d}</span>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-[9px] font-semibold text-white/60 mb-2">Recent Activity</p>
                <div className="space-y-2.5">
                  {activityItems.map((item) => (
                    <div key={item.initials} className="flex items-center gap-2.5">
                      <div className={`h-6 w-6 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                        <span className="text-[8px] font-bold text-white">{item.initials}</span>
                      </div>
                      <div className="space-y-1">
                        <div className={`h-1.5 ${item.line1} rounded bg-white/15`} />
                        <div className={`h-1.5 ${item.line2} rounded bg-white/10`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Feature bullets */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                    <p className="text-sm text-white/60 mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
