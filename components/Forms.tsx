import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import FormInput from './FormInput'
import Captcha from './Captcha'
import SistemReboot from './SistemReboot'

function Forms({ defaultCaptchaKey }: { defaultCaptchaKey: string }) {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])
  const [captchaKey, setCaptchaKey] = useState<string>(defaultCaptchaKey)
  const [captchaSolved, setCaptchaSolved] = useState<boolean>(false)
  const [captchaError, setCaptchaError] = useState(false)
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Values>({})

  useEffect(() => {}, [selectedIndexes, captchaError])

  /* interface velues keys as string value as string */
  const router = useRouter()

  interface Values {
    [key: string]: string
  }

  interface InputProps {
    id: number
    name: string
    label: string
    placeholder: string
    type: string
    errorMessage: string
    pattern?: string
    required: boolean
    errors?: string
  }
  const inputs: InputProps[] = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Nombre y Apellido',
      errorMessage: 'Por favor agregue su nombre completo',
      /* regex all chars of words accents between 6 and 50 */
      pattern: '^[a-zA-ZÀ-ÿ\\s]{3,50}$',
      label: 'Nombre',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Debes ingresar un correo electrónico válido',
      /* regex email */
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
      label: 'Email',
      required: true
    },
    {
      id: 3,
      name: 'subject',
      type: 'text',
      placeholder: 'Asunto del email',
      errorMessage: 'Que sea corto, 60 caracteres o menos.',
      /* regex max 60 char, letter and number special characters  */
      pattern: '^[\\w\\W]{1,60}$',
      label: 'Asunto',
      required: true
    },
    {
      id: 4,
      name: 'message',
      type: 'text',
      placeholder: 'Message',
      errorMessage: 'Mínimo 20 caracteres y máximo 150',
      /* word and non word chars min 20 max 150 */
      pattern: '^[\\w\\W]{20,150}$',
      label: 'Mensaje',
      required: true
    }
  ]

  /* Handle the form submit */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    setValues({
      name: data.get('name') as string,
      email: data.get('email') as string,
      subject: data.get('subject') as string,
      message: data.get('message') as string
    })
    validate(values)
  }

  const sendEmail = async (values: Values) => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/contactgateway`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: { ...values, selectedIndexes }
    }

    try {
      const response = await axios(config)

      if (response.status === 200) {
        const { captchaIsOK, send } = response.data

        if (!captchaIsOK) {
          setCaptchaKey(new Date().getTime().toString())
          setCaptchaError(true)
        }
        if (send) {
          console.log('respuesta del server = message sent', send)
        }
        if (captchaIsOK) {
          setCaptchaError(false)
          setCaptchaSolved(true)
          router.push('/gracias')
          setCaptchaKey(new Date().getTime().toString())
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (captchaSolved) {
      setCaptchaKey(new Date().getTime().toString())
    }
  }, [captchaSolved])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value })
  }

  /* validation of data type Values */
  const validate = (values: Values) => {
    let errors: Values = {}

    if (!values.name) {
      errors.name = 'Se requiere el nombre'
    } else if (values.name.length < 6 || values.name.length > 150) {
      errors.name =
        'El nombre debe tener entre 6 y 50 caracteres y no incluir caracteres especiales ni números'
    }
    if (!values.email) {
      errors.email = 'Correo electronico es requerido'
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(values.email)) {
      errors.email = 'Su correo electrónico debe ser válido'
    }
    if (!values.subject) {
      errors.subject = 'El asunto es obligatorio'
    } else if (!/^[\w\W]{1,60}$/.test(values.subject)) {
      errors.subject = 'El asunto debe tener menos de 60 caracteres'
    }
    if (!values.message) {
      errors.message = 'El mensaje es obligatorio'
    } else if (values.message.length < 20 || values.message.length > 150) {
      errors.message = 'El mensaje debe tener entre 20 y 150 caracteres '
    }
    if (Object.keys(errors).length === 0) {
      sendEmail(values)
    }
    setErrors(errors)
  }

  return (
    <div className="flex-1 flex flex-col gap-4 px-4 lg:px-6 xl:px-10 justify-center ">
      <form
        action="POST"
        className="text-black flex justify-center items-center flex-col lg:flex-row group p-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full lg:w-1/2">
          <h1 className="text-[#fed583] text-3xl xl:text-6xl uppercase text-center font-Raleway font-extrabold">
            Contactame
          </h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              {...input}
              errors={errors[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="flex justify-center relative lg:flex-1 ">
          <div className="relative grid grid-cols-1 grid-rows-1 ">
            <div
              className={`col-start-1 row-start-1 translate-x-3 translate-y-3 rounded-2xl flex-1 px-4  ${
                captchaError ? 'bg-red-600' : 'bg-[#c2a467]'
              } `}
            />
            <div
              className={`col-start-1 row-start-1 z-10 border-gray-900 border-2 rounded-2xl flex-1 px-4 ${
                captchaError ? 'bg-red-500' : 'bg-[#fed583]'
              }`}
            >
              <Captcha captchaKey={captchaKey} onChange={setSelectedIndexes} />
              <div className="pt-4 flex justify-end mb-4 mr-3">
                <button
                  className={`text-gray-900 button-54 text-2xl font-extrabold font-Raleway hover:border-gray-900 py-2 px-6 duration-100  will-change-transform uppercase disabled:bg-gray-400 disabled:text-gray-800 ${
                    captchaError
                      ? 'bg-[#c2a467] hover:bg-[#a38c5e]'
                      : 'bg-[#eb008b] hover:bg-pink-400'
                  } `}
                  disabled={captchaError || selectedIndexes.length === 0}
                >
                  {captchaError ? <i>No soy un robot</i> : <i>Enviar</i>}
                </button>
              </div>
            </div>
          </div>
          {captchaError ? (
            <SistemReboot captchaKey={setCaptchaKey} onChange={setCaptchaError} />
          ) : null}
        </div>
      </form>
    </div>
  )
}

export default Forms
