import Image from "next/image";
import JSBadge from "../../public/images/memoryGame/svgs/js-badge.svg";

import clsx from "clsx";
import BackFaceCardMemory from "./BackFaceCardMemory";
import FrontFaceCardMemory from "./FrontFaceCardMemory";

function CardMemoryGame(props: MemoryCardProps) {
  const flipCard = () => {
    if (props.isEnable) {
      props.handleClick(props.index);
    }
  };

  const { name, img, description, nickname, type, value } = props;
  const itemsProps = { name, img, description, nickname, type, value };

  if (props.isDone) {
    return (
      <div className='memory-card flip'>
        <FrontFaceCardMemory {...itemsProps} />
        <BackFaceCardMemory />
      </div>
    );
  }
  return (
    <div className={clsx("memory-card", { flip: props.isOpen })} onClick={flipCard}>
      <BackFaceCardMemory />
      <FrontFaceCardMemory {...itemsProps} />
    </div>
  );
}

export default CardMemoryGame;
