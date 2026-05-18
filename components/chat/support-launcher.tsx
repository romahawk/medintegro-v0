"use client"

import Link from "next/link"
import { Mail, MessageCircle, MessagesSquare, Send, Stethoscope } from "lucide-react"
import { useCrispChat } from "@/components/chat/crisp-provider"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { CONTACT } from "@/lib/contact"
import { useLanguage } from "@/lib/i18n"

const copy = {
  ua: {
    trigger: "Контакт",
    triggerHint: "Допомога та контакти",
    title: "Зв'язок з Medintegro",
    description: "Швидко оберіть зручний канал для консультації щодо медичного проєкту.",
    whatsapp: "WhatsApp",
    email: "Email",
    contact: "Форма запиту",
    chat: "Онлайн-чат",
    chatUnavailable: "Чат скоро буде доступний",
  },
  en: {
    trigger: "Contact",
    triggerHint: "Help and contact",
    title: "Contact Medintegro",
    description: "Choose the most convenient channel to discuss your clinical infrastructure project.",
    whatsapp: "WhatsApp",
    email: "Email",
    contact: "Contact form",
    chat: "Live chat",
    chatUnavailable: "Live chat will be available soon",
  },
} as const

export function SupportLauncher() {
  const { locale } = useLanguage()
  const { enabled, openChat } = useCrispChat()
  const t = copy[locale]

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              type="button"
              size="lg"
              className="fixed bottom-6 right-6 z-50 h-auto rounded-full border border-white/15 bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.28)] transition-transform duration-200 hover:scale-[1.02] hover:bg-slate-900 dark:border-white/10 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-white"
              aria-label={t.triggerHint}
            >
              <MessageCircle className="size-4" />
              <span>{t.trigger}</span>
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={12}>
          {t.triggerHint}
        </TooltipContent>
      </Tooltip>

      <PopoverContent
        align="end"
        side="top"
        sideOffset={14}
        className="w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-border/70 bg-background/96 p-3 shadow-2xl backdrop-blur"
      >
        <div className="mb-3 rounded-2xl bg-muted/60 px-4 py-3">
          <div className="mb-1 flex items-center gap-2 text-foreground">
            <Stethoscope className="size-4" />
            <p className="text-sm font-semibold">{t.title}</p>
          </div>
          <p className="text-sm text-muted-foreground">{t.description}</p>
        </div>

        <div className="grid gap-2">
          <Button asChild variant="outline" className="h-auto justify-start rounded-2xl px-4 py-3">
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessagesSquare className="size-4" />
              <span>{t.whatsapp}</span>
            </a>
          </Button>

          <Button asChild variant="outline" className="h-auto justify-start rounded-2xl px-4 py-3">
            <a href={CONTACT.emailHref}>
              <Mail className="size-4" />
              <span>{t.email}</span>
            </a>
          </Button>

          <Button asChild variant="outline" className="h-auto justify-start rounded-2xl px-4 py-3">
            <Link href={CONTACT.contactPageHref}>
              <Send className="size-4" />
              <span>{t.contact}</span>
            </Link>
          </Button>

          <Button
            type="button"
            variant={enabled ? "default" : "secondary"}
            className="h-auto justify-start rounded-2xl px-4 py-3"
            onClick={openChat}
            disabled={!enabled}
          >
            <MessageCircle className="size-4" />
            <span>{enabled ? t.chat : t.chatUnavailable}</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
