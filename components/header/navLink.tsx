"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonNBVariants } from "../ui/buttonNB"

export default function NavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick?: () => void
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        buttonNBVariants({ variant: "linkNav", size: "min" }),
        "uppercase font-[family-name:var(--font-kanit)]",
        {
          "dark:bg-nB-white dark:text-nB-black dark:hover:bg-nB-white bg-nB-black text-nB-white hover:bg-nB-black":
            pathname === href,
        },
      )}
    >
      {children}
    </Link>
  )
}
