import type { Metadata } from "next"
import AllProjects from "@/components/all-projects"

export const metadata: Metadata = {
  title: "All Projects | Muhammad Zikri Agustian",
  description: "Complete collection of projects by Muhammad Zikri Agustian",
  keywords: "projects, portfolio, Muhammad Zikri Agustian, web development, network engineering",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <AllProjects />
    </main>
  )
} 