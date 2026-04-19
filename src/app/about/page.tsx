import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | PlayPilot',
  description: 'Learn why PlayPilot exists and the mission behind the app.',
};

export default function AboutPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">About PlayPilot</h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-text-secondary">
          <p>
            Early childhood educators are some of the most important people in a child&apos;s life.
            They notice the small moments that matter: a child&apos;s first attempt at writing their name,
            a three-year-old negotiating turns in the sandpit, the quiet persistence of a toddler
            stacking blocks for the twentieth time.
          </p>

          <p>
            But the systems meant to support this work often get in the way. Hours spent typing up
            observations after the children go home. Paper forms that pile up. Documentation that
            ticks compliance boxes but doesn&apos;t actually help you teach better.
          </p>

          <p className="text-text font-medium">
            PlayPilot was built to change that.
          </p>

          <p>
            We believe documentation should be a tool for reflection, not a chore.
            It should help you see patterns in children&apos;s play, plan meaningful next steps,
            and share the story of learning with families without burning out.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-text">Our Approach</h2>

          <p>
            PlayPilot is built around the <strong>Noticing, Naming, Nurturing</strong> framework.
            Every feature, from voice capture to AI-assisted drafting to provocation suggestions,
            is designed to support intentional, reflective practice.
          </p>

          <p>
            We started with Alberta&apos;s <strong>Flight curriculum framework</strong> and
            the developmental research that underpins quality early childhood education, with
            plans to support frameworks across Canada and beyond.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-text">Built With Educators</h2>

          <p>
            PlayPilot isn&apos;t built in a vacuum. Every feature is informed by conversations with
            real educators: room leaders, educational leaders, family day care educators,
            and centre directors. If it doesn&apos;t save you time or deepen your practice,
            it doesn&apos;t make it into the app.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-text">Privacy First</h2>

          <p>
            We take the privacy of children, families, and educators seriously.
            PlayPilot is designed with data minimisation, secure storage, and
            transparent practices from the ground up. Read our full{' '}
            <a href="/privacy" className="font-medium text-primary hover:text-primary-hover">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
