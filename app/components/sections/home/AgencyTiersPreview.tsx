import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { atlasPreviewImage } from '@/app/lib/images';
import Image from 'next/image';

export async function AgencyTiersPreview() {
  const t = await getTranslations();
  const points = ['one', 'two', 'three', 'four', 'five'] as const;

  return (
    <section id="travel-professionals" className="py-20 hero-sky text-[color:var(--color-brand-offwhite)]">
      <Container className="space-y-8">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow={t('home.agencies.eyebrow')}
              title={t('home.agencies.title')}
              subtitle={t('home.agencies.subtitle')}
              style="light"
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-brand-offwhite)]/85">
              {points.map((point) => (
                <li key={point}>• {t(`home.agencies.points.${point}`)}</li>
              ))}
            </ul>
            <Button href="/products/agencies" variant="primary">
              {t('home.agencies.cta')}
            </Button>
          </div>
          <div className="max-h-[400px] overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)]">
            <Image
              src={atlasPreviewImage}
              alt="App Preview"
              width={460}
              height={996}
              className="h-auto w-full max-h-[400px] object-contain object-center"
            />
          </div>
        </Container>
        <div className="animate-fade-up rounded-[var(--radius-xl)] border border-[color:var(--color-brand-offwhite)]/20 bg-[color:var(--color-brand-offwhite)]/10 p-6 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand-yellow)]">
            {t('home.agencies.panelEyebrow')}
          </p>
          <p className="mt-3 text-lg font-semibold text-[color:var(--color-brand-offwhite)]">
            {t('home.agencies.panelTitle')}
          </p>
          <p className="mt-4 text-sm text-[color:var(--color-brand-offwhite)]/85">
            {t('home.agencies.panelBody')}
          </p>
        </div>
      </Container>
    </section>
  );
}
