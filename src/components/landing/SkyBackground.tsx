'use client';

export function SkyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C9E8F7] via-[#DDEEF8] to-[#EDF4F8]" />

      {/* Cloud puffs — left */}
      <div className="absolute top-[10%] left-[5%] animate-drift-slow opacity-70">
        <div className="relative">
          <div className="w-24 h-12 bg-white/60 rounded-full" />
          <div className="absolute -top-3 left-4 w-16 h-10 bg-white/50 rounded-full" />
          <div className="absolute -top-1 left-12 w-20 h-10 bg-white/55 rounded-full" />
        </div>
      </div>

      {/* Cloud puffs — right */}
      <div className="absolute top-[15%] right-[8%] animate-drift opacity-60">
        <div className="relative">
          <div className="w-32 h-14 bg-white/55 rounded-full" />
          <div className="absolute -top-4 left-6 w-20 h-12 bg-white/50 rounded-full" />
          <div className="absolute -top-2 left-16 w-24 h-12 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Small cloud — mid-left */}
      <div className="absolute top-[35%] left-[15%] animate-float-slow opacity-50">
        <div className="relative">
          <div className="w-20 h-10 bg-white/50 rounded-full" />
          <div className="absolute -top-2 left-4 w-14 h-8 bg-white/45 rounded-full" />
        </div>
      </div>

      {/* Small cloud — mid-right */}
      <div className="absolute top-[25%] right-[25%] animate-float-delay opacity-40">
        <div className="relative">
          <div className="w-16 h-8 bg-white/45 rounded-full" />
          <div className="absolute -top-2 left-3 w-12 h-7 bg-white/40 rounded-full" />
        </div>
      </div>

      {/* Flying bird — same MDI bird icon as the app's onboarding */}
      <div className="absolute top-[20%] animate-bird-fly">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className="animate-bird-bob"
        >
          <path
            d="M23 11.5L19.95 10.37C19.69 9.22 19.04 8.56 19.04 8.56C17.4 6.92 14.75 6.92 13.11 8.56L11.63 10.04L5 3C4 7 5 11 7.45 14.22L2 19.5C2 19.5 10.89 21.5 16.07 17.45C18.83 15.29 19.45 14.03 19.84 12.7L23 11.5M17.71 11.72C17.32 12.11 16.68 12.11 16.29 11.72C15.9 11.33 15.9 10.7 16.29 10.31C16.68 9.92 17.32 9.92 17.71 10.31C18.1 10.7 18.1 11.33 17.71 11.72Z"
            fill="rgba(31,42,68,0.55)"
          />
        </svg>
      </div>
    </div>
  );
}
