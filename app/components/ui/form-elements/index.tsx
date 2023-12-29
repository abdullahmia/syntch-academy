import { Checkbox, CheckboxProps } from "./checkbox";
import { FormError, FromErrorProps } from "./error";
import { Input, InputProps } from "./input";
import { Label, LabelProps } from "./label";
import { Select, SelectProps } from "./select";

export const FormElements = {
  Input: (props: InputProps) => <Input {...props} />,
  Checkbox: (props: CheckboxProps) => <Checkbox {...props} />,
  Label: (props: LabelProps) => <Label {...props} />,
  Error: (props: FromErrorProps) => <FormError {...props} />,
  Select: (props: SelectProps) => <Select {...props} />,
};

export default FormElements;
