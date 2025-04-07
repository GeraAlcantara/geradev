import * as motion from "motion/react-client"
import Image from "next/image"

import {
  HeroCard,
  HeroCardContent,
  HeroCardDescription,
  HeroCardFooter,
  HeroCardHeader,
  HeroCardTitle,
  HeroColumnWrapper,
  HeroProject,
} from "@/components/ui/hero-project"
import {
  defaultContainerAnim,
  fadeIn,
  fadeSlideDown,
  scaleInCenter,
  slideSmfromLeft,
} from "@/lib/animations/variants"

import CheckBackImg from "@/public/assets/projects/mdc/heroProductosCheckback.png"
import ChatImg from "@/public/assets/projects/mdc/heroserviciosChatIconMiddle.png"
import ServHeroMenImg from "@/public/assets/projects/mdc/heroServiciosMen.png"
import PlayImg from "@/public/assets/projects/mdc/heroserviciosPlayIconFront.png"

import MDCLogo from "@/public/assets/projects/mdc/logo.png"

import CtaLink from "@/components/ui/ctaLink"
import IconLibrary from "@/components/icons/icon-library"
import ContentTextFeatured from "@/components/ui/content-text-featured"

import StackOrbitMdc from "./stack-orbit-mdc"
import MdcChallenges from "./mdc-challenges"
import MdcFeatures from "./mdc-features"
import {
  containerPurposeAnimation,
  textAnimation,
  titleAnimation,
} from "@/app/(inicio)/section_purpose/section-purpose"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mexico Development Center | jaguarek",
  description:
    "Descubre cómo diseñé un sitio web moderno y funcional para Mexico Development Center, optimizado para destacar sus servicios e-learning.",
  openGraph: {
    title: "Mexico Development Center | jaguarek",
    description:
      "Descubre cómo diseñé un sitio web moderno y funcional para Mexico Development Center, optimizado para destacar sus servicios e-learning.",
    url: "https://jaguarek.com/proyectos/mexico-development-center",
    images: [
      {
        url: "https://jaguarek.com/images/og-image.png",
        width: 1280,
        height: 640,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico Development Center | jaguarek",
    description:
      "Descubre cómo diseñé un sitio web moderno y funcional para Mexico Development Center, optimizado para destacar sus servicios e-learning.",
    images: ["https://jaguarek.com/images/og-image.png"],
  },
  alternates: {
    canonical: "https://jaguarek.com/proyectos/mexico-development-center",
  },
  keywords: [
    "Mexico Development Center",
    "sitio web",
    "diseño web",
    "desarrollo web",
    "e-learning",
    "tecnología",
    "creatividad",
    "innovación",
  ],
  authors: [
    {
      name: "Jaguarek",
      url: "https://jaguarek.com",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return (
    <>
      <motion.div
        variants={defaultContainerAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "some" }}
        className=""
      >
        <HeroProject className="dark:bg-background xl:max-h-[calc(100vh-80px)] 2xl:px-20 ">
          <motion.div
            variants={defaultContainerAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: "some", once: false }}
          >
            <HeroColumnWrapper>
              <HeroCard>
                <motion.div
                  variants={slideSmfromLeft}
                  className="flex gap-2 items-center mb-4"
                >
                  <div className="size-12 lg:size-16 2xl:size-20">
                    <Image src={MDCLogo} alt="" />
                  </div>
                  <span className="kanit text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black kanit bg-gradient-to-r bg-clip-text  text-transparent dark:from-nB-green from-nB-black to-nB-gray-dark dark:to-nB-lime uppercase text-center ">
                    MDC
                  </span>
                </motion.div>

                <HeroCardHeader>
                  <HeroCardTitle>
                    <motion.h2
                      variants={fadeSlideDown}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        ease: "circOut",
                      }}
                    >
                      Sitio <span className=" font-semibold">Web</span>
                    </motion.h2>
                  </HeroCardTitle>
                  <HeroCardDescription>
                    <motion.p variants={slideSmfromLeft} className="text-lg">
                      Diseñando un Sitio Web para{" "}
                      <span className=" font-semibold">
                        Mexico Development Center
                      </span>
                    </motion.p>
                  </HeroCardDescription>
                </HeroCardHeader>
                <HeroCardContent>
                  <motion.p variants={slideSmfromLeft} className="text-lg">
                    Como desarrollador frontend, tuve el privilegio de colaborar
                    estrechamente con <strong>Roberto Avila</strong>, un
                    talentoso diseñador y gran amigo, en el desarrollo del sitio
                    web para Mexico Development Center, una empresa líder en
                    soluciones e-learning. Puedes explorar más de su increíble
                    trabajo en&nbsp;
                    <a
                      href="https://www.robertoavila.com/"
                      referrerPolicy="no-referrer-when-downgrade"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-black underline visited:text-nB-purple"
                    >
                      robertoavila.com
                    </a>
                    . Juntos creamos una experiencia digital moderna, funcional
                    y visualmente atractiva, optimizada para destacar los
                    servicios de la empresa y generar valor tanto para sus
                    clientes como para sus usuarios.
                  </motion.p>
                </HeroCardContent>
                <HeroCardFooter>
                  <motion.div
                    variants={fadeIn}
                    transition={{ duration: 0.4 }}
                    className="w-fit h-fit "
                  >
                    <CtaLink
                      referrerPolicy="no-referrer-when-downgrade"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://sitio.mexicodc.com/"
                      label="Visita el sitio web"
                    />
                  </motion.div>
                </HeroCardFooter>
              </HeroCard>
            </HeroColumnWrapper>
          </motion.div>
          <HeroColumnWrapper className="2xl:p-0">
            <motion.div className="flex items-center  justify-center mt-6 lg:mt-0">
              <div className="relative w-full p-4 xl:p-10 ">
                <div className="relative top-0 left-0 grid grid-cols-7 grid-rows-3 ">
                  <motion.div
                    variants={slideSmfromLeft}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "circInOut",
                    }}
                    className="col-start-1 row-start-1 row-end-4 col-end-7 z-[2] "
                  >
                    <Image
                      alt="empleado con laptop"
                      loading="eager"
                      priority={true}
                      src={ServHeroMenImg}
                      className="object-contain h-full w-full"
                    />
                  </motion.div>
                  <motion.div
                    variants={scaleInCenter}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "circInOut",
                    }}
                    className="row-start-1 col-start-3 p-2 opacity-30 flex items-end"
                  >
                    <Image
                      alt="icono de marca de verificacion "
                      loading="eager"
                      src={CheckBackImg}
                    />
                  </motion.div>
                  <div className="row-start-1 col-span-2 row-span-2 col-end-8 col-start-5 p-5 md:p-8 ">
                    <motion.div
                      variants={scaleInCenter}
                      transition={{
                        type: "tween",
                        duration: 0.4,
                        ease: "circInOut",
                      }}
                      className="h-full w-full p-8"
                    >
                      <IconLibrary />
                    </motion.div>
                  </div>
                  <motion.div
                    variants={scaleInCenter}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "circInOut",
                    }}
                    className="row-start-1 col-start-2 row-span-2 pt-4 opacity-50 flex items-center "
                  >
                    <Image
                      alt="icono de marca de verificacion "
                      loading="eager"
                      src={ChatImg}
                      className="object-contain h-full w-full"
                    />
                  </motion.div>

                  <motion.div
                    variants={scaleInCenter}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "circInOut",
                    }}
                    className="row-start-2 col-start-2 col-span-2  pl-3 pt-3 z-[3]"
                  >
                    <Image
                      alt="icono de play "
                      loading="eager"
                      src={PlayImg}
                      className="object-contain h-full w-full opacity-70"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </HeroColumnWrapper>
        </HeroProject>
      </motion.div>
      <ContentTextFeatured
        className="bg-nB-violet text-nB-black"
        title="Un Equipo Creativo y Técnico"
        content="Como desarrollador frontend, trabajé codo a codo con Roberto Avila, el talentoso diseñador detrás de MDC, para dar vida a este sitio web. Nuestra colaboración combinó su visión creativa y atención al detalle con mi enfoque técnico y experiencia en desarrollo, resultando en una plataforma moderna, funcional y visualmente impactante. Juntos logramos traducir las necesidades del cliente en una solución digital que no solo cumple con los objetivos del negocio, sino que también ofrece una experiencia fluida y atractiva para los usuarios."
      />
      <section className="w-full bg-nB-blue pb-24 px-8 md:px-12 xl:px-24 lg:py-20 xl:py-28 text-nB-white border-y border-nB-black ">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 place-items-center justify-items-center ">
          <motion.div
            variants={defaultContainerAnim}
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: 0.4, once: true }}
            className="relative  sm:p-4 md:p-6 lg:p-8 2xl:p-16 w-full"
          >
            <motion.div variants={scaleInCenter} className="w-full h-full">
              <StackOrbitMdc />
            </motion.div>
          </motion.div>
          <div className="flex items-center justify-center h-full w-full ">
            <motion.div
              variants={defaultContainerAnim}
              initial="hidden"
              whileInView={"show"}
              viewport={{ amount: 0.4, once: true }}
              className="space-y-8 flex flex-col justify-between w-full"
            >
              <hgroup>
                <motion.h2
                  variants={fadeSlideDown}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    ease: "circOut",
                  }}
                  className="leading-none text-5xl lg:text-left lg:text-7xl kanit font-medium text-balance animate-fade-in-scale"
                >
                  Del Brief al Producto Final
                </motion.h2>
                <motion.p
                  variants={slideSmfromLeft}
                  className="text-base font-semibold lg:text-base xl:text-xl uppercase mt-0.5 "
                >
                  Cómo Construí el Sitio Web de MDC
                </motion.p>
              </hgroup>
              <div className="flex flex-col gap-4 text-xl lg:text-2xl text-balance">
                <motion.p variants={slideSmfromLeft}>
                  El proyecto comenzó con un brief claro: crear un sitio web que
                  destacara los servicios de MDC, desde cursos SCORM hasta
                  capacitaciones personalizadas. Con más de 6 años de
                  experiencia en desarrollo frontend, sabía que el diseño debía
                  ser modular, accesible y optimizado para rendimiento.
                </motion.p>

                <motion.p variants={slideSmfromLeft}>
                  Mi enfoque fue simple pero efectivo: combinar creatividad y
                  tecnología para transformar las necesidades de MDC en una
                  experiencia digital memorable.
                </motion.p>
                <motion.p variants={slideSmfromLeft}>
                  Xcatic landing page está desarrollada con un stack tecnológico
                  para garantizar rendimiento, escalabilidad y una experiencia
                  de usuario excepcional.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ContentTextFeatured
        title="Los Desafíos Técnicos que Superé"
        content="Este proyecto no solo puso a prueba mi capacidad para resolver desafíos técnicos complejos, como la creación de un captcha personalizado y la optimización del rendimiento, sino que también reforzó mi habilidad para adaptarme a lineamientos específicos y entregar soluciones funcionales que cumplieran con los estándares modernos de accesibilidad y diseño modular."
        className=""
      />
      <MdcChallenges />
      <ContentTextFeatured
        className="bg-nB-blue-vista border-nB-black border text-nB-black"
        title="Características del Sitio Web"
        content="El sitio web de Mexico Development Center no solo es una plataforma informativa, sino una herramienta integral diseñada para facilitar el acceso a cursos demo y mejorar la experiencia del usuario. Estas características hacen del sitio web una herramienta indispensable para empresas que buscan optimizar sus procesos de capacitación y formación, combinando funcionalidad y facilidad de uso."
      />
      <MdcFeatures />
      {/* Call to action Section */}
      <section className="bg-nB-yellow dark:bg-nB-lime text-nB-black pt-20 pb-24 px-8 md:px-12 2xl:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: 0.8, once: true }}
            variants={containerPurposeAnimation}
            className="flex flex-col space-y-7 text-left md:items-center md:text-center"
          >
            <motion.h2
              variants={titleAnimation}
              transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
              className="kanit font-black mb-6 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl "
            >
              ¿Listo para Verlo en Acción?
            </motion.h2>
            <motion.p
              variants={textAnimation}
              transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
              className=" lg:leading-tight text-balance text-lg md:text-2xl xl:text-3xl xl:leading-10"
            >
              El sitio web de Mexico Development Center es un ejemplo de cómo el
              diseño y la tecnología pueden trabajar juntos para crear una
              experiencia digital.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.4 }}
              className="w-fit h-fit "
            >
              <CtaLink
                referrerPolicy="no-referrer-when-downgrade"
                rel="noopener noreferrer"
                target="_blank"
                href="https://mexicodc.com/"
                label="Visita el sitio web"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
