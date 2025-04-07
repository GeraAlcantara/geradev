import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import TinyCard from "./tinyCard"
import Link from "next/link"
import MDCImage from "@/public/assets/projects/project_mdc.png"
import { useId } from "react"

export default function CardMDC() {
  const titleId = useId()
  const descriptionId = useId()
  return (
    <>
      <Link
        href="/proyectos/mexico-development-center"
        className=" rounded-none lg:rounded-2xl overflow-hidden focus-visible:outline-offset-[5px] hover:focus-visible:outline-none "
        aria-describedby={titleId}
        aria-labelledby={descriptionId}
      >
        <div className="overflow-hidden rounded-none lg:rounded-2xl flex w-full h-full relative  ">
          <Image
            src={MDCImage}
            alt="Imagen representativa del proyecto Mexico Development Center"
            className="object-cover object-right-top rounded-none lg:rounded-2xl w-full "
            quality={90}
          />
          <div className="inset-0 translate-y-[102%] transition-all absolute group-hover:-translate-y-0 group-focus:-translate-y-0 group-focus-within:-translate-y-0 ease-in-out duration-300 rounded-none lg:rounded-2xl flex flex-col items-start w-full gap-1.5 h-full  will-change-auto  ">
            <article className="bg-nB-blue rounded-none lg:rounded-2xl p-3 xl:p-6 text-nB-black flex flex-col items-start h-full w-full justify-between ">
              <div className="hidden lg:block w-full relative " aria-hidden>
                <div className="relative self-center w-full h-full flex justify-center pt-4 ">
                  <div className="bg-nB-black/90 h-40 w-64 blur-xl opacity-0 group-hover:opacity-20 will-change-transform transition duration-300 delay-500 rounded-full absolute"></div>
                  <div className="relative z-0 scale-[.90] transform translate-x-2 translate-y-[4px] rotate-2 group-hover:translate-x-[55px] group-hover:translate-y-[9px] transition-all duration-300 group-hover:scale-[1.01] group-hover:rotate-10 delay-[440ms]">
                    <TinyCard
                      name="MDC"
                      username="Mexicodc"
                      alt="logo mdc"
                      src="assets/projects/mdc_logo.png"
                    />
                  </div>
                  <div className="absolute z-[1] scale-[.98] transform -translate-x-2 -translate-y-[3px] -rotate-1 group-hover:translate-y-[6px] group-hover:-translate-x-[45px] group-hover:-rotate-8 group-hover:scale-[1.01]  transition-all duration-500 delay-300 ease-in-out">
                    <TinyCard
                      name="Gera Alcatara"
                      username="JaguarEk"
                      alt="logo mdc"
                      src="assets/projects/jaguar_ek_avatar.png"
                    />
                  </div>
                </div>
              </div>

              <article className="flex flex-col gap-4  md:mt-10">
                <header className="mt-4 m-auto shadow-[4px_4px_0] shadow-black bg-white border-2 border-black w-fit px-6 py-2 min-w-[120px] rounded-none 2xl:mb-2">
                  <h2
                    id={titleId}
                    className="text-base leading-[1] md:text-xl 2xl:text-2xl font-black md:leading-normal text-center"
                  >
                    <span className="sr-only">Proyecto </span>
                    <span className="hidden lg:inline-block">
                      Mexico Development Center
                    </span>
                    <span className="lg:hidden">MDC</span>
                  </h2>
                </header>
                <p
                  id={descriptionId}
                  className="line-clamp-4 md:line-clamp-3 lg:line-clamp-none  text-xs  md:text-base xl:text-lg text-nB-white"
                >
                  Sitio web moderno y adaptable con navegación fluida en todos
                  los dispositivos, que ofrece contenidos multimedia atractivos,
                  vistas previas de cursos interactivos, un blog profesional y
                  servicios esenciales.
                </p>
                <div className="flex gap-2">
                  <span className="sr-only">Categories: </span>
                  <Badge className="text-[10px] sm:text-xs">Website</Badge>
                  <Badge className="text-[10px] sm:text-xs">Corporate</Badge>
                </div>
              </article>
            </article>
          </div>
        </div>
      </Link>
    </>
  )
}
