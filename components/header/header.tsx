"use client"

import { useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"
import Logo from "../logo"

import NavLink from "./navLink"
import ModeToggle from "../modeToggle"
import { ButtonNB } from "../ui/buttonNB"
import IconCross from "@/components/icons/icon-cross"
import IconMenu from "@/components/icons/icon-menu"

import HeaderContact from "./header-contact"

type NavLinks = {
  href: string
  label: string
}
const navLinks: NavLinks[] = [
  { href: "/", label: "Inicio" },
  /*   { href: "/servicios", label: "Servicios" }, */
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  /*   { href: "/blog", label: "Blog" }, */
]

export default function Header() {
  const [hasScroll, setHasscroll] = useState<boolean>(false)
  const { scrollY } = useScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasscroll(latest > 50 ? true : false)
  })

  return (
    <div className="sticky top-0 z-50 ">
      <header
        className={`bg-background text-foreground lg:flex items-center justify-between lg:border-b border-gray-400/80 ${
          hasScroll ? "h-16 lg:h-20 " : "h-16 lg:h-20"
        } lg:px-8`}
      >
        <div className="px-4 lg:px-0 h-full flex items-center justify-between border-b border-gray-400/80 lg:border-0 ">
          {/* Logo */}
          <Logo />
          <div className="flex items-center gap-8 relative">
            <div className="lg:hidden">
              <ModeToggle />
            </div>
            <ButtonNB
              variant={"circleDS"}
              size={"iconFlat"}
              className="lg:hidden bg-nB-blue p-2.5 hover:bg-nB-blue text-nB-white hover:shadow-nB-gray-dark"
              aria-label={
                isMenuOpen ? "Cerrar menu principal" : "Abrir menu principal"
              }
              aria-haspopup="menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Menu</span>
              {isMenuOpen ? <IconCross /> : <IconMenu />}
            </ButtonNB>
          </div>
        </div>
        {/* nav */}

        <div
          className={`lg:flex lg:text-inherit lg:flex-row bg-background lg:bg-transparent relative -z-20 lg:z-auto p-8 lg:p-0  lg:min-h-0 lg:items-center justify-between gap-8 lg:h-full space-y-8 lg:space-y-0 transition-all motion-reduce:transition-none duration-300 border-b shadow-xl min-h-[calc(100vh-4rem)] shadow-foreground/30 lg:shadow-none border-nB-white lg:border-none ${
            isMenuOpen ? "visible translate-y-0" : "invisible -translate-y-full"
          } lg:visible lg:translate-y-0 lg:duration-0 lg:transition-none `}
          id="Main-menu"
        >
          <nav className="flex flex-col lg:flex-row gap-4 lg:items-center h-full">
            <ul className="flex flex-col lg:flex-row gap-2">
              {navLinks.map((link, idx) => (
                <li key={link.label + idx}>
                  <NavLink href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* CTA */}
          <div className="flex flex-col items-start lg:flex-row lg:h-full lg:items-center gap-8 ">
            <div className="hidden lg:block">
              <ModeToggle />
            </div>
            {/* <div className=" lg:border-l lg:h-full lg:border-gray-400/80 lg:items-center w-fit lg:w-auto  ">
              <HeaderContact />
            </div> */}
          </div>
        </div>
      </header>
    </div>
  )
}
