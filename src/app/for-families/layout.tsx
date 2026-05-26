import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Families | PlayPilot',
  description:
    'PlayPilot connects families to their child\'s daily learning journey with portfolios, milestone tracking, timelines, and home connection activities.',
};

export default function ForFamiliesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
