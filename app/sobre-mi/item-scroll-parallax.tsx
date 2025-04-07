"use client"
import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform } from "motion/react"
import * as motion from "motion/react-client"
import { ItemScroll } from "./list-scroll-parralax"
import {
  ServerItemScrollParallaxContent,
  ServerItemScrollParallaxImage,
  ServerItemScrollParallaxTitle,
} from "./item-scroll-parallax-server"

export default function ItemScrollParallax({ item }: { item: ItemScroll }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    /* match media */
    const media = window.matchMedia("(max-width: 768px)")

    setIsMobile(media.matches)
    /* event listener */
    const handleResize = () => {
      setIsMobile(media.matches)
    }
    media.addEventListener("change", handleResize)
    /* clean up */
    return () => {
      media.removeEventListener("change", handleResize)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  /* Valores modificar imagen basado en el scroll */
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -150])
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 1, 0.9, 0],
  )

  /* Valores para modificar texto basado en el scroll */
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0, 1, 1, 0.8],
  )

  return (
    <div
      ref={containerRef}
      className="my-10 lg:my-40 relative flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8"
    >
      {/* motion div control translate Y negativo */}
      <motion.div
        style={
          isMobile ? { y: 0, opacity: 1 } : { y: textY, opacity: textOpacity }
        }
        className="w-full"
      >
        {/* opacidad  y translate */}
        <div>
          {/* title */}
          <ServerItemScrollParallaxTitle title={item.title} />
          {/* content */}
          <ServerItemScrollParallaxContent content={item.content} />
        </div>
      </motion.div>
      {/* image */}
      <motion.div
        style={
          isMobile ? { opacity: 1, y: 0 } : { y: imageY, opacity: imageOpacity }
        }
        className="flex lg:justify-center xl:justify-end  lg:self-center  relative"
      >
        <ServerItemScrollParallaxImage img={item.img} />
      </motion.div>
    </div>
  )
}
