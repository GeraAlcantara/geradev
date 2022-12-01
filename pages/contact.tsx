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

      <div className='lg:h-screen flex flex-col justify-between bg-brand-black-900'>
        <Forms defaultCaptchaKey={defaultCaptchaKey} />
        {/* <div className='w-1/2 bg-slate-500'>mapa</div> */}
        <div className='flex justify-center items-center p-4 xl:p-8 lg:w-3/4 xl:w-1/2'>
          <div>
            <p className='text-xs text-white'>
              <strong className='text-base'>Disclaimer: </strong>
              Surfing the web I found the coolest captcha ever designed by Alex Castro for the digital magazine The Verge. The illustration was wonderful so I
              made a fan art of what a captcha would really look like as close as possible within my limitations. Beyond trying to copy the illustration, my
              intention was to get my code to make the captcha and it was super fun! If you are from The Verge or Alex Castro please contact me if you require
              me not to use this captcha.
            </p>
            <div className='flex gap-4'>
              <a
                className='text text-brand-pink-50 hover:underline'
                href='https://www.theverge.com/2019/2/1/18205610/google-captcha-ai-robot-human-difficult-artificial-intelligence'
                target='_blank'
                rel='noopener noreferrer'
              >
                The Verge article
              </a>
              <a className='text text-brand-pink-50 hover:underline' href='https://www.alexecastro.com/' target='_blank' rel='noopener noreferrer'>
                Alex Castro
              </a>
            </div>
          </div>
        </div>
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
