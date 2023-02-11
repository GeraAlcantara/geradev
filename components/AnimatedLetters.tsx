interface AnimatedLettersProps {
  text: string;
}

export default function AnimatedLetters({ text = "GeraAlcantara",}: AnimatedLettersProps) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <span
          onMouseEnter={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => e.currentTarget.classList.add("animatedLeters-mouseover")}
          onAnimationEnd={(e: React.AnimationEvent<HTMLSpanElement>) => e.currentTarget.classList.remove("animatedLeters-mouseover")}
          className={`transition-colors `}
          key={i+text+char}
        >
          {char === " " ? <>&nbsp;</> : char}
        </span>
      ))}
    </span>
  );
}
