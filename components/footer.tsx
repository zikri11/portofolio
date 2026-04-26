"use client"

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 bg-white dark:bg-gray-950 border-t border-lightblue-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gradient">Muhammad Zikri Agustian</h2>
          </div>

          <div className="flex space-x-4 mb-6">
            <a
              href="https://github.com/zikri11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-lightblue-100 dark:bg-gray-800 hover:bg-lightblue-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 text-lightblue-600 dark:text-lightblue-400"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://id.linkedin.com/in/muhammad-zikri-agustian-559076281"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-lightblue-100 dark:bg-gray-800 hover:bg-lightblue-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 text-lightblue-600 dark:text-lightblue-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-lightblue-100 dark:bg-gray-800 hover:bg-lightblue-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 text-lightblue-600 dark:text-lightblue-400"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@muhammadzikri.com"
              className="w-10 h-10 rounded-full bg-lightblue-100 dark:bg-gray-800 hover:bg-lightblue-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 text-lightblue-600 dark:text-lightblue-400"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p className="flex items-center justify-center">
              &copy; {currentYear} Muhammad Zikri Agustian. 
            </p>
            <p className="mt-2">Dibangun dengan Next.js, Tailwind CSS, dan Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
