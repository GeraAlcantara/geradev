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
  defaultContainerstaggerHigh,
  fadeIn,
  fadeSlideDown,
  scaleInCenter,
  slideSmfromLeft,
} from "@/lib/animations/variants"
import CtaLink from "@/components/ui/ctaLink"
import Image from "next/image"

import {
  MockupPost,
  MockupPostFooter,
  MockupPostHeader,
  MockupPostImgWrapper,
} from "./mockup-card-post"

import JaguarSticker from "@/public/assets/jaguar_neo_mexa.png"
import PostImgYauh from "@/public/assets/projects/design/young_couple.jpg"
import PostImgIsometric from "@/public/assets/projects/design/a_isometric_3d.jpg"

import StackOrbitCreator from "./stack-orbit-creator"
import MasonryGrid from "@/components/ui/masonry-grid"
import GalleryImgs from "./gallery-imgs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Creación de Contenido | jaguarek",
  description:
    "Explora mi trabajo en la creación de contenido digital, donde diseño y desarrollo experiencias visuales únicas.",
  openGraph: {
    title: "Creación de Contenido | jaguarek",
    description:
      "Explora mi trabajo en la creación de contenido digital, donde diseño y desarrollo experiencias visuales únicas.",
    url: "https://jaguarek.com/creacion-de-contenido",
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
    title: "Creación de Contenido | jaguarek",
    description:
      "Explora mi trabajo en la creación de contenido digital, donde diseño y desarrollo experiencias visuales únicas.",
    images: ["https://jaguarek.com/images/og-image.png"],
  },
  alternates: {
    canonical: "https://jaguarek.com/creacion-de-contenido",
  },
  keywords: [
    "creación de contenido",
    "diseño gráfico",
    "fotografía",
    "video",
    "animación",
    "arte digital",
    "tecnología",
    "creatividad",
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
                  <span className="kanit text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black kanit bg-gradient-to-r bg-clip-text  text-transparent dark:from-nB-orange from-nB-black to-nB-gray-dark dark:to-nB-yellow uppercase text-left ">
                    Creación de Contenido
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
                      Diseño, Animación y Contenido{" "}
                      <span className=" font-semibold">Creativo</span>
                    </motion.h2>
                  </HeroCardTitle>
                  <HeroCardDescription>
                    <motion.p variants={slideSmfromLeft} className="text-lg">
                      Donde la Tecnología se Encuentra con la&nbsp;
                      <span className=" font-semibold">Imaginación</span>
                    </motion.p>
                  </HeroCardDescription>
                </HeroCardHeader>
                <HeroCardContent>
                  <motion.p variants={slideSmfromLeft} className="text-lg">
                    Como creador de contenido{" "}
                    <strong>multidisciplinario</strong>, combino diseño gráfico,
                    motion graphics, edición de video, creación de imágenes y
                    videos con IA, e ilustraciones para ofrecer soluciones
                    visuales impactantes. Desde campañas en redes sociales hasta
                    proyectos como Yauh, cada pieza está diseñada para{" "}
                    <strong>captar atención y generar engagement</strong>.
                  </motion.p>
                </HeroCardContent>
                <HeroCardFooter>
                  <motion.div
                    variants={fadeIn}
                    transition={{ duration: 0.4 }}
                    className="w-fit h-fit "
                  >
                    <CtaLink href="#" label="Explorar" />
                  </motion.div>
                </HeroCardFooter>
              </HeroCard>
            </HeroColumnWrapper>
          </motion.div>
          <HeroColumnWrapper className="sm:justify-items-center ">
            <motion.div
              variants={defaultContainerstaggerHigh}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: "some" }}
              className="grid grid-cols-1 lg:-translate-y-10 pl-3 sm:pl-0 sm:pr-20 pb-20"
              transition={{ delayChildren: 0.2 }}
            >
              <motion.div
                variants={scaleInCenter}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: "circInOut",
                }}
                className="flex items-center justify-center mt-6 lg:mt-0 max-w-60 w-full h-full max-h-80 col-start-1 row-start-1"
              >
                <MockupPost>
                  <MockupPostHeader />
                  <MockupPostImgWrapper variant={"blue"}>
                    <Image
                      src={JaguarSticker}
                      alt=""
                      className="size-full object-contain p-4 rotate-3"
                    />
                  </MockupPostImgWrapper>
                  <MockupPostFooter />
                </MockupPost>
              </motion.div>
              <motion.div
                variants={scaleInCenter}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: "circInOut",
                }}
                className="flex items-center justify-center mt-6 lg:mt-0 max-w-60 w-full h-full max-h-80 col-start-1 row-start-1 translate-x-10 translate-y-5"
              >
                <MockupPost>
                  <MockupPostHeader />
                  <MockupPostImgWrapper variant={"default"}>
                    <Image
                      src={PostImgIsometric}
                      alt=""
                      className="size-full object-cover "
                    />
                  </MockupPostImgWrapper>
                  <MockupPostFooter />
                </MockupPost>
              </motion.div>
              <motion.div
                variants={scaleInCenter}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: "circInOut",
                }}
                className="flex items-center justify-center mt-6 lg:mt-0 max-w-60 w-full h-full max-h-80  col-start-1 row-start-1 translate-x-20 translate-y-14"
              >
                <MockupPost>
                  <MockupPostHeader />
                  <MockupPostImgWrapper variant={"blue"}>
                    <Image
                      src={PostImgYauh}
                      alt=""
                      className="size-full object-cover object-top "
                    />
                  </MockupPostImgWrapper>
                  <MockupPostFooter />
                </MockupPost>
              </motion.div>
            </motion.div>
          </HeroColumnWrapper>
        </HeroProject>
      </motion.div>
      <section className="w-full pb-24  md:px-12 xl:px-24 lg:py-20 xl:py-28 bg-nB-orange border-y border-nB-black ">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 place-items-center justify-items-center ">
          <motion.div
            variants={defaultContainerAnim}
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: 0.4, once: true }}
            className="relative  sm:p-4 md:p-6 lg:p-8 2xl:p-16 h-full w-full"
          >
            <motion.div variants={scaleInCenter} className="w-full h-full">
              <StackOrbitCreator />
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
                  Mi Enfoque Creativo
                </motion.h2>
                <motion.p
                  variants={slideSmfromLeft}
                  className="text-base font-semibold lg:text-base xl:text-xl uppercase mt-0.5 "
                >
                  Un Enfoque Integral para el Contenido Visual
                </motion.p>
              </hgroup>
              <div className="flex flex-col gap-4 text-xl lg:text-2xl text-balance">
                <motion.p variants={slideSmfromLeft}>
                  Mi proceso creativo combina herramientas tradicionales y
                  tecnologías emergentes para producir contenido que no solo sea
                  visualmente atractivo, sino también funcional y alineado con
                  los objetivos del cliente. Ya sea un video promocional, un
                  diseño 3D o un post generado con IA, cada proyecto es único y
                  está pensado para destacar.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-6 2xl:px-12 py-4 md:py-6 lg:py-8 xl:py-12 2xl:py-16 border-b border-nB-black">
        <header className="flex flex-col gap-4 max-w-5xl pb-8 lg:pb-8 xl:pb-12">
          <h2 className="kanit text-3xl md:text-3xl lg:text-4xl 2xl:text-8xl font-black">
            Diseños y videos
          </h2>
          <p className="text-lg 2xl:text-xl">
            Estos son algunos ejemplos de mis proyectos, donde diseño gráfico,
            motion graphics y creatividad convergen para ofrecer soluciones
            innovadoras adaptadas a las necesidades de cada cliente.
          </p>
        </header>
        <MasonryGrid>
          <div className="w-full border-2 border-nB-shadow shadow-nB-shadow shadow-[4px_4px_0px] rounded-lg overflow-hidden bg-nB-black aspect-[9/16] mb-5 lg:mb-8 ">
            <iframe
              src="https://www.tiktok.com/player/v1/7417592748099800326?is_from_webapp=1&sender_device=pc&web_id=7255704750045513222"
              width="100%"
              className="w-full h-auto aspect-[9/16]"
            ></iframe>
          </div>
          <GalleryImgs />

          <div className="w-full border-2 border-nB-shadow shadow-nB-shadow shadow-[4px_4px_0px] rounded-lg overflow-hidden bg-nB-black aspect-video mt-5 lg:mt-8 ">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/128399535?h=484869eb9a"
              width="640"
              height="360"
              className="w-full h-auto aspect-video"
            ></iframe>
          </div>
          <div className="w-full border-2 border-nB-shadow shadow-nB-shadow shadow-[4px_4px_0px] rounded-lg overflow-hidden bg-nB-black aspect-video my-5 lg:my-8">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/194630434?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="1280"
              height="720"
              className="w-full h-auto aspect-video"
            ></iframe>
          </div>
          <div className="w-full border-2 border-nB-shadow shadow-nB-shadow shadow-[4px_4px_0px] rounded-lg overflow-hidden bg-nB-black aspect-[9/16] my-5 lg:my-8">
            <iframe
              title="tiktok-player"
              src="https://www.tiktok.com/player/v1/7426444703400348934?is_from_webapp=1&sender_device=pc&web_id=7255704750045513222"
              width="100%"
              className="w-full h-auto aspect-[9/16]"
            ></iframe>
          </div>
        </MasonryGrid>
      </section>
    </>
  )
}
