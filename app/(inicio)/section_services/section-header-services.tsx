import * as motion from "motion/react-client"
import { type Variants } from "motion/react"

import { cn } from "@/lib/utils"
import { fadeSlideUp, slideSmfromLeft } from "@/lib/animations/variants"

import ContactCta from "./contact-cta"

const containerHeaderAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

export default function SectionHeaderServices({
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
        className="leading-none text-6xl text-left lg:text-7xl xl:text-8xl 2xl:text-8xl kanit font-bold text-balance uppercase mb-4 lg:mb-8 2xl:mb-10 "
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
      <ContactCta ctatext={ctatext} />
    </motion.header>
  )
}
