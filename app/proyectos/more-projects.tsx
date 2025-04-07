"use client"

import IMGYauhCover from "@/public/assets/projects/yauh/yauhAuthCover.jpg"
import IMGDesign from "@/public/assets/projects/design/gallery/phone_render.jpg"
import IMGMDC from "@/public/assets/projects/mdc/thubnail_mdc.jpg"
import IMGLanding from "@/public/assets/projects/xcatic/landingScrenshoot.jpg"
import IMGProyects from "@/public/assets/projects/proyects_sm_card.jpg"
import MiniCard from "@/components/ui/mini-card"
import { StaticImageData } from "next/image"

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import MoreProjectsHeader from "./more-projects-header"

type ProjectsData = {
  slug: string
  title: string
  href: string
  imgSrc: string | StaticImageData
}

const projects: ProjectsData[] = [
  {
    slug: "mexico-development-center",
    title: "MDC Web Site",
    href: "/proyectos/mexico-development-center",
    imgSrc: IMGMDC,
  },
  {
    slug: "landing-page-demo",
    title: "Ejemplo de landing page",
    href: "/proyectos/landing-page-demo",
    imgSrc: IMGLanding,
  },
  {
    slug: "yauh",
    title: "Yauh web app",
    href: "/proyectos/yauh",
    imgSrc: IMGYauhCover,
  },
  {
    slug: "creacion-de-contenido",
    title: "Diseños",
    href: "/proyectos/creacion-de-contenido",
    imgSrc: IMGDesign,
  },
  {
    slug: "proyectos",
    title: "Todos los Proyectos",
    href: "/proyectos",
    imgSrc: IMGProyects,
  },
]
export default function MoreProjects() {
  const pathname = usePathname()

  // Filtrar proyectos para excluir el que coincide con la ruta actual
  const filteredProjects = useMemo(
    () => projects.filter((project) => project.href !== pathname),
    [pathname],
  )

  return (
    <section className=" border-y border-foreground pt-20 pb-24 px-8 md:px-12 2xl:py-28 w-full lg:px-10 2xl:px-24">
      <MoreProjectsHeader />
      <div className="flex flex-col gap-4 md:grid grid-cols-2 lg:flex lg:flex-row items-center lg:gap-8 ">
        {filteredProjects.map((project: ProjectsData) => (
          <MiniCard
            key={project.slug}
            title={project.title}
            href={project.href}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </section>
  )
}
