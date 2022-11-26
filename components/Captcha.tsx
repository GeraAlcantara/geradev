import { useState, useEffect } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
interface CaptchaProps {
  defaultCaptchaKey: string;
  onChange: React.Dispatch<React.SetStateAction<number[]>>;
}
function Captcha({ onChange, defaultCaptchaKey }: CaptchaProps) {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const imageLocation = new Array(9).fill(null).map((value, index) => {
    return `/api/captcha-images?index=${index}&key=${defaultCaptchaKey}`;
  });
  useEffect(() => {
    onChange(selectedIndexes);
  }, [selectedIndexes, onChange]);

  useEffect(() => {
    setSelectedIndexes([]);
  }, [defaultCaptchaKey]);

  function toggleIndex(index: number) {
    /* setiar el nuevo estado tomando elñ estado anterior y lo filtramos para saber si el index que le pasamos ya esta en el array si es así lo vamos a excluir logrando que en cada click si no esta en la lista lo incluya y si estaba lo excluya */
    setSelectedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((value) => value !== index);
      } else {
        return [...prev, index];
      }
    });
  }
  return (
    <div className='p-2'>
      <h2 className='text-6xl text-gray-900 font-Raleway font-extrabold uppercase'>Captcha</h2>
      <p className='text-gray-900 text-2xl font-Raleway uppercase font-extrabold'>Select all the signs!!! 🤷‍♀️ </p>
      <div className='flex justify-center py-4'>
        <div className='bg-white grid grid-cols-3 gap-1 w-[515px] h-[475px]'>
          {imageLocation.map((imageUrl, index) => (
            <div key={index + imageUrl} className='relative' onClick={() => toggleIndex(index)}>
              <picture>
                <source srcSet={imageUrl} type='image/jpg' />
                <img src={imageUrl} draggable={false} alt='captcha' className='w-full h-full ' />
              </picture>
              {/* depende de si esta seleccionado cambiar opacidad y regresar el translate a 0 */}
              <RiCheckboxCircleFill
                className={`absolute text-4xl bottom-2 text-white right-2 transition-all  duration-150 ease-out ${
                  selectedIndexes.includes(index) ? "opacity-100 scale-100" : "scale-0 opacity-0"
                } `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Captcha;
