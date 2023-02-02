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
  nickname: string;
  img: string;
  value: "S" | "A" | "B" | "C" | "D";
  type: "Library" | "Framework" | "Runtime" | "Building Tool";
  description: string;
}
interface MemoryCardProps extends ItemImgCard {
  index: number;
  isDone: boolean;
  isOpen: boolean;
  isEnable: boolean;
  handleClick: (index: number) => void;
}
