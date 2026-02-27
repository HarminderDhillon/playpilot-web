const scaleFeatures = [
  {
    icon: '🏢',
    title: 'Multi-Centre Support',
    description: 'One platform, many locations. Each centre operates independently with shared reporting up to agency level.',
  },
  {
    icon: '🔐',
    title: 'Role-Based Access',
    description: 'Educators, supervisors, directors, parents — everyone sees exactly what they need. Nothing more, nothing less.',
  },
  {
    icon: '📋',
    title: 'Compliance-Ready Reporting',
    description: 'Generate licensing reports, framework alignment summaries, and quality improvement evidence with a click.',
  },
  {
    icon: '🌐',
    title: 'Framework Agnostic',
    description: 'Starting with Alberta\'s Flight. Built to support EYLF, Te Whāriki, EYFS, and any curriculum framework globally.',
  },
];

export function BuiltForScale() {
  return (
    <section className="bg-surface-variant px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Future-Ready</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Built for scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Whether you&apos;re a single room or a 50-centre agency, PlayPilot grows with you.
            Secure architecture, flexible permissions, and framework-agnostic design from day one.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {scaleFeatures.map((f) => (
            <div key={f.title} className="flex gap-4 rounded-xl border border-border bg-surface p-6">
              <span className="text-2xl shrink-0">{f.icon}</span>
              <div>
                <h3 className="text-base font-semibold text-text">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
