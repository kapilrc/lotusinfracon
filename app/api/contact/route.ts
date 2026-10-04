import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

interface ContactRequestBody {
  name: string
  company?: string
  phone: string
  email?: string
  equipment: string
  equipmentName?: string
  location?: string
  duration?: string
  details?: string
  honeypot?: string
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json()
    const {
      name,
      company = "",
      phone,
      email = "",
      equipment = "",
      equipmentName = "",
      location = "",
      duration = "",
      details = "",
      honeypot = "",
    } = body

    // 1. Anti-spam honeypot check (if filled by bot, silently return success)
    if (honeypot) {
      console.warn("[Contact API] Bot honeypot triggered. Ignoring submission.")
      return NextResponse.json({ success: true, message: "Inquiry received" })
    }

    // 2. Validate mandatory fields
    if (!name?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      )
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number." },
        { status: 400 }
      )
    }

    const machineTitle = equipmentName || equipment || "General Equipment Inquiry"

    // 3. SMTP Configuration
    const smtpHost = process.env.SMTP_HOST || "mail.hostedemail.com"
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10)
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465
    const smtpUser = process.env.SMTP_USER || "info@lotusinfracon.in"
    const smtpPass = process.env.SMTP_PASS

    // Primary receiver (can be comma-separated list of emails)
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@lotusinfracon.in"

    // 4. Fallback for Local Dev or when SMTP_PASS is not yet set
    if (!smtpPass) {
      console.warn(
        "⚠️ [Contact API] SMTP_PASS environment variable is not set! Email was NOT dispatched over network."
      )
      console.log("📝 [New Lead Details]:", {
        name,
        company,
        phone,
        email,
        equipment: machineTitle,
        location,
        duration,
        details,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: "Inquiry received (Development/Preview Mode - SMTP_PASS not set).",
      })
    }

    // 5. Create Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Resolve Tucows/HostedEmail wildcard certificate altnames (*.hostedemail.com)
        servername: smtpHost.endsWith("hostedemail.com") ? "mail.hostedemail.com" : undefined,
      },
      // Timeout settings for serverless functions
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    })

    // Cleaned phone for wa.me link
    const cleanPhoneDigits = phone.replace(/[^0-9]/g, "")
    const whatsappLink = `https://wa.me/91${cleanPhoneDigits.slice(-10)}?text=Hi%20${encodeURIComponent(
      name
    )},%20thank%20you%20for%20contacting%20Lotus%20Infracon%20regarding%20${encodeURIComponent(
      machineTitle
    )}.`

    // 6. Build High-Visibility HTML Email for Lotus Infracon Dispatch Team
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: #006061; color: #ffffff; padding: 24px 28px; }
          .header h1 { margin: 0 0 4px 0; font-size: 20px; font-weight: 700; }
          .header p { margin: 0; font-size: 13px; color: #e2e8f0; }
          .body { padding: 28px; }
          .badge { display: inline-block; background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
          .info-table td.label { width: 35%; color: #64748b; font-weight: 600; }
          .info-table td.value { width: 65%; color: #0f172a; font-weight: 700; }
          .highlight-box { background: #f8fafc; border-left: 4px solid #006061; padding: 16px; border-radius: 4px; margin-bottom: 24px; font-size: 14px; line-height: 1.5; color: #334155; }
          .actions { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
          .btn { display: inline-block; padding: 12px 20px; border-radius: 4px; text-decoration: none; font-weight: 700; font-size: 13px; text-align: center; }
          .btn-call { background: #006061; color: #ffffff !important; }
          .btn-whatsapp { background: #16a34a; color: #ffffff !important; }
          .btn-email { background: #475569; color: #ffffff !important; }
          .footer { background: #f8fafc; padding: 16px 28px; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚨 New Equipment Quote Inquiry</h1>
            <p>Submitted via lotusinfracon.in contact portal</p>
          </div>
          <div class="body">
            <span class="badge">Immediate Dispatch Lead</span>

            <table class="info-table">
              <tr>
                <td class="label">Contact Person</td>
                <td class="value">${name}</td>
              </tr>
              <tr>
                <td class="label">Mobile Number</td>
                <td class="value"><a href="tel:${phone}" style="color: #006061; text-decoration: underline;">${phone}</a></td>
              </tr>
              ${
                company
                  ? `<tr><td class="label">Company / Firm</td><td class="value">${company}</td></tr>`
                  : ""
              }
              ${
                email
                  ? `<tr><td class="label">Email Address</td><td class="value"><a href="mailto:${email}" style="color: #006061;">${email}</a></td></tr>`
                  : ""
              }
              <tr>
                <td class="label">Required Equipment</td>
                <td class="value" style="color: #006061;">${machineTitle}</td>
              </tr>
              ${
                location
                  ? `<tr><td class="label">Site Location</td><td class="value">${location}</td></tr>`
                  : ""
              }
              ${
                duration
                  ? `<tr><td class="label">Expected Duration</td><td class="value">${duration}</td></tr>`
                  : ""
              }
            </table>

            ${
              details
                ? `
                <div style="font-weight: 600; font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 8px;">
                  Project Requirements / Site Scope:
                </div>
                <div class="highlight-box">
                  ${details.replace(/\n/g, "<br/>")}
                </div>
              `
                : ""
            }

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 12px; color: #64748b; margin: 0 0 12px 0; font-weight: 600;">
                Quick Response Actions for Dispatch Team:
              </p>
              <div>
                <a href="tel:${phone}" class="btn btn-call" style="margin-right: 8px; margin-bottom: 8px;">📞 Call ${phone}</a>
                <a href="${whatsappLink}" target="_blank" class="btn btn-whatsapp" style="margin-right: 8px; margin-bottom: 8px;">💬 Chat on WhatsApp</a>
                ${
                  email
                    ? `<a href="mailto:${email}?subject=Re:%20Equipment%20Rental%20Quote%20-%20Lotus%20Infracon" class="btn btn-email">✉️ Reply Email</a>`
                    : ""
                }
              </div>
            </div>
          </div>
          <div class="footer">
            Lotus Infracon Fleet Operations • Office No. 303, Ackriti Chambers, Swargate, Pune • GSTIN: 27AADFL5741J1Z5
          </div>
        </div>
      </body>
      </html>
    `

    // Plain text alternative
    const textEmail = `
New Equipment Quote Request - Lotus Infracon

Contact Name: ${name}
Phone: ${phone}
Company: ${company || "N/A"}
Email: ${email || "N/A"}
Equipment: ${machineTitle}
Site Location: ${location || "N/A"}
Duration: ${duration || "N/A"}

Project Details:
${details || "No additional notes provided."}

---
Sent from lotusinfracon.in inquiry portal
    `.trim()

    // 7. Dispatch Email
    await transporter.sendMail({
      from: `"Lotus Infracon Website" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email && email.includes("@") ? email : undefined,
      subject: `🚨 New Equipment Quote Inquiry: ${machineTitle} (${name})`,
      text: textEmail,
      html: htmlEmail,
    })

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully sent. We will respond within 2 hours.",
    })
  } catch (error: any) {
    console.error("[Contact API Error]:", error)
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send message due to a connection issue. Please contact our dispatch hotline directly at 09011027909.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    )
  }
}
