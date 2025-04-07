import * as React from "react"
import { cn } from "@/lib/utils"

const HeroProject = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "flex flex-col-reverse lg:grid lg:grid-cols-2  xl:py-16",
      className,
    )}
    {...props}
  />
))
HeroProject.displayName = "HeroProject"

const HeroColumnWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("lg:place-content-center 2xl:p-10", className)}
    {...props}
  />
))
HeroColumnWrapper.displayName = "HeroColumnWrapper"

const HeroCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("px-8 py-6 space-y-8 w-full", className)}
    {...props}
  />
))
HeroCard.displayName = "HeroCard"

const HeroCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <header ref={ref} className={cn("", className)} {...props} />
))
HeroCardHeader.displayName = "HeroCardHeader"

const HeroCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-3xl md:text-4xl xl:text-6xl  font-light  mb-1",
      className,
    )}
    {...props}
  />
))
HeroCardTitle.displayName = "HeroCardTitle"

const HeroCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
HeroCardDescription.displayName = "HeroCardDescription"

const HeroCardContent = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-lg text-balance", className)} {...props} />
))
HeroCardContent.displayName = "HeroCardContent"

const HeroCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn("text-lg text-balance", className)}
    {...props}
  />
))
HeroCardFooter.displayName = "HeroCardFooter"

export {
  HeroProject,
  HeroColumnWrapper,
  HeroCard,
  HeroCardHeader,
  HeroCardTitle,
  HeroCardDescription,
  HeroCardFooter,
  HeroCardContent,
}
