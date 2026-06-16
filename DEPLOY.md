# Deploying to www.maaind.com via GitHub Pages

This folder is the complete, self-contained site. Everything in it is meant to sit
at the **root of the `main` branch** of `maaind-ltd/maaind-website`.

It is the same repo that already serves `newversion.maaind.com`. These steps promote
this build to the live brand domain **www.maaind.com** (with the bare `maaind.com`
redirecting to it).

---

## 1. Push the files

Copy the entire contents of this folder into the repo root, overwriting what is there,
then commit and push to `main`.

Make sure these two "invisible" files come across too (they matter):

- `.nojekyll` — stops GitHub mangling the JSX/asset filenames. **Required.**
- `CNAME` — now contains `www.maaind.com`. This is what repoints GitHub Pages.

New/changed files in this build: `sections-4.jsx` (new), plus updated `index.html`,
`styles.css`, `sections.jsx`, `sections-2.jsx`, `sections-3.jsx`.

```bash
# from inside your local clone of maaind-ltd/maaind-website
cp -R /path/to/this/folder/. .
git add -A
git commit -m "Promote new site; point Pages at www.maaind.com"
git push origin main
```

## 2. Set the custom domain in GitHub

Repo → **Settings → Pages**:

- Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
- Custom domain: **www.maaind.com** → Save.
  (Pushing the `CNAME` file usually fills this in automatically.)
- Leave **Enforce HTTPS** unticked until DNS has propagated (step 4), then tick it.

> Note: a GitHub Pages site has **one** custom domain. Switching it to `www.maaind.com`
> means `newversion.maaind.com` is no longer the canonical address. You can keep its DNS
> record or remove it — see step 3.

## 3. DNS changes in Wix

`maaind.com` is currently managed by **Wix**, and `www` likely still points at the Wix
site. You are moving DNS for the site over to GitHub Pages.

In Wix: **Domains → maaind.com → Manage DNS Records** (Advanced / Edit DNS). If the
domain is "connected" to a Wix site, you may first need to **disconnect it from the Wix
site** so Wix stops overriding these records.

### a) `www` → GitHub Pages (the canonical site)

| Type  | Host / Name | Value (points to)        |
|-------|-------------|--------------------------|
| CNAME | `www`       | `maaind-ltd.github.io`   |

> Use `maaind-ltd.github.io` (the org), **not** the repo path. No `https://`, no trailing slash.

### b) Apex `maaind.com` → redirect up to `www`

Add the four GitHub Pages **A records** (and, ideally, the four **AAAA** IPv6 records).
Once these resolve, GitHub auto-redirects `maaind.com` → `www.maaind.com`.

| Type | Host | Value             |
|------|------|-------------------|
| A    | `@`  | `185.199.108.153` |
| A    | `@`  | `185.199.109.153` |
| A    | `@`  | `185.199.110.153` |
| A    | `@`  | `185.199.111.153` |

Optional but recommended (IPv6):

| Type | Host | Value                    |
|------|------|--------------------------|
| AAAA | `@`  | `2606:50c0:8000::153`    |
| AAAA | `@`  | `2606:50c0:8001::153`    |
| AAAA | `@`  | `2606:50c0:8002::153`    |
| AAAA | `@`  | `2606:50c0:8003::153`    |

Delete any old Wix A/CNAME records for `@` and `www` that point at Wix
(e.g. `23.236.62.147`, `cdn.wixdns.net`, `*.wixsite.com`), or they will fight these.

### c) Keep or drop `newversion`

- **Keep it:** leave the existing `newversion` CNAME → `maaind-ltd.github.io` in place.
  It will still resolve but is no longer the Pages canonical, so it may show a cert
  warning or redirect. Harmless.
- **Drop it:** delete the `newversion` CNAME record. Cleaner.

## 4. Wait, then lock it in

- DNS can take anywhere from a few minutes to ~24h (usually well under an hour).
- Check progress: `dig www.maaind.com +short` should return `maaind-ltd.github.io`
  and the GitHub IPs. Or just load `https://www.maaind.com` in a private window.
- Once it serves correctly, go back to **Settings → Pages** and tick **Enforce HTTPS**.
  GitHub provisions the Let's Encrypt certificate for `www.maaind.com` automatically;
  this can take a few extra minutes after DNS is correct.

---

## If you'd rather make the bare apex the canonical address

Use `maaind.com` (no `www`) as the primary instead:

1. Change the `CNAME` file's contents to `maaind.com`.
2. Set the GitHub Pages custom domain to `maaind.com`.
3. Keep the four apex **A records** from step 3b.
4. Point `www` at GitHub too (CNAME `www` → `maaind-ltd.github.io`); GitHub will
   redirect `www` → apex.

## Sanity checklist

- [ ] `.nojekyll` present in repo root
- [ ] `CNAME` contains exactly `www.maaind.com`
- [ ] Pages source = `main` / root
- [ ] `www` CNAME → `maaind-ltd.github.io`
- [ ] Four apex A records → GitHub IPs
- [ ] Old Wix records for `@` and `www` removed
- [ ] HTTPS enforced once it loads cleanly
