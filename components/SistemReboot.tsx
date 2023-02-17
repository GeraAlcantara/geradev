import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  captchaKey: React.Dispatch<React.SetStateAction<string>>
}
function SistemReboot({ onChange, captchaKey }: Props) {
  const [reboot, setReboot] = useState(false)
  const [captchaError, setCaptchaError] = useState(true)
  // handle click will set state of reboot to true and ask for a new captcha key and new images for captcha from api captcha-images in post pasing if reboot and set the state of captchaError to false
  const sendReboot = async () => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/sistemreboot`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: { reboot: true }
    }

    try {
      const response = await axios(config)

      if (response.status === 200) {
        const { reboot } = response.data

        captchaKey(new Date().getTime().toString())
        if (reboot) {
          console.log('respuesta del server = reboot', reboot)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setReboot(true)
    setCaptchaError(false)
  }

  if (reboot) {
    sendReboot()
  }
  useEffect(() => {
    onChange(captchaError)
  }, [reboot, onChange, captchaError])

  return (
    <div className="select-none absolute animate-scaleInCenter z-10">
      <div className="grid grid-cols-1 grid-rows-1 relative top-1/2 translate-y-3/4">
        <div className="col-start-1 row-start-1  rounded-xl bg-[#fee300] border-2 border-gray-800 p-6 h-full z-10">
          <div>
            <hr className=" border-gray-700 " />
          </div>
          <div className="flex flex-col gap-4 items-center  pt-6 pb-10 min-h-[140px]">
            <h1 className="text-gray-900 text-5xl font-Raleway font-extrabold text-center  uppercase">
              ¡Error del sistema!
            </h1>
            <div>
              <button
                className="font-Raleway font-extrabold uppercase bg-[#eb008b] button-54Error hover:bg-[#f71b90] transition-all duration-200 ease-out hover:scale-[1.05]"
                onClick={(e) => handleClick(e)}
              >
                Reinicio del sistema
              </button>
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-1 relative translate-y-3 translate-x-5  rounded-xl bg-[#987601] border-2 border-[#453602] " />
      </div>
    </div>
  )
}

export default SistemReboot
