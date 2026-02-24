import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
        <h1 className="text-4xl font-bold">Let us build something valuable</h1>
        <p className="max-w-2xl text-muted">
          Send a message with your context, timeline, and expected outcomes. I will reply as soon as possible.
        </p>
      </header>

      <ContactForm />
    </section>
  );
}
