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
      <div className='flex justify-center items-center h-full'>
        <div className='memory-card flip'>
          <FrontFaceCardMemory {...itemsProps} />
          <BackFaceCardMemory />
        </div>
      </div>
    );
  }
  return (
    <div className='flex justify-center items-center h-full'>
      <div className={clsx("memory-card", { flip: props.isOpen })} onClick={flipCard}>
        <BackFaceCardMemory />
        <FrontFaceCardMemory {...itemsProps} />
      </div>
    </div>
  );
}

export default CardMemoryGame;
