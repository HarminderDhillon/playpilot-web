import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leadership Console — PlayPilot',
  description: 'Program analytics, educator support, and compliance-ready reporting for early learning leaders.',
};

export default function DashboardPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-2">Leadership Console</p>
        <h1 className="text-3xl font-bold text-text">Program Intelligence Dashboard</h1>
        <p className="mt-2 text-text-secondary leading-relaxed">
          View program-wide analytics, support educator practice, and generate
          compliance-ready reports — all powered by real documentation data.
        </p>

        {/* Placeholder stat cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Observations"
            value="--"
            subtitle="This week"
            accent="text-accent-blue"
            bg="bg-accent-blue/10"
          />
          <DashboardCard
            title="Children"
            value="--"
            subtitle="Active profiles"
            accent="text-accent-green"
            bg="bg-accent-green/10"
          />
          <DashboardCard
            title="Published"
            value="--"
            subtitle="Learning stories"
            accent="text-accent-purple"
            bg="bg-accent-purple/10"
          />
          <DashboardCard
            title="Educators"
            value="--"
            subtitle="Active this week"
            accent="text-accent-orange"
            bg="bg-accent-orange/10"
          />
        </div>

        {/* Connect prompt */}
        <div className="mt-12 rounded-xl border border-border bg-surface p-8 text-center">
          <div className="text-4xl">🔒</div>
          <h2 className="mt-4 text-lg font-semibold text-text">Connect your account</h2>
          <p className="mt-2 max-w-md mx-auto text-sm text-text-secondary">
            Sign in with the same email you use on the PlayPilot mobile app to sync your
            program data. Supervisors and directors get access to analytics, reports, and
            educator support tools.
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
  bg,
}: {
  title: string;
  value: string;
  subtitle: string;
  accent: string;
  bg: string;
}) {
  return (
    <div className={`rounded-xl border border-border bg-surface p-5`}>
      <p className="text-xs font-medium text-text-muted uppercase tracking-wide">{title}</p>
      <p className={`mt-2 text-3xl font-bold ${accent}`}>{value}</p>
      <p className="mt-1 text-xs text-text-muted">{subtitle}</p>
    </div>
  );
}
