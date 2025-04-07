import { fadeSlideDown } from "@/lib/animations/variants"
import { cn } from "@/lib/utils"
import { Variants } from "motion/react"
import * as motion from "motion/react-client"

import * as React from "react"

const SectionTwoCols = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 lg:grid-cols-2 w-full  text-nB-black",
      className,
    )}
    {...props}
  />
))
SectionTwoCols.displayName = "SectionTwoCols"

const SectionColumn = ({
  className,
  children,
  staggerChildren = 0.2,
  ...props
}: {
  className?: string
  staggerChildren?: number
  children: React.ReactNode
}) => {
  const containerSucces: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  }
  //
  return (
    <motion.div
      variants={containerSucces}
      initial="hidden"
      whileInView={"show"}
      viewport={{ amount: 0.4, once: true }}
      className={cn(
        "flex w-full h-full items-center lg:justify-center ",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

const SectionCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-screen-sm flex flex-col xl:gap-8", className)}
    {...props}
  />
))
SectionCard.displayName = "SectionCard"

const SectionMotionCardTitle = ({ title }: { title: string }) => {
  return (
    <motion.h2
      variants={fadeSlideDown}
      transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
      className="leading-none text-5xl md:text-6xl lg:text-left lg:text-7xl kanit font-medium text-balance py-6 lg:py-8"
    >
      {title}
    </motion.h2>
  )
}

const SectionCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("py-6 pt-0 lg:py-8 lg:pt-0 ", className)}
    {...props}
  />
))
SectionCardContent.displayName = "SectionCardContent"

const SectionCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("py-6 pt-0 lg:py-8 lg:pt-0 w-full", className)}
    {...props}
  />
))
SectionCardFooter.displayName = "SectionCardFooter"

export {
  SectionTwoCols,
  SectionCard,
  SectionMotionCardTitle,
  SectionCardContent,
  SectionCardFooter,
  SectionColumn,
}
