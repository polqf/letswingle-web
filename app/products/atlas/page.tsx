import type { Metadata } from 'next';

import { ContactBand } from '@/app/components/sections/ContactBand';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t('meta.atlas.title'),
    description: t('meta.atlas.description'),
    openGraph: {
      title: t('meta.atlas.title'),
      description: t('meta.atlas.description'),
      url: 'https://letswingle.com/products/atlas',
    },
    alternates: { canonical: 'https://letswingle.com/products/atlas' },
  };
}

export default async function AtlasPage() {
  const t = await getTranslations();
  const features = ['one', 'two', 'three', 'four'] as const;
  const outcomes = ['one', 'two', 'three'] as const;

  return (
    <>
      <section className="surface-grid py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Tag>{t('atlas.hero.eyebrow')}</Tag>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              {t('atlas.hero.title')}
            </h1>
            <p className="text-base text-[color:var(--color-ink-muted)] md:text-lg">
              {t('atlas.hero.subtitle')}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                {t('atlas.hero.primaryCta')}
              </Button>
              <Button href="#features" variant="outline" size="lg">
                {t('atlas.hero.secondaryCta')}
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              {t('atlas.hero.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
              {t('atlas.hero.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              {t('atlas.hero.panelBody')}
            </p>
          </div>
        </Container>
      </section>

      <section id="features" className="py-20">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow={t('atlas.features.eyebrow')}
            title={t('atlas.features.title')}
            subtitle={t('atlas.features.subtitle')}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
              >
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {t(`atlas.features.items.${feature}.title`)}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  {t(`atlas.features.items.${feature}.description`)}
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
              {t('atlas.outcomes.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
              {t('atlas.outcomes.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              {t('atlas.outcomes.panelBody')}
            </p>
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow={t('atlas.outcomes.eyebrow')}
              title={t('atlas.outcomes.title')}
              subtitle={t('atlas.outcomes.subtitle')}
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {outcomes.map((outcome) => (
                <li key={outcome}>• {t(`atlas.outcomes.items.${outcome}`)}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ContactBand
        title={t('atlas.contact.title')}
        subtitle={t('atlas.contact.subtitle')}
        note={t('atlas.contact.note')}
        product="atlas"
      />
    </>
  );
}
