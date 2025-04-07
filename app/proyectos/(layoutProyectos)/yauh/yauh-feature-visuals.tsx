import * as motion from "motion/react-client"
import NeoMayaEmojiOh from "@/components/stickers/neo-maya-emoji-oh"
import IMGYauhSearchHeader from "@/public/assets/projects/yauh/busqueda_header.png"
import IMGYauhSearchCity from "@/public/assets/projects/yauh/busqueda_city.png"
import IMGYauhSearchType from "@/public/assets/projects/yauh/busqueda_type.png"
import IMGYauhSearchRage from "@/public/assets/projects/yauh/busqueda_range.png"
import IMGYauhMap from "@/public/assets/projects/yauh/map.jpg"
import IMGYauhMapCard from "@/public/assets/projects/yauh/map_card_cut.jpg"
import IMGYauhDetails from "@/public/assets/projects/yauh/detalle.png"
import IMGYauhCom_a from "@/public/assets/projects/yauh/comunicacion_1.png"
import IMGYauhCom_b from "@/public/assets/projects/yauh/comunicacion_2.png"
import IMGYauhDashboard_a from "@/public/assets/projects/yauh/dashboard_a.png"
import IMGYauhDashboard_b from "@/public/assets/projects/yauh/dashboard_b.png"
import IMGYauhDashboard_c from "@/public/assets/projects/yauh/dashboard_c.png"
import Image from "next/image"
import {
  fadeSlideSmUp,
  scaleInCenter,
  slideSmfromLeft,
  slideXsfromRight,
} from "@/lib/animations/variants"
import NeoMayaEmojiAhua from "@/components/stickers/neo-maya-emoji-ahua"

export function YauhVisualsSearch() {
  return (
    <div className="grid grid-cols-6 grid-rows-5 aspect-square h-full w-full max-h-[500px] gap-2 ">
      <motion.div
        variants={scaleInCenter}
        className="col-start-1 col-end-7 row-start-1 row-span-1 flex items-center justify-center"
      >
        <Image src={IMGYauhSearchHeader} alt="" />
      </motion.div>
      <motion.div
        variants={slideSmfromLeft}
        className="row-start-2 row-span-5 col-start-1 col-span-2 flex items-start justify-center h-full w-full pb-2"
      >
        <Image
          src={IMGYauhSearchCity}
          alt=""
          className="object-contain w-full h-full"
        />
      </motion.div>
      <motion.div
        variants={slideXsfromRight}
        className="col-start-3 col-span-4 row-start-2 row-span-2"
      >
        <Image
          src={IMGYauhSearchType}
          alt=""
          className="object-contain h-full w-full"
        />
      </motion.div>
      <motion.div
        variants={fadeSlideSmUp}
        transition={{ duration: 0.5, type: "tween", ease: "circOut" }}
        className="row-start-4 row-span-2 col-start-3 col-span-4"
      >
        <Image
          src={IMGYauhSearchRage}
          alt=""
          className="object-contain h-full w-full"
        />
      </motion.div>
      <div className="col-start-5 col-end-7 row-start-1 row-end-3 flex justify-center items-end">
        <motion.div
          variants={scaleInCenter}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "backInOut",
          }}
          className="size-28 -rotate-6"
        >
          <NeoMayaEmojiOh />
        </motion.div>
      </div>
    </div>
  )
}

export function YauhVisualsMap() {
  return (
    <div className="grid grid-cols-6 grid-rows-4 aspect-square h-full w-full max-w-[600px] max-h-[500px] gap-2 ">
      <div className="col-start-1 col-end-7 row-start-1 row-span-4">
        <motion.div
          variants={slideSmfromLeft}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="relative size-full "
        >
          <Image
            src={IMGYauhMap}
            alt=""
            className="object-cover shadow-nB-black shadow-[5px_5px_0px] rounded-2xl size-full "
          />
        </motion.div>
      </div>
      <div className="col-start-2 col-end-4 row-start-2 row-span-2 ">
        <motion.div
          variants={scaleInCenter}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "backInOut",
            delay: 0.7,
          }}
          className="relative flex size-full items-end "
        >
          <Image
            src={IMGYauhMapCard}
            alt=""
            className="object-contain size-fit rounded-sm mb-3"
          />
        </motion.div>
      </div>
    </div>
  )
}
export function YauhVisualsDetails() {
  return (
    <motion.div
      variants={scaleInCenter}
      transition={{
        type: "tween",
        duration: 0.4,
        ease: "backInOut",
      }}
      className="relative "
    >
      <Image
        src={IMGYauhDetails}
        alt=""
        className="object-contain w-auto max-h-[500px] rounded-sm"
      />
    </motion.div>
  )
}
export function YauhVisualsComunications() {
  return (
    <div
      className="flex pb-5 ml-10"
      //variants={scaleInCenter}
    >
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "backInOut",
        }}
        className="relative "
      >
        <Image
          src={IMGYauhCom_a}
          alt=""
          className="object-contain w-[250px] h-auto rounded-sm"
        />
      </motion.div>
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "backInOut",
        }}
        className="relative -translate-x-20 translate-y-5"
      >
        <Image
          src={IMGYauhCom_b}
          alt=""
          className="object-contain w-[250px] h-auto rounded-sm"
        />
      </motion.div>
    </div>
  )
}
export function YauhVisualsDashboard() {
  return (
    <div className="grid grid-cols-6 grid-rows-4 aspect-square h-full w-full max-h-[500px] gap-2 place-content-center justify-items-center">
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "backInOut",
        }}
        className="col-start-1 row-start-1 row-span-2 col-span-4 flex items-center justify-center"
      >
        <Image src={IMGYauhDashboard_a} alt="" />
      </motion.div>
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "backInOut",
        }}
        className="col-start-2 row-start-2 row-span-2 col-span-4 flex items-center justify-center"
      >
        <Image src={IMGYauhDashboard_b} alt="" />
      </motion.div>
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "backInOut",
        }}
        className="col-start-3 row-start-3 row-span-2 col-span-4 flex items-center justify-center"
      >
        <Image src={IMGYauhDashboard_c} alt="" />
      </motion.div>
      <div className="col-start-5 col-end-7 row-start-1 row-end-2 flex justify-center items-end">
        <motion.div
          variants={scaleInCenter}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "backInOut",
          }}
          className="size-28 -rotate-6"
        >
          <NeoMayaEmojiAhua />
        </motion.div>
      </div>
    </div>
  )
}
