import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function AgencyTiersPreview() {
  const t = await getTranslations();
  const tiers = ['basic', 'meet', 'vvip'] as const;

  return (
    <section id="agencies" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow={t('home.agencies.eyebrow')}
          title={t('home.agencies.title')}
          subtitle={t('home.agencies.subtitle')}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier}
              className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  {t(`home.agencies.tiers.${tier}.title`)}
                </h3>
                <p className="text-sm text-[color:var(--color-ink-muted)]">
                  {t(`home.agencies.tiers.${tier}.description`)}
                </p>
              </div>
              <div className="mt-6 space-y-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                <p>{t(`home.agencies.tiers.${tier}.availability`)}</p>
                <p>{t(`home.agencies.tiers.${tier}.pricing`)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
