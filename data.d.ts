interface PreviewCardData {
  title?: string;
  titleog?: string;
  description?: string;
  descriptionog?: string;
  image?: string;
  imageog?: string;
  imageAlt?: string;
  imagetwitter?: string;
  url?: string;
  urlog?: string;
  site_name?: string;
  site_nameog?: string;
}

// memory Game interfaces
interface ItemImgCard {
  name: string;
  /* type as a image source import  */
  img: string;
}
interface MemoryCardProps {
  name: string;
  img: string;
  index: number;
  isDone: boolean;
  isOpen: boolean;
  isEnable: boolean;
  handleClick: (index: number) => void;
}
