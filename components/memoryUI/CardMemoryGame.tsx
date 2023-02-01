import Image from "next/image";
import JSBadge from "../../public/images/memoryGame/svgs/js-badge.svg";
import clsx from "clsx";

function CardMemoryGame(props: MemoryCardProps) {
  const flipCard = () => {
    if (props.isEnable) {
      props.handleClick(props.index);
    }
  };

  // how to compare that isDone is not a empty object
  if (props.isDone) {
    return (
      <div className='memory-card flip'>
        <div className='front-face'>
          <div className='relative w-full h-full'>
            <Image draggable={false} layout='fill' src={props.img} alt='JS' />
          </div>
        </div>
        <div className='back-face h-full flex justify-center items-center'>
          <div className=' relative w-full h-full'>
            <Image draggable={false} layout='fill' src={JSBadge.src} alt='JS' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div title={props.name} className={clsx("memory-card", { flip: props.isOpen })} onClick={flipCard}>
      <div className='back-face'>
        <div className='flex justify-center items-center h-full'>
          <div className='relative w-1/2 h-1/2'>
            <Image draggable={false} layout='fill' src={JSBadge.src} alt='JS' />
          </div>
        </div>
      </div>
      <div className='front-face h-full '>
        <div className='memory-card__wrapper'>
          {/* top part */}
          <section className='memory-card__top'>
            <div className='memory-card__top-left'>
              <span className='memory-card__top-Name font-PaytonOne'>{props.name}</span>
              <div>
                <p className='memory-card__top__txt--small'>free and open-source</p>
                <p className='uppercase font-Urbanist memory-card__top__txtBold'>JS Library</p>
              </div>
            </div>
            <div className='memory-card__top-right'>
              <span className='memory-card__top__txtBolder'>UI</span>
              <p className='memory-card__top__txt--small'>JavaScript</p>
              <p className='memory-card__top__txtThin--small'>Library</p>
            </div>
          </section>
          <section className='memory-card__center'>
            <div className='memory-card__Icon  '>
              <Image draggable={false} layout='fill' src={props.img} alt='JS' />
            </div>
            <span className='memory-card__top-Name font-PaytonOne self-end'>{props.name}</span>
          </section>
          <section className='memory-card__footer'>
            <div className='memory-card__footer-tier'>
              <div className='tier__left'>
                <span className='txtLight'>Front</span>
                <span className='txtLight'>End</span>
              </div>
              <span className='tier-value'>A</span>
              <span className='txtLight self-end'>Tier</span>
            </div>
            <div className='memory-card__footer-description'>
              <header>
                <h1 className=''>{props.name}</h1>
                <span>Also known as React.js or ReactJS</span>
              </header>
              <p className='memory-card__footer-description__txtSmall'>
                free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly
                Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or
                server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to
                the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side
                functionality.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardMemoryGame;
