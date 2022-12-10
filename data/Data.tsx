import { RiHome2Fill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiMailSendFill, RiNewspaperLine, RiGithubFill } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

export interface NavLinksProps {
  title: string;
  slug: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
export const NavLinks: Array<NavLinksProps> = [
  {
    title: "home",
    slug: "/",
    Icon: RiHome2Fill,
  },
  {
    title: "R&D",
    slug: "/reserach-and-development",
    Icon: GoPerson,
  },
  {
    title: "blog",
    slug: "/blog",
    Icon: RiNewspaperLine,
  },
  {
    title: "contact",
    slug: "/contact",
    Icon: RiMailSendFill,
  },
];
interface SocialLinksProps {
  title: string;
  link: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
export const SocialLinks: Array<SocialLinksProps> = [
  {
    title: "Github",
    link: "https://github.com/GeraAlcantara",
    Icon: RiGithubFill,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/gerardo-alcantara-4804b328/",
    Icon: RiLinkedinBoxFill,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/gerardo_alcantara_rmz/",
    Icon: RiInstagramFill,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/geralcantara79",
    Icon: RiTwitterFill,
  },
  {
    title: "facebook",
    link: "https://www.facebook.com/gerardo.alcantara.rmz",
    Icon: RiFacebookFill,
  },
];
