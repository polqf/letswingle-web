import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function AgencyTiersPreview() {
  const t = await getTranslations();
  const points = ['one', 'two', 'three', 'four', 'five'] as const;

  return (
    <section id="travel-professionals" className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeader
            eyebrow={t('home.agencies.eyebrow')}
            title={t('home.agencies.title')}
            subtitle={t('home.agencies.subtitle')}
          />
          <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
            {points.map((point) => (
              <li key={point}>• {t(`home.agencies.points.${point}`)}</li>
            ))}
          </ul>
          <Button href="/products/agencies" variant="primary">
            {t('home.agencies.cta')}
          </Button>
        </div>
        <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('home.agencies.panelEyebrow')}
          </p>
          <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
            {t('home.agencies.panelTitle')}
          </p>
          <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
            {t('home.agencies.panelBody')}
          </p>
        </div>
      </Container>
    </section>
  );
}
