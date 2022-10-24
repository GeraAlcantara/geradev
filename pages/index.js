import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const titlename = "JaguarEk";
  const spliTitle = titlename.split("");

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
            <div className='bg-gradient-to-br from-bg_secondary/70 via-bg_secondary/50 to-bg_secondary/0 w-40 h-40 block rounded-full absolute -left-8 -top-10 '></div>
            <div className='relative'>
              <h1 className='font-Urbanist leading-none xl:text-4xl xl:top-4 xl:relative'>Hola, soy</h1>
              <p className='font-Raleway font-extrabold text-4xl xl:text-9xl text-accent leading-none transition-all '>
                {spliTitle.map((c, id) => (
                  <span className='hover:animate-jello-vertical hover:text-secondary inline-block hover:cursor-progress' key={id + c}>
                    {c}
                  </span>
                ))}
              </p>
              <p className='max-w-prose mt-8 '>
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
