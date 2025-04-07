import {
  FakeCardUIProps,
  fakeCardUIVariants,
} from "@/app/proyectos/(layoutProyectos)/creacion-de-contenido/mockup-card-post"
import { cn } from "@/lib/utils"

export default function FakeCardUI({ className, variant }: FakeCardUIProps) {
  return (
    <div className="bg-white max-w-60 w-full h-full max-h-80 rounded-xl shadow-nB-shadow shadow-[5px_5px_0] flex flex-col justify-center ">
      <div className="h-2/10 w-full flex items-center gap-2 p-2.5">
        {/* circle */}
        <div
          className={cn(
            fakeCardUIVariants({ variant, className }),
            "size-5 rounded-full shrink-0",
          )}
        ></div>
        <div className="w-full space-y-1 ">
          <div className="flex gap-1 items-center">
            <div className="h-1.5 w-3 lg:w-7 bg-nB-black rounded-full"></div>
            <div className="h-1.5 w-7 lg:w-14 bg-nB-black rounded-full"></div>
          </div>
          <div className="h-1 w-1/4 bg-[#C9C8C9] rounded-full"></div>
        </div>
      </div>
      {/* Img placeholder */}
      <div
        className={cn(
          fakeCardUIVariants({ variant, className }),
          "w-full h-6/10 ",
        )}
      ></div>
      <div className="h-2/10 w-full flex flex-col gap-2 p-2.5">
        <div className="bg-[#C9C8C9] h-1.5 rounded-full w-16 lg:w-32"></div>
        <div className="bg-[#C9C8C9] h-1.5 rounded-full w-12 lg:w-24"></div>
      </div>
    </div>
  )
}
