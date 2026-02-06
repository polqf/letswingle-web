import Link from 'next/link';

import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Container } from '@/app/components/ui/Container';

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-card)]">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold">Wingle</p>
          <p className="text-sm text-[color:var(--color-text-muted)]">
            {t('footer.description')}
          </p>
          <p className="text-xs text-[color:var(--color-text-muted)]">
            {t('footer.legal')}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-medium text-[color:var(--color-text-muted)]">
          <Link className="hover:text-[color:var(--color-text)]" href="#products">
            {t('nav.products')}
          </Link>
          <Link className="hover:text-[color:var(--color-text)]" href="#agencies">
            {t('nav.agencies')}
          </Link>
          <Link className="hover:text-[color:var(--color-text)]" href="#atlas">
            {t('nav.atlas')}
          </Link>
          <Link className="hover:text-[color:var(--color-text)]" href="#white-label">
            {t('nav.whiteLabel')}
          </Link>
          <Link className="hover:text-[color:var(--color-text)]" href="#wingle-app">
            {t('nav.app')}
          </Link>
        </div>

        <p className="text-xs text-[color:var(--color-text-muted)]">
          (c) {new Date().getFullYear()} {t('footer.legal')} - {t('footer.rights')}
        </p>
      </Container>
    </footer>
  );
}
