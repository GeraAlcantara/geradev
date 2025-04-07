import Image from "next/image"

import IMGYauhLogoLight from "@/public/assets/projects/yauh/logo_yauh_light.png"
import IMGYauhCover from "@/public/assets/projects/yauh/yauhAuthCover.jpg"

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

export default function BigCardYauh() {
  return (
    <BigCard className="">
      {/* image */}
      <div className="flex items-center  justify-center w-full bg-nB-violet border-b-2 border-nB-black  ">
        <div className="md:h-[338px] flex items-center justify-center w-full h-64 ">
          <Image
            src={IMGYauhCover}
            alt=""
            className="object-cover h-full w-full "
            priority={true}
            quality={80}
          />
        </div>
      </div>
      {/* header */}
      <BigCardHeader>
        <div className="flex gap-2 items-center">
          <div className="size-12 lg:size-16 xl:size-24  2xl:size-28 shrink-0">
            <Image src={IMGYauhLogoLight} alt="" />
          </div>
          {/* title */}
          <BigCardTitle>
            <h2>Yauh</h2>
          </BigCardTitle>
        </div>
        <BigCardDescription>
          <p>Una Plataforma Innovadora para Rentas a Largo Plazo.</p>
        </BigCardDescription>

        {/* descripcion */}
      </BigCardHeader>
      {/* content */}
      <BigCardContent className="">
        <p className="text-balance">
          Plataforma web innovadora para rentas a largo plazo en la Riviera
          Maya, diseñada y desarrollada desde cero. Con un enfoque en la
          usabilidad y la experiencia del usuario. Proyecto personal construido
          con dedicación y pasión por la innovación.
        </p>
      </BigCardContent>

      {/* footer */}
      <BigCardFooter className=" px-5 2xl:px-8 pb-6 xl:pb-8">
        <div className="flex flex-wrap gap-4 w-full">
          <Link
            href="/proyectos/yauh"
            className={cn(
              buttonNBVariants({ variant: "default", size: "default" }),
              "w-full xl:w-fit justify-self-end font-medium border-nB-shadow shadow-nB-shadow text-lg lg:text-xl uppercase",
            )}
          >
            Visita el proyecto
          </Link>
          <Link
            referrerPolicy="no-referrer-when-downgrade"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.yauh.app/busqueda?query=playa+del+carmen&price=6000&lat=20.6156331&lng=-87.0992686"
            className={cn(
              buttonNBVariants({ variant: "default", size: "default" }),
              "w-full xl:w-fit justify-self-end font-medium border-nB-shadow shadow-nB-shadow bg-nB-blue text-lg lg:text-xl text-nB-white uppercase",
            )}
          >
            Visita Yauh
          </Link>
        </div>
      </BigCardFooter>
    </BigCard>
  )
}
