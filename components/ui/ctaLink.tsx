import Link from "next/link"
import { cn } from "@/lib/utils"
import { ComponentPropsWithRef } from "react"

export default function CtaLink({
  href,
  label,
  className,
  ...rest
}: {
  href: string
  label: string
  className?: string
} & ComponentPropsWithRef<typeof Link>) {
  return (
    <div className="relative inline-block group">
      <div className="absolute inset-0 rounded-md bg-nB-blue  border border-nB-shadow transition-transform duration-150 z-20"></div>
      <div className="absolute inset-0 rounded-md bg-nB-orange border border-nB-shadow transition-transform duration-150 group-hover:translate-x-2 group-hover:translate-y-2 z-10"></div>
      <Link
        className={cn(
          "relative inline-flex rounded-md no-underline items-center justify-center border border-nB-shadow transition-all duration-150 group-hover:-translate-x-2 group-hover:-translate-y-2 z-30 w-full 2xl:w-auto h-14 px-8 text-xl lg:h-20 lg:px-16 2xl:text-2xl bg-nB-black  text-white",
          className,
        )}
        href={href}
        {...rest}
      >
        {label}
      </Link>
    </div>
  )
}
