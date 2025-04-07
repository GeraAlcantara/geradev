import CtaLink from "@/components/ui/ctaLink"
import Image from "next/image"
import IMGGera from "@/public/assets/proposito/gera_alcantara_cat.png"
import * as motion from "motion/react-client"

import {
  defaultContainerAnim,
  fadeIn,
  fadeSlideDown,
  slideSmfromLeft,
  slideXsfromLeft,
} from "@/lib/animations/variants"

export default function SectionRecluters() {
  return (
    <section
      className="w-full pt-16 bg-nB-green  pb-24 px-8 md:px-12 xl:px-24 text-nB-black border-y border-nB-black "
      id="introduccion"
    >
      {/* grid 1 col lg:2col */}
      <motion.div
        variants={defaultContainerAnim}
        initial="hidden"
        whileInView={"show"}
        viewport={{ amount: 0.4, once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 items-center "
      >
        <div className="relative flex items-center justify-center bg-nB-green sm:p-4 md:p-6 lg:p-8 2xl:p-16">
          <div className="w-full max-w-screen-sm">
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative "
            >
              <Image
                src={IMGGera}
                alt="Gera aka JaguarEk"
                className="will-change-auto -rotate-[4deg]  object-contain w-full"
                style={{
                  maskImage:
                    "linear-gradient(179deg, #000000 36%, transparent 100%)",
                }}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full w-full ">
          <div className="space-y-8 flex flex-col justify-between w-full">
            <motion.h2
              variants={fadeSlideDown}
              transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
              className="leading-none md:text-center text-6xl lg:text-left lg:text-7xl kanit font-medium text-balance "
            >
              Frontend con raíces creativas.
            </motion.h2>
            <div className="flex flex-col gap-4 text-xl lg:text-2xl text-balance">
              <motion.p variants={slideSmfromLeft}>
                Soy un desarrollador frontend con más de 6 años de experiencia.
                Mi camino es único: aprendí a programar a los 38 años mientras
                trabajaba como artista de gráficos en movimiento. Esta mezcla me
                permite resolver problemas desde ángulos tanto creativos como
                técnicos.
              </motion.p>

              <motion.p variants={slideSmfromLeft}>
                He diseñado aplicaciones web de alto rendimiento con React.js,
                Next.js y Node.js, priorizando la accesibilidad (WCAG 2.1 AA) y
                la experiencia del usuario.
              </motion.p>
            </div>
            <motion.div variants={slideXsfromLeft}>
              <CtaLink href="/sobre-mi" label="Conoce mi historia" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
