# Constraints — letswingle.com

## Technical Constraints

### No Authentication

This site does not have user accounts, login, sessions, or protected routes. Every page is publicly accessible. This is intentional — the site is a marketing and information surface, not an application.

**Implication:** There is no need for `next-auth`, token management, middleware-based route protection, or any of the authentication patterns used in `wingle-web` or `wingle-atlas-web`.

### No Database

This site does not own or connect to a database. All content is either:

- Static (Markdown files, TypeScript constants, JSON)
- Submitted externally (contact forms → third-party or API endpoint)

**Implication:** No ORM, no migrations, no data models beyond TypeScript types for content structure.

### No Integration with the Wingle Backend

This site does not call `prod.letswingle.com` or `partners.letswingle.com` for any data. It does not use the Wingle API, does not deserialize API responses, and does not need `class-transformer` or the shared `core/` module used by sibling projects.

**Exception:** Contact form submissions may optionally be routed to a Wingle backend endpoint, but this is a fire-and-forget POST — not a product integration.

**Implication:** The `core/` directory pattern from `wingle-web` and `wingle-atlas-web` is not replicated here.

### Static-First Rendering

Pages should be statically generated at build time wherever possible. The only pages that may benefit from ISR (Incremental Static Regeneration) are blog pages if content is updated frequently. There is no server-side data fetching at request time.

**Implication:** `getServerSideProps`-style patterns do not apply. Prefer `generateStaticParams` and static rendering.

### Vercel Deployment Only

The site is deployed to Vercel. There is no requirement to support other hosting platforms. Vercel-specific features (Analytics, Speed Insights, image optimization, preview deployments) may be used freely.

**Implication:** No need for Docker, custom servers, or platform-agnostic deployment configuration.

### Two Languages Only (EN/ES)

The site supports English and Spanish at launch. No other languages are planned for the near term.

**Implication:** The i18n system should be designed for extensibility (adding a language should be straightforward), but there is no need to handle complex locale negotiation, RTL, or pluralization rules beyond what EN/ES require.

## Product Constraints

### No Transactions

This site does not process payments, manage subscriptions, or handle any financial operations. There is no Stripe integration, no checkout flow, no pricing calculator.

**Implication:** No need for Stripe SDK, payment form components, or webhook handlers.

### No User-Generated Content

Beyond contact form submissions, users do not create, edit, or upload content on this site. There are no comments, reviews, ratings, or user profiles.

**Implication:** No need for content moderation, spam protection beyond basic form validation, or rich text editing.

### Contact Forms Are the Primary Dynamic Feature

Contact forms are the most dynamic element on the site. They must:

- Collect structured data (name, email, company, product interest, message)
- Submit to an external endpoint reliably
- Provide clear feedback (success/error states)
- Include basic validation (required fields, email format)
- Not require JavaScript to be functional (progressive enhancement, if feasible)

**Implication:** Form infrastructure is the one area where thoughtful engineering matters. The rest of the site is presentation.

### Blog Content Is Version-Controlled

Blog posts are Markdown files committed to the repository. There is no CMS, no admin panel, and no way for non-developers to publish without a code change and deployment.

**Implication:** This is a deliberate trade-off. If editorial velocity becomes a bottleneck, a headless CMS can be introduced later without changing the rendering layer.

### Each Product Page Is Self-Contained

Product pages (Agencies, Atlas, White Label, B2C App) must be independently comprehensible. A visitor may land directly on any product page from a search result or shared link. No product page should depend on the visitor having seen the home page first.

**Implication:** Each product page needs its own hero, value proposition, and CTA. Shared components (nav, footer) provide site-wide context, but the page itself must stand alone.

## Scope Exclusions

The following are explicitly **out of scope** for this project:

| Item | Reason |
|---|---|
| User accounts and authentication | Not a product application |
| E-commerce and payments | Not a transactional platform |
| API documentation | Would live in a separate developer portal if needed |
| Real-time features (chat, notifications) | Not relevant to a marketing site |
| Mobile app (React Native, etc.) | The company site is web-only |
| A/B testing infrastructure | Can be layered on via Vercel or third-party later |
| CRM dashboard | Lead management happens in external tools |
| Email marketing automation | Handled by external email services |
| Wingle Pass booking flow | Lives at `winglepass.com` |
| Wingle Atlas application | Lives at its own domain |

## Non-Goals

- **This is not a design system project.** Components are built for this site's needs. If reusable patterns emerge, they can be extracted later.
- **This is not an SEO experiment.** Standard best practices apply; no need for aggressive SEO techniques.
- **This is not a performance benchmark.** Good performance is expected (Vercel + static pages make this easy), but there is no specific performance target beyond "fast."
- **This is not a monorepo.** This project stands alone. It does not share code with `wingle-web` or `wingle-atlas-web` at the package level, even though conventions are aligned.

## Security Boundaries

### Contact Forms

- Forms must validate input client-side and server-side (in the API route).
- Email fields must be validated for format.
- Rate limiting should be applied to form submission endpoints to prevent abuse.
- No sensitive data is collected (no passwords, no payment info, no personal documents).
- CAPTCHA or honeypot fields should be considered for spam prevention.

### Content

- All Markdown content is developer-authored and trusted. No user-supplied Markdown is rendered.
- External links should use `rel="noopener noreferrer"` where appropriate.
- Images from external domains must be explicitly whitelisted in `next.config.ts`.

## Performance Boundaries

- **Static pages should load in under 2 seconds** on a 4G connection.
- **Blog pages with images should load in under 3 seconds.**
- **Contact form submissions should respond in under 1 second** (network permitting).
- **No client-side JavaScript bundle should exceed 200KB gzipped** for any single page.

These are guidelines, not hard SLAs. Vercel's infrastructure and Next.js static generation make them achievable with standard practices.

## Legal Boundaries

- The site must include Terms of Service, Privacy Policy, and Cookie Policy, available in both EN and ES.
- Cookie consent must comply with EU regulations (GDPR). A cookie banner is required if analytics cookies are used.
- The Privacy Policy must reflect the actual data collection: analytics data and contact form submissions only.
- The legal entity **LETS WINGLE S.L.** must be referenced in legal documents.
