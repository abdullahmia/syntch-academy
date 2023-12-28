import { Checkbox, CheckboxProps } from "./checkbox";
import { FormError, FromErrorProps } from "./error";
import { Input, InputProps } from "./input";
import { Label, LabelProps } from "./label";

export const FormElements = {
  Input: (props: InputProps) => <Input {...props} />,
  Checkbox: (props: CheckboxProps) => <Checkbox {...props} />,
  Label: (props: LabelProps) => <Label {...props} />,
  Error: (props: FromErrorProps) => <FormError {...props} />,
};

export default FormElements;
