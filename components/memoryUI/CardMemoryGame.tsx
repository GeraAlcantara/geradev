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
      {/* BackFace TODO Move to a FF component */}
      <div className='back-face '>
        <div className='flex justify-center items-center h-full'>
          <div className='relative w-1/2 h-1/2'>
            <Image draggable={false} layout='fill' src={JSBadge.src} alt='JS' />
          </div>
        </div>
      </div>
      {/* end BackFace */}
      <div className='front-face h-full overflow-hidden '>
        <div className='memory-card__wrapper '>
          {/* top part */}
          <section className='memory-card__top'>
            <div className='memory-card__top-left'>
              <span className='memory-card__top-Name font-PaytonOne'>{props.name}</span>
              <div>
                <p className='memory-card__top__txt--small'>free and open-source</p>
                <p className='uppercase font-Urbanist memory-card__top__txtBold'>JS {props.type}</p>
              </div>
            </div>
            <div className='memory-card__top-right'>
              <span className='memory-card__top__txtBolder'>
                {props.type === "Library" ? "UI" : props.type === "Framework" ? "FW" : props.type === "Building Tool" ? "BT" : "RT"}
              </span>
              <p className='memory-card__top__txt--small'>JavaScript</p>
              <p className='memory-card__top__txtThin--small'>{props.type}</p>
            </div>
          </section>
          <section className='memory-card__center pb-8 '>
            <div className=' absolute inset-0 w-1/2 h-1/2 opacity-50 gradient gradient__glow'></div>
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
              <span className='tier-value'>{props.value}</span>
              <span className='txtLight self-end'>Tier</span>
            </div>
            <div className='memory-card__footer-description'>
              <header>
                <h2 className=''>{props.name}</h2>
                <span>{props.nickname}</span>
              </header>
              <p className='memory-card__footer-description__txtSmall'>{props.description}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardMemoryGame;
