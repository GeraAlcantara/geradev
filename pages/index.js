import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Jaguar Ek Dev' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-orange-500 h-screen'> Que ondis from index! </div>
    </div>
  );
}
