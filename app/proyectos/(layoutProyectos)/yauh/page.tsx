import CtaLink from "@/components/ui/ctaLink"
import Image from "next/image"
import * as motion from "motion/react-client"
import IMGYauhLogo from "@/public/assets/projects/yauh/logo_yauh_dark.png"
import IMGYauhLogoLight from "@/public/assets/projects/yauh/logo_yauh_light.png"
import IMGYauhCover from "@/public/assets/projects/yauh/yauhAuthCover.jpg"

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
  slideSmfromLeft,
} from "@/lib/animations/variants"
import { StackRelevant } from "./stack-relevant"
import ContentTextFeatured from "@/components/ui/content-text-featured"
import YauhFeatures from "./yauh-features"
import {
  containerPurposeAnimation,
  textAnimation,
  titleAnimation,
} from "@/app/(inicio)/section_purpose/section-purpose"

import YauhChallenges from "./yauh-challenges"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yauh | jaguarek",
  description:
    "Descubre Yauh, una plataforma innovadora para rentas a largo plazo en Quintana Roo. Diseñada por mí, combina tecnología avanzada y diseño intuitivo.",
  openGraph: {
    title: "Yauh | jaguarek",
    description:
      "Descubre Yauh, una plataforma innovadora para rentas a largo plazo en Quintana Roo. Diseñada por mí, combina tecnología avanzada y diseño intuitivo.",
    url: "https://jaguarek.com/proyectos/yauh",
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
    title: "Yauh | jaguarek",
    description:
      "Descubre Yauh, una plataforma innovadora para rentas a largo plazo en Quintana Roo. Diseñada por mí, combina tecnología avanzada y diseño intuitivo.",
    images: ["https://jaguarek.com/images/og-image.png"],
  },
  alternates: {
    canonical: "https://jaguarek.com/proyectos/yauh",
  },
  keywords: [
    "proyecto",
    "desarrollo web",
    "diseño web",
    "contenido multimedia",
    "frontend",
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
      >
        <HeroProject className="dark:bg-background xl:min-h-[calc(100vh-80px)] 2xl:px-20 ">
          {/* left */}
          <HeroColumnWrapper>
            <HeroCard>
              <HeroCardHeader className="">
                <motion.div
                  variants={slideSmfromLeft}
                  className="flex gap-2 items-center mb-4"
                >
                  <Image
                    src={IMGYauhLogo}
                    alt=""
                    className="size-12 sm:size-16 md:size-20 xl:size-24 hidden dark:block "
                  />
                  <Image
                    src={IMGYauhLogoLight}
                    alt=""
                    className="size-12 sm:size-16 md:size-20 xl:size-24 dark:hidden"
                  />
                  <span className="kanit text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black kanit bg-gradient-to-r bg-clip-text  text-transparent from-nB-pink to-nB-violet dark:text-[#73fd8e] uppercase text-center ">
                    Yauh
                  </span>
                </motion.div>
                <HeroCardTitle>
                  <motion.h2
                    variants={fadeSlideDown}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      ease: "circOut",
                    }}
                  >
                    Construyendo <span className=" font-semibold">Yauh</span>
                  </motion.h2>
                </HeroCardTitle>
                <HeroCardDescription>
                  <motion.p variants={slideSmfromLeft} className="text-lg">
                    Una Plataforma Innovadora para Rentas a Largo Plazo.
                  </motion.p>
                </HeroCardDescription>
              </HeroCardHeader>
              {/* content */}
              <HeroCardContent>
                <motion.p variants={slideSmfromLeft}>
                  Como{" "}
                  <strong>
                    desarrollador frontend con más de 6 años de experiencia
                  </strong>
                  , diseñé y construí Yauh, una plataforma moderna e inclusiva
                  para simplificar la búsqueda y publicación de propiedades en
                  alquiler a largo plazo en Quintana Roo. Utilicé tecnologías
                  avanzadas para crear una{" "}
                  <strong>experiencia digital rápida, accesible</strong> y
                  visualmente atractiva.
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
                    href="https://www.yauh.app/busqueda?query=playa+del+carmen&price=6000&lat=20.6156331&lng=-87.0992686"
                    label="Explora Yauh "
                  />
                </motion.div>
              </HeroCardFooter>
            </HeroCard>
          </HeroColumnWrapper>
          {/* right */}
          <HeroColumnWrapper className=" xl:p-8 2xl:p-10 ">
            <div className="flex w-full h-full xl:h-auto justify-center ">
              <Image
                src={IMGYauhCover}
                alt=""
                className="object-cover h-full w-full xl:rounded-xl xl:max-w-2xl xl:border-2 border-foreground dark:border-foreground/80 xl:shadow-[4px_4px_0px] xl:shadow-foreground xl:dark:shadow-foreground/80"
                priority={true}
                quality={80}
              />
            </div>
          </HeroColumnWrapper>
        </HeroProject>
        <ContentTextFeatured
          title="Mi Viaje con Yauh"
          content="Cada línea de código, cada funcionalidad y cada diseño fue pensado para resolver un problema real: simplificar la búsqueda de hogares en Quintana Roo. Este proyecto no solo representa mi pasión por la tecnología, sino también mi compromiso con crear soluciones útiles y accesibles."
          className="bg-nB-pink text-nB-black"
        />
      </motion.div>
      <section className="w-full bg-nB-green pb-24 px-8 md:px-12 xl:px-24 lg:py-20 xl:py-28 text-nB-black border-y border-nB-black ">
        {/* grid 1 col lg:2col */}
        <motion.div
          variants={defaultContainerAnim}
          initial="hidden"
          whileInView={"show"}
          viewport={{ amount: 0.4, once: true }}
          className="grid grid-cols-1 gap-4 xl:grid-cols-2 items-center "
        >
          <div className="relative  sm:p-4 md:p-6 lg:p-8 2xl:p-16">
            <div className="w-full ">
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative "
              >
                <StackRelevant />
              </motion.div>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-full ">
            <div className="space-y-8 flex flex-col justify-between w-full">
              <hgroup>
                <motion.h2
                  variants={fadeSlideDown}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    ease: "circOut",
                  }}
                  className="leading-none text-5xl lg:text-left lg:text-7xl kanit font-medium text-balance "
                >
                  Del Concepto al Código
                </motion.h2>
                <motion.p
                  variants={slideSmfromLeft}
                  className="text-base font-semibold lg:text-base xl:text-xl uppercase mt-0.5 "
                >
                  Cómo Construí Yauh
                </motion.p>
              </hgroup>
              <div className="flex flex-col gap-4 text-xl lg:text-2xl text-balance">
                <motion.p variants={slideSmfromLeft}>
                  El proyecto comenzó con una visión clara, crear una plataforma
                  que conectara a propietarios e inquilinos de manera eficiente.
                  Con mi experiencia en{" "}
                  <strong>desarrollo frontend y diseño UX/UI, </strong>
                  sabía que el sitio debía ser intuitivo,{" "}
                  <strong>accesible y optimizado</strong> para rendimiento.
                </motion.p>

                <motion.p variants={slideSmfromLeft}>
                  Mi enfoque fue combinar creatividad y tecnología para resolver
                  problemas reales, como la falta de una solución confiable para
                  rentas a largo plazo en la Riviera Maya.
                </motion.p>
                <motion.p variants={slideSmfromLeft}>
                  Utilicé <strong>Next.js</strong> para un rendimiento
                  rápido,&nbsp;
                  <strong>Supabase</strong> como backend y base de datos, y
                  &nbsp;<strong>Tailwind CSS</strong> para un diseño limpio y
                  responsivo. Además, integré herramientas como{" "}
                  <strong>Google Maps API</strong> para el mapa interactivo y se
                  <strong> automatizó</strong> el envió correos.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <ContentTextFeatured
        title="Los Desafíos Técnicos que Superé"
        content="Este proyecto no solo demostró mi capacidad para resolver problemas complejos, sino también mi habilidad para aprender y adaptarme rápidamente a nuevas herramientas."
        className=""
      />
      {/* Horizontal Scroll */}
      <YauhChallenges />
      <ContentTextFeatured
        title="Características de Yauh"
        content="Estas características hacen de Yauh una herramienta indispensable tanto para propietarios como para inquilinos, optimizando el proceso de búsqueda y gestión de propiedades."
        className="border-t border-foreground"
      />
      <YauhFeatures />
      {/* Call to action Section */}
      <section className="bg-nB-green dark:bg-nB-lime text-nB-black pt-20 pb-24 px-8 md:px-12 2xl:py-28">
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
              Yauh es un ejemplo de cómo el diseño y la tecnología pueden
              trabajar juntos para crear una experiencia digital memorable.
              Explora la plataforma en vivo y descubre cómo puede beneficiar
              tanto a propietarios como a inquilinos.
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
                href="https://www.yauh.app/busqueda?query=playa+del+carmen&price=6000&lat=20.6156331&lng=-87.0992686"
                label="Visita Yauh"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
