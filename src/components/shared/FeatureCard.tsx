'use client';

export function FeatureCard({ title, description, accent, dot }: { title: string; description: string; accent: string; dot: string }) {
  return (
    <div className={`rounded-xl border p-5 sm:p-6 ${accent}`}>
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <h3 className="text-lg font-semibold text-text">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}
