import { EnergyMotion } from '@/components/landing/EnergyMotion';
import { Hero } from '@/components/landing/Hero';
import { TrustedBy } from '@/components/landing/TrustedBy';
import { BigStat } from '@/components/landing/BigStat';
import { TheShift } from '@/components/landing/TheShift';
import { PedagogicalEngine } from '@/components/landing/PedagogicalEngine';
import { ObservationPipeline } from '@/components/landing/ObservationPipeline';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { StakeholderPillars } from '@/components/landing/StakeholderPillars';
import { LeadershipConsole } from '@/components/landing/LeadershipConsole';
import { SocialProof } from '@/components/landing/SocialProof';
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

      {/* 2. Trusted By — Logo bar */}
      <TrustedBy />
      {/* 3. Big Stat — Impact numbers */}
      <BigStat />
      {/* 4. The Real Problem — Drowning in documentation */}
      <TheShift />
      {/* 5. Pedagogical Powerhouse — Not another observation app */}
      <PedagogicalEngine />
      {/* 6. The Shift — Pressure → Presence */}
      <ObservationPipeline />
      {/* 7. Product Showcase — Dashboard visual wow */}
      <ProductShowcase />

      {/* 8–10. For Educators, For Leaders, For Families */}
      <StakeholderPillars />
      {/* 11. Leadership Console — The operating system */}
      <LeadershipConsole />
      {/* 12. Social Proof — Testimonials + founder quote */}
      <SocialProof />
      {/* 13. Ethics — Built on dignity */}
      <EthicsSection />
      {/* 14. The Vision — Stronger ecosystems together */}
      <BuiltForScale />
      {/* 15. Final CTA — Reclaim documentation */}
      <CTA />
    </>
  );
}
