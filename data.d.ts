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

/* RD */
interface attribution {
  baseonUrl: string;
  baseonText: string;
  authorUrl: string;
  authorText: string;
}
interface gradientColors {
  blue: ["#72aeff", "#377ddb"];
  blueDark: ["#0c1724", "293052"];
  pinkDark: ["#42202e", "42202e"];
}

interface RdCardProps {
  prefixtitle: string;
  title: string;
  excerpt: string;
  linkUrl: string;
  linkText: string;
  attribution?: attribution;
  imgSrc: StaticImageData;
  gradient: keyof gradientColors;
  color: "light" | "dark";
}
interface RdCardComponentProp extends RdCardProps {
  id: number;
  isHighlight: boolean;
}
