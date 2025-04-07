import Image from "next/image"
import ArrowRight from "../icons/arrow-right"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Link from "next/link"
interface MiniCardProps {
  title: string
  href: string
  imgSrc: string | StaticImport
}

export default function MiniCard({ href, imgSrc, title }: MiniCardProps) {
  return (
    <Link
      href={href}
      className="group border-2 border-nB-shadow shadow-nB-shadow hover:shadow-[4px_4px_0px] transition-all will-change-auto ease-in-out duration-300 rounded-lg w-full  overflow-hidden"
    >
      {/* img container */}
      <div className="h-48 md:h-44 xl:h-52 2xl:h-[240px] w-full overflow-hidden">
        <Image
          src={imgSrc}
          alt=""
          className="object-cover size-full group-focus-visible:scale-105 will-change-transform transition-all duration-400 ease-in-out  group-hover:scale-105"
        />
      </div>
      {/* card content */}
      <div className="flex justify-between items-center p-4 ">
        {/* card title */}
        <h3 className="text-xl font-black">{title}</h3>
        {/* card icon */}
        <div className="size-12 p-1">
          <ArrowRight />
        </div>
      </div>
    </Link>
  )
}
