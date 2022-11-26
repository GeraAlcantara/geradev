import React from "react";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  defaultCaptchaKey: React.Dispatch<React.SetStateAction<string>>;
}
function SistemReboot({ onChange, defaultCaptchaKey }: Props) {
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className='absolute inset-0 select-none h-1/4 translate-y-full w-8/12 mx-auto'>
      <div className='flex justify-center items-center '>
        <div className=' w-4/5   rounded-xl bg-yellow-300 border-2 border-gray-800 p-2'>
          <div>
            <p>X-</p>
            <hr className=' border-gray-700 ' />
          </div>
          <div className='flex flex-col gap-4 items-center min-h-[140px] pt-6 pb-10 '>
            <h1 className='text-gray-900 text-5xl font-Raleway font-extrabold text-center  uppercase'>Sistem Error!</h1>
            <div>
              <button className='font-Raleway font-extrabold uppercase bg-[#eb008b] button-54Error' onClick={(e) => handleClick(e)}>
                Sistem Reboot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SistemReboot;
