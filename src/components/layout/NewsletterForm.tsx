'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Mailchimp / ConvertKit / Supabase table
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="mt-3 text-xs font-medium text-accent-green">
        Thanks! We&apos;ll keep you posted.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-text placeholder:text-text-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
      >
        Subscribe
      </button>
    </form>
  );
}
