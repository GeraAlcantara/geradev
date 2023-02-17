import {
  RiHome2Fill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiMailSendFill,
  RiNewspaperLine,
  RiGithubFill
} from 'react-icons/ri'
import { GoPerson } from 'react-icons/go'
import { BsTwitch } from 'react-icons/bs'

export interface NavLinksProps {
  title: string
  slug: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export const NavLinks: NavLinksProps[] = [
  {
    title: 'inicio',
    slug: '/',
    Icon: RiHome2Fill
  },
  {
    title: 'R&D',
    slug: '/rd',
    Icon: GoPerson
  },
  {
    title: 'blog',
    slug: '/blog',
    Icon: RiNewspaperLine
  },
  {
    title: 'contacto',
    slug: '/contacto',
    Icon: RiMailSendFill
  }
]
interface SocialLinksProps {
  title: string
  link: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export const SocialLinks: SocialLinksProps[] = [
  {
    title: 'Github',
    link: 'https://github.com/GeraAlcantara',
    Icon: RiGithubFill
  },
  {
    title: 'Twitch',
    link: 'https://www.twitch.tv/jaguar_ek',
    Icon: BsTwitch
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/gerardo-alcantara-4804b328/',
    Icon: RiLinkedinBoxFill
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/geralcantara79',
    Icon: RiTwitterFill
  }
]
