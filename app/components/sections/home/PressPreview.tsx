import Link from 'next/link';

import { PressLogoGrid } from '@/app/components/press/PressLogoGrid';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function PressPreview() {
  const t = await getTranslations();
  const items = ['one', 'two', 'three', 'four'] as const;

  return (
    <section className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow={t('home.press.eyebrow')}
          title={t('home.press.title')}
          subtitle={t('home.press.subtitle')}
        />

        <PressLogoGrid />

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-5"
            >
              <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                {t(`home.press.items.${item}.title`)}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                {t(`home.press.items.${item}.source`)}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/press"
          className="text-sm font-semibold text-[color:var(--color-brand-blue)]"
        >
          {t('home.press.cta')}
        </Link>
      </Container>
    </section>
  );
}
