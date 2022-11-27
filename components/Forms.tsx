import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useRouter } from "next/router";
import Captcha from "./Captcha";
import SistemReboot from "./SistemReboot";

function Forms({ defaultCaptchaKey }: { defaultCaptchaKey: string }) {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [captchaKey, setCaptchaKey] = useState<string>(defaultCaptchaKey);
  const [captchaSolved, setCaptchaSolved] = useState<boolean>(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Values>({});

  useEffect(() => {
    console.log("iniciando el estado del error de captcha", captchaError);
  }, [selectedIndexes, captchaError]);

  /* interface velues keys as string value as string */
  const router = useRouter();
  interface Values {
    [key: string]: string;
  }

  interface InputProps {
    id: number;
    name: string;
    label: string;
    placeholder: string;
    type: string;
    errorMessage: string;
    pattern?: string;
    required: boolean;
    errors?: string;
  }
  const inputs: InputProps[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name LastName",
      errorMessage: "Please add your full name",
      /* regex all chars of words accents between 6 and 50 */
      pattern: "^[a-zA-ZÀ-ÿ\\s]{3,50}$",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "You must enter a valid email",
      /* regex email */
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "subject",
      type: "text",
      placeholder: "Subject",
      errorMessage: "Keep it short, 60 characters or less",
      /* regex max 60 char, letter and number special characters  */
      pattern: "^[\\w\\W]{1,60}$",
      label: "Subject",
      required: true,
    },
    {
      id: 4,
      name: "message",
      type: "text",
      placeholder: "Message",
      errorMessage: "Minimum 20 characters and maximum 150",
      /* word and non word chars min 20 max 150 */
      pattern: "^[\\w\\W]{20,150}$",
      label: "Message",
      required: true,
    },
  ];

  /* Handle the form submit */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setValues({
      name: data.get("name") as string,
      email: data.get("email") as string,
      subject: data.get("subject") as string,
      message: data.get("message") as string,
    });
    validate(values);
  };

  const sendEmail = async (values: Values) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/contactgateway`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...values, selectedIndexes },
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        const { captchaIsOK, send } = response.data;
        if (!captchaIsOK) {
          setCaptchaKey(new Date().getTime().toString());
          setCaptchaError(true);
          console.log("The captcha is not solved");
        }
        if (send) {
          console.log("respuesta del server = message sent", send);
          setValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
        }
        if (captchaIsOK) {
          setCaptchaError(false);
          setCaptchaSolved(true);
          router.push("/thankyou");
          setCaptchaKey(new Date().getTime().toString());
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  /* validation of data type Values */
  const validate = (values: Values) => {
    let errors: Values = {};
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 6 || values.name.length > 150) {
      errors.name = "Name must be between 6 and 50 characters and not include special characters or numbers";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(values.email)) {
      errors.email = "Your email must be valid";
    }
    if (!values.subject) {
      errors.subject = "Subject is required";
    } else if (!/^[\w\W]{1,60}$/.test(values.subject)) {
      errors.subject = "Subject must be less than 60 characters";
    }
    if (!values.message) {
      errors.message = "Message is required";
    } else if (values.message.length < 20 || values.message.length > 150) {
      errors.message = "Message must be between 20 and 150 characters ";
    }
    if (Object.keys(errors).length === 0) {
      sendEmail(values);
    }
    setErrors(errors);
  };

  return (
    <div className='flex-1 flex flex-col gap-4 px-10 justify-center '>
      <form action='POST' onSubmit={handleSubmit} className='text-black flex  group'>
        <div className='w-1/2'>
          <h1 className='text-[#fed583] text-6xl uppercase text-center font-Raleway font-extrabold'>Contactame</h1>
          {inputs.map((input) => (
            <FormInput key={input.id} value={values[input.name]} {...input} onChange={onChange} errors={errors[input.name]} />
          ))}
        </div>
        <div className='flex justify-center flex-1 relative'>
          <div className='relative w-[555px] h-[705px]'>
            <div
              className={` absolute translate-x-3 translate-y-3 rounded-2xl flex-1 px-4 min-w-[555px] min-h-[705px] ${
                captchaError ? "bg-red-600" : "bg-[#c2a467]"
              } `}
            ></div>
            <div
              className={` absolute inset-0 border-gray-900 border-2 rounded-2xl flex-1 px-4 min-w-[555px] min-h-[705px] ${
                captchaError ? "bg-red-500" : "bg-[#fed583]"
              }`}
            >
              <Captcha onChange={setSelectedIndexes} captchaKey={captchaKey} />
              <div className='pt-4 flex justify-end mb-4 mr-3'>
                <button
                  className={`text-gray-900 button-54 text-2xl font-extrabold font-Raleway hover:border-gray-900 py-2 px-6 duration-100  will-change-transform uppercase disabled:bg-gray-400 disabled:text-gray-800 ${
                    captchaError ? "bg-[#c2a467] hover:bg-[#a38c5e]" : "bg-[#eb008b] hover:bg-pink-400"
                  } `}
                  disabled={captchaError || selectedIndexes.length === 0}
                >
                  <i>I AM NOT A ROBOT</i>
                </button>
              </div>
            </div>
          </div>
          {captchaError ? <SistemReboot onChange={setCaptchaError} captchaKey={setCaptchaKey} /> : null}
        </div>
      </form>
    </div>
  );
}

export default Forms;
