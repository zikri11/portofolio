"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar, Trophy } from "lucide-react"

const achievementsData = [
  {
    title: "Juara 3 UI/UX Dies Natalis",
    organization: "Informatika 2024 Universitas Siliwangi",
    date: "Maret 2024",
    focus: "Desain Antarmuka dan Pengalaman Pengguna",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "Training IT Support Google",
    organization: "SMK YPC Tasikmalaya",
    date: "4 Juni 2022",
    focus: "Cisco CCNA, Network Monitoring System, Google Cloude Platform, dan Fiber Optic",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "Juara 3 Bidang Lomba",
    organization: "Tingkat Kabupaten Tasikmalaya",
    date: "29-30 Juni 2022",
    focus: "Administrasi Sistem & Jaringan IT",
    icon: <Award className="w-6 h-6" />,
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-heading">
            <span className="text-gradient">Prestasi Lainnya</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-lightblue-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-lightblue-100 dark:bg-lightblue-900/30 flex items-center justify-center mr-4 text-lightblue-600 dark:text-lightblue-400">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-2">{item.organization}</p>

                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-lightblue-500 dark:text-lightblue-400" />
                  <span className="text-sm">{item.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Fokus:</span> {item.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
