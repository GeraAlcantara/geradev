/* 

function AnimatedLetters({ letterClass, text = "GeraAlcantara", idx }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <span
          onMouseEnter={(e) => e.target.classList.add("animatedLeters-mouseover")}
          onAnimationEnd={(e) => e.target.classList.remove("animatedLeters-mouseover")}
          className={`${letterClass} _${i + idx} transition-colors`}
          key={i + idx}
        >
          {char === " " ? <>&nbsp;</> : char}
        </span>
      ))}
    </span>
  );
} */

/* pass to typescript */
interface AnimatedLettersProps {
  letterClass: string;
  text: string;
  idx: number;
}

export default function AnimatedLetters({ letterClass, text = "GeraAlcantara", idx }: AnimatedLettersProps) {
 
  return (
    <span>
      {text.split("").map((char, i) => (
        <span
          onMouseEnter={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => e.currentTarget.classList.add("animatedLeters-mouseover")}
          onAnimationEnd={(e:React.AnimationEvent<HTMLSpanElement>) => e.currentTarget.classList.remove("animatedLeters-mouseover")}
          className={`${letterClass} _${i + idx} transition-colors`}
          key={i + idx}
        >
          {char === " " ? <>&nbsp;</> : char}
        </span>
      ))}
    </span>
  );
}


