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
| `react-markdown` | Render blog content from Markdown |
| `gray-matter` | Parse Markdown frontmatter for blog posts |

### Internationalization

| Package | Purpose |
|---|---|
| Custom `useTranslations` hook | Type-safe i18n (pattern from `wingle-web`) |

Languages supported: **English (EN)** and **Spanish (ES)**.

### Forms

| Package | Purpose |
|---|---|
| Native HTML forms or lightweight library (TBD) | Contact and demo request forms |

Forms submit to an API route or third-party service. No database.

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
| Rendering | `react-markdown` with custom components |
| Categories | Cockpit Diaries, News |
| Routing | `/blog`, `/blog/[slug]` |

No headless CMS. Content lives in the repository as Markdown.

### Legal Pages

| Aspect | Approach |
|---|---|
| Storage | Markdown files in `content/legal/` |
| Languages | EN and ES variants per document |
| Pages | Terms of Service, Privacy Policy, Cookie Policy, Legal Notice |

### Static Content

Product descriptions, feature lists, FAQs, and testimonials are stored as structured data (TypeScript objects or JSON) within the codebase, not in a CMS.

## Project Structure

```
letswingle-web/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Home page
│   ├── layout.tsx             # Root layout (nav, footer, providers)
│   ├── components/            # Shared UI components
│   ├── lib/                   # Utilities, i18n, analytics
│   │   ├── i18n/              # Translation files and hook
│   │   └── analytics/         # Analytics setup
│   ├── blog/                  # Blog pages
│   │   ├── page.tsx           # Blog index
│   │   └── [slug]/page.tsx    # Blog post
│   ├── products/              # Product pages
│   │   ├── wingle-app/        # B2C app showcase
│   │   ├── agencies/          # Wingle Pass for Agencies
│   │   ├── atlas/             # Wingle Atlas
│   │   └── white-label/       # White Label solution
│   ├── about/                 # Company page
│   ├── contact/               # General contact
│   ├── legal/                 # Terms, Privacy, Cookies
│   └── api/                   # API routes (contact form handlers)
├── content/                   # Markdown content
│   ├── blog/                  # Blog posts
│   └── legal/                 # Legal documents
├── public/                    # Static assets (images, fonts)
├── docs/                      # Project documentation (this folder)
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts (if needed beyond CSS)
└── package.json
```

## Authentication and Authorization

**None.** This is a public marketing site. There are no user accounts, no login, no protected routes.

Contact forms submit data externally. They do not write to any Wingle-owned database directly.

## External Services and Integrations

| Service | Purpose | Required |
|---|---|---|
| **Vercel** | Hosting, deployment, edge functions | Yes |
| **Vercel Analytics** | Page analytics | Yes |
| **Google Analytics 4** | Marketing attribution and tracking | Optional |
| **Contact form backend** | Receive form submissions (e.g., email forwarding, CRM integration, or Wingle backend endpoint) | Yes (for product pages with forms) |
| **AWS CloudFront** | CDN for images shared with other Wingle products | Likely |

This site does **not** integrate with:

- `prod.letswingle.com` (Wingle backend) — except potentially for contact form submission
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
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Google Analytics 4 (optional) |
| `CONTACT_FORM_ENDPOINT` | Where contact form submissions are sent |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (`https://letswingle.com`) |

Minimal environment configuration. No secrets beyond optional analytics IDs and form endpoint.

## Local vs. Production Differences

| Aspect | Local | Production |
|---|---|---|
| URL | `http://localhost:3000` | `https://letswingle.com` |
| Analytics | Disabled | Enabled |
| Contact forms | Log to console or mock | Submit to real endpoint |
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
