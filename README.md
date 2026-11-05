# OWEN — Hard Techno DJ website

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn structure · framer-motion · lucide-react

```bash
npm install
npm run dev     # http://localhost:3000
```

## Edit your content
Everything (bio, booking email, BPM, tech rider, photos, upcoming dates) lives in `lib/site-config.ts`.
Search for `TODO` and replace the placeholders. Put your own press photos into `/public` and reference them as `/photo.jpg`.

## Structure
- `components/ui/` – shadcn-style UI primitives (`container-scroll-animation.tsx`)
- `components/site/` – page sections (nav, hero, about, sound, booking, contact)
- `components/hero-scroll-demo.tsx` – the original component demo, for reference
- `lib/utils.ts` – shadcn `cn()` helper
