import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { NavLinks, SocialLinks } from '../data/Data'
import { uuidv4 } from '../lib/utils/uuidv4'

import Logo from './Logo'
interface SidebarProps {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

// TODO: hide sidebar on links click and show on burger click

export default function Sidebar({ showMenu, setShowMenu }: SidebarProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (_url: string): void => {
      setShowMenu(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events, setShowMenu])

  return (
    <header
      className={`w-24 bg-brand-black-300 fixed lg:fixed lg:top-0 lg:left-0 lg:bottom-0 flex flex-col transition-all ease-in-out duration-500 justify-between z-50 top-0 h-screen items-center px-2 py-4  ${
        showMenu ? 'left-0' : '-left-full'
      } `}
    >
      <Logo />

      <nav className="flex flex-col justify-between items-center w-full uppercase gap-6">
        <ul className="flex flex-col items-center gap-8 justify-center">
          {NavLinks.map(({ title, Icon, slug }, _idx) => (
            <li key={uuidv4()} title={title === 'R&D' ? 'Research and Develop' : ''}>
              <Link href={slug}>
                <div
                  className={`cursor-pointer flex flex-col items-center hover:text-brand-pink-500 text-2xl ${
                    router.pathname === '/' + slug || router.pathname === slug
                      ? 'text-brand-pink-500'
                      : 'text-brand-pink-100'
                  }`}
                >
                  <Icon />
                  <span className="text-sm font-Urbanist sm:landscape:hidden lg:landscape:inline-block mt-2">
                    {title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="w-full self-end flex flex-col gap-4 ">
        {SocialLinks.map(({ title, link, Icon }, _idx) => (
          <Link key={uuidv4()} href={link}>
            <a
              className="flex items-center justify-center gap-2 hover:text-brand-pink-500"
              target="_blank"
            >
              <span className="sr-only">{title}</span>
              <Icon className="text-3xl" />
            </a>
          </Link>
        ))}
      </footer>
    </header>
  )
}
