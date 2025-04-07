import NeoMayaEmojiOh from "@/components/stickers/neo-maya-emoji-oh"

import CardMDC from "./cardMDC"
import CardLanding from "./cardLanding"
import CardYauh from "./cardYauh"
import CardDesign from "./cardDesign"
import * as motion from "motion/react-client"
import {
  defaultContainerAnim,
  fadeIn,
  scaleInCenter,
  slideXsfromRight,
} from "@/lib/animations/variants"
import { Variants } from "motion/react"
import CtaLink from "@/components/ui/ctaLink"

const containerBannerSection: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
}

export default function ProjectsBento() {
  return (
    <motion.section className="w-full  lg:my-14 2xl:my-24 " id="proyectos">
      {/* banner fadeIn */}
      <motion.div
        variants={containerBannerSection}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4, once: true }}
        transition={{ type: "tween", duration: 0.3, ease: "circOut" }}
        className=" bg-nB-purple p-4 lg:p-6 flex justify-center items-center lg:rounded-full border-y  border-nB-black max-w-3xl xl:max-w-5xl 2xl:w-6xl mx-auto h-80 bg-orange mb-16 lg:my-16 "
      >
        <motion.header
          variants={scaleInCenter}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "backInOut",
            delayChildren: 0.4,
          }}
          className="border-2 border-nB-black flex flex-col-reverse lg:flex-row w-full items-center justify-center lg:rounded-full h-full lg:border-4 bg-nB-blue"
        >
          <motion.hgroup
            variants={fadeIn}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-9xl font-black kanit "
          >
            <h2 className="text-nB-white drop-shadow-[2px_0px_black,-2px_0px_black,0px_2px_black,0px_-2px_black] ">
              Proyectos
            </h2>
          </motion.hgroup>
          <motion.div
            variants={slideXsfromRight}
            transition={{
              type: "tween",
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            }}
            className="w-32 md:w-40 lg:w-40 -rotate-6"
          >
            <NeoMayaEmojiOh />
          </motion.div>
        </motion.header>
      </motion.div>
      <motion.div
        variants={defaultContainerAnim}
        viewport={{ amount: 0.4, once: true }}
        initial="hidden"
        whileInView="show"
        className="px-8 lg:px-[4vw]"
      >
        <div className="max-w-4xl mx-auto text-center lg:py-16 2xl:mb-14 text-3xl lg:leading-tight lg:text-5xl text-balance">
          <motion.p
            variants={fadeIn}
            transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
          >
            Cada proyecto que emprendo es un reto que me lleva más allá de mis
            límites. No me conformo con lo simple; busco lo que me obliga a
            crecer.
          </motion.p>
        </div>
      </motion.div>

      <div className="py-16  flex justify-center items-center w-full">
        {/* grid  sm:landscape:h-auto lg:landscape:min-h-[calc(100vh-8rem)] 2xl:max-h-[calc(100vh-8rem)]*/}
        <div className="lg:px-5 2xl:px-24  m-auto grid grid-cols-2 grid-rows-12 lg:gap-3 lg:grid-cols-12 lg:grid-rows-3 h-[calc(100vh-64px)] landscape:h-auto lg:landscape:h-[calc(100vh-8rem)] lg:portrait:max-h-[700px] lg:max-h-[150vh] ">
          <article className="rounded-none lg:rounded-2xl row-span-4 lg:col-span-4 lg:row-span-2 transition ease-in-out group hover:shadow-nB-shadow/90 hover:shadow-[4px_4px_0] hover:-translate-x-1 hover:-translate-y-1">
            <CardMDC />
          </article>
          <article className="rounded-none lg:rounded-2xl row-span-4 lg:col-span-4 lg:row-span-2 transition ease-in-out group hover:shadow-nB-shadow/90 hover:shadow-[4px_4px_0] hover:-translate-x-1 hover:-translate-y-1 ">
            <CardLanding />
          </article>

          {/* Yauh */}
          <article className="row-start-1 col-start-1 col-span-2 row-span-6 rounded-none lg:rounded-2xl lg:col-span-4 lg:row-span-3 w-full transition ease-in-out group hover:shadow-nB-shadow/90 hover:shadow-[4px_4px_0] hover:-translate-x-1 hover:-translate-y-1">
            <CardYauh />
          </article>
          {/* content creation */}
          <article className="bg-nB-yellow dark:bg-nB-lime rounded-none lg:rounded-2xl row-span-2 col-span-2 lg:col-span-8 lg:row-span-1 transition-all  h-full group hover:shadow-nB-shadow/90 hover:shadow-[4px_4px_0] hover:-translate-x-1 hover:-translate-y-1 sm:max-h-72 lg:max-h-max">
            <CardDesign />
          </article>
        </div>
      </div>
    </motion.section>
  )
}
