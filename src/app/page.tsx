import { EnergyMotion } from '@/components/landing/EnergyMotion';
import { Hero } from '@/components/landing/Hero';
import { BigStat } from '@/components/landing/BigStat';
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
      {/* Energy Motion — plays once per session */}
      <EnergyMotion />
      {/* 1. Hero — Empowering the next generation */}
      <Hero />
      {/* 2. Big Stat — Impact numbers */}
      <BigStat />
      {/* 3. The Real Problem — Drowning in documentation */}
      <TheShift />
      {/* 4. Pedagogical Powerhouse — Not another observation app */}
      <PedagogicalEngine />
      {/* 5. The Shift — Pressure → Presence */}
      <ObservationPipeline />
      {/* 6–8. For Educators, For Leaders, For Families */}
      <StakeholderPillars />
      {/* 9. Leadership Console — The operating system */}
      <LeadershipConsole />
      {/* 10. Ethics — Built on dignity */}
      <EthicsSection />
      {/* 11. The Vision — Stronger ecosystems together */}
      <BuiltForScale />
      {/* 12. Final CTA — Reclaim documentation */}
      <CTA />
    </>
  );
}
