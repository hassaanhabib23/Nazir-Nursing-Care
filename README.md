# Nazir Nursing Care website

Static website (HTML, CSS, a little JS). No build step, no backend. Open `index.html` to view.

## Pages
`index.html`, `services.html`, `pricing.html`, `about.html`, `faq.html`, `contact.html`

## Replace before going live
Search every file for these placeholders:

| Placeholder | Where |
|---|---|
| `0300 0000000`, `+923000000000`, `923000000000` | all pages and `js/main.js` (`WHATSAPP_NUMBER`) |
| `info@nazirnursingcare.com` | footer, contact page |
| `Lahore` and area names (DHA, Gulberg, ...) | footer, FAQ, meta tags, schema in `index.html` |
| `Rs. X,XXX` | `pricing.html` |
| `[Street address]`, `[Add the founder's story ...]` | `contact.html`, `about.html` |
| Statements such as "Female nurses available", "CNIC verified", "phone lines open 24 hours" | Confirm each is true for the business |

## Design
Fonts: Newsreader (headings), Public Sans (body). Colours are CSS variables at the top of `css/style.css`.

## Deploy
Upload the folder to Netlify, Vercel or GitHub Pages, then connect the domain.
