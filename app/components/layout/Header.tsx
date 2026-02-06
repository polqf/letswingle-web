import Link from 'next/link';

import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';

export async function Header() {
  const t = await getTranslations();

  return (
    <header className="border-b border-[color:var(--color-border)] bg-[color:var(--color-card)] backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Wingle
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--color-text-muted)] md:flex">
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
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#contact" variant="outline" size="sm">
            {t('nav.contact')}
          </Button>
          <Button href="#contact" size="sm">
            {t('nav.cta')}
          </Button>
        </div>
      </Container>
    </header>
  );
}
