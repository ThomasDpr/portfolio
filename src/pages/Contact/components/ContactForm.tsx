import emailjs from "@emailjs/browser";
// import emailjs from "./mockEmailJs";

import { useForm , SubmitHandler} from "react-hook-form";

import { FormValues } from "../types/formTypes";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Button } from "./Button";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation";

import "./ContactForm.scss";
import { useEffect } from "react";

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful},
    } = useForm<FormValues>({

        defaultValues: { to_name: "Thomas" },
        resolver: yupResolver(schema),
        mode: 'onTouched',
        reValidateMode: 'onBlur',
    });

    const onSubmit: SubmitHandler<FormValues> = async (values) => {

        try {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID as string,
                process.env.REACT_APP_TEMPLATE_ID as string,
                values,
                process.env.REACT_APP_PUBLIC_ID as string
            );
            reset();

        } catch (error) {
            alert("Une erreur s'est produite, veuillez réessayer.")
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            const timer = setTimeout(() => {
                reset();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }
    , [isSubmitSuccessful, reset]);

    return (
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__form__wrapper">
                <Input
                    register={register}
                    errors={errors}
                    name="first_name"
                    label="Prénom"
                    type="text"
                    placeholder=" "
                    required={true}
                    isSubmitting={isSubmitting}
                    isAutoCompleted={false}
                />

                <Input
                    register={register}
                    errors={errors}
                    name="last_name"
                    label="Nom"
                    type="text"
                    placeholder=" "
                    required={true}
                    isSubmitting={isSubmitting}
                    isAutoCompleted={false}
                />
            </div>

            <Input
                register={register}
                errors={errors}
                name="email"
                label="Email"
                type="email"
                placeholder=" "
                required={true}
                isSubmitting={isSubmitting}
                isAutoCompleted={false}
            />

            <Textarea
                register={register}
                errors={errors}
                name="message"
                label="Message"
                placeholder=" "
                required={true}
            />

            <Button
                type="submit"
                isSubmitting={isSubmitting}
                isSubmitSuccessful={isSubmitSuccessful}>
                Envoyer
            </Button>
        </form>
    );
};
