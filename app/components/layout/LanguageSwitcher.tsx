'use client';

import { usePathname, useSearchParams } from 'next/navigation';

type Locale = 'en' | 'es';

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

function buildRedirect(pathname: string, searchParams: { toString(): string }) {
  const query = searchParams.toString();
  return query ? `${pathname}?${query}` : pathname;
}

function localeHref(targetLocale: Locale, redirect: string) {
  const params = new URLSearchParams({
    locale: targetLocale,
    redirect,
  });
  return `/api/locale?${params.toString()}`;
}

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? '/';
  const searchParams = useSearchParams();
  const redirect = buildRedirect(pathname, searchParams);

  const baseClasses =
    'rounded-full border px-3 py-1 text-xs font-semibold transition-colors';
  const activeClasses =
    'border-[color:var(--color-brand-blue)] text-[color:var(--color-brand-blue)] border-2';
  const inactiveClasses =
    'border-[color:var(--color-stroke)] text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]';

  return (
    <div className={className ?? 'flex items-center gap-2'}>
      <a
        href={localeHref('en', redirect)}
        className={`${baseClasses} ${locale === 'en' ? activeClasses : inactiveClasses}`}
      >
        EN
      </a>
      <a
        href={localeHref('es', redirect)}
        className={`${baseClasses} ${locale === 'es' ? activeClasses : inactiveClasses}`}
      >
        ES
      </a>
    </div>
  );
}
