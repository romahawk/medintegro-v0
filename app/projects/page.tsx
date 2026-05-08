import type { Metadata } from "next"
import { ProjectsContent } from "./projects-content"

export const metadata: Metadata = {
  title: "OR Integration Projects & Case Proof",
  description: "Selected operating room integration, surgical lighting, medical gas, and infrastructure projects delivered for hospitals and clinics across Ukraine.",
  alternates: { canonical: "https://www.medintegro.com.ua/projects" },
  openGraph: { url: "https://www.medintegro.com.ua/projects" },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
