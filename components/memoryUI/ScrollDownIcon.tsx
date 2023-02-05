import styles from "../../styles/mouse.module.scss";
function ScrollDownIcon() {
  return (
    <div className='h-screen w-full flex justify-start pl-5 items-end pb-10 z-20 fixed pointer-events-none 2xl:hidden'>
      <div className={styles.mouse}></div>
    </div>
  );
}

export default ScrollDownIcon;
