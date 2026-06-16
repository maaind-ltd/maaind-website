# Maaind website

Static site for **www.maaind.com** (currently also live at `newversion.maaind.com`).

> **Deploying / repointing the domain?** See **DEPLOY.md** in this folder for the
> full, current step-by-step (it supersedes the GitHub Pages notes below).

## Stack
Plain HTML + CSS + in-browser Babel/React. No build step. Drop the folder on any
static host and it works.

## Local preview
Run any static server in this folder, e.g.:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

(Do not just double-click `index.html` — Babel needs the files served over HTTP.)

## Deploying via GitHub Pages

1. Push these files to the `main` branch root of a public repo.
2. Repo → Settings → Pages → Source: `Deploy from a branch`, branch `main` / `/ (root)` → Save.
3. Add the custom domain in the same page: `newversion.maaind.com`.
4. In your DNS provider (Wix), add a CNAME record:
   - Host: `newversion`
   - Points to: `<your-org>.github.io`
5. Wait 5–60 min for DNS, then tick "Enforce HTTPS".

The `CNAME` file in this folder already pins the custom domain so GitHub Pages
keeps it across deploys.

## Files

| File | Purpose |
|---|---|
| `index.html` | Entry. Loads React/Babel and the JSX source files. |
| `styles.css` | Full design system + all five themes. |
| `components.jsx` | Shared visual components (waveform, radar, traces, etc.) |
| `sections.jsx` | Nav, hero, stats. |
| `sections-2.jsx` | Capabilities, fusion diagram, deployment. |
| `sections-3.jsx` | Use-cases, wearables, security, docs, CTA, footer. |
| `tweaks-panel.jsx` | Floating tweaks panel (only shown when host activates it). |
| `hero-face.png` | Hero CV-overlay subject. |
| `maaind_logo.png` | Wordmark. |
| `CNAME` | GitHub Pages custom-domain pin. |
| `.nojekyll` | Disables Jekyll processing — required for files with leading dots/dashes and for the JSX setup. |

## Editing copy

Source of truth for visible text lives in the three `sections*.jsx` files.
After editing, just refresh — Babel transpiles in the browser.
