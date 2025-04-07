import type { Metadata } from "next"
import { Geist_Mono, Kanit, Hanken_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import "./globals.css"

import LenisScrollProvider from "@/provider/lenis-provider"
import { ContactDialogProvider } from "@/provider/contact-dialog-provider"

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800", "900"],
})

export const metadata: Metadata = {
  title: "Jaguarek",
  description:
    "Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. Explora mi portafolio y descubre mis proyectos más recientes.",
  openGraph: {
    title: "Jaguarek",
    description:
      "Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. Explora mi portafolio y descubre mis proyectos más recientes.",
    url: "https://jaguarek.com",
    images: [
      {
        url: "https://jaguarek.com/images/og-image.png",
        width: 1280,
        height: 640,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaguarek",
    description:
      "Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. Explora mi portafolio y descubre mis proyectos más recientes.",
    images: ["https://jaguarek.com/images/og-image.png"],
  },
  alternates: {
    canonical: "https://jaguarek.com",
  },
  keywords: [
    "desarrollador web",
    "portafolio",
    "tecnología",
    "creatividad",
    "innovación",
  ],
  authors: [
    {
      name: "Jaguarek",
      url: "https://jaguarek.com",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${kanit.variable} ${geistMono.variable} ${hankenGrotesk.variable} antialiased font-[family-name:var(--font-hanken-grotesk)]`}
      >
        <LenisScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ContactDialogProvider>
              <Header />
              {children}
              <Footer />
            </ContactDialogProvider>
          </ThemeProvider>
        </LenisScrollProvider>
      </body>
    </html>
  )
}
