'use client';

import { useMemo } from 'react';

import { en } from './translations/en';
import { es } from './translations/es';

type TranslationSchema = typeof en;
type Locale = 'en' | 'es';

const translations: Record<Locale, TranslationSchema> = {
  en,
  es: es as unknown as TranslationSchema,
};

function getValue(schema: TranslationSchema, key: string) {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, schema);
}

export function useTranslations(locale: Locale = 'en') {
  return useMemo(() => {
    const schema = translations[locale] ?? translations.en;

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
  }, [locale]);
}

export type { Locale, TranslationSchema };
