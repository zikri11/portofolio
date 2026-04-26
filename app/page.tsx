import type { Metadata } from "next"
import Hero from "@/components/hero"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Achievements from "@/components/achievements"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"

export const metadata: Metadata = {
  title: "Muhammad Zikri Agustian | Portfolio",
  description:
    "Professional portfolio of Muhammad Zikri Agustian, specializing in Network Engineering, Web Programming, and Machine Learning",
  keywords:
    "Muhammad Zikri Agustian, Web Programming, Network Engineering, Machine Learning, Portfolio, Bandung, Indonesia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://muhammad-zikri.vercel.app",
    title: "Muhammad Zikri Agustian | Portfolio",
    description:
      "Professional portfolio of Muhammad Zikri Agustian, specializing in Network Engineering, Web Programming, and Machine Learning",
    siteName: "Muhammad Zikri Agustian Portfolio",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  )
}
