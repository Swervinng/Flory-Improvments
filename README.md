# Florlaine

A front-end demo storefront for **Florlaine**, a handmade knitted-flower shop.
Built with plain HTML, CSS, and JavaScript (no build step, no backend).

## What's included

- **Home page** (`index.html`) — hero, about, occasion suggestions, product
  collections, reviews, and a contact form.
- **Product/occasion pages** — Seasons, Disney, Single, Colorful, Randoms,
  Baby, Graduation, and Charms, all sharing one header, one stylesheet
  (`products.css`), and one cart script (`products.js`).
- **Cart & checkout** (`cart.html`, `checkout.html`) — a `localStorage`-backed
  cart with quantity controls and an order-summary checkout form that opens a
  pre-filled email to place the order.
- **Search** (`search.html`) — filters a small sample catalogue by name.
- **Sign in / sign up** (`login.html`) — a front-end-only demo form (no
  backend, so no real authentication happens; passwords are never stored).
- **Shipping details form** (`shipping.html`).

## Night mode

Every page includes a small knit-stitch toggle in the header that switches
between light and dark themes. The choice is remembered (`localStorage`) and
respects the visitor's system preference on first visit. Theming lives in
`theme.css` (CSS variables) and `theme.js` (the toggle + cart-badge logic
shared by every page).

## Images

The original `imges/` folder shipped empty, so this version includes a small
set of generated, on-brand SVG illustrations as placeholders. Swap in real
product photography by replacing files of the same name in `imges/`.

## Running locally

No build step needed — open `index.html` in a browser, or serve the folder
with any static file server, e.g.:

```
python3 -m http.server 8000
```
