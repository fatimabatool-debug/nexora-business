# NEXORA DIGITAL: React + Vite business website

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # test the build
```
Requires Node 18+.

## Customise
- **Everything content-related** (brand name, email, services, projects, prices, FAQ, stats): `src/config/site.js`
- **Colours / fonts / radius**: CSS variables at the top of `src/styles/index.css`
- **Contact form**: set `brand.formEndpoint` in `src/config/site.js` to a Formspree/Getform/own API URL. The form POSTs JSON there and shows success only if the server answers OK. With no endpoint it says plainly that nothing was sent and offers a prefilled email link.
- **Social image**: add `public/og-image.png` (1200x630).
- Rename the brand in `index.html` (title and meta tags).

## Demo content
All projects, testimonials, client logos, statistics, dashboard figures and prices are fictional placeholders and are labelled as such. Replace or remove them before publishing.
