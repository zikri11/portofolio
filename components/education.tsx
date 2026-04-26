"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, BookOpen, School } from "lucide-react"
import { useInView } from "react-intersection-observer"

const educationData = [
  {
    institution: "Universitas Siliwangi",
    degree: "Program Studi: Informatika",
    faculty: "Fakultas Teknik",
    date: "2024 - 2027",
    description: "Mempelajari pengembangan aplikasi web modern, algoritma, struktur data, dan kecerdasan buatan.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    institution: "SMK YPC Tasikmalaya",
    degree: "Jurusan: Teknik Komputer dan Jaringan",
    faculty: "",
    date: "2021 - 2023",
    description: "Mempelajari dasar-dasar jaringan komputer, konfigurasi perangkat jaringan, dan keamanan jaringan.",
    icon: <School className="w-6 h-6" />,
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-lightblue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-heading">
            <span className="text-gradient">Pendidikan</span>
          </h2>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="timeline-item"
              >
                <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-white/5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.institution}</h3>
                  <p className="text-primary font-medium mb-1">{item.degree}</p>
                  {item.faculty && <p className="text-gray-500 dark:text-gray-400 mb-4">{item.faculty}</p>}
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
