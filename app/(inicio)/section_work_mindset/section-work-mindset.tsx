import EmojiOh from "@/components/stickers/emoji-oh"
import { type JSX } from "react"
import EmojiBarbas from "@/components/stickers/emoji-barbas"
import ItemMindset from "./item-mindset"
import SectionHeaderMindset from "./section-header-mindset"

export type CTAType = {
  href: string
  label: string
}
export interface ItemMindsetProps {
  title: string
  excerpt: string
  cta: CTAType
  icon: () => JSX.Element
}

const aboutHeader = {
  title: "Mi Mentalidad y Valores",
  excerpt:
    "Mi camino no fue convencional, pero siempre estuvo guiado por la curiosidad y la resiliencia. Creo en el poder del aprendizaje continuo, la colaboración y la accesibilidad como pilares fundamentales para crear soluciones digitales únicas.",
  ctatext: "Creo soluciones digitales únicas",
}

const mindsetItems: ItemMindsetProps[] = [
  {
    title: "Resiliencia y Adaptabilidad",
    excerpt:
      "Nunca me adecué al sistema educativo tradicional, pero eso no me detuvo. Aprendí de forma autodidacta y trabajé en roles semi-formales antes de reinventarme como desarrollador frontend. Mi capacidad para adaptarme me ha permitido superar desafíos y crecer constantemente.",
    icon: EmojiOh,
    cta: {
      href: "/resilience",
      label: "Saber más →",
    },
  },
  {
    title: "Autodidacta y Curiosidad",
    excerpt:
      "Desde bibliotecas hasta tutoriales en YouTube, mi curiosidad siempre me llevó a aprender nuevas habilidades. La tecnología rompió barreras y me demostró que nunca es tarde para cambiar de rumbo. Hoy, sigo explorando herramientas emergentes para mejorar mis proyectos.",
    icon: EmojiBarbas,
    cta: {
      href: "/curiosity",
      label: "Saber más →",
    },
  },
  {
    title: "Accesibilidad e Inclusión",
    excerpt:
      "Creo firmemente que la tecnología debe ser accesible para todos. Implemento estándares WCAG 2.1 AA y diseño interfaces inclusivas que priorizan la experiencia del usuario. Para mí, el éxito se mide en cómo las personas interactúan con lo que creo.",
    cta: {
      href: "/accessibility",
      label: "Saber más →",
    },
    icon: EmojiOh,
  },
  {
    title: "Colaboración y Equipo",
    excerpt:
      "El poder de la colaboración es clave para lograr grandes resultados. Trabajo junto a diseñadores, desarrolladores y stakeholders para crear soluciones innovadoras que cumplan con los objetivos del proyecto. Mi enfoque es flexible, abierto y orientado al equipo.",
    cta: {
      href: "/collaboration",
      label: "Saber más →",
    },
    icon: EmojiBarbas,
  },
  {
    title: "Creatividad y Código",
    excerpt:
      "Para mí, el código es otra forma de diseño. En el motion graphics, el timing es clave; en el front-end, es la performance. Ambos requieren precisión y creatividad. Combino ambas disciplinas para construir interfaces dinámicas y experiencias interactivas.",
    cta: {
      href: "/creativity",
      label: "Saber más →",
    },
    icon: EmojiOh,
  },
  {
    title: "Impacto Positivo",
    excerpt:
      "Mi objetivo es usar la tecnología para resolver problemas reales y generar un impacto positivo. Desde optimizar tiempos de carga hasta crear plataformas accesibles, cada proyecto busca mejorar la calidad de vida de los usuarios finales.",
    cta: {
      href: "/impact",
      label: "Saber más →",
    },
    icon: EmojiBarbas,
  },
]

export default function SectionWorkMindset() {
  return (
    <section className="pt-16 bg-nB-green  text-nB-black border-y border-nB-black  w-full">
      <div className="pb-24 px-8 lg:px-8 md:px-12 xl:px-12 2xl:py-36">
        {/* grid 2 col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          {/* sticky left */}
          <div className="relative flex flex-col gap-8 lg:items-start lg:gap-12 ">
            <SectionHeaderMindset
              className="sticky top-24 left-0 "
              {...aboutHeader}
            />
          </div>
          {/* scroll right */}
          <div className=" w-full">
            <div className="border-b border-nB-black"></div>
            <ul className="">
              {mindsetItems.map((item, index) => (
                <ItemMindset
                  key={item.title + index}
                  title={item.title}
                  icon={item.icon}
                  excerpt={item.excerpt}
                  cta={item.cta}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
