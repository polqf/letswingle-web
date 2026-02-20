import { AgencyTiersPreview } from '@/app/components/sections/home/AgencyTiersPreview';
import { AppPreview } from '@/app/components/sections/home/AppPreview';
import { Hero } from '@/app/components/sections/home/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppPreview />
      <AgencyTiersPreview />
    </>
  );
}
