import * as motion from "motion/react-client"
import IconWhatsapp from "@/components/icons/icon-whatsapp"
import CTASvg from "@/components/ui/CTASvg"

import { Safari } from "@/components/magicui/safari"
import IMGLanding from "@/public/assets/projects/xcatic/landingScrenshoot.jpg"
import IMGLandingMenuA from "@/public/assets/projects/xcatic/xcatic_menu_mobile_a.jpg"
import { scaleInCenter } from "@/lib/animations/variants"
import Image from "next/image"
import { FloatingPhone } from "@/components/ui/floating-phone"

const LandingComunicationVisuals = () => {
  return (
    <div className="grid place-content-center  p-12">
      <FloatingPhone>
        <ScreenWhatsappLanding />
      </FloatingPhone>
    </div>
  )
}

const ScreenWhatsappLanding = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* Example logo from logoispum */}
      <div className="group scale-95 hover:scale-100 transition-all  grid grid-cols-1 items-center justify-items-center text-nB-black">
        <div className="size-32 lg:size-48 col-start-1 row-start-1 spin12s">
          <CTASvg
            text="Book your kosher experience"
            className="uppercase text-nB-black"
          />
        </div>
        <div className="rounded-full size-20 lg:size-28 bg-nB-black/90 col-start-1 row-start-1 flex items-center justify-center group-hover:bg-nB-black text-nB-white">
          <div className="size-8 lg:size-14">
            <IconWhatsapp />
          </div>
        </div>
      </div>

      <div className="kanit antialiased absolute bottom-4 left-4 right-4 z-10 rounded-lg uppercase font-medium text-center text-nB-white backdrop-blur">
        Comunicación en un click
      </div>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-nB-purple" />
    </div>
  )
}

const LandingDesignVisuals = () => {
  return (
    <motion.div
      variants={scaleInCenter}
      transition={{
        type: "tween",
        duration: 0.4,
        ease: "backInOut",
      }}
      className="relative"
    >
      <Safari
        url="https://privatechef-landing-page.netlify.app/"
        className="size-full"
        imageSrc={IMGLanding.src}
      />
    </motion.div>
  )
}

const LandingMenuVisuals = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 max-h-[500px] place-content-center justify-items-center ">
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "backInOut",
        }}
        className="col-start-1 row-start-1 shadow-[6px_6px_0px]"
      >
        <Image
          src={IMGLandingMenuA}
          alt=""
          className="object-contain w-full h-full"
        />
      </motion.div>
    </div>
  )
}
export { LandingComunicationVisuals, LandingDesignVisuals, LandingMenuVisuals }
