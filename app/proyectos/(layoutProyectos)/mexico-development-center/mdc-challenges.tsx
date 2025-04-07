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

export default function MdcChallenges() {
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
      title: "Diseño modular y flexible",
      description:
        "El sitio debía ser modular para adaptarse a diferentes tipos de contenido, como cursos, artículos de blog y formularios de contacto.",
      icon: IconBadge,
    },
    {
      id: 2,
      title: "Accesibilidad y rendimiento",
      description:
        "Implementé prácticas de accesibilidad y optimización para garantizar que el sitio fuera usable en cualquier dispositivo y cumpliera con estándares modernos.",
      icon: IconBadge,
    },
    {
      id: 3,
      title: "Captcha personalizado",
      description:
        "Desarrollé un captcha customizado para evitar bots en el formulario de contacto, lo que fue un desafío técnico interesante.",
      icon: IconBadge,
    },
  ]
  return (
    <HorizontalScrollRoot ref={refSection} className="">
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
              <KeyChallange {...item} />
            </motion.div>
          ))}
        </HorizontalScrollWrapper>
      </HorizontalScrollSticky>
    </HorizontalScrollRoot>
  )
}
