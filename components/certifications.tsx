"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificationsData = [
  {
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "Diterbitkan: Mei 2025 Kedaluwarsa: Mei 2028",
    icon: <Award className="w-6 h-6" />,
    certificateLink: "https://id.linkedin.com/in/muhammad-zikri-agustian-559076281"
  },
  {
    title: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
    issuer: "Red Hat",
    date: "Diterbitkan: Mei 2025 Kedaluwarsa: Mei 2028",
    icon: <Award className="w-6 h-6" />,
    certificateLink: "https://www.credly.com/badges/9c0e9955-20d2-4b73-a483-c6b54f2afef7/public_url"
  },
  {
    title: "Pemanfaatan Algoritma Machine Learning untuk Investigasi Network Forensics",
    issuer: "Badan Kejuruan Informatika Persatuan Insinyur Indonesia",
    date: "Februari 2025",
    icon: <Award className="w-6 h-6" />,
    certificateLink: "https://id.linkedin.com/in/muhammad-zikri-agustian-559076281"
  },
  {
    title: "Web Programming",
    issuer: "Himpunan Informatika Universitas Siliwangi",
    date: "Juni 2024",
    icon: <Award className="w-6 h-6" />,
    certificateLink: "https://id.linkedin.com/in/muhammad-zikri-agustian-559076281"
  },
  {
    title: "Kompetensi Teknik Komputer Jaringan",
    issuer: "Urban Access",
    date: "Agustus 2023",
    icon: <Award className="w-6 h-6" />,
    certificateLink: "https://id.linkedin.com/in/muhammad-zikri-agustian-559076281"
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-lightblue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-heading">
            <span className="text-gradient">Sertifikasi</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-white/5"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{item.issuer}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-primary" />
                      <span className="text-xs">{item.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full h-8 w-8 ml-2" asChild>
                    <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
