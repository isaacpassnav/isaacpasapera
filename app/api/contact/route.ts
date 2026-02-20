import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Mensaje recibido (MVP sin DB aún)." });
}
