import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download | PlayPilot',
  description: 'Download PlayPilot on your mobile device.',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="w-full max-w-sm text-center">
        <div className="text-5xl mb-4">{'\u{1F4F1}'}</div>
        <h1 className="text-2xl font-bold text-text">PlayPilot is a Mobile App</h1>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          PlayPilot is designed for educators on the go. Download the app to capture observations,
          track milestones, and share with families right from your phone.
        </p>

        <div className="mt-8 space-y-3">
          <a
            href="#"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </a>
          <a
            href="#"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.04c.17.15.41.18.61.09l9.76-5.63-2.35-2.35-8.02 7.28c-.15.14-.17.37-.04.54l.04.07zm.49-19.14a.4.4 0 00-.15.32v15.56c0 .12.04.24.12.34l8.26-8.26-8.23-7.96zm17.6 7.93l-3.55-2.05-3.08 2.81 3.08 3.08 3.55-2.06c.55-.32.55-1.1 0-1.78zM5.15 2.45L14.7 8.2l-2.53 2.31L5.09 3.61a.5.5 0 01.06-1.16z"/>
            </svg>
            Get it on Google Play
          </a>
        </div>

        <p className="mt-4 text-xs text-text-muted">
          Coming soon to app stores.
        </p>

        {/* Divider */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-text-muted">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Link
          href="/pricing"
          className="mt-6 inline-block rounded-xl border border-border bg-surface px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          Join Our Early Access Program
        </Link>

        <div className="mt-6">
          <Link href="/features" className="text-xs font-medium text-text-muted hover:text-primary">
            Learn more about PlayPilot features
          </Link>
        </div>
      </div>
    </div>
  );
}
