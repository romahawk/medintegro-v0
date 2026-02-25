"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
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
      <Button type="submit" size="lg" className="gap-2 self-start rounded-xl glow-cyan">
        {t("contact.form.submit")}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}
