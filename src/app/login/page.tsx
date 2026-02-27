'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will connect to Supabase Auth when ready
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text">Welcome back</h1>
          <p className="mt-2 text-sm text-text-secondary">
            Sign in to access your PlayPilot dashboard
          </p>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-accent-green/30 bg-accent-green/10 p-6 text-center">
            <p className="text-sm font-medium text-text">Check your email</p>
            <p className="mt-2 text-sm text-text-secondary">
              We sent a magic link to <strong>{email}</strong>. Click it to sign in.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text">
                Email address
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

            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
            >
              Send Magic Link
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-text-muted">
            Don&apos;t have an account?{' '}
            <Link href="/features" className="font-medium text-primary hover:text-primary-hover">
              Learn more about PlayPilot
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
