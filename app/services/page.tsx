import { permanentRedirect } from "next/navigation"

// 308 rather than 307: /services is a legacy path that will never come back.
export default function ServicesRedirectPage() {
  permanentRedirect("/solutions")
}
