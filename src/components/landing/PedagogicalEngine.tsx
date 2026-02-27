const capabilities = [
  'Objective noticing',
  'Reflective naming',
  'Intentional nurturing',
  'Creative curriculum planning',
  'Leadership clarity',
  'Family partnership',
];

export function PedagogicalEngine() {
  return (
    <section id="pedagogical-engine" className="bg-surface-variant px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-text-secondary">Not another observation app.</p>
        <h2 className="mt-2 text-3xl font-bold text-text sm:text-4xl">
          A pedagogical powerhouse.
        </h2>

        <p className="mt-6 text-text-secondary leading-relaxed">
          PlayPilot is a living infrastructure system that strengthens:
        </p>

        <div className="mt-8 mx-auto max-w-sm text-left space-y-3">
          {capabilities.map((c) => (
            <div key={c} className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-base font-medium text-text">{c}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-2">
          <p className="text-sm text-text-secondary">This is not digital paperwork.</p>
          <p className="text-base font-bold text-primary">
            This is pedagogical power — structured, supported, and scalable.
          </p>
        </div>
      </div>
    </section>
  );
}
