import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  product?: string;
  message?: string;
  locale?: string;
  website?: string; // honeypot
};

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = process.env.CONTACT_NOTIFY_EMAIL ?? 'hi@letswingle.com';

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

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildEmailHtml(payload: ContactPayload) {
  const rows = [
    ['Name', payload.name],
    ['Email', payload.email],
    ['Company', payload.company || '—'],
    ['Product', payload.product || '—'],
    ['Locale', payload.locale || '—'],
  ];

  const messageHtml = escapeHtml(payload.message ?? '').replace(/\n/g, '<br>');

  return `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#1a1a1a">New contact form submission</h2>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;font-weight:600;color:#555;border-bottom:1px solid #eee">${escapeHtml(label!)}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(value ?? '—')}</td>
          </tr>`
          )
          .join('')}
      </table>
      <div style="margin-top:20px;padding:16px;background:#f9f9f9;border-radius:8px">
        <p style="margin:0 0 4px;font-weight:600;color:#555">Message</p>
        <p style="margin:0">${messageHtml}</p>
      </div>
      <p style="margin-top:24px;font-size:12px;color:#999">Sent from letswingle.com contact form</p>
    </div>
  `;
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

  const { error } = await resend.emails.send({
    from: 'Wingle Contact <no-reply@letswingle.com>',
    to: NOTIFY_TO,
    replyTo: payload.email,
    subject: `Contact form: ${payload.name}${payload.product ? ` — ${payload.product}` : ''}`,
    html: buildEmailHtml(payload),
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
