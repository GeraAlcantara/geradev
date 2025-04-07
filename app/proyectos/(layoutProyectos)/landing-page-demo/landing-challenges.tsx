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

export default function LandingChallenges() {
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
      title: "Un Desafío Creativo con Recursos Limitados",
      description:
        "Para resolverlo, adopté un enfoque visual impactante con tipografías limpias, una paleta de colores cuidada y elementos como íconos y gráficos, maximizando la estética profesional a pesar de los recursos limitados.",
      icon: IconBadge,
    },
    {
      id: 2,
      title: "Transmitiendo el Valor del Servicio",
      description:
        "Quería asegurarme de que, con solo un vistazo, el visitante entendiera claramente qué ofrecía el chef. Para lograrlo, utilicé tipografías limpias, jerarquías visuales claras y un diseño estructurado que guiara al usuario de manera intuitiva.",
      icon: IconBadge,
    },
    {
      id: 3,
      title: "Simplificando un Menú Complejo",
      description:
        "El menú incluía múltiples opciones para diferentes horarios de comida, lo que podía resultar abrumador. Resolví este desafío implementando un carrusel interactivo que organizara la información de manera clara y fácil de navegar.",
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
