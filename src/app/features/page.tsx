import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features | PlayPilot',
  description: 'Explore all the ways PlayPilot helps educators document, track, and share learning.',
};

const featureSections = [
  {
    title: 'Voice-First Capture',
    description:
      'Speak your observation while it happens. PlayPilot transcribes your voice note, identifies developmental domains, and creates a draft learning story, all in seconds. No more scribbling on Post-its and typing them up later.',
    accent: 'bg-accent-blue/10 border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  {
    title: 'NNN Framework Built In',
    description:
      'Every observation flows through Noticing, Naming, and Nurturing. The app guides you through objective observation, connects behaviour to learning theory, and suggests responsive next steps. Professional documentation without the overwhelm.',
    accent: 'bg-accent-purple/10 border-accent-purple/30',
    dot: 'bg-accent-purple',
  },
  {
    title: 'Schema Recognition',
    description:
      'Spot transporting, trajectory, enclosing, rotation, and more. PlayPilot helps you identify repeated patterns of play and plan meaningful provocations that extend children\'s natural curiosity.',
    accent: 'bg-accent-orange/10 border-accent-orange/30',
    dot: 'bg-accent-orange',
  },
  {
    title: 'Milestone Tracking',
    description:
      'Visual developmental progress at a glance. Track milestones across domains, see where each child is thriving, and identify areas that might need extra attention. No spreadsheets needed.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
  {
    title: 'Portfolio & Family Sharing',
    description:
      'Beautiful, parent-friendly learning portfolios that celebrate each child\'s journey. Families see the learning behind the play without the educator jargon. Strengthens the home-centre partnership.',
    accent: 'bg-accent-pink/10 border-accent-pink/30',
    dot: 'bg-accent-pink',
  },
  {
    title: 'Educator Community',
    description:
      'Group chats with your room team, schema-spotting challenges, peer provocations, and emotional support circles. Because great educators don\'t work in isolation.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
  {
    title: 'Web Dashboard',
    description:
      'View all your observations, portfolios, and insights on a bigger screen. Supervisors and educational leaders can review documentation, track team progress, and support quality improvement. Coming soon.',
    accent: 'bg-primary/5 border-primary/20',
    dot: 'bg-primary',
  },
];

export default function FeaturesPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Features</h1>
        <p className="mt-4 max-w-xl text-lg text-text-secondary">
          Every feature is designed to save you time, deepen your practice, and keep children at the centre.
        </p>

        <div className="mt-14 space-y-8">
          {featureSections.map((f) => (
            <div key={f.title} className={`rounded-xl border p-6 sm:p-8 ${f.accent}`}>
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${f.dot}`} />
                <h2 className="text-xl font-semibold text-text">{f.title}</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/login"
            className="inline-block rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
