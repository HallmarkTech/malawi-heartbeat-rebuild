# Deploy Hallmark Limited to cPanel

This project now builds as a static single-page app.

## Build

```bash
npm install
npm run build
```

The upload-ready folder is:

```text
cpanel-build
```

Upload the contents of `cpanel-build` into your cPanel site's document root, usually `public_html`.

## Important files

- `index.html` loads the React SPA.
- `assets/` contains the compiled CSS, JavaScript, and images.
- `.htaccess` routes direct visits like `/about` or `/solutions/ict` back to `index.html`.
- `sitemap.xml`, `robots.txt`, icons, manifests, and logo files are copied from `public/`.

## Notes

- You do not need Node.js on cPanel for the live site.
- Re-run `npm run build` after each code change and upload the new `cpanel-build` contents.
