export default function Disclaimer(): JSX.Element {
  return (
    <div className="flex justify-center items-center p-4 xl:p-8 lg:w-3/4 xl:w-1/2">
      <div>
        <p className="text-xs text-white">
          <strong className="text-base">Disclaimer: </strong>
          Navegando por la web encontré el captcha más genial jamás diseñado por Alex Castro para la
          revista digital The Verge. La ilustración fue maravillosa, así que hice un fan art de cómo
          se vería realmente un captcha lo más cerca posible dentro de mis limitaciones. Más allá de
          intentar copiar la ilustración, mi intención era conseguir mi código para hacer el captcha
          y ¡fue súper divertido! Si trabajas para The Verge o eres Alex Castro, contáctame si
          requieres que no use este captcha.
        </p>
        <div className="flex gap-4">
          <a
            className="text text-brand-pink-50 hover:underline"
            href="https://www.theverge.com/2019/2/1/18205610/google-captcha-ai-robot-human-difficult-artificial-intelligence"
            rel="noopener noreferrer"
            target="_blank"
          >
            El artículo de The Verge sobre el captcha
          </a>
          por
          <a
            className="text text-brand-pink-50 hover:underline"
            href="https://www.alexecastro.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Alex Castro
          </a>
        </div>
      </div>
    </div>
  )
}
