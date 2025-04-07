import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import IMGKosher from "@/public/assets/projects/cocinakosher_hero_155.webp"
import { useId } from "react"

export default function CardLanding() {
  const titleId = useId()
  const descriptionId = useId()

  return (
    <>
      <Link
        href={"/proyectos/landing-page-demo"}
        className="group rounded-none lg:rounded-2xl focus-visible:outline-offset-[5px] hover:focus-visible:outline-none"
        aria-describedby={titleId}
        aria-labelledby={descriptionId}
      >
        <Card className="h-full rounded-none lg:rounded-2xl border-none bg-nB-orange dark:bg-nB-green transition ease-in-out duration-300 text-nB-black justify-between flex flex-col gap-0">
          <CardHeader className=" w-full  ">
            <div className="flex justify-end ">
              {/* <div className="h-44 w-full  bg-orange-200"></div> */}
              <Image
                src={IMGKosher}
                alt="cocina kosher tradicional sello "
                className=" will-change-auto w-20 h-20 lg:w-20 lg:h-auto scale-[.92] group-hover:scale-100 transition-all duration-200 ease-in hidden lg:block"
              />
            </div>
            <CardTitle className="">
              <hgroup className="flex flex-col" id={titleId}>
                <h2 className="kanit text-3xl md:text-5xl xl:text-7xl font-light leading-[0.8] ">
                  Landing&nbsp;
                </h2>
                <p className="kanit text-5xl md:text-7xl xl:text-8xl font-black leading-[0.7] ">
                  Page
                </p>
              </hgroup>
            </CardTitle>
            <CardDescription>
              <p id={descriptionId} className="sr-only ">
                Landing page moderna y adaptable para un chef, con diseño visual
                atractivo, carrusel interactivo de menú, tipografías y colores
                personalizados. Demostré habilidades independientes en diseño y
                desarrollo, entregando una propuesta profesional y creativa.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-0 md:py-4">
            <p className="text-sm md:text-base line-clamp-2 lg:line-clamp-4 xl:line-clamp-none text-nB-black">
              Landing page moderna y adaptable para un chef, con diseño visual
              atractivo, carrusel interactivo de menú, tipografías y colores
              personalizados. Demostré habilidades independientes en diseño y
              desarrollo, entregando una propuesta profesional y creativa.
            </p>
          </CardContent>
          <CardFooter className="w-full p-4 md:p-6">
            <footer className="flex gap-2 ">
              <Badge className="text-[10px] md:text-xs truncate">
                Landing <span className="hidden md:block">&nbsp;Page</span>
              </Badge>
              <Badge className="text-[10px] md:text-xs">Concept</Badge>
            </footer>
          </CardFooter>
        </Card>
      </Link>
    </>
  )
}
