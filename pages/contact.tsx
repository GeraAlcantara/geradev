import { withIronSessionSsr } from "iron-session/next";
import Forms from "../components/Forms";
import { newCaptchaImage } from "./api/captcha-images";
import { sessionOptions } from "../lib/session";
import MetaPageHelper from "../lib/MetaPageHelper";
import { MetaDataContact } from "../data/MetaData";
import Disclaimer from "../components/Disclaimer";
function Contact({ defaultCaptchaKey }: { defaultCaptchaKey: string }) {
  return (
    <div>
      <MetaPageHelper {...MetaDataContact} />
      {/* render inside main all content */}
      <div className='lg:h-screen flex flex-col justify-between bg-brand-black-900'>
        <Forms defaultCaptchaKey={defaultCaptchaKey} />
        <Disclaimer />
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
