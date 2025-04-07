import { buttonNBVariants } from "@/components/ui/buttonNB"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type JSX } from "react"
import * as motion from "motion/react-client"
import { type Variants } from "motion/react"
export type CTAType = {
  href: string
  label: string
}
export interface ItemServicesProps {
  title: string
  excerpt: string
  cta: CTAType
  icon: () => JSX.Element
}

const containerListAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const emojiAnimation: Variants = {
  hidden: {
    scale: 0,
    transformOrigin: "50% 50%",
    y: 20,
    x: -20,
  },
  show: {
    scale: 1,
    transformOrigin: "50% 50%",
    y: 0,
    x: 0,
  },
}
const textAnimation: Variants = {
  hidden: {
    opacity: 0,
    translateY: 20,
    transition: {
      at: 0.2,
      when: "",
    },
  },
  show: {
    opacity: 1,
    translateY: 0,
  },
}
const linkAnimation: Variants = {
  hidden: {
    opacity: 0,
    translateX: -20,
  },
  show: {
    opacity: 1,
    translateX: 0,
    transition: {
      at: "<",
    },
  },
}

export default function ItemServices({
  title,
  excerpt,
  cta,
  icon: Icon,
}: ItemServicesProps) {
  return (
    <motion.li
      className="py-6 md:py-10 xl:py-24 2xl:py-32 flex items-start gap-4 2xl:gap-8 border-b border-nB-black  "
      variants={containerListAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5, once: true, margin: "0.5px" }}
    >
      {/* icon */}
      <motion.div
        variants={emojiAnimation}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="size-16 sm:size-20 2xl:size-36 shrink-0"
      >
        <Icon />
        {/* <EmojiOh /> */}
      </motion.div>
      {/* service content */}
      <div className="flex flex-col gap-8 mt-2">
        <hgroup className="">
          <motion.h3
            variants={textAnimation}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="font-black uppercase text-xl sm:text-2xl 2xl:text-6xl"
          >
            {title}
          </motion.h3>
          <motion.p
            variants={textAnimation}
            transition={{ type: "tween", duration: 0.3, ease: "easeIn" }}
            className="text-base lg:text-lg 2xl:text-2xl font-medium text-balance"
          >
            {excerpt}
          </motion.p>
        </hgroup>
        <motion.div className="w-fit" variants={linkAnimation}>
          <Link
            href={cta.href}
            className={cn(
              buttonNBVariants({
                variant: "default",
                size: "default",
              }),
              "text-xl w-fit shadow-nB-black border-nB-black",
            )}
          >
            {cta.label}
          </Link>
        </motion.div>
      </div>
    </motion.li>
  )
}
