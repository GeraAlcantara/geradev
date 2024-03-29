import AnimatedLetters from '../components/AnimatedLetters'
import CobeGlobe from '../components/CobeGlobe'
import MetaPageHelper from '../lib/MetaPageHelper'
import { MetaDataHome } from '../data/MetaData'

export default function Home(): JSX.Element {
  const titlename = 'Jaguar Ek'
  const txtgreating = 'Hola, soy'
  const txtjobtitle = 'Front End Developer'
  const txtJoke = 'Haciendo tu mundo girar! :)'

  return (
    <div>
      <MetaPageHelper {...MetaDataHome} />
      <div className="h-screen">
        <div className="h-full flex flex-col-reverse landscape:flex-row lg:flex-row justify-center md:items-center p-4 lg:p-20">
          <div className="w-full xl:w-1/2 relative">
            <div className="bg-gradient-to-br from-brand-black-300 via-brand-black-300/50 to-transparent w-40 h-40 block rounded-full absolute -left-8 -top-10 " />
            <div className="relative">
              <div className="font-Urbanist xl:text-5xl xl:top-4 xl:relative mb-0 xl:mb-2  ">
                <AnimatedLetters text={txtgreating} />
              </div>
              <div className="font-Raleway font-extrabold text-3xl xl:text-6xl transition-all ">
                <AnimatedLetters text={titlename} />
              </div>
              <div className="font-Urbanist xl:text-5xl xl:relative">
                <AnimatedLetters text={txtjobtitle} />
              </div>
              <div className="font-Urbanist xl:text-4xl xl:relative text-brand-pink-50">
                <AnimatedLetters text={txtJoke} />
              </div>
              <p
                className={'max-w-prose mt-8 opacity-0 lg:text-xl animate-scaleInBottom delay-1000'}
              >
                Creo que nunca hay una edad para empezar algo nuevo, mi carrera como programador
                empezó cuando tenía 38 años; así es, empecé tarde pero con pasos de gigante que me
                permitieron cambiar de profesión sin perder el trabajo, simplemente cambié de área.
                tengo 4 años programando y 7 años en mi trabajo; los primeros 3 años fui un artista
                de gráficos en movimiento.
              </p>
            </div>
          </div>
          <div className="xl:w-1/2">
            <CobeGlobe />
          </div>
        </div>
      </div>
    </div>
  )
}
