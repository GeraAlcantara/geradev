import Head from "next/head";
import { withIronSessionSsr } from "iron-session/next";
import Forms from "../components/Forms";
import { newCaptchaImage } from "./api/captcha-images";
import { sessionOptions } from "../lib/session";
function Contact({ defaultCaptchaKey }: { defaultCaptchaKey: string }) {
  return (
    <div>
      <Head>
        <title>Jaguar Ek Dev | Contact</title>
        <meta name='description' content='Jaguar Ek Dev | contact' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* render inside main all content */}

      <div className='h-screen flex bg-[#393092]'>
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
    if (!req.session.captchaImages) {
      req.session.captchaImages = newCaptchaImage();
      await req.session.save();
    }
    return {
      props: {
        defaultCaptchaKey: new Date().getTime(),
      },
    };
  }
}, sessionOptions);
