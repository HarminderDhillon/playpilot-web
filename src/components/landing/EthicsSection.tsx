const commitments = [
  'Strength-based language',
  'Bias-aware reflection',
  'Cultural responsiveness',
  'Educator voice protected',
  'Privacy-first infrastructure',
];

export function EthicsSection() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-widest text-accent-green uppercase mb-3 text-center">Our Commitment</p>
        <h2 className="text-3xl font-bold text-text text-center sm:text-4xl">
          Built on dignity. Designed for growth.
        </h2>

        <div className="mt-8 mx-auto max-w-sm space-y-3">
          {commitments.map((c) => (
            <div key={c} className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent-green" />
              <span className="text-base font-medium text-text">{c}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-accent-green/20 bg-accent-green/5 px-8 py-5 text-center">
          <p className="text-sm font-semibold text-accent-green">
            Technology should protect the human work of teaching — not replace it.
          </p>
        </div>
      </div>
    </section>
  );
}
