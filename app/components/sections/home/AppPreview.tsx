import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function AppPreview() {
  const t = await getTranslations();
  const details = ['one', 'two', 'three', 'four'] as const;
  const howItWorks = ['one', 'two', 'three'] as const;

  return (
    <section id="wingle-app" className="bg-[color:var(--color-surface)] py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeader
            eyebrow={t('home.app.eyebrow')}
            title={t('home.app.title')}
            subtitle={t('home.app.subtitle')}
          />
          <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
            {details.map((detail) => (
              <li key={detail}>• {t(`home.app.points.${detail}`)}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href="https://apps.apple.com/es/app/wingle-vuela-mejor/id6479176150"
              variant="primary"
            >
              {t('home.app.primaryCta')}
            </Button>
            <Button
              href="https://play.google.com/store/apps/details?id=com.letswingle.android"
              variant="outline"
            >
              {t('home.app.secondaryCta')}
            </Button>
          </div>
        </div>
        <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] p-6">
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
          <Button
            href="https://winglepass.com"
            variant="ghost"
            className="mt-6 text-[color:var(--color-brand-blue)]"
          >
            {t('home.app.panelCta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
