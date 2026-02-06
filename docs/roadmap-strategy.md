# Roadmap and Strategy — letswingle.com

## Current State

The project does not exist yet. The `letswingle-web` repository is empty.

The current `letswingle.com` is a legacy single-page landing focused on the in-flight chat feature. It is outdated: it does not reflect the company's current product portfolio, B2B focus, or market positioning. It will be fully replaced by this project.

### What Exists Elsewhere (to Migrate or Reference)

| Asset | Current Location | Action |
|---|---|---|
| Blog (Cockpit Diaries + News) | `winglepass.com/blog` (Next.js, Markdown) | Migrate content and rendering logic here |
| Legacy blog | `cockpit.letswingle.com` (Jekyll) | Already consolidated into winglepass.com; decommission |
| Old landing HTML | `OLD/wingle-landing/` in monorepo | Reference for branding inspiration only; do not reuse code |
| Legal pages | `winglepass.com` (Markdown, EN/ES) | Reference structure; create fresh copies for company-level terms |
| Product descriptions | App Store listings, press articles | Extract and refine for product pages |

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

### Phase 1: Foundation and Core Pages

**Goal:** A deployable site with the essential structure.

- Project scaffolding (Next.js 15, TypeScript, Tailwind CSS 4)
- Root layout with navigation and footer
- Internationalization setup (EN/ES)
- **Home page** — Hero, product overview cards, social proof, CTAs
- **Wingle Pass for Agencies** — Full product page with value proposition and contact form
- **Contact page** — General contact form
- **Legal pages** — Terms, Privacy, Cookies (EN/ES)

**Why first:** This gives the site a deployable presence and the most critical B2B conversion page. The contact form for agencies is the single most important conversion surface.

### Phase 2: Full Product Portfolio

**Goal:** Every product has a dedicated page.

- **Wingle Atlas** — Product page with showcase and contact/demo form
- **Wingle (B2C app)** — App showcase page with App Store/Google Play links and winglepass.com CTA
- **White Label** — Product overview with contact form
- **About / Company** — Story, mission, team

**Why second:** Completes the product portfolio. Atlas is in active development and needs a public presence to generate early agency interest. The B2C page is critical for brand visibility even though the product is in maintenance mode.

### Phase 3: Blog Migration

**Goal:** `letswingle.com/blog` replaces `winglepass.com/blog` as the primary blog.

- Migrate Markdown content from `wingle-web/content/blog/`
- Implement blog index and post rendering
- Set up categories (Cockpit Diaries, News)
- Redirect `winglepass.com/blog` → `letswingle.com/blog` (coordinate with wingle-web)
- Decommission `cockpit.letswingle.com`

**Why third:** Blog is important for SEO and thought leadership, but it already exists elsewhere. Migration is not blocking for initial launch.

### Phase 4: SEO, Analytics, and Hardening

**Goal:** The site is optimized for discoverability and measurability.

- Dynamic sitemap generation
- Structured data (JSON-LD: Organization, Product, BlogPosting)
- Open Graph and social media meta tags per page
- Google Analytics 4 integration
- Vercel Analytics and Speed Insights
- Performance audit and optimization (Core Web Vitals)
- Accessibility audit (WCAG 2.1 AA)

**Why last:** Optimization is iterative and benefits from having all content in place first.

## Open Questions (to Resolve During Build)

| Question | Impact | When to Decide |
|---|---|---|
| Contact form backend — own API route, Wingle backend endpoint, or third-party (e.g., Formspree, HubSpot)? | Phase 1 | Before building contact forms |
| Should the blog support additional categories beyond Cockpit Diaries and News? | Phase 3 | During blog migration |
| Will `winglepass.com` blog content be moved or duplicated? (Move = redirects needed) | Phase 3 | Before blog migration |
| Should there be a press kit / media page? | Phase 2 or later | Based on PR needs |
| CRM integration for lead tracking? | Phase 1-2 | Based on sales team needs |

## What Must Be Solved First vs. Later

### Must Be Solved First

- Navigation and information architecture — gets harder to change as content grows.
- Internationalization approach — retrofitting i18n is costly.
- Contact form infrastructure — the primary conversion mechanism.
- Visual design system / brand guidelines for the site — consistency across pages.

### Can Be Solved Later

- Blog migration — existing blog is functional at `winglepass.com/blog`.
- Advanced SEO — diminishing returns until content is complete.
- Animation and micro-interactions — polish, not structure.
- Additional languages beyond EN/ES.

## Trade-offs

| Decision | Upside | Downside |
|---|---|---|
| Same stack as sibling projects | Consistency, shared knowledge | Heavier than needed for a marketing site |
| Markdown blog (no CMS) | Simple, version-controlled, fast | Non-technical team cannot edit without code access |
| No authentication | Simpler, faster, more secure | Cannot personalize content per visitor |
| B2B pages before B2C | Aligns with revenue priority | May delay brand refresh for consumer audience |
| EN/ES only at launch | Faster to ship | Excludes Italian market (app supports IT) |
