import { headers } from 'next/headers';

import { en } from './translations/en';
import { es } from './translations/es';

type TranslationSchema = typeof en;
type Locale = 'en' | 'es';

const translations: Record<Locale, TranslationSchema> = {
  en,
  es: es as unknown as TranslationSchema,
};

async function resolveLocale(): Promise<Locale> {
  const h = await headers();
  const acceptLanguage = h.get('accept-language') ?? '';
  return acceptLanguage.toLowerCase().includes('es') ? 'es' : 'en';
}

function getValue(schema: TranslationSchema, key: string) {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, schema);
}

export async function getTranslations(locale?: Locale) {
  const activeLocale = locale ?? (await resolveLocale());
  const schema = translations[activeLocale] ?? translations.en;

  return function t(key: keyof TranslationSchema | string) {
    const value = getValue(schema, key);
    if (typeof value === 'string') {
      return value;
    }

    const fallback = getValue(translations.en, key);
    if (typeof fallback === 'string') {
      return fallback;
    }

    return key;
  };
}

export async function getLocale(): Promise<Locale> {
  return resolveLocale();
}

export type { Locale, TranslationSchema };
