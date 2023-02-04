import Image from "next/image";
import RestarSvg from "../../public/images/memoryGame/svgs/restarCardGame.svg";
interface RestartmemoryGameProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

function RestartmemoryGame({ handleClick }: RestartmemoryGameProps) {
  return (
    <div className='restart'>
      <div className='restart__wrapper'>
        <div className='restart__wrapper__img'>
          <Image src={RestarSvg} layout='fill' alt='' />
        </div>
        <button onClick={handleClick}>
          <div className='diamante'>
            <div className='diamante__thin'>
              <div className='restart__wrapper__txt font-PaytonOne'>
                <p>Restart</p>
                <span>Game</span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default RestartmemoryGame;
