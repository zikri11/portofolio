"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-lightblue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-heading">
            <span className="text-gradient">Kontak</span>
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-lightblue-100 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-lightblue-100 dark:bg-lightblue-900/30 flex items-center justify-center mr-4 text-lightblue-600 dark:text-lightblue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">naril4860@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-lightblue-100 dark:bg-lightblue-900/30 flex items-center justify-center mr-4 text-lightblue-600 dark:text-lightblue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+62 813 1585 7275</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-lightblue-100 dark:bg-lightblue-900/30 flex items-center justify-center mr-4 text-lightblue-600 dark:text-lightblue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Tasikmalaya, Jawa Barat, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
