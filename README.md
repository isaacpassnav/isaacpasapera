# isaacpasapera · Portfolio 2026

Portfolio profesional construido con **Next.js + TypeScript + Tailwind + PostgreSQL (Supabase)**.

## Scaffold exacto (arranque hoy)

> Ejecuta estos comandos en la raíz del repo para levantar el MVP local.

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

## Próximo paso recomendado (hoy)

1. Conectar `app/api/contact/route.ts` a Supabase (`contact_messages`).
2. Reemplazar `lib/projects.ts` por contenido real (MDX o DB).
3. Crear UI del chat IA y conectar `app/api/ai/route.ts` con OpenAI.
4. Deploy en Vercel con variables de entorno.
