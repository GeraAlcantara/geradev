import { Html, Head, Main, NextScript } from 'next/document'
const year = new Date().getFullYear()

export default function Document(): JSX.Element {
  return (
    <Html lang="es">
      <Head>
        <meta lang="es" />
        <meta content="es" httpEquiv="Content-Language" />
        <meta content={`Copyright ${year} by Gerardo Alcántara`} name="copyright" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;800;900&family=Urbanist:wght@500&family=Poppins:wght@900&display=swap"
          rel="stylesheet"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <body className="text-gray-50 overflow-x-hidden bg-brand-black-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
