import { useRouter } from "next/router";
import Logo from "./Logo";
import Link from "next/link";
import { NavLinks, SocialLinks } from "../data/Data";

/* convert to typescript */
interface SidebarProps {
  showMenu: boolean;
}

export default function Sidebar({ showMenu, ...props }: SidebarProps) {
  const router = useRouter();
  return (
    <header
      className={`w-24 bg-brand-black-300 fixed lg:static flex flex-col transition-all ease-in-out duration-500 justify-between z-50 top-0 h-screen items-center px-2 py-4  ${
        showMenu ? "left-0" : "-left-full"
      } `}
    >
      <Logo />

      <nav className='flex flex-col justify-between items-center w-full uppercase gap-6'>
        <ul className='flex flex-col items-center gap-8 justify-center'>
          {NavLinks.map(({ title, Icon, slug }, idx) => (
            <li key={idx + title}>
              <Link href={slug}>
                <div
                  className={`flex flex-col items-center hover:text-brand-pink-500 text-2xl ${
                    router.pathname === "/" + slug || router.pathname === slug ? "text-brand-pink-500" : "text-brand-pink-100"
                  }`}
                >
                  <Icon />
                  <span className='text-sm font-Urbanist sm:landscape:hidden lg:landscape:inline-block mt-2'>{title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className='w-full self-end flex flex-col gap-4 '>
        {SocialLinks.map(({ title, link, Icon }, idx) => (
          <Link key={idx + title} href={link}>
            <a target='_blank' className='flex items-center justify-center gap-2 hover:text-brand-pink-500'>
              <Icon className='text-3xl' />
            </a>
          </Link>
        ))}
      </footer>
    </header>
  );
}
