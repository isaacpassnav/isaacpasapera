# isaacpasapera · Portfolio 2026

Profesional portfolio build with the next stack technological **Next.js + TypeScript + Tailwind + PostgreSQL (Supabase)**.


```bash
# 1) Instalar dependencias
npm install

# 2) Correr entorno local
npm run dev

# 3) Verificar calidad básica
npm run lint
npm run typecheck

# 4) Build de producción
npm run build
npm run start
```

## Estructura base incluida

```txt
.
├─ app/
│  ├─ api/
│  │  ├─ ai/route.ts
│  │  └─ contact/route.ts
│  ├─ about/page.tsx
│  ├─ contact/page.tsx
│  ├─ projects/[slug]/page.tsx
│  ├─ projects/page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  └─ navbar.tsx
├─ lib/
│  └─ projects.ts
├─ docs/
│  ├─ architecture.md
│  └─ roadmap-3dias.md
└─ package.json
```
