import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useRouter } from "next/router";

function Forms() {
  /* interface velues keys as string value as string */
  const router = useRouter();
  interface Values {
    [key: string]: string;
  }

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Values>({});

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
      errorMessage: "Please your full name",
      /* regex all chars of words accents between 6 and 50 */
      pattern: "^[a-zA-ZÀ-ÿ\\s]{6,50}$",
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
    console.log("handleSumit", values);
  };

  /* save old fetch version */
  // const sendFetch = async () => {
  //   fetch("/api/contactgateway", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.status);
  //       if (data.status === "success") {
  //         console.log(data);
  //         alert("se envio el mensage.");
  //       } else if (data.status === "fail") {
  //         console.log("fail");
  //       }
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // };

  const sendEmail = async (values: Values) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/contactgateway`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        alert("se envio el mensage.");
        router.replace("/thankyou");
      }
    } catch (error) {
      console.log(error);
      throw error;
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
      console.log(errors.length, "-- cantidad de errores", errors);

      sendEmail(values);
    }
    console.log(errors.length, "-- cantidad de errores", errors);
    setErrors(errors);
  };
  /* useEffect(() => {
    console.log("errors", errors);
    console.log(Object.keys(errors).length === 0);
  }, [errors]); */

  return (
    <form action='POST' onSubmit={handleSubmit} className='text-black flex flex-col group'>
      {inputs.map((input) => (
        <FormInput key={input.id} value={values[input.name]} {...input} onChange={onChange} errors={errors[input.name]} />
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
