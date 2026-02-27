import { Hero } from '@/components/landing/Hero';
import { PedagogicalEngine } from '@/components/landing/PedagogicalEngine';
import { StakeholderPillars } from '@/components/landing/StakeholderPillars';
import { ObservationPipeline } from '@/components/landing/ObservationPipeline';
import { LeadershipConsole } from '@/components/landing/LeadershipConsole';
import { EthicsSection } from '@/components/landing/EthicsSection';
import { BuiltForScale } from '@/components/landing/BuiltForScale';
import { CTA } from '@/components/landing/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <PedagogicalEngine />
      <StakeholderPillars />
      <ObservationPipeline />
      <LeadershipConsole />
      <EthicsSection />
      <BuiltForScale />
      <CTA />
    </>
  );
}
