import Head from "next/head";
import { useEffect, useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";

export default function Home() {
  const [letterClass, setletterClass] = useState("animatedLeters");
  const [letterClasssup, setletterClasssup] = useState("animatedLeters");
  const [paragraphClass, setParagraphClass] = useState("");

  const titlename = "Jaguar Ek";
  const txtgreating = "Hola, soy";
  const txtjobtitle = "Front End Developer";
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
      <Head>
        <title>Jaguar Ek Dev</title>
        <meta name='description' content='Jaguar Ek Dev' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=' h-screen'>
        <div className='h-full flex items-center p-20'>
          <div className='w-full xl:w-1/2 relative'>
            <div className='bg-gradient-to-br from-brand-black-300 via-brand-black-300/50 to-transparent w-40 h-40 block rounded-full absolute -left-8 -top-10 '></div>
            <div className='relative'>
              <div className='font-Urbanist xl:text-5xl xl:top-4 xl:relative mb-2 '>
                <AnimatedLetters letterClass={` ${letterClass} `} text={txtgreating} idx={1}></AnimatedLetters>
              </div>

              <div className='font-Raleway font-extrabold text-3xl xl:text-6xl transition-all '>
                <AnimatedLetters letterClass={` ${letterClass} `} text={titlename} idx={10}></AnimatedLetters>
              </div>
              <div className='font-Urbanist xl:text-5xl xl:relative'>
                <AnimatedLetters letterClass={` ${letterClass} `} text={txtjobtitle} idx={20}></AnimatedLetters>
              </div>
              <p className={`max-w-prose mt-8 opacity-0 ${paragraphClass}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda soluta molestias adipisci placeat distinctio facere quia sed quisquam, quas
                eos ratione eum architecto repellat reiciendis ducimus laboriosam ipsum ipsa iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
