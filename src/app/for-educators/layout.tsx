import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Educators | PlayPilot',
  description:
    'PlayPilot helps early childhood educators capture observations in seconds with voice-first tools, the NNN framework, schema recognition, and 20+ capture modes.',
};

export default function ForEducatorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
