'use client';

import { useState } from 'react';

const included = [
  {
    title: 'Unlimited Observations',
    description: 'Capture as many learning moments as you need with voice, photo, video, and text. No caps, no tiers.',
    accent: 'border-accent-teal',
    accentBg: 'bg-accent-teal/10',
    accentText: 'text-accent-teal',
    icon: '\u{1F4DD}',
  },
  {
    title: 'AI-Powered Documentation',
    description: 'PlayPilot detects developmental domains, schemas, and dispositions, then drafts interpretations and next steps for you.',
    accent: 'border-accent-purple',
    accentBg: 'bg-accent-purple/10',
    accentText: 'text-accent-purple',
    icon: '\u{1F916}',
  },
  {
    title: 'Family Sharing',
    description: 'Beautiful, parent-friendly learning timelines that celebrate each child\'s journey and strengthen the home-centre partnership.',
    accent: 'border-accent-orange',
    accentBg: 'bg-accent-orange/10',
    accentText: 'text-accent-orange',
    icon: '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}',
  },
];

export default function PricingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/mlgawdnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, role, organization: organization || 'Not specified' }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Could not submit. Please email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text sm:text-5xl">Join the Early Access</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Be among the first educators to try PlayPilot. We&apos;re onboarding select early childhood programs now.
          </p>
        </div>

        {/* Signup form */}
        <div className="mt-12 mx-auto max-w-md">
          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-4">
                <div className="text-3xl mb-3">{'\u2705'}</div>
                <h3 className="text-lg font-bold text-text">You&apos;re on the list!</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  We&apos;ve received your request and will be in touch soon.
                </p>
                <p className="mt-4 text-xs text-text-muted">
                  We&apos;ll reach out within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@centre.edu.au"
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-text">
                    Role
                  </label>
                  <select
                    id="role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="Educator">Educator</option>
                    <option value="Leader">Leader</option>
                    <option value="Family">Family</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-text">
                    Centre / Organization <span className="text-text-muted">(optional)</span>
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Your centre or organization name"
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary transition-colors hover:bg-primary-hover disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Early Access'}
                </button>

                <p className="text-center text-xs text-text-muted">
                  We&apos;ll reach out within 48 hours.
                </p>
              </form>
            )}
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
