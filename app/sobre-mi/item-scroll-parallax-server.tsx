import Image, { StaticImageData } from "next/image"

const ServerItemScrollParallaxImage = ({ img }: { img: StaticImageData }) => {
  return (
    <Image
      src={img}
      alt=""
      className="w-full object-cover lg:rounded-xl lg:size-[600px] lg:shadow-nB-shadow lg:shadow-[6px_6px_0px] lg:border-2 lg:border-nB-shadow"
    />
  )
}
const ServerItemScrollParallaxTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="px-8 lg:px-0 max-w-md xl:max-w-full mt-2 font-black text-3xl lg:text-5xl 2xl:text-7xl">
      {title}
    </h2>
  )
}
const ServerItemScrollParallaxContent = ({ content }: { content: string }) => {
  return (
    <p className="px-8 lg:px-0 text-lg xl:text-xl 2xl:text-2xl mt-2">
      {content}
    </p>
  )
}

export {
  ServerItemScrollParallaxImage,
  ServerItemScrollParallaxTitle,
  ServerItemScrollParallaxContent,
}
