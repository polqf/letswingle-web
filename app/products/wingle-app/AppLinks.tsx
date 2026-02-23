import { Button } from '@/app/components/ui/Button';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function AppLinks() {
  const t = await getTranslations();
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        href="https://apps.apple.com/es/app/wingle-vuela-mejor/id6479176150"
        variant="primary"
        size="lg"
      >
        {t('app.hero.primaryCta')}
      </Button>
      <Button
        href="https://winglepass.com"
        variant="outline"
        size="lg"
      >
        {t('home.app.panelCta')}
      </Button>
      <Button
        href="https://play.google.com/store/apps/details?id=com.letswingle.android"
        variant="outline"
        size="lg"
      >
        {t('app.hero.secondaryCta')}
      </Button>
    </div>
  );
}
