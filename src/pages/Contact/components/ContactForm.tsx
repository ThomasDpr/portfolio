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
      <div className="input-box">
        <input
          type="text"
          required
          name="from_name"
          value={from_name}
          onChange={handleChange}
          placeholder=" "

        />
        <label htmlFor="from_name">Nom</label>
      </div>
      <div className="input-box">
        <input
          type="email"
          required
          name="from_email"
          value={from_email}
          onChange={handleChange}
          placeholder=" "
        />
        <label htmlFor="from_email">Email</label>
      </div>
      <div className="input-box">
        <textarea
          name="message"
          required
          value={message}
          onChange={handleChange}
          maxLength={500}
          placeholder=" "

        />
        <label htmlFor="message">Message</label>
      </div>

      <div>{message.length}/500</div>
      <button type="submit">Envoyer</button>
    </form>
  );
};
