import Link from 'next/link';

import { PressLogoGrid } from '@/app/components/press/PressLogoGrid';
import { Container } from '@/app/components/ui/Container';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function PressPreview() {
  const t = await getTranslations();

  return (
    <section className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow={t('home.press.eyebrow')}
          title={t('home.press.title')}
          subtitle={t('home.press.subtitle')}
        />

        <PressLogoGrid />

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
