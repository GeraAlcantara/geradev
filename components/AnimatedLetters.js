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
}

export default AnimatedLetters;
