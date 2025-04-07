"use client"
import { ReactLenis } from "lenis/react"

const LenisScrollProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.6, // Duración de la animación de desplazamiento
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing personalizada
        orientation: "vertical", // Dirección del desplazamiento (vertical u horizontal)
        gestureOrientation: "vertical", // Dirección del gesto (vertical u horizontal)
        touchMultiplier: 2, // Multiplicador de desplazamiento para dispositivos táctiles
        infinite: false, // Habilitar desplazamiento infinito
        smoothWheel: true, // Suavizar el desplazamiento iniciado por eventos wheel
        syncTouch: false, // Deshabilitar desplazamiento suave en dispositivos táctiles
        lerp: 0.1, // Intensidad de la interpolación lineal (entre 0 y 1)
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisScrollProvider
