import { Checkbox, CheckboxProps } from "./checkbox";
import { Input, InputProps } from "./input";

export const FormElements = {
  Input: (props: InputProps) => <Input {...props} />,
  Checkbox: (props: CheckboxProps) => <Checkbox {...props} />,
};

export default FormElements;
