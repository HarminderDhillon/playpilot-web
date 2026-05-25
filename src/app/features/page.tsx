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
    title: 'Team Communication',
    description:
      'Connect with your team through group messaging and classroom announcements. Share updates, coordinate planning, and stay aligned. Great educators thrive when they work together.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
  {
    title: 'Leadership Hub',
    description:
      'A web-based command center for directors and pedagogical leaders. See trends across classrooms, support educators with real data, and prepare for licensing visits without stress.',
    accent: 'bg-primary/5 border-primary/20',
    dot: 'bg-primary',
  },
  {
    title: '20+ Capture Modes',
    description:
      'Quick Jot, Voice Note, Photo, Handwriting Scan, Noticing Tiles, ABC Tracker, Disposition Radar, and more — 20+ modes shaped around how educators actually work.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    dot: 'bg-accent-teal',
  },
  {
    title: 'Story Canvas',
    description:
      'Every child gets a living visual journey. Observations become moments, moments become threads, threads become a visible story of growth.',
    accent: 'bg-accent-pink/10 border-accent-pink/30',
    dot: 'bg-accent-pink',
  },
  {
    title: 'Offline Sync',
    description:
      'Full offline support with automatic sync. Capture observations anywhere — in the garden, on a field trip — and sync when you\'re back online.',
    accent: 'bg-accent-green/10 border-accent-green/30',
    dot: 'bg-accent-green',
  },
  {
    title: 'Calendar & Operations',
    description:
      'Attendance, daily logs, incident reports, and scheduling — all in one place. Less admin, more time with children.',
    accent: 'bg-accent-yellow/10 border-accent-yellow/30',
    dot: 'bg-accent-yellow',
  },
  {
    title: 'Reports',
    description:
      'Generate child learning, educator summary, curriculum usage, and program overview reports from real observation data.',
    accent: 'bg-accent-purple/10 border-accent-purple/30',
    dot: 'bg-accent-purple',
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
            href="/pricing"
            className="inline-block rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-text-on-primary transition-colors hover:bg-primary-hover"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
