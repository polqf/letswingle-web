# Tech Stack — letswingle.com

## Overview

A statically-generated marketing website built with Next.js, designed to match the stack and conventions of sibling Wingle web projects (`wingle-web`, `wingle-atlas-web`). The site is primarily static content with lightweight dynamic features (contact forms, blog, internationalization).

## Languages and Runtimes

| Layer | Technology | Version |
|---|---|---|
| Language | TypeScript | 5 (strict mode) |
| Runtime (build) | Node.js | 20+ (LTS) |
| Runtime (production) | Edge / Node.js (Vercel) | Managed |

TypeScript is used exclusively. No plain JavaScript files.

## Frameworks

| Framework | Version | Purpose |
|---|---|---|
| **Next.js** | 15 (App Router) | Full-stack React framework with SSG/SSR |
| **React** | 19 | UI library |
| **Tailwind CSS** | 4 | Utility-first CSS framework |

### Why This Stack

This is the same stack used by `wingle-web` and `wingle-atlas-web`. Using identical tooling across Wingle web projects:

- Reduces context-switching for developers working across projects.
- Allows sharing of patterns, components, and conventions.
- Simplifies CI/CD and deployment since all projects deploy to Vercel.
- Enables potential future extraction of shared UI components.

## Key Dependencies

### UI and Presentation

| Package | Purpose |
|---|---|
| `lucide-react` | Icon library (consistent with sibling projects) |
| `clsx` | Conditional CSS class composition |
| `tailwind-merge` | Tailwind class deduplication |
| `remark` + `remark-html` + `remark-gfm` | Render blog content from Markdown (with GitHub Flavored Markdown support) |
| `gray-matter` | Parse Markdown frontmatter for blog posts |

### Internationalization

| Package | Purpose |
|---|---|
| `getTranslations()` (server) | Server-side translation access via `app/lib/i18n/getTranslations.ts` |
| `useTranslations(locale)` (client) | Client-side hook for interactive components (e.g., `ContactForm`) |
| `/api/locale` route | Locale switching via cookie, used by `LanguageSwitcher` component |

Languages supported: **English (EN)** and **Spanish (ES)**. ~760 translation keys per language covering all pages, navigation, forms, and metadata.

### Forms and Email

| Package | Purpose |
|---|---|
| `resend` | Email delivery for contact form submissions |
| Native HTML `<form>` with `FormData` | Contact forms (client component with state management) |

Forms submit via POST to `/api/contact`, which sends styled HTML email via Resend to the configured `CONTACT_NOTIFY_EMAIL`. Includes in-memory rate limiting and honeypot spam detection. No database.

### Analytics

| Package | Purpose |
|---|---|
| `@vercel/analytics` | Page-level analytics |
| `@vercel/speed-insights` | Performance monitoring |
| Google Analytics 4 (optional) | Marketing attribution |

### SEO

| Capability | Approach |
|---|---|
| Metadata | Next.js `generateMetadata` per page |
| Open Graph | Dynamic OG images or static per-page |
| Sitemap | `sitemap.ts` (dynamic generation) |
| Robots | `robots.ts` |
| Structured data | JSON-LD where appropriate (Organization, Product) |

## Content System

### Blog

The blog migrates from `winglepass.com/blog` (which itself consolidated the Jekyll-based `cockpit.letswingle.com`).

| Aspect | Approach |
|---|---|
| Storage | Markdown files in `content/blog/` |
| Frontmatter | `gray-matter` for metadata parsing |
| Rendering | `remark` + `remark-html` + `remark-gfm` (server-side HTML rendering) |
| Categories | Cockpit Diaries (`content/blog/posts/`), News (`content/blog/news/`) |
| Routing | `/blog` (hub), `/blog/entry` + `/blog/entry/[slug]` (diaries), `/blog/news` + `/blog/news/[slug]` (news) |
| Utilities | `app/blog/lib/content.ts` (loading), `app/blog/lib/utils.ts` (date formatting, reading time) |
| Static generation | `generateStaticParams()` for all post/news slugs |

No headless CMS. Content lives in the repository as Markdown.

### Legal Pages

| Aspect | Approach |
|---|---|
| Storage | Content lives in translation files (`en.ts` / `es.ts`), rendered by page components |
| Wrapper | `LegalShell` component provides shared layout (title, subtitle, children) |
| Pages | Terms of Service (`/legal/terms`), Privacy Policy (`/legal/privacy`), Cookie Policy (`/legal/cookies`) |

### Static Content

Product descriptions, feature lists, FAQs, and testimonials are stored as structured data (TypeScript objects or JSON) within the codebase, not in a CMS.

## Project Structure

```
letswingle-web/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Home page
│   ├── layout.tsx             # Root layout (Bricolage Grotesque font, nav, footer, OG metadata)
│   ├── globals.css            # Design tokens, utility classes, blog styles
│   ├── components/
│   │   ├── ui/                # Button, Container, SectionHeader, Tag
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── forms/             # ContactForm (client component)
│   │   ├── sections/          # ContactBand, LegalShell
│   │   │   └── home/          # Hero, AppPreview, AgencyTiersPreview, ProductPaths, etc.
│   │   └── press/             # PressLogoGrid
│   ├── lib/
│   │   ├── i18n/              # getTranslations.ts, useTranslations hook, translations/{en,es}.ts
│   │   └── images.ts          # Centralized external image URLs
│   ├── blog/                  # Blog pages
│   │   ├── page.tsx           # Blog hub (featured + latest)
│   │   ├── entry/             # Cockpit Diaries listing + [slug] pages
│   │   ├── news/              # News listing + [slug] pages
│   │   ├── components/        # BlogListItem
│   │   └── lib/               # content.ts, utils.ts
│   ├── products/
│   │   ├── wingle-app/        # B2C app showcase + AppLinks + faqs/ subpage
│   │   ├── agencies/          # Wingle for Travel Professionals hub
│   │   ├── pro/               # Wingle Pro (premium airport services)
│   │   └── atlas/             # Wingle Atlas (digital itineraries)
│   ├── about/                 # Company page
│   ├── contact/               # General contact
│   ├── press/                 # Press page with media logos
│   ├── legal/                 # terms/, privacy/, cookies/
│   └── api/
│       ├── contact/           # POST handler (Resend email, rate limiting, honeypot)
│       └── locale/            # GET handler (locale switching via cookie)
├── content/
│   └── blog/
│       ├── posts/             # Cockpit Diaries (Markdown)
│       └── news/              # News articles (Markdown)
├── public/
│   ├── brand/                 # Logo assets (blue-logo.png, blue-symbol.png, logo.svg, symbol.svg)
│   └── press/                 # Media outlet logos (9 outlets)
├── docs/                      # Project documentation (this folder)
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Authentication and Authorization

**None.** This is a public marketing site. There are no user accounts, no login, no protected routes.

Contact forms submit data externally. They do not write to any Wingle-owned database directly.

## External Services and Integrations

| Service | Purpose | Required |
|---|---|---|
| **Vercel** | Hosting, deployment, edge functions | Yes |
| **Resend** | Email delivery for contact form submissions | Yes |
| **Vercel Analytics** | Page analytics | Planned |
| **Google Analytics 4** | Marketing attribution and tracking | Planned |
| **AWS CloudFront** | CDN for images shared with other Wingle products | Likely |

This site does **not** integrate with:

- `prod.letswingle.com` (Wingle backend)
- `partners.letswingle.com` (Partner API)
- Stripe or any payment provider
- Any authentication service

## Deployment

| Aspect | Value |
|---|---|
| **Platform** | Vercel |
| **Domain** | `letswingle.com` |
| **Build command** | `next build` |
| **Output** | Static + ISR (blog pages may use ISR for rebuild) |
| **Branch strategy** | `main` → production |
| **Preview deployments** | Automatic per PR (Vercel default) |

### Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact form email delivery |
| `CONTACT_NOTIFY_EMAIL` | Recipient for contact form submissions (defaults to `hi@letswingle.com`) |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Google Analytics 4 (optional, not yet configured) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (`https://letswingle.com`) |

Minimal environment configuration. The only secret is the Resend API key.

## Local vs. Production Differences

| Aspect | Local | Production |
|---|---|---|
| URL | `http://localhost:3001` | `https://letswingle.com` |
| Analytics | Disabled | Enabled |
| Contact forms | Send via Resend (requires API key) | Send via Resend |
| Image optimization | Next.js dev server | Vercel image optimization |
| Rendering | Dev server (SSR) | Static/ISR (pre-rendered) |

## TypeScript Configuration

Follows the same conventions as sibling projects:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Note: Unlike `wingle-web` and `wingle-atlas-web`, this project does **not** need `experimentalDecorators` or `emitDecoratorMetadata` since it does not use `class-transformer` (no API deserialization).
