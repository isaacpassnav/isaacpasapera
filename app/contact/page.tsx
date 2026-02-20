export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="text-muted">Escríbeme y te respondo para coordinar una llamada.</p>
      <form className="space-y-3 rounded-xl border border-slate-800 p-5" action="/api/contact" method="post">
        <input className="w-full rounded-md border border-slate-700 bg-transparent p-2" name="name" placeholder="Tu nombre" required />
        <input className="w-full rounded-md border border-slate-700 bg-transparent p-2" name="email" placeholder="Tu correo" type="email" required />
        <textarea className="w-full rounded-md border border-slate-700 bg-transparent p-2" name="message" placeholder="Tu mensaje" rows={5} required />
        <button className="rounded-lg bg-accent px-5 py-2.5 font-semibold text-slate-900" type="submit">Enviar</button>
      </form>
    </section>
  );
}
