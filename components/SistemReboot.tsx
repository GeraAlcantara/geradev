import axios from "axios";
import { useState } from "react";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  defaultCaptchaKey: React.Dispatch<React.SetStateAction<string>>;
}
function SistemReboot({ onChange, defaultCaptchaKey }: Props) {
  const [reboot, setReboot] = useState(false);
  const handleClick = async (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setReboot(true);
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/sistemreboot`, //TODO: make api url
      headers: {
        "Content-Type": "application/json",
      },
      data: { reboot: reboot },
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log(response.data);
        const { reboot } = response.data;
        if (reboot) {
          console.log("respuesta del server = Sistem Reboot", reboot);
          onChange(true);
          defaultCaptchaKey(new Date().getTime().toString());
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='select-none absolute'>
      <div className='grid grid-cols-1 grid-rows-1 relative top-1/2 translate-y-3/4'>
        <div className='col-start-1 row-start-1  rounded-xl bg-[#fee300] border-2 border-gray-800 p-6 h-full z-10'>
          <div>
            <p>X-</p>
            <hr className=' border-gray-700 ' />
          </div>
          <div className='flex flex-col gap-4 items-center  pt-6 pb-10 min-h-[140px]'>
            <h1 className='text-gray-900 text-5xl font-Raleway font-extrabold text-center  uppercase'>Sistem Error!</h1>
            <div>
              <button className='font-Raleway font-extrabold uppercase bg-[#eb008b] button-54Error' onClick={(e) => handleClick(e)}>
                Sistem Reboot
              </button>
            </div>
          </div>
        </div>
        <div className='col-start-1 row-start-1 relative translate-y-2 translate-x-2  rounded-xl bg-[#987601] border-2 border-gray-800 '></div>
      </div>
    </div>
  );
}

export default SistemReboot;
