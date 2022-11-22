import { RiHome2Fill, RiCustomerServiceFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiMailSendFill } from "react-icons/ri";
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
    title: "about",
    slug: "about",
    Icon: GoPerson,
  },
  {
    title: "service",
    slug: "service",
    Icon: RiCustomerServiceFill,
  },
  {
    title: "contact",
    slug: "contact",
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

/* TODO:
            -----
            logo
            ----
            
            -------
            1. home
            2. About
            3. service
            ------

            -------
            Social
            1.Twitter
            2.face
            3. insta
            4.linkedin
            ------
        */
