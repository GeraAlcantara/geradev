import { cn } from "@/lib/utils"
import Link from "next/link"

import Tiktok from "@/components/icons/tiktok"
import Instagram from "@/components/icons/instagram"
import Twitch from "@/components/icons/twitch"
import Pinterest from "@/components/icons/pinterest"
import Linkedin from "@/components/icons/linkedin"
import { buttonNBVariants } from "../ui/buttonNB"

interface SocialLinksProps {
  href: string
  social: "tiktok" | "instagram" | "twitch" | "pinterest" | "linkedin"
}
const socialsIcons = {
  tiktok: <Tiktok />,
  instagram: <Instagram />,
  twitch: <Twitch />,
  pinterest: <Pinterest />,
  linkedin: <Linkedin />,
}

export default function SocialLinks({ href, social }: SocialLinksProps) {
  return (
    <Link
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
      className={cn(
        buttonNBVariants({ variant: "circleDS", size: "iconFlat" }),
        "bg-nB-white hover:bg-nB-white shadow-nB-black border-nB-black",
      )}
    >
      <span className="sr-only">{social}</span>
      <div className="h-full w-full p-2.5">{socialsIcons[social]}</div>
    </Link>
  )
}
