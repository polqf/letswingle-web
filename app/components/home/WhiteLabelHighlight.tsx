import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';

export async function WhiteLabelHighlight() {
  const t = await getTranslations();

  return (
    <Section id="white-label">
      <Container className="grid gap-8 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {t('nav.whiteLabel')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('home.whiteLabel.title')}
          </h2>
          <p className="text-[color:var(--color-text-muted)]">
            {t('home.whiteLabel.subtitle')}
          </p>
        </div>

        <div className="space-y-4 text-sm text-[color:var(--color-text-muted)]">
          <ul className="space-y-3">
            <li>{t('home.whiteLabel.bullets.one')}</li>
            <li>{t('home.whiteLabel.bullets.two')}</li>
            <li>{t('home.whiteLabel.bullets.three')}</li>
          </ul>
          <Button href="#contact" variant="primary">
            {t('home.cards.whiteLabel.cta')}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
