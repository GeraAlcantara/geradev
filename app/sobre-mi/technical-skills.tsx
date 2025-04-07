"use client"
import IconBadge from "@/components/icons/iconBadge"
import { motion, useTransform, useScroll } from "motion/react"
import {
  HorizontalScrollRoot,
  HorizontalScrollSticky,
  HorizontalScrollWrapper,
} from "@/components/ui/horizontal-scroll-key-points"
import { useRef } from "react"
import useHorizontalScroll from "@/hooks/use-horizontal-scroll"

import KeyChallange from "@/components/ui/key-challange"
export default function TechnicalSkills() {
  const refSection = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: refSection,
  })
  const isHorizontalScroll = useHorizontalScroll()
  const transformsX = [
    useTransform(scrollYProgress, [0, 0], ["0%", "0%"]),
    useTransform(scrollYProgress, [0, 0.4], ["1%", "-65%"]),
    useTransform(scrollYProgress, [0.1, 0.8], ["0%", "-120%"]),
  ]
  const data = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Desde vanilla CSS y JavaScript framework-agnóstico hasta tecnologías modernas como React, Next.js, Astro Build (Astro.js), Svelte, TypeScript, SASS y Tailwind CSS. Utilizo JSDoc en archivos JavaScript para incorporar tipado estático y autocompletado, aprovechando las ventajas de TypeScript sin migrar completamente a TypeScript. Este enfoque garantiza aplicaciones web rápidas, accesibles, optimizadas y fáciles de mantener, sin comprometer la escalabilidad del proyecto.",
      icon: IconBadge,
    },
    {
      id: 2,
      title: "Optimización de Performance",
      description:
        "Uso SSR, SSG, ISR, Streaming & Suspense, Arquitectura de Islas y técnicas como code splitting, lazy loading y compresión de imágenes en formatos JPG, PNG y WebP para reducir tiempos de carga. Priorizo HTML semántico para mejorar legibilidad y SEO. Verifico el rendimiento con Lighthouse, asegurando métricas clave: First Contentful Paint, Largest Contentful Paint y Cumulative Layout Shift. Este enfoque no solo mejora la experiencia del usuario, sino que también contribuye a un mejor posicionamiento en buscadores.",
      icon: IconBadge,
    },
    {
      id: 3,
      title: "Accesibilidad Web",
      description:
        "Implemento estándares WCAG 2.2 AA, ARIA landmarks y navegación por teclado para garantizar experiencias digitales inclusivas. Además, diseño estructuras semánticas en HTML que no solo mejoran la usabilidad y el SEO, sino que también aseguran compatibilidad con tecnologías de asistencia. Utilizo herramientas como WAVE, Lighthouse, NVDA y JAWS para verificar y optimizar la accesibilidad de cada proyecto, garantizando que todos los usuarios, independientemente de sus necesidades, puedan interactuar sin barreras.",
      icon: IconBadge,
    },
  ]
  return (
    <HorizontalScrollRoot
      ref={refSection}
      className="bg-[#fffaf5] dark:bg-nB-black"
    >
      <HorizontalScrollSticky>
        <HorizontalScrollWrapper className="">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`border-foreground  ${
                isHorizontalScroll && index !== 0 ? "border-l" : ""
              }`}
              style={
                isHorizontalScroll && index !== 0
                  ? { x: transformsX[index] }
                  : {}
              }
              whileInView={
                isHorizontalScroll ? {} : { opacity: [1, 1], y: [80, 0] }
              }
              viewport={{ amount: "some" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Server */}
              <KeyChallange
                {...item}
                bgClass="bg-[#fffaf5] dark:bg-nB-black"
                iconClass="text-foreground"
              />

              {/* <CardKeyPoint {...item} /> */}
            </motion.div>
          ))}
        </HorizontalScrollWrapper>
      </HorizontalScrollSticky>
    </HorizontalScrollRoot>
  )
}
