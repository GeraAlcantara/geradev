import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

function RdCard({
  prefixtitle,
  title,
  attribution,
  excerpt,
  imgSrc,
  linkText,
  linkUrl,
  gradient,
  color
}: RdCardProps) {
  return (
    <div
      className={clsx(
        'lg:col-span-12 xl:col-span-6 rounded-3xl flex flex-col-reverse gap-4 md:flex-row justify-between items-center bg-gradient-to-br from-brand-pink-800 to-brand-pink-600 py-4',
        {
          'from-[#72aeff] to-[#377ddb]': gradient === 'blue',
          'from-[#42202e] to-[#42202e]': gradient === 'pinkDark'
        }
      )}
    >
      <div className="px-4 md:px-8 flex flex-col gap-y-4 justify-around md:w-1/2 md:h-full">
        <div>
          <h2
            className={clsx('text-3xl lg:text-3xl  uppercase font-extrabold', {
              'text-brand-pink-accent': color === 'light',
              'text-[#2c3436]': color === 'dark'
            })}
          >
            {prefixtitle}
          </h2>
          <div>
            <h2
              className={clsx('text-3xl lg:text-3xl font-Urbanist  text-brand-pink-accent', {
                'text-brand-pink-accent': color === 'light',
                'text-[#2c3436]': color === 'dark'
              })}
            >
              {title}
            </h2>
          </div>
        </div>

        <p
          className={clsx('lg:text-lg', {
            'text-white': color === 'light',
            'text-brand-black-900': color === 'dark'
          })}
        >
          {excerpt}{' '}
        </p>
        <div className="inline-flex ">
          <Link href={linkUrl}>
            <a className="text-brand-pink-50 md:text-lg font-bold hover:text-brand-pink-accent bg-brand-black-300 px-6 py-4 rounded-3xl ">
              {linkText} <span className="text-brand-pink-50"> &rarr;</span>
            </a>
          </Link>
        </div>

        {/* if attribution object is not empty */}
        {attribution ? (
          <div>
            <p
              className={clsx({
                'text-white': color === 'light',
                'text-brand-black-300': color === 'dark'
              })}
            >
              Este trabajo se basa en&nbsp;
              <a href={attribution.baseonUrl} rel="noopener noreferrer" target="_blank">
                <span
                  className={clsx(' cursor-pointer ', {
                    'text-brand-pink-50 hover:text-brand-pink-accent': color === 'light',
                    'text-white hover:text-[#ffee00]': color === 'dark'
                  })}
                >
                  {attribution.baseonText}&nbsp;
                </span>
              </a>
              por
              <a href={attribution.authorUrl} rel="noopener noreferrer" target="_blank">
                <span
                  className={clsx(' cursor-pointer ', {
                    'text-brand-pink-50 hover:text-brand-pink-accent': color === 'light',
                    'text-white hover:text-[#ffee00]': color === 'dark'
                  })}
                >
                  &nbsp;{attribution.authorText}
                </span>
              </a>
            </p>
          </div>
        ) : null}
      </div>
      <div className="md:flex-1 h-full flex">
        <Image
          alt="3D render cartoon car"
          className="w-full h-full rounded-3xl"
          objectFit="contain"
          objectPosition="center"
          src={imgSrc}
        />
      </div>
    </div>
  )
}

export default RdCard
