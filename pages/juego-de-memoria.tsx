import { useState, useEffect } from "react";
import CardMemoryGame from "../components/memoryUI/CardMemoryGame";
import { itemsImgCard } from "../data/Datamemorygame";
import { Shuffle } from "../lib/shuffleMemoryCards";
// get props from server
interface Props {
  items: ItemImgCard[];
}
function MemorieGame({ items }: Props) {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [doneCards, setDoneCards] = useState<any>({});
  const [clickable, setClickable] = useState<boolean>(true);

  // useref for adding the class flip to the card when is clicked
  const cardClicked = (idx: number) => {
    if (openCards.length === 1) {
      const [prevCardIdx] = openCards;
      if (prevCardIdx !== idx) {
        console.log([prevCardIdx, idx]);

        setOpenCards((prev) => [...prev, idx]);
        setClickable(false);
      }
    } else {
      console.log([idx]);

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

  useEffect(() => {
    let timeout: any;
    if (openCards.length === 2) {
      timeout = setTimeout(checkForMatch, 1000);
    }
    // clean up
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards, items]);

  return (
    <section className='p-4 h-full bg-[#1f2534]'>
      <div className='memory-game'>
        {items.map((item, idx) => (
          <CardMemoryGame
            key={idx}
            index={idx}
            name={item.name}
            img={item.img}
            handleClick={cardClicked}
            isDone={checkCardIsDone(item)}
            isOpen={checkCardIsOpen(idx)}
            isEnable={clickable}
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
