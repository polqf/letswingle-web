import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function WhiteLabelPreview() {
  const t = await getTranslations();

  return (
    <section id="white-label" className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('home.whiteLabel.panelEyebrow')}
          </p>
          <div className="mt-4 space-y-4 text-sm text-[color:var(--color-ink-muted)]">
            <p>{t('home.whiteLabel.panelBody.one')}</p>
            <p>{t('home.whiteLabel.panelBody.two')}</p>
          </div>
        </div>
        <div className="space-y-6">
          <SectionHeader
            eyebrow={t('home.whiteLabel.eyebrow')}
            title={t('home.whiteLabel.title')}
            subtitle={t('home.whiteLabel.subtitle')}
          />
          <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
            <li>• {t('home.whiteLabel.points.one')}</li>
            <li>• {t('home.whiteLabel.points.two')}</li>
            <li>• {t('home.whiteLabel.points.three')}</li>
          </ul>
          <Button href="/products/white-label" variant="primary">
            {t('home.whiteLabel.cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
