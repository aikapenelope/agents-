# Standart Agents

Landing page for **Standart Agents** — an enterprise AI agent development and maintenance agency. Built with Next.js 15, TypeScript, and Tailwind CSS v4. Optimized for Vercel deployment.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 | React framework (App Router, static generation) |
| [TypeScript](https://typescriptlang.org) | 5.7 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4.0 | Utility-first styling |
| [Lucide React](https://lucide.dev) | 0.468 | Icon library |
| [React](https://react.dev) | 19 | UI library |

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout, metadata, fonts (Inter)
│   └── page.tsx           # Main page — assembles all sections
└── components/
    ├── Navbar.tsx          # Fixed top nav, mobile hamburger menu
    ├── Hero.tsx            # Headline, CTAs, trust indicators
    ├── Services.tsx        # 6 service cards (development, maintenance, dashboards, RAG, security, consulting)
    ├── Frameworks.tsx      # OpenClaw, Google ADK, LangChain, LangGraph, CrewAI, RAG Pipelines
    ├── Models.tsx          # 12 AI model providers (OpenAI, Anthropic, Google, Meta, Groq, DeepSeek, etc.)
    ├── Integrations.tsx    # 60+ integrations across 6 categories
    ├── Process.tsx         # 5-step timeline (Discovery → Design → Build → Deploy → Maintain)
    ├── Pricing.tsx         # 3 tiers (Starter, Professional, Enterprise)
    ├── FAQ.tsx             # 10 expandable questions
    └── Footer.tsx          # CTA banner, link columns, copyright
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deploy to Vercel

The fastest way to deploy:

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Click **Deploy** — zero configuration needed

Vercel auto-detects Next.js and applies optimal settings. The project uses `output: "standalone"` in `next.config.ts` for efficient deployments.

Alternatively, deploy via the Vercel CLI:

```bash
npx vercel
```

## Sections Overview

- **Hero** — Gradient headline, animated badge, dual CTA buttons, trust indicators (SOC 2, 99.9% SLA, 50+ integrations, 24/7 monitoring)
- **Services** — Custom Agent Development, Maintenance & Optimization, Custom Dashboards, RAG Pipeline Engineering, Enterprise Security & Compliance, Strategy & Consulting
- **Frameworks** — OpenClaw, Google ADK, LangChain, LangGraph, CrewAI, RAG Pipelines (plus AutoGen, Semantic Kernel, Haystack, LlamaIndex)
- **AI Models** — Flagship: OpenAI, Anthropic, Google, Meta. Standard: Groq, DeepSeek, Kimi (Moonshot), GLM (Zhipu AI), Mistral, Cohere, xAI, Perplexity
- **Integrations** — 60+ across Messaging (WhatsApp, Telegram, Discord, Slack, Teams, Messenger, etc.), Google Workspace (Gmail, Calendar, Drive, Sheets, Docs, Meet, etc.), CRM & Sales (Salesforce, HubSpot, Stripe, Shopify, etc.), Productivity (Notion, Jira, Asana, Linear, etc.), Customer Support (Zendesk, Intercom, Freshdesk, etc.), Data & DevOps (PostgreSQL, Pinecone, Zapier, n8n, REST/GraphQL, etc.)
- **Process** — 5-step delivery: Discovery & Strategy, Design & Architecture, Build & Iterate, Deploy & Launch, Maintain & Evolve
- **Pricing** — Starter ($4,900 + $490/mo), Professional ($14,900 + $1,490/mo), Enterprise (Custom)
- **FAQ** — 10 questions covering agent types, timelines, models, RAG, integrations, code ownership, maintenance, security, dashboards, and frameworks
- **Footer** — Contact CTA, service/technology/company links

## Customization

- **Colors** — Edit CSS variables in `src/app/globals.css` (`--accent`, `--background`, `--surface`, etc.)
- **Content** — Each section is a self-contained component in `src/components/`. Edit the data arrays at the top of each file.
- **Pricing** — Update the `tiers` array in `src/components/Pricing.tsx`
- **Integrations** — Add/remove items in the `categories` array in `src/components/Integrations.tsx`
- **Models** — Update the `providers` array in `src/components/Models.tsx`

## License

[Apache License 2.0](LICENSE)
