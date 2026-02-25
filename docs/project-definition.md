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

## Who It Serves

This site has three primary audiences, each with different needs. **Marketing order prioritizes B2C visibility first**, followed by B2B pages. B2B remains the primary revenue driver, but the site experience is sequenced for consumer/press visibility.

### 1. Consumers (B2C — Marketing/Press Priority)

Existing and potential app users need to understand:

- **Wingle** (the app): Combines in-flight social connection (Chat) and premium travel services (Pass) in a single iOS/Android app.
- Where to download the app.
- What services are available via `winglepass.com`.

The B2C app remains the public face of the brand — generating press, social proof, and organic visibility. It must remain prominently visible.

### 2. Travel Professionals (B2B)

Travel agencies are the primary revenue driver. They land on the **Wingle for Travel Professionals** hub (`/products/agencies`) and need to understand:

- **Wingle Pro**: A curated, premium airport services platform purpose-built for travel agencies — especially luxury and high-end operators. This is **not** the same as the B2C Wingle Pass. The agency product offers three tiers of service, from curated lounge access to full VVIP private terminal experiences (see "Service Tiers" below). Wingle adapts to each agency's workflow through multiple integration methods (see "Integration Paths" below).
- **Wingle Atlas**: A digital itinerary builder that replaces static PDF trip documents with rich, interactive, context-aware travel experiences delivered to travelers. It also serves as a shared knowledge base across the agency.
- That these are two separate products that can work independently or together.
- How to get started (contact form / demo request).

### 3. Press and Investors

Journalists and potential investors need:

- A clear, professional narrative about the company.
- Access to the blog (Cockpit Diaries + News).
- Social proof (App Store ratings, press mentions).
- Contact information.

## Product Portfolio

The site showcases the following products. These are the canonical names and descriptions.

| Product | Segment | Clients | Status | Revenue |
|---|---|---|---|---|
| **Wingle** (app) | B2C | iOS, Android | Active (credits-based model) | Growing |
| **Wingle Pass** (web) | B2C | Web (`winglepass.com`) | Active | Growing |
| **Wingle Pro** | B2B | Web (no public app — contact-driven) | Active, primary focus | **Highest** |
| **Wingle Atlas** | B2B | Web (`wingle-atlas-web`) | In development | High potential |

### Wingle Pro — Service Tiers

This is the company's highest-revenue product and its primary focus. Unlike the B2C Wingle Pass (which offers standard lounge access), Wingle Pro is positioned as a **"one-stop partner for premium airport services"** with three distinct service tiers:

| Tier | Description | Price Range | Availability |
|---|---|---|---|
| **Lounges + Fast Track** | Curated lounge access from 700+ lounges worldwide. Wingle applies in-house quality intelligence based on flight number, airport, departure time, airline, and reviews (public + first-hand) to ensure only up-to-standard services are recommended. If a lounge doesn't meet the bar, it is not offered — even if technically available. | Customized per route and airport | Global (700+ lounges) |
| **Meet & Assist** | End-to-end passenger guidance through airport touchpoints. A personal assistant meets passengers at the aircraft door, expedites security and passport control, provides buggy transport in some airports, and escorts to the VIP lounge. Available for departures, arrivals, and connections. | Customized per route and airport | Major hubs and priority routes |
| **VVIP** | Private terminal experience. Passengers arrive at a private airport zone (not the main terminal), receive private check-in and luggage handling, clear security and passport control in a private room, and are driven by car directly to the aircraft stairs. | Customized per route and airport | Selected airports worldwide |

**Key differentiator from B2C:** Wingle Pro adds a curation and quality layer that the B2C product does not have. In-house intelligence filters and recommends only up-to-standard services so agencies can trust every option. Additionally, Meet & Assist and VVIP tiers are exclusively available through the B2B channel.

### Wingle Pro — Integration Paths

A key strength of Wingle Pro is that it adapts to each agency's existing workflow. There are four integration methods, offered depending on the client's technical capabilities and preferences:

| Integration | How It Works | Best For |
|---|---|---|
| **API** | The agency connects to Wingle's API to submit bookings and retrieve service information programmatically. | Tech-enabled agencies or platforms with development resources |
| **Email parsing** | The agency sends raw emails with booking details. Emails are fetched via Google Apps Script, parsed by the backend — with AI-assisted extraction when structure is unclear — and converted into bookings automatically. | Agencies that work primarily via email |
| **PDF extraction** | The agency sends structured PDFs (attached to emails). PDFs are fetched via Google Apps Script, sent to the backend for extraction using the same AI-assisted pipeline, and converted into bookings. | Agencies with standardized PDF booking formats |
| **White-label landing** | Wingle provides a branded landing page under the partner's identity where end clients can purchase a service package (e.g., fast track + lounge at origin and destination). | Partners who want a consumer-facing booking surface under their brand |

These are **internal implementation details** and should **not** be presented as separate products or publicized. The public-facing message is that Wingle Pro adapts to each agency's workflow — the specific integration method is discussed during the sales process.

### Internal vs. External Naming

- **"Wingle Pass"** and **"Wingle Chat"** are internal product names. Externally, the B2C app is simply called **"Wingle"** — it combines both.
- **"Wingle Pro"** is the B2B premium airport services product. It is fundamentally different from the B2C Wingle Pass — it includes curated quality filtering, Meet & Assist, and VVIP tiers that the B2C product does not offer.
- **"Wingle for Travel Professionals"** is the umbrella term for the B2B offering on the website, encompassing both Wingle Pro and Wingle Atlas.
- **"Wingle Atlas"** is always referred to by its full name.
- **"White label"** is an integration method of Wingle Pro, not a separate product. Do not present it publicly as a standalone offering.
- The company name **LETS WINGLE S.L.** is rarely used publicly. The brand is simply **"Wingle"**.

## What This Project Is NOT

- **Not a product application.** No login, no user data, no transactions.
- **Not `winglepass.com`.** That remains the B2C web product for Wingle Pass.
- **Not `cockpit.letswingle.com`.** The blog will migrate here; the Jekyll site will be decommissioned.
- **Not an API consumer in any meaningful sense.** Contact forms may hit a backend or third-party service, but this site does not integrate with the Wingle backend (`prod.letswingle.com`).
- **Not a single-product site.** Every product under the Wingle umbrella must be represented.

## Site Structure (High-Level)

The site should follow this information architecture:

- **Home** (`/`) — Hero + App preview + Agency/Atlas preview + CTAs
- **Wingle App** (`/products/wingle-app`) — Showcases app services (fast-track, lounges, luggage, laundry) → CTAs to App Store, Google Play, `winglepass.com`
  - **FAQs** (`/products/wingle-app/faqs`) — App FAQ page for common questions
- **Wingle for Travel Professionals** (`/products/agencies`) — Hub page for the B2B offering, linking to Wingle Pro and Wingle Atlas
- **Wingle Pro** (`/products/pro`) — Premium airport services for agencies: tiers, reasons, process → CTA to contact form
- **Wingle Atlas** (`/products/atlas`) — Digital itinerary tool: features, knowledge system → CTA to contact form / demo request
- **Blog** (`/blog`) — Cockpit Diaries (`/blog/entry`) + News (`/blog/news`), migrated from `winglepass.com/blog`
- **Press** (`/press`) — Media coverage and appearances with logo grid
- **About** (`/about`) — Company story, values
- **Contact** (`/contact`) — General contact form
- **Legal** — Terms (`/legal/terms`), Privacy Policy (`/legal/privacy`), Cookie Policy (`/legal/cookies`) (EN/ES)

Products with a user-facing platform (B2C app, `winglepass.com`) get CTAs that link out. B2B products (Wingle Pro, Wingle Atlas) collect interest via embedded `ContactBand` sections with contact forms.
Navigation and homepage sections list the **B2C app first**, followed by B2B products.

## Role Within the Ecosystem

```
letswingle.com (THIS PROJECT)
├── Showcases ──→ Wingle iOS/Android app (App Store / Google Play)
├── Links to ───→ winglepass.com (B2C web product)
├── Showcases ──→ Wingle Pro (B2B, premium airport services for agencies)
├── Showcases ──→ Wingle Atlas (B2B, digital itinerary tool)
├── Collects ───→ Agency interest (Wingle for Travel Professionals)
└── Hosts ──────→ Blog (migrated from winglepass.com/blog)
```

This site is the **top of the funnel**. It does not execute — it directs.

## Core Vocabulary

| Term | Meaning |
|---|---|
| **Wingle** | The brand name. Also the B2C app name (externally). Also sometimes used for the company. |
| **Wingle Pass** | The credits-based system within the B2C app for accessing premium airport services (lounges, fast track, luggage storage, laundry, etc.). |
| **Wingle Chat** | Internal name for the in-flight offline social product. Part of the B2C app. |
| **Wingle for Travel Professionals** | The umbrella B2B brand on the website, encompassing Wingle Pro and Wingle Atlas. |
| **Wingle Pro** | B2B curated premium airport services for travel agencies. Three tiers: Lounges + Fast Track (quality-filtered access), Meet & Assist (end-to-end passenger guidance), VVIP (private terminal experience). Four integration methods: API, email parsing, PDF extraction, white-label landing. |
| **Wingle Atlas** | B2B digital itinerary builder and shared knowledge base for travel agencies. Separate product from Pro. |
| **WinglePass** | Domain name (`winglepass.com`). The B2C web product. |
| **LETS WINGLE S.L.** | Legal company name. Rarely used publicly. |
| **Cockpit Diaries** | The company blog series — behind-the-scenes stories from building Wingle. |
