import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Button } from '@/app/components/ui/Button';
import { Card } from '@/app/components/ui/Card';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';

const productLinks = {
  agencies: '#agencies',
  atlas: '#atlas',
  whiteLabel: '#white-label',
  app: '#wingle-app',
  pass: 'https://winglepass.com',
};

export async function ProductOverview() {
  const t = await getTranslations();

  return (
    <Section id="products">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {t('nav.products')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('home.productOverview.title')}
          </h2>
          <p className="text-[color:var(--color-text-muted)]">
            {t('home.productOverview.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex h-full flex-col gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {t('home.cards.agencies.title')}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                {t('home.cards.agencies.description')}
              </p>
            </div>
            <Button href={productLinks.agencies} variant="secondary">
              {t('home.cards.agencies.cta')}
            </Button>
          </Card>

          <Card className="flex h-full flex-col gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {t('home.cards.atlas.title')}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                {t('home.cards.atlas.description')}
              </p>
            </div>
            <Button href={productLinks.atlas} variant="secondary">
              {t('home.cards.atlas.cta')}
            </Button>
          </Card>

          <Card className="flex h-full flex-col gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {t('home.cards.whiteLabel.title')}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                {t('home.cards.whiteLabel.description')}
              </p>
            </div>
            <Button href={productLinks.whiteLabel} variant="secondary">
              {t('home.cards.whiteLabel.cta')}
            </Button>
          </Card>

          <Card className="flex h-full flex-col gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {t('home.cards.app.title')}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                {t('home.cards.app.description')}
              </p>
            </div>
            <Button href={productLinks.app} variant="secondary">
              {t('home.cards.app.cta')}
            </Button>
          </Card>

          <Card className="flex h-full flex-col gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {t('home.cards.pass.title')}
              </h3>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                {t('home.cards.pass.description')}
              </p>
            </div>
            <Button href={productLinks.pass} variant="secondary">
              {t('home.cards.pass.cta')}
            </Button>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
