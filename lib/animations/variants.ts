import { Variants } from "motion/react"

export const defaultContainerstaggerHigh: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}
export const defaultContainerAnim: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}
export const fadeSlideUp: Variants = {
  hidden: {
    opacity: 0,
    translateY: "100%",
  },
  show: {
    opacity: 1,
    translateY: 0,
  },
}
export const fadeSlideSmUp: Variants = {
  hidden: {
    opacity: 0,
    translateY: 40,
  },
  show: {
    opacity: 1,
    translateY: 0,
  },
}

export const fadeSlideDown: Variants = {
  hidden: {
    opacity: 0,
    translateY: "-100%",
  },
  show: {
    opacity: 1,
    translateY: 0,
  },
}

export const slideSmfromLeft: Variants = {
  hidden: {
    opacity: 0,
    translateX: -20,
  },
  show: {
    opacity: 1,
    translateX: 0,
    transition: { type: "tween", duration: 0.4, ease: "easeOut" },
  },
}
export const slideXsfromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}
export const slideXsfromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

export const scaleInCenter: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
}

export const heroImgAnimation: Variants = {
  hidden: {
    x: 400,
    scale: 0.5,
    opacity: 0,
    rotate: 4,
    originX: "100%",
    originY: "50%",
  },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    rotate: -4,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
}

export const titleAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
}

export const textAnimation: Variants = {
  hidden: {
    opacity: 0,
    translateY: "100%",
  },
  show: {
    opacity: 1,
    translateY: 0,
  },
}
