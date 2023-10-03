import * as yup from "yup";

export const schema = yup.object().shape({
    first_name: yup.string().required("Veuillez entrer votre prénom"),
    last_name: yup.string().required("Veuillez entrer votre nom"),

    email: yup.string().email("Email invalide").required("Veuillez saisir votre email"),

    message: yup.string().required("Veuillez saisir un message").min(10, "Votre message doit contenir au moins 10 caractères").max(900, "La limite de 900 caractères est atteinte"),
});
