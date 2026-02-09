import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { ContactBand } from '@/app/components/sections/ContactBand';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function WingleAppPage() {
  const t = await getTranslations();
  const highlights = ['one', 'two', 'three'] as const;
  const services = ['one', 'two', 'three'] as const;

  return (
    <>
      <section className="surface-grid py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Tag>{t('app.hero.eyebrow')}</Tag>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              {t('app.hero.title')}
            </h1>
            <p className="text-base text-[color:var(--color-ink-muted)] md:text-lg">
              {t('app.hero.subtitle')}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href="https://apps.apple.com/es/app/wingle-vuela-mejor/id6479176150"
                variant="primary"
                size="lg"
              >
                {t('app.hero.primaryCta')}
              </Button>
              <Button
                href="https://play.google.com/store/apps/details?id=com.letswingle.android"
                variant="outline"
                size="lg"
              >
                {t('app.hero.secondaryCta')}
              </Button>
            </div>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              {t('app.hero.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
              {t('app.hero.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              {t('app.hero.panelBody')}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow={t('app.highlights.eyebrow')}
            title={t('app.highlights.title')}
            subtitle={t('app.highlights.subtitle')}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
              >
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {t(`app.highlights.items.${highlight}.title`)}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {t(`app.highlights.items.${highlight}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-surface)] py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              {t('app.services.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
              {t('app.services.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              {t('app.services.panelBody')}
            </p>
            <Button
              href="https://winglepass.com"
              variant="ghost"
              className="mt-6 text-[color:var(--color-brand-blue)]"
            >
              {t('app.services.panelCta')}
            </Button>
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow={t('app.services.eyebrow')}
              title={t('app.services.title')}
              subtitle={t('app.services.subtitle')}
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {services.map((service) => (
                <li key={service}>• {t(`app.services.items.${service}`)}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ContactBand
        title={t('app.contact.title')}
        subtitle={t('app.contact.subtitle')}
        note={t('app.contact.note')}
        product="wingle-app"
        tone="light"
      />
    </>
  );
}
