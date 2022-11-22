import { useState } from "react";
import FormInput from "./FormInput";

function Forms() {
  /* interface velues keys as string value as string */
  interface Values {
    [key: string]: string;
  }

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  /* useState for focus management */

  interface InputProps {
    id: number;
    name: string;
    label: string;
    placeholder: string;
    type: string;
    errorMessage: string;
    pattern?: string;
    required: boolean;
  }
  const inputs: InputProps[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Debe de ser entre 6 y 30 caracteres y no incluir caracteres especiales o numeros",
      /* regex only letter min 6 and max 30 chars  */
      pattern: "^[a-zA-Z\\s]{6,30}$",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Tu email debe de ser valido",
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
      errorMessage: "no debe de ser mayor a 20 caracteres",
      /* regex max 20 char, letter and number special characters  */
      pattern: "^[\\w\\W]{1,20}$",
      label: "Subject",
      required: true,
    },
    {
      id: 4,
      name: "message",
      type: "text",
      placeholder: "Message",
      errorMessage: "Debe de ser mayor a 20 caracteres",
      /* word and non word chars min 20 max 150 */
      pattern: "^[\\w\\W]{20,150}$",
      label: "Message",
      required: true,
    },
  ];
  const resetForm = (): void => {
    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  /* send data to contactgateway to send email */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setValues({
      name: data.get("name") as string,
      email: data.get("email") as string,
      subject: data.get("subject") as string,
      message: data.get("message") as string,
    });
    console.log(values);

    fetch("/api/contactgateway", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === "success") {
          console.log(data);
          alert("se envio el mensage.");
        } else if (data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <form action='POST' onSubmit={handleSubmit} className='text-black flex flex-col group'>
      {inputs.map((input) => (
        /* update the value prop from state values */
        <FormInput key={input.id} value={values[input.name]} {...input} onChange={onChange} />
      ))}
      <div className='pt-4'>
        <button className='text-white bg-brand-pink-600 py-2 px-6 rounded-lg w-full transition-all duration-100 hover:bg-brand-pink-800 will-change-transform'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Forms;
