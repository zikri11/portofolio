"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experienceData = [
  {
    position: "Fullstack Developer & VPS Monitoring",
    company: "Anjem.id",
    logo: "/anjem.png",
    type: "Freelance / Project",
    period: "April 2026 - Sekarang",
    location: "Remote",
    skills: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "VPS Monitoring"],
    description: "Membangun dan mengelola platform Anjem.id secara fullstack, serta bertanggung jawab atas monitoring performa dan keamanan server VPS.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    position: "Guru UI/UX Designer",
    company: "SMK YPC TASIKMALAYA",
    logo: "/smk.png",
    type: "Honor",
    period: "Juli 2025 - Sekarang",
    location: "Tasikmalaya, Jawa Barat, Indonesia",
    skills: ["UI/UX Design", "Figma", "Mentoring"],
    description: "Mengajar dan membimbing siswa dalam memahami prinsip UI/UX design serta pengaplikasiannya menggunakan tools industri seperti Figma.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    position: "Technician",
    company: "PT. ARTHAGUNA",
    logo: "/arthaguna.png",
    type: "Magang",
    period: "Mei 2023 - Juli 2023 (3 bulan)",
    location: "Cigalontang, Jawa Barat, Indonesia",
    skills: ["Jaringan Komputer"],
    description: "Melakukan instalasi dan konfigurasi jaringan komputer, serta troubleshooting masalah jaringan.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    position: "Technician",
    company: "Plasa Telkom Singaparna",
    logo: "/telkom.png",
    type: "Magang",
    period: "Juli 2022 - Oktober 2022 (4 bulan)",
    location: "Tasikmalaya, Jawa Barat, Indonesia",
    skills: ["Network Engineering", "Jaringan Komputer"],
    description:
      "Membantu dalam implementasi dan pemeliharaan infrastruktur jaringan, serta memberikan dukungan teknis.",
    icon: <Briefcase className="w-6 h-6" />,
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-lightblue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-heading">
            <span className="text-gradient">Pengalaman Kerja</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-white/5 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex-shrink-0 shadow-sm p-1">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://ui-avatars.com/api/?name=" + item.company + "&background=random";
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {item.position}
                      </h3>
                      <p className="text-primary font-semibold text-sm">{item.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-500 dark:text-gray-400 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-primary" />
                      {item.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
