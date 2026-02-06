# Decisions — letswingle.com

This document records architectural and design decisions for the project, starting from inception. Each decision includes rationale and, where relevant, alternatives that were considered.

---

## D001: Same Stack as Sibling Projects

**Decision:** Use Next.js 15, React 19, TypeScript 5, and Tailwind CSS 4 — identical to `wingle-web` and `wingle-atlas-web`.

**Rationale:**
- The team already knows this stack. No onboarding cost.
- Patterns, conventions, and coding guidelines transfer directly.
- All three web projects deploy to Vercel with the same pipeline.
- If components or utilities need to be shared in the future, the barrier is minimal.

**Alternative considered:** A lighter static site generator like Astro or even plain HTML + Tailwind. These would produce smaller bundles and be simpler for a marketing site, but the consistency benefit across Wingle web projects outweighs the marginal performance gain.

**Trade-off accepted:** Next.js is heavier than necessary for a marketing site. The React runtime, App Router overhead, and build complexity are non-trivial for what is mostly static content. We accept this in exchange for developer familiarity and ecosystem alignment.

---

## D002: No Shared Code Package with Sibling Projects

**Decision:** This project does not import from or share a `core/` package with `wingle-web` or `wingle-atlas-web`.

**Rationale:**
- This site does not call the Wingle API. It does not deserialize API responses. The shared `core/` in sibling projects exists primarily for the base API client and `class-transformer` integration — neither of which applies here.
- Introducing a shared package dependency creates coupling and deployment coordination overhead for no practical benefit.
- Conventions and patterns are shared by documentation and convention, not by code dependency.

**Alternative considered:** Extracting a shared UI component library. Premature — the three projects have different design needs (product app vs. marketing site). If common components emerge organically, extraction can happen later.

---

## D003: Markdown Blog, No CMS

**Decision:** Blog content is stored as Markdown files in the repository. There is no headless CMS.

**Rationale:**
- The existing blog at `winglepass.com` already uses this approach successfully.
- Content is version-controlled, reviewable in PRs, and deployable with the same pipeline.
- The blog is updated infrequently (a few posts per month at most). The friction of committing Markdown is acceptable.
- No CMS means no external dependency, no API latency, no additional cost, and no security surface.

**Alternative considered:** A headless CMS (Contentful, Sanity, Notion-as-CMS). These would lower the barrier for non-technical contributors but add complexity, cost, and a dependency. Given the current team structure and content velocity, Markdown is sufficient.

**When to revisit:** If a non-technical marketing team needs to publish content independently and frequently.

---

## D004: No Authentication

**Decision:** The site has no authentication layer whatsoever.

**Rationale:**
- Every page is public. There is no user-specific content, no dashboards, no personalization.
- Authentication adds complexity (token management, session handling, middleware) with zero value for a marketing site.
- Contact forms are anonymous by design.

**Alternative considered:** None seriously. Authentication on a marketing site would be architecturally wrong.

---

## D005: Contact Forms as the Conversion Mechanism

**Decision:** Product pages for B2B offerings (Agencies, Atlas, White Label) use embedded contact forms as the primary conversion mechanism, rather than linking to external tools.

**Rationale:**
- Agencies should not be redirected away from the site to express interest. Every redirect is a drop-off risk.
- Embedded forms allow capturing product context (which product, which page) automatically.
- Form submissions can be routed to any backend — flexibility to change without modifying the form UX.

**Alternative considered:**
- Calendly-style scheduling widgets. Good for later stages of the funnel, but premature for initial interest capture.
- External form tools (Google Forms, Typeform). These break the visual experience and lose product context.

**Open decision:** The backend for form submissions (own API route, Wingle backend endpoint, or third-party service like Formspree/HubSpot) is not yet decided. This should be resolved before building the first form.

---

## D006: EN/ES Only at Launch

**Decision:** Support English and Spanish. No other languages at launch.

**Rationale:**
- These are the two primary languages of Wingle's current market (Spain + international English).
- The app supports Italian, but the B2B agency market being targeted is primarily Spanish-speaking and English-speaking.
- Adding a language is additive work (translation files, content duplication). Starting lean and adding later is lower risk than launching with incomplete translations in three languages.

**Trade-off accepted:** Italian-speaking agencies and press are not served in their language initially.

---

## D007: `letswingle.com` Replaces the Current Landing

**Decision:** This project will be deployed to `letswingle.com`, fully replacing the existing single-page Chat-focused landing.

**Rationale:**
- The current landing is outdated and misrepresents the company's product breadth.
- `letswingle.com` is the natural home for the company website (matches the legal entity domain).
- There is no value in maintaining the old landing alongside this project.

**Implication:** DNS and hosting configuration for `letswingle.com` must be updated to point to Vercel when this project is ready to launch. The old site does not need to be preserved.

---

## D008: Blog Migration from winglepass.com

**Decision:** The blog currently at `winglepass.com/blog` will be migrated to `letswingle.com/blog`. The `winglepass.com` blog will then redirect to the new location.

**Rationale:**
- The blog is company-level content (Cockpit Diaries, company news), not product-specific to Wingle Pass.
- Having the blog on the company domain improves SEO for the company site and avoids content-identity confusion.
- The migration is straightforward since both sites use the same tech stack and Markdown-based content.

**Implication:** After migration, `winglepass.com/blog/*` URLs must 301-redirect to `letswingle.com/blog/*` to preserve SEO value. This requires a coordinated update to `wingle-web`.

---

## D009: Product Pages Are Self-Contained

**Decision:** Each product page must be independently comprehensible without requiring the visitor to have seen the home page.

**Rationale:**
- Visitors arrive from diverse entry points: Google search, LinkedIn posts, email links, direct shares.
- A product page that assumes home-page context will confuse direct visitors.
- Self-contained pages have better SEO characteristics (each page targets its own keywords).

**Implication:** Every product page includes its own hero section, value proposition, and CTA. The navigation and footer provide broader site context, but the page content stands alone.

---

## D010: B2B Pages Prioritized Over B2C in Build Order

**Decision:** Wingle Pass for Agencies and Atlas pages are built before the B2C app showcase page.

**Rationale:**
- Agencies are the primary revenue driver. Every day without a proper B2B landing page is a potential missed conversion.
- The B2C app already has visibility through the App Store, `winglepass.com`, and social media.
- B2B pages require contact forms — the most technically involved feature — so building them first surfaces integration questions early.

**Trade-off accepted:** The B2C audience (consumers, press) may see an incomplete site during early phases. This is mitigated by the home page providing a product overview from Phase 1.

---

## D011: No Shared Design System

**Decision:** Components are built for this site's specific needs. There is no attempt to create a shared design system across Wingle web projects.

**Rationale:**
- `wingle-web` is a product application. `wingle-atlas-web` is a B2B tool. This is a marketing site. The design needs are fundamentally different.
- Premature abstraction of a shared component library would constrain each project's ability to evolve independently.
- Conventions are aligned by documentation, not by code sharing.

**When to revisit:** If a clear set of common components (buttons, cards, typography) stabilizes across all three projects.

---

## D012: Static Content Over CMS for Product Pages

**Decision:** Product descriptions, feature lists, and other non-blog content are stored as TypeScript constants or JSON within the codebase, not in a CMS.

**Rationale:**
- Product content changes infrequently and only when the product itself changes.
- Type-safe content objects catch errors at compile time.
- No external dependency for core site content.
- Content changes go through the same PR review process as code changes.

**Alternative considered:** Storing all content in Markdown. This works well for the blog but is awkward for structured content (feature lists, comparison tables, CTAs) that benefits from type safety.
