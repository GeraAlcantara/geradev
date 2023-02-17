export const Shuffle = (array: ItemImgCard[]): ItemImgCard[] => {
  const copyArray = [...array, ...array]
  const shuffledArray = copyArray.sort(() => Math.random() - 0.5)

  return shuffledArray
}
