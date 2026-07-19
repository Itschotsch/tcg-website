# Anor — UI Style Guide

Single source of truth for the visual design of the Anor website. **Any agent generating or
modifying UI (HTML templates, CSS, page content) must read this file first and follow it.**

- **Brand**: Anor — a community-built LARP collectible trading card game (TCG).
- **Mood**: dark, atmospheric, fantasy, tactile ("physical cards you can almost hold").
- **Primary language of UI copy**: German (`de-DE`).
- **Stack**: Express + custom `{{ }}` template preprocessor · [Bulma 1.0.4](https://bulma.io) (CDN) · custom CSS in `public/`.

> Golden rule: **Compose with Bulma classes + the tokens and components below. Do not invent new
> colors, fonts, or one-off inline styles.** If something is missing here, extend this guide and the
> shared CSS — don't hardcode it in a template.

---

## 1. Design Tokens

These are the canonical values. They currently live in [`public/tcg-website.css`](../public/tcg-website.css)
(as CSS `:root` vars + Bulma overrides) and [`public/tcg-card.css`](../public/tcg-card.css). Treat the
table as authoritative; keep the CSS in sync with it.

### Color

| Token | Value | Usage |
|---|---|---|
| Background (page) | `rgb(2.745% 2.745% 3.137%)` ≈ `#070708` | `--bulma-body-background-color`, `--bulma-scheme-main`. Also the color used inside every fade-out gradient — **if you change it, change it everywhere**. |
| Text — headings | `#ebecf0` | `--bulma-title-color`, `--bulma-subtitle-color` |
| Text — body | `#ebecf0ee` (≈93% opacity) | `--bulma-body-color` |
| Primary (accent) | `hsl(215.2deg 71% 62%)` — a cool blue | `--bulma-primary-*`. Used sparingly for interactive accent. |
| Overlay / scrim | `rgba(0,0,0,0.5)` + `backdrop-filter: blur(10px)` | Card focus modal |
| Card shadow | `0 0 0.5rem 0.5rem rgba(0,0,0,0.2)` | `.tcg-card` |

Rules:
- The palette is **near-monochrome dark + one blue accent**. Do not add new hues without updating this table.
- Never use pure black `#000` for surfaces (except `text-shadow`); use the background token.
- Prefer opacity/`hsl` variants of existing tokens over new hex values.

### Typography

| Role | Font | Notes |
|---|---|---|
| Display (titles, subtitles) | **"Gold and After"** (`@font-face`, [`public/assets/GoldAndAfter.otf`](../public/assets/GoldAndAfter.otf)) | `font-weight: normal`, `text-shadow: 0 0.075em 0 black`. The brand voice. |
| Body / long-form | **"Merriweather"**, serif | Loaded via Google Fonts. Default on `html, body`. |
| (available, currently unused) | Bona Nova, Bona Nova SC, Libre Baskerville | Imported in CSS. Do not introduce without a documented reason. |

Type scale (desktop → mobile ≤768px):

| Element | Desktop | Mobile |
|---|---|---|
| `.title` (h1 / hero) | `5rem` | `3rem` |
| `h2.title` (section heading) | `3rem` | `2rem` |
| `.subtitle` | `2rem` | `1.5rem` |
| Body `p` | Bulma default | — |

Rules:
- Headings use `.title` / `.subtitle` classes (which apply "Gold and After"). Never set the display font manually.
- Long paragraphs are centered and width-capped (see Layout). Use `has-text-justified` (auto-hyphenation is on) for dense text blocks.

### Spacing & Layout

| Token | Value |
|---|---|
| Section rhythm | Content grouped in `<section class="section">`, separated by an ornamental `<hr>` |
| `<hr>` divider | SVG ([`divider.svg`](../public/assets/divider.svg)), `height: 2rem`, `margin: 5rem 0` (mobile `1rem` / `3rem 0`) |
| Horizontal safe padding | `.safe-borders` = `2rem` left/right |
| Content max-widths | `.is-max-small` 400px · `.is-max-mobile` 768px · `.is-max-desktop` 1024px · `.is-max-widescreen` 1216px · `.is-max-fullhd` 1408px (all auto-centered) |

### Breakpoints

| Name | Range |
|---|---|
| Mobile | `max-width: 768px` |
| Desktop | `≥ 768px` (Bulma tablet+); secondary cutoff at `1024px` |

Use Bulma responsive helpers (`is-hidden-mobile`, `is-hidden-tablet`, `is-desktop`) rather than new media queries where possible.

### Motion

| Token | Value |
|---|---|
| Card hover / tilt transition | `all 0.25s ease` |
| Card tilt | vanilla-tilt via `data-tilt` attributes (see Card component) |

### Cards (game-specific)

| Token | Value |
|---|---|
| Aspect ratio | `63 / 88` (real TCG card proportions) — always preserve |
| Corner radius | `4.7619% / 3.4091%` (elliptical, matches physical cards) |

---

## 2. Component Recipes

Copy these patterns verbatim, then swap the content. All markup is Bulma + the custom classes above.

### Section (the fundamental building block)
Every content block is a full-width `section`, optionally with a background flavour image, and is
followed by an `<hr>`.

```html
<section class="section">
    <div class="container has-text-centered is-max-desktop safe-borders">
        <h2 class="title">{{env.someTitle}}</h2>
        <p class="is-max-mobile">{{env.someText}}</p>
        <!-- buttons... -->
    </div>
</section>
<hr />
```

### Background flavour image
Atmospheric image behind a section, faded into the background so text stays readable.

```html
<div class="background-flavour-image softextended fadeout-top-bottom transparent"
     style="background-image: url(/public/assets/worldbuilding-background.webp);"></div>
```
Modifiers:
- Fade: `fadeout-top` · `fadeout-bottom` · `fadeout-top-bottom` (choose based on neighbors).
- Extent: `extended` · `extended-up` · `softextended` (bleed the image past the section).
- `transparent` → 50% opacity for a subtler wash.
- Use `.webp` assets from `public/assets/`.

### Button
Ghost button: transparent with a light border, inverts on hover.

```html
<div class="buttons is-centered">
    <a class="button" href="{{url}}" target="_blank">
        <span class="icon"><img src="/public/assets/discord-logo.svg" alt="" /></span>
        <span>Discord beitreten</span>
    </a>
</div>
```
- Group buttons in `.buttons.is-centered` (2rem gap, wraps).
- Icon is optional; when present it's an `<img>` SVG inside `<span class="icon">`.

### Card (presented)
A tilt-animated game card. Aspect ratio and radius come from `tcg-card.css` — never override them.

```html
<div id="tcg-card-holder-{{id}}" class="tcg-card-holder">
    <div id="tcg-card-{{id}}" class="tcg-card tcg-card-presented tcg-card-presented-kinds"
         style="background-image: url(.../images/public/{{id}}.jpg);"
         data-tilt data-tilt-reverse="true" data-tilt-glare="true" data-tilt-max-glare="0.5"
         data-tilt-startX="0" data-tilt-startY="-10" data-tilt-reset-to-start="true"
         onclick="openCard('{{id}}')"></div>
</div>
```
Size variants: `tcg-card-presented-summary` (hero fan), `tcg-card-presented-kinds` (column grid).

### FAQ
Native `<details>`/`<summary>` accordion (styled in [`public/tcg-faq.css`](../public/tcg-faq.css)).

```html
<div class="faq safe-borders">
    <details><summary>{{question}}</summary><p>{{answer}}</p></details>
</div>
```

### Multi-column row
```html
<div class="columns is-desktop is-8">
    <div class="column"> ... </div>
</div>
```

---

## 3. Page Anatomy

A page is a stack of `section` + `hr`, rendered from `private/page-*.html` and hydrated with data
from `app/page-*.ts`. Canonical reference: [`private/page-home.html`](../private/page-home.html).

Typical order: **Hero (card fan + title + CTA) → content sections (worldbuilding, kinds, play online,
character creation, join) → FAQ → footer**. Each section is centered, width-capped, and safe-bordered.

**Content vs. presentation separation (important):**
- **Copy, URLs, card IDs, button lists** live in `app/page-*.ts` as data — never hardcode user-facing
  German text into HTML templates.
- **Structure** lives in `private/*.html`.
- **Styling** lives in `public/*.css` + Bulma. New reusable styling goes in a `public/*.css` file,
  not inline.

---

## 4. Page Variants

Sub-pages may deliberately depart from two home-page defaults when a design reference calls for
it — document the reasoning here instead of reinventing it per page:

- **Palette variant (warm gold/cream).** Product/marketing pages with painterly parchment
  backgrounds (e.g. Starter Decks) use a warmer text palette than the home page's cool white:
  title/subtitle `#ffe1a1`, body `#ecdaccee`. **Important:** Bulma recomputes `.title`/`.subtitle`
  color from its own internal HSL variables rather than simply reading `--bulma-title-color`, and
  `body`'s text color is resolved once on `<body>` rather than re-read per descendant — so a
  page-scoped override must set **both** the CSS custom properties (for your own CSS that
  consumes them via `var()`, e.g. `.button` borders) **and** explicit `color` rules on
  `.title`/`.subtitle` and the page wrapper itself. See
  [`public/tcg-starterdecks.css`](../public/tcg-starterdecks.css) for the working pattern — copy
  it rather than re-deriving the fix.
- **No `hr` rhythm within a list block.** The `section` + `hr` rhythm is still the default between
  distinct thematic sections, but a dense data-driven list (e.g. repeating product rows) may use
  generous section/flex-gap spacing instead of dividers between its own items — reserve `hr` for
  the boundaries between genuinely different sections.

Canonical example: the Starter Decks page —
[`private/page-starterdecks.html`](../private/page-starterdecks.html),
[`app/page-starterdecks.ts`](../app/page-starterdecks.ts),
[`public/tcg-starterdecks.css`](../public/tcg-starterdecks.css). It also shows the standard
alternating image/text row pattern (`.starterdeck-row` / `.is-reverse`) collapsing to a
centered, stacked, image-first column on mobile (`≤768px`) — reuse this for any future
alternating-row list rather than inventing a new one.

---

## 5. Do / Don't

**Do**
- Reuse the tokens, classes, and component recipes above.
- Keep the `section` + `hr` rhythm between distinct sections (see §4 for the list-block exception).
- Preserve card aspect ratio and corner radius.
- Put new copy in `app/page-*.ts`; new shared styles in `public/*.css`.
- Use Bulma helpers (`has-text-centered`, `is-max-*`, `is-hidden-*`) before writing CSS.
- Match existing German tone (informal "Du").

**Don't**
- Introduce new fonts, colors, or hues not in §1 or the documented variants in §4.
- Use `#000` surfaces or arbitrary hex values.
- Hardcode the background color instead of the token (breaks fade-out gradients).
- Write one-off inline styling for anything reusable.
- Add heavyweight JS/frameworks — this is server-rendered HTML + Bulma + one tilt library.
- Break the aspect ratio of cards or add non-`.webp` backgrounds.

---

## 6. Reference Files

| Purpose | File |
|---|---|
| Global tokens, layout, buttons, backgrounds | [`public/tcg-website.css`](../public/tcg-website.css) |
| Card visuals & focus modal | [`public/tcg-card.css`](../public/tcg-card.css) |
| Card list | [`public/tcg-cardlist.css`](../public/tcg-cardlist.css) |
| FAQ accordion | [`public/tcg-faq.css`](../public/tcg-faq.css) |
| Starter Decks page (gold palette + alternating rows) | [`public/tcg-starterdecks.css`](../public/tcg-starterdecks.css) |
| Page shell (fonts + CSS links) | [`private/page-scaffold.html`](../private/page-scaffold.html) |
| Canonical page example | [`private/page-home.html`](../private/page-home.html) |
| Content/data model example | [`app/page-home.ts`](../app/page-home.ts) |
