import { useEffect, useState } from "react"

/**
 * Custom hook to check if a media query matches the current viewport.
 * @param query - The media query string to match against the viewport.
 * @example useMediaQuery('(min-width: 768px) and (orientation: landscape)')
 * @returns A boolean indicating whether the media query matches the current viewport.
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches)

    setMatches(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [query])

  return matches
}

export { useMediaQuery }
