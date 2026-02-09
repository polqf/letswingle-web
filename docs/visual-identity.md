# Visual Identity — Wingle (Single Source of Truth)

This document is the **single source of truth** for Wingle’s visual identity within this repository (`letswingle-web`) and for marketing surfaces unless explicitly overridden by an approved brand change.

## Scope

- **In scope**: `letswingle.com` (company website / marketing surface), brand assets used on marketing pages, and marketing communications derived from this repo.
- **Out of scope (explicitly not governed here)**:
  - **Product UI typography standards** for non-marketing product surfaces (see Typography → Product surfaces).
  - Any tokens not defined below (treat as **undefined**, not “choose what feels right”).

## Brand colors

Only the colors listed here are brand colors. Use them intentionally and consistently.

### Core palette

| Token name | Hex | Role |
|---|---:|---|
| **Wingle Blue** | `#1786FF` | Primary brand color |
| **Wingle Yellow** | `#FFEA50` | Secondary accent / primary attention on blue |
| **Wingle Off‑White** | `#FFFCF3` | Secondary “white” / primary light surface + light logo color |
| **Wingle Red** | `#FF1D1D` | Tertiary accent (use sparingly) |
| **Wingle Pale Pink** | `#FFDEDE` | Tertiary soft accent / soft red companion |

**Notes**
- **Off‑White is not neutral white**. Treat `#FFFCF3` as a branded surface color.
- **Blue is preferred** when a default choice is needed (e.g., default logo color, primary brand surface).

### Neutrals (support palette)

Neutrals must **not** be pure black. They exist to support hierarchy and readability without competing with brand colors.

| Token name | Hex | Intended use |
|---|---:|---|
| **Ink** | `#111318` | Primary text on light surfaces |
| **Ink Muted** | `#3A3F4B` | Secondary text on light surfaces |
| **Stroke** | `#D8D5CC` | Borders, dividers, subtle UI lines on light surfaces |
| **Surface** | `#FFFFFF` | Utility surface only when Off‑White is not viable (e.g., contrast, imagery) |

**Usage rules**
- **Primary surfaces**: Use **Off‑White** and **Blue** as the default background pair.
- **Accessibility**: Do not sacrifice legibility for mood; maintain sufficient contrast (WCAG 2.1 AA as the target).
- **Emphasis**:
  - Use **Blue** and **Yellow** to emphasize key information.
  - On **Blue** surfaces, **Yellow** is the **primary attention** color.
  - If text density is high on **Blue**, prefer **Off‑White** for all or part of the text to reduce visual pressure.
- **Red / Pale Pink**:
  - Use **Red** sparingly for high-salience emphasis.
  - Use **Pale Pink** as a softer companion to Red (e.g., soft emphasis areas) when appropriate.
- **Do not** introduce additional brand colors (including blacks/greys as “brand accents”) without an explicit update to this document.

## Typography

### Marketing surfaces (this repo / `letswingle.com`)

**Typeface (only)**: **Bricolage Grotesque** (Google Fonts).

**Font roles**
- **Titles / display headings**: *Bricolage Grotesque Condensed*, **ExtraBold** (reference style: “48pt Condensed ExtraBold”).
- **Subtitles / supporting headings**: *Bricolage Grotesque Condensed*, **Regular / Variable** (reference style: “48pt Condensed Regular Variable”).
- **Body / UI / other text**: *Bricolage Grotesque (non‑condensed)*, **Regular**.

**Usage rules**
- Condensed styles are used **only** for **large headings/subtitles**.
- Non‑condensed styles are used for **body copy** and **UI text**.
- This document does **not** define a type scale (sizes/line-heights) yet. Until defined, avoid hard-coding a “brand scale” as canonical.

### Product surfaces (outside this repo’s visual scope)

- **iOS app**: uses **Red Hat Display**.
- **winglepass.com** and internal portals: **no approved product typeface standard is defined yet**.
- Guidance: Bricolage Grotesque is considered too “artsy” for dense product text; if used in products, limit it to select titles/landing moments (per current intent).

## Logos

Approved logo assets live in `/assets`:
- **Wordmark (off‑white)**: `assets/logo.svg`
- **Symbol (off‑white)**: `assets/symbol.svg`
- **Wordmark (blue)**: `assets/blue-logo.png`
- **Symbol (blue)**: `assets/blue-symbol.png`

### Canonical logo

- The primary logo is the **wordmark** (“logo”).
- The **symbol** exists as a supporting mark for constrained spaces (e.g., avatar, favicon, small placements) when the wordmark is not viable.

### Logo colorways

- Logos are approved in:
  - **Wingle Blue** (`#1786FF`)
  - **Wingle Off‑White** (`#FFFCF3`)
- **Preference**: Use **blue** logos when contrast allows.
- Use **off‑white** logos when placed on a **blue** (or otherwise dark/high-contrast) surface.

### Logo rules (no measurements defined)

No minimum size or clear-space ratios are defined at this time.

**Do**
- Keep proportions unchanged.
- Place logos on backgrounds that preserve legibility and strong contrast.
- Use the provided assets as the source; treat the mark shapes as immutable.

**Don’t**
- Don’t stretch, skew, rotate, or apply effects (shadows, glows, gradients, outlines).
- Don’t change the logo colors beyond the approved colorways.
- Don’t place the logo on low-contrast backgrounds.

## Iconography

Iconography style is **not defined** yet.

**Rule**
- Do not introduce a new icon set/style as “the brand” until this section is explicitly defined.

## Explicit do / don’t rules (system-level)

### Color

- **Do** use **Blue + Off‑White** as the default background pair.
- **Do** use **Yellow** as the primary attention color on **Blue** surfaces.
- **Don’t** add new brand colors or additional “accent neutrals” without updating this document.

### Typography

- **Do** keep **Bricolage Grotesque** as the **only marketing typeface**.
- **Do** reserve **Condensed** for **large headings/subtitles** only.
- **Don’t** treat an ad-hoc type scale as “the brand scale” until one is defined here.

### Logos

- **Do** prefer the **blue wordmark** when possible.
- **Don’t** recolor logos outside **Blue** and **Off‑White**.
- **Don’t** modify the mark geometry in any way.
