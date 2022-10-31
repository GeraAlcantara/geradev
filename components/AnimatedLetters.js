function AnimatedLetters({ letterClass, text = "GeraAlcantara", idx }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <span className={`${letterClass} _${i + idx} `} key={i + idx}>
          {char === " " ? <>&nbsp;</> : char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;
