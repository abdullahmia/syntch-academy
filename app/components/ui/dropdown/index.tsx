import { Dropdown, DropdownProps } from "./dropdown";
import { DropdownItem, DropdownItemProps } from "./dropdown-item";

export const DropdownElement = {
  DropdownWrapper: (props: DropdownProps) => <Dropdown {...props} />,
  DropdownItem: (props: DropdownItemProps) => <DropdownItem {...props} />,
};
