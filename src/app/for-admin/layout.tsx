import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin & Operations | PlayPilot',
  description:
    'Reporting, compliance, permissions, and program management tools — all powered by real documentation data from PlayPilot.',
};

export default function ForAdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
