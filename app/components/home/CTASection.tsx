import { ContactForm } from '@/app/components/forms/ContactForm';
import { Container } from '@/app/components/ui/Container';
import { Section } from '@/app/components/ui/Section';
import { getLocale, getTranslations } from '@/app/lib/i18n/getTranslations';

export async function CTASection() {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <Section
      id="contact"
      className="bg-[color:var(--color-primary)] text-[color:var(--color-on-primary)]"
    >
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('home.cta.title')}
          </h2>
          <p className="opacity-80">{t('home.cta.subtitle')}</p>
        </div>
        <ContactForm locale={locale} />
      </Container>
    </Section>
  );
}
