import Link from 'next/link';

import { PressLogoGrid } from '@/app/components/press/PressLogoGrid';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function PressPage() {
  const t = await getTranslations();
  const items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] as const;

  return (
    <section className="surface-grid py-20">
      <Container className="space-y-12">
        <div className="space-y-6">
          <Tag>{t('press.hero.eyebrow')}</Tag>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            {t('press.hero.title')}
          </h1>
          <p className="max-w-2xl text-base text-[color:var(--color-ink-muted)] md:text-lg">
            {t('press.hero.subtitle')}
          </p>
        </div>

        <SectionHeader
          eyebrow={t('press.list.eyebrow')}
          title={t('press.list.title')}
          subtitle={t('press.list.subtitle')}
        />

        <PressLogoGrid />

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item}
              href={t(`press.items.${item}.url`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-sm font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand-blue)]">
                {t(`press.items.${item}.title`)}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                {t(`press.items.${item}.source`)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
