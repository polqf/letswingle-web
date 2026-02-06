# Coding Guidelines — letswingle.com

These guidelines are derived from the conventions established in `wingle-web` and `wingle-atlas-web`, adapted for a marketing site without authentication, API integration, or complex state management.

---

## File Organization

### Directory Structure

```
app/
├── components/           # All shared components
│   ├── ui/              # Generic UI primitives (Button, Card, Input, etc.)
│   ├── layout/          # Layout components (Header, Footer, Navigation)
│   ├── forms/           # Contact and lead capture form components
│   ├── blog/            # Blog-specific components (PostCard, PostList, etc.)
│   └── products/        # Product showcase components (FeatureGrid, PricingTable, etc.)
├── lib/
│   ├── i18n/            # Translation files and hook
│   │   ├── translations/
│   │   │   ├── en.ts
│   │   │   └── es.ts
│   │   └── useTranslations.ts
│   ├── analytics/       # Analytics setup and helpers
│   ├── blog/            # Blog utilities (Markdown parsing, content loading)
│   └── utils/           # General utilities
├── types/               # Shared TypeScript types
├── static/              # Static structured content (product data, FAQs)
├── (routes)/            # Page routes (Next.js App Router)
└── api/                 # API routes (contact form handlers)
```

### Where Logic Should Live

| Logic Type | Location | Example |
|---|---|---|
| Page layout and composition | `app/(routes)/*/page.tsx` | Assembling components into a product page |
| Reusable UI | `app/components/ui/` | `Button`, `Card`, `Badge` |
| Site layout | `app/components/layout/` | `Header`, `Footer`, `Navigation` |
| Form handling | `app/components/forms/` | `ContactForm`, `DemoRequestForm` |
| Blog content parsing | `app/lib/blog/` | Markdown loading, frontmatter parsing |
| Translation strings | `app/lib/i18n/translations/` | `en.ts`, `es.ts` |
| Product content data | `app/static/` | Feature lists, testimonials, service descriptions |
| Form submission endpoints | `app/api/` | POST handlers for contact forms |
| General utilities | `app/lib/utils/` | `cn()` (clsx + tailwind-merge), formatters |
| Shared types | `app/types/` | `ContactFormData`, `BlogPost`, `ProductInfo` |

---

## Component Patterns

### All Components Use Named Exports

```typescript
// Good
export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (/* ... */);
}

// Bad — default exports (except pages)
export default function FeatureCard() { /* ... */ }
```

Pages are the exception — Next.js requires `export default function`.

### Props Interface Above Component

```typescript
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  // ...
}
```

### Prefer Server Components

Unlike `wingle-web` and `wingle-atlas-web` (which default to `'use client'` due to heavy interactivity), this project should **prefer server components** by default. A marketing site benefits from server rendering:

- Better SEO (content is in the initial HTML)
- Faster load times (less client-side JavaScript)
- Simpler mental model (no hydration concerns for static content)

Use `'use client'` only when necessary:

- Components with `useState`, `useEffect`, or event handlers
- Form components with client-side validation
- Components using browser APIs (IntersectionObserver, etc.)
- Interactive UI elements (mobile menu toggle, accordion, carousel)

```typescript
// Server component (default — no directive needed)
export function ProductHero({ title, subtitle }: ProductHeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

// Client component (only when interactivity is needed)
'use client';

import { useState } from 'react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

### Component-First Architecture

Pages are thin orchestrators. They import components, pass props, and define layout. Business logic (even minimal) lives in components or utilities, not in page files.

```typescript
// Good — page orchestrates components
export default function AgenciesPage() {
  return (
    <>
      <ProductHero title={t('agencies.hero.title')} />
      <FeatureGrid features={agencyFeatures} />
      <Testimonials items={agencyTestimonials} />
      <ContactForm product="agencies" />
    </>
  );
}

// Bad — page contains inline markup and logic
export default function AgenciesPage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-blue-500 p-8">
        <h1 className="text-4xl font-bold">...</h1>
        {/* 200 lines of inline JSX */}
      </div>
    </div>
  );
}
```

---

## Styling

### Tailwind CSS with Semantic Design Tokens

Define design tokens as CSS custom properties. Use semantic names, not raw color values.

```css
/* In global CSS */
:root {
  --color-primary: #0088ff;
  --color-primary-hover: #0066cc;
  --color-secondary: #ffea50;
  --color-text: #1a1a2e;
  --color-text-muted: #6b7280;
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;
}
```

```typescript
// Good — semantic token
<button className="bg-primary text-white hover:bg-primary-hover">

// Bad — raw color
<button className="bg-[#0088ff] text-white hover:bg-[#0066cc]">
```

### Conditional Classes with `cn()`

Use the `cn()` utility (clsx + tailwind-merge) for conditional and merged classes:

```typescript
import { cn } from '@/app/lib/utils';

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg px-6 py-3 font-medium transition-colors',
        variant === 'primary' && 'bg-primary text-white hover:bg-primary-hover',
        variant === 'secondary' && 'bg-surface text-text border border-border hover:bg-gray-100',
        className
      )}
      {...props}
    />
  );
}
```

### Responsive Design

This is a public-facing marketing site. Mobile-first is mandatory.

```typescript
// Good — mobile-first breakpoints
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Bad — desktop-first (breaks on mobile)
<div className="grid grid-cols-3 gap-8">
```

---

## Internationalization

### Type-Safe Translations

Follow the pattern from `wingle-web`: a `useTranslations` hook with typed translation keys.

```typescript
// app/lib/i18n/translations/en.ts
export const en = {
  nav: {
    home: 'Home',
    products: 'Products',
    blog: 'Blog',
    contact: 'Contact',
  },
  home: {
    hero: {
      title: 'Travel, reimagined.',
      subtitle: 'Premium services and social connection for every flight.',
    },
  },
  // ...
} as const;
```

```typescript
// In a component
const t = useTranslations();
return <h1>{t('home.hero.title')}</h1>;
```

### Translation Rules

- **Every user-visible string must go through the translation system.** No hardcoded strings in components.
- **Translation keys should be namespaced by page or feature** (`home.hero.title`, `agencies.features.lounge`).
- **EN is the source of truth.** ES translations mirror the EN structure exactly.
- **Missing translations fall back to EN**, never to empty strings or keys.

---

## Blog Content

### Markdown Frontmatter Structure

```markdown
---
title: "Episode 11: New Season"
slug: "episode-11-new-season"
date: "2025-04-07"
category: "cockpit-diaries"  # or "news"
excerpt: "Retrofitting Wingle with the goal of making it your go-to app for air travel."
image: "/blog/episode-11-cover.jpg"  # optional
---

Blog content here in Markdown...
```

### Blog Utilities

Blog loading and parsing logic lives in `app/lib/blog/`:

```typescript
// app/lib/blog/index.ts
export function getAllPosts(): BlogPost[] { /* ... */ }
export function getPostBySlug(slug: string): BlogPost | null { /* ... */ }
export function getPostsByCategory(category: BlogCategory): BlogPost[] { /* ... */ }
```

---

## Forms

### Form Components Are Client Components

Forms require `'use client'` for state management and validation.

```typescript
'use client';

import { useState } from 'react';

interface ContactFormProps {
  product?: string;  // Pre-filled context (e.g., "agencies", "atlas")
}

export function ContactForm({ product }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    // ... submit logic
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Fields */}
      {status === 'success' && <SuccessMessage />}
      {status === 'error' && <ErrorMessage />}
    </form>
  );
}
```

### Form Submission API Routes

Form handlers live in `app/api/` and:

- Validate all input server-side
- Rate-limit submissions
- Return structured JSON responses
- Never expose internal error details

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate
  if (!body.email || !body.name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Submit to backend/third-party
  // ...

  return NextResponse.json({ success: true });
}
```

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Component files | PascalCase | `FeatureCard.tsx`, `ContactForm.tsx` |
| Utility files | camelCase or kebab-case | `blogUtils.ts`, `use-translations.ts` |
| Page files | `page.tsx` (Next.js convention) | `app/products/agencies/page.tsx` |
| Layout files | `layout.tsx` (Next.js convention) | `app/layout.tsx` |
| Translation files | lowercase language code | `en.ts`, `es.ts` |
| Static content files | camelCase | `agencyFeatures.ts`, `atlasTestimonials.ts` |
| Types | PascalCase | `ContactFormData`, `BlogPost` |
| CSS custom properties | kebab-case | `--color-primary`, `--font-heading` |

---

## Imports

### Import Order

1. React / Next.js
2. Third-party libraries
3. Internal modules (`@/app/...`)
4. Relative imports

```typescript
import Link from 'next/link';
import Image from 'next/image';

import { Plane, MapPin, Shield } from 'lucide-react';

import { useTranslations } from '@/app/lib/i18n/useTranslations';
import { cn } from '@/app/lib/utils';

import { FeatureCard } from './FeatureCard';
```

### Path Aliases

Use `@/` for all imports from the project root:

```typescript
// Good
import { Button } from '@/app/components/ui/Button';

// Bad
import { Button } from '../../../components/ui/Button';
```

---

## What to Avoid

1. **Do not add authentication.** This site is public. If you're considering a login, stop.
2. **Do not add a database.** Content is static or submitted externally.
3. **Do not import from sibling projects** (`wingle-web`, `wingle-atlas-web`). Copy patterns, not code.
4. **Do not use `'use client'` on components that don't need it.** Prefer server components for static content.
5. **Do not hardcode strings in components.** Use the translation system.
6. **Do not use raw color values.** Use semantic design tokens.
7. **Do not build pages with inline JSX.** Extract components.
8. **Do not add state management libraries.** `useState` and `useContext` are sufficient.
9. **Do not over-engineer the blog.** It is Markdown files rendered by React. Keep it simple.
10. **Do not create API routes for anything other than form submissions.** This is not an API server.

---

## Code Quality

### TypeScript Strictness

- `strict: true` is non-negotiable.
- No `any` types. Use `unknown` and narrow with type guards if needed.
- All function parameters and return types should be inferable or explicit.
- No `// @ts-ignore` or `// @ts-expect-error` without a documented reason.

### Linting

- ESLint with Next.js recommended rules.
- Lint translations at build time (script from `wingle-web` pattern) to catch missing keys.

### Accessibility

- All images must have `alt` text.
- Interactive elements must be keyboard-accessible.
- Color contrast must meet WCAG 2.1 AA standards.
- Semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Form inputs must have associated `<label>` elements.

### Performance

- Use `next/image` for all images (automatic optimization, lazy loading).
- Use `next/link` for all internal navigation (prefetching).
- Keep client-side JavaScript minimal — most pages should work without JS.
- Defer non-critical scripts (analytics, chat widgets if any).
