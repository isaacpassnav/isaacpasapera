import { NextResponse } from "next/server";

type OpenAIResponse = {
  output_text?: string;
  output?: Array<{
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
};

function extractOutputText(payload: OpenAIResponse): string {
  if (payload.output_text && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  const text = payload.output
    ?.flatMap((item) => item.content ?? [])
    .filter((entry) => entry.type === "output_text" && typeof entry.text === "string")
    .map((entry) => entry.text?.trim() ?? "")
    .filter(Boolean)
    .join("\n");

  return text || "I could not generate an answer right now.";
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { prompt?: string };
  const prompt = String(body.prompt ?? "").trim();

  if (!prompt) {
    return NextResponse.json({ error: "Please send a prompt." }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";

  if (!apiKey) {
    return NextResponse.json({
      answer:
        "AI endpoint is running in local mode. Add OPENAI_API_KEY to generate model-based answers.",
    });
  }

  const systemPrompt =
    "You are the portfolio assistant for Isaac Pasapera, a full stack developer. Keep answers concise, professional, and focused on engineering capabilities, projects, stack, and collaboration style.";

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_output_tokens: 220,
      input: [
        {
          role: "system",
          content: [{ type: "input_text", text: systemPrompt }],
        },
        {
          role: "user",
          content: [{ type: "input_text", text: prompt }],
        },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return NextResponse.json({ error: "OpenAI request failed", detail }, { status: 502 });
  }

  const data = (await response.json()) as OpenAIResponse;
  const answer = extractOutputText(data);

  return NextResponse.json({ answer });
}
