# Strange Brew · Day 14 · Neighbourhood noticeboard redesign

Independent, unsolicited frontend concept for Strange Brew, Chorlton. Not official, commissioned by or endorsed by the bar.

## Why the redesign is different
The earlier concept used a generic oversized title + illustrated vinyl + ticker and multiple decorative graphic cards. This version instead uses an information-first neighbourhood gig noticeboard, warm terracotta and burgundy inspired by descriptions of the bar's red room, compact paper event cards, a textual bar board, practical venue descriptions, operating hours and direct contact/directions. There are **no drawn records, fabricated photos, stock venue images, carousels or marquee tickers**.

## Structure
- index.html — semantic page and useful venue information.
- css/style.css — responsive design and reduced-motion styles.
- js/main.js — mobile navigation only; everything else works without JavaScript.
- assets/favicon.svg — original unofficial monogram.
- assets/PHOTO_BRIEF.md — venue photo and rights requirements.

All asset paths are relative. No external JavaScript, fonts, image hosts, forms, database, authentication, fake booking flow, fictitious live menu, fake reviews or event ticket buttons.

## Content verification
As checked on 22 September 2026, CAMRA's Strange Brew listing:
https://camra.org.uk/pubs/strange-brew-chorlton-cum-hardy-129983

Listed address: 370 Barlow Moor Road, Chorlton-cum-Hardy, M21 8AZ. Listed email: strangebrewbar@gmail.com. The venue is described as having a front patio, red seating area, rear live-music area, changing/local beer, Thursday bring-your-own-records sessions and Saturday vinyl DJs.

The hours shown on this demo are explicitly attributed to CAMRA (Monday–Thursday 16:00–23:00, Friday 16:00–00:00, Saturday 14:00–00:00, Sunday 14:00–23:00). They are NOT independently confirmed with the bar; verify before client launch. Regular activity descriptions do not assert specific upcoming dates, ticket prices or DJs. The drinks board lists categories, not stock.

Instagram: https://www.instagram.com/strangebrewbar/
Maps uses a place search, not a fabricated pin.

## Client-readiness
Obtain approval for public use of the venue's brand, logo, materials and photography, confirmation of menu/current programme/hours, and stakeholder signoff before claiming the site is official. For a photo-led version, obtain actual on-location venue photography with usage rights rather than pretending illustrations or stock shots represent the business. See PHOTO_BRIEF.md.

GitHub Pages: Deploy from branch main, root. No build step. Public static HTML/CSS/JS and local media are viewable/copyable by any visitor; do not put secrets in this frontend.

## QA
Check internal links and external URLs, assets, menu button/Escape/outside-click, keyboard operation, horizontal overflow and layout at 320/390/768/1024/1440px after each content or photo update.

## Reference photograph (added 22 September 2026)
The local file `assets/bar-atmosphere-reference.webp` is a resized, compressed **stock ambience photograph**, not a photo of Strange Brew and not venue-approved promotional material. Source image: https://unsplash.com/photos (image source URL: https://images.unsplash.com/photo-1514933651103-005eec06c04b). Unsplash License: https://unsplash.com/license . Its original setting is not represented as Strange Brew. The image is placed in a labelled inspiration module linking to the venue's real Instagram. It should be replaced by a licensed photo of the actual venue if the bar approves the project. Its compressed size is for a small editorial thumbnail, not a full-screen hero.
