import Head from "next/head";
import { withIronSessionSsr } from "iron-session/next";
import Forms from "../components/Forms";
import { newCaptchaImage } from "./api/captcha-images";
import { sessionOptions } from "../lib/session";
import ImageOG from "../public/contactsocialog.jpg";
function Contact({ defaultCaptchaKey }: { defaultCaptchaKey: string }) {
  const twitterHandle = "@geralcantara79";
  const previewImage = "https://geradev.vercel.app/contactsocialog.jpg";
  const currentURL = "https://geradev.vercel.app/contact";
  const siteName = "Jaguar Ek Dev";
  const pageTitle = "Jaguar Ek Dev | Contact";
  const description = "Contact me, while you do it you will be surprised with the coolest captcha on the WEB";
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description} />

        <link rel='icon' href='/favicon.ico' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={twitterHandle} key='twhandle' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={description} />

        {/* Open Graph */}
        <meta property='og:url' content={currentURL} key='ogurl' />
        <meta property='og:image' content={previewImage} key='ogimage' />
        <meta property='og:site_name' content={siteName} key='ogsitename' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
      </Head>
      {/* render inside main all content */}

      <div className='lg:h-screen flex bg-[#393092]'>
        <Forms defaultCaptchaKey={defaultCaptchaKey} />
        {/* <div className='w-1/2 bg-slate-500'>mapa</div> */}
      </div>
    </div>
  );
}

export default Contact;

/* getServerSideProps withIronSessionSsr */
export const getServerSideProps = withIronSessionSsr(async function getIronSession({ req }) {
  {
    req.session.captchaImages = newCaptchaImage();
    await req.session.save();

    return {
      props: {
        defaultCaptchaKey: new Date().getTime(),
      },
    };
  }
}, sessionOptions);
