import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How PlayPilot Works | PlayPilot',
  description: 'See how PlayPilot transforms early childhood documentation from capture to insight.',
};

export default function HowItWorksPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">How PlayPilot Works</h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          From a quick voice note to a complete learning story in three simple steps.
        </p>

        <div className="mt-14 space-y-12">
          {/* Step 1 */}
          <div className="flex gap-5">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-coral/15 text-sm font-bold text-accent-coral">
              1
            </div>
            <div>
              <h2 className="text-xl font-bold text-text">Capture in Seconds</h2>
              <p className="mt-2 text-text-secondary leading-relaxed">
                Tap record and speak. PlayPilot captures your observation through voice, text,
                or photo, right in the moment, without pulling you away from the children.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-5">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-teal/15 text-sm font-bold text-accent-teal">
              2
            </div>
            <div>
              <h2 className="text-xl font-bold text-text">AI Enriches Your Notes</h2>
              <p className="mt-2 text-text-secondary leading-relaxed">
                PlayPilot&apos;s pedagogical engine identifies play schemas, maps developmental
                milestones, and drafts strength-based learning stories, all grounded in the
                NNN framework and Flight curriculum.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-5">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-purple/15 text-sm font-bold text-accent-purple">
              3
            </div>
            <div>
              <h2 className="text-xl font-bold text-text">Share, Reflect, Grow</h2>
              <p className="mt-2 text-text-secondary leading-relaxed">
                Observations flow into child portfolios, family timelines, and program dashboards.
                Educators reflect with clarity. Leaders see trends. Families feel connected.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 glass-card rounded-2xl px-6 py-5 text-center">
          <p className="text-sm font-semibold text-accent-green">
            What used to take hours now takes seconds, and the quality goes up, not down.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/demo"
            className="btn-primary rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-text-on-primary text-center"
          >
            Book a Demo
          </Link>
          <Link
            href="/features"
            className="btn-secondary rounded-xl border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text text-center"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </div>
  );
}
