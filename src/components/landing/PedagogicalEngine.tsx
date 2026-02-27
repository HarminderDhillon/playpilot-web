const stages = [
  {
    label: 'Noticing',
    description: 'Objective, strength-based observation of what the child is doing, saying, and exploring.',
    color: 'bg-accent-blue',
    textColor: 'text-accent-blue',
    bgLight: 'bg-accent-blue/10',
  },
  {
    label: 'Naming',
    description: 'Connecting behaviour to dispositions, schemas, developmental domains, and curriculum outcomes.',
    color: 'bg-accent-purple',
    textColor: 'text-accent-purple',
    bgLight: 'bg-accent-purple/10',
  },
  {
    label: 'Nurturing',
    description: 'Intentional planning — provocations, extensions, home connections, and co-regulation strategies.',
    color: 'bg-accent-green',
    textColor: 'text-accent-green',
    bgLight: 'bg-accent-green/10',
  },
  {
    label: 'Reflecting',
    description: 'Educator growth through pattern recognition, professional insight, and pedagogical review.',
    color: 'bg-accent-orange',
    textColor: 'text-accent-orange',
    bgLight: 'bg-accent-orange/10',
  },
  {
    label: 'Reporting',
    description: 'Meaningful communication — family stories, supervisor dashboards, and compliance-ready exports.',
    color: 'bg-accent-pink',
    textColor: 'text-accent-pink',
    bgLight: 'bg-accent-pink/10',
  },
  {
    label: 'Aligning',
    description: 'Framework mapping to Flight, EYLF, Te Whāriki, and regional licensing standards.',
    color: 'bg-accent-teal',
    textColor: 'text-accent-teal',
    bgLight: 'bg-accent-teal/10',
  },
];

export function PedagogicalEngine() {
  return (
    <section className="bg-surface-variant px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-3">The Engine</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            The PlayPilot Pedagogical Engine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Not just software — a methodology embedded in technology. Every feature is anchored
            in a continuous cycle of intentional practice.
          </p>
        </div>

        {/* Cycle visualization */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <div key={stage.label} className={`relative rounded-xl border border-border bg-surface p-6`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`h-8 w-8 rounded-full ${stage.bgLight} flex items-center justify-center`}>
                  <span className={`text-sm font-bold ${stage.textColor}`}>{i + 1}</span>
                </div>
                <h3 className={`text-lg font-semibold ${stage.textColor}`}>{stage.label}</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">{stage.description}</p>
              {i < stages.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block text-text-muted text-lg">
                  {(i + 1) % 3 !== 0 && '→'}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-5 py-2">
            <span className="text-sm text-primary font-medium">↻ Continuous cycle — documentation that drives practice, not just records it</span>
          </div>
        </div>
      </div>
    </section>
  );
}
