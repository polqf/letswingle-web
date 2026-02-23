'use client';

import { useState } from 'react';

import { Button } from '@/app/components/ui/Button';
import { useTranslations, type Locale } from '@/app/lib/i18n/useTranslations';
import { cn } from '@/app/lib/utils/cn';

interface ContactFormProps {
  product?: string;
  locale?: Locale;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm({ product, locale = 'en' }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const t = useTranslations(locale);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (product) {
      formData.set('product', product);
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-[color:var(--color-ink)]">
            {t('forms.contact.nameLabel')}
          </span>
          <input
            className="rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/40"
            name="name"
            placeholder={t('forms.contact.namePlaceholder') + "*"}
            required
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold text-[color:var(--color-ink)]">
            {t('forms.contact.emailLabel') + "*"}
          </span>
          <input
            className="rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/40"
            type="email"
            name="email"
            placeholder={t('forms.contact.emailPlaceholder')}
            required
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-semibold text-[color:var(--color-ink)]">
          {t('forms.contact.companyLabel')}
        </span>
        <input
          className="rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/40"
          name="company"
          placeholder={t('forms.contact.companyPlaceholder')}
          autoComplete="organization"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-semibold text-[color:var(--color-ink)]">
          {t('forms.contact.productLabel')}
        </span>
        <select
          className="rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] px-4 py-3 text-[color:var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/40"
          name="product"
          defaultValue={product ?? ''}
        >
          <option value="">{t('forms.contact.productPlaceholder')}</option>
          <option value="agencies">{t('forms.contact.options.agencies')}</option>
          <option value="atlas">{t('forms.contact.options.atlas')}</option>
          <option value="white-label">{t('forms.contact.options.whiteLabel')}</option>
          <option value="wingle-app">{t('forms.contact.options.app')}</option>
          <option value="wingle">{t('forms.contact.options.web')}</option>
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-semibold text-[color:var(--color-ink)]">
          {t('forms.contact.messageLabel') + "*"}
        </span>
        <textarea
          className="min-h-[120px] rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] bg-[color:var(--color-brand-offwhite)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-blue)]/40"
          name="message"
          placeholder={t('forms.contact.messagePlaceholder')}
          required
        />
      </label>
      <label className="sr-only" aria-hidden="true">
        {t('forms.contact.websiteLabel')}
        <input className="hidden" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          className={cn(status === 'submitting' && 'opacity-60')}
          variant="primary"
          size="md"
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'success'
            ? t('forms.contact.submitSuccess')
            : t('forms.contact.submitIdle')}
        </Button>
        {status === 'error' && (
          <p className="text-sm text-[color:var(--color-ink-muted)]">
            {t('forms.contact.error')}
          </p>
        )}
        {status === 'success' && (
          <p className="text-sm text-[color:var(--color-ink-muted)]">
            {t('forms.contact.success')}
          </p>
        )}
      </div>
    </form>
  );
}
