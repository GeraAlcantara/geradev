import IMGBartender from "@/public/assets/about/bartender.png"
import IMGHotel from "@/public/assets/about/hotel.png"
import IMGMotoCrash from "@/public/assets/about/motocrash.png"
import IMGDev from "@/public/assets/about/devfront.png"

import ItemScrollParallax from "./item-scroll-parallax"
import { StaticImageData } from "next/image"

export type ItemScroll = {
  title: string
  content: string
  img: StaticImageData
}
const listScrollParallax = [
  {
    title: "De Diseñador Gráfico a Bartender",
    content:
      "Mi primer trabajo fue como diseñador gráfico en una imprenta, donde aprendí los fundamentos del diseño visual y la importancia de la creatividad. Sin embargo, el salario era muy bajo, lo que me llevó a buscar oportunidades adicionales. Comencé como ayudante de bartender y rápidamente ascendí a bartender principal en bares y restaurantes. Esta etapa no solo me enseñó a interactuar con personas de diferentes culturas, sino también a manejar situaciones bajo presión y desarrollar habilidades de servicio al cliente. Durante varios años, perfeccioné mi capacidad para resolver problemas rápidamente y mantener la calma en entornos dinámicos. Estas experiencias tempranas me dieron una base sólida para enfrentar desafíos en etapas posteriores de mi vida.",
    img: IMGBartender,
  },
  {
    title: "Hotelería y Turismo",
    content:
      "Mi camino me llevó a trabajar en hoteles de lujo, comenzando como recepcionista. Con el tiempo, escalé posiciones hasta llegar a ser subgerente de recepción en una cadena internacional de cinco estrellas. Durante estos años, desarrollé habilidades valiosas como liderazgo, gestión de equipos y atención al detalle. Manejaba desde check-ins masivos hasta la resolución de incidentes con mantenimiento y limpieza, siempre asegurándome de ofrecer un servicio impecable. Sin embargo, algo dentro de mí sabía que quería explorar nuevos horizontes y desafiar mis habilidades de una manera diferente.",
    img: IMGHotel,
  },
  {
    title: "Un Accidente que Cambió Todo",
    content:
      "Un accidente menor en moto me dejó con la pierna inmovilizada durante seis meses. Aunque fue un momento difícil, decidí aprovechar ese tiempo para reinventarme. Comencé a aprender diseño 3D y motion graphics de forma autodidacta, utilizando tutoriales de YouTube y recursos gratuitos. Pronto, estaba creando videos explicativos para clientes internacionales. Este giro inesperado me llevó a trabajar como motion graphics artist en Mexico Development Center, donde desarrollé contenido multimedia para e-learning. Fue aquí donde descubrí mi pasión por combinar creatividad y tecnología.",
    img: IMGMotoCrash,
  },
  {
    title: "De Motion Graphics a Frontend Developer",
    content:
      "Mientras trabajaba en motion graphics, comencé a interesarme por el desarrollo frontend. Utilizando cursos en plataformas como Udemy y recursos en línea, aprendí a programar a los 38 años. Empecé con HTML y CSS, luego avancé a JavaScript, React.js y Next.js. Hoy, con más de 6 años de experiencia en desarrollo web, he trabajado en proyectos para marcas importantes, combinando creatividad con optimización técnica. Mi enfoque único me permite crear interfaces dinámicas, accesibles y visualmente impactantes, demostrando que nunca es tarde para cambiar de rumbo.",
    img: IMGDev,
  },
]
export default function ListScrollParralax() {
  return (
    <section
      id="historia"
      className="bg-nB-yellow text-nB-black border border-nB-black"
    >
      <div className="py-4 md:py-20 w-full">
        <div className="flex size-full  flex-col mx-auto justify-between relative lg:container lg:px-4 2xl:px-0">
          {listScrollParallax.map((item, index) => (
            <ItemScrollParallax key={item.title + index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
