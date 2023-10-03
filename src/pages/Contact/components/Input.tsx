import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';


import "./Input.scss";

// Je créer les différents types de mes props qui seront utilisées pour le composant -> INPUT
type InputProps = {
    name: string;                             // L'id est une string qui sera : "to_name", "from_name", "from_email", "message"
    register: any;                          // Le register permet de lier le composant à la librairie react-hook-form
    type?: "text" | "email";                // Le type est une string qui sera : "text", "email",
    required?: boolean;                     // Le required permet de savoir si le champs est obligatoire ou non
    errors?: any;                           // Le errors permet de dire si il y a une erreur ou non
    placeholder?: string;                   // Le placeholder est une string qui sera : " ", " ", " ", " "
    label?: string;                         // Le label est une string qui sera : "Nom", "Email", "Message"
    className?: string;                     // Le className permettra de donner une classe au composant si besoin
    isSubmitting?: boolean;                 // Le isSubmitting permet de savoir si le formulaire est en cours d'envoi ou non
    isAutoCompleted?: boolean;              // Le isAutoCompleted permet de savoir si le champs est auto-complété ou non
};

// Je créer le composant Input qui prendra en paramètre les props définies ci-dessus
export const Input = ({
    name,
    register,
    type,
    required,
    errors,
    placeholder = " ",
    label,
    className,
    isSubmitting,
    isAutoCompleted = false,
}: InputProps) => {


    // Sinon je retourne un input avec toutes les props définies ci-dessus
    return (
        <div className={clsx(className, "input-box")}>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={clsx({
                    'field-error': errors[name],
                })}
                disabled={isSubmitting}
                autoComplete={isAutoCompleted ? "on" : "off"}
                {...register(name, { required })}
            />
            <label htmlFor={name}>{label}</label>

            {errors[name] && (
                <span className="error__message">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    {errors[name].message}
                </span>
            )}

        </div>
    );
};
