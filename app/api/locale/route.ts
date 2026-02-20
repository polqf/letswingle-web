import { NextRequest, NextResponse } from 'next/server';

type Locale = 'en' | 'es';

function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'es';
}

function safeRedirect(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/';
  }
  return value;
}

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const requestedLocale = searchParams.get('locale') ?? 'en';
  const locale: Locale = isLocale(requestedLocale) ? requestedLocale : 'en';
  const redirectPath = safeRedirect(searchParams.get('redirect'));

  const response = NextResponse.redirect(new URL(redirectPath, request.url));
  response.cookies.set('wingle-locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });

  return response;
}
