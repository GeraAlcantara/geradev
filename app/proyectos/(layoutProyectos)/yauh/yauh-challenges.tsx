"use client"
import IconBadge from "@/components/icons/iconBadge"
import { motion, useTransform, useScroll } from "motion/react"
import {
  HorizontalScrollRoot,
  HorizontalScrollSticky,
  HorizontalScrollWrapper,
} from "@/components/ui/horizontal-scroll-key-points"
import useHorizontalScroll from "@/hooks/use-horizontal-scroll"
import { useRef } from "react"
import KeyChallange from "@/components/ui/key-challange"

export default function YauhChallenges() {
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
      title: "Integración de mapas interactivos",
      description:
        "Implementé Google Maps API y PostGIS para permitir a los usuarios explorar propiedades en tiempo real. Fue un desafío técnico asegurarme de que el mapa fuera fluido y preciso.",
      icon: IconBadge,
    },
    {
      id: 2,
      title: "Diseño responsivo y accesibilidad",
      description:
        "Optimicé el diseño para móviles utilizando Flexbox, Grid y media queries. También implementé prácticas básicas de accesibilidad, como navegación por teclado y alt text en imágenes.",
      icon: IconBadge,
    },
    {
      id: 3,
      title: "Backend y autenticación",
      description:
        "Utilicé Supabase para manejar la autenticación y la base de datos PostgreSQL. Esto me permitió crear un sistema seguro y escalable.",
      icon: IconBadge,
    },
  ]

  return (
    <HorizontalScrollRoot ref={refSection}>
      <HorizontalScrollSticky>
        <HorizontalScrollWrapper>
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`border-foreground ${
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
              <KeyChallange {...item} />
            </motion.div>
          ))}
        </HorizontalScrollWrapper>
      </HorizontalScrollSticky>
    </HorizontalScrollRoot>
  )
}
