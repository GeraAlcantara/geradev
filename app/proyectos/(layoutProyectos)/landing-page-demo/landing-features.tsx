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
  LandingComunicationVisuals,
  LandingDesignVisuals,
  LandingMenuVisuals,
} from "./landing-feature-visuals"
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
    id: "LandingDesignFeature",
    columns: [
      {
        type: "content",
        title: "Diseño Creativo",
        text: "Una landing page funcional y visualmente impactante, creada con esmero y precisión artesanal utilizando Astro.js, Tailwind CSS y Motion.js. Cada detalle fue diseñado con atención meticulosa, combinando creatividad y técnica para entregar una experiencia digital única.",
        backgroundColor: "bg-nB-pink",
      },
      {
        type: "visuals",
        backgroundColor: "bg-nB-yellow",
        jsx: <LandingDesignVisuals />,
      },
    ],
  },
  {
    id: "YauhCarouselFeature",
    columns: [
      {
        type: "visuals",
        backgroundColor: "bg-nB-yellow",
        jsx: <LandingMenuVisuals />,
      },
      {
        type: "content",
        title: "Carrusel Interactivo",
        text: "Un menú organizado en tabs para facilitar la navegación en dispositivos móviles.",
        backgroundColor: "bg-nB-pink",
      },
    ],
  },

  {
    id: "YauhComunicationFeature",
    columns: [
      {
        type: "content",
        title: "Comunicación Directa",
        text: "Facilité la comunicación directa con un enlace integrado a WhatsApp.",
        backgroundColor: "bg-nB-pink",
      },
      {
        type: "visuals",
        backgroundColor: "bg-nB-yellow",
        jsx: <LandingComunicationVisuals />,
      },
    ],
  },
]
export default function LandingFeatures() {
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
