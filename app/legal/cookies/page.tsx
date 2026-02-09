import { LegalShell } from '@/app/components/sections/LegalShell';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function CookiesPage() {
  const t = await getTranslations();

  return (
    <LegalShell title={t('legal.cookies.title')} subtitle={t('legal.cookies.subtitle')}>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.cookies.sections.types.title')}
        </h2>
        <ul className="list-disc space-y-2 pl-4">
          <li>{t('legal.cookies.sections.types.items.one')}</li>
          <li>{t('legal.cookies.sections.types.items.two')}</li>
          <li>{t('legal.cookies.sections.types.items.three')}</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.cookies.sections.controls.title')}
        </h2>
        <p>{t('legal.cookies.sections.controls.body')}</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.cookies.sections.contact.title')}
        </h2>
        <p>{t('legal.cookies.sections.contact.body')}</p>
      </section>
    </LegalShell>
  );
}
