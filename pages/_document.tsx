import { Html, Head, Main, NextScript } from "next/document";
const year = new Date().getFullYear();

export default function Document(): JSX.Element {
  return (
    <Html lang='en'>
      <Head>
        <meta http-equiv='Content-Language' content='en' />
        <meta name='copyright' content={`Copyright ${year} by Gerardo Alcàntara`} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;800;900&family=Urbanist:wght@500&display=swap' rel='stylesheet' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='text-gray-50 overflow-x-hidden bg-brand-black-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
