import { LegalShell } from '@/app/components/sections/LegalShell';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export default async function PrivacyPage() {
  const t = await getTranslations();

  return (
    <LegalShell title={t('legal.privacy.title')} subtitle={t('legal.privacy.subtitle')}>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.privacy.sections.data.title')}
        </h2>
        <ul className="list-disc space-y-2 pl-4">
          <li>{t('legal.privacy.sections.data.items.one')}</li>
          <li>{t('legal.privacy.sections.data.items.two')}</li>
          <li>{t('legal.privacy.sections.data.items.three')}</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.privacy.sections.use.title')}
        </h2>
        <ul className="list-disc space-y-2 pl-4">
          <li>{t('legal.privacy.sections.use.items.one')}</li>
          <li>{t('legal.privacy.sections.use.items.two')}</li>
          <li>{t('legal.privacy.sections.use.items.three')}</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.privacy.sections.retention.title')}
        </h2>
        <p>{t('legal.privacy.sections.retention.body')}</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-[color:var(--color-ink)]">
          {t('legal.privacy.sections.rights.title')}
        </h2>
        <p>{t('legal.privacy.sections.rights.body')}</p>
      </section>
    </LegalShell>
  );
}
