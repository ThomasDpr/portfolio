import { FieldError } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

type ContactInputFieldProps = {
  register: any;
  errors: FieldError | undefined;
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  maxLength?: number;
  validation: any;
};

export const ContactInputField = ({
  register,
  errors,
  label,
  type,
  name,
  placeholder,
  validation,
}: ContactInputFieldProps) => {
  return (
    <div className="input-box">
      <input
        className={errors ? "input-error" : ""}
        type={type}
        placeholder={placeholder}
        {...register(name, { ...validation })}
      />
      {errors && (
        <div className="error__message">
          <span className="error__message__icon">
            <FontAwesomeIcon icon={faCircleExclamation} />
          </span>
          <span className="error__message__text">{errors.message}</span>
        </div>
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
