import IconAe from "@/components/icons/icon-ae"
import IconBlender from "@/components/icons/icon-blender"
import IconFigma from "@/components/icons/icon-figma"
import IconIllustrator from "@/components/icons/icon-illustrator"
import IconMidjourney from "@/components/icons/icon-midjourney"
import IconOpenai from "@/components/icons/icon-openai"
import IconPhotoshop from "@/components/icons/icon-photoshop"
import IconPremier from "@/components/icons/icon-premier"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import EmojiBarbas from "@/components/stickers/emoji-barbas"
export default function StackOrbitCreator() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden text-nB-white">
      <OrbitingCircles iconSize={60}>
        <div className="rounded-xl bg-nB-white size-14 flex items-center justify-center p-2.5 ">
          <IconFigma />
        </div>
        <div className="rounded-xl bg-[#00005b] size-14 flex items-center justify-center ">
          <IconAe />
        </div>
        <div className="rounded-xl bg-nB-white size-14 flex items-center justify-center ">
          <IconMidjourney />
        </div>
        <EmojiBarbas />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={90} reverse speed={1.2}>
        <div className="rounded-xl bg-[#00005B] size-10 flex items-center justify-center p-0.5">
          <IconPremier />
        </div>
        <div className="rounded-xl bg-[#001e36] size-10 flex items-center justify-center p-1">
          <IconPhotoshop />
        </div>

        <div className="rounded-xl bg-nB-white size-10 flex items-center justify-center p-1.5 ">
          <IconOpenai />
        </div>
        <div className="rounded-xl bg-[##ff9a00] size-10 flex items-center justify-center ">
          <IconIllustrator />
        </div>
        <div className="rounded-xl bg-nB-white size-10 flex items-center justify-center p-1 ">
          <IconBlender />
        </div>
      </OrbitingCircles>
    </div>
  )
}
