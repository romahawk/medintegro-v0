import { redirect } from "next/navigation"

export default function MedicalGasesPage() {
  redirect("/equipment?category=monitoring")
}
