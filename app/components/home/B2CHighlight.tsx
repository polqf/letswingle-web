import { Button } from '@/app/components/ui/Button';
import { Card } from '@/app/components/ui/Card';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

const storeLinks = {
  apple: 'https://apps.apple.com',
  google: 'https://play.google.com/store',
  pass: 'https://winglepass.com',
};

export async function B2CHighlight() {
  const t = await getTranslations();

  return (
    <Section id="wingle-app" className="bg-[color:var(--color-surface)]">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {t('nav.app')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('home.b2c.title')}
          </h2>
          <p className="text-[color:var(--color-text-muted)]">
            {t('home.b2c.subtitle')}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--color-text-muted)]">
            <li>{t('home.b2c.bullets.one')}</li>
            <li>{t('home.b2c.bullets.two')}</li>
            <li>{t('home.b2c.bullets.three')}</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button href={storeLinks.apple} variant="outline">
              {t('home.cards.app.cta')}
            </Button>
            <Button href={storeLinks.google} variant="outline">
              {t('home.b2c.googlePlayCta')}
            </Button>
          </div>
        </div>

        <Card className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {t('home.cards.pass.title')}
          </p>
          <p className="text-sm text-[color:var(--color-text-muted)]">
            {t('home.cards.pass.description')}
          </p>
          <Button href={storeLinks.pass}>{t('home.cards.pass.cta')}</Button>
        </Card>
      </Container>
    </Section>
  );
}
