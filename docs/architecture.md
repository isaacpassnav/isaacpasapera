# Arquitectura propuesta · Portfolio Isaac

## 1) Decisión de arquitectura

### Opción elegida: Next.js + Supabase (PostgreSQL)

**Resumen:**
- Un solo proyecto para frontend y backend ligero.
- Escalabilidad suficiente para crecer a SaaS personal si lo deseas.
- Productividad alta para un deadline de 3 días.

## 2) Criterios de decisión

- **Tiempo de entrega:** extremadamente corto.
- **Performance:** SSR/SSG híbrido para SEO y velocidad.
- **Mantenibilidad:** TypeScript + estructura clara de dominio.
- **Costo inicial:** bajo (tiers gratuitos razonables).
- **Evolución:** posibilidad de agregar admin panel, blog, IA, analytics custom.

## 3) Comparativa rápida de base de datos

### PostgreSQL (recomendado ✅)
- Relacional y robusto.
- Excelente para portfolio + formularios + CRM personal.
- Compatible con Prisma/Drizzle y Supabase.
- Escalable para features futuras.

### MongoDB
- Flexible para documentos.
- Menor fricción inicial si todo es JSON.
- Menos ideal si después necesitas relaciones complejas o reporting SQL.

### MySQL
- Válido y rápido.
- Menos ventajas si ya piensas usar Supabase (que gira alrededor de Postgres).

## 4) Servicios sugeridos

- **Hosting app:** Vercel.
- **DB + Auth + Storage:** Supabase.
- **Email transaccional (contact form):** Resend.
- **Monitoring:** Sentry.
- **Analytics:** Vercel Analytics o PostHog.
- **IA:** OpenAI API con ruta server (`/api/ai`).

## 5) Módulos funcionales

1. **Landing module**
   - Hero, CTA, badges tech, social links.
2. **Projects module**
   - Listado + detalle por slug + tags.
3. **Experience module**
   - Timeline laboral/educativa.
4. **Contact module**
   - Form validado (zod), guarda en DB y opcionalmente envía email.
5. **AI module**
   - Chat limitado a contexto de tu perfil.

## 6) Esquema inicial de DB (MVP)

- `profile` (id, name, role, bio, location, avatar_url, resume_url)
- `projects` (id, slug, title, summary, description, repo_url, live_url, featured, created_at)
- `project_tech` (id, project_id, tech_name)
- `experience` (id, company, role, start_date, end_date, description)
- `contact_messages` (id, name, email, message, created_at)
- `ai_logs` (id, session_id, question, answer, created_at) [opcional]

## 7) Seguridad y buenas prácticas

- Variables secretas en `.env.local` y provider secrets.
- Rate limiting en `/api/contact` y `/api/ai`.
- Sanitización/validación con zod.
- Si usas Supabase con datos sensibles: habilitar RLS.

## 8) Estrategia de deploy

### Etapa 1 (hoy)
- Deploy automático de rama principal en Vercel.

### Etapa 2
- Preview deployments por PR.
- Entornos separados (dev/prod) en Supabase.

## 9) ¿Laragon entra en el flujo?

Sí, pero como entorno local alternativo si prefieres stack PHP/MySQL. Para este portfolio con Next.js no es obligatorio. Si te acomoda Laragon para manejo de servicios locales, úsalo solo como soporte; el core aquí será Node + Next + Supabase.
