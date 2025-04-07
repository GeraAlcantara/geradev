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
import IMGYauhPost from "@/public/assets/projects/yauh/buildingapartment.png"
import IMGYauhLogo from "@/public/assets/projects/yauh/logo_yauh_light.png"
import { useId } from "react"

export default function CardYauh() {
  const titleId = useId()
  const descriptionId = useId()
  return (
    <Link
      href={"/proyectos/yauh"}
      className="group rounded-none lg:rounded-2xl focus-visible:outline-offset-[5px] hover:focus-visible:outline-none"
      aria-describedby={titleId}
      aria-labelledby={descriptionId}
    >
      <Card className="h-full rounded-none lg:rounded-2xl border-none bg-[#252132] bg-[radial-gradient(#39354c_1px,transparent_1px)]  [background-size:16px_16px] gap-0  transition ease-in-out duration-300 text-nB-black justify-between flex flex-col p-0 md:py-4">
        <CardHeader className=" md:p-6 w-full pb-0 md:pb-4">
          <CardTitle className=" m-auto">
            <hgroup className="flex gap-2 items-center">
              <Image
                src={IMGYauhLogo}
                alt=""
                className="size-12 sm:size-16 md:size-20 xl:size-24"
              />
              <h2
                className="kanit text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black kanit bg-gradient-to-r bg-clip-text  text-transparent from-nB-pink to-nB-violet uppercase text-center "
                id={titleId}
              >
                Yauh
              </h2>
            </hgroup>
          </CardTitle>
          <CardDescription>
            <p id={descriptionId} className="sr-only ">
              Plataforma web innovadora para rentas a largo plazo en la Riviera
              Maya, diseñada y desarrollada desde cero. Con un enfoque en la
              usabilidad y la experiencia del usuario, Yauh ofrece una solución
              moderna y eficiente para encontrar hogares ideales. Proyecto
              personal construido con dedicación y pasión por la innovación.
            </p>
          </CardDescription>
        </CardHeader>
        <div className="aspect-video lg:aspect-square w-full overflow-hidden">
          <Image
            src={IMGYauhPost}
            alt="cocina kosher tradicional sello "
            className=" object-cover h-full w-full group-hover:scale-105 group-focus-visible:scale-105 will-change-transform transition-all duration-500 ease-in-out "
          />
        </div>

        <CardContent className="px-4 mt-2 py-0 md:py-4">
          <p className="text-sm md:text-base line-clamp-2 lg:line-clamp-none text-nB-white">
            Plataforma web innovadora para rentas a largo plazo en la Riviera
            Maya, diseñada y desarrollada desde cero. Con un enfoque en la
            usabilidad y la experiencia del usuario, Yauh ofrece una solución
            moderna y eficiente para encontrar hogares ideales. Proyecto
            personal construido con dedicación y pasión por la innovación.
          </p>
        </CardContent>
        <CardFooter className="w-full p-4 md:p-6">
          <footer className="flex gap-2 ">
            <Badge className="text-[10px] md:text-xs truncate">Webapp</Badge>
            <Badge className="text-[10px] md:text-xs">Startup</Badge>
          </footer>
        </CardFooter>
      </Card>
    </Link>
  )
}
