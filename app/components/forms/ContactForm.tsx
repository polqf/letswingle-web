'use client';

import { useState } from 'react';

import { cn } from '@/app/lib/utils/cn';
import { useTranslations, type Locale } from '@/app/lib/i18n/useTranslations';

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
          <span className="font-medium text-[color:var(--color-on-primary)]">
            {t('forms.contact.nameLabel')}
          </span>
          <input
            className="rounded-2xl border border-[color:var(--color-on-primary)]/20 bg-[color:var(--color-on-primary)]/10 px-4 py-3 text-[color:var(--color-on-primary)] placeholder:text-[color:var(--color-on-primary)]/60"
            name="name"
            placeholder={t('forms.contact.namePlaceholder')}
            required
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-medium text-[color:var(--color-on-primary)]">
            {t('forms.contact.emailLabel')}
          </span>
          <input
            className="rounded-2xl border border-[color:var(--color-on-primary)]/20 bg-[color:var(--color-on-primary)]/10 px-4 py-3 text-[color:var(--color-on-primary)] placeholder:text-[color:var(--color-on-primary)]/60"
            type="email"
            name="email"
            placeholder={t('forms.contact.emailPlaceholder')}
            required
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-medium text-[color:var(--color-on-primary)]">
          {t('forms.contact.companyLabel')}
        </span>
        <input
          className="rounded-2xl border border-[color:var(--color-on-primary)]/20 bg-[color:var(--color-on-primary)]/10 px-4 py-3 text-[color:var(--color-on-primary)] placeholder:text-[color:var(--color-on-primary)]/60"
          name="company"
          placeholder={t('forms.contact.companyPlaceholder')}
          autoComplete="organization"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-medium text-[color:var(--color-on-primary)]">
          {t('forms.contact.productLabel')}
        </span>
        <select
          className="rounded-2xl border border-[color:var(--color-on-primary)]/20 bg-[color:var(--color-on-primary)]/10 px-4 py-3 text-[color:var(--color-on-primary)]"
          name="product"
          defaultValue={product ?? ''}
        >
          <option value="" className="text-[color:var(--color-text)]">
            {t('forms.contact.productPlaceholder')}
          </option>
          <option value="agencies" className="text-[color:var(--color-text)]">
            {t('forms.contact.options.agencies')}
          </option>
          <option value="atlas" className="text-[color:var(--color-text)]">
            {t('forms.contact.options.atlas')}
          </option>
          <option value="white-label" className="text-[color:var(--color-text)]">
            {t('forms.contact.options.whiteLabel')}
          </option>
          <option value="wingle-app" className="text-[color:var(--color-text)]">
            {t('forms.contact.options.app')}
          </option>
          <option value="wingle-pass" className="text-[color:var(--color-text)]">
            {t('forms.contact.options.pass')}
          </option>
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-medium text-[color:var(--color-on-primary)]">
          {t('forms.contact.messageLabel')}
        </span>
        <textarea
          className="min-h-[120px] rounded-2xl border border-[color:var(--color-on-primary)]/20 bg-[color:var(--color-on-primary)]/10 px-4 py-3 text-[color:var(--color-on-primary)] placeholder:text-[color:var(--color-on-primary)]/60"
          name="message"
          placeholder={t('forms.contact.messagePlaceholder')}
          required
        />
      </label>
      <label className="sr-only" aria-hidden="true">
        {t('forms.contact.websiteLabel')}
        <input
          className="hidden"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
      <button
        className={cn(
          'rounded-full bg-[color:var(--color-card)] px-6 py-3 font-semibold text-[color:var(--color-primary)] transition-opacity',
          status === 'submitting' && 'opacity-60'
        )}
        disabled={status === 'submitting'}
        type="submit"
      >
        {status === 'success'
          ? t('forms.contact.submitSuccess')
          : t('forms.contact.submitIdle')}
      </button>
      {status === 'error' && (
        <p className="text-[color:var(--color-on-primary)]/80">
          {t('forms.contact.error')}
        </p>
      )}
      {status === 'success' && (
        <p className="text-[color:var(--color-on-primary)]/80">
          {t('forms.contact.success')}
        </p>
      )}
    </form>
  );
}
