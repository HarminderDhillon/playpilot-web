import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Early Access | PlayPilot',
  description: 'Get early access to PlayPilot — documentation tools built for early childhood educators.',
};

const included = [
  {
    title: 'Unlimited Observations',
    description: 'Capture as many learning moments as you need with voice, photo, video, and text — no caps, no tiers.',
    accent: 'border-accent-teal',
    accentBg: 'bg-accent-teal/10',
    accentText: 'text-accent-teal',
    icon: '📝',
  },
  {
    title: 'AI-Powered Documentation',
    description: 'PlayPilot detects developmental domains, schemas, and dispositions — then drafts interpretations and next steps for you.',
    accent: 'border-accent-purple',
    accentBg: 'bg-accent-purple/10',
    accentText: 'text-accent-purple',
    icon: '🤖',
  },
  {
    title: 'Family Sharing',
    description: 'Beautiful, parent-friendly learning timelines that celebrate each child\'s journey and strengthen the home-centre partnership.',
    accent: 'border-accent-orange',
    accentBg: 'bg-accent-orange/10',
    accentText: 'text-accent-orange',
    icon: '👨‍👩‍👧',
  },
];

export default function PricingPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text sm:text-5xl">Get Early Access</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            PlayPilot is currently in early access for select early childhood programs.
            We&apos;d love to hear from you.
          </p>
        </div>

        {/* Email capture */}
        <div className="mt-12 mx-auto max-w-md">
          <div className="glass-card rounded-2xl p-6 text-center">
            <p className="text-sm font-semibold text-text mb-4">
              Interested in joining? Let us know.
            </p>
            <a
              href="mailto:hello@playpilotlearning.com?subject=Early%20Access%20Request"
              className="inline-block w-full btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary text-center"
            >
              Request Early Access
            </a>
            <p className="mt-3 text-xs text-text-muted">
              Or email us directly at{' '}
              <a href="mailto:hello@playpilotlearning.com" className="font-medium text-primary hover:text-primary-hover">
                hello@playpilotlearning.com
              </a>
            </p>
          </div>
        </div>

        {/* What's included */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {included.map((item) => (
            <div
              key={item.title}
              className={`glass-card rounded-2xl p-6 flex flex-col border-t-4 ${item.accent}`}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold ${item.accentBg} ${item.accentText}`}>
                {item.title}
              </div>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Questions */}
        <div className="mt-14 text-center">
          <h2 className="text-xl font-bold text-text">Questions?</h2>
          <p className="mt-2 text-sm text-text-muted">
            We&apos;re happy to chat. Reach out at{' '}
            <a href="mailto:hello@playpilotlearning.com" className="font-medium text-primary hover:text-primary-hover">
              hello@playpilotlearning.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
