import { cn } from "@/lib/utils"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const toolItemVariants = cva(
  "p-2 rounded-sm size-10 flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        active: "bg-[#373D3D]",
      },
      size: {
        default: "rounded-sm size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const ToolPallete = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-14 p-2 bg-[#2A2A2A]  flex flex-col gap-2.5 rounded-md",
      className,
    )}
    {...props}
  />
))
ToolPallete.displayName = "ToolPallete"

export interface ToolItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolItemVariants> {}

const ToolItem = React.forwardRef<HTMLDivElement, ToolItemProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      className={cn(toolItemVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
)

ToolItem.displayName = "ToolItem"

export { ToolPallete, ToolItem }
