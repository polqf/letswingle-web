'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Script from 'next/script';

function getAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const prefs = localStorage.getItem('cookie-preferences');
    if (prefs) {
      const parsed = JSON.parse(prefs);
      return parsed.analytics === true;
    }
  } catch {
    // ignore
  }
  return false;
}

export function AnalyticsProvider() {
  const [enabled, setEnabled] = useState(false);
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

  useEffect(() => {
    function checkAndEnable() {
      if (getAnalyticsConsent()) {
        setEnabled(true);
      }
    }

    // Defer initial check to avoid synchronous setState in effect body
    const timeout = setTimeout(checkAndEnable, 0);

    window.addEventListener('cookie-consent-change', checkAndEnable);
    window.addEventListener('storage', checkAndEnable);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('cookie-consent-change', checkAndEnable);
      window.removeEventListener('storage', checkAndEnable);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', { send_page_view: true });
            `}
          </Script>
        </>
      )}
    </>
  );
}
