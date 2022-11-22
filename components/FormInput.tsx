import { useState } from "react";
interface InputProps {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: number;
  value: string;
  type: string;
  errorMessage: string;
  required?: boolean;
  pattern?: string;
  focused?: string;
}

function FormInput(props: InputProps) {
  const [focus, setFocus] = useState<Boolean>(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const HandleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    setFocus(true);
  };
  return (
    <div className='p-2 text-white flex flex-col justify-start group-input contactInput'>
      <label htmlFor={inputProps.name} className='text-gray-400 group'>
        {label}
      </label>
      <input
        className='p-4 my-2 mx-0 text-gray-900  group group-invalid:outline-red-500'
        onChange={onChange}
        onBlur={HandleFocus}
        focused={focus.toString()}
        {...inputProps}
      />
      {/* on focused true show span other wise not */}
      <span className={` text-red-600`}>{errorMessage} </span>
    </div>
  );
}

export default FormInput;
