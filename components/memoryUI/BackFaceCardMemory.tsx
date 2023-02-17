import Image from 'next/image'

import BackFaceSvg from '../../public/images/memoryGame/svgs/backfaceCard.svg'

function BackFaceCardMemory(): JSX.Element {
  return (
    <div className="back-face">
      <div className="flex justify-center items-center h-full">
        <div className="relative w-full h-full">
          <Image
            alt="Image by pikisuperstar on Freepik"
            draggable={false}
            layout="fill"
            src={BackFaceSvg.src}
          />
        </div>
      </div>
    </div>
  )
}

export default BackFaceCardMemory
