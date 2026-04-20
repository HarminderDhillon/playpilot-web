import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Early Access | PlayPilot',
  description: 'Get early access to PlayPilot, documentation tools built for early childhood educators.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
