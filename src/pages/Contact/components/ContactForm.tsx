import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ContactInputField } from "./ContactInputField";
import { ContactTextAreaField } from "./ContactTextAreaField";

import "./ContactForm.scss";

type FormData = {
  to_name: string;
  from_name: string;
  from_email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const messageValue = watch("message", "");

  const onSubmit = (data: FormData) => {
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMPLATE_ID as string,
      data,
      process.env.REACT_APP_PUBLIC_ID as string
    )
    .then(() => {
      alert("Votre message a bien été envoyé");
      reset();
    })
    .catch(() => {
      alert("Une erreur s’est produite, veuillez réessayer");
    });
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <ContactInputField
        register={register}
        errors={errors.from_name}
        label="Nom"
        name="from_name"
        placeholder=" "
        validation={{ required: 'Veuillez entrer votre nom' }}
      />
      <ContactInputField
        register={register}
        errors={errors.from_email}
        label="Email"
        name="from_email"
        type="email"
        placeholder=" "
        validation={{ required: 'Veuillez entrer votre email' }}
      />

      <ContactTextAreaField
        register={register}
        errors={errors.message}
        label="Message"
        name="message"
        placeholder=" "
        maxLength={500}
        validation={{
          required: 'Veuillez entrer un message',
          maxLength: 500,
        }}
        watch={messageValue}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
};
