import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPaperPlane,
    faSpinner,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./Button.scss";

type ButtonProps = {
    variant?: "default" | "loading" | "success" ;
    children: React.ReactNode;
    isSubmitting?: boolean;
    isSubmitSuccessful?: boolean;
    type?: "submit" | "button" | "reset" ;
};

export const Button = ({
    variant = "default",
    children,
    isSubmitting,
    isSubmitSuccessful,
    type,
}: ButtonProps) => {
    let buttonVariant = variant;
    let buttonContent = children;

    switch (true) {

        case isSubmitting:
            buttonVariant = "loading";
            buttonContent = (
                <>
                    <FontAwesomeIcon icon={faSpinner} spin />
                    <span>Envoi en cours...</span>
                </>
            );
            break;

        case isSubmitSuccessful:
            buttonVariant = "success";
            buttonContent = (
                <>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Envoyé</span>
                </>
            );
            break;

        default:
            buttonVariant = "default";
            buttonContent = (
                <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Envoyer</span>
                </>
            )
    }

    return (
        <button
            type={type}
            className={`button ${buttonVariant}`}
            disabled={isSubmitting || isSubmitSuccessful}>
            {buttonContent}
        </button>
    );
};
