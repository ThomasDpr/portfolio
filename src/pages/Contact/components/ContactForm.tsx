import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    to_name: "Thomas",
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        formData,
        process.env.REACT_APP_PUBLIC_ID as string
      )

      .then((result) => {
        console.log(result.text);
        alert("Votre message a bien été envoyé");
        setFormData({
          to_name: "Thomas",
          from_name: "",
          from_email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
        alert("Une erreur s'est produite, veuillez réessayer");
      });
  };

  const { from_name, from_email, message } = formData;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="to_name" value="Thomas" />
    <input
      type="text"
      name="from_name"
      placeholder="Entrez votre nom"
      value={from_name}
      onChange={handleChange}
    />
      <input
        type="email"
        name="from_email"
        placeholder="Entrez votre email"
        value={from_email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Saisissez votre message"
        value={message}
        onChange={handleChange}
        maxLength={500}
      />
      <div>
        {message.length}/500
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};
