import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;800;900&family=Urbanist:wght@500&display=swap' rel='stylesheet' />
      </Head>
      <body className='text-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
