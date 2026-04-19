import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | PlayPilot',
  description: 'Terms of service for using the PlayPilot platform.',
};

export default function TermsPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-xl font-semibold text-text">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using PlayPilot (&quot;the Service&quot;), you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use the Service.
              We may update these terms from time to time, and continued use of the Service
              constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">2. Use of Service</h2>
            <p className="mt-3">
              PlayPilot is a platform designed for early childhood educators to document
              children&apos;s learning through observations, learning stories, and developmental
              records. You agree to use the Service only for its intended purpose and in
              compliance with all applicable laws and regulations, including those governing
              the care and education of children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">3. Account Responsibilities</h2>
            <p className="mt-3">
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activity that occurs under your account. You agree to notify us
              immediately of any unauthorised use. You must provide accurate and complete
              information when creating your account and keep it up to date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">4. Content Ownership</h2>
            <p className="mt-3">
              All observations, learning stories, photos, and other content you create using
              PlayPilot remain the property of you and/or your organisation. We do not claim
              ownership over your content. You grant us a limited licence to store, process,
              and display your content solely for the purpose of providing the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">5. AI-Generated Content</h2>
            <p className="mt-3">
              PlayPilot uses artificial intelligence to generate suggested learning stories,
              developmental observations, and other documentation drafts. These are suggestions
              only and are not a substitute for professional judgement. As the educator, you
              retain full professional responsibility for reviewing, editing, and approving
              all content before it is shared or saved as a formal record.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">6. Privacy</h2>
            <p className="mt-3">
              Your use of the Service is also governed by our{' '}
              <Link href="/privacy" className="font-medium text-primary hover:text-primary-hover">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your data, including
              children&apos;s information. By using the Service, you acknowledge that you have
              read and understood our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">7. Termination</h2>
            <p className="mt-3">
              You may stop using the Service at any time. We may suspend or terminate your
              access if you violate these terms or use the Service in a manner that could
              harm other users or the platform. Upon termination, you may request an export
              of your data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">8. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, PlayPilot and its team shall not be
              liable for any indirect, incidental, special, or consequential damages arising
              from your use of the Service. The Service is provided &quot;as is&quot; without
              warranties of any kind, express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">9. Governing Law</h2>
            <p className="mt-3">
              These terms are governed by and construed in accordance with the laws of the
              Province of Alberta, Canada, without regard to conflict of law principles.
              Any disputes arising from these terms or your use of the Service shall be
              subject to the exclusive jurisdiction of the courts of Alberta, Canada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">10. Contact</h2>
            <p className="mt-3">
              If you have questions about these terms, contact us at{' '}
              <a href="mailto:hello@playpilotlearning.com" className="font-medium text-primary hover:text-primary-hover">
                hello@playpilotlearning.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
