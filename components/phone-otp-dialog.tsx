"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { ShieldCheck, Loader2, AlertCircle } from "lucide-react"
import { auth, isFirebaseConfigured } from "@/lib/firebase"
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  type ConfirmationResult,
} from "firebase/auth"

interface PhoneOtpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  phone: string
  onVerified: () => Promise<void> | void
  onChangePhone: () => void
}

export function PhoneOtpDialog({
  open,
  onOpenChange,
  phone,
  onVerified,
  onChangePhone,
}: PhoneOtpDialogProps) {
  const [otp, setOtp] = React.useState("")
  const [sendingOtp, setSendingOtp] = React.useState(false)
  const [verifying, setVerifying] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const [resendCooldown, setResendCooldown] = React.useState(30)
  const [confirmationResult, setConfirmationResult] =
    React.useState<ConfirmationResult | null>(null)

  // Feature toggle: Only run client-side reCAPTCHA if explicitly enabled
  const useRecaptcha = process.env.NEXT_PUBLIC_RECAPTCHA_ENABLE === "true"

  // Countdown timer for Resend OTP
  React.useEffect(() => {
    if (!open) return
    if (resendCooldown <= 0) return

    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [open, resendCooldown])

  // Clean 10-digit number and format E.164 (+91XXXXXXXXXX)
  const cleanDigits = phone.replace(/[^0-9]/g, "").slice(-10)
  const formattedPhone = `+91 ${cleanDigits.slice(0, 5)} ${cleanDigits.slice(5)}`
  const e164Phone = `+91${cleanDigits}`

  // Function to send OTP (either via Firebase reCAPTCHA or internal secure OTP API)
  const triggerSendOtp = React.useCallback(async () => {
    setErrorMessage(null)
    setOtp("")
    setResendCooldown(30)

    if (cleanDigits.length !== 10) {
      setErrorMessage("Please provide a valid 10-digit Indian mobile number.")
      return
    }

    try {
      setSendingOtp(true)

      // ----------------------------------------------------------------------
      // OPTION A: RECAPTCHA EXPLICITLY ENABLED -> Use Firebase Phone Auth
      // ----------------------------------------------------------------------
      if (useRecaptcha && isFirebaseConfigured && auth) {
        // Use static or existing container
        let verifier = (window as any).recaptchaVerifier
        if (!verifier) {
          verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            size: "invisible",
            callback: () => {},
            "expired-callback": () => {
              console.warn("[PhoneOtp] reCAPTCHA token expired.")
            },
          })
          ;(window as any).recaptchaVerifier = verifier
        }

        const confirmation = await signInWithPhoneNumber(auth, e164Phone, verifier)
        setConfirmationResult(confirmation)
        return
      }

      // ----------------------------------------------------------------------
      // OPTION B: RECAPTCHA DISABLED (Default) -> Use Direct OTP Service
      // ----------------------------------------------------------------------
      const response = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "send",
          phone: e164Phone,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send verification code.")
      }
    } catch (err: any) {
      console.error("[OTP Dispatch Error]:", err)

      if (err.code === "auth/invalid-phone-number") {
        setErrorMessage("Invalid phone number format. Please check your 10-digit mobile number.")
      } else if (err.code === "auth/too-many-requests") {
        setErrorMessage("Too many OTP requests. Please wait a few minutes before trying again.")
      } else if (err.code === "auth/quota-exceeded") {
        setErrorMessage("Daily SMS quota reached. Please call our dispatch hotline directly.")
      } else if (err.code === "auth/invalid-app-credential") {
        setErrorMessage(
          "reCAPTCHA app verification failed. Please browse at http://127.0.0.1:3000 and ensure 'Phone' is enabled under Firebase Console > Authentication > Sign-in method."
        )
      } else {
        setErrorMessage(
          err.message || "Failed to send SMS OTP. Please ensure your mobile network is reachable."
        )
      }
    } finally {
      setSendingOtp(false)
    }
  }, [cleanDigits, e164Phone, useRecaptcha])

  // Send OTP when dialog opens
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        triggerSendOtp()
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setOtp("")
      setErrorMessage(null)
      setConfirmationResult(null)
    }
  }, [open, triggerSendOtp])

  // Handle Verify Action
  const handleVerifyOtp = async (codeToVerify?: string) => {
    const code = codeToVerify || otp
    if (code.length !== 6) {
      setErrorMessage("Please enter the complete 6-digit code received on your mobile.")
      return
    }

    setVerifying(true)
    setErrorMessage(null)

    try {
      // 1. If Firebase confirmationResult is active
      if (confirmationResult) {
        await confirmationResult.confirm(code)
        await onVerified()
        onOpenChange(false)
        return
      }

      // 2. Direct server-side OTP Verification
      const response = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "verify",
          phone: e164Phone,
          otp: code,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Incorrect verification code. Please try again.")
      }

      await onVerified()
      onOpenChange(false)
    } catch (err: any) {
      console.error("[OTP Verification Error]:", err)
      if (err.code === "auth/invalid-verification-code") {
        setErrorMessage("Incorrect 6-digit OTP. Please re-check the SMS code.")
      } else if (err.code === "auth/code-expired") {
        setErrorMessage("This verification code has expired. Please click 'Resend OTP'.")
      } else {
        setErrorMessage(err.message || "Verification failed. Please check the code and try again.")
      }
    } finally {
      setVerifying(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 bg-card border-border">
        <DialogHeader className="flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-1">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <DialogTitle className="text-xl font-bold text-foreground">
            Verify Mobile Number
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground max-w-xs">
            We sent a 6-digit verification code to{" "}
            <strong className="text-foreground font-semibold">{formattedPhone}</strong>.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-5 my-3">
          {/* OTP 6-digit input box */}
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => {
                setOtp(value)
                if (value.length === 6) {
                  handleVerifyOtp(value)
                }
              }}
              disabled={verifying || sendingOtp}
            >
              <InputOTPGroup className="gap-1.5 sm:gap-2">
                <InputOTPSlot index={0} className="w-10 h-12 text-base font-bold bg-input border-border" />
                <InputOTPSlot index={1} className="w-10 h-12 text-base font-bold bg-input border-border" />
                <InputOTPSlot index={2} className="w-10 h-12 text-base font-bold bg-input border-border" />
                <InputOTPSlot index={3} className="w-10 h-12 text-base font-bold bg-input border-border" />
                <InputOTPSlot index={4} className="w-10 h-12 text-base font-bold bg-input border-border" />
                <InputOTPSlot index={5} className="w-10 h-12 text-base font-bold bg-input border-border" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Invisible reCAPTCHA Anchor Container */}
          <div id="recaptcha-container" />

          {errorMessage && (
            <div className="w-full p-3 rounded-sm bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Action Button */}
          <div className="w-full flex flex-col gap-3">
            <button
              type="button"
              disabled={otp.length !== 6 || verifying || sendingOtp}
              onClick={() => handleVerifyOtp()}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-sm text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed shadow-sm"
            >
              {verifying ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Verifying Code...</span>
                </>
              ) : (
                <span>Verify &amp; Dispatch Quote</span>
              )}
            </button>

            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
              <button
                type="button"
                onClick={onChangePhone}
                className="hover:text-foreground underline cursor-pointer"
              >
                Change mobile number
              </button>

              <button
                type="button"
                disabled={resendCooldown > 0 || sendingOtp}
                onClick={triggerSendOtp}
                className="inline-flex items-center gap-1 hover:text-foreground disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed font-medium"
              >
                {sendingOtp ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : resendCooldown > 0 ? (
                  <span>Resend OTP in {resendCooldown}s</span>
                ) : (
                  <span className="underline text-primary font-bold">Resend OTP</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
