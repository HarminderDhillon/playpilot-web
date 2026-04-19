import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing | PlayPilot',
  description: 'Simple, transparent pricing for early learning programs of every size.',
};

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'For individual educators getting started.',
    accent: 'border-accent-teal',
    accentBg: 'bg-accent-teal/10',
    accentText: 'text-accent-teal',
    features: [
      'Up to 50 observations/month',
      '1 educator account',
      'Voice & text capture',
      'Basic schema detection',
      'Child portfolios',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'btn-secondary rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text',
  },
  {
    name: 'Program',
    price: '$12',
    period: '/educator/month',
    description: 'For centres and dayhomes that want the full picture.',
    accent: 'border-primary',
    accentBg: 'bg-primary/10',
    accentText: 'text-primary',
    popular: true,
    features: [
      'Unlimited observations',
      'Unlimited educators',
      'AI learning stories & reflections',
      'Full NNN + schema engine',
      'Family sharing & timelines',
      'Leadership dashboard',
      'Compliance readiness reports',
      'Priority support',
    ],
    cta: 'Book a Demo',
    ctaStyle: 'btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For multi-site operators and school districts.',
    accent: 'border-accent-purple',
    accentBg: 'bg-accent-purple/10',
    accentText: 'text-accent-purple',
    features: [
      'Everything in Program',
      'Multi-site management',
      'Custom integrations',
      'Dedicated onboarding',
      'SLA & data residency options',
    ],
    cta: 'Contact Us',
    ctaStyle: 'btn-secondary rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text',
  },
];

export default function PricingPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text sm:text-5xl">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-lg text-text-secondary">
            Start free. Scale when you&apos;re ready. No surprises.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-6 flex flex-col border-t-4 ${plan.accent}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-text-on-primary uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold ${plan.accentBg} ${plan.accentText}`}>
                {plan.name}
              </div>

              <div className="mt-4">
                <span className="text-3xl font-bold text-text">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-text-muted">{plan.period}</span>
                )}
              </div>

              <p className="mt-2 text-sm text-text-secondary">{plan.description}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === 'Enterprise' ? 'mailto:hello@playpilotlearning.com' : '/demo'}
                className={`mt-6 text-center block ${plan.ctaStyle}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-text-muted">
            All plans include end-to-end encryption, Canadian data hosting, and PIPEDA compliance.
            <br />
            Questions? Reach out at{' '}
            <a href="mailto:hello@playpilotlearning.com" className="font-medium text-primary hover:text-primary-hover">
              hello@playpilotlearning.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
