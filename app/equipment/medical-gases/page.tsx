import { permanentRedirect } from "next/navigation"

// 308 rather than 307: the category listing now lives on the equipment page.
export default function MedicalGasesPage() {
  permanentRedirect("/equipment?category=monitoring")
}
