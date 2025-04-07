import * as motion from "motion/react-client"
import { type Variants } from "motion/react"
import IconWhatsapp from "@/components/icons/icon-whatsapp"
import CTASvg from "@/components/ui/CTASvg"
import { cn } from "@/lib/utils"
import { fadeSlideUp, slideSmfromLeft } from "@/lib/animations/variants"
import { contactInfo } from "@/content/data"
import EmojiBarbas from "@/components/stickers/emoji-barbas"

const containerHeaderAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

export default function SectionHeaderMindset({
  className,
  title,
  excerpt,
  ctatext,
}: {
  className?: string
  title: string
  excerpt: string
  ctatext: string
}) {
  return (
    <motion.header
      initial="hidden"
      whileInView={"show"}
      viewport={{ amount: 0.4, once: true }}
      variants={containerHeaderAnimation}
      className={cn(className, "")}
    >
      <motion.h2
        variants={fadeSlideUp}
        transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
        className="leading-none text-4xl text-left lg:text-6xl xl:text-8xl kanit font-bold text-balance uppercase mb-4 lg:mb-8 2xl:mb-10 "
      >
        {title}
      </motion.h2>
      <motion.p
        variants={slideSmfromLeft}
        className="text-xl lg:text-2xl text-balance mb-2 md:mb-24 2xl:mb-40"
      >
        {excerpt}
      </motion.p>

      {/* CTA whatsApp */}
      {/* <ContactCta ctatext={ctatext} /> */}
      <div
        className={
          "group w-fit grid grid-cols-1 items-center justify-items-center text-nB-black"
        }
      >
        <span className="sr-only"> Contacto</span>
        <div className="size-32 lg:size-48 col-start-1 row-start-1 spin12s">
          <CTASvg text={ctatext} className="uppercase " />
        </div>
        <div className="rounded-full size-20 lg:size-28 bg-nB-black col-start-1 row-start-1 flex items-center justify-center text-nB-white">
          <div className="size-8 lg:size-14">
            <EmojiBarbas />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
