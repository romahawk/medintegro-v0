import type { Metadata } from "next"
import { staticPageMetadata } from "@/lib/seo"
import { ProjectsContent } from "./projects-content"

export const metadata: Metadata = staticPageMetadata("/projects")

export default function ProjectsPage() {
  return <ProjectsContent />
}
