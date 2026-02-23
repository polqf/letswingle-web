import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function Hero() {
  const t = await getTranslations();

  return (
    <section className="hero-sky text-[color:var(--color-brand-offwhite)]">
      <Container className="py-20">
        <div className="space-y-6">
          <Tag className="border-[color:var(--color-brand-offwhite)]/40 bg-transparent text-[color:var(--color-brand-offwhite)]">
            {t('home.hero.eyebrow')}
          </Tag>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            {t('home.hero.title')}
          </h1>
          <p className="max-w-xl text-base text-[color:var(--color-brand-offwhite)]/85 md:text-lg">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href="/products/wingle-app"
              variant="accent"
              size="lg">
              {t('home.hero.primaryCta')}
            </Button>
            <Button
              href="/products/agencies"
              variant="outline"
              size="lg"
              className="border-[color:var(--color-brand-offwhite)]/40 text-[color:var(--color-brand-offwhite)] hover:bg-[color:var(--color-brand-offwhite)]/10"
            >
              {t('home.hero.secondaryCta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
