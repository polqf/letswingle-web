# Graph Report - /Users/polquintana/Developer/lets-wingle/letswingle-web  (2026-05-07)

## Corpus Check
- 117 files · ~59,299 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 199 nodes · 500 edges · 21 communities (17 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

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
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `getTranslations()` - 44 edges
2. `Container()` - 27 edges
3. `Tag()` - 18 edges
4. `SectionHeader()` - 18 edges
5. `t` - 13 edges
6. `Button()` - 12 edges
7. `getLocale()` - 12 edges
8. `cn()` - 10 edges
9. `ContactBand()` - 9 edges
10. `getAllPosts()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `HomeCTA()` --calls--> `getTranslations()`  [EXTRACTED]
  app/components/sections/home/HomeCTA.tsx → app/lib/i18n/getTranslations.ts
- `generateMetadata()` --calls--> `t`  [INFERRED]
  app/layout.tsx → app/components/forms/ContactForm.tsx
- `RootLayout()` --calls--> `t`  [INFERRED]
  app/layout.tsx → app/components/forms/ContactForm.tsx
- `generateMetadata()` --calls--> `t`  [INFERRED]
  app/contact/page.tsx → app/components/forms/ContactForm.tsx
- `generateMetadata()` --calls--> `t`  [INFERRED]
  app/products/pro/page.tsx → app/components/forms/ContactForm.tsx

## Communities (21 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (22): sitemap(), featuredNews, featuredPosts, latest, BlogListItem(), BlogListItemProps, BlogPost, getAllNews() (+14 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (22): generateMetadata(), generateMetadata(), bricolage, generateMetadata(), RootLayout(), generateMetadata(), generateMetadata(), generateMetadata() (+14 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (15): ContactFormProps, FormStatus, [status, setStatus], getValue(), Locale, translations, TranslationSchema, Locale (+7 more)

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (10): items, PRESS_LOGOS, PressLogoGridProps, ButtonProps, ButtonVariant, sizeClasses, variantClasses, CardProps (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.24
Nodes (6): faqs, items, metadata, ContainerProps, Tag(), TagProps

### Community 5 - "Community 5"
Cohesion: 0.31
Nodes (6): features, outcomes, HomeCTA(), ContactBand(), ContactBandProps, Container()

### Community 6 - "Community 6"
Cohesion: 0.31
Nodes (9): buildEmailHtml(), ContactPayload, escapeHtml(), isRateLimited(), isValidEmail(), parsePayload(), POST(), rateLimit (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.28
Nodes (6): FEATURED_POSTS, InstagramPreview(), InstagramPreviewProps, Button(), highlights, services

### Community 8 - "Community 8"
Cohesion: 0.29
Nodes (3): points, details, howItWorks

### Community 9 - "Community 9"
Cohesion: 0.43
Nodes (3): signals, SectionHeader(), SectionHeaderProps

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (4): InstagramEmbedProps, script, scriptLoaded, Window

### Community 11 - "Community 11"
Cohesion: 0.4
Nodes (4): buildRedirect(), LanguageSwitcher(), LanguageSwitcherProps, Locale

### Community 12 - "Community 12"
Cohesion: 0.6
Nodes (4): GET(), isLocale(), Locale, safeRedirect()

### Community 14 - "Community 14"
Cohesion: 0.5
Nodes (3): reasons, steps, tiers

## Knowledge Gaps
- **63 isolated node(s):** `config`, `eslintConfig`, `nextConfig`, `bricolage`, `tiers` (+58 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getTranslations()` connect `Community 1` to `Community 0`, `Community 2`, `Community 3`, `Community 4`, `Community 5`, `Community 7`, `Community 8`, `Community 9`, `Community 14`, `Community 15`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **Why does `Container()` connect `Community 5` to `Community 0`, `Community 1`, `Community 2`, `Community 4`, `Community 7`, `Community 8`, `Community 9`, `Community 14`, `Community 15`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Why does `cn()` connect `Community 3` to `Community 9`, `Community 2`, `Community 4`, `Community 7`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Are the 12 inferred relationships involving `t` (e.g. with `generateMetadata()` and `RootLayout()`) actually correct?**
  _`t` has 12 INFERRED edges - model-reasoned connections that need verification._
- **What connects `config`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _63 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._