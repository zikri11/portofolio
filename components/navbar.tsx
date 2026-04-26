"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Home, User, Briefcase, BookOpen, Award, Mail, Code, Layers } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Beranda", href: "#hero", icon: <Home className="w-4 h-4 mr-2" /> },
  { name: "Proyek", href: "#projects", icon: <Code className="w-4 h-4 mr-2" /> },
  { name: "Pengalaman", href: "#experience", icon: <Briefcase className="w-4 h-4 mr-2" /> },
  { name: "Pendidikan", href: "#education", icon: <BookOpen className="w-4 h-4 mr-2" /> },
  { name: "Sertifikasi", href: "#certifications", icon: <Award className="w-4 h-4 mr-2" /> },
  { name: "Kontak", href: "#contact", icon: <Mail className="w-4 h-4 mr-2" /> },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-card shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold text-gradient">
              MZA
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium flex items-center transition-all duration-300",
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10 dark:bg-primary/20"
                      : "text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </nav>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 border-lightblue-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-lightblue-600" />
              )}
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="mr-2 border-lightblue-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-lightblue-600" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="border-lightblue-200 dark:border-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card border-t border-lightblue-100 dark:border-gray-800"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block py-2 px-4 rounded-lg text-base font-medium flex items-center transition-all duration-300",
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10 dark:bg-primary/20"
                      : "text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    closeMenu()
                  }}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
