import Link from 'next/link';

import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function ProductPaths() {
  const t = await getTranslations();
  const cards = [
    {
      key: 'agencies',
      href: '/products/agencies',
      label: t('home.paths.cards.agencies.label'),
      title: t('home.paths.cards.agencies.title'),
      description: t('home.paths.cards.agencies.description'),
      cta: t('home.paths.cards.agencies.cta'),
    },
    {
      key: 'atlas',
      href: '/products/atlas',
      label: t('home.paths.cards.atlas.label'),
      title: t('home.paths.cards.atlas.title'),
      description: t('home.paths.cards.atlas.description'),
      cta: t('home.paths.cards.atlas.cta'),
    },
    {
      key: 'whiteLabel',
      href: '/products/white-label',
      label: t('home.paths.cards.whiteLabel.label'),
      title: t('home.paths.cards.whiteLabel.title'),
      description: t('home.paths.cards.whiteLabel.description'),
      cta: t('home.paths.cards.whiteLabel.cta'),
    },
    {
      key: 'app',
      href: '/products/wingle-app',
      label: t('home.paths.cards.app.label'),
      title: t('home.paths.cards.app.title'),
      description: t('home.paths.cards.app.description'),
      cta: t('home.paths.cards.app.cta'),
    },
  ];

  return (
    <section id="products" className="surface-grid py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow={t('home.paths.eyebrow')}
          title={t('home.paths.title')}
          subtitle={t('home.paths.subtitle')}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="group flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <Tag>{card.label}</Tag>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-[color:var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-ink-muted)]">
                    {card.description}
                  </p>
                </div>
              </div>
              <span className="mt-6 text-sm font-semibold text-[color:var(--color-brand-blue)]">
                {card.cta}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
