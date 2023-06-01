import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiCheckSquare } from "react-icons/fi";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type: string;
  className: string;
  classNameContainer: string;
  inputMode?: string;
  endIcon?: JSX.Element;
  inputProps?: {
    className?: string;
  };
}

export function InputField({
  name,
  placeholder,
  type,
  classNameContainer,
  className,
  endIcon,
  inputMode,
  inputProps,
}: InputFieldProps) {
  const [_type, setType] = useState(type);
  const showPasswordHandler = () => {
    if (type === "password") {
      setType("text");
    }
  };
  return (
    <Field as="label" className={classNameContainer}>
      <span className="block">{placeholder}</span>
      <Field as="div" className={`text-black relative ${className}`}>
        <Field
          name={name}
          type={_type}
          inputMode={inputMode}
          aria-label={placeholder}
          {...inputProps}
        />
        {endIcon && type !== "password" && (
          <span className="absolute block -translate-y-1/2 top-1/2 right-[1.33rem]">
            {endIcon}
          </span>
        )}
        {type === "password" && _type === "text" ? (
          <span
            className="absolute block -translate-y-1/2 top-1/2 right-[1.33rem]"
            onClick={() => setType("password")}
          >
            <AiOutlineEyeInvisible className="w-5 h-5 cursor-pointer text-medium_purple" />
          </span>
        ) : (
          endIcon && (
            <span
              className="absolute block -translate-y-1/2 top-1/2 right-[1.33rem]"
              onClick={showPasswordHandler}
            >
              {endIcon}
            </span>
          )
        )}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <p className="mt-1 text-xs text-red-500">{msg}</p>}
      </ErrorMessage>
    </Field>
  );
}

interface CheckBoxProps {
  name: string;
  label: string;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export function CheckBox({ name, label, handleCheck, checked }: CheckBoxProps) {
  return (
    <Field
      as="label"
      className="flex items-center cursor-pointer space-x-[0.50rem]"
    >
      <span className="relative inline-block w-4 h-4">
        <Field
          name={name}
          type="checkbox"
          onChange={handleCheck}
          className="absolute top-0 left-0 z-10 w-full h-full opacity-0 cursor-pointer"
          role="checkbox"
          aria-checked="false"
          aria-labelledby="Remember me"
        ></Field>
        <FiCheckSquare
          className={`w-full h-full cursor-pointer ${
            checked ? "text-[#16A34A]" : ""
          }`}
        />
      </span>
      <span>{label}</span>
    </Field>
  );
}
