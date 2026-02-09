import { ContactBand } from '@/app/components/sections/ContactBand';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function AgenciesPage() {
  const t = await getTranslations();
  const tiers = ['basic', 'meet', 'vvip'] as const;
  const reasons = ['one', 'two', 'three', 'four'] as const;
  const steps = ['one', 'two', 'three'] as const;

  return (
    <>
      <section className="hero-sky text-[color:var(--color-brand-offwhite)]">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <Tag className="border-[color:var(--color-brand-offwhite)]/40 bg-transparent text-[color:var(--color-brand-offwhite)]">
              {t('agencies.hero.eyebrow')}
            </Tag>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              {t('agencies.hero.title')}
            </h1>
            <p className="text-base text-[color:var(--color-brand-offwhite)]/85 md:text-lg">
              {t('agencies.hero.subtitle')}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="accent" size="lg">
                {t('agencies.hero.primaryCta')}
              </Button>
              <Button
                href="#tiers"
                variant="outline"
                size="lg"
                className="border-[color:var(--color-brand-offwhite)]/40 text-[color:var(--color-brand-offwhite)] hover:bg-[color:var(--color-brand-offwhite)]/10"
              >
                {t('agencies.hero.secondaryCta')}
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-brand-offwhite)]/20 bg-[color:var(--color-brand-offwhite)]/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand-yellow)]">
              {t('agencies.hero.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold">
              {t('agencies.hero.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-brand-offwhite)]/80">
              {t('agencies.hero.panelBody')}
            </p>
          </div>
        </Container>
      </section>

      <section id="tiers" className="py-20">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow={t('agencies.tiers.eyebrow')}
            title={t('agencies.tiers.title')}
            subtitle={t('agencies.tiers.subtitle')}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier}
                className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
              >
                <h3 className="text-xl font-semibold">
                  {t(`agencies.tiers.items.${tier}.title`)}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {t(`agencies.tiers.items.${tier}.description`)}
                </p>
                <div className="mt-6 space-y-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                  <p>{t(`agencies.tiers.items.${tier}.availability`)}</p>
                  <p>{t(`agencies.tiers.items.${tier}.pricing`)}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-surface)] py-20">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow={t('agencies.reasons.eyebrow')}
            title={t('agencies.reasons.title')}
            subtitle={t('agencies.reasons.subtitle')}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] p-6"
              >
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {t(`agencies.reasons.items.${reason}.title`)}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {t(`agencies.reasons.items.${reason}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow={t('agencies.process.eyebrow')}
            title={t('agencies.process.title')}
            subtitle={t('agencies.process.subtitle')}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step}
                className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                  {t(`agencies.process.items.${step}.label`)}
                </p>
                <p className="mt-3 text-base font-semibold text-[color:var(--color-ink)]">
                  {t(`agencies.process.items.${step}.title`)}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {t(`agencies.process.items.${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactBand
        title={t('agencies.contact.title')}
        subtitle={t('agencies.contact.subtitle')}
        note={t('agencies.contact.note')}
        product="agencies"
      />
    </>
  );
}
