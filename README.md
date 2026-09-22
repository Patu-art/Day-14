# Strange Brew · Day 14 · Neighbourhood noticeboard redesign

Independent, unsolicited frontend concept for Strange Brew, Chorlton. Not official, commissioned by or endorsed by the bar.

## Why the redesign is different
The earlier concept used a generic oversized title + illustrated vinyl + ticker and multiple decorative graphic cards. This version instead uses an information-first neighbourhood gig noticeboard, warm terracotta and burgundy inspired by descriptions of the bar's red room, compact paper event cards, a textual bar board, practical venue descriptions, operating hours and direct contact/directions. There are **no drawn records, fabricated photos, stock venue images, carousels or marquee tickers**.

## Structure
- index.html — semantic page and useful venue information.
- css/style.css — responsive design and reduced-motion styles.
- js/bootstrap.js — tiny early layout marker to prevent a mobile navigation layout shift.
- js/main.js — deferred mobile navigation controller; everything else works without JavaScript.
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
Obtain approval for public use of the venue's brand, logo, materials and photography, confirmation of menu/current programme/hours, and stakeholder signoff before claiming the site is official. Five venue photographs are supplied for the independent concept. Obtain written rights/venue approval for any official use and review consent for identifiable guests. See PHOTO_BRIEF.md.

GitHub Pages: Deploy from branch main, root. No build step. Public static HTML/CSS/JS and local media are viewable/copyable by any visitor; do not put secrets in this frontend.

## QA
Check internal links and external URLs, assets, menu button/Escape/outside-click, keyboard operation, horizontal overflow and layout at 320/390/768/1024/1440px after each content or photo update.


## User-supplied Strange Brew photographs
The current site uses five optimized local WebP image files in assets/ supplied by the project requester: hero-exterior-evening.webp (hero), vinyl-records-interior.webp (music), drinks-pint-closeup.webp (bar), crowd-atmosphere.webp (venue), and front-exterior-people.webp (visit). WebP is a standard browser image format, **not** an HTML/webpage file. The previous generic stock photo was removed from both the webpage and repository. Obtain confirmation of image copyright/usage rights and any needed permissions from identifiable people or the venue before presenting an official client website.

## SITEPRO QA and design pass (23 September 2026)
Updated the hero to display actual exterior photography as its own image rather than a small panel embedded inside a noticeboard. Removed obsolete stock-image CSS. Adjusted mobile spacing, interactive hit areas, clearer photo descriptions and a no-JavaScript navigation fallback. Corrected the false footer claim about venue photographs. CSS and JS use explicit versioned URLs to avoid mixing a cached stylesheet with updated HTML. See the site source for implementation; the full 178-point historical checklist was not separately available for a literal item-by-item signoff.

## Performance note
Mobile Lighthouse first identified a significant layout shift while the navigation changed from its no-JavaScript fallback to the compact menu. The early bootstrap now sets the layout marker before page rendering; the deferred main controller reveals the interactive menu button only after attaching its handlers. This avoids hiding navigation for users with JavaScript disabled and avoids an inert toggle while JavaScript initializes.
