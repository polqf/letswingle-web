import { ContactBand } from '@/app/components/sections/ContactBand';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function HomeCTA() {
  const t = await getTranslations();

  return (
    <ContactBand
      title={t('home.cta.title')}
      subtitle={t('home.cta.subtitle')}
      note={t('home.cta.note')}
    />
  );
}
