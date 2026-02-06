import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Card } from '@/app/components/ui/Card';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';

export async function AgencyTiers() {
  const t = await getTranslations();

  return (
    <Section
      id="agencies"
      className="bg-[color:var(--color-surface)]"
    >
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {t('nav.agencies')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('home.agencyTiers.title')}
          </h2>
          <p className="text-[color:var(--color-text-muted)]">
            {t('home.agencyTiers.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('home.agencyTiers.tiers.basic.title')}
            </h3>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              {t('home.agencyTiers.tiers.basic.description')}
            </p>
            <div className="space-y-2 text-xs text-[color:var(--color-text-muted)]">
              <p>{t('home.agencyTiers.tiers.basic.availability')}</p>
              <p>{t('home.agencyTiers.tiers.basic.pricing')}</p>
            </div>
          </Card>

          <Card className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('home.agencyTiers.tiers.meetAssist.title')}
            </h3>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              {t('home.agencyTiers.tiers.meetAssist.description')}
            </p>
            <div className="space-y-2 text-xs text-[color:var(--color-text-muted)]">
              <p>{t('home.agencyTiers.tiers.meetAssist.availability')}</p>
              <p>{t('home.agencyTiers.tiers.meetAssist.pricing')}</p>
            </div>
          </Card>

          <Card className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('home.agencyTiers.tiers.vvip.title')}
            </h3>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              {t('home.agencyTiers.tiers.vvip.description')}
            </p>
            <div className="space-y-2 text-xs text-[color:var(--color-text-muted)]">
              <p>{t('home.agencyTiers.tiers.vvip.availability')}</p>
              <p>{t('home.agencyTiers.tiers.vvip.pricing')}</p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
