import * as motion from "motion/react-client"
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
import CtaLink from "@/components/ui/ctaLink"
import ContentTextFeatured from "@/components/ui/content-text-featured"
import Image from "next/image"
import XcaticLogo from "@/public/assets/projects/xcatic/logoXcatic.png"
import ChefKosher from "@/public/assets/projects/xcatic/chefIA.webp"
import CocinaKosher from "@/public/assets/projects/cocinakosher_hero_155.webp"
import { StackOrbitLanding } from "./stack-orbit-landing"
import LandingChallenges from "./landing-challenges"
import LandingFeatures from "./landing-features"
import {
  containerPurposeAnimation,
  textAnimation,
  titleAnimation,
} from "@/app/(inicio)/section_purpose/section-purpose"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landing page demo | Jaguarek",
  description:
    "Descubre cómo transformé una idea en una landing page AAA para un chef privado de cocina kosher en la Riviera Maya.",
  openGraph: {
    title: "Landing page demo | Jaguarek",
    description:
      "Descubre cómo transformé una idea en una landing page AAA para un chef privado de cocina kosher en la Riviera Maya.",
    url: "https://jaguarek.com/proyectos/landing-page-demo",
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
    title: "Landing page demo | jaguarek",
    description:
      "Descubre cómo transformé una idea en una landing page AAA para un chef privado de cocina kosher en la Riviera Maya.",
    images: ["https://jaguarek.com/images/og-image.png"],
  },
  alternates: {
    canonical: "https://jaguarek.com/proyectos/landing-page-demo",
  },
  keywords: [
    "landing page",
    "desarrollo web",
    "diseño web",
    "cocina kosher",
    "chef privado",
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
      >
        <HeroProject className="dark:bg-background xl:min-h-[calc(100vh-80px)] 2xl:px-20 ">
          <motion.div
            variants={defaultContainerAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: "some" }}
          >
            <HeroColumnWrapper>
              <HeroCard>
                <motion.div
                  variants={slideSmfromLeft}
                  className="flex gap-2 items-center mb-4"
                >
                  <div className="size-12 lg:size-16 2xl:size-20">
                    <Image src={XcaticLogo} alt="" />
                  </div>
                  <span className="kanit text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black kanit bg-gradient-to-r bg-clip-text  text-transparent dark:from-nB-orange from-nB-black to-nB-gray-dark dark:to-nB-yellow uppercase text-center ">
                    Xcatic
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
                      Landing Page <span className=" font-semibold">AAA</span>
                    </motion.h2>
                  </HeroCardTitle>
                  <HeroCardDescription>
                    <motion.p variants={slideSmfromLeft} className="text-lg">
                      Cuando el Diseño y el Performance{" "}
                      <span className=" font-semibold">Enamoran</span>
                    </motion.p>
                  </HeroCardDescription>
                </HeroCardHeader>
                <HeroCardContent>
                  <motion.p variants={slideSmfromLeft} className="text-lg">
                    Desarrollé una landing page AAA para un chef privado de
                    cocina kosher en la Riviera Maya, a la que nombré{" "}
                    <strong>Xcatic</strong>, inspirado en el chile mexicano,
                    güero pero picosito y suave en apariencia, pero con un toque
                    distintivo. Aunque el cliente no avanzó, el proyecto
                    demostró mi capacidad para crear experiencias digitales
                    excepcionales, incluso con recursos limitados.
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
                      href="https://privatechef-landing-page.netlify.app/"
                      label="Explora la propuesta"
                    />
                  </motion.div>
                </HeroCardFooter>
              </HeroCard>
            </HeroColumnWrapper>
          </motion.div>
          <HeroColumnWrapper>
            <motion.div
              variants={scaleInCenter}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: "circInOut",
              }}
              className="flex items-center  justify-center mt-6 lg:mt-0"
            >
              <div className="w-[65%] relative mb-8 p-2 lg:p-4 box-content border-4 lg:border-[14px] border-[#232d39] rounded-full">
                <Image
                  className="w-full object-cover object-[20%,30%] aspect-square h-auto rounded-full border-[20px] lg:border-[40px] border-nB-yellow"
                  src={ChefKosher}
                  alt=""
                  loading={"eager"}
                  priority
                />
                <div className="absolute inset-0 w-full h-full flex items-end justify-end -translate-x-6 lg:-translate-x-10">
                  <Image
                    className="w-2/6 lg:w-1/4 object-cover object-top aspect-square h-auto rounded-full "
                    src={CocinaKosher}
                    alt=""
                    loading={"eager"}
                  />
                </div>
              </div>
            </motion.div>
          </HeroColumnWrapper>
        </HeroProject>
      </motion.div>
      <ContentTextFeatured
        title="Xcatic LANDING"
        content="Con más de 6 años de experiencia en desarrollo frontend, combiné mis habilidades técnicas y creativas para entregar una propuesta profesional, optimizada y visualmente atractiva."
        className="bg-[#fffaf5] dark:bg-nB-gray-dark/20"
      />
      <section className="w-full bg-nB-blue pb-24  md:px-12 xl:px-24 lg:py-20 xl:py-28 text-nB-white border-y border-nB-black ">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 place-items-center justify-items-center ">
          <motion.div
            variants={defaultContainerAnim}
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: 0.4, once: true }}
            className="relative  sm:p-4 md:p-6 lg:p-8 2xl:p-16 h-full w-full"
          >
            <motion.div variants={scaleInCenter} className="w-full h-full">
              <StackOrbitLanding />
            </motion.div>
          </motion.div>
          <div className="flex items-center justify-center h-full w-full ">
            <motion.div
              variants={defaultContainerAnim}
              initial="hidden"
              whileInView={"show"}
              viewport={{ amount: 0.4, once: true }}
              className="space-y-8 flex flex-col justify-between w-full px-8"
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
                  Xcatic Landing
                </motion.h2>
                <motion.p
                  variants={slideSmfromLeft}
                  className="text-base font-semibold lg:text-base xl:text-xl uppercase mt-0.5 "
                >
                  Un Chef Privado, Una Propuesta Digital Exclusiva
                </motion.p>
              </hgroup>
              <div className="flex flex-col gap-4 text-xl lg:text-2xl text-balance">
                <motion.p variants={slideSmfromLeft}>
                  Todo comenzó con un reto: crear una landing page AAA para un
                  chef privado de cocina kosher en la Riviera Maya. Tenía muy
                  poco contenido inicial, pero quería que cada elemento
                  transmitiera exclusividad, claridad y profesionalismo.
                </motion.p>

                <motion.p variants={slideSmfromLeft}>
                  El objetivo era simple pero ambicioso: diseñar una experiencia
                  digital que capturara la esencia de un servicio único y lo
                  hiciera accesible para cualquier visitante.
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
        title="Los Desafíos que Superé"
        content="Este proyecto fue una oportunidad para demostrar mi capacidad para resolver problemas complejos y entregar resultados profesionales, incluso con recursos limitados."
        className="bg-[#fffaf5] dark:bg-nB-gray-dark/20"
      />
      <LandingChallenges />
      <ContentTextFeatured
        className="bg-nB-blue-vista border-nB-black border text-nB-black"
        title="Una Experiencia AAA para un Servicio Exclusivo"
        content="El diseño de esta landing page fue concebido para reflejar la misma exclusividad y sofisticación que caracteriza los servicios de un chef privado. Con un enfoque creativo y detalles cuidadosamente elaborados, cada elemento transmite elegancia y profesionalismo, ofreciendo una experiencia visual tan exclusiva como el servicio que representa."
      />
      <LandingFeatures />
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
              Aunque el cliente no avanzó, esta landing page es un ejemplo de
              cómo puedo transformar ideas en experiencias digitales
              excepcionales. Explora el demo y descubre cómo el diseño y la
              tecnología pueden trabajar juntos para crear algo memorable.
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
                href="https://privatechef-landing-page.netlify.app/"
                label="Visita la landing Page"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
