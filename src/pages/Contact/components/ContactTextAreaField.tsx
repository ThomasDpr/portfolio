import { FieldError } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

type ContactTextAreaFieldProps = {
  register: any;
  errors: FieldError | undefined;
  label: string;
  name: string;
  placeholder: string;
  maxLength?: number;
  validation: any;
  watch?: any;
};

export const ContactTextAreaField = ({
  register,
  errors,
  label,
  name,
  placeholder,
  maxLength,
  validation,
  watch
}: ContactTextAreaFieldProps) => (
  <div className="input-box textarea">
    <textarea
      className={errors ? "input-error" : ""}
      placeholder={placeholder}
      {...register(name, validation)}
      maxLength={maxLength}
    />
    <div className="message__info">
      <label htmlFor={name}>{label}</label>
      {errors && (
        <div className="error__message">
          <span className="error__message__icon">
            <FontAwesomeIcon icon={faCircleExclamation} />
          </span>
          <span className="error__message__text">{errors.message}</span>
        </div>
      )}
      {watch && <div className="messagelength">{watch.length}/{maxLength}</div>}
    </div>
  </div>
);
