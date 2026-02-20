import Image from 'next/image';
import Link from 'next/link';

import { LanguageSwitcher } from '@/app/components/layout/LanguageSwitcher';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';

const links = [
  { href: '/products/wingle-app', key: 'nav.app' },
  { href: '/products/agencies', key: 'nav.agencies' },
  { href: '/blog', key: 'nav.blog' },
  { href: '/about', key: 'nav.about' },
];

export async function Header() {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-stroke)]/60 bg-[color:var(--color-brand-offwhite)]/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/blue-logo.png"
            alt="Wingle"
            width={120}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[color:var(--color-ink-muted)] lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              className="transition-colors hover:text-[color:var(--color-ink)]"
              href={link.href}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button href="/contact" variant="primary" size="sm">
            {t('nav.cta')}
          </Button>
        </div>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-[color:var(--color-stroke)] px-4 py-2 text-sm font-semibold text-[color:var(--color-ink)]">
            {t('nav.menu')}
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-[var(--radius-lg)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-4 shadow-[var(--shadow-soft)]">
            <div className="flex flex-col gap-3 text-sm font-semibold text-[color:var(--color-ink)]">
              <LanguageSwitcher locale={locale} />
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {t(link.key)}
                </Link>
              ))}
              <Button href="/contact" variant="primary" size="sm">
                {t('nav.cta')}
              </Button>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
