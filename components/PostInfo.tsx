import { RiNewspaperLine } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";

export default function PostInfo() {
  return (
    <div className='text-brandWhite flex gap-2 md:gap-8'>
      <div className='flex gap-1'>
        <RiNewspaperLine className='text-xl text-white ' /> <span className='text-sm group-hover:text-brand-pink-accent capitalize'>Article</span>
      </div>
      <div className='flex gap-1'>
        <HiOutlineEye className='text-xl' /> <span className='text-sm group-hover:text-brand-pink-accent'>5min. </span>
      </div>
    </div>
  );
}
