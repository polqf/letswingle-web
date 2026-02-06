import { getTranslations } from '@/app/lib/i18n/getTranslations';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';

export async function Hero() {
  const t = await getTranslations();

  return (
    <Section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_var(--color-surface)_0%,_transparent_60%)]">
      <Container className="flex flex-col items-start gap-8">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            Wingle
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--color-text)] md:text-5xl">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg text-[color:var(--color-text-muted)] md:text-xl">
            {t('home.hero.subtitle')}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="#contact" size="lg">
            {t('home.hero.primaryCta')}
          </Button>
          <Button href="#products" variant="outline" size="lg">
            {t('home.hero.secondaryCta')}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
