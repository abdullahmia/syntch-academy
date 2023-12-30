interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: () => void;
  width?: string;
  placeholder?: string;
}

export const Select = ({
  value,
  onChange,
  width = "full",
  options,
  placeholder,
}: SelectProps) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
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
      >
        <option disabled value="">
          {placeholder || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
