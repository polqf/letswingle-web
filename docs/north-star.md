# North Star — letswingle.com

## Vision

`letswingle.com` is the single source of truth about Wingle as a company. Every visitor — whether a travel agency evaluating B2B tools, a consumer curious about the app, a journalist writing a story, or an investor assessing the company — arrives at this site and immediately understands what Wingle is, what it offers, and how to take the next step.

The site is not just informational. It is the top of the funnel for the company's most important revenue streams.

## What Success Looks Like

Marketing order prioritizes consumer visibility first, followed by B2B journeys.

### For Consumers

A traveler who heard about Wingle from a friend, an Instagram post, or a news article lands on the home page. They immediately see the app — the beautiful in-flight social experience combined with premium travel services. They tap through to the app page, see screenshots and feature highlights, and download from the App Store or Google Play. If they want to explore services on the web, they're directed to `winglepass.com`.

The app page communicates that Wingle is alive, active, and worth downloading — even though the B2C product is in maintenance mode commercially.

### For Travel Agencies

A luxury travel agency director lands on the site from a Google search, a LinkedIn post, or a sales email. Within 30 seconds, they understand that Wingle offers two products for agencies:

1. **Wingle Pro** — A curated premium airport services platform that goes far beyond standard lounge access. They see the three service tiers:
   - **Lounges + Fast Track**: Curated access to 700+ lounges worldwide, quality-filtered by Wingle's in-house intelligence so agencies can trust that every option meets a high standard.
   - **Meet & Assist**: End-to-end passenger guidance from aircraft door through security and passport control to the VIP lounge — the kind of VIP experience their high-end clients expect.
   - **VVIP**: Private terminal, private check-in, private security, car to the aircraft stairs — a fully private experience.
   
   They see that Wingle positions itself as the agency's one-stop partner for everything premium at the airport, that the service adapts to each agency's workflow, and that pricing is customized per route and airport.

2. **Wingle Atlas** — A tool that transforms their static PDF itineraries into rich, interactive digital trip experiences their travelers actually enjoy using, while building a shared knowledge base across the agency.

They see that these are separate products that work independently, but that agencies using both get an integrated experience. They click through to a product page, see a clear value proposition with concrete examples, and fill out a contact or demo request form. The sales team receives a qualified lead with context.

### For Enterprise Partners

A product manager at a travel company or airline reaches out through the Wingle Pro contact form. During the sales conversation, they learn that Wingle's infrastructure can adapt to their workflow — whether through API integration, email-based booking, or even a branded landing page under their identity. The public site communicates the breadth of Wingle Pro's capabilities; the specific integration approach is tailored during the partnership discussion.

### For Press and Investors

A journalist or investor lands on the site and finds a professional, polished presence. The blog is active with Cockpit Diaries and company news. The product portfolio demonstrates ambition and traction. The About page tells the company story compellingly. They find what they need to write a story or evaluate the opportunity.

## Site Characteristics at North Star

### Content

- **Every product has a dedicated, well-crafted page** with a clear value proposition, visual assets, and a single primary CTA.
- **The blog is active and engaging**, with regular Cockpit Diaries episodes and news posts. It is the canonical blog for the company, no longer split across multiple subdomains.
- **Press coverage is centralized** on a dedicated press page for credibility.
- **Legal pages are complete and current** in both English and Spanish.
- **Social proof is integrated throughout**: App Store ratings, press mentions, partner logos, user testimonials.

### Design

- **Brand-coherent** with the Wingle app and `winglepass.com`, but with its own identity as a company site (not a product app).
- **Responsive and fast** — sub-second load times, excellent Core Web Vitals.
- **Accessible** — WCAG 2.1 AA compliant.
- **Visually premium** — reflecting the quality of the products it showcases. Travel is aspirational; the site should feel that way.

### Conversion

- **Every product page has a clear CTA** — download, visit platform, or contact.
- **Contact forms are frictionless** — minimal fields, clear expectations, immediate confirmation.
- **Lead context is captured** — which product, which page, what company, what need.
- **Analytics track the full funnel** — page views → product page visits → form submissions.

### SEO

- **Ranks for relevant terms**: "VIP airport services for travel agencies", "meet and assist airport service", "VVIP airport experience", "airport lounge booking for agencies", "travel agency digital itinerary", "premium airport services partner", "wingle app", "wingle pass".
- **Structured data** (JSON-LD) for Organization, Products, and BlogPostings.
- **Sitemap and robots.txt** properly configured.
- **Canonical URLs** established — no content duplication with `winglepass.com`.

### Internationalization

- **Full EN/ES support** on every page, with clean URL structure (`/es/...`).
- **Language detection** respects browser preferences.
- **Easily extensible** to Italian and other languages when needed.

## Capabilities at North Star

| Capability | State |
|---|---|
| Home page with product portfolio overview | **Complete** |
| Wingle App (B2C) showcase page with FAQs | **Complete** |
| Wingle for Travel Professionals hub page | **Complete** |
| Wingle Pro product page with contact form | **Complete** |
| Wingle Atlas product page with contact/demo form | **Complete** |
| Blog (Cockpit Diaries + News) | **Complete** (sole canonical source pending redirects from `winglepass.com`) |
| Press page | **Complete** (9 outlets with logos) |
| About / Company page | **Complete** |
| Contact page | **Complete** |
| Legal pages (EN/ES) | **Complete** (Terms, Privacy, Cookies) |
| EN/ES internationalization | **Complete** (~760 keys per language, language switcher) |
| Contact form infrastructure | **Complete** (Resend, rate limiting, honeypot) |
| Brand visual identity applied | **Complete** (Bricolage Grotesque, brand colors, logo assets) |
| SEO (sitemap, structured data, OG tags) | Partial (base OG metadata; per-page and structured data pending) |
| Analytics (GA4, Vercel) | Not yet active |
| Cookie consent / GDPR | Not yet implemented |
| Press kit / media resources | Not yet available |
| CRM integration for leads | Not yet active |
| `winglepass.com/blog` redirects | Pending |

## What This Does NOT Become

Even at North Star, this site:

- **Does not become a product application.** No authentication, no user data, no dashboards.
- **Does not replace `winglepass.com`.** That remains the B2C web product for booking services.
- **Does not become an e-commerce platform.** No direct purchasing or checkout.
- **Does not host documentation for developers.** API docs, if needed, would live elsewhere.
- **Does not become a content-heavy media site.** The blog is a complement, not the primary purpose.
