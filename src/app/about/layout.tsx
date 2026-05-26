import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | PlayPilot',
  description: 'Learn why PlayPilot exists and the mission behind the app.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
