import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'

import AnimatedLetters from '../../components/AnimatedLetters'
import { MetaPonnyCard } from '../../data/MetaData'
import MetaPageHelper from '../../lib/MetaPageHelper'

// import types from three
const URL = '../modelsThreeD/ponycar/scene.gltf'

function Model(): JSX.Element {
  const obj = useLoader(GLTFLoader, URL)

  return <primitive object={obj.scene} position={[0, -1, 0]} scale={[2, 2, 2]} />
}

export default function PonnyCar(): JSX.Element {
  const titlename = '3D Model'
  const txtgreating = 'Gira el modelo'

  return (
    <div>
      <MetaPageHelper {...MetaPonnyCard} />
      {/* Todo tendra contenido trendra el display dentro del Main  */}

      <div className="h-[100vh] lg:h-screen flex flex-col-reverse md:flex-col justify-between bg-brand-black-900">
        <Canvas
          camera={{
            position: [9, 7, 8.2],
            fov: 50,
            zoom: 2.3
          }}
        >
          <ambientLight color={'white'} intensity={0.3} />
          <ambientLight color={'pink'} intensity={1.7} />
          <spotLight angle={0.15} color={'purple'} penumbra={1} position={[10, 10, 10]} />
          <Suspense>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div className="inset-0 lg:absolute pointer-events-none ">
          <div className="p-8">
            <div className="w-full xl:w-1/2 relative mb-10 flex flex-col justify-center">
              <div className="font-Raleway font-extrabold text-3xl xl:text-6xl transition-all ">
                <AnimatedLetters text={titlename} />
              </div>
              <div className="font-Urbanist xl:text-5xl xl:top-4 xl:relative mb-4 ">
                <AnimatedLetters text={txtgreating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
