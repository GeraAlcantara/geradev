import * as motion from "motion/react-client"
import { type Variants } from "motion/react"
import CtaLink from "@/components/ui/ctaLink"
import { fadeIn } from "@/lib/animations/variants"

export const containerPurposeAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}
export const titleAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
}

export const textAnimation: Variants = {
  hidden: {
    opacity: 0,
    translateY: "100%",
  },
  show: {
    opacity: 1,
    translateY: 0,
  },
}

export default function SectionPurpose() {
  return (
    <div className="pt-20 pb-24 px-8 md:px-12 2xl:py-56 border-y border-nB-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          viewport={{ amount: "some", once: true }}
          variants={containerPurposeAnimation}
          className="flex flex-col space-y-7 text-left md:items-center md:text-center"
        >
          <motion.h2
            variants={titleAnimation}
            transition={{ type: "tween", duration: 0.3, ease: "circOut" }}
            className=" font-black mb-6 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl "
          >
            Crea con propósito.
          </motion.h2>

          <motion.p
            variants={textAnimation}
            transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
            className=" 2xl:mb-24 lg:leading-tight text-balance text-lg md:text-2xl xl:text-3xl xl:leading-10"
          >
            Crea algo que te distinga, que aporte valor a los demás y que genere
            emociones auténticas. Porque las marcas que dejan huella son las que
            inspiran, conectan y transforman.
          </motion.p>
          <motion.div
            variants={fadeIn}
            transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
            className="  text-left md:items-center md:text-center"
          >
            <CtaLink href={"/proyectos"} label="Ver todos los Proyectos" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
