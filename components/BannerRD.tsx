import Image from 'next/image'
import React from 'react'

import ProfileImg from '../public/images/banner_jaguarEk.jpg'

import AnimatedLetters from './AnimatedLetters'

export default function BannerRD(): JSX.Element {
  const titlename = 'R&D'
  const txtDescription = 'Research and Development'
  const txtexcept = 'Zona de juego experimentos cool.'

  return (
    <div className=" xl:h-[400px] w-full flex flex-col-reverse lg:flex-row items-center justify-between container m-auto p-4 lg:px-4 gap-4">
      <div className="relative flex flex-col justify-center items-center lg:items-start  ">
        <div className="font-Raleway font-extrabold text-3xl xl:text-6xl transition-all ">
          <AnimatedLetters text={titlename} />
        </div>
        <div className="font-Urbanist text-lg xl:text-5xl xl:relative mb-0 xl:mb-4 ">
          <AnimatedLetters text={txtDescription} />
        </div>

        <div className="font-Urbanist xl:text-5xl xl:relative">
          <AnimatedLetters text={txtexcept} />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-full w-1/4 max-w-[340px] border-2 border-brand-pink-200">
        <Image
          alt={'Banner RD'}
          className="w-full h-full"
          draggable={false}
          height={512}
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          src={ProfileImg}
          width={512}
        />
      </div>
    </div>
  )
}
