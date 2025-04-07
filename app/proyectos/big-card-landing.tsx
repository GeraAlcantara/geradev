import {
  BigCard,
  BigCardContent,
  BigCardDescription,
  BigCardFooter,
  BigCardHeader,
  BigCardTitle,
} from "@/components/ui/big-card"
import Image from "next/image"

import ChefKosher from "@/public/assets/projects/xcatic/chefIA.webp"
import CocinaKosher from "@/public/assets/projects/cocinakosher_hero_155.webp"

import XcaticLogo from "@/public/assets/projects/xcatic/logoXcatic.png"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonNBVariants } from "@/components/ui/buttonNB"

export default function BigCardLanding() {
  return (
    <BigCard className="">
      {/* image */}
      <div className="flex items-center  justify-center w-full bg-nB-violet border-b-2 border-nB-black  ">
        <div className="md:h-[338px] flex items-center justify-center w-full h-64 ">
          <div className="size-52  md:size-64  relative p-2 lg:p-4 box-content border-4 lg:border-[14px] border-[#232d39] rounded-full">
            <Image
              className="w-full object-cover object-[20%,30%] aspect-square h-auto rounded-full border-[10px] lg:border-[20px] border-nB-yellow"
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
        </div>
      </div>
      {/* header */}
      <BigCardHeader>
        <div className="flex gap-2 items-center">
          <div className="size-12 lg:size-16 xl:size-20 2xl:size-24 shrink-0">
            <Image src={XcaticLogo} alt="" />
          </div>
          {/* title */}
          <BigCardTitle>
            <h2>Xcatic</h2>
          </BigCardTitle>
        </div>
        <BigCardDescription>
          <p>Landing Page AAA</p>
        </BigCardDescription>

        {/* descripcion */}
      </BigCardHeader>
      {/* content */}
      <BigCardContent className="">
        <p className="text-balance">
          Landing page moderna y adaptable para un chef, con diseño visual
          atractivo, carrusel interactivo de menú, tipografías y colores
          personalizados. Demostré habilidades independientes en diseño y
          desarrollo, entregando una propuesta profesional y creativa.
        </p>
      </BigCardContent>

      {/* footer */}
      <BigCardFooter className=" px-5 2xl:px-8 pb-6 xl:pb-8">
        <div className="flex flex-wrap gap-4 w-full">
          <Link
            href="/proyectos/landing-page-demo"
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
            href="https://privatechef-landing-page.netlify.app/"
            className={cn(
              buttonNBVariants({ variant: "default", size: "default" }),
              "w-full xl:w-fit justify-self-end font-medium border-nB-shadow shadow-nB-shadow bg-nB-blue text-lg lg:text-xl text-nB-white uppercase",
            )}
          >
            Visita la Landing
          </Link>
        </div>
      </BigCardFooter>
    </BigCard>
  )
}
