import { AgencyTiersPreview } from '@/app/components/sections/home/AgencyTiersPreview';
import { AppPreview } from '@/app/components/sections/home/AppPreview';
import { AtlasPreview } from '@/app/components/sections/home/AtlasPreview';
import { Hero } from '@/app/components/sections/home/Hero';
import { HomeCTA } from '@/app/components/sections/home/HomeCTA';
import { ProductPaths } from '@/app/components/sections/home/ProductPaths';
import { TrustSignals } from '@/app/components/sections/home/TrustSignals';
import { WhiteLabelPreview } from '@/app/components/sections/home/WhiteLabelPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppPreview />
      <ProductPaths />
      <AgencyTiersPreview />
      <AtlasPreview />
      <WhiteLabelPreview />
      <TrustSignals />
      <HomeCTA />
    </>
  );
}
