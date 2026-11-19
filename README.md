# Delta Facilities Solutions website

Source for **deltafacilitiessolutions.com**. Built with [Astro](https://astro.build) and Tailwind CSS.
It produces plain static HTML (English at `/`, French at `/fr/`), so there is no WordPress, no database and no plugins to keep updated.

## Change the text
All wording, in English and French, is in `src/i18n/site.ts`. The business email and phone number are at the top of that file.

## Run it on your computer
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the finished site to dist/
```

## Hosting (free): GitHub Pages
`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`, with free SSL.
- Repo settings → Pages → Source: **GitHub Actions** (one-time).
- Until a domain is connected, the site is at `https://<user>.github.io/<repo>/`.
- To use the real domain, add `public/CNAME` containing `deltafacilitiessolutions.com`, point the domain's DNS at GitHub Pages
  (A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 and `www` CNAME `<user>.github.io`),
  then tick "Enforce HTTPS" in Settings → Pages.

## Contact forms
The forms post to FormSubmit (free, no account needed) and arrive at the email set in `src/i18n/site.ts`.
The first time someone submits, FormSubmit sends a one-time confirmation email to that inbox. Click it once to activate the forms.
