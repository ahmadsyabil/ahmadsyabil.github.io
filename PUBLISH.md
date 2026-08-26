# Publishing to ahmadsyabil.github.io

Your site already lives at `github.com/ahmadsyabil/ahmadsyabil.github.io`. These steps replace
the old single-file site with this Next.js project and set up automatic deploys.

**Keeping the same URL matters** — `ahmadsyabil.github.io` is already printed on your resumes
and cover letters. Don't create a new repo.

---

## Before you start

- **Git installed.** Check with `git --version`. If not: https://git-scm.com/download/win
- **Test it locally once.** `npm run dev` → open http://localhost:3000 and click through every
  section. Publishing a site you haven't looked at is how the missing-profile-picture problem
  happened last time.

---

## Step 1 — Back up the old site (30 seconds)

The push in Step 3 overwrites the repo's history. If you want the old `index.html`, download it
first from `github.com/ahmadsyabil/ahmadsyabil.github.io` → click `index.html` → **Download raw
file**. Save it somewhere outside this folder.

You already have a copy at `LATEST BEST/PORTFOLIO WEBSITE/index.html`, so this is optional.

---

## Step 2 — Connect the folder to your repo

Open the project in VS Code, then `` Ctrl + ` `` for the terminal. Run these one at a time:

```powershell
git init
git add .
git commit -m "Replace portfolio with Next.js build"
git branch -M main
git remote add origin https://github.com/ahmadsyabil/ahmadsyabil.github.io.git
```

If `git remote add` says *"remote origin already exists"*, run this instead:

```powershell
git remote set-url origin https://github.com/ahmadsyabil/ahmadsyabil.github.io.git
```

---

## Step 3 — Push

```powershell
git push -u origin main --force
```

`--force` is required because your repo has the old site's history and this is a fresh start.
It **permanently replaces** what's on GitHub — that's the intent here, but it's why Step 1 exists.

You'll be asked to sign in to GitHub. A browser window handles it.

---

## Step 4 — Switch Pages to GitHub Actions

This is the step people miss, and without it nothing deploys.

1. Go to `github.com/ahmadsyabil/ahmadsyabil.github.io`
2. **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment** → **Source**, change *"Deploy from a branch"* to
   **"GitHub Actions"**

Your repo was previously set to "Deploy from a branch" — that's how the old static site worked.
The new setup builds the project first, so it needs the Actions source instead.

---

## Step 5 — Watch it build

Open the **Actions** tab. A workflow called *"Deploy portfolio"* starts automatically. It takes
about two minutes.

Green tick → your site is live at **https://ahmadsyabil.github.io**

Red cross → click into the run and read the failed step. Almost always it's a typo in a file
you edited after I handed it over.

---

## After the first deploy

Every future change is three commands:

```powershell
git add .
git commit -m "describe what changed"
git push
```

The site rebuilds itself. You never upload files by hand again — which is the whole point,
and the reason your profile picture went missing last time.

---

## Checking the link preview

After it's live, paste `https://ahmadsyabil.github.io` into
[LinkedIn's Post Inspector](https://www.linkedin.com/post-inspector/) to confirm the preview
card renders with your photo. LinkedIn caches aggressively, so if you ever change `og.jpg`,
re-run the inspector to force a refresh.

---

## Alternative: Vercel

If Git is giving you trouble, Vercel is genuinely easier — but you'd get a
`something.vercel.app` URL instead of the one already on your resumes.

1. Sign in at vercel.com with GitHub
2. **Add New → Project** → import the repo
3. Deploy (it detects Next.js automatically)

If you go this route, you can delete `output: 'export'` from `next.config.mjs` to get
Next's image optimisation back.

---

## Troubleshooting

**Site loads but has no styling or images.**
You're on a project repo, not a user site. Uncomment `basePath` and `assetPrefix` in
`next.config.mjs` and set both to `/<repo-name>`.

**`git push` rejected — "updates were rejected".**
You left off `--force`. See Step 3.

**Workflow fails at `npm ci`.**
`package-lock.json` wasn't committed. Run `git add package-lock.json`, commit and push.

**Everything deployed but the Resume button 404s.**
`public/Ahmad_Syabil_Resume.pdf` is missing or was renamed. The filename must match
`site.resumeHref` in `lib/data.ts`.
