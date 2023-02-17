import { useState } from 'react'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'

import Sidebar from './Sidebar'

/* pass to typescript  */
interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  const [showMenu, setShowMenu] = useState(false)

  const toogleMenu = (): void => {
    setShowMenu(!showMenu)
  }

  return (
    <div className=" w-screen min-h-screen flex overflow-x-hidden">
      <Sidebar setShowMenu={setShowMenu} showMenu={showMenu} />

      <div className="fixed bottom-2 right-6 lg:hidden z-20">
        <button name="menu" title="menu" onClick={toogleMenu}>
          <span className="sr-only">Menu</span>
          {showMenu ? (
            <RiCloseFill className="text-2xl p-3 rounded-full bg-brand-pink-50 text-brand-pink-800 box-content" />
          ) : (
            <RiMenuFill className="text-2xl p-3 rounded-full bg-brand-pink-50 text-brand-pink-800  box-content" />
          )}
        </button>
      </div>
      <main className="w-full lg:w-[calc(100vw-96px)] lg:absolute top-0 left-[96px] bg-brand-black-900 min-h-screen">
        {children}
      </main>
    </div>
  )
}

export default Layout
