import * as motion from "motion/react-client"
import Image from "next/image"
import CheckBackImg from "@/public/assets/projects/mdc/heroProductosCheckback.png"
import ProdHeroIconImg from "@/public/assets/projects/mdc/heroProductosIcon.png"
import CheckMiddleImg from "@/public/assets/projects/mdc/heroProductosCheckbackMiddle.png"
import ProdHeroGirlImg from "@/public/assets/projects/mdc/heroProductosGirl.png"
import CheckFrontImg from "@/public/assets/projects/mdc/heroProductosCheckbackFront.png"
import BlogMdc from "@/public/assets/projects/mdc/blogmdc.jpg"
import {
  fadeIn,
  fadeSlideDown,
  scaleInCenter,
  slideXsfromRight,
} from "@/lib/animations/variants"
import IconDemoCourse from "@/components/icons/icon-demo-course"
import { cn } from "@/lib/utils"
import { buttonNBVariants } from "@/components/ui/buttonNB"
import TabletImg from "@/public/assets/projects/mdc/tablet_card.png"
import { FloatingPhone } from "@/components/ui/floating-phone"

const MdclibrarieVisuals = () => {
  return (
    <div className="relative w-full 2xl:p-10">
      <div className="relative top-0 left-0 grid grid-cols-7 grid-rows-3 max-h-[500px] place-content-center justify-items-center">
        <motion.div
          variants={scaleInCenter}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "backInOut",
          }}
          className="row-start-1 col-start-3 p-2 opacity-30 flex items-end"
        >
          <Image
            alt="icono de marca de verificacion "
            loading="eager"
            src={CheckBackImg}
            className="object-contain w-full h-full z-0"
          />
        </motion.div>
        <motion.div
          variants={slideXsfromRight}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "backInOut",
          }}
          className="row-start-2 col-span-2 row-span-2 col-end-8"
        >
          <Image
            alt="empleado de construcion viendo su tableta "
            src={ProdHeroIconImg}
          />
        </motion.div>
        <motion.div
          variants={scaleInCenter}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "backInOut",
          }}
          className="row-start-1 col-start-2 row-span-2 pt-4 opacity-90 flex items-center"
        >
          <Image
            alt="icono de marca de verificacion "
            loading="eager"
            src={CheckMiddleImg}
            className="object-contain w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
          className="col-start-1 row-start-1 row-end-4 col-end-7 z-10 "
        >
          <Image
            alt="empleada de construcion viendo su tableta "
            loading="eager"
            src={ProdHeroGirlImg}
            className="object-contain w-full h-full "
          />
        </motion.div>
        <motion.div
          variants={fadeSlideDown}
          transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
          className="row-start-2 col-start-2 col-span-2 opacity-70 pl-3 pt-3 z-10"
        >
          <Image
            alt="icono de marca de verificacion "
            loading="eager"
            src={CheckFrontImg}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  )
}

const MdcDemoVisuals = () => {
  return (
    <div className="flex justify-center items-center min-h-[500px]">
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.6,
          ease: "backInOut",
        }}
        className="flex flex-col items-center lg:flex-row gap-2 lg:items-start justify-between w-full bg-nB-white p-4 rounded-xl border-2 border-nB-black shadow-[4px_4px_0px] shadow-nB-black"
      >
        <div className="w-2/5 shrink-0 flex items-center self-center">
          <IconDemoCourse />
        </div>
        <div className="w-full flex flex-col lg:mt-6 lg:mr-4">
          <div className="flex flex-col gap-2 my-4">
            <div className="flex gap-1.5">
              <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full flex-shrink-0 text-lg bg-white flex justify-center items-center ">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 26.27 31.01"
                  width="1em"
                  height="1em"
                >
                  <path d="M11.76 7.25.16 0v20.23l3.27-2.04V5.9l5.25 3.27 3.08-1.92z"></path>
                  <path d="M5.24 13.14v3.85L23 5.9v8.81l-12.69 7.93 3.08 1.93 12.88-8.05V0L5.24 13.14z"></path>
                  <path d="m13.22 27.15-7.06-4.4 14.89-9.3V9.6L0 22.74l13.22 8.27 13.05-8.16V19l-13.05 8.15z"></path>
                </svg>
              </div>
              <div className="sm:pl-2 pl-1 flex flex-col justify-center">
                <h2 className="text-sm leading-none "> Recursos Humanos </h2>
                <h3 className="font-bold">Habilidades directivas </h3>
              </div>
            </div>
            <p className="mt-4 font-bold text-2xl leading-tight  sm:text-2xl lg:text-3xl lg:leading-none ">
              Inteligencia emocional para la gestión de conflictos supervisores
            </p>
          </div>
          <a
            href={"https://mexicodc.com/demos/inteligencia_emocional_RHD04/"}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className={cn(
              buttonNBVariants({ variant: "default", size: "default" }),
              "w-fit justify-self-end font-medium border-nB-black shadow-nB-black",
            )}
          >
            Ver Demo
          </a>
        </div>
      </motion.div>
    </div>
  )
}

const MdcRutesVisuals = () => {
  return (
    <div className=" w-full min-h-[500px] flex items-center justify-center  ">
      <motion.div
        variants={scaleInCenter}
        transition={{
          type: "tween",
          duration: 0.6,
          ease: "backInOut",
        }}
        className="w-full bg-nB-white rounded-xl border-2 border-nB-black shadow-[4px_4px_0px] shadow-nB-black flex flex-col md:grid md:grid-cols-3 px-4 md:px-8  "
      >
        <div className="relative md:row-start-1 md:col-start-1 md:col-span-2 h-[350px] w-full mt-4 md:mt-0 pt-2 border-b-2 lg:border-b-0">
          <Image
            alt="Tablet con estadisticas"
            draggable="false"
            className="object-contain w-full h-full "
            style={{ maskImage: "linear-gradient(black 85%, transparent)" }}
            src={TabletImg}
          />
        </div>
        <div className="md:col-start-2 col-span-2 md:row-start-1 text-left md:text-right flex flex-col gap-2 md:gap-6 md:justify-center py-8">
          <ul className="text-bg_primary text-base lg:text-lg font-semibold ">
            <li>Habilidades Directivas</li>
            <li>Seguridad de la información</li>
            <li>Jurídico</li>
            <li>Habilidades Blandas</li>
            <li>Teletrabajo</li>
            <li>Ventas</li>
          </ul>

          <div className="flex  md:justify-end">
            <a
              href={"https://sitio.mexicodc.com/rutas-de-aprendizaje"}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className={cn(
                buttonNBVariants({ variant: "default", size: "default" }),
                "w-fit justify-self-end font-medium border-nB-black shadow-nB-black",
              )}
            >
              Rutas de aprendizaje
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
const MdcBlogVisuals = () => {
  return (
    <div className="grid place-content-center  p-12">
      <FloatingPhone>
        <ScreenBlogMdc />
      </FloatingPhone>
    </div>
  )
}
const ScreenBlogMdc = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] ">
      {/* Example logo from logoispum */}
      <div className=" grid grid-cols-1 items-center justify-items-center text-nB-black">
        <Image src={BlogMdc} alt="" />
      </div>
    </div>
  )
}

export { MdclibrarieVisuals, MdcDemoVisuals, MdcRutesVisuals, MdcBlogVisuals }
