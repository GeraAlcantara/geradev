import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className=' w-screen h-screen flex'>
      <Sidebar />
      <main className='w-[calc(100vw-96px)] bg-bg_primary h-screen'> {children}</main>
    </div>
  );
}

export default Layout;
