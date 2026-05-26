import { EnergyMotion } from '@/components/landing/EnergyMotion';
import { Hero } from '@/components/landing/Hero';
import { TrustedBy } from '@/components/landing/TrustedBy';
import { BigStat } from '@/components/landing/BigStat';
import { TheShift } from '@/components/landing/TheShift';
import { PedagogicalShift } from '@/components/landing/PedagogicalShift';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { StakeholderPillars } from '@/components/landing/StakeholderPillars';
import { GetStarted } from '@/components/landing/GetStarted';
import { SocialProof } from '@/components/landing/SocialProof';
import { CommitmentAndVision } from '@/components/landing/CommitmentAndVision';
import { CTA } from '@/components/landing/CTA';

export default function Home() {
  return (
    <>
      {/* Energy Motion — plays once per session */}
      <EnergyMotion />
      {/* 1. Hero — Less pressure. More presence. */}
      <Hero />

      {/* 2. Trusted By — Logo bar */}
      <TrustedBy />
      {/* 3. Big Stat — Impact numbers */}
      <BigStat />
      {/* 4. The Real Problem — Drowning in documentation */}
      <TheShift />
      {/* 5. Pedagogical Shift — Not another app + pressure → presence */}
      <PedagogicalShift />
      {/* 6. Product Showcase — Dashboard visual */}
      <ProductShowcase />

      {/* 7–9. For Educators, For Leaders, For Families */}
      <StakeholderPillars />
      {/* 10. Get Started in Three — simple onboarding steps */}
      <GetStarted />
      {/* 11. Social Proof — Testimonials */}
      <SocialProof />
      {/* 12. Commitment & Vision — Ethics + scale */}
      <CommitmentAndVision />
      {/* 13. Final CTA */}
      <CTA />
    </>
  );
}
