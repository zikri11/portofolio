"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const technologies = [
  { name: "Winbox", icon: "/winbox.jpeg?height=40&width=40" },
  { name: "Cisco", icon: "/cisco.png?height=40&width=40" },
  { name: "Figma", icon: "/figma.png?height=40&width=40" },
  { name: "Laravel", icon: "/laravel.png?height=40&width=40" },
  { name: "Ubuntu", icon: "/logoubuntu.png?height=40&width=40" },
  { name: "Debian", icon: "/debian.png?height=40&width=40" },
  
]

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">
            Technologies I <span className="text-gradient">Work With</span>
          </h3>

          <div className="relative overflow-hidden">
            <div className="flex space-x-12 animate-marquee">
              {technologies.concat(technologies).map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center min-w-[100px]">
                  <div className="w-16 h-16 bg-lightblue-50 dark:bg-gray-800 rounded-xl p-3 flex items-center justify-center mb-2 shadow-sm">
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
