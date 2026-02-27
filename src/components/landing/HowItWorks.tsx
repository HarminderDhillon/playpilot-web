const steps = [
  {
    number: '01',
    title: 'Capture',
    description: 'Snap a photo, record a voice note, or type a quick observation during play. It takes seconds.',
    accent: 'text-accent-blue',
    border: 'border-accent-blue/30',
  },
  {
    number: '02',
    title: 'Refine',
    description: 'PlayPilot drafts a learning story using the NNN framework. Tag domains, link schemas, add your voice.',
    accent: 'text-accent-purple',
    border: 'border-accent-purple/30',
  },
  {
    number: '03',
    title: 'Share',
    description: 'Publish to portfolios, share with families, and track progress — all from one place.',
    accent: 'text-accent-green',
    border: 'border-accent-green/30',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface-variant px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text sm:text-4xl">How it works</h2>
          <p className="mt-4 text-text-secondary">Three steps. That&apos;s it.</p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-xl border bg-surface p-6 ${step.border}`}
            >
              <span className={`text-2xl font-bold ${step.accent}`}>{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
