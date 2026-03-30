"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LoaderCircle, Send } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const { t } = useLanguage()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      inquiryType: formData.get("inquiryType"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error || "We could not send your message. Please try again."
        )
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We could not send your message. Please try again."
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass glow-cyan flex flex-col items-center gap-4 rounded-xl p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Send className="h-5 w-5 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{t("contact.form.success.title")}</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {t("contact.form.success.desc")}
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="mt-2 rounded-lg border-border/50 hover:border-primary/40">
          {t("contact.form.sendAnother")}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">{t("contact.form.name")}</Label>
          <Input id="name" name="name" placeholder={t("contact.form.name")} required className="rounded-lg bg-input border-border/50 focus:border-primary/50" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">{t("contact.form.company")}</Label>
          <Input id="company" name="company" placeholder={t("contact.form.company")} className="rounded-lg bg-input border-border/50 focus:border-primary/50" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">{t("contact.form.email")}</Label>
        <Input id="email" name="email" type="email" placeholder={t("contact.form.email")} required className="rounded-lg bg-input border-border/50 focus:border-primary/50" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="inquiryType">Inquiry Type</Label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          defaultValue=""
          className="h-10 rounded-lg border border-border/50 bg-input px-3 text-sm text-foreground focus:border-primary/50 focus:outline-none"
        >
          <option value="" disabled>
            Select inquiry type
          </option>
          <option value="Project consultation">Project consultation</option>
          <option value="Equipment sourcing">Equipment sourcing</option>
          <option value="Contractor partnership">Contractor partnership</option>
          <option value="Manufacturer / distributor partnership">
            Manufacturer / distributor partnership
          </option>
          <option value="Service & maintenance">Service & maintenance</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">{t("contact.form.subject")}</Label>
        <Input id="subject" name="subject" placeholder={t("contact.form.subject")} className="rounded-lg bg-input border-border/50 focus:border-primary/50" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("contact.form.message")}
          rows={5}
          required
          className="rounded-lg bg-input border-border/50 focus:border-primary/50"
        />
      </div>
      <div className="rounded-xl border border-border/50 bg-card/40 p-4 text-sm text-muted-foreground">
        Share your project stage, facility type, target rooms, and any brand or technical constraints.
        We typically respond within one business day.
      </div>
      {error && (
        <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="gap-2 self-start rounded-xl glow-cyan"
      >
        {submitting ? "Sending..." : t("contact.form.submit")}
        {submitting ? (
          <LoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
      </Button>
    </form>
  )
}
