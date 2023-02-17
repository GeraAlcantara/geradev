import Image from 'next/image'

import RestarSvg from '../../public/images/memoryGame/svgs/restarCardGame.svg'
import styles from '../../styles/restartMemoryGame.module.scss'
interface RestartmemoryGameProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

function RestartmemoryGame({ handleClick }: RestartmemoryGameProps): JSX.Element {
  return (
    <div className={styles.restart}>
      <div className={`${styles.restart__wrapper} animate-scaleInCenter`}>
        <div className={styles.restart__wrapper__img}>
          <Image alt="" layout="fill" src={RestarSvg} />
        </div>
        <button onClick={handleClick}>
          <div className={styles.diamante}>
            <div className={styles.diamante__thin}>
              <div className={`${styles.restart__wrapper__txt} font-Poppins`}>
                <p>Restart</p>
                <span>Game</span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default RestartmemoryGame
