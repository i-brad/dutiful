import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { InputFieldProps } from "types/inputField";

interface SelectProps extends InputFieldProps {
  options: string[];
  onChange: (value: string) => void;
}

function Select({
  name,
  label,
  classNameContainer,
  className,
  inputProps,
  options,
  onChange,
}: SelectProps) {
  const [optionsShown, setOptionsShownState] = useState(false);

  return (
    <Field as="label" className={classNameContainer}>
      <span className="block">{label}</span>
      <Field as="div" className={`relative ${className}`}>
        <Field name={name} aria-label={label} {...inputProps} disabled />
        {optionsShown ? (
          <IoIosArrowUp
            onClick={() => setOptionsShownState(false)}
            className="absolute right-[1.89rem] top-1/2 w-5 h-5 -translate-y-1/2 cursor-pointer"
          />
        ) : (
          <IoIosArrowDown
            onClick={() => setOptionsShownState(true)}
            className="absolute right-[1.89rem] top-1/2 w-5 h-5 -translate-y-1/2 cursor-pointer"
          />
        )}
        <ul
          className={`absolute top-[3.2rem] shadow rounded-md left-0 w-full bg-white ${
            optionsShown ? "min-h-[7.28rem] h-auto" : "min-h-0 h-0"
          } overflow-hidden transition-all duration-150`}
        >
          {options.map((option) => (
            <li key={option} className="block">
              <button
                type="button"
                name={name}
                onClick={() => {
                  setOptionsShownState(false);
                  onChange(option);
                }}
                className="block w-full text-left px-[1.33rem] py-[0.5rem] transition-colors duration-75 hover:bg-accent/20"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <p className="mt-1 text-xs text-red-500">{msg}</p>}
      </ErrorMessage>
    </Field>
  );
}

export default Select;
