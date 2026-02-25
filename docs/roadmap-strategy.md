# Roadmap and Strategy — letswingle.com

## Current State

The site is **live and largely complete**. Phases 1 through 3 (Foundation, Full Product Portfolio, Blog Migration) have been implemented. The site covers all products, all audiences, and hosts the company blog.

### What Has Been Built

| Asset | Status | Notes |
|---|---|---|
| Home page with app + agency previews | Complete | Gateway to product pages, not a single-scroll summary |
| All product pages (App, Pro, Atlas, Agencies hub) | Complete | Each self-contained with hero, value prop, and ContactBand. |
| Blog (Cockpit Diaries + News) | Complete | Migrated from `winglepass.com/blog`, Markdown-based |
| Press page with logo grid | Complete | 9 media outlets with external article links |
| About page | Complete | Company story and values |
| Contact page | Complete | Standalone page with embedded ContactForm |
| Legal pages (Terms, Privacy, Cookies) | Complete | Internationalized via translations |
| EN/ES internationalization | Complete | ~760 translation keys per language, language switcher in header |
| Contact form infrastructure | Complete | Resend for email delivery, rate limiting, honeypot spam detection |
| Brand visual identity | Applied | Bricolage Grotesque, Wingle Blue/Yellow/Off-White, logo assets |

## Target End State

`letswingle.com` is the authoritative company website for Wingle. It:

- Clearly communicates what Wingle is and what it offers across B2C and B2B.
- Gives every audience segment (agencies, partners, consumers, press) a clear path to what they need.
- Captures B2B leads effectively through well-designed contact/demo request forms.
- Hosts the consolidated company blog (Cockpit Diaries + News).
- Is fully localized in English and Spanish.
- Ranks well for relevant search terms (travel services, airport lounges, travel agency tools).
- Is fast, accessible, and visually aligned with the Wingle brand.

## Strategy

The site should be built incrementally, prioritizing the pages that drive the most business impact first. B2B lead capture is the highest priority because agencies are the primary revenue driver.

### Sequencing Logic

1. **B2B pages first** — They generate revenue. Agencies searching for Wingle or arriving via outreach need a destination that converts.
2. **B2C pages second** — They generate visibility. Consumers, press, and social followers need to see the app prominently.
3. **Blog migration third** — Important for SEO and content marketing, but not blocking for launch.
4. **SEO and polish last** — Structured data, performance tuning, and analytics refinement.

## Phases

### Phase 1: Foundation and Core Pages — COMPLETE

- Project scaffolding (Next.js 15, TypeScript, Tailwind CSS 4)
- Root layout with header (brand logo, nav, language switcher) and footer (4-column grid)
- Internationalization setup (EN/ES) with ~760 keys per language
- **Home page** — Hero + App preview + Agencies/Atlas preview
- **Wingle for Travel Professionals hub** (`/products/agencies`) — Links to Pro and Atlas
- **Wingle Pro** (`/products/pro`) — Service tiers, reasons, process, ContactBand
- **Contact page** — Standalone ContactForm
- **Legal pages** — Terms, Privacy, Cookies (all internationalized)
- **Contact form backend** — Resend email delivery, rate limiting, honeypot spam detection

### Phase 2: Full Product Portfolio — COMPLETE

- **Wingle Atlas** (`/products/atlas`) — Features, knowledge system, ContactBand
- **Wingle App** (`/products/wingle-app`) — Services showcase, App Store/Play links, FAQs subpage
- **About** (`/about`) — Company story and values
- **Press** (`/press`) — 9 media outlets with logo grid and external links

### Phase 3: Blog Migration — COMPLETE

- Markdown content migrated: 11 Cockpit Diaries episodes, 9 News articles
- Blog hub at `/blog` with featured sections and latest feed
- Category pages at `/blog/entry` and `/blog/news`
- Individual posts at `/blog/entry/[slug]` and `/blog/news/[slug]`
- Built with `gray-matter` + `remark` + `remark-html` + `remark-gfm`
- Static generation via `generateStaticParams()`

### Phase 4: SEO, Analytics, and Hardening — IN PROGRESS

**Goal:** The site is optimized for discoverability and measurability.

- [ ] Dynamic sitemap generation
- [ ] Structured data (JSON-LD: Organization, Product, BlogPosting)
- [x] Open Graph metadata (base-level in root layout)
- [ ] Per-page OG tags and meta descriptions
- [ ] Google Analytics 4 integration
- [ ] Vercel Analytics and Speed Insights
- [ ] Performance audit and optimization (Core Web Vitals)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cookie consent banner (GDPR compliance)
- [ ] `winglepass.com/blog` → `letswingle.com/blog` 301 redirects

**Why last:** Optimization is iterative and benefits from having all content in place first.

## Resolved Questions

| Question | Resolution |
|---|---|
| Contact form backend | **Resend** for email delivery via `/api/contact`. Sends styled HTML to `CONTACT_NOTIFY_EMAIL` (defaults to `hi@letswingle.com`). Includes rate limiting and honeypot spam detection. |
| Blog categories | **Two categories**: Cockpit Diaries (episodes) and News. Separate listing pages and URL structures. |
| Blog content moved or duplicated? | **Moved.** Content lives in `content/blog/` as Markdown. `winglepass.com/blog` redirects still pending. |
| Press kit / media page | **Yes.** Press page at `/press` with 9 media outlet logos and article links. |
| CRM integration for lead tracking? | **Not yet.** Contact form sends email; CRM integration is a future enhancement. |

## Open Questions

| Question | Impact | When to Decide |
|---|---|---|
| `winglepass.com/blog` → `letswingle.com/blog` 301 redirects | SEO value preservation | Before decommissioning `winglepass.com` blog |
| Cookie consent banner implementation | GDPR compliance | Before GA4 or any analytics cookies |
| Per-page SEO metadata and structured data | Discoverability | Phase 4 |
| Social media links in footer (IG, TikTok) | Brand presence | Soon |
| App preview images — replace temporary Apple CDN screenshots | Brand consistency | Soon |
## What Must Be Solved Next

### High Priority

- Cookie consent / GDPR compliance — required before deploying analytics.
- Per-page SEO metadata — structured data, OG tags, descriptions for each route.
- `winglepass.com/blog` redirects — coordinate with `wingle-web` to avoid broken links.
- Social media links in footer — IG and TikTok are active channels.
- Replace temporary app preview images with owned assets.

### Can Be Solved Later

- Advanced SEO and sitemap generation — diminishing returns without analytics data.
- Animation and micro-interactions — polish, not structure.
- Additional languages beyond EN/ES.
- CRM integration for lead management.
- A/B testing infrastructure.

## Trade-offs

| Decision | Upside | Downside |
|---|---|---|
| Same stack as sibling projects | Consistency, shared knowledge | Heavier than needed for a marketing site |
| Markdown blog (no CMS) | Simple, version-controlled, fast | Non-technical team cannot edit without code access |
| No authentication | Simpler, faster, more secure | Cannot personalize content per visitor |
| B2B pages before B2C | Aligned with revenue priority | Delayed brand refresh for consumer audience initially |
| EN/ES only at launch | Faster to ship | Excludes Italian market (app supports IT) |
