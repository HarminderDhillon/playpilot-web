const features = [
  {
    icon: '🎤',
    title: 'Voice-First Capture',
    description: 'Speak your observation — PlayPilot transcribes it and maps it to developmental domains automatically.',
    color: 'bg-accent-blue/10 text-accent-blue',
  },
  {
    icon: '🧩',
    title: 'Schema Spotting',
    description: 'Identify transporting, trajectory, enclosing and more. The app learns your children\'s play patterns over time.',
    color: 'bg-accent-orange/10 text-accent-orange',
  },
  {
    icon: '📝',
    title: 'NNN Framework',
    description: 'Built around Noticing, Naming, Nurturing — the proven approach to intentional documentation.',
    color: 'bg-accent-purple/10 text-accent-purple',
  },
  {
    icon: '📊',
    title: 'Milestone Tracking',
    description: 'Visual progress against developmental milestones. Know where every child is at a glance.',
    color: 'bg-accent-green/10 text-accent-green',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Sharing',
    description: 'Beautiful parent-friendly views of learning stories. Keep families connected without the jargon.',
    color: 'bg-accent-pink/10 text-accent-pink',
  },
  {
    icon: '👩‍🏫',
    title: 'Educator Community',
    description: 'Group chats, shared provocations, and peer support — because great educators learn together.',
    color: 'bg-accent-teal/10 text-accent-teal',
  },
];

export function FeatureGrid() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Designed with real educators. No bloat, no steep learning curve.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-text">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
