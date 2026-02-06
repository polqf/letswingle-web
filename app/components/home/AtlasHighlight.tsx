import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Button } from '@/app/components/ui/Button';
import { Card } from '@/app/components/ui/Card';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';

export async function AtlasHighlight() {
  const t = await getTranslations();

  return (
    <Section id="atlas">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {t('nav.atlas')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('home.atlas.title')}
          </h2>
          <p className="text-[color:var(--color-text-muted)]">
            {t('home.atlas.subtitle')}
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--color-text-muted)]">
            <li>{t('home.atlas.bullets.one')}</li>
            <li>{t('home.atlas.bullets.two')}</li>
            <li>{t('home.atlas.bullets.three')}</li>
          </ul>
          <Button href="#contact" variant="outline">
            {t('home.cards.atlas.cta')}
          </Button>
        </div>

        <Card className="space-y-4 bg-[color:var(--color-surface)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {t('home.productOverview.title')}
          </p>
          <p className="text-lg font-semibold">
            {t('home.cards.atlas.title')}
          </p>
          <p className="text-sm text-[color:var(--color-text-muted)]">
            {t('home.cards.atlas.description')}
          </p>
          <Button href="#contact">{t('home.cards.atlas.cta')}</Button>
        </Card>
      </Container>
    </Section>
  );
}
