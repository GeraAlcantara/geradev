import * as React from "react"

import { cn } from "@/lib/utils"

const BigCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-background text-foreground border-2 border-nB-black shadow-nB-black shadow-[6px_6px_0px] rounded-xl overflow-hidden max-w-[740px] flex flex-col ",
      className,
    )}
    {...props}
  />
))
BigCard.displayName = "BigCard"

const BigCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 px-5 2xl:px-8 pt-4", className)}
    {...props}
  />
))
BigCardHeader.displayName = "BigCardHeader"

const BigCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-black kanit bg-gradient-to-r bg-clip-text  text-transparent from-nB-black to-nB-gray-dark dark:from-nB-white dark:to-nB-white/90 uppercase text-center leading-none  ",
      className,
    )}
    {...props}
  />
))
BigCardTitle.displayName = "BigCardTitle"

const BigCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-lg font-medium", className)} {...props} />
))
BigCardDescription.displayName = "BigCardDescription"

const BigCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "py-4 lg:py-8 px-5 2xl:px-8 md:text-lg 2xl:text-xl font-light ",
      className,
    )}
    {...props}
  />
))
BigCardContent.displayName = "BigCardContent"

const BigCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-5 2xl:px-8 pb-6 xl:pb-8 flex items-end h-full ",
      className,
    )}
    {...props}
  />
))
BigCardFooter.displayName = "BigCardFooter"

export {
  BigCard,
  BigCardHeader,
  BigCardTitle,
  BigCardDescription,
  BigCardContent,
  BigCardFooter,
}
