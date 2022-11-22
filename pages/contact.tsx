import Head from "next/head";
import FormInput from "../components/FormInput";
import Forms from "../components/Forms";
function Contact() {
  return (
    <div>
      <Head>
        <title>Jaguar Ek Dev | Contact</title>
        <meta name='description' content='Jaguar Ek Dev | contact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* render inside main all content */}

      <div className='h-screen flex '>
        <div className='flex-1 flex flex-col gap-4 p-4'>
          <h1 className='text-brand-pink-200 uppercase text-center text-3xl font-bold font-Urbanist'>Contactame</h1>
          <Forms />
        </div>
        <div className='w-1/2 bg-slate-500'>mapa</div>
      </div>
    </div>
  );
}

export default Contact;
