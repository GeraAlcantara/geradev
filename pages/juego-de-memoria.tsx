import { useState, useEffect } from "react";
import CardMemoryGame from "../components/memoryUI/CardMemoryGame";
import Confetti from "../components/memoryUI/Confetti";
import RestartmemoryGame from "../components/memoryUI/RestartmemoryGame";
import ScrollDownIcon from "../components/memoryUI/ScrollDownIcon";
import { itemsImgCard } from "../data/Datamemorygame";
import { Shuffle } from "../lib/shuffleMemoryCards";

interface Props {
  items: ItemImgCard[];
}
function MemorieGame({ items }: Props) {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [doneCards, setDoneCards] = useState<any>({});
  const [clickable, setClickable] = useState<boolean>(true);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [itemsShuffle, setItemsShuffle] = useState<ItemImgCard[]>(items);

  // useref for adding the class flip to the card when is clicked
  const cardClicked = (idx: number) => {
    if (openCards.length === 1) {
      const [prevCardIdx] = openCards;
      if (prevCardIdx !== idx) {
        setOpenCards((prev) => [...prev, idx]);
        setClickable(false);
      }
    } else {
      setOpenCards([idx]);
    }
  };

  const checkForMatch = () => {
    const [firstCard, secondCard] = openCards;

    if (items[firstCard].name === items[secondCard].name) {
      let cardName = items[firstCard].name;
      setOpenCards([]);
      setDoneCards((prev: Object) => ({
        ...prev,
        [cardName]: true,
      }));
      setClickable(true);
    } else {
      setOpenCards([]);
      setClickable(true);
    }
  };

  // card done or not
  const checkCardIsDone = (item: ItemImgCard) => Boolean(doneCards[item.name]);

  //card is open ?
  const checkCardIsOpen = (idx: number) => openCards.includes(idx);

  // restart the game when the button is clicked and re render the component
  const restartGame = () => {
    setDoneCards({});
    setOpenCards([]);
    setGameFinished(false);
    setItemsShuffle((prev) => prev.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    let timeout: any;
    if (openCards.length === 2) {
      timeout = setTimeout(checkForMatch, 1000);
    }
    if (Object.keys(doneCards).length === items.length / 2) {
      setGameFinished(true);
    }
    // clean up
    return () => {
      clearTimeout(timeout);
      setGameFinished(false);
    };
  }, [openCards, itemsShuffle, doneCards]);

  return (
    <section className=' bg-[#1f2534]'>
      {gameFinished && <Confetti />}
      {gameFinished && <RestartmemoryGame handleClick={restartGame} />}
      <ScrollDownIcon />

      <div className='memory-game'>
        {itemsShuffle.map((item, idx) => (
          <CardMemoryGame
            key={idx}
            index={idx}
            name={item.name}
            img={item.img}
            handleClick={cardClicked}
            isDone={checkCardIsDone(item)}
            isOpen={checkCardIsOpen(idx)}
            isEnable={clickable}
            description={item.description}
            nickname={item.nickname}
            type={item.type}
            value={item.value}
          />
        ))}
      </div>
    </section>
  );
}

// get the data of the items and shuffle them in the server and past it as props
export async function getServerSideProps() {
  const items = Shuffle(itemsImgCard);
  return {
    props: {
      items,
    },
  };
}

export default MemorieGame;
