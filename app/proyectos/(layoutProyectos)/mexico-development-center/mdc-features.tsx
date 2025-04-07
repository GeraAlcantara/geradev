import * as motion from "motion/react-client"
import {
  SectionCard,
  SectionCardContent,
  SectionColumn,
  SectionMotionCardTitle,
  SectionTwoCols,
} from "@/components/ui/section-two-col"
import { slideSmfromLeft } from "@/lib/animations/variants"

import { JSX } from "react"
import { cn } from "@/lib/utils"

import {
  MdcBlogVisuals,
  MdcDemoVisuals,
  MdclibrarieVisuals,
  MdcRutesVisuals,
} from "./mdc-feature-visuals"

type BackgroundColor =
  | "bg-nB-black"
  | "bg-nB-blue"
  | "bg-nB-blue-vista"
  | "bg-nB-gray"
  | "bg-nB-gray-dark"
  | "bg-nB-green"
  | "bg-nB-lime"
  | "bg-nB-orange"
  | "bg-nB-pink"
  | "bg-nB-purple"
  | "bg-nB-violet"
  | "bg-nB-white"
  | "bg-nB-yellow"

interface Column {
  type: string
  jsx?: JSX.Element // Asumiendo que YauhVisualsSearch es un componente React
  title?: string
  text?: string
  backgroundColor: BackgroundColor // Propiedad opcional para el color de fondo
}
interface ProyectFeatures {
  id: string
  columns: Column[]
}
const yauhFeatures: ProyectFeatures[] = [
  {
    id: "MdcLiberiaFeature",
    columns: [
      {
        type: "content",
        title: 'Librería de Cursos "Llave en Mano"',
        text: "Un catálogo completo de cursos exportados en formato SCORM, listos para integrarse en cualquier plataforma LMS. Desde liderazgo efectivo hasta seguridad de la información, cada curso está diseñado para capacitar a los equipos de manera eficiente.",
        backgroundColor: "bg-nB-violet",
      },
      {
        type: "visuals",
        backgroundColor: "bg-nB-green",
        jsx: <MdclibrarieVisuals />,
      },
    ],
  },
  {
    id: "MdcDemosFeature",
    columns: [
      {
        type: "visuals",
        backgroundColor: "bg-nB-green",
        jsx: <MdcDemoVisuals />,
      },
      {
        type: "content",
        title: "Visualización de Cursos Demos",
        text: "Explora demos interactivos de los cursos para tener una idea clara de su contenido y estructura antes de integrarlos en tu plataforma. Esta funcionalidad permite una toma de decisiones más informada.",
        backgroundColor: "bg-nB-violet",
      },
    ],
  },

  {
    id: "MdcRutasFeature",
    columns: [
      {
        type: "content",
        title: "Rutas de Aprendizaje",
        text: "Rutas de aprendizaje adaptadas a las necesidades específicas de cada empresa, desde habilidades blandas hasta temas técnicos como ciberseguridad y teletrabajo",
        backgroundColor: "bg-nB-violet",
      },
      {
        type: "visuals",
        backgroundColor: "bg-nB-green",
        jsx: <MdcRutesVisuals />,
      },
    ],
  },
  {
    id: "MdcBlogFeature",
    columns: [
      {
        type: "visuals",
        backgroundColor: "bg-nB-green",
        jsx: <MdcBlogVisuals />,
      },
      {
        type: "content",
        title: "Blog Informativo",
        text: "Un espacio dedicado a compartir insights valiosos sobre e-learning, gamificación y tendencias en capacitación empresarial. El blog está diseñado para mantener a los usuarios actualizados y comprometidos.",
        backgroundColor: "bg-nB-violet",
      },
    ],
  },
]

export default function MdcFeatures() {
  return (
    <section className=" border-nB-black  ">
      {yauhFeatures.map((feature) => (
        <SectionTwoCols key={feature.id}>
          {feature.columns.map((column) =>
            column.type === "content" ? (
              <SectionColumn
                key={feature.id + column.title}
                className={cn(
                  " px-8 md:px-12 lg:px-8 xl:px-16 2xl:px-24 odd:lg:border-r border-nB-black border-b row-start-1 lg:row-start-auto ",
                  column.backgroundColor,
                )}
              >
                <SectionCard className="overflow-hidden">
                  <SectionMotionCardTitle title={column.title ?? ""} />
                  <SectionCardContent>
                    <motion.p
                      variants={slideSmfromLeft}
                      className="text-xl lg:text-2xl text-balance lg:text-left"
                    >
                      {column.text}
                    </motion.p>
                  </SectionCardContent>
                </SectionCard>
              </SectionColumn>
            ) : (
              <SectionColumn
                key={feature.id + column.type + column.title}
                className={cn(
                  "relative flex items-center justify-center p-8 xl:p-16 odd:lg:border-r border-nB-black border-b ",
                  column.backgroundColor,
                )}
              >
                {column.type === "visuals" && column.jsx ? column.jsx : ""}
              </SectionColumn>
            ),
          )}
        </SectionTwoCols>
      ))}
    </section>
  )
}
