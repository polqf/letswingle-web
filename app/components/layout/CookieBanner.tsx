'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookieBannerProps {
  translations: {
    message: string;
    learnMore: string;
    rejectAll: string;
    acceptNecessary: string;
    acceptAll: string;
  };
}

export function CookieBanner({ translations: t }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setVisible(true);
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  function handleAcceptAll() {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem(
      'cookie-preferences',
      JSON.stringify({ necessary: true, analytics: true }),
    );
    window.dispatchEvent(new Event('cookie-consent-change'));
    setVisible(false);
  }

  function handleAcceptNecessary() {
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem(
      'cookie-preferences',
      JSON.stringify({ necessary: true, analytics: false }),
    );
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem(
      'cookie-preferences',
      JSON.stringify({ necessary: true, analytics: false }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-lg -translate-x-1/2 rounded-[var(--radius-xl)] border border-[color:var(--color-stroke)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
      <p className="text-sm text-[color:var(--color-ink-muted)]">
        {t.message}{' '}
        <Link
          href="/legal/cookies"
          className="underline hover:text-[color:var(--color-ink)]"
        >
          {t.learnMore}
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={handleReject}
          className="cursor-pointer rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] px-4 py-2 text-sm font-medium text-[color:var(--color-ink-muted)] transition-colors hover:bg-[color:var(--color-brand-offwhite)]"
        >
          {t.rejectAll}
        </button>
        <button
          onClick={handleAcceptNecessary}
          className="cursor-pointer rounded-[var(--radius-md)] border border-[color:var(--color-stroke)] px-4 py-2 text-sm font-medium text-[color:var(--color-ink-muted)] transition-colors hover:bg-[color:var(--color-brand-offwhite)]"
        >
          {t.acceptNecessary}
        </button>
        <button
          onClick={handleAcceptAll}
          className="cursor-pointer rounded-[var(--radius-md)] bg-[color:var(--color-ink)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
        >
          {t.acceptAll}
        </button>
      </div>
    </div>
  );
}
