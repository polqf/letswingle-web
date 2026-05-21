# Graph Report - letswingle-web  (2026-05-21)

## Corpus Check
- 98 files · ~59,299 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 551 nodes · 818 edges · 56 communities (51 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `475768ee`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]

## God Nodes (most connected - your core abstractions)
1. `getTranslations()` - 44 edges
2. `Container()` - 27 edges
3. `Decisions — letswingle.com` - 20 edges
4. `Writing reference (old examples — keep for tone)` - 19 edges
5. `Pol's Linkedin Post Examples` - 19 edges
6. `Tag()` - 18 edges
7. `SectionHeader()` - 18 edges
8. `t` - 13 edges
9. `New drafts — longer posts (ready to publish)` - 13 edges
10. `Button()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `t`  [INFERRED]
  app/layout.tsx → app/components/forms/ContactForm.tsx
- `RootLayout()` --calls--> `getLocale()`  [EXTRACTED]
  app/layout.tsx → app/lib/i18n/getTranslations.ts
- `RootLayout()` --calls--> `t`  [INFERRED]
  app/layout.tsx → app/components/forms/ContactForm.tsx
- `generateMetadata()` --calls--> `t`  [INFERRED]
  app/contact/page.tsx → app/components/forms/ContactForm.tsx
- `generateMetadata()` --calls--> `t`  [INFERRED]
  app/products/pro/page.tsx → app/components/forms/ContactForm.tsx

## Communities (56 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (38): atlasHighlights, proHighlights, features, outcomes, faqs, points, details, howItWorks (+30 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (45): 1. Brand Essence, 2. Brand Personality, 3. Voice & Tone, 4. Messaging Principles, 5. Visual Direction (Conceptual), 6. UX & Product Feel, 7. Brand Boundaries (Very Important), 8. AI Usage Guidance (+37 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (42): Broad plan — repositioning on LinkedIn (personal), Cadence (suggested), code:block19 (We're "on air" again), code:block20 (🇵🇹), code:block21 (When we initially launched Wingle, we were focusing on impro), code:block22 (Thank you to everyone that has been part of these first mont), code:block23 (Aside from the usual destinations, seems like people is now ), code:block24 (Be mindful of your time, use it wisely. Foster real connecti) (+34 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (23): generateMetadata(), generateMetadata(), bricolage, generateMetadata(), RootLayout(), generateMetadata(), generateMetadata(), generateMetadata() (+15 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (22): sitemap(), featuredNews, featuredPosts, latest, BlogListItem(), BlogListItemProps, BlogPost, getAllNews() (+14 more)

### Community 5 - "Community 5"
Cohesion: 0.1
Nodes (15): ContactFormProps, FormStatus, [status, setStatus], Locale, translations, TranslationSchema, useTranslations(), items (+7 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (24): Analytics, Authentication and Authorization, Blog, code:block1 (letswingle-web/), code:json ({), Content System, Deployment, Environment Variables (+16 more)

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (21): Blog Content Is Version-Controlled, Constraints — letswingle.com, Contact Forms, Contact Forms Are the Primary Dynamic Feature, Content, Each Product Page Is Self-Contained, Legal Boundaries, No Authentication (+13 more)

### Community 8 - "Community 8"
Cohesion: 0.1
Nodes (20): D001: Same Stack as Sibling Projects, D002: No Shared Code Package with Sibling Projects, D003: Markdown Blog, No CMS, D004: No Authentication, D005: Contact Forms as the Conversion Mechanism, D006: EN/ES Only at Launch, D007: `letswingle.com` Replaces the Current Landing, D008: Blog Migration from winglepass.com (+12 more)

### Community 9 - "Community 9"
Cohesion: 0.11
Nodes (19): code:block1 (We're "on air" again), code:block10 (You can now start meeting people a bit earlier 😉), code:block11 (We want you to feel the vibes even before you reach your des), code:block12 (tl;dr we are beyond happy, never underestimate british (and ), code:block13 (Today (and, being honest, the whole journey until here) has ), code:block14 (In exactly one week, we'll be live (flying 😉)!), code:block15 (More about our 💥🎢✈️😄😡😭😍 journey👇), code:block16 (Are you at  #SouthSummit24 in Madrid? Say hi 👋) (+11 more)

### Community 10 - "Community 10"
Cohesion: 0.11
Nodes (17): Can Be Solved Later, Current State, High Priority, Open Questions, Phase 1: Foundation and Core Pages — COMPLETE, Phase 2: Full Product Portfolio — COMPLETE, Phase 3: Blog Migration — COMPLETE, Phase 4: SEO, Analytics, and Hardening — IN PROGRESS (+9 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (17): Brand colors, Canonical logo, Color, Core palette, Explicit do / don’t rules (system-level), Iconography, Logo colorways, Logo rules (no measurements defined) (+9 more)

### Community 12 - "Community 12"
Cohesion: 0.12
Nodes (16): 1. Consumers (B2C — Marketing/Press Priority), 2. Travel Professionals (B2B), 3. Press and Investors, code:block1 (letswingle.com (THIS PROJECT)), Core Vocabulary, Internal vs. External Naming, Product Portfolio, Project Definition — letswingle.com (+8 more)

### Community 13 - "Community 13"
Cohesion: 0.12
Nodes (15): Capabilities at North Star, Content, Conversion, Design, For Consumers, For Enterprise Partners, For Press and Investors, For Travel Agencies (+7 more)

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (14): 2023 — The Mission Takes Shape, Autumn 2024 — Expanding Beyond the Chat, December 2024 — A Year in Review, Early 2024 — Preparing for Takeoff, Early 2025 — The B2B Opportunity Emerges, Early 2025 — Wingle Pass and the Full Travel Companion, July 2024 — Launch, Late 2025 – Early 2026 — Wingle Atlas (+6 more)

### Community 15 - "Community 15"
Cohesion: 0.17
Nodes (11): The End Goal, The Mission, The Short Answer, Travel Professionals, Travelers, What Has Never Changed, What Is Wingle, What Makes Wingle Different (+3 more)

### Community 16 - "Community 16"
Cohesion: 0.31
Nodes (9): buildEmailHtml(), ContactPayload, escapeHtml(), isRateLimited(), isValidEmail(), parsePayload(), POST(), rateLimit (+1 more)

### Community 17 - "Community 17"
Cohesion: 0.22
Nodes (9): All Components Use Named Exports, code:typescript (// Good), code:typescript (interface FeatureCardProps {), code:typescript (// Server component (default — no directive needed)), code:typescript (// Good — page orchestrates components), Component-First Architecture, Component Patterns, Prefer Server Components (+1 more)

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (7): code:block1 (app/), Coding Guidelines — letswingle.com, Directory Structure, File Organization, Naming Conventions, What to Avoid, Where Logic Should Live

### Community 19 - "Community 19"
Cohesion: 0.25
Nodes (8): code:css (/* In global CSS */), code:typescript (// Good — semantic token), code:typescript (import { cn } from '@/app/lib/utils';), code:typescript (// Good — mobile-first breakpoints), Conditional Classes with `cn()`, Responsive Design, Styling, Tailwind CSS with Semantic Design Tokens

### Community 20 - "Community 20"
Cohesion: 0.33
Nodes (4): InstagramEmbedProps, script, scriptLoaded, Window

### Community 21 - "Community 21"
Cohesion: 0.4
Nodes (4): buildRedirect(), LanguageSwitcher(), LanguageSwitcherProps, Locale

### Community 22 - "Community 22"
Cohesion: 0.33
Nodes (6): Blog Content, Blog Utilities, code:markdown (---), code:typescript (// app/blog/lib/content.ts), code:typescript (// app/blog/lib/utils.ts), Markdown Frontmatter Structure

### Community 23 - "Community 23"
Cohesion: 0.33
Nodes (5): Completed, High Priority, Pending, Quality & Compliance, TO DOs

### Community 24 - "Community 24"
Cohesion: 0.6
Nodes (4): GET(), isLocale(), Locale, safeRedirect()

### Community 25 - "Community 25"
Cohesion: 0.4
Nodes (5): code:typescript (import Link from 'next/link';), code:typescript (// Good), Import Order, Imports, Path Aliases

### Community 26 - "Community 26"
Cohesion: 0.4
Nodes (5): code:typescript ('use client';), code:typescript (// app/api/contact/route.ts), Form Components Are Client Components, Form Submission API Routes, Forms

### Community 27 - "Community 27"
Cohesion: 0.4
Nodes (5): code:typescript (// app/lib/i18n/translations/en.ts), code:typescript (// In a component), Internationalization, Translation Rules, Type-Safe Translations

### Community 28 - "Community 28"
Cohesion: 0.4
Nodes (5): Accessibility, Code Quality, Linting, Performance, TypeScript Strictness

## Knowledge Gaps
- **307 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `bricolage`, `tiers` (+302 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getTranslations()` connect `Community 3` to `Community 0`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `Pol’s LinkedIn posts — working doc` connect `Community 2` to `Community 9`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Why does `Container()` connect `Community 0` to `Community 3`, `Community 4`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _307 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._