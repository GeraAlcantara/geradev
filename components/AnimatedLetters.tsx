import { uuidv4 } from '../lib/utils/uuidv4'

interface AnimatedLettersProps {
  text: string
}

export default function AnimatedLetters({
  text = 'GeraAlcantara'
}: AnimatedLettersProps): JSX.Element {
  // TODO: Recomendacion de NoversalFenix dependiendo de la cantidad de char en el prop texto, se genera un uuid para cada uno y se almacena en un estado para utilizarlo como key en el map, este componente deberia de recibir algo como esto  [{char:'F',id:'a4g6'}] y no un string, para evitar que se genere un uuid por cada renderizado del componente.
  return (
    <span>
      {text.split('').map((char) => (
        <span
          key={uuidv4()}
          className={'transition-colors '}
          onAnimationEnd={(e: React.AnimationEvent<HTMLSpanElement>) => {
            e.currentTarget.classList.remove('animatedLeters-mouseover')
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            e.currentTarget.classList.add('animatedLeters-mouseover')
          }}
        >
          {char === ' ' ? <>&nbsp;</> : char}
        </span>
      ))}
    </span>
  )
}
