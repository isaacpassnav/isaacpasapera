export default function AboutPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">About</p>
        <h1 className="text-4xl font-bold">Engineering with product focus and delivery speed</h1>
      </header>

      <p className="max-w-3xl text-muted">
        I build full stack web products with a practical mindset: define measurable outcomes, choose
        maintainable architecture, and ship iterations quickly. I care about reliability, clean code,
        and communication quality across teams.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="card p-5">
          <h2 className="text-lg font-semibold">Core stack</h2>
          <p className="mt-2 text-sm text-muted">TypeScript, React, Next.js, Node.js, PostgreSQL.</p>
        </article>
        <article className="card p-5">
          <h2 className="text-lg font-semibold">What I optimize</h2>
          <p className="mt-2 text-sm text-muted">Performance, DX, scalable patterns, and UX clarity.</p>
        </article>
        <article className="card p-5">
          <h2 className="text-lg font-semibold">How I work</h2>
          <p className="mt-2 text-sm text-muted">Fast iteration, technical rigor, and clear documentation.</p>
        </article>
      </div>
    </section>
  );
}
