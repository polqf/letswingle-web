import type { Metadata } from 'next';

import { ContactBand } from '@/app/components/sections/ContactBand';
import { Container } from '@/app/components/ui/Container';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t('meta.contact.title'),
    description: t('meta.contact.description'),
    openGraph: {
      title: t('meta.contact.title'),
      description: t('meta.contact.description'),
      url: 'https://letswingle.com/contact',
    },
    alternates: { canonical: 'https://letswingle.com/contact' },
  };
}

export default async function ContactPage() {
  const t = await getTranslations();

  return (
    <>
      <section className="surface-grid py-20">
        <Container className="space-y-6">
          <Tag>{t('contact.hero.eyebrow')}</Tag>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            {t('contact.hero.title')}
          </h1>
          <p className="max-w-2xl text-base text-[color:var(--color-ink-muted)] md:text-lg">
            {t('contact.hero.subtitle')}
          </p>
        </Container>
      </section>

      <ContactBand
        title={t('contact.form.title')}
        subtitle={t('contact.form.subtitle')}
        note={t('contact.form.note')}
        product="general"
        tone="light"
      />
    </>
  );
}
