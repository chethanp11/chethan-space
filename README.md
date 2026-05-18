# Chethan Space

A content-driven professional website for Chethan P covering technology leadership, AI and analytics practice, systems thinking, projects, and writing.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX content via file-based collections
- Static generation for content routes
- Dark mode
- SEO metadata, sitemap, robots, Open Graph image route

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.


### Start with port cleanup

Use the bundled script to start the app and automatically stop any process already listening on the selected port:

```bash
npm run dev:clean
```

Optional configuration:

```bash
PORT=3001 HOST=127.0.0.1 npm run dev:clean
MODE=prod npm run start:clean
```

## Validation

```bash
npm run typecheck
npm run build
```

## Content authoring

Add MDX files under:

```txt
content/projects
content/insights
content/frameworks
content/lab
```

Required frontmatter:

```yaml
title: Example Title
summary: One sentence summary.
tags: [Enterprise AI, Governance]
category: Enterprise AI
date: '2026-01-01'
status: Draft
featured: true
coverImage: /images/example.png
```

`date`, `status`, `featured`, and `coverImage` are optional depending on collection. Body content supports Markdown, code fences, GFM tables/lists, and reusable MDX components like `<Callout title="Note">...</Callout>`.

## Site configuration

Edit `lib/site.ts` for name, canonical URL, social links, email, and resume path.

Place a PDF resume at `public/resume/chethan-resume.pdf` or update the configured path.

## Deployment

Deploy to Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production URL for canonical links and sitemap output.

```bash
npm run build
```

The repository includes `vercel.json` with the Next.js framework setting.
