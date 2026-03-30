import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/site"

interface ContactPayload {
  name?: string
  email?: string
  company?: string
  inquiryType?: string
  subject?: string
  message?: string
  website?: string
}

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload

  const name = sanitize(payload.name)
  const email = sanitize(payload.email)
  const company = sanitize(payload.company)
  const inquiryType = sanitize(payload.inquiryType)
  const subject = sanitize(payload.subject)
  const message = sanitize(payload.message)
  const website = sanitize(payload.website)

  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !message || !inquiryType) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    )
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL

  if (!resendApiKey || !contactEmail) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Contact delivery is not configured yet. Add RESEND_API_KEY and CONTACT_EMAIL.",
      },
      { status: 500 }
    )
  }

  const emailSubject = `[Medintegro] ${subject || inquiryType} — ${name}`
  const text = [
    `Inquiry type: ${inquiryType}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company / Facility: ${company || "Not provided"}`,
    `Subject: ${subject || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n")

  const html = `
    <h2>New Medintegro website inquiry</h2>
    <p><strong>Inquiry type:</strong> ${inquiryType}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company / Facility:</strong> ${company || "Not provided"}</p>
    <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
    <h3>Message</h3>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Medintegro Website <onboarding@resend.dev>",
      to: [contactEmail],
      reply_to: email,
      subject: emailSubject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    return NextResponse.json(
      {
        ok: false,
        error: "Email delivery failed.",
        details,
      },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks for reaching out to ${siteConfig.name}.`,
  })
}
