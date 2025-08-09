Shared Jekyll Theme (shared-jekyll-theme)
-----------------------------------------
Usage (as a remote_theme):
1. Push this folder to a GitHub repo: username/shared-jekyll-theme
2. In each site repo's _config.yml add:
   remote_theme: username/shared-jekyll-theme
   theme: null
3. Ensure GitHub Pages can build remote themes (public repo or enable accordingly).
4. Override pages, assets, or includes per-site if desired.

This repo contains:
- _layouts/default.html
- _includes/header.html
- _includes/footer.html
- assets/css/style.css
- assets/js/theme-toggle.js

The theme contains a sun/moon toggle in the top-right that defaults to dark and remembers selections in localStorage.
