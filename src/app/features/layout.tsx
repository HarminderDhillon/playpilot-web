import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | PlayPilot',
  description: 'Explore all the ways PlayPilot helps educators document, track, and share learning.',
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
