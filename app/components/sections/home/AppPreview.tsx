import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';
import Image from 'next/image';
import { AppLinks } from '@/app/products/wingle-app/page';
import { mobileAppPreviewImage } from '@/app/lib/images';

export async function AppPreview() {
  const t = await getTranslations();
  const details = ['one', 'two', 'three', 'four'] as const;
  const howItWorks = ['one', 'two', 'three'] as const;

  return (
    <section id="wingle-app" className="bg-[color:var(--color-surface)] py-20">
      <Container className="space-y-8">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow={t('home.app.eyebrow')}
              title={t('home.app.title')}
              subtitle={t('home.app.subtitle')}
              style="dark"
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {details.map((detail) => (
                <li key={detail}>• {t(`home.app.points.${detail}`)}</li>
              ))}
            </ul>
            <AppLinks />
          </div>
          <div className="max-h-[400px] overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--color-ink)]/20 bg-[color:var(--color-brand-offwhite)]/50 shadow-[var(--shadow-soft)]">
            <Image
              src={mobileAppPreviewImage}
              alt="App Preview"
              width={460}
              height={996}
              className="h-auto w-full max-h-[400px] object-contain object-center"
            />
          </div>
        </Container>
        <div className="animate-fade-up rounded-[var(--radius-xl)] border border-[color:var(--color-ink)]/20 bg-[color:var(--color-brand-offwhite)]/50 p-6 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('home.app.panelEyebrow')}
          </p>
          <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
            {t('home.app.panelTitle')}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-ink-muted)]">
            {howItWorks.map((step) => (
              <li key={step}>• {t(`home.app.panelBody.${step}`)}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
