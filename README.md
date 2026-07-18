# Chethan Puttegowda

A content-driven professional website for Chethan Puttegowda covering technology leadership, AI and analytics practice, systems thinking, projects, and thoughts.

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
npm run lint
npm test
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
featureImage: /images/example.png
```

`date`, `status`, `featured`, and `featureImage` are optional depending on collection. `coverImage` remains supported as a backwards-compatible image field. Body content supports Markdown, code fences, GFM tables/lists, and reusable MDX components like `<Callout title="Note">...</Callout>`.

## Site configuration

Edit `lib/site.ts` for name, canonical URL, social links, and email.

## Deployment

Deploy to Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production URL for canonical links and sitemap output.

Workshop submissions use `data/workshop-interest.json` during local development. For Vercel or another serverless deployment, set `WORKSHOP_INTEREST_WEBHOOK_URL` to a private HTTPS endpoint backed by durable storage. The webhook receives the validated submission record as JSON. If the variable is missing on Vercel, the API returns `503` rather than reporting a submission that was not persisted.

```bash
npm run build
```

The repository includes `vercel.json` with the Next.js framework setting.
