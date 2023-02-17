import MetaPageHelper from '../../lib/MetaPageHelper'
import { MetadataRD } from '../../data/MetaData'
import BannerRD from '../../components/BannerRD'
import PonnyCarImg from '../../public/images/ponycarRender.png'
import AirplaneImg from '../../public/images/airplaneRender.png'
import RdCard from '../../components/rdUi/RdCard'
import RdCardBig from '../../components/rdUi/RdCardBig'
import rdCardMemory from '../../public/images/memoryGame/svgs/backfaceCardWithBG.svg'

const rdCardsData: RdCardComponentProp[] = [
  {
    id: 1,
    isHighlight: true,
    prefixtitle: 'Remake Proyecto',
    title: 'Re haciendo el juego de memoria ',
    excerpt:
      'Remake juego de memoria, pasando de JavaScript puro a React, TypeScript, SASS y Tailwind. Se mejoró la apariencia visual, la lógica y la funcionalidad del juego.',
    imgSrc: rdCardMemory,
    linkText: 'visitar Juego',
    linkUrl: '/rd/juego-de-memoria',
    gradient: 'pinkDark',
    color: 'light'
  },
  {
    id: 2,
    isHighlight: false,
    prefixtitle: 'Experimento',
    title: 'Con Modelos 3D',
    excerpt:
      ' Realizando experimentos en el navegador con modelos 3D Primera iteración En esta primera iteración vamos a realizar unos experimentos en el navegador para comprobar si es posible visualizar modelo',
    imgSrc: PonnyCarImg,
    linkText: 'visitar experimento',
    linkUrl: '/rd/modelo-3d-render-navegador',
    gradient: 'pinkDark',
    color: 'light',
    attribution: {
      baseonUrl: 'https://sketchfab.com/3d-models/pony-cartoon-885d9f60b3a9429bb4077cfac5653cf9',
      baseonText: 'Pony Cartoon',
      authorUrl: 'https://sketchfab.com/slava',
      authorText: 'Slava Z.'
    }
  },
  {
    id: 3,
    isHighlight: false,
    prefixtitle: 'Experimento',
    title: 'Con Modelos 3D',
    excerpt:
      'Realizando experimentos en el navegador con modelos 3D, en este caso renderiamos el modelo con un loop de animación',
    imgSrc: AirplaneImg,
    linkText: 'visitar experimento',
    linkUrl: '/rd/modelo-3d-loop-animation',
    gradient: 'blue',
    color: 'dark',
    attribution: {
      baseonUrl:
        'https://sketchfab.com/3d-models/stylized-airplane-the-flying-circus-diorama-cbb8d5ed7fd745e3a5b9af7ae3ab9b42',
      baseonText: 'Stylized Airplane - The Flying Circus Diorama',
      authorUrl: 'https://sketchfab.com/plorigon',
      authorText: 'Mikkel Garde Blaase (plorigon)'
    }
  }
]

export default function RDPage(): JSX.Element {
  return (
    <>
      <MetaPageHelper {...MetadataRD} />
      <BannerRD />
      <div className="flex flex-col lg:grid md:grid-cols-12 gap-8 grid-rows-1 xl:container xl:m-auto py-8 px-4 md:pl-4 md:pr-8 ">
        {/* Card 1 big */}

        {rdCardsData.map((card, idx) =>
          card.isHighlight ? <RdCardBig key={idx} {...card} /> : <RdCard key={idx} {...card} />
        )}
      </div>
    </>
  )
}
