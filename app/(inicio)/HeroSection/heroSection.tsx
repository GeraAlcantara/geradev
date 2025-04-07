import CtaLink from "@/components/ui/ctaLink"
import CursorHeroUi from "@/components/icons/cursor_hero_ui"
import FileCodeHeroUi from "@/components/icons/file_code_hero_ui"
import PaintBrushHeroUi from "@/components/icons/paint_brush_hero_ui"
import TestTubeHeroUi from "@/components/icons/test_tube_hero_ui"
import { ToolItem, ToolPallete } from "./toolspallete"
import FakeCardUI from "./fakeCardUI"
import SvgEasingCurvesUi from "./svgEasingCurvesUi"
import Image from "next/image"
import IMGJaguar from "@/public/assets/hero/geraHero.png"
import * as motion from "motion/react-client"
import {
  defaultContainerAnim,
  fadeIn,
  fadeSlideDown,
  heroImgAnimation,
  scaleInCenter,
  slideSmfromLeft,
  slideXsfromRight,
} from "@/lib/animations/variants"

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={defaultContainerAnim}
      viewport={{ amount: 0.4, once: true }}
      className="bg-nB-blue-vista text-nB-black h-[calc(100vh-4rem)] sm:landscape:h-auto lg:landscape:h-screen xl:[calc(100vh)-4rem] w-full px-2 py-8 xl:p-16 flex justify-center items-center "
      aria-label=""
    >
      <div className="w-full">
        <div className="flex flex-col gap-6">
          <hgroup className="text-center m-auto">
            <motion.h2
              variants={fadeSlideDown}
              transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
              className="text-3xl md:text-5xl 2xl:text-8xl font-black"
            >
              Front End Developer
            </motion.h2>
            <motion.p
              variants={slideSmfromLeft}
              className="text-lg md:text-3xl 2xl:text-6xl"
            >
              Creatividad para la Web
            </motion.p>
          </hgroup>
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.4 }}
            className="w-fit h-fit m-auto "
          >
            <CtaLink href="#introduccion" label="Conoce más" />
          </motion.div>
        </div>

        <motion.div className="relative w-full">
          <motion.div className="flex flex-col-reverse gap-4 md:gap-8 lg:gap-2 lg:flex-row lg:items-start lg:justify-between md:w-3xl lg:w-4xl xl:w-6xl md:m-auto 2xl:w-[1400px] w-full pr-8 pl-26 md:px-16 pt-12 2xl:px-0 ">
            {/* left side */}
            <motion.div className="m-auto lg:m-0 grid grid-cols-[minmax(100px,5fr)_minmax(40px,2fr)_minmax(75px,3fr)] grid-rows-[minmax(30px,1fr)_minmax(100px,4.47fr)_minmax(41px,1.6fr)] max-w-[547px] max-h-[455px] will-change-auto lg:translate-y-20 2xl:translate-x-0 2xl:translate-y-0 transition-all duration-200  ">
              <motion.div className="relative col-start-1 col-span-2 row-start-2 flex justify-between items-center row-span-2 w-full h-full ">
                <motion.div
                  variants={scaleInCenter}
                  transition={{
                    type: "tween",
                    duration: 0.8,
                    ease: "backInOut",
                    delayChildren: 0.2,
                  }}
                  className="absolute w-32 h-40 lg:w-48 lg:h-72 -translate-x-8 -rotate-2 xl:w-60 xl:h-80"
                >
                  <FakeCardUI variant={"blue"} className="" />
                </motion.div>
                <motion.div
                  variants={scaleInCenter}
                  transition={{
                    type: "tween",
                    duration: 0.7,
                    ease: "backInOut",
                  }}
                  className="rotate-2 w-32 h-40 lg:w-48 lg:h-72 xl:w-60 xl:h-80"
                >
                  <FakeCardUI variant={"default"} />
                </motion.div>
              </motion.div>
              <motion.div
                variants={slideXsfromRight}
                transition={{
                  type: "keyframes",
                  duration: 0.6,
                  ease: "easeInOut",
                  delayChildren: 0.4,
                }}
                className="rounded-md col-start-2 col-span-2 row-start-1 row-span-2 w-full h-full z-10"
              >
                <SvgEasingCurvesUi />
              </motion.div>
            </motion.div>

            {/* right side */}
            <motion.div
              variants={defaultContainerAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "all" }}
            >
              <motion.div
                variants={heroImgAnimation}
                className="w-full md:w-96  m-auto lg:m-0 xl:w-lg"
              >
                <Image
                  src={IMGJaguar}
                  alt="Gera aka JaguarEk"
                  className="will-change-auto -rotate-[4deg] 2xl:-translate-y-20 object-contain w-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tools Pallet absolute left */}
          <motion.div className="w-fit flex flex-col gap-4 items-center absolute left-0 top-0 ">
            <motion.div variants={slideSmfromLeft}>
              <ToolPallete>
                <ToolItem variant="default" size={"default"}>
                  <CursorHeroUi />
                </ToolItem>
                <ToolItem variant="active">
                  <PaintBrushHeroUi />
                </ToolItem>
                <ToolItem variant="default">
                  <TestTubeHeroUi />
                </ToolItem>
                <ToolItem variant="default">
                  <FileCodeHeroUi />
                </ToolItem>
              </ToolPallete>
            </motion.div>
            <motion.div variants={slideSmfromLeft}>
              <ToolPallete>
                <ToolItem variant="default" size={"default"}>
                  <div className="size-6 bg-nB-white rounded-full "></div>
                </ToolItem>
                <ToolItem variant={"active"}>
                  <div className="size-6 bg-transparent rounded-full flex items-center justify-center border-4 border-nB-pink"></div>
                </ToolItem>
              </ToolPallete>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* <Toolspallete /> */}
    </motion.section>
  )
}
