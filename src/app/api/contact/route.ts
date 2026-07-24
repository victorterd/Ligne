import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "Bouhabibfelix@gmail.com";
const FROM_EMAIL = "Ligne Verticale <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 4000;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const {
    name,
    email,
    phone,
    projectType,
    message,
    company, // honeypot: legitimate visitors never fill this hidden field
  } = body as Record<string, unknown>;

  if (typeof company === "string" && company.trim() !== "") {
    // Silently pretend success to bots without sending anything.
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email) ||
    name.length > 200 ||
    message.length > MAX_LENGTH
  ) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const phoneStr = typeof phone === "string" ? phone.slice(0, 60) : "";
  const projectTypeStr =
    typeof projectType === "string" ? projectType.slice(0, 120) : "";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "email_not_configured", detail: "RESEND_API_KEY is not set" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phoneStr && `Phone: ${phoneStr}`,
    projectTypeStr && `Project type: ${projectTypeStr}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Ligne Verticale — new message from ${name}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      // TEMPORARY: surfacing the raw Resend error to the browser to make
      // diagnosing the current setup issue easier. Remove `detail` once
      // sending is confirmed working.
      return NextResponse.json(
        { error: "send_failed", detail: JSON.stringify(error) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "send_failed", detail }, { status: 500 });
  }
}
