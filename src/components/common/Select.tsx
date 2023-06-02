import { ErrorMessage, Field } from "formik";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { InputFieldProps } from "types/inputField";

interface SelectProps extends InputFieldProps {
  option: string[];
}

function Select({ name, label, classNameContainer, inputProps }: SelectProps) {
  return (
    <Field as="label" className={classNameContainer}>
      <span className="block">{label}</span>
      <Field as="div" className="relative">
        <Field
          name={name}
          style={{
            cursor: "pointer",
          }}
          aria-label={label}
          {...inputProps}
          disabled
        />
        <IoIosArrowDown className="absolute right-[1.89rem] top-1/2 -translate-y-1/2" />
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <p className="mt-1 text-xs text-red-500">{msg}</p>}
      </ErrorMessage>
    </Field>
  );
}

export default Select;
