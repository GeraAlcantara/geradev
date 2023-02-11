import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import AnimatedLetters from "../../components/AnimatedLetters";
import { MetaAirPlane } from "../../data/MetaData";
import MetaPageHelper from "../../lib/MetaPageHelper";
import ModelAirplane from "../../components/ModelAirplane";

export default function Airplane() {
  const titlename = "3D Model";
  const txtgreating = "Gira el modelo";
  return (
    <div>
      <MetaPageHelper {...MetaAirPlane} />
      {/* Todo tendra contenido trendra el display dentro del Main  */}

      <div className='h-[100vh] lg:h-screen flex flex-col md:flex-col justify-between bg-brand-black-900'>
        <Canvas
          camera={{
            position: [-7, 6, 7.2],
            fov: 90,
            zoom: 0.9,
          }}
        >
          <ambientLight color={"white"} intensity={0.3} />
          <ambientLight color={"pink"} intensity={1.7} />
          <spotLight color={"purple"} position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense>
            <ModelAirplane scale={[0.3, 0.3, 0.3]} position={[3, -1, 2]} rotation={[-0.12, -0.27, -0.2]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div className='inset-0 lg:absolute pointer-events-none '>
          <div className='p-8'>
            <div className='w-full xl:w-1/2 relative mb-10 flex flex-col justify-center'>
              <div className='font-Raleway font-extrabold text-3xl xl:text-6xl transition-all '>
                <AnimatedLetters text={titlename}></AnimatedLetters>
              </div>
              <div className='font-Urbanist xl:text-5xl xl:top-4 xl:relative mb-4 '>
                <AnimatedLetters text={txtgreating} ></AnimatedLetters>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
