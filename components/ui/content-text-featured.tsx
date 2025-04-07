import * as motion from "motion/react-client"
import { type Variants } from "motion/react"
import { cn } from "@/lib/utils"
import { textAnimation, titleAnimation } from "@/lib/animations/variants"

const containerAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

export default function ContentTextFeatured({
  title,
  content,
  className,
}: {
  title: string
  content: string
  className?: string
}) {
  return (
    <div className={cn("pt-20 pb-24 px-8 md:px-12 2xl:py-56", className)}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          viewport={{ amount: 0.8, once: true }}
          variants={containerAnimation}
          className="flex flex-col space-y-7 text-left md:items-center md:text-center"
        >
          <motion.h2
            variants={titleAnimation}
            transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
            className="Kanit font-black mb-6 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl "
          >
            {title}
          </motion.h2>

          <motion.p
            variants={textAnimation}
            transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
            className=" 2xl:mb-24 lg:leading-tight text-balance text-lg md:text-2xl xl:text-3xl xl:leading-10"
          >
            {content}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
