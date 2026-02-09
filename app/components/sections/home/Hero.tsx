import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { Tag } from '@/app/components/ui/Tag';
import { getTranslations } from '@/app/lib/i18n/getTranslations';

export async function Hero() {
  const t = await getTranslations();

  return (
    <section className="hero-sky text-[color:var(--color-brand-offwhite)]">
      <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
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
            <Button href="/contact" variant="accent" size="lg">
              {t('home.hero.primaryCta')}
            </Button>
            <Button
              href="#products"
              variant="outline"
              size="lg"
              className="border-[color:var(--color-brand-offwhite)]/40 text-[color:var(--color-brand-offwhite)] hover:bg-[color:var(--color-brand-offwhite)]/10"
            >
              {t('home.hero.secondaryCta')}
            </Button>
          </div>
        </div>

        <div className="animate-fade-up rounded-[var(--radius-xl)] border border-[color:var(--color-brand-offwhite)]/20 bg-[color:var(--color-brand-offwhite)]/10 p-6 shadow-[var(--shadow-soft)]">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand-yellow)]">
                {t('home.hero.panelEyebrow')}
              </p>
              <p className="mt-2 text-xl font-semibold">
                {t('home.hero.panelTitle')}
              </p>
            </div>
            <div className="space-y-4 text-sm text-[color:var(--color-brand-offwhite)]/80">
              <p>{t('home.hero.panelBody.one')}</p>
              <p>{t('home.hero.panelBody.two')}</p>
              <p>{t('home.hero.panelBody.three')}</p>
            </div>
            <div className="rounded-[var(--radius-md)] bg-[color:var(--color-brand-offwhite)]/15 p-4 text-sm">
              {t('home.hero.panelNote')}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
