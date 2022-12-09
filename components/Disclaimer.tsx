export default function Disclaimer() {
  return (
    <div className='flex justify-center items-center p-4 xl:p-8 lg:w-3/4 xl:w-1/2'>
      <div>
        <p className='text-xs text-white'>
          <strong className='text-base'>Disclaimer: </strong>
          Surfing the web I found the coolest captcha ever designed by Alex Castro for the digital magazine The Verge. The illustration was wonderful so I made
          a fan art of what a captcha would really look like as close as possible within my limitations. Beyond trying to copy the illustration, my intention
          was to get my code to make the captcha and it was super fun! If you are from The Verge or Alex Castro please contact me if you require me not to use
          this captcha.
        </p>
        <div className='flex gap-4'>
          <a
            className='text text-brand-pink-50 hover:underline'
            href='https://www.theverge.com/2019/2/1/18205610/google-captcha-ai-robot-human-difficult-artificial-intelligence'
            target='_blank'
            rel='noopener noreferrer'
          >
            The Verge article
          </a>
          <a className='text text-brand-pink-50 hover:underline' href='https://www.alexecastro.com/' target='_blank' rel='noopener noreferrer'>
            Alex Castro
          </a>
        </div>
      </div>
    </div>
  );
}
