import { RiHome2Fill, RiCustomerServiceFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

export const NavLinks = [
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
];
export const SocialLinks = [
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
{
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
}
