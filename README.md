# Sampriti Gopisetti — Portfolio (Static Website)

This is a fully static, multi-page personal portfolio built with plain HTML, CSS, and JavaScript. It uses a custom 3D carousel (no external slider lib) and no charts. Designed to be hosted on GitHub Pages.

## Structure
- `index.html` — Home
- `about.html` — About with professional/personal summaries and skills
- `projects.html` — Projects (custom 3D carousel)
- `experience.html` — Experience (custom 3D carousel)
- `qualifications.html` — Certifications & Leadership (custom 3D carousel)
- `contact.html` — Contact info
- `css/styles.css` — Global styles, responsive layout, animations
- `js/script.js` — Custom 3D carousel and small UX enhancements
- `assets/` — Put all images/logos here

## Local preview
Open `index.html` in a browser. For best results with CDNs, you may use a local server (optional):

- If you have Python 3 installed (PowerShell or CMD):
  - `python -m http.server 8000`
  - Then open http://localhost:8000 in your browser.

## Deploy to GitHub Pages
1. Create a new GitHub repository and push this folder's contents.
2. In the repo settings, enable GitHub Pages (Deploy from branch) and select the `main` branch and `/root`.
3. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

## License
You own your content. Libraries used via CDN follow their respective licenses.
