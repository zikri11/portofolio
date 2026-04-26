"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[128px] -z-10 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" />

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Available for Freelance
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                Hi, I'm <br />
                <span className="text-gradient">Muhammad Zikri</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 h-16">
                <TypeAnimation
                  sequence={["System & Network Engineer", 2000, "UI/UX Designer", 2000, "Fullstack Developer", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-lg leading-relaxed">
                Bersemangat dalam membangun infrastruktur jaringan yang kuat dan menciptakan solusi web inovatif dengan fokus pada pengalaman pengguna, keamanan, dan performa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Hubungi Saya
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Unduh CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative group" style={{ width: "420px", height: "420px" }}>
              {/* Glow di belakang foto */}
              <div className="absolute inset-8 bg-gradient-to-tr from-primary to-cyan-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

              {/* Foto Profil */}
              <div className="absolute inset-8 rounded-[2.5rem] overflow-hidden glass-card p-2">
                <img
                  src="/pro.png?height=400&width=400"
                  alt="Muhammad Zikri Agustian"
                  className="object-cover w-full h-full rounded-[2rem]"
                  width={400}
                  height={400}
                />
              </div>

              {/* Figma - kiri atas */}
              <motion.div
                className="absolute top-2 left-2 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-700 z-20"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                title="Figma"
              >
                <svg viewBox="0 0 38 57" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M9.5 47.5A9.5 9.5 0 0 1 9.5 28.5H19V47.5A9.5 9.5 0 0 1 9.5 47.5Z" fill="#0ACF83"/>
                  <path d="M9.5 28.5A9.5 9.5 0 0 1 9.5 9.5H19V28.5Z" fill="#FF7262"/>
                  <path d="M19 9.5H28.5A9.5 9.5 0 0 1 28.5 28.5H19Z" fill="#F24E1E"/>
                  <path d="M28.5 9.5A9.5 9.5 0 1 1 19 0H28.5Z" fill="#FF7262"/>
                </svg>
              </motion.div>

              {/* Linux - kanan atas */}
              <motion.div
                className="absolute top-0 right-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-700 z-20"
                animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                title="Linux"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F5A623" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8-.4.4-.7.9-.9 1.4C5.7 13.2 5 14.9 5 16.5c0 2.5 1.5 4.5 3.5 5.5H15.5c2-1 3.5-3 3.5-5.5 0-1.6-.7-3.3-1.4-4.3-.2-.5-.5-1-.9-1.4C17.5 9.8 18 8.5 18 7c0-2.5-2.5-5-6-5zm0 2c2.2 0 4 1.8 4 4s-1.8 3-4 3-4-1.8-4-3 1.8-4 4-4zm-2 8.5c.4.3.8.5 1.2.6l-.5 1.4H10l-.5-2zm4 0l-.5 2h-1.7l-.5-1.4c.4-.1.8-.3 1.2-.6zM9 17h6c.5 0 1 .5 1 1s-.5 1-1 1H9c-.5 0-1-.5-1-1s.5-1 1-1z"/>
                </svg>
              </motion.div>

              {/* Cloud - kanan bawah */}
              <motion.div
                className="absolute bottom-4 right-0 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-700 z-20"
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                title="Cloudflare"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 10.2c-.4-3.4-3.3-6.2-6.8-6.2-2.7 0-5.1 1.6-6.3 4C3.6 8.4 2 10.2 2 12.5 2 15 4 17 6.5 17h11.8c2 0 3.7-1.6 3.7-3.7 0-1.7-1.2-3.1-2.7-3.5z" fill="#F38020"/>
                  <path d="M14.9 9.8H6.2c-.2 0-.3.1-.3.3l-.4 1.4c0 .2.1.4.3.4h9.4c.2 0 .3-.1.3-.3l.4-1.4c0-.2-.2-.4-.4-.4zM13.5 12.5H4.8c-.2 0-.3.1-.3.3l-.4 1.4c0 .2.1.4.3.4h9.4c.2 0 .3-.1.3-.3l.4-1.4c0-.2-.2-.4-.4-.4z" fill="#FBAD41"/>
                </svg>
              </motion.div>

              {/* Cisco - kiri bawah */}
              <motion.div
                className="absolute bottom-2 left-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-700 z-20"
                animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                title="Cisco"
              >
                <svg viewBox="0 0 80 50" className="w-9 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="20" width="10" height="15" rx="5" fill="#1BA0D8"/>
                  <rect x="14" y="12" width="10" height="26" rx="5" fill="#1BA0D8"/>
                  <rect x="28" y="6" width="10" height="38" rx="5" fill="#1BA0D8"/>
                  <rect x="42" y="12" width="10" height="26" rx="5" fill="#1BA0D8"/>
                  <rect x="56" y="20" width="10" height="15" rx="5" fill="#1BA0D8"/>
                  <rect x="70" y="24" width="10" height="8" rx="4" fill="#1BA0D8"/>
                </svg>
              </motion.div>

              {/* Winbox / MikroTik - atas tengah */}
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-700 z-20"
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
                title="MikroTik Winbox"
              >
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="10" fill="#E8300B"/>
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="monospace">MT</text>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  )
}
