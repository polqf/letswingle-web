import { ContactBand } from '@/app/components/sections/ContactBand';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function AboutPage() {
  const t = await getTranslations();
  const values = ['one', 'two', 'three', 'four'] as const;

  return (
    <>
      <section className="surface-grid py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Tag>{t('about.hero.eyebrow')}</Tag>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              {t('about.hero.title')}
            </h1>
            <p className="text-base text-[color:var(--color-ink-muted)] md:text-lg">
              {t('about.hero.subtitle')}
            </p>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
              {t('about.hero.panelEyebrow')}
            </p>
            <p className="mt-3 text-lg font-semibold text-[color:var(--color-ink)]">
              {t('about.hero.panelTitle')}
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
              {t('about.hero.panelBody')}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <SectionHeader
            eyebrow={t('about.values.eyebrow')}
            title={t('about.values.title')}
            subtitle={t('about.values.subtitle')}
          />
        </Container>
      </section>

      <ContactBand
        title={t('about.contact.title')}
        subtitle={t('about.contact.subtitle')}
        note={t('about.contact.note')}
        product="general"
        tone="light"
      />
    </>
  );
}
