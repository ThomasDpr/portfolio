import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';

type TextareaProps = {
    register: any;
    required?: boolean;
    errors?: any;
    placeholder?: string;
    label?: string;
    className?: string;
    maxLength?: number;
    name: string;
};

export const Textarea = ({
    register,
    required,
    errors,
    placeholder,
    label,
    className,
    maxLength = 900,
    name,
}: TextareaProps) => {
    return (
        <div className={clsx(className, "input-box")}>
            <textarea
                {...register(name, { required })}
                name={name}
                placeholder={placeholder}
                className={clsx({
                    'field-error': errors[name],
                })}
                maxLength={maxLength}
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
