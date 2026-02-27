import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — PlayPilot',
  description: 'How PlayPilot handles your data, children\'s information, and educator privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="px-6 pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: February 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-xl font-semibold text-text">1. Overview</h2>
            <p className="mt-3">
              PlayPilot (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy of
              educators, children, and families who use our platform. This policy explains what data
              we collect, how we use it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">2. Information We Collect</h2>
            <p className="mt-3">We collect the following types of information:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><strong>Account information:</strong> Name, email address, role, and centre affiliation.</li>
              <li><strong>Observation data:</strong> Text, voice recordings, photos, and tags created by educators.</li>
              <li><strong>Child profiles:</strong> First name, age/date of birth, and developmental records as entered by educators.</li>
              <li><strong>Usage data:</strong> App interactions and feature usage for product improvement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">3. How We Use Your Data</h2>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>To provide and improve the PlayPilot service.</li>
              <li>To generate AI-assisted documentation drafts (processed securely, not used for model training).</li>
              <li>To enable sharing between educators and families within the same centre.</li>
              <li>To send service-related communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">4. Children&apos;s Data</h2>
            <p className="mt-3">
              We take children&apos;s data extremely seriously. Child profiles and observations are only
              accessible to authorised educators and families within the relevant centre. We do not
              sell, share, or use children&apos;s data for advertising or any purpose other than
              providing the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">5. Data Storage & Security</h2>
            <p className="mt-3">
              Data is stored securely using industry-standard encryption at rest and in transit.
              We use Supabase (hosted on AWS) for data storage, with servers located in Australia
              where available. Access is controlled through role-based permissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">6. Data Sharing</h2>
            <p className="mt-3">
              We do not sell your data. We only share data with third-party services that are
              essential to operating PlayPilot (e.g., hosting, AI processing), and all such
              services are bound by data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">7. Your Rights</h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your account and associated data.</li>
              <li>Export your data in a portable format.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text" id="terms">8. Terms of Service</h2>
            <p className="mt-3">
              By using PlayPilot, you agree to use the platform responsibly and in accordance
              with your centre&apos;s policies regarding documentation and photography of children.
              You are responsible for obtaining appropriate consent from families for any
              documentation created within the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text">9. Contact</h2>
            <p className="mt-3">
              For privacy questions or data requests, contact us at{' '}
              <a href="mailto:privacy@playpilot.app" className="font-medium text-primary hover:text-primary-hover">
                privacy@playpilot.app
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
