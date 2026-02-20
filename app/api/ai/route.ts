import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const prompt = String(body?.prompt ?? "").trim();

  if (!prompt) {
    return NextResponse.json({ error: "Debes enviar un prompt" }, { status: 400 });
  }

  return NextResponse.json({
    answer:
      "Versión MVP: conecta este endpoint con OpenAI para responder preguntas sobre tu perfil, proyectos y experiencia.",
  });
}
