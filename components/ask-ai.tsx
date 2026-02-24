"use client";

import { useState } from "react";

type AiState = {
  loading: boolean;
  error: string | null;
  answer: string;
};

const initialState: AiState = {
  loading: false,
  error: null,
  answer: "",
};

export function AskAi() {
  const [prompt, setPrompt] = useState("");
  const [state, setState] = useState<AiState>(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!prompt.trim()) {
      setState({ ...initialState, error: "Please write a question first." });
      return;
    }

    setState({ loading: true, error: null, answer: "" });

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = (await response.json()) as { error?: string; answer?: string };

      if (!response.ok) {
        setState({ loading: false, error: data.error ?? "Request failed.", answer: "" });
        return;
      }

      setState({ loading: false, error: null, answer: data.answer ?? "No answer available." });
    } catch {
      setState({ loading: false, error: "Network error. Try again.", answer: "" });
    }
  }

  return (
    <section className="card p-6">
      <h2 className="text-xl font-semibold">Ask About Me</h2>
      <p className="mt-2 text-sm text-muted">
        Ask about projects, stack, engineering style, or collaboration preferences.
      </p>

      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <textarea
          className="w-full rounded-xl border border-slate-700 bg-slate-950/70 p-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-accent"
          placeholder="Example: How do you approach building a scalable MVP?"
          rows={4}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button className="button-primary" type="submit" disabled={state.loading}>
          {state.loading ? "Generating..." : "Ask AI"}
        </button>
      </form>

      {state.error ? <p className="mt-4 text-sm text-rose-300">{state.error}</p> : null}
      {state.answer ? <p className="mt-4 text-sm leading-relaxed text-slate-200">{state.answer}</p> : null}
    </section>
  );
}
