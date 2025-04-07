import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
interface TinyCardProps {
  name: string
  username: string
  alt?: string
  src?: string
}
export default function TinyCard({ name, username, src, alt }: TinyCardProps) {
  return (
    <div className="m-auto flex flex-col flex-nowrap md:w-32 xl:w-40 rounded-xl border-2 shadow-nB-black shadow-[4px_4px_0] will-change-auto border-nB-black bg-nB-white p-2.5 md:p-4 items-center justify-center text-nB-black">
      <div className="border-2  border-nB-black bg-nB-black rounded-full flex items-center justify-center">
        <Avatar className="rounded-full">
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>
            <span>{name}</span>
          </AvatarFallback>
        </Avatar>
      </div>

      <p className="text-xs md:text-base leading-normal truncate max-w-full min-w-0 text-center mt-2 font-semibold ">
        @{username}
      </p>
      <div className="rounded-[14px] h-1 md:h-2.5 w-full mt-2 bg-nB-black/40"></div>
      <div className="rounded-[14px] h-1 md:h-2.5 w-3/4 mt-1.5  bg-nB-black/35"></div>
    </div>
  )
}
