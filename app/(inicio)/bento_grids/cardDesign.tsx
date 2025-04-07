import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import IMGIACHARACTERS from "@/public/assets/bento/ai_generation_animation_style_characters.png"
import { useId } from "react"

export default function CardDesign() {
  const titleId = useId()
  const descriptionId = useId()
  return (
    <Link
      href={"/proyectos/creacion-de-contenido"}
      className="grid grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 items-center w-full h-full group rounded-none lg:rounded-2xl focus-visible:outline-offset-[5px] hover:focus-visible:outline-none"
      aria-describedby={titleId}
      aria-labelledby={descriptionId}
    >
      <div className="p-4 md:p-6 w-full col-span-2 lg:col-span-1 2xl:col-span-2 space-y-2 xl:space-y-4 overflow-hidden">
        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black kanit text-nB-black">
          Creación de contenido
        </h2>
        <p className="text-sm md:text-base line-clamp-2 lg:line-clamp-3 xl:line-clamp-4 2xl:line-clamp-none text-nB-black  text-balance">
          Proyectos de diseño, motion graphics y diseños con IA, todos con un
          toque personal que los hace únicos. Cada pieza busca conectar
          emocionalmente y generar un impacto cultural significativo, refinando
          lo generativo para darle intención y autenticidad.
        </p>
        <div className="hidden lg:flex gap-2">
          <span className="sr-only">Categories: </span>
          <Badge className="text-[10px] sm:text-xs">Diseño</Badge>
          <Badge className="text-[10px] sm:text-xs">Animación</Badge>
        </div>
      </div>
      <div className="aspect-square w-full overflow-hidden h-full flex justify-end items-end">
        <div className=" w-full h-full relative 2xl:w-fit">
          <Image
            src={IMGIACHARACTERS}
            alt="cocina kosher tradicional sello "
            className="object-cover 2xl:object-contain object-left-top h-full w-full group-hover:scale-105 group-focus-visible:scale-105 will-change-transform transition-all duration-300 filter grayscale group-hover:filter-none group-focus-visible:filter-none"
          />
        </div>
      </div>
    </Link>
  )
}
