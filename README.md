# Nazir Nursing Care website

Static website (HTML, CSS, a little JS). No build step, no backend. Open `index.html` to view.

## Pages
`index.html`, `services.html`, `pricing.html`, `about.html`, `faq.html`, `contact.html`

## Replace before going live
Search every file for these placeholders:

| Placeholder | Where |
|---|---|
| `noreply@nazirnursingcare.com` (contact email) | footer, contact page |
| Area names (Islamabad sectors, Bahria Town, DHA, Satellite Town, Saddar) | footer, FAQ, meta tags, schema in `index.html` |
| `Rs. X,XXX` | `pricing.html` |
| `[Street address]`, `[Add the founder's story ...]` | `contact.html`, `about.html` |
| Statements such as "Female nurses available", "CNIC verified",  | Confirm each is true for the business |

## Design
Fonts: Newsreader (headings), Public Sans (body). Colours are CSS variables at the top of `css/style.css` and match the logo (blue, teal, green).

## Logo files (`images/`)
`logo-full.png` (stacked logo), `logo-horizontal.png` (header and footer), `icon-512.png`, `icon-192.png`, `apple-touch-icon.png`, `favicon.png`, `favicon.ico`. All have transparent backgrounds except the apple touch icon.

When the final domain is set, update the `og:image` URL (`https://nazir-nursing-care.mylogiclab.cloud/...`) in each page's `<head>`.

## Deploy
Upload the folder to Netlify, Vercel or GitHub Pages, then connect the domain.
