export function StakeholderPillars() {
  return (
    <>
      {/* FOR EDUCATORS */}
      <section className="bg-surface-variant px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent-blue uppercase mb-3">For Educators</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Be more present. Document with confidence.
          </h2>

          <div className="mt-8 space-y-3">
            {[
              'Capture in seconds.',
              'Use strength-based language.',
              'Reflect without overwhelm.',
              'Leave work at work.',
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent-blue" />
                <span className="text-base text-text-secondary">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-accent-blue/5 px-6 py-4">
            <p className="text-sm font-medium text-accent-blue">
              Your role is to witness learning — not chase paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* FOR LEADERS */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent-purple uppercase mb-3">For Leaders</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Empower your educators. Strengthen your program.
          </h2>

          <div className="mt-8 space-y-3">
            {[
              'See trends across classrooms.',
              'Support staff with clarity.',
              'Prepare for licensing without panic.',
              'Build consistency without micromanaging.',
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent-purple" />
                <span className="text-base text-text-secondary">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-accent-purple/5 px-6 py-4">
            <p className="text-sm font-medium text-accent-purple">
              Leadership becomes supportive — not reactive.
            </p>
          </div>
        </div>
      </section>

      {/* FOR FAMILIES */}
      <section className="bg-surface-variant px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent-pink uppercase mb-3">For Families</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            It takes a village.
          </h2>

          <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
            <p>Families don&apos;t just receive updates.</p>
            <div className="pl-4 border-l-2 border-accent-pink/30 space-y-1">
              <p>They understand learning.</p>
              <p>They see growth.</p>
              <p>They feel connected.</p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-accent-pink/5 px-6 py-4">
            <p className="text-sm font-medium text-accent-pink">
              When documentation is meaningful, partnership becomes natural.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
