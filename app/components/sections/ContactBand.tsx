import { ContactForm } from '@/app/components/forms/ContactForm';
import { Container } from '@/app/components/ui/Container';
import { getLocale } from '@/app/lib/i18n/getTranslations';

interface ContactBandProps {
  title: string;
  subtitle: string;
  note?: string;
  product?: string;
  tone?: 'blue' | 'light';
}

export async function ContactBand({
  title,
  subtitle,
  note,
  product,
  tone = 'blue',
}: ContactBandProps) {
  const locale = await getLocale();
  const isBlue = tone === 'blue';

  return (
    <section
      className={isBlue ? 'hero-sky py-20 text-[color:var(--color-brand-offwhite)]' : 'py-20'}
    >
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-4">
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          <p
            className={
              isBlue
                ? 'text-base text-[color:var(--color-brand-offwhite)]/85'
                : 'text-base text-[color:var(--color-ink-muted)]'
            }
          >
            {subtitle}
          </p>
          {note ? (
            <p
              className={
                isBlue
                  ? 'text-sm text-[color:var(--color-brand-offwhite)]/70'
                  : 'text-sm text-[color:var(--color-ink-muted)]'
              }
            >
              {note}
            </p>
          ) : null}
        </div>

        <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
          <ContactForm locale={locale} product={product} />
        </div>
      </Container>
    </section>
  );
}
