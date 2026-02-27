const commitments = [
  {
    icon: '💛',
    title: 'Strength-Based Language',
    description: 'AI prompts guide educators toward what children can do, not what they can\'t. Every suggestion centers capability.',
  },
  {
    icon: '🌍',
    title: 'Cultural Responsiveness',
    description: 'Inclusive documentation prompts that honour diverse backgrounds, languages, and ways of knowing.',
  },
  {
    icon: '🔍',
    title: 'Bias-Aware Tagging',
    description: 'Schema and domain suggestions are grounded in developmental research, not assumptions about behaviour.',
  },
  {
    icon: '🤝',
    title: 'Family-Centered Communication',
    description: 'Learning stories are written for partnership — clear language that invites families in rather than gatekeeping with jargon.',
  },
  {
    icon: '🔒',
    title: 'Data Privacy by Design',
    description: 'Children\'s data is sacred. Encrypted, access-controlled, never sold, never used for model training.',
  },
  {
    icon: '🧑‍🏫',
    title: 'Educator Dignity',
    description: 'AI assists, never replaces. The educator\'s professional judgement is always centred and always the final voice.',
  },
];

export function EthicsSection() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-accent-green uppercase mb-3">Our Commitment</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Designed with ethical pedagogy in mind
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary leading-relaxed">
            PlayPilot is not neutral technology. We take a position: every child deserves to be
            seen through a lens of capability, every educator deserves respect, and every family
            deserves understanding.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-surface p-6">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="mt-3 text-base font-semibold text-text">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
