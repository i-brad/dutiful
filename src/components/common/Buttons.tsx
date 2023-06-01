interface PrimaryButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  [x: string]: any;
}

export function PrimaryButton({
  text,
  type,
  disabled = false,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      {...props}
      className="w-full font-medium text-white rounded-md bg-regalia text-t18 py-[1.44rem] shadow-3xl"
    >
      {text}
    </button>
  );
}
