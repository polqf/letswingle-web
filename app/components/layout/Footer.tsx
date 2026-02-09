import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/app/components/ui/Container';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-stroke)]/60 bg-[color:var(--color-brand-offwhite)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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

        <div className="space-y-3 text-sm font-semibold text-[color:var(--color-ink)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('footer.products')}
          </p>
          <Link href="/products/agencies">{t('nav.agencies')}</Link>
          <Link href="/products/atlas">{t('nav.atlas')}</Link>
          <Link href="/products/white-label">{t('nav.whiteLabel')}</Link>
          <Link href="/products/wingle-app">{t('nav.app')}</Link>
        </div>

        <div className="space-y-3 text-sm font-semibold text-[color:var(--color-ink)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('footer.company')}
          </p>
          <Link href="/about">{t('nav.about')}</Link>
          <Link href="/blog">{t('nav.blog')}</Link>
          <Link href="/contact">{t('nav.contact')}</Link>
        </div>

        <div className="space-y-3 text-sm font-semibold text-[color:var(--color-ink)]">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
            {t('footer.legalLinks')}
          </p>
          <Link href="/legal/terms">{t('footer.terms')}</Link>
          <Link href="/legal/privacy">{t('footer.privacy')}</Link>
          <Link href="/legal/cookies">{t('footer.cookies')}</Link>
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
