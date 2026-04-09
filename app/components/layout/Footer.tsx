import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/app/components/ui/Container';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export const INSTAGRAM_URL = 'https://www.instagram.com/lets_wingle';
const TIKTOK_URL = 'https://www.tiktok.com/@letswingle';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.07A6.33 6.33 0 0 0 3.16 15.66 6.33 6.33 0 0 0 9.49 22a6.33 6.33 0 0 0 6.33-6.33V9.14a8.16 8.16 0 0 0 3.77.94V6.69z" />
    </svg>
  );
}

export async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-stroke)]/60 bg-[color:var(--color-brand-offwhite)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Image
            src="/brand/blue-logo.png"
            alt="Wingle"
            width={120}
            height={32}
          />
          <p className="text-sm text-[color:var(--color-ink-muted)]">
            {t('footer.description')}
          </p>
          <p className="text-xs text-[color:var(--color-ink-muted)]">
            {t('footer.legal')}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm font-semibold text-[color:var(--color-ink)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('footer.products')}
          </p>
          <Link href="/products/wingle-app">{t('nav.app')}</Link>
          <Link href="/products/agencies">{t('nav.agencies')}</Link>
          <Link href="/products/atlas">{t('nav.atlas')}</Link>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm font-semibold text-[color:var(--color-ink)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('footer.company')}
          </p>
          <Link href="/about">{t('nav.about')}</Link>
          <Link href="/blog">{t('nav.blog')}</Link>
          <Link href="/press">{t('nav.press')}</Link>
          <Link href="/contact">{t('nav.contact')}</Link>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm font-semibold text-[color:var(--color-ink)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('footer.legalLinks')}
          </p>
          <Link href="/legal/terms">{t('footer.terms')}</Link>
          <Link href="/privacy">{t('footer.privacy')}</Link>
          <Link href="/legal/cookies">{t('footer.cookies')}</Link>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm font-semibold text-[color:var(--color-ink)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('footer.social')}
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[color:var(--color-brand-blue)]"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[color:var(--color-brand-blue)]"
          >
            <TikTokIcon className="h-4 w-4" />
            TikTok
          </a>
        </div>
      </Container>
      <div className="border-t border-[color:var(--color-stroke)]/60">
        <Container className="py-4 text-xs text-[color:var(--color-ink-muted)]">
          © {year} {t('footer.legal')} · {t('footer.rights')}
        </Container>
      </div>
    </footer>
  );
}
