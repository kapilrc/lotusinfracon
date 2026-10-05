import { NextResponse } from "next/server"
import crypto from "crypto"

export const runtime = "nodejs"

// In-memory OTP cache for production (phone -> { hash, expiresAt, attempts })
// In serverless environments, state persists across warm invocations.
const otpStore = new Map<string, { hash: string; expiresAt: number; attempts: number }>()

function hashOtp(phone: string, otp: string, salt: string) {
  return crypto.createHmac("sha256", salt).update(`${phone}:${otp}`).digest("hex")
}

const OTP_SECRET = process.env.OTP_SECRET || process.env.SMTP_PASS || "lotus-infracon-otp-secret-key"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { action, phone, otp } = body

    const cleanPhone = (phone || "").replace(/[^0-9]/g, "").slice(-10)

    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      )
    }

    const fullPhone = `+91${cleanPhone}`

    // --------------------------------------------------------------------------
    // ACTION 1: SEND OTP
    // --------------------------------------------------------------------------
    if (action === "send") {
      // Rate limiting: check recent requests
      const existing = otpStore.get(cleanPhone)
      const now = Date.now()

      if (existing && existing.expiresAt - now > 4 * 60 * 1000) {
        // Less than 60 seconds since last generation
        return NextResponse.json(
          { success: false, error: "Please wait 60 seconds before requesting a new code." },
          { status: 429 }
        )
      }

      // Generate secure 6-digit numeric OTP
      const generatedOtp = crypto.randomInt(100000, 999999).toString()
      const hashed = hashOtp(cleanPhone, generatedOtp, OTP_SECRET)

      // Store with 10-minute expiry
      otpStore.set(cleanPhone, {
        hash: hashed,
        expiresAt: now + 10 * 60 * 1000,
        attempts: 0,
      })

      console.log(`[OTP Service] Generated 6-digit OTP for ${fullPhone}: ${generatedOtp}`)

      // Optional: Dispatch via configured SMS Gateway if API key is present
      // Support common SMS gateways (Fast2SMS / MSG91) if configured in environment
      if (process.env.FAST2SMS_API_KEY) {
        try {
          await fetch("https://www.fast2sms.com/dev/bulkV2", {
            method: "POST",
            headers: {
              authorization: process.env.FAST2SMS_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              variables_values: generatedOtp,
              route: "otp",
              numbers: cleanPhone,
            }),
          })
        } catch (smsErr) {
          console.error("[OTP SMS Error]:", smsErr)
        }
      }

      return NextResponse.json({
        success: true,
        message: "Verification code sent to your mobile number.",
      })
    }

    // --------------------------------------------------------------------------
    // ACTION 2: VERIFY OTP
    // --------------------------------------------------------------------------
    if (action === "verify") {
      if (!otp || String(otp).length !== 6) {
        return NextResponse.json(
          { success: false, error: "Please enter the complete 6-digit verification code." },
          { status: 400 }
        )
      }

      const stored = otpStore.get(cleanPhone)

      if (!stored) {
        return NextResponse.json(
          {
            success: false,
            error: "No active verification code found. Please click 'Resend OTP'.",
          },
          { status: 400 }
        )
      }

      if (Date.now() > stored.expiresAt) {
        otpStore.delete(cleanPhone)
        return NextResponse.json(
          {
            success: false,
            error: "This verification code has expired. Please request a new one.",
          },
          { status: 400 }
        )
      }

      if (stored.attempts >= 5) {
        otpStore.delete(cleanPhone)
        return NextResponse.json(
          {
            success: false,
            error: "Too many failed attempts. Please request a fresh OTP.",
          },
          { status: 429 }
        )
      }

      const candidateHash = hashOtp(cleanPhone, String(otp).trim(), OTP_SECRET)

      if (candidateHash !== stored.hash) {
        stored.attempts += 1
        return NextResponse.json(
          { success: false, error: "Incorrect 6-digit code. Please check and try again." },
          { status: 400 }
        )
      }

      // Success: consume the OTP so it cannot be reused
      otpStore.delete(cleanPhone)

      return NextResponse.json({
        success: true,
        verified: true,
        message: "Mobile number verified successfully.",
      })
    }

    return NextResponse.json({ success: false, error: "Invalid action." }, { status: 400 })
  } catch (err: any) {
    console.error("[OTP Route Error]:", err)
    return NextResponse.json(
      { success: false, error: "Server error handling verification code." },
      { status: 500 }
    )
  }
}
