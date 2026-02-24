"use client";

import { useState } from "react";

type ContactState = {
  loading: boolean;
  error: string | null;
  success: string | null;
};

const initialState: ContactState = {
  loading: false,
  error: null,
  success: null,
};

export function ContactForm() {
  const [state, setState] = useState<ContactState>(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ loading: true, error: null, success: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setState({ loading: false, error: data.error ?? "Could not send your message.", success: null });
        return;
      }

      setState({ loading: false, error: null, success: data.message ?? "Message sent." });
      form.reset();
    } catch {
      setState({ loading: false, error: "Network error. Please try again.", success: null });
    }
  }

  return (
    <form className="card space-y-4 p-6" onSubmit={handleSubmit}>
      <input
        className="w-full rounded-xl border border-slate-700 bg-slate-950/70 p-3 text-sm outline-none placeholder:text-slate-500 focus:border-accent"
        name="name"
        placeholder="Your name"
        required
      />
      <input
        className="w-full rounded-xl border border-slate-700 bg-slate-950/70 p-3 text-sm outline-none placeholder:text-slate-500 focus:border-accent"
        name="email"
        placeholder="Your email"
        type="email"
        required
      />
      <textarea
        className="w-full rounded-xl border border-slate-700 bg-slate-950/70 p-3 text-sm outline-none placeholder:text-slate-500 focus:border-accent"
        name="message"
        placeholder="Tell me about your project or role"
        rows={6}
        required
      />
      <button className="button-primary" type="submit" disabled={state.loading}>
        {state.loading ? "Sending..." : "Send message"}
      </button>
      {state.error ? <p className="text-sm text-rose-300">{state.error}</p> : null}
      {state.success ? <p className="text-sm text-emerald-300">{state.success}</p> : null}
    </form>
  );
}
