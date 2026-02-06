# Project Definition — letswingle.com

## What This Project Is

This is the **company website for LETS WINGLE S.L.**, hosted at `letswingle.com`. It is a public-facing marketing and information site that presents the full product portfolio under the Wingle brand to multiple distinct audiences.

This is **not** a product application. It does not provide authentication, user accounts, dashboards, or transactional functionality. It is a landing-first site designed to inform, position, and convert.

## The Problem It Solves

Wingle operates multiple products across B2C and B2B segments, each with its own client surface (iOS, Android, web). There is currently no single place that:

- Explains what Wingle is as a company
- Showcases all products in context
- Gives potential B2B clients (travel agencies, enterprise partners) a clear entry point
- Provides press and investors with a professional, consolidated presence
- Hosts the company blog and thought leadership content

The current `letswingle.com` is a legacy landing page focused exclusively on the in-flight chat feature. It does not reflect the company's current product breadth, B2B focus, or market positioning. This project replaces it entirely.

## Who It Serves

This site has four primary audiences, each with different needs:

### 1. Travel Agencies (B2B — Highest Priority)

Agencies are the primary revenue driver. They need to understand:

- **Wingle Pass for Agencies**: Automated service fulfillment — lounges, fast track, eSIM, insurance, baggage storage — ingested from booking emails and PDFs with near-zero friction.
- **Wingle Atlas**: A digital itinerary builder that replaces static PDF trip documents with rich, interactive, context-aware travel experiences delivered to travelers.
- That these are two separate products that can work independently or together.
- How to get started (contact form / demo request).

### 2. Enterprise Partners (B2B)

Potential white-label integrators need to understand:

- **Wingle Pass White Label**: A brandable travel services layer that partners can embed under their own identity.
- Volume capabilities and integration model.
- How to express interest (contact form).

### 3. Consumers (B2C)

Existing and potential app users need to understand:

- **Wingle** (the app): Combines in-flight social connection (Chat) and premium travel services (Pass) in a single iOS/Android app.
- Where to download the app.
- What services are available via `winglepass.com`.

B2C is in maintenance mode commercially, but it remains the public face of the brand — generating press, social proof, and organic visibility. It must remain prominently visible.

### 4. Press and Investors

Journalists and potential investors need:

- A clear, professional narrative about the company.
- Access to the blog (Cockpit Diaries + News).
- Social proof (App Store ratings, press mentions).
- Contact information.

## Product Portfolio

The site showcases the following products. These are the canonical names and descriptions.

| Product | Segment | Clients | Status | Revenue |
|---|---|---|---|---|
| **Wingle** (app) | B2C | iOS, Android | Maintenance mode | Low |
| **Wingle Pass** (web) | B2C | Web (`winglepass.com`) | Maintenance mode | Low |
| **Wingle Pass for Agencies** | B2B | Web (no public app — contact-driven) | Active, primary focus | **Highest** |
| **Wingle Atlas** | B2B | Web (`wingle-atlas-web`) | In development | High potential |
| **Wingle Pass White Label** | B2B | Partner-embedded | Available, seeking first client | Volume potential |

### Internal vs. External Naming

- **"Wingle Pass"** and **"Wingle Chat"** are internal product names. Externally, the B2C app is simply called **"Wingle"** — it combines both.
- **"Wingle Pass for Agencies"** is the B2B service fulfillment product. It is distinct from the B2C Wingle Pass, though they share the same backend infrastructure.
- **"Wingle Atlas"** is always referred to by its full name.
- The company name **LETS WINGLE S.L.** is rarely used publicly. The brand is simply **"Wingle"**.

## What This Project Is NOT

- **Not a product application.** No login, no user data, no transactions.
- **Not `winglepass.com`.** That remains the B2C web product for Wingle Pass.
- **Not `cockpit.letswingle.com`.** The blog will migrate here; the Jekyll site will be decommissioned.
- **Not an API consumer in any meaningful sense.** Contact forms may hit a backend or third-party service, but this site does not integrate with the Wingle backend (`prod.letswingle.com`).
- **Not a single-product site.** Every product under the Wingle umbrella must be represented.

## Site Structure (High-Level)

The site should follow this information architecture:

- **Home** — Hero + product overview cards + social proof + CTAs
- **Wingle (B2C app)** — Showcases Chat + Pass features → CTAs to App Store, Google Play, `winglepass.com`
- **Wingle Pass for Agencies** — Detailed value proposition → CTA to contact form / demo request
- **Wingle Atlas** — Product showcase → CTA to contact form / demo request
- **White Label** — Overview of white-label capabilities → CTA to contact form
- **Blog** — Cockpit Diaries + News (migrated from `winglepass.com/blog`)
- **About** — Company story, team, mission
- **Contact** — General contact form
- **Legal** — Terms, Privacy Policy, Cookie Policy (EN/ES)

Products with a user-facing platform (B2C app, `winglepass.com`) get CTAs that link out. Products without a user-facing platform (Pass for Agencies, White Label) collect interest via embedded contact forms.

## Role Within the Ecosystem

```
letswingle.com (THIS PROJECT)
├── Showcases ──→ Wingle iOS/Android app (App Store / Google Play)
├── Links to ───→ winglepass.com (B2C web product)
├── Showcases ──→ Wingle Atlas (B2B, in development)
├── Collects ───→ Agency interest (Wingle Pass for Agencies)
├── Collects ───→ Partner interest (White Label)
└── Hosts ──────→ Blog (migrated from winglepass.com/blog)
```

This site is the **top of the funnel**. It does not execute — it directs.

## Core Vocabulary

| Term | Meaning |
|---|---|
| **Wingle** | The brand name. Also the B2C app name (externally). Also sometimes used for the company. |
| **Wingle Pass** | Internal name for the travel services product (lounges, fast track, eSIM, etc.). Used in both B2C and B2B contexts. |
| **Wingle Chat** | Internal name for the in-flight offline social product. Part of the B2C app. |
| **Wingle Atlas** | B2B itinerary builder for travel agencies. Separate product from Pass. |
| **Wingle Pass for Agencies** | B2B automated service fulfillment for travel agencies. Separate product from Atlas. |
| **White Label** | Brandable version of Wingle Pass for enterprise partners. |
| **WinglePass** | Domain name (`winglepass.com`). The B2C web product. |
| **LETS WINGLE S.L.** | Legal company name. Rarely used publicly. |
| **Cockpit Diaries** | The company blog series — behind-the-scenes stories from building Wingle. |
