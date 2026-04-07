import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const DEFAULT_QWICKREPAIR_EMAIL = "qwickrepair@gmail.com";
const DEFAULT_FROM_NAME = "Qwickrepair Solutions";

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseBoolean(value, defaultValue = false) {
  if (value == null || value === "") {
    return defaultValue;
  }

  return String(value).toLowerCase() === "true";
}

function createTransportOptions() {
  const smtpHost = process.env.QWICKREPAIR_SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.QWICKREPAIR_SMTP_PORT || 587);
  const smtpSecure = parseBoolean(process.env.QWICKREPAIR_SMTP_SECURE, smtpPort === 465);
  const smtpUser = process.env.QWICKREPAIR_SMTP_USER || DEFAULT_QWICKREPAIR_EMAIL;
  const smtpPass = String(process.env.QWICKREPAIR_SMTP_PASS || "").replaceAll(" ", "");

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  return {
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const service = body.service?.trim() || "General Enquiry";
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const house = body.house?.trim() || "Not provided";
    const address = body.address?.trim() || "Not provided";
    const details = body.details?.trim() || "Not provided";

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const transportOptions = createTransportOptions();
    const smtpUser = process.env.QWICKREPAIR_SMTP_USER || DEFAULT_QWICKREPAIR_EMAIL;
    const toEmail = process.env.QWICKREPAIR_TO_EMAIL || DEFAULT_QWICKREPAIR_EMAIL;
    const fromEmail = process.env.QWICKREPAIR_FROM_EMAIL || DEFAULT_QWICKREPAIR_EMAIL;
    const fromName = process.env.QWICKREPAIR_FROM_NAME || DEFAULT_FROM_NAME;

    if (!transportOptions || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          code: "EMAIL_UNAVAILABLE",
          error:
            "We are unable to send your request online right now. Please call or WhatsApp Qwickrepair and we will help you directly.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport(transportOptions);

    const safeName = escapeHtml(name);
    const safeService = escapeHtml(service);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeHouse = escapeHtml(house);
    const safeAddress = escapeHtml(address);
    const safeDetails = escapeHtml(details).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[${service}] New quote request from ${name}`,
      text: [
        "Qwickrepair Solutions has received a new message.",
        "",
        `Service Request: ${service}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Flat/House No.: ${house}`,
        `Address: ${address}`,
        "",
        "Details:",
        details,
        "",
        "Reply to this email to respond.",
      ].join("\n"),
      html: `
        <div style="background:#f4f4f4;padding:32px 20px;font-family:Arial,sans-serif;color:#111827;">
          <div style="max-width:560px;margin:0 auto;background:#ffffff;padding:32px;border-radius:4px;">
            <h1 style="margin:0 0 28px;font-size:24px;line-height:1.4;">
              Qwickrepair Solutions<br />has received a new message.
            </h1>

            <p style="margin:0 0 12px;"><strong>Service Request</strong><br />${safeService}</p>
            <p style="margin:0 0 12px;"><strong>Name</strong><br />${safeName}</p>
            <p style="margin:0 0 12px;"><strong>Email</strong><br />${safeEmail}</p>
            <p style="margin:0 0 12px;"><strong>Phone</strong><br />${safePhone}</p>
            <p style="margin:0 0 12px;"><strong>Flat/House No.</strong><br />${safeHouse}</p>
            <p style="margin:0 0 12px;"><strong>Address</strong><br />${safeAddress}</p>
            <p style="margin:0 0 12px;"><strong>Details</strong><br />${safeDetails}</p>

            <p style="margin:28px 0 0;"><strong>Reply to this email to respond.</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error.message ||
          "We could not send your request right now. Please call or WhatsApp Qwickrepair and we will help you directly.",
      },
      { status: 500 }
    );
  }
}
