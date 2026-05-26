import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Leaders | PlayPilot',
  description:
    'PlayPilot helps consultants, supervisors, directors, and pedagogical leaders support educators and strengthen program quality — without micromanaging.',
};

export default function ForLeadersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
