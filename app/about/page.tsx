import type { Metadata } from 'next';

import { ContactBand } from '@/app/components/sections/ContactBand';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t('meta.about.title'),
    description: t('meta.about.description'),
    openGraph: {
      title: t('meta.about.title'),
      description: t('meta.about.description'),
      url: 'https://letswingle.com/about',
    },
    alternates: { canonical: 'https://letswingle.com/about' },
  };
}

export default async function AboutPage() {
  const t = await getTranslations();

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
