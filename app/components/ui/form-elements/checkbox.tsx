export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-3">
      <input
        id={"checkbox"}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 border border-lightGray"
      />
      {label && (
        <label
          htmlFor={"checkbox"}
          className="text-secondary text-sm font-normal"
        >
          {label}
        </label>
      )}
    </div>
  );
};
