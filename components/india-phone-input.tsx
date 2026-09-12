"use client"

import React from "react"
import { cn } from "@/lib/utils"

/**
 * Sanitizes any raw phone string into a valid 10-digit Indian mobile number.
 * Removes leading "+91", "91", trunk "0", spaces, hyphens, parentheses, and non-numeric chars.
 */
export function sanitizeIndiaPhone(input: string): string {
  if (!input) return ""
  let cleaned = input.trim()

  // Remove leading +91
  if (cleaned.startsWith("+91")) {
    cleaned = cleaned.slice(3)
  }

  // Strip all non-digit characters (spaces, dashes, parens, etc.)
  let digits = cleaned.replace(/\D/g, "")

  // If user pasted without + but included 91 prefix (12 digits starting with 91)
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2)
  } else if (digits.length > 10 && digits.startsWith("91")) {
    digits = digits.slice(2)
  } else if (digits.length === 11 && digits.startsWith("0")) {
    // Leading trunk 0 (e.g. 09876543210)
    digits = digits.slice(1)
  }

  // Strictly keep up to 10 digits
  return digits.slice(0, 10)
}

/**
 * Formats 10 digits as "XXXXX XXXXX" for enhanced readability.
 */
export function formatIndiaPhoneDisplay(digits: string): string {
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)} ${digits.slice(5, 10)}`
}

export interface IndiaPhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value: string
  onChange: (cleaned10Digits: string) => void
  containerClassName?: string
}

export const IndiaPhoneInput = React.forwardRef<HTMLInputElement, IndiaPhoneInputProps>(
  (
    {
      value,
      onChange,
      className,
      containerClassName,
      placeholder = "98765 43210",
      required = true,
      id,
      name = "phone",
      disabled,
      ...props
    },
    ref
  ) => {
    const rawDigits = sanitizeIndiaPhone(value)
    const displayValue = formatIndiaPhoneDisplay(rawDigits)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const sanitized = sanitizeIndiaPhone(e.target.value)
      onChange(sanitized)
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const pasted = e.clipboardData.getData("text")
      const sanitized = sanitizeIndiaPhone(pasted)
      onChange(sanitized)
    }

    return (
      <div className={cn("relative flex items-center w-full", containerClassName)}>
        {/* Country Code Prefix */}
        <div className="absolute left-0 top-0 bottom-0 px-3 bg-secondary/80 border-r border-border rounded-l-sm flex items-center gap-1.5 text-foreground text-sm font-semibold select-none pointer-events-none z-10">
          <span className="text-base leading-none" role="img" aria-label="India flag">
            🇮🇳
          </span>
          <span className="text-xs font-mono font-bold text-foreground/90 tracking-tight">+91</span>
        </div>

        {/* 10-Digit Mobile Input */}
        <input
          ref={ref}
          type="tel"
          id={id}
          name={name}
          inputMode="numeric"
          autoComplete="tel-national"
          required={required}
          disabled={disabled}
          value={displayValue}
          onChange={handleChange}
          onPaste={handlePaste}
          placeholder={placeholder}
          maxLength={11} // 10 digits + 1 separator space
          className={cn(
            "w-full bg-input border border-border rounded-sm pl-20 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary font-mono transition-colors",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

IndiaPhoneInput.displayName = "IndiaPhoneInput"
