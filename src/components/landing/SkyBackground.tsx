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

      {/* Flying bird — glides across the sky with gentle bob */}
      <div className="absolute top-[20%] animate-bird-fly">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-bird-bob opacity-55"
        >
          <path
            d="M23 11.5C20 11.5 18.5 9 18.5 9s-1 3.5-5.5 3.5c0 0 2.5-1.5 2.5-4S12 5 12 5s-1 4-4.5 4S1 5.5 1 5.5s1.5 4 5 5.5c3.5 1.5 6 1 6 1s-2 2-6.5 2.5"
            stroke="rgba(31,42,68,0.55)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
