import { ErrorMessage, Field } from "formik";
import React from "react";
import { InputFieldProps } from "types/inputField";

function TextField({
  name,
  label,
  classNameContainer,
  inputProps,
}: InputFieldProps) {
  return (
    <Field as="label" className={classNameContainer}>
      <span className="block">{label}</span>
      <Field as="textarea" name={name} aria-label={label} {...inputProps} />
      <ErrorMessage name={name}>
        {(msg) => <p className="mt-1 text-xs text-red-500">{msg}</p>}
      </ErrorMessage>
    </Field>
  );
}

export default TextField;
