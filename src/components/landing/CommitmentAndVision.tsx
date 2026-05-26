'use client';

import { ScrollReveal } from './ScrollReveal';

const complianceCards = [
  { icon: '\u{1F6E1}', title: 'PIPEDA & COPPA compliant', desc: 'Canadian & US privacy standards' },
  { icon: '\u{1F512}', title: 'No ads. No tracking. Ever.', desc: 'Children are not the product.' },
  { icon: '\u{1F4E1}', title: 'Works offline', desc: 'Syncs when connected.' },
  { icon: '\u{1F4CB}', title: 'FLIGHT \u00B7 EYLF \u00B7 Te Wh\u0101riki', desc: 'Mapped, not bolted on.' },
];

const commitments = [
  { label: 'Strength-based language', color: 'bg-accent-green' },
  { label: 'Bias-aware reflection', color: 'bg-accent-purple' },
  { label: 'Cultural responsiveness', color: 'bg-accent-blue' },
  { label: 'Educator voice protected', color: 'bg-accent-coral' },
  { label: 'Privacy-first infrastructure', color: 'bg-primary' },
];

export function CommitmentAndVision() {
  return (
    <section id="the-vision" className="section-warm relative section-fade-bottom px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Ethics heading */}
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest text-accent-green uppercase mb-3 text-center">
            Our Commitment
          </p>
          <h2 className="text-3xl font-bold text-text text-center sm:text-4xl tracking-tight">
            Built on dignity. Designed for growth.
          </h2>
        </ScrollReveal>

        {/* Compliance cards */}
        <ScrollReveal delay={80}>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {complianceCards.map((card) => (
              <div key={card.title} className="glass-card rounded-2xl p-5 text-center">
                <span className="text-2xl">{card.icon}</span>
                <p className="mt-2 text-sm font-semibold text-text">{card.title}</p>
                <p className="mt-1 text-xs text-text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Commitment dots */}
        <ScrollReveal delay={150}>
          <div className="mx-auto max-w-sm space-y-3">
            {commitments.map((c, i) => (
              <div
                key={c.label}
                className="flex items-center gap-3"
                style={{ animationDelay: `${150 + i * 80}ms` }}
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.color}`} />
                <span className="text-base font-medium text-text">{c.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Vision closing */}
        <ScrollReveal delay={250}>
          <div className="mt-12 space-y-3 text-center text-text-secondary leading-relaxed">
            <p>
              Not systems that increase pressure.
              <br />
              <span className="font-semibold text-text">But systems that increase clarity.</span>
            </p>
            <p>
              Not tools that add noise.
              <br />
              <span className="font-semibold text-text">But platforms that amplify presence.</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <div className="mt-10 glass-card rounded-2xl px-8 py-5 text-center">
            <p className="text-sm font-semibold text-accent-green">
              Technology should protect the human work of teaching, not replace it.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
