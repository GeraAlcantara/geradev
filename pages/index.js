import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jaguar Ek Dev | Home</title>
        <meta name='description' content='Jaguar Ek Dev' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Todo tendra contenido trendra el display dentro del Main  */}

      <div className=' bg-red-400 h-screen'>hola!</div>
    </div>
  );
}
