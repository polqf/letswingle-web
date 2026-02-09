import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function TrustSignals() {
  const t = await getTranslations();
  const signals = ['one', 'two', 'three'] as const;

  return (
    <section className="surface-grid py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow={t('home.trust.eyebrow')}
          title={t('home.trust.title')}
          subtitle={t('home.trust.subtitle')}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {signals.map((signal) => (
            <div
              key={signal}
              className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
            >
              <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                {t(`home.trust.items.${signal}.title`)}
              </p>
              <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                {t(`home.trust.items.${signal}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
