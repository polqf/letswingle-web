import { Footer } from '@/app/components/layout/Footer';
import { Header } from '@/app/components/layout/Header';
import '@/app/globals.css';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-text)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
