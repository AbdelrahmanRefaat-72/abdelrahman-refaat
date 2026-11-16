# Abdelrahman Refaat — Portfolio

A bilingual, responsive portfolio site built with plain HTML, CSS, and JavaScript. The home page gives a short overview; a three-line button opens a side menu with independent pages for each field. It includes switchable light and dark themes and does not need a package install or build step.

## Preview locally

From this folder, start a local static server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Opening `index.html` directly may limit local storage or PDF viewing in some browsers.

## Files

- `index.html` — page structure and accessible controls
- `styles.css` — responsive visual system and section animations
- `script.js` — Arabic/English copy, project cards, certificate cards, filters, and interactions
- `assets/gaming/` — Refaat Gaming logo and channel artwork
- `assets/certificates/` — certificate PDFs linked from the gallery
- `assets/source/compress.py` — the Python compression utility source

## Content notes

- The site has an Arabic default view, a persistent Arabic/English switch, and a persistent light/dark theme switch.
- Home includes the short profile, focus cards, selected projects, and a certificate snapshot. The side menu opens dedicated views for focus areas, Python/Backend, Automation, QA, Projects, About, Certificates, Other Fields, Gaming, and Contact.
- Backend and Python lead the professional focus. Automation and QA are presented as learning paths.
- Project details are based on the files currently available. Team contributions, outcome metrics, and some certificate metadata can be updated as details are confirmed.
- The Gold Store project card describes the application, but its private user, invoice, sales, key, and configuration files are not included in this site.
- No videos autoplay. Gaming content uses the supplied channel artwork and links to the public profiles.

