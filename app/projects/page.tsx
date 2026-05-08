import type { Metadata } from "next"
import { ProjectsContent } from "./projects-content"

export const metadata: Metadata = {
  title: {
    absolute: "Projects | Medical Infrastructure & OR Integration Cases",
  },
  description:
    "Selected Medintegro projects in operating room integration, surgical infrastructure, medical equipment installation, and healthcare technology implementation.",
  alternates: { canonical: "https://www.medintegro.com.ua/projects" },
  openGraph: {
    url: "https://www.medintegro.com.ua/projects",
    title: "Projects | Medical Infrastructure & OR Integration Cases",
    description:
      "Selected Medintegro projects in operating room integration, surgical infrastructure, medical equipment installation, and healthcare technology implementation.",
  },
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
