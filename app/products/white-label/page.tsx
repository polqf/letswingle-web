import { ContactBand } from '@/app/components/sections/ContactBand';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function WhiteLabelPage() {
  const t = await getTranslations();
  const capabilities = ['one', 'two', 'three'] as const;
  const audiences = ['one', 'two', 'three'] as const;

  return (
    <>
      <section className="hero-sky text-[color:var(--color-brand-offwhite)]">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <Tag className="border-[color:var(--color-brand-offwhite)]/40 bg-transparent text-[color:var(--color-brand-offwhite)]">
              {t('whiteLabel.hero.eyebrow')}
            </Tag>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              {t('whiteLabel.hero.title')}
            </h1>
            <p className="text-base text-[color:var(--color-brand-offwhite)]/85 md:text-lg">
              {t('whiteLabel.hero.subtitle')}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="accent" size="lg">
                {t('whiteLabel.hero.primaryCta')}
              </Button>
              <Button
                href="#capabilities"
                variant="outline"
                size="lg"
                className="border-[color:var(--color-brand-offwhite)]/40 text-[color:var(--color-brand-offwhite)] hover:bg-[color:var(--color-brand-offwhite)]/10"
              >
                {t('whiteLabel.hero.secondaryCta')}
              </Button>
            </div>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-brand-offwhite)]/20 bg-[color:var(--color-brand-offwhite)]/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand-yellow)]">
              {t('whiteLabel.hero.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold">
              {t('whiteLabel.hero.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-brand-offwhite)]/80">
              {t('whiteLabel.hero.panelBody')}
            </p>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="py-20">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow={t('whiteLabel.capabilities.eyebrow')}
            title={t('whiteLabel.capabilities.title')}
            subtitle={t('whiteLabel.capabilities.subtitle')}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
              >
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {t(`whiteLabel.capabilities.items.${capability}.title`)}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {t(`whiteLabel.capabilities.items.${capability}.description`)}
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
              {t('whiteLabel.audience.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
              {t('whiteLabel.audience.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              {t('whiteLabel.audience.panelBody')}
            </p>
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow={t('whiteLabel.audience.eyebrow')}
              title={t('whiteLabel.audience.title')}
              subtitle={t('whiteLabel.audience.subtitle')}
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {audiences.map((audience) => (
                <li key={audience}>• {t(`whiteLabel.audience.items.${audience}`)}</li>
              ))}
            </ul>
            <Button href="/contact" variant="primary">
              {t('whiteLabel.audience.cta')}
            </Button>
          </div>
        </Container>
      </section>

      <ContactBand
        title={t('whiteLabel.contact.title')}
        subtitle={t('whiteLabel.contact.subtitle')}
        note={t('whiteLabel.contact.note')}
        product="white-label"
      />
    </>
  );
}
