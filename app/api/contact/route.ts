import { NextRequest, NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  product?: string;
  message?: string;
  website?: string;
};

const rateLimit = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry) {
    rateLimit.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (now - entry.lastRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimit.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  entry.lastRequest = now;
  rateLimit.set(ip, entry);
  return false;
}

function isValidEmail(email?: string) {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function parsePayload(request: NextRequest): Promise<ContactPayload> {
  const contentType = request.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    return (await request.json()) as ContactPayload;
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries()) as ContactPayload;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  const payload = await parsePayload(request);

  if (payload.website) {
    return NextResponse.json({ success: true });
  }

  if (!payload.name || !payload.message || !isValidEmail(payload.email)) {
    return NextResponse.json(
      { error: 'Missing or invalid fields' },
      { status: 400 }
    );
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (endpoint) {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        company: payload.company ?? '',
        product: payload.product ?? '',
        message: payload.message,
        source: 'letswingle.com',
      }),
    });
  }

  return NextResponse.json({ success: true });
}
