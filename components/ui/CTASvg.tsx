interface CTASvgProps {
  text: string
  className?: string
}
export default function CTASvg({ text, className }: CTASvgProps) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 200 200">
      <defs>
        <path
          id="circlePath"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
      </defs>

      <text fontSize="14" fill="currentColor">
        <textPath href="#circlePath" startOffset="0%">
          ● {text} ● {text} ●
        </textPath>
      </text>
    </svg>
  )
}
