import * as motion from "motion/react-client"
import {
  SectionCard,
  SectionCardContent,
  SectionColumn,
  SectionMotionCardTitle,
  SectionTwoCols,
} from "@/components/ui/section-two-col"
import { slideSmfromLeft } from "@/lib/animations/variants"
import {
  YauhVisualsComunications,
  YauhVisualsDashboard,
  YauhVisualsDetails,
  YauhVisualsMap,
  YauhVisualsSearch,
} from "./yauh-feature-visuals"
import { JSX } from "react"
import { cn } from "@/lib/utils"

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

// Definimos la interfaz para las columnas
interface Column {
  type: string
  jsx?: JSX.Element // Asumiendo que YauhVisualsSearch es un componente React
  title?: string
  text?: string
  backgroundColor: BackgroundColor // Propiedad opcional para el color de fondo
}

// Definimos la interfaz principal para las características del proyecto
interface ProyectFeatures {
  id: string
  columns: Column[]
}

const yauhFeatures: ProyectFeatures[] = [
  {
    id: "YauhSearchFeature",
    columns: [
      {
        type: "content",
        title: "Búsqueda Avanzada",
        text: "Filtros personalizados que permiten a los usuarios encontrar la propiedad perfecta según sus necesidades específicas, como ubicación, precio y amenidades.",
        backgroundColor: "bg-nB-blue-vista",
      },
      {
        type: "visuals",
        backgroundColor: "bg-nB-purple",
        jsx: <YauhVisualsSearch />,
      },
    ],
  },
  {
    id: "YauhMapFeature",
    columns: [
      {
        type: "visuals",
        backgroundColor: "bg-nB-yellow",
        jsx: <YauhVisualsMap />,
      },
      {
        type: "content",
        title: "Mapa Interactivo",
        text: "Un mapa intuitivo que permite explorar propiedades en tiempo real, facilitando la visualización de ubicaciones y su entorno.",
        backgroundColor: "bg-nB-pink",
      },
    ],
  },
  {
    id: "YauhPropertyDetailsFeature",
    columns: [
      {
        type: "content",
        title: "Perfiles Detallados",
        text: "Información completa y fotos de alta calidad para cada propiedad, destacando características únicas como servicios, electrodomésticos incluidos y medidas de seguridad.",
        backgroundColor: "bg-nB-blue-vista",
      },
      {
        type: "visuals",
        backgroundColor: "bg-nB-purple",
        jsx: <YauhVisualsDetails />,
      },
    ],
  },
  {
    id: "YauhComunicationFeature",
    columns: [
      {
        type: "visuals",
        backgroundColor: "bg-nB-yellow",
        jsx: <YauhVisualsComunications />,
      },
      {
        type: "content",
        title: "Comunicación Directa",
        text: "Mensajería integrada con WhatsApp y correo electrónico para facilitar la comunicación rápida entre propietarios e inquilinos.",
        backgroundColor: "bg-nB-pink",
      },
    ],
  },
  {
    id: "YauhDashBoardFeature",
    columns: [
      {
        type: "content",
        title: "Modo Arrendador",
        text: "Una interfaz fácil de usar que permite a los propietarios gestionar sus propiedades de manera eficiente: crear, modificar, pausar o eliminar listados con total flexibilidad.",
        backgroundColor: "bg-nB-blue-vista",
      },
      {
        type: "visuals",
        backgroundColor: "bg-nB-purple",
        jsx: <YauhVisualsDashboard />,
      },
    ],
  },
]

export default function YauhFeatures() {
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
