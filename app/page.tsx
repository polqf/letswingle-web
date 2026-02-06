import { AgencyTiers } from '@/app/components/home/AgencyTiers';
import { AtlasHighlight } from '@/app/components/home/AtlasHighlight';
import { B2CHighlight } from '@/app/components/home/B2CHighlight';
import { CTASection } from '@/app/components/home/CTASection';
import { Hero } from '@/app/components/home/Hero';
import { ProductOverview } from '@/app/components/home/ProductOverview';
import { SocialProof } from '@/app/components/home/SocialProof';
import { WhiteLabelHighlight } from '@/app/components/home/WhiteLabelHighlight';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductOverview />
      <AgencyTiers />
      <AtlasHighlight />
      <WhiteLabelHighlight />
      <B2CHighlight />
      <SocialProof />
      <CTASection />
    </>
  );
}
