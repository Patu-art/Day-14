# Day 14 · Strange Brew, Chorlton — SITEPRO frontend demo

**Independent unsolicited portfolio concept. Not commissioned, endorsed or managed by Strange Brew.** This is a static frontend for desktop, tablet and mobile, designed around the venue's documented craft-beer / record-bar character. It makes no live booking, payment, ordering, current-tap or ticketing claims.

## Files

```
index.html
css/style.css
js/main.js
assets/record-art.svg
assets/favicon.svg
assets/PHOTO_BRIEF.md
README.md
```

No frameworks, CDN fonts, external image URLs, trackers, build tooling or server dependencies. No fake menu, prices, reviews, event bookings or client photos. The images and graphics are original illustrations, **not photos of the business**. The brand lockup is a proposal, not an official logo.

## Deployment

Files are committed to the root of Patu-art/Day-14. Set GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Load `index.html`. Keep directory names and case exactly as supplied. To run locally: open `index.html`, or serve the folder using Python `python -m http.server 8000`.

## Checked references (22 September 2026)

- CAMRA, Strange Brew: https://camra.org.uk/pubs/strange-brew-chorlton-cum-hardy-129983 — venue address, independently listed hours, local cask and keg drinks, patio, red seating area, rear music area, Thursday bring-your-own-records/open decks and Saturday vinyl DJ sessions, contact email. CAMRA last updated July 2026. Third-party information may change; confirm directly with the venue before production.
- Instagram handle `@strangebrewbar`, corroborated in public venue references; social URL: https://www.instagram.com/strangebrewbar/. Confirm access and exact account with the business before official launch.
- Maps destination uses a Google Maps search query for `Strange Brew 370 Barlow Moor Road Chorlton M21 8AZ`, not an invented latitude or embedded tracking map.

Hours printed on the demo are attributed to CAMRA, not represented as live or confirmed by the owner. Repeat sessions are marked with an asterisk and links to the social feed for confirmation. Beer offering categories are not a live tap list.

## Before delivering to a paying client

1. Secure brand and photo permissions, obtain official wordmark/logo and venue-owned photographs. See `assets/PHOTO_BRIEF.md`.
2. Confirm ownership contact, current social link, opening hours, whether Thursday/Saturday events still run, accessibility details, tap categories and visitor actions. Replace or remove any unconfirmed claims.
3. Replace concept illustrations with actual venue photos where helpful, retaining local assets and meaningful image alt text; compress to WebP/AVIF with reasonable dimensions.
4. Check contact links, mobile navigation, keyboard access and devices; run a real browser QA pass at 320/390/768/1024/1440 pixels.
5. Obtain signoff and only then describe the website as official. GitHub Pages exposes all frontend HTML/CSS/JS and public media; public assets cannot be made impossible to copy. No backend or privileged credentials are present.

## Interaction and progressive enhancement

The mobile menu uses `aria-expanded`, closes on Escape, navigation, outside click and viewport change, and keeps the keyboard tab sequence inside an open mobile menu. Section reveal is optional, with all content visible when JavaScript is missing or reduced motion is preferred. The record rotation and ticker stop under `prefers-reduced-motion`. Native anchors provide navigation and `mailto`/Maps/Instagram open actual destinations; no dead CTA links.

## Deployment note

The repository contains a hand-formatted standalone stylesheet. Before an official client launch, verify current event dates, venue photography permission and the current venue information directly with the owner.
