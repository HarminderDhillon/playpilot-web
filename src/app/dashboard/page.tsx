import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard — PlayPilot',
  description: 'View your observations, portfolios, and insights on the web.',
};

export default function DashboardPage() {
  // This is a placeholder — will connect to Supabase Auth + data when ready
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-text">Dashboard</h1>
        <p className="mt-2 text-text-secondary">
          Your observation data from the mobile app will appear here.
        </p>

        {/* Placeholder cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Observations"
            value="--"
            subtitle="This week"
            accent="bg-accent-blue/10 text-accent-blue"
          />
          <DashboardCard
            title="Children"
            value="--"
            subtitle="Active profiles"
            accent="bg-accent-green/10 text-accent-green"
          />
          <DashboardCard
            title="Published"
            value="--"
            subtitle="Learning stories"
            accent="bg-accent-purple/10 text-accent-purple"
          />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface p-8 text-center">
          <div className="text-4xl">🔒</div>
          <h2 className="mt-4 text-lg font-semibold text-text">Connect your account</h2>
          <p className="mt-2 max-w-md mx-auto text-sm text-text-secondary">
            Sign in with the same email you use on the PlayPilot mobile app to sync your
            observations, portfolios, and milestone data to this dashboard.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  subtitle,
  accent,
}: {
  title: string;
  value: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="text-sm font-medium text-text-secondary">{title}</p>
      <p className={`mt-2 text-3xl font-bold ${accent.split(' ')[1]}`}>{value}</p>
      <p className="mt-1 text-xs text-text-muted">{subtitle}</p>
    </div>
  );
}
