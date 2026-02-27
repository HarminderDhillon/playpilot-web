import { Hero } from '@/components/landing/Hero';
import { TheShift } from '@/components/landing/TheShift';
import { PedagogicalEngine } from '@/components/landing/PedagogicalEngine';
import { ObservationPipeline } from '@/components/landing/ObservationPipeline';
import { StakeholderPillars } from '@/components/landing/StakeholderPillars';
import { LeadershipConsole } from '@/components/landing/LeadershipConsole';
import { EthicsSection } from '@/components/landing/EthicsSection';
import { BuiltForScale } from '@/components/landing/BuiltForScale';
import { CTA } from '@/components/landing/CTA';

export default function Home() {
  return (
    <>
      {/* 1. Hero — Empowering the next generation */}
      <Hero />
      {/* 2. The Real Problem — Drowning in documentation */}
      <TheShift />
      {/* 3. Pedagogical Powerhouse — Not another observation app */}
      <PedagogicalEngine />
      {/* 4. The Shift — Pressure → Presence */}
      <ObservationPipeline />
      {/* 5–7. For Educators, For Leaders, For Families */}
      <StakeholderPillars />
      {/* 8. Leadership Console — The operating system */}
      <LeadershipConsole />
      {/* 9. Ethics — Built on dignity */}
      <EthicsSection />
      {/* 10. The Vision — Stronger ecosystems together */}
      <BuiltForScale />
      {/* 11. Final CTA — Reclaim documentation */}
      <CTA />
    </>
  );
}
