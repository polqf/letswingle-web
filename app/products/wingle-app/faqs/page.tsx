import type { Metadata } from 'next';

import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t('meta.faqs.title'),
    description: t('meta.faqs.description'),
    openGraph: {
      title: t('meta.faqs.title'),
      description: t('meta.faqs.description'),
      url: 'https://letswingle.com/products/wingle-app/faqs',
    },
    alternates: { canonical: 'https://letswingle.com/products/wingle-app/faqs' },
  };
}

export default async function WingleAppFaqsPage() {
  const t = await getTranslations();
  const faqs = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
  ] as const;

  return (
    <section className="surface-grid py-20">
      <Container className="space-y-12">
        <div className="space-y-6">
          <Tag>{t('faqs.hero.eyebrow')}</Tag>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            {t('faqs.hero.title')}
          </h1>
          <p className="max-w-2xl text-base text-[color:var(--color-ink-muted)] md:text-lg">
            {t('faqs.hero.subtitle')}
          </p>
        </div>

        <SectionHeader
          eyebrow={t('faqs.list.eyebrow')}
          title={t('faqs.list.title')}
          subtitle={t('faqs.list.subtitle')}
        />

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq}
              className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6"
            >
              <p className="text-base font-semibold text-[color:var(--color-ink)]">
                {t(`faqs.items.${faq}.question`)}
              </p>
              <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                {t(`faqs.items.${faq}.answer`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
