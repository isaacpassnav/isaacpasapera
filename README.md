# Isaac Pasapera Portfolio (2026)

Production-oriented portfolio built with **Next.js + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment variables

Create `.env.local` with:

```bash
# AI assistant endpoint
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini

# Contact form email delivery via Resend
RESEND_API_KEY=
CONTACT_TO_EMAIL=you@yourdomain.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>

# Optional: better GitHub API rate limits
GITHUB_TOKEN=
```

Notes:
- If `OPENAI_API_KEY` is missing, `/api/ai` returns a local-mode fallback message.
- If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` is missing, `/api/contact` returns a local-mode success message without sending an email.

## API routes

- `POST /api/ai`: AI assistant for portfolio Q&A.
- `POST /api/contact`: Contact form handler with Resend integration.

## Core structure

```txt
.
|-- app/
|   |-- api/
|   |   |-- ai/route.ts
|   |   `-- contact/route.ts
|   |-- about/page.tsx
|   |-- contact/page.tsx
|   |-- projects/[slug]/page.tsx
|   |-- projects/page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- ask-ai.tsx
|   |-- contact-form.tsx
|   `-- navbar.tsx
|-- lib/
|   |-- github.ts
|   `-- projects.ts
`-- README.md
```
