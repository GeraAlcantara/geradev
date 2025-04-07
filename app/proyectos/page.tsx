import NeoMayaEmojiOh from "@/components/stickers/neo-maya-emoji-oh"
import EmojiBarbas from "@/components/stickers/emoji-barbas"
import BigCardContentCreation from "./big-card-content-creation"
import BigCardLanding from "./big-card-landing"
import BigCardMdc from "./big-card-mdc"
import BigCardYauh from "./big-card-yauh"
import NeoMayaEmojiAhua from "@/components/stickers/neo-maya-emoji-ahua"
import EmojiOh from "@/components/stickers/emoji-oh"
import IconBulb from "@/components/icons/icon-bulb"
import IconPaintBucket from "@/components/icons/icon-paint-bucket"
import IconShape from "@/components/icons/icon-shape"
import IconTransform from "@/components/icons/icon-transform"
import * as motion from "motion/react-client"
import {
  defaultContainerAnim,
  textAnimation,
  titleAnimation,
} from "@/lib/animations/variants"

import SparkProyectos from "./spark-proyectos"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos | jaguarek",
  description:
    "Descubre mis proyectos recientes que combinan habilidades técnicas y creativas para transformar ideas en soluciones funcionales y visualmente atractivas.",
  openGraph: {
    title: "Proyectos | jaguarek",
    description:
      "Descubre mis proyectos recientes que combinan habilidades técnicas y creativas para transformar ideas en soluciones funcionales y visualmente atractivas.",
    url: "https://jaguarek.com/proyectos",
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
    title: "Proyectos | jaguarek",
    description:
      "Descubre mis proyectos recientes que combinan habilidades técnicas y creativas para transformar ideas en soluciones funcionales y visualmente atractivas.",
    images: ["https://jaguarek.com/images/og-image.png"],
  },
  alternates: {
    canonical: "https://jaguarek.com/proyectos",
  },
  keywords: [
    "proyectos",
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
      {/* hero */}
      <section className="overflow-hidden">
        <header className=" bg-nB-yellow text-nB-black relative flex flex-col items-center justify-center h-auto border-b border-black  text-center gap-20 px-8 pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-28 lg:pb-36">
          <div className="flex flex-col max-w-screen-sm gap-8 lg:gap-10 lg:max-w-screen-md z-20">
            <p className="text-xl md:text-2xl">
              Innovación y creatividad en acción
            </p>
            <h1 className="kanit text-5xl font-black md:text-6xl md:leading-[0.9] lg:text-9xl">
              Conoce Mis <SparkProyectos />
            </h1>
            <p className="text-xl md:text-2xl m-auto px-4 md:px-0 md:m-0">
              Descubre cómo combino habilidades técnicas y creativas para
              transformar ideas en soluciones funcionales y visualmente
              atractivas. Desde desarrollo frontend con tecnologías modernas
              hasta contenido multimedia, cada proyecto equilibra estética y
              funcionalidad para generar valor real.
            </p>
          </div>
          <div className="hidden md:block max-w-6xl w-full bg-nB-pink border-2 border-nB-black rounded-full shadow-nB-black shadow-[4px_4px_0px] p-6 ">
            <div className="size-full border-2 border-nB-black rounded-full flex items-center justify-between p-10 2xl:p-20 gap-4">
              <div className="relative bg-nB-yellow shrink-0 md:size-24 lg:size-32 xl:size-40 border-2 border-nB-black flex size-full items-center justify-center rounded-4xl shadow-[4px_4px_0px] shadow-nB-black p-3  ">
                <IconBulb />
              </div>
              <div className="bg-nB-yellow shrink-0 md:size-24 lg:size-32 xl:size-40 border-2 border-nB-black flex items-center justify-center rounded-4xl shadow-[4px_4px_0px] shadow-nB-black p-3  ">
                <IconPaintBucket />
              </div>
              <div className="bg-nB-yellow shrink-0 md:size-24 lg:size-32 xl:size-40 border-2 border-nB-black flex items-center justify-center rounded-4xl shadow-[4px_4px_0px] shadow-nB-black p-3  ">
                <IconShape />
              </div>
              <div className="bg-nB-yellow shrink-0 md:size-24 lg:size-32 xl:size-40 border-2 border-nB-black flex items-center justify-center rounded-4xl shadow-[4px_4px_0px] shadow-nB-black p-3  ">
                <IconTransform />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 overflow-visible z-10">
            {/* imagenes */}
            <div className="absolute -left-20 md:-left-16 xl:left-20 2xl:left-36 top-0 xl:top-36 size-32 xl:size-48 rotate-12 xl:rotate-[18deg]">
              <NeoMayaEmojiOh />
            </div>
            <div className="absolute -right-20 md:-right-16 xl:right-20 2xl:right-36 xl:top-36 top-0 size-32 xl:size-48 -rotate-12 xl:-rotate-[18deg]">
              <NeoMayaEmojiAhua />
            </div>
            <div className="absolute -right-20 md:-right-16 xl:right-20 2xl:right-36 top-3/4 md:top-1/2 size-32 xl:size-48 -rotate-12 xl:-rotate-[18deg]">
              <EmojiBarbas />
            </div>
            <div className="absolute -left-20 md:-left-16 xl:left-20 2xl:left-36 top-3/4 md:top-1/2 size-32 xl:size-48 rotate-12 xl:rotate-[18deg]">
              <EmojiOh />
            </div>
          </div>
        </header>
      </section>
      <section className="pb-12 lg:pb-28 2xl:pb-36 bg-nB-blue-vista dark:bg-nB-blue border-b border-nB-black">
        <div className={"py-12 px-8 md:px-12 lg:py-28 2xl:py-36 "}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView={"show"}
              viewport={{ amount: 0.4, once: true }}
              variants={defaultContainerAnim}
              className="flex flex-col space-y-7 text-left md:items-center md:text-center"
            >
              <motion.h2
                variants={titleAnimation}
                transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
                className="Kanit font-black mb-6 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl "
              >
                Proyectos Recientes que Inspiran
              </motion.h2>

              <motion.p
                variants={textAnimation}
                transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
                className="  lg:leading-tight text-balance text-lg md:text-2xl xl:text-3xl xl:leading-10"
              >
                Aquí hay un vistazo a algunos de mis proyectos más recientes.
                Cada uno refleja mi capacidad para adaptarme a diferentes
                estilos y necesidades.
              </motion.p>
            </motion.div>
          </div>
        </div>
        {/* proyectos big cards */}
        <div className=" flex justify-center items-center px-3 2xl:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* card */}
            <BigCardMdc />
            <BigCardLanding />
            <BigCardYauh />
            <BigCardContentCreation />
          </div>
        </div>
      </section>
      {/* Call to action Section */}
      {/* <section className="bg-nB-green dark:bg-nB-lime text-nB-black pt-20 pb-24 px-8 md:px-12 2xl:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: 0.4, once: true }}
            variants={containerPurposeAnimation}
            className="flex flex-col space-y-7 text-left md:items-center md:text-center"
          >
            <motion.h2
              variants={titleAnimation}
              transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
              className="kanit font-black mb-6 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl "
            >
              ¿Quieres Llevar Tu Proyecto al Siguiente Nivel?
            </motion.h2>
            <motion.p
              variants={textAnimation}
              transition={{ type: "tween", duration: 0.6, ease: "circOut" }}
              className=" lg:leading-tight text-balance text-lg md:text-2xl xl:text-3xl xl:leading-10"
            >
              Ya sea un diseño simple, una landing page funcional o una campaña
              multimedia completa, estoy aquí para ayudarte a alcanzar tus
              objetivos. Con más de 6 años de experiencia en desarrollo frontend
              y diseño creativo, puedo transformar tus ideas en realidad.
            </motion.p>
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.4 }}
              className="w-fit h-fit "
            >
              <CtaLink href={contactInfo.link} label="Contáctame Ahora" />
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </>
  )
}
