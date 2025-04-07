import * as motion from "motion/react-client"
import { containerPurposeAnimation } from "../(inicio)/section_purpose/section-purpose"
import {
  fadeIn,
  textAnimation,
  titleAnimation,
} from "@/lib/animations/variants"
export default function MoreProjectsHeader() {
  return (
    <div className="max-w-5xl mx-auto mb-4 md:mb-8 lg:mb-10 xl:mb-14">
      <motion.header
        initial="hidden"
        whileInView={"show"}
        viewport={{ amount: 0.4, once: true }}
        variants={containerPurposeAnimation}
        className="flex flex-col space-y-7 text-left md:items-center md:text-center"
      >
        <motion.h2
          variants={titleAnimation}
          transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
          className="kanit font-black mb-6 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl "
        >
          ¿Quieres Ver Más?
        </motion.h2>
        <motion.p
          variants={textAnimation}
          transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
          className=" lg:leading-tight text-balance text-lg md:text-2xl xl:text-3xl xl:leading-10"
        >
          Estos son solo algunos ejemplos de lo que puedo hacer. Mi portafolio
          está lleno de proyectos únicos que combinan diseño, motion graphics y
          desarrollo frontend para resolver desafíos creativos y técnicos.
          ¡Explora más y encuentra la inspiración que necesitas!
        </motion.p>
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.4 }}
          className="w-fit h-fit "
        ></motion.div>
      </motion.header>
    </div>
  )
}
