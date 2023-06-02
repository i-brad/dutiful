export interface InputFieldProps {
    name: string;
    placeholder?: string;
    label?: string;
    type?: string;
    className?: string;
    classNameContainer: string;
    inputMode?: string;
    endIcon?: JSX.Element;
    inputProps?: {
        className?: string;
    };
}