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

## Hosting (free): Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → choose this repo.
2. Framework preset: **Astro**. Build command `npm run build`. Output directory `dist`.
3. Every push to `main` publishes the site automatically, with free SSL.
4. Custom domains → add `deltafacilitiessolutions.com` and `www.deltafacilitiessolutions.com`.

## Contact forms
The forms post to FormSubmit (free, no account needed) and arrive at the email set in `src/i18n/site.ts`.
The first time someone submits, FormSubmit sends a one-time confirmation email to that inbox. Click it once to activate the forms.
