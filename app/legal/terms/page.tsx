import { LegalShell } from '@/app/components/sections/LegalShell';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function TermsPage() {
  const t = await getTranslations();

  return (
    <LegalShell title={t('legal.terms.title')} subtitle={t('legal.terms.subtitle')}>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.terms.sections.scope.title')}
        </h2>
        <p>{t('legal.terms.sections.scope.body')}</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.terms.sections.use.title')}
        </h2>
        <ul className="list-disc space-y-2 pl-4">
          <li>{t('legal.terms.sections.use.items.one')}</li>
          <li>{t('legal.terms.sections.use.items.two')}</li>
          <li>{t('legal.terms.sections.use.items.three')}</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.terms.sections.disclaimers.title')}
        </h2>
        <p>{t('legal.terms.sections.disclaimers.body')}</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.terms.sections.contact.title')}
        </h2>
        <p>{t('legal.terms.sections.contact.body')}</p>
      </section>
    </LegalShell>
  );
}
