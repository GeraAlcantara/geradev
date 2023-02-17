import { useState } from 'react'

interface InputProps {
  placeholder: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  id: number
  value: string
  type: string
  errorMessage: string
  required?: boolean
  pattern?: string
  focused?: string
  errors?: string
}

function FormInput(props: InputProps): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false)
  const { label, onChange, errorMessage, id, errors, ...inputProps } = props

  const HandleFocus = (_e: React.FocusEvent<HTMLInputElement>): void => {
    setFocus(true)
  }

  return (
    <div
      className="p-2 text-white flex flex-col justify-start group-input contactInput "
      id={id.toString()}
    >
      <label className="text-[#fed583] font-Raleway font-extrabold group" htmlFor={inputProps.name}>
        {label}
      </label>
      <input
        className="p-4 my-2 mx-0 text-gray-900 rounded-lg  group group-invalid:outline-red-500"
        focused={focus.toString()}
        onBlur={HandleFocus}
        onChange={onChange}
        {...inputProps}
      />
      <p className={' text-red-500'}>{errorMessage} </p>
      {errors !== null ? <span className={' text-red-500'}>{errors} </span> : null}
    </div>
  )
}

export default FormInput
