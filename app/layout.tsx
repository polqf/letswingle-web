import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';

import '@/app/globals.css';
import { Footer } from '@/app/components/layout/Footer';
import { Header } from '@/app/components/layout/Header';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-brand',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: {
      default: t('meta.title'),
      template: '%s | Wingle',
    },
    description: t('meta.description'),
    metadataBase: new URL('https://letswingle.com'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      url: 'https://letswingle.com',
      siteName: 'Wingle',
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://letswingle.com',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={bricolage.variable}>
      <body className="min-h-screen bg-[color:var(--color-brand-offwhite)] text-[color:var(--color-ink)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
