export interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: "full" | "half" | "third" | "quarter" | "auto";
  fontSizeVariant?: "small" | "medium" | "large";
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  width = "full",
  fontSizeVariant,
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className={`
        border border-lightGray py-3.5 px-5 rounded
          ${
            width === "full"
              ? "w-full"
              : width === "half"
              ? "w-1/2"
              : width === "third"
              ? "w-1/3"
              : width === "quarter"
              ? "w-1/4"
              : width === "auto"
              ? "w-auto"
              : ""
          }
        focus:outline-none
        `}
      />
    </div>
  );
};
