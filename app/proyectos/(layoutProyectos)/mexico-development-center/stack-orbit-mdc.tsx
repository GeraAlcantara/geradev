import IconNextjs from "@/components/icons/icon-nextjs"
import IconPhotoshop from "@/components/icons/icon-photoshop"
import IconReact from "@/components/icons/icon-react"
import IconTailwind from "@/components/icons/icon-tailwind"
import IconTypescript from "@/components/icons/icon-typescript"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import EmojiBarbas from "@/components/stickers/emoji-barbas"

export default function StackOrbitMdc() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden text-nB-white">
      <OrbitingCircles iconSize={60}>
        <div className="rounded-xl bg-nB-black size-14 flex items-center justify-center p-0.5">
          <IconNextjs />
        </div>
        <EmojiBarbas />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={1.2}>
        <div className="rounded-xl bg-nB-white size-10 flex items-center justify-center p-1">
          <IconTailwind />
        </div>
        <div className="rounded-xl bg-[#001e36] size-10 flex items-center justify-center p-1">
          <IconPhotoshop />
        </div>
        <div className="rounded-xl bg-[#23272f] size-10 flex items-center justify-center p-1.5 text-[#58c4dc]">
          <IconReact />
        </div>
        <div className="rounded-xl bg-nB-black size-10 flex items-center justify-center p-2 text-[#58c4dc]">
          <IconTypescript />
        </div>
      </OrbitingCircles>
    </div>
  )
}
