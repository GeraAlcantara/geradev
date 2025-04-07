import CtaLink from "@/components/ui/ctaLink"
import IMGIsometric from "@/public/assets/proposito/isometric_laptop_mockup.png"
import Image from "next/image"
import * as motion from "motion/react-client"
import { Variants } from "motion/react"
import { slideSmfromLeft } from "@/lib/animations/variants"
import {
  SectionCard,
  SectionCardContent,
  SectionCardFooter,
  SectionColumn,
  SectionMotionCardTitle,
  SectionTwoCols,
} from "@/components/ui/section-two-col"

/* rotate clockwise, scale up from center */
const laptopAnimation: Variants = {
  hidden: {
    rotate: -135,
    scale: 0,
  },
  show: {
    rotate: 0,
    scale: 1,
  },
}
export default function SectionSuccess() {
  return (
    <SectionTwoCols className="text-nB-black ">
      <SectionColumn className=" border-b lg:border-b-0 lg:border-r border-nB-black bg-nB-pink px-8 md:px-12 lg:px-8 xl:px-16 2xl:px-24">
        <SectionCard className="flex flex-col text-balance max-w-screen-sm ">
          <SectionMotionCardTitle title="Sin miedo al éxito" />
          <SectionCardContent>
            <motion.p
              variants={slideSmfromLeft}
              className="text-xl lg:text-2xl text-balance lg:text-left"
            >
              Creo que los límites los ponemos nosotros mismos. Mi enfoque es
              simple: aprender, crear y superar. No importa cuán complicado
              parezca un reto, siempre hay una manera de resolverlo.
            </motion.p>
          </SectionCardContent>
          <SectionCardFooter>
            <motion.div
              className="w-fit"
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <CtaLink href="/proyectos" label="Proyectos" />
            </motion.div>
          </SectionCardFooter>
        </SectionCard>
      </SectionColumn>
      <SectionColumn className="relative flex items-center justify-center bg-nB-yellow p-16">
        <div className="w-full max-w-screen-sm">
          <motion.div
            variants={laptopAnimation}
            transition={{ duration: 0.6, type: "tween", ease: "backOut" }}
            className="relative "
          >
            <Image
              src={IMGIsometric}
              alt=""
              className="will-change-auto object-contain w-full"
            />
          </motion.div>
        </div>
      </SectionColumn>
    </SectionTwoCols>
  )
}
