"use client"

import { useState } from "react"
import { X, MessageSquare, Send } from "lucide-react"
import { IndiaPhoneInput } from "@/components/india-phone-input"

export function StickyInquiryBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-sm shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Open quick inquiry"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-sm font-semibold hidden sm:inline">
            Quick Inquiry
          </span>
        </button>
      )}

      {/* Inquiry panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-card border border-border rounded-sm shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-foreground font-semibold text-sm">
              Quick Inquiry
            </h3>
            <button
              onClick={() => {
                setIsOpen(false)
                setSubmitted(false)
              }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close inquiry"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {submitted ? (
            <div className="p-6 flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="h-5 w-5 text-primary" />
              </div>
              <p className="text-foreground font-semibold">Thank you!</p>
              <p className="text-muted-foreground text-sm">
                Our team will contact you within 2 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="p-4 flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-input border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />

              <IndiaPhoneInput
                value={phone}
                onChange={setPhone}
                required
                placeholder="98765 43210"
                className="py-2.5 text-sm"
              />

              <select
                required
                className="w-full bg-input border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  Equipment Type
                </option>
                <option value="concrete-pump">Concrete Pump</option>
                <option value="boom-pump">Boom Pump</option>
                <option value="scaffolding">Scaffolding</option>
                <option value="pipes">Pipes</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Project details (optional)"
                rows={2}
                className="w-full bg-input border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      )}
    </>
  )
}
