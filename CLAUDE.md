# CLAUDE.md

Guidance for AI agents working in this repository.

## What this is
The **Anor** website — a dark-fantasy LARP collectible trading card game. Server-rendered HTML
(Express + a custom `{{ }}` template preprocessor), styled with **Bulma 1.0.4** + custom CSS.

- Structure: `private/page-*.html` (templates)
- Content/data: `app/page-*.ts` (all user-facing German copy, URLs, card IDs)
- Styling: `public/*.css` + Bulma
- Run locally: `npm run dev` → http://localhost:3000

## ⚠️ UI / design work — read the style guide first
**Before writing or editing any HTML, CSS, or page content, read
[`agent-assets/STYLE_GUIDE.md`](agent-assets/STYLE_GUIDE.md)** and follow its tokens, component
recipes, and Do/Don't rules. Do not invent new colors, fonts, or one-off inline styles — extend
`agent-assets/STYLE_GUIDE.md` and the shared CSS instead.

## Content vs. presentation
- User-facing copy (German, informal "Du") lives in `app/page-*.ts` — never hardcode it in templates.
- Reusable styling lives in `public/*.css` — never inline it.
