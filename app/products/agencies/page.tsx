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
    title: t('meta.agencies.title'),
    description: t('meta.agencies.description'),
    openGraph: {
      title: t('meta.agencies.title'),
      description: t('meta.agencies.description'),
      url: 'https://letswingle.com/products/agencies',
    },
    alternates: { canonical: 'https://letswingle.com/products/agencies' },
  };
}

export default async function AgenciesPage() {
  const t = await getTranslations();
  const atlasHighlights = ['one', 'two', 'three', 'four'] as const;
  const proHighlights = ['one', 'two', 'three', 'four'] as const;

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
              <Button href="/products/pro" variant="accent" size="lg">
                {t('agencies.hero.primaryCta')}
              </Button>
              <Button
                href="/products/atlas"
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

      <section className="bg-[color:var(--color-surface)] py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow={t('agencies.pro.eyebrow')}
              title={t('agencies.pro.title')}
              subtitle={t('agencies.pro.subtitle')}
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {proHighlights.map((item) => (
                <li key={item}>• {t(`agencies.pro.points.${item}`)}</li>
              ))}
            </ul>
            <Button href="/products/pro" variant="primary">
              {t('agencies.pro.cta')}
            </Button>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              {t('pro.outcomes.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
              {t('pro.outcomes.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              {t('pro.outcomes.panelBody')}
            </p>
          </div>
        </Container>
      </section>

      <hr className="border-[color:var(--color-stroke)]" />

      <section className="bg-[color:var(--color-surface)] py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow={t('atlas.hero.eyebrow')}
              title={t('atlas.outcomes.title')}
              subtitle={t('atlas.outcomes.subtitle')}
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-ink-muted)]">
              {atlasHighlights.map((item) => (
                <li key={item}>• {t(`atlas.outcomes.items.${item}`)}</li>
              ))}
            </ul>
            <Button href="/products/atlas" variant="primary">
              {t('atlas.outcomes.cta')}
            </Button>
          </div>

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
