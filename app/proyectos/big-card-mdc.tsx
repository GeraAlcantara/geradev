import {
  BigCard,
  BigCardContent,
  BigCardDescription,
  BigCardFooter,
  BigCardHeader,
  BigCardTitle,
} from "@/components/ui/big-card"
import Image from "next/image"
import IconLibrary from "@/components/icons/icon-library"
import CheckBackImg from "@/public/assets/projects/mdc/heroProductosCheckback.png"
import ChatImg from "@/public/assets/projects/mdc/heroserviciosChatIconMiddle.png"
import ServHeroMenImg from "@/public/assets/projects/mdc/heroServiciosMen.png"
import PlayImg from "@/public/assets/projects/mdc/heroserviciosPlayIconFront.png"

import MDCLogo from "@/public/assets/projects/mdc/logo.png"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonNBVariants } from "@/components/ui/buttonNB"

export default function BigCardMdc() {
  return (
    <BigCard className=" border-2 border-nB-black shadow-nB-black shadow-[6px_6px_0px] rounded-xl overflow-hidden ">
      {/* image */}
      <div className="relative w-full flex items-center justify-center bg-nB-blue dark:bg-nB-purple border-b-2 border-nB-black ">
        <div className="relative grid grid-cols-7 grid-rows-3 md:w-[350px] md:h-[338px] w-full h-64">
          <div className="col-start-1 row-start-1 row-end-4 col-end-7 z-[2] ">
            <Image
              alt="empleado con laptop"
              loading="eager"
              priority={true}
              src={ServHeroMenImg}
              style={{
                maskImage: "linear-gradient(black 70%, transparent)",
              }}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="row-start-1 col-start-3 p-2 opacity-30 flex items-end">
            <Image
              alt="icono de marca de verificacion "
              loading="eager"
              src={CheckBackImg}
            />
          </div>
          <div className="row-start-1 col-span-2 row-span-2 col-end-8 col-start-5 p-5 md:p-8 ">
            <div className="size-40 p-8">
              <IconLibrary />
            </div>
          </div>
          <div className="row-start-1 col-start-2 row-span-2 pt-4 opacity-50 flex items-center ">
            <Image
              alt="icono de marca de verificacion "
              loading="eager"
              src={ChatImg}
              className="object-contain h-full w-full"
            />
          </div>

          <div className="row-start-2 col-start-2 col-span-2  pl-3 pt-3 z-[3]">
            <Image
              alt="icono de play "
              loading="eager"
              src={PlayImg}
              className="object-contain h-full w-full opacity-70"
            />
          </div>
        </div>
      </div>
      {/* header */}
      <BigCardHeader>
        <div className="flex gap-2 items-center">
          <div className="size-12 lg:size-16 xl:size-20 2xl:size-24 shrink-0">
            <Image src={MDCLogo} alt="" />
          </div>
          {/* title */}
          <BigCardTitle>
            <h2>MDC</h2>
          </BigCardTitle>
        </div>
        <BigCardDescription>
          <p>Diseñando un Sitio Web para Mexico Development Center</p>
        </BigCardDescription>

        {/* descripcion */}
      </BigCardHeader>
      {/* content */}
      <BigCardContent className="">
        <p className="text-balance">
          Sitio web moderno y adaptable con navegación fluida en todos los
          dispositivos, que ofrece contenidos multimedia atractivos, vistas
          previas de cursos interactivos, un blog profesional y servicios
          esenciales.
        </p>
      </BigCardContent>

      {/* footer */}
      <BigCardFooter className=" ">
        <div className="flex flex-wrap gap-4 w-full">
          <Link
            href="/proyectos/mexico-development-center"
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
            href="https://sitio.mexicodc.com/"
            className={cn(
              buttonNBVariants({ variant: "default", size: "default" }),
              "w-full xl:w-fit justify-self-end font-medium border-nB-shadow shadow-nB-shadow bg-nB-blue text-lg lg:text-xl  text-nB-white uppercase",
            )}
          >
            Visita la web
          </Link>
        </div>
      </BigCardFooter>
    </BigCard>
  )
}
