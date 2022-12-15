import { Canvas, Euler, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import AnimatedLetters from "../components/AnimatedLetters";
import { MetaRD } from "../data/MetaData";
import MetaPageHelper from "../lib/MetaPageHelper";
import ModelAirplane from "../components/ModelAirplane";

// import types from three
const URL = "/modelsThreeD/airplainDiorama/scene.gltf";
function Model() {
  const obj = useLoader(GLTFLoader, URL);
  return <primitive object={obj.scene} scale={[2, 2, 2]} position={[0, -1, 0]} />;
}

export default function About() {
  const [letterClass, setletterClass] = useState("animatedLeters");
  const [paragraphClass, setParagraphClass] = useState("");

  const deg2rad = (degrees) => {
    return (degrees * Math.PI) / 180;
  };
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
