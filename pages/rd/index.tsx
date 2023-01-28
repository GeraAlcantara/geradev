import MetaPageHelper from "../../lib/MetaPageHelper";
import { MetadataRD } from "../../data/MetaData";
import BannerRD from "../../components/BannerRD";
import Image from "next/image";
import PonnyCarImg from "../../public/images/ponycarRender.png";
import AirplaneImg from "../../public/images/airplaneRender.png";
import Link from "next/link";

export default function RDPage() {
  return (
    <>
      <MetaPageHelper {...MetadataRD} />
      <BannerRD />
      <div className='flex flex-col lg:grid md:grid-cols-12 gap-8 grid-rows-1  py-8 px-4 md:pl-4 md:pr-8'>
        {/* Card 1 big */}
        <div className=' lg:col-span-12 xl:col-span-6 rounded-3xl flex flex-col-reverse gap-4 md:flex-row justify-between items-center bg-gradient-to-br from-brand-pink-800 to-brand-pink-600 py-4 '>
          <div className='px-4 md:px-8 flex flex-col gap-y-4 justify-around md:w-1/2 md:h-full'>
            <div>
              <h1 className='text-3xl lg:text-5xl  uppercase font-extrabold text-brand-pink-accent'>Experimento </h1>
              <div className=''>
                <h2 className='text-3xl lg:text-5xl font-Urbanist  text-brand-pink-accent'>
                  Con Modelos <span className='lg:text-6xl  text-brand-pink-50'>3D</span>
                </h2>
              </div>
            </div>

            <p className='text-white lg:text-lg'>
              Realizando experimentos en el navegador con modelos 3D Primera iteración En esta primera iteración vamos a realizar unos experimentos en el
              navegador para comprobar si es posible visualizar model
            </p>
            <div className='inline-flex '>
              <Link href='/rd/modelo-3d-render-navegador'>
                <a className='text-brand-pink-50 md:text-lg font-bold hover:text-brand-pink-accent bg-brand-black-300 px-6 py-4 rounded-3xl '>
                  visitar experimento <span className='text-brand-pink-50'> &rarr;</span>
                </a>
              </Link>
            </div>
            <div>
              <div>
                <p className='text-white'>
                  Este trabajo se basa en
                  {/* source  */}
                  <a href='https://sketchfab.com/3d-models/pony-cartoon-885d9f60b3a9429bb4077cfac5653cf9' target='_blank' rel='noopener noreferrer'>
                    <span className='text-brand-pink-50 cursor-pointer hover:text-brand-pink-accent'> Pony Cartoon </span>
                  </a>
                  por
                  <a href='https://sketchfab.com/slava' target='_blank' rel='noopener noreferrer'>
                    <span className='text-brand-pink-50  cursor-pointer hover:text-brand-pink-accent'> Slava Z.</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className='md:flex-1 h-full flex'>
            <Image src={PonnyCarImg} objectFit='contain' objectPosition='center' alt='3D render cartoon car' className='w-full h-full rounded-3xl' />
          </div>
        </div>
        {/* Card 2 big */}
        <div className=' lg:col-span-12 xl:col-span-6 rounded-3xl flex flex-col-reverse gap-4 md:flex-row justify-between items-center bg-gradient-to-br from-[#72aeff] to-[#377ddb] py-4 '>
          <div className='px-4 md:px-8 flex flex-col gap-y-4 justify-around md:w-1/2 md:h-full'>
            <div>
              <h1 className='text-3xl lg:text-5xl  uppercase font-extrabold text-[#2c3436]'>Experimento </h1>
              <div className=''>
                <h2 className='text-3xl lg:text-5xl font-Urbanist  text-[#2c3436]'>
                  Con Modelos <span className='lg:text-6xl text-brand-black-100'>3D</span>
                </h2>
              </div>
            </div>

            <p className='text-brand-black-900 lg:text-lg'>
              Realizando experimentos en el navegador con modelos 3D Primera iteración En esta primera iteración vamos a realizar unos experimentos en el
              navegador para comprobar si es posible visualizar model
            </p>
            <div className='inline-flex '>
              <Link href='/rd/modelo-3d-loop-animation'>
                <a className='text-white md:text-lg font-bold hover:text-brand-pink-accent bg-brand-black-300 px-6 py-4 rounded-3xl '>
                  visitar experimento <span className='text-white'> &rarr;</span>
                </a>
              </Link>
            </div>
            <div>
              <div>
                <p className='text-brand-black-300'>
                  Este trabajo se basa en
                  <a
                    href='https://sketchfab.com/3d-models/stylized-airplane-the-flying-circus-diorama-cbb8d5ed7fd745e3a5b9af7ae3ab9b42'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='text-white cursor-pointer hover:text-orange-100'> Stylized Airplane - The Flying Circus Diorama </span>
                  </a>
                  por
                  <a href='https://sketchfab.com/plorigon' target='_blank' rel='noopener noreferrer'>
                    <span className='text-white cursor-pointer hover:text-orange-100'> Mikkel Garde Blaase (plorigon) </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className='md:flex-1 h-full flex'>
            <Image src={AirplaneImg} objectFit='contain' objectPosition='left top' alt='3D render cartoon car' className='w-full h-full rounded-3xl' />
          </div>
        </div>
      </div>
    </>
  );
}
