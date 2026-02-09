import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function AtlasPreview() {
  const t = await getTranslations();

  return (
    <section id="atlas" className="bg-[color:var(--color-surface)] py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeader
            eyebrow={t('home.atlas.eyebrow')}
            title={t('home.atlas.title')}
            subtitle={t('home.atlas.subtitle')}
          />
          <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
            <li>• {t('home.atlas.points.one')}</li>
            <li>• {t('home.atlas.points.two')}</li>
            <li>• {t('home.atlas.points.three')}</li>
          </ul>
          <Button href="/products/atlas" variant="primary">
            {t('home.atlas.cta')}
          </Button>
        </div>

        <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('home.atlas.panelEyebrow')}
          </p>
          <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
            {t('home.atlas.panelTitle')}
          </p>
          <div className="mt-4 space-y-4 text-sm text-[color:var(--color-ink-muted)]">
            <p>{t('home.atlas.panelBody.one')}</p>
            <p>{t('home.atlas.panelBody.two')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
