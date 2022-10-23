import { useRouter } from "next/router";
import Logo from "./Logo";
import Link from "next/link";
import { NavLinks, SocialLinks } from "../data/Data";

function Sidebar() {
  const router = useRouter();
  return (
    <header className='w-24 bg-bg_secondary'>
      <div className='flex flex-wrap px-2 py-6 h-full justify-between  '>
        <Logo />
        {/* menu nav */}
        <nav className='flex flex-col  justify-between items-center w-full uppercase'>
          {NavLinks.map(({ title, Icon, slug }, idx) => (
            <Link key={idx + title} href={slug}>
              <div
                className={`flex flex-col items-center justify-center hover:text-secondary text-2xl ${
                  router.pathname === "/" + slug || router.pathname === slug ? "text-secondary" : "text-white"
                }`}
              >
                <Icon />
                <span className='text-base font-Urbanist'>{title}</span>
              </div>
            </Link>
          ))}
        </nav>
        <footer className='w-full self-end flex flex-col gap-4 '>
          {SocialLinks.map(({ title, link, Icon }, idx) => (
            <Link key={idx + title} href={link} target='_blank'>
              <div className='flex items-center justify-center gap-2 hover:text-secondary'>
                <Icon className='text-3xl' />
              </div>
            </Link>
          ))}
        </footer>
      </div>
    </header>
  );
}

export default Sidebar;
