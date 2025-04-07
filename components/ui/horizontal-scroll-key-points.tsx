import { cn } from "@/lib/utils"
import * as React from "react"

const HorizontalScrollRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-auto bg-background-dark text-foreground-dark  lg:landscape:h-[300vh] lg:pb-0 ",
      className,
    )}
    {...props}
  />
))
HorizontalScrollRoot.displayName = "HorizontalScrollRoot"

const HorizontalScrollSticky = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col lg:landscape:flex-row lg:landscape:sticky lg:landscape:top-20 lg:landscape:h-[calc(100vh-80px)] lg:landscape:items-center lg:landscape:overflow-hidden ",
      className,
    )}
    {...props}
  />
))
HorizontalScrollSticky.displayName = "HorizontalScrollSticky"

const HorizontalScrollWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col last:border-b last:pb-4 lg:landscape:gap-y-0 lg:landscape:last:border-b-0 lg:landscape:last:pb-0 gap-y-8 lg:landscape:flex-row lg:landscape:size-full lg:landscape:border-y landscape:border-foreground ",
      className,
    )}
    {...props}
  />
))
HorizontalScrollWrapper.displayName = "HorizontalScrollWrapper"

const HorizontalScrollCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-8 lg:landscape:p-10 h-full w-full lg:landscape:w-[calc(55vw)] bg-background 2xl:py-8 justify-between p-8 md:px-8 xl:px-[60px]",
      className,
    )}
    {...props}
  />
))
HorizontalScrollCard.displayName = "HorizontalScrollCard"

const HorizontalScrollCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-start justify-between", className)}
    {...props}
  />
))
HorizontalScrollCardHeader.displayName = "HorizontalScrollCardHeader"

const HorizontalScrollCardNumber = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "kanit text-[11vw] sm:text-4xl md:text-[2.75rem] lg:text-7xl leading-none 2xl:text-8xl font-black uppercase text-foreground",
      className,
    )}
    {...props}
  />
))
HorizontalScrollCardNumber.displayName = "HorizontalScrollCardNumber"

const HorizontalScrollCardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-nB-green size-14 lg:landscape:size-28", className)}
    {...props}
  />
))
HorizontalScrollCardIcon.displayName = "HorizontalScrollCardIcon"

const HorizontalScrollCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "kanit text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase text-balance w-11/12",
      className,
    )}
    {...props}
  />
))
HorizontalScrollCardTitle.displayName = "HorizontalScrollCardTitle"

const HorizontalScrollCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg 2xl:text-2xl font-medium text-foreground w-11/12 text-balance",
      className,
    )}
    {...props}
  />
))
HorizontalScrollCardDescription.displayName = "HorizontalScrollCardDescription"

export {
  HorizontalScrollRoot,
  HorizontalScrollSticky,
  HorizontalScrollWrapper,
  HorizontalScrollCard,
  HorizontalScrollCardHeader,
  HorizontalScrollCardNumber,
  HorizontalScrollCardIcon,
  HorizontalScrollCardTitle,
  HorizontalScrollCardDescription,
}
