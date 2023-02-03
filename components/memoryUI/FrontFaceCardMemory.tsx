import Image from "next/image";

function FrontFaceCardMemory(props: ItemImgCard) {
  return (
    <div className='front-face h-full overflow-hidden '>
      <div className='memory-card__wrapper '>
        {/* top part */}
        <div className=' absolute inset-0 w-1/2 h-1/2 opacity-50 gradient gradient__glow col-start-1 col-end-4 row-start-1 row-span-4'></div>
        <div className='memory-card__top-left'>
          <span className='memory-card__top-Name font-PaytonOne'>{props.name}</span>
        </div>
        <div className='memory-card__top-center'>
          <span className='memory-card__top__txt--small'>free and open-source</span>
          <span className='uppercase font-Urbanist memory-card__top__txtBold'>JS {props.type}</span>
        </div>
        <div className='memory-card__top-right'>
          <span className='memory-card__top__txtBolder'>
            {props.type === "Library" ? "UI" : props.type === "Framework" ? "FW" : props.type === "Building Tool" ? "BT" : "RT"}
          </span>
          <div className='flex flex-col items-end'>
            <span className='memory-card__top__txt--small'>JavaScript</span>
            <span className='memory-card__top__txtThin--small'>{props.type}</span>
          </div>
        </div>

        <div className='memory-card__center'>
          <div className='memory-card__Icon  '>
            <Image draggable={false} layout='fill' src={props.img} alt='' />
          </div>
        </div>
        <div className='memory-card__center-right'>
          <span className='memory-card__top-Name font-PaytonOne self-end'>{props.name}</span>
        </div>
        <div className='memory-card__footer-tier--prefix'>
          <span>Front</span>
          <span>End</span>
        </div>
        <div className='memory-card__footer-tier'>
          <span className='tier-value'>{props.value}</span>
        </div>
        <div className='memory-card__footer-tier--sufix'>
          <span className='txtLight self-end'>Tier</span>
        </div>
        <div className='memory-card__footer-description'>
          <header>
            <h2 className=''>{props.name}</h2>
            <span>{props.nickname}</span>
          </header>
          <p className='memory-card__footer-description__txtSmall'>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default FrontFaceCardMemory;
