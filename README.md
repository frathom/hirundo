# Hirundo — a Publii theme

A marketing-agency theme for [Publii](https://getpublii.com), built around the
Hirundo brand: **navy + gold on cream**, Cormorant Garamond display serif, Inter
for UI/body, JetBrains Mono for labels. *Global by nature. Agile by design.*

## Install

1. In Publii, open your site → **Settings** is not needed; go to the top bar
   **Theme** selector → **Install theme from file** (or Tools & Plugins →
   Themes → *Install theme*).
2. Choose `Hirundo.zip`.
3. Select **Hirundo** as the active theme and **Sync** your site.

(Or copy the `Hirundo` folder into
`Documents/Publii/sites/<your-site>/input/themes/` and restart Publii.)

## Customise (Theme settings → visual editor)

Everything is editable without touching code, grouped into tabs:

- **Brand** — navy / gold / cream / ink colour pickers, favicon.
- **Header** — sticky toggle, header CTA button, light-logo-on-hero toggle.
- **Homepage** — hero (eyebrow, headline with `<em>` italics, sub-head, two
  CTAs, optional background image), client trust strip, stats band, services
  cards, case studies, insights feed, and a closing CTA band. Each content
  block (stats, services, logos) is an editable HTML field with sensible
  defaults and the class names it expects noted inline.
- **Footer** — tagline, newsletter (paste your provider's embed or use the
  built-in field), copyright.
- **Social** — profile links + per-post share buttons.
- **Blog listing** — toggle image/date/author/tag/excerpt on cards, date format.

### Case studies
The homepage “Selected work” section pulls your **Featured** posts. Write a post,
add a main tag, set a featured image, and mark it *Featured* — it appears as a
case-study card.

## Templates

| Template | Use |
|---|---|
| `index` | Marketing homepage + blog feed |
| `post` / `post-wide` | Article (standard / full-bleed hero) |
| `page` | Standard page |
| `page-landing` | Full-width marketing/landing page (build with blocks) |
| `page-contact` | Intro + contact card |
| `page-empty` | Bare container for total block-editor freedom |
| `tag` / `tags` / `author` | Archives |
| `404` | Error page |

## Fonts

Cormorant Garamond and Inter load from Google Fonts; JetBrains Mono is
self-hosted (`assets/dynamic/fonts/`). To go fully self-hosted for privacy,
download the two Google families as `woff2` and swap `partials/fonts.hbs` +
`assets/css/style.css` for local `@font-face` rules.

## Credits

Brand assets and design system © Hirundo. Theme structure follows the standard
Publii theme API.
