import type React from "react"
import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"

const font = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Zikri Agustian",
              url: "https://muhammad-zikri.vercel.app",
              jobTitle: "Network Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universitas Siliwangi",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bandung",
                addressRegion: "Jawa Barat",
                addressCountry: "Indonesia",
              },
              sameAs: ["https://linkedin.com/in/muhammad-zikri-agustian", "https://github.com/muhammad-zikri"],
            }),
          }}
        />
      </head>
      <body className={cn(font.className, "antialiased min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
