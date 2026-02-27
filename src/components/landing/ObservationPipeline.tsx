const pipelineSteps = [
  { label: 'Raw Note', sub: 'Voice, photo, or text', color: 'bg-accent-blue' },
  { label: 'Tagged Schema', sub: 'Pattern recognition', color: 'bg-accent-orange' },
  { label: 'Domain Mapping', sub: 'Learning connections', color: 'bg-accent-purple' },
  { label: 'Learning Story', sub: 'Portfolio-ready', color: 'bg-accent-green' },
  { label: 'Trend Analysis', sub: 'Growth over time', color: 'bg-accent-pink' },
  { label: 'Program Intelligence', sub: 'Centre-wide insight', color: 'bg-primary' },
];

export function ObservationPipeline() {
  return (
    <section className="bg-surface-variant px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-accent-orange uppercase mb-3">The Journey</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            From observation to program intelligence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary leading-relaxed">
            Every moment captured flows through a pipeline that transforms raw observations
            into actionable insight — for educators, families, and leaders.
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
          {pipelineSteps.map((step, i) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`h-14 w-14 rounded-full ${step.color} flex items-center justify-center shadow-md`}>
                  <span className="text-sm font-bold text-white">{i + 1}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-text">{step.label}</p>
                <p className="text-xs text-text-muted">{step.sub}</p>
              </div>
              {i < pipelineSteps.length - 1 && (
                <div className="hidden sm:block text-text-muted text-lg px-1 shrink-0">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm font-medium text-primary">
            Not just documentation. Pedagogical infrastructure.
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            Every observation feeds a system that helps educators reflect, leaders plan, and families understand.
          </p>
        </div>
      </div>
    </section>
  );
}
