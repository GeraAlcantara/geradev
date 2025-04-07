"use client"
import { useEffect, useState } from "react"

const useHorizontalScroll = () => {
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (orientation: landscape)",
    )

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsHorizontalScroll(e.matches)
    }

    const handleResize = () => {
      setIsHorizontalScroll(mediaQuery.matches)
    }

    setIsHorizontalScroll(mediaQuery.matches)

    // Escuchar cambios en la media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize)

    // Limpiar los event listeners al desmontar el componente
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return isHorizontalScroll
}

export default useHorizontalScroll
