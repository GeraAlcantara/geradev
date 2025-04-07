import EmojiOh from "@/components/stickers/emoji-oh"

import ItemServices, { ItemServicesProps } from "./item-services"
import EmojiBarbas from "@/components/stickers/emoji-barbas"
import SectionHeaderServices from "./section-header-services"

const servicesHeader = {
  title: "Servicios que Ofrezco",
  excerpt:
    "Ofrezco una combinación de desarrollo frontend, dirección de arte, consultoría técnica y mentorías para ayudarte a llevar tus proyectos digitales al siguiente nivel. Cada servicio está diseñado para equilibrar creatividad, tecnología y estrategia.",
  ctatext: "Creo soluciones digitales únicas",
}

const serviceItems: ItemServicesProps[] = [
  {
    title: "Freelance",
    excerpt:
      "Como freelancer, me especializo en desarrollo frontend personalizado. Trabajo con tecnologías modernas como React.js, Next.js y Node.js para crear aplicaciones web escalables, accesibles y optimizadas. Además, priorizo la experiencia del usuario y el diseño visualmente atractivo.",
    icon: EmojiOh,
    cta: {
      href: "/test",
      label: "Saber más",
    },
  },
  {
    title: "Dirección de Arte",
    excerpt:
      "La dirección de arte es donde la creatividad encuentra la estrategia. Me encargo de supervisar el diseño visual de proyectos, asegurando que cada elemento sea coherente con la marca y el mensaje. Desde gráficos en movimiento hasta interfaces digitales, creo experiencias visuales que conectan",
    cta: {
      href: "/art",
      label: "Saber más",
    },
    icon: EmojiBarbas,
  },
  {
    title: "Manejo de Proyecto",
    excerpt:
      "El manejo de proyectos es clave para el éxito de cualquier iniciativa digital. Utilizo metodologías ágiles y herramientas de gestión para asegurar que los proyectos se entreguen a tiempo y dentro del presupuesto. Mi enfoque es transparente, colaborativo y orientado a resultados.",
    cta: {
      href: "/pm",
      label: "Saber más",
    },
    icon: EmojiOh,
  },
  {
    title: "Consultoría",
    excerpt:
      "Como consultor, ofrezco asesoramiento técnico y estratégico para mejorar tus productos digitales. Desde auditorías de accesibilidad (WCAG 2.1 AA) hasta optimización de rendimiento, ayudo a identificar áreas de mejora y oportunidades de crecimiento.",
    cta: {
      href: "/consulting",
      label: "Saber más",
    },
    icon: EmojiBarbas,
  },
  {
    title: "Colaboración",
    excerpt:
      "Creo en el poder de la colaboración para lograr grandes resultados. Trabajo junto a diseñadores, desarrolladores y stakeholders para crear soluciones innovadoras que cumplan con los objetivos del proyecto. Mi enfoque es flexible, abierto y orientado al equipo.",
    cta: {
      href: "/colaboration",
      label: "Saber más",
    },
    icon: EmojiOh,
  },
  {
    title: "Mentorías",
    excerpt:
      "Como mentor, ayudo a desarrolladores junior y creativos a mejorar sus habilidades técnicas y blandas. Ofrezco sesiones personalizadas enfocadas en programación frontend, resolución de problemas, liderazgo y más. Mi objetivo es impulsar tu crecimiento profesional.",
    cta: {
      href: "/mentoring",
      label: "Saber más",
    },
    icon: EmojiBarbas,
  },
]

export default function SectionServices() {
  return (
    <section className="pt-16 bg-nB-green  text-nB-black border-y border-nB-black  w-full">
      <div className="pb-24 px-8 lg:px-8 md:px-12 xl:px-12 2xl:py-36">
        {/* grid 2 col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          {/* sticky left */}
          <div className="relative flex flex-col gap-8 lg:items-start lg:gap-12 ">
            <SectionHeaderServices
              className="sticky top-24 left-0 "
              {...servicesHeader}
            />
          </div>
          {/* scroll right */}
          <div className=" w-full">
            <div className="border-b border-nB-black"></div>
            <ul className="">
              {serviceItems.map((item, index) => (
                <ItemServices
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
