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

import Image from "next/image"
import {
  defaultContainerAnim,
  fadeIn,
  fadeSlideDown,
  slideSmfromLeft,
  slideXsfromRight,
} from "@/lib/animations/variants"
import IMGHeroAbout from "@/public/assets/about/jaguar_motion.jpg"
import CtaLink from "@/components/ui/ctaLink"
import ListScrollParralax from "./list-scroll-parralax"
import TechnicalSkills from "./technical-skills"
import ContentTextFeatured from "@/components/ui/content-text-featured"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre mí | jaguarek",
  description:
    "Te cuento como pase de bartender a desarrollador web. Mi camino no fue convencional, pero siempre estuvo guiado por la curiosidad.",
  openGraph: {
    title: "Sobre mí | jaguarek",
    description:
      "Te cuento como pase de bartender a desarrollador web. Mi camino no fue convencional, pero siempre estuvo guiado por la curiosidad.",
    url: "https://jaguarek.com/sobre-mi",
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
    title: "Sobre mí | jaguarek",
    description:
      "Te cuento como pase de bartender a desarrollador web. Mi camino no fue convencional, pero siempre estuvo guiado por la curiosidad.",
    images: ["https://jaguarek.com/images/og-image.png"],
  },
  alternates: {
    canonical: "https://jaguarek.com/sobre-mi",
  },
  keywords: [
    "sobre mí",
    "desarrollador web",
    "portafolio",
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
        animate="show"
        whileInView="show"
        viewport={{ once: false, amount: "some" }}
      >
        <HeroProject className="dark:bg-background 2xl:min-h-[calc(100vh-80px)] 2xl:px-20 ">
          {/* left */}
          <motion.div>
            <HeroColumnWrapper>
              <HeroCard>
                <HeroCardHeader className="">
                  <motion.div
                    variants={slideSmfromLeft}
                    className="flex gap-2 items-center mb-4"
                  >
                    <span className="kanit text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black kanit bg-gradient-to-r bg-clip-text  text-transparent from-nB-black to-nB-gray dark:text-[#73fd8e] uppercase text-center ">
                      JAGUAR EK.
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
                      De Bartender a Frontend
                      <span className=" font-semibold"></span>
                    </motion.h2>
                  </HeroCardTitle>
                  <HeroCardDescription>
                    <motion.p variants={slideSmfromLeft} className="text-lg">
                      Mi camino no fue convencional, pero siempre estuvo guiado
                      por la curiosidad.
                    </motion.p>
                  </HeroCardDescription>
                </HeroCardHeader>
                {/* content */}
                <HeroCardContent>
                  <motion.p variants={slideSmfromLeft}>
                    Aprendí a programar mientras trabajaba como motion graphics
                    artist. Hoy, combino creatividad y tecnología para construir
                    experiencias digitales accesibles, funcionales y visualmente
                    atractivas.
                  </motion.p>
                </HeroCardContent>
                <HeroCardFooter>
                  <motion.div
                    variants={fadeIn}
                    transition={{ duration: 0.4 }}
                    className="w-fit h-fit "
                  >
                    <CtaLink href="#historia" label="Descubre mi historia  " />
                  </motion.div>
                </HeroCardFooter>
              </HeroCard>
            </HeroColumnWrapper>
          </motion.div>
          {/* right */}
          <motion.div>
            <HeroColumnWrapper className=" xl:p-8 2xl:p-10 ">
              <motion.div
                variants={slideXsfromRight}
                transition={{ duration: 0.5 }}
                className="flex w-full h-full lg:h-auto justify-center "
              >
                <Image
                  src={IMGHeroAbout}
                  alt=""
                  className="object-cover h-full w-full lg:rounded-xl lg:max-w-2xl lg:border-2 border-foreground dark:border-foreground/80 lg:shadow-[4px_4px_0px] lg:shadow-foreground lg:dark:shadow-foreground/80"
                  priority={true}
                  quality={80}
                />
              </motion.div>
            </HeroColumnWrapper>
          </motion.div>
        </HeroProject>
        <ListScrollParralax />
        <ContentTextFeatured
          title="Perfil Técnico"
          content="Mi experiencia como motion graphics artist me dio una ventaja única: entiendo flujo, ritmo y narrativa visual, algo que pocos desarrolladores dominan de manera innata. Ahora, uso tecnologías modernas para crear interfaces dinámicas y experiencias interactivas."
          className="bg-[#fffaf5] dark:bg-nB-gray-dark/20"
        />
        <TechnicalSkills />
      </motion.div>
    </>
  )
}
