import {
  HorizontalScrollCard,
  HorizontalScrollCardDescription,
  HorizontalScrollCardHeader,
  HorizontalScrollCardIcon,
  HorizontalScrollCardNumber,
  HorizontalScrollCardTitle,
} from "@/components/ui/horizontal-scroll-key-points"
import { cn } from "@/lib/utils"
import { JSX } from "react"

export default function KeyChallange({
  id,
  icon: Icon,
  title,
  description,
  bgClass,
  iconClass,
}: {
  id: number
  title: string
  description: string
  bgClass?: string
  iconClass?: string
  icon: () => JSX.Element
}) {
  return (
    <HorizontalScrollCard className={cn("", bgClass)}>
      <HorizontalScrollCardHeader>
        <HorizontalScrollCardNumber>{id}.</HorizontalScrollCardNumber>
        <HorizontalScrollCardIcon className={cn("", iconClass)}>
          <Icon />
        </HorizontalScrollCardIcon>
      </HorizontalScrollCardHeader>

      <HorizontalScrollCardTitle>{title}</HorizontalScrollCardTitle>
      <HorizontalScrollCardDescription>
        <p>{description} </p>
      </HorizontalScrollCardDescription>
    </HorizontalScrollCard>
  )
}
