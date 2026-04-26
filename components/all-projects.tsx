"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, ArrowLeft, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const allProjectsData = [
  {
    title: "SiDIGI",
    description: "Penerapan Kriptografi Elliptic Curve (ECC) dan SHA-3 untuk Tanda Tangan Digital pada Dokumen PDF",
    image: "/sidigi.png?height=300&width=500",
    tags: ["Node.js", "Laravel", "Network Security"],
    demoLink: "https://sidigi.fs-server.icu/login",
    repoLink: "https://github.com/zikri11/web-sidigi",
  },
  {
    title: "Prototype: AgriMart",
    description: "AgriMart – Aplikasi jual beli hasil kebun yang memudahkan Anda mendapatkan produk segar langsung dari petani.",
    image: "/agri.png?height=300&width=500",
    tags: ["Figma"],
    demoLink: "https://www.figma.com/proto/zLV7qZlhKvChF3SD9e7qgt/Untitled?page-id=0%3A1&node-id=8-761&viewport=1078%2C657%2C0.11&t=CHa66LJvnsgJ90Ei-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A676&show-proto-sidebar=1",
    repoLink: "https://github.com/zikri11/portfolio",
  },
  {
    title: "Prototype: MaungEdu",
    description: "Maung Edu adalah aplikasi pintar yang dirancang khusus untuk memudahkan kehidupan akademik mahasiswa. ",
    image: "/maungedu.png?height=300&width=500",
    tags: ["Figma", "Prototype"],
    demoLink: "https://www.figma.com/proto/uozw7rYdFD8PXBVU19kxsd/MaungEDU?page-id=0%3A1&node-id=120-1622&starting-point-node-id=120%3A1665&t=7VJr3nc4nNdhN9WP-1",
    repoLink: "https://github.com/zikri11/minishell",
  },
  {
    title: "MiShell",
    description: "MiShell adalah shell sederhana sebagai proyek pembelajaran Sistem Operasi yang menunjukkan pemahaman tentang interaksi antara pengguna, shell, dan kernel.",
    image: "/mishel.png?height=300&width=500",
    tags: ["C", "Ubuntu", "Operating system"],
    demoLink: "https://github.com/zikri11/minishell",
    repoLink: "https://github.com/zikri11/minishell",
  },
  {
    title: "Personal Homelab & DevOps Playground",
    description: "Sebuah proyek untuk membangun dan mengelola server pribadi dari awal menggunakan laptop dengan OS Ubuntu.",
    image: "/server.png?height=300&width=500",
    tags: ["Ubuntu", "Nginx", "Docker", "SSH", "Cloudflare"],
    demoLink: "#",
    repoLink: "#",
  },

  {
    title: "API: SiDIGI",
    description: "API-SIDIGI adalah sebuah sistem API (Application Programming Interface) yang dirancang untuk mengelola tanda tangan digital pada dokumen. ",
    image: "/api-sidigi.png?height=300&width=500",
    tags: ["Node.js", "SQLite", "crypto-js", "elliptic", "js-sha3"],
    demoLink: "https://sidigi.fs-server.icu/",
    repoLink: "https://github.com/zikri11/API-sidigi",
  },
  {
    title: "Prototype: Icon Taraju",
    description: "Dengan tampilan modern dan responsif, situs ini menonjolkan keindahan alam Taraju seperti kebun teh, air terjun, dan aktivitas outdoor seperti camping dan river tubing.",
    image: "/icontaraju.png?height=300&width=500",
    tags: ["Figma"],
    demoLink: "https://www.figma.com/proto/rYMZHXIrIJrPgNnxx80qtR/Untitled?page-id=0%3A1&node-id=100-77&viewport=1004%2C349%2C0.34&t=fO9ehTQU4rESza9M-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=100%3A77",
    repoLink: "#",
  },
  {
    title: "Prototype: Mie Mori",
    description: "Website ini menampilkan brand kuliner Mie Mori yang mengusung konsep noodle bar modern dengan menu khas Asia seperti ramen, tteokbokki, dan pangsit.",
    image: "/sd.png?height=300&width=500",
    tags: ["Figma"],
    demoLink: "https://www.figma.com/proto/8oHU9N7kRfSKJddq0JHPqs/Untitled?page-id=105%3A148&node-id=105-153&viewport=570%2C136%2C0.25&t=1wpSvp7L0dMcjhE5-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=105%3A153",
    repoLink: "#",
  },
  {
    title: "Prototype: Puma Shoe Store",
    description: "Desain antarmuka aplikasi mobile untuk katalog dan pembelian produk sepatu Puma, dirancang dengan estetika modern dan sistem navigasi yang efisien menggunakan Figma.",
    image: "/puma.jpeg?height=300&width=500",
    tags: ["Figma", "UI/UX Design", "Prototype"],
    demoLink: "#",
    repoLink: "#",
  },
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
  }
]

export default function AllProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-bold">
              <span className="text-gradient">Semua Proyek</span>
            </h1>
            <Link href="/#projects">
              <Button
                variant="outline"
                className="border-lightblue-300 dark:border-lightblue-700 hover:bg-lightblue-50 dark:hover:bg-gray-800 rounded-full px-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjectsData.map((project, index) => (
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
                    {(project as any).activeUsers && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-lg flex items-center gap-1.5 py-1 px-3">
                          <Users className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-bold">{(project as any).activeUsers} Active Users</span>
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
        </motion.div>
      </div>
    </section>
  )
} 