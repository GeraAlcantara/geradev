import Image from "next/image"
import SocialLinks from "./socialLinks"
import StickerJaguar from "@/public/assets/sticker-jaguar.png"
import StickerNeoMexa from "@/public/assets/jaguar_neo_mexa.png"
import { socialData } from "@/content/data"

const date = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-nB-purple p-2 sm:p-4 md:p-12 lg:p-16 2xl:p-24 flex justify-center items-center bg-cover bg-no-repeat text-nB-white xl:min-h-[calc(100vh-56px)]">
      <div className="w-full h-full border-4 border-nB-black flex-col flex lg:grid lg:grid-cols-2 px-4 py-8 lg:p-8 bg-nB-blue rounded-2xl">
        {/* left */}
        <div className="w-full flex justify-center items-center">
          <div className="max-w-3xs md:max-w-none md:w-fit">
            <Image
              src={StickerNeoMexa}
              alt="sticker Balam ek"
              className="object-contain"
            />
          </div>
        </div>
        {/* right */}
        <div className=" lg:p-10 xl:p-14">
          {/* Social Links */}
          <div className="flex items-center justify-center">
            <div className="mt-10 flex items-center justify-center ">
              <Image
                src={StickerJaguar}
                alt="sticker Sr front-end JaguarEk"
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-fit m-auto flex flex-wrap gap-4 items-center my-8">
            {socialData.map((socialNetwork, index) => (
              <SocialLinks
                key={socialNetwork.social + index}
                href={socialNetwork.url}
                social={socialNetwork.social}
              />
            ))}
          </div>
          <p className="text-center text-lg lg:text-2xl">
            Detrás de cada publicación hay algo interesante esperándote. Sígueme
            en mis redes sociales y descubre qué estoy compartiendo.
          </p>
          <p className="text-center mt-2 font-light">© {date} Copyright</p>
        </div>
      </div>
    </footer>
  )
}
