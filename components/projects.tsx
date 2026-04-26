"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projectsData = [
  {
    title: "WhatsApp Bot: Anjem.id Community",
    description: "Script bot WhatsApp otomatis yang dirancang untuk komunitas Anjem.id, membantu manajemen pesanan, informasi layanan, dan koordinasi antar driver/pelanggan secara real-time.",
    image: "/anjem.png?height=300&width=500",
    tags: ["Node.js", "JavaScript", "WhatsApp Web JS", "Automation"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Anjem.id: Fullstack Web Platform",
    description: "Pengembangan platform web utama Anjem.id mencakup sisi Frontend dan Backend menggunakan TypeScript untuk menciptakan sistem manajemen layanan transportasi yang terintegrasi dan efisien.",
    image: "/webanjem.png?height=300&width=500",
    tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Fullstack"],
    demoLink: "https://anjem.id",
    repoLink: "#",
    activeUsers: "4,000+",
  },
  {
    title: "Anjem.id: DevOps & Infrastructure",
    description: "Deployment dan konfigurasi infrastruktur server untuk platform Anjem.id, termasuk pengaturan VPS, web server, manajemen domain, serta implementasi lapisan keamanan menggunakan Cloudflare.",
    image: "/devops-anjem.jpg?height=300&width=500",
    tags: ["VPS", "Nginx", "Cloudflare", "DevOps", "Security"],
    demoLink: "https://anjem.id",
    repoLink: "#",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="text-gradient">Proyek Unggulan</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      width={500}
                      height={300}
                    />
                    {project.activeUsers && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg flex items-center gap-1.5 py-1 px-3">
                          <Users className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-bold">{project.activeUsers} Active Users</span>
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400 line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary dark:bg-primary/20 hover:bg-primary/20 border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Button variant="outline" size="sm" className="w-full rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="w-full rounded-full shadow-md hover:shadow-lg transition-all" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/projects">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base shadow-sm hover:shadow-md transition-all border-gray-200 dark:border-gray-800"
              >
                Lihat Semua Proyek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
