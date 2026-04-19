import type { Metadata } from 'next';
import { DemoWalkthrough } from '@/components/demo/DemoWalkthrough';

export const metadata: Metadata = {
  title: 'Interactive Demo | PlayPilot',
  description:
    'Experience the PlayPilot product flow, from capturing an observation to AI-enriched insights. No sign-up required.',
};

export default function DemoPage() {
  return <DemoWalkthrough />;
}
