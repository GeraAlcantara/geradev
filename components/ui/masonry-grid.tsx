import { cn } from "@/lib/utils"
import * as React from "react"
const MasonryGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "columns-2 gap-5 lg:gap-8 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 ",
        className,
      )}
      {...props}
    />
  )
})

MasonryGrid.displayName = "MasonryGrid"

export default MasonryGrid
