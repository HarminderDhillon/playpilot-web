import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Log In | PlayPilot',
  description: 'Sign in to your PlayPilot account.',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-text">Welcome back</h1>
        <p className="mt-2 text-sm text-text-secondary">Sign in to your PlayPilot account.</p>

        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text mb-1.5">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex justify-end">
            <Link href="#" className="text-xs font-medium text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-text-on-primary transition-opacity hover:opacity-90"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-text-muted">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-6 text-center space-y-3">
          <Link
            href="/pricing"
            className="inline-block rounded-xl border border-border bg-surface px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            Join Early Access
          </Link>
          <p className="text-xs text-text-muted">
            Don&apos;t have an account? <Link href="/pricing" className="font-medium text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
