const pillars = [
  {
    icon: '👩‍🏫',
    title: 'Educators',
    subtitle: 'Reclaim your time. Deepen your practice.',
    points: [
      'Voice-to-text capture in real time',
      'AI-assisted NNN drafting',
      'Schema recognition & domain tagging',
      'Strength-based language prompts',
      'Peer community & group chats',
      'Reduce burnout, not quality',
    ],
    accent: 'border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Families',
    subtitle: 'Understand the learning, not just the photos.',
    points: [
      'Beautiful growth stories in plain language',
      'See developmental progress over time',
      'Understand what your child is exploring',
      'Feel partnership, not confusion',
      'Access learning portfolios securely',
      'Celebrate milestones together',
    ],
    accent: 'border-accent-pink/30',
    dot: 'bg-accent-pink',
  },
  {
    icon: '🏢',
    title: 'Supervisors & Directors',
    subtitle: 'Program intelligence at your fingertips.',
    points: [
      'Program-wide analytics dashboard',
      'Staff documentation quality insights',
      'Compliance alignment tracking',
      'Professional growth indicators',
      'Schema & domain distribution views',
      'Data-informed reflective practice',
    ],
    accent: 'border-accent-purple/30',
    dot: 'bg-accent-purple',
  },
  {
    icon: '📋',
    title: 'Licensing & Governance',
    subtitle: 'Evidence of quality, ready when you are.',
    points: [
      'Documentation consistency metrics',
      'Framework mapping & alignment reports',
      'Evidence of learning — exportable',
      'Audit-ready program portfolios',
      'Multi-centre visibility',
      'Standards-aligned reporting',
    ],
    accent: 'border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
];

export function StakeholderPillars() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-accent-pink uppercase mb-3">Who It Supports</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Built for the whole ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary leading-relaxed">
            Every stakeholder in a child&apos;s learning journey deserves meaningful access.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className={`rounded-xl border bg-surface p-8 ${p.accent}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="text-xl font-semibold text-text">{p.title}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-4">{p.subtitle}</p>
              <ul className="space-y-2">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
