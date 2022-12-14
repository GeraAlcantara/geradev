import Sidebar from "./Sidebar";
import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

/* pass to typescript  */
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=' w-screen min-h-screen flex overflow-x-hidden'>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

      <div className='fixed bottom-2 right-6 lg:hidden z-20'>
        <button className='' onClick={toogleMenu}>
          {showMenu ? (
            <RiCloseFill className='text-2xl p-3 rounded-full bg-brand-pink-50 text-brand-pink-800 box-content' />
          ) : (
            <RiMenuFill className='text-2xl p-3 rounded-full bg-brand-pink-50 text-brand-pink-800  box-content' />
          )}
        </button>
      </div>
      <main className='w-full lg:w-[calc(100vw-96px)] lg:absolute top-0 left-[96px] bg-brand-black-900 min-h-screen'>{children}</main>
    </div>
  );
}

export default Layout;
