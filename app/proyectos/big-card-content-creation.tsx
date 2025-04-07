import Image from "next/image"

import IMGYauhLogoLight from "@/public/assets/projects/yauh/logo_yauh_light.png"

import IMGIACHARACTERS from "@/public/assets/bento/ai_generation_animation_style_characters.png"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonNBVariants } from "@/components/ui/buttonNB"
import {
  BigCard,
  BigCardContent,
  BigCardDescription,
  BigCardFooter,
  BigCardHeader,
  BigCardTitle,
} from "@/components/ui/big-card"

export default function BigCardContentCreation() {
  return (
    <BigCard className="group ">
      {/* image */}
      <div className=" flex items-center  justify-center w-full bg-nB-yellow border-b-2 border-nB-black  ">
        <Image
          src={IMGIACHARACTERS}
          alt="cocina kosher tradicional sello "
          className="object-contain md:h-[338px] flex items-center justify-center w-full h-64  group-focus-visible:scale-105 will-change-transform transition-all duration-400 ease-in-out filter grayscale group-hover:filter-none group-focus-visible:filter-none overflow-hidden"
        />
      </div>
      {/* header */}
      <BigCardHeader>
        <div className="flex gap-2 items-center">
          {/* title */}
          <BigCardTitle>
            <h2>Diseño</h2>
          </BigCardTitle>
        </div>
        <BigCardDescription>
          <p>Creación de contenido Cool 😎</p>
        </BigCardDescription>

        {/* descripcion */}
      </BigCardHeader>
      {/* content */}
      <BigCardContent className="">
        <p className="text-balance">
          Proyectos de diseño, motion graphics y diseños con IA, todos con un
          toque personal que los hace únicos. Cada pieza busca conectar
          emocionalmente y generar un impacto cultural significativo, refinando
          lo generativo para darle intención y autenticidad.
        </p>
      </BigCardContent>

      {/* footer */}
      <BigCardFooter className=" px-5 2xl:px-8 pb-6 xl:pb-8">
        <div className="flex flex-wrap gap-4 w-full">
          <Link
            href="/proyectos/creacion-de-contenido"
            className={cn(
              buttonNBVariants({ variant: "default", size: "default" }),
              "w-full xl:w-fit justify-self-end font-medium border-nB-shadow shadow-nB-shadow text-lg lg:text-xl uppercase",
            )}
          >
            Explora los diseños
          </Link>
        </div>
      </BigCardFooter>
    </BigCard>
  )
}
