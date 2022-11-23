import Head from "next/head";
import React from "react";

function thankyou() {
  return (
    <div>
      <Head>
        <title>Jaguar Ek Dev | Contact</title>
        <meta name='description' content='Jaguar Ek Dev | contact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* render inside main all content */}

      <div className='h-screen flex justify-center items-center '>
        <div className=''>
          <h1 className='text-brand-pink-200 uppercase text-center text-3xl font-bold font-Urbanist'>Thank you!</h1>
        </div>
      </div>
    </div>
  );
}

export default thankyou;
