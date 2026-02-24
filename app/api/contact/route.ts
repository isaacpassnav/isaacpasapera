import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readPayload(req: Request): Promise<ContactPayload> {
  const contentType = req.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await req.json().catch(() => ({}))) as Partial<ContactPayload>;
    return {
      name: String(body.name ?? "").trim(),
      email: String(body.email ?? "").trim(),
      message: String(body.message ?? "").trim(),
    };
  }

  const formData = await req.formData();
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

export async function POST(req: Request) {
  const payload = await readPayload(req);

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!resendApiKey || !to) {
    return NextResponse.json({
      ok: true,
      message: "Message received (local mode). Configure RESEND_API_KEY and CONTACT_TO_EMAIL to deliver emails.",
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `New portfolio message from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return NextResponse.json({ error: "Email provider error", detail }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Message sent successfully." });
}
