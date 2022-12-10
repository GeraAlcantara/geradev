import Head from "next/head";
// import canvas
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import AnimatedLetters from "../components/AnimatedLetters";
import { MetaRD } from "../data/MetaData";
import MetaPageHelper from "../lib/MetaPageHelper";

// import types from three

function Model() {
  const obj = useLoader(GLTFLoader, "https://geradev.vercel.app/model/scene.gltf");
  return <primitive object={obj.scene} scale={[2, 2, 2]} position={[0, -1, 0]} />;
}

export default function About() {
  const [letterClass, setletterClass] = useState("animatedLeters");
  const [paragraphClass, setParagraphClass] = useState("");

  const titlename = "3D Model";
  const txtgreating = "Gira el modelo";

  useEffect(() => {
    const removeaddClass = setTimeout(() => {
      setletterClass("cursor-progress");
      setParagraphClass("slide-in-bottom");
    }, 4000);

    return () => {
      clearTimeout(removeaddClass);
    };
  }, []);
  return (
    <div>
      <MetaPageHelper {...MetaRD} />
      {/* Todo tendra contenido trendra el display dentro del Main  */}

      <div className='lg:h-screen flex flex-col justify-between bg-brand-black-900'>
        <Canvas
          camera={{
            position: [9, 7, 8.2],
            fov: 50,
            zoom: 2.8,
          }}
        >
          <ambientLight color={"white"} intensity={0.3} />
          <ambientLight color={"pink"} intensity={1.7} />
          <spotLight color={"purple"} position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div className='inset-0 absolute pointer-events-none '>
          <div className='p-8'>
            <div className='w-full xl:w-1/2 relative mb-10 flex flex-col justify-center'>
              <div className='font-Raleway font-extrabold text-3xl xl:text-6xl transition-all '>
                <AnimatedLetters letterClass={` ${letterClass} `} text={titlename} idx={10}></AnimatedLetters>
              </div>
              <div className='font-Urbanist xl:text-5xl xl:top-4 xl:relative mb-4 '>
                <AnimatedLetters letterClass={` ${letterClass} `} text={txtgreating} idx={1}></AnimatedLetters>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
