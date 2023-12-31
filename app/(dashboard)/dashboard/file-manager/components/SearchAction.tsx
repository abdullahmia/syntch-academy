import { Button } from "@/app/components/ui/button";
import { DropdownElement } from "@/app/components/ui/dropdown";
import FormElements from "@/app/components/ui/form-elements";
import { CiFileOn } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa";

export const SearchAction = () => {
  return (
    <div className="p-6 border-b border-lightGray">
      <div className="flex items-center justify-between gap-4">
        <div className="w-2/3">
          <FormElements.Input placeholder="Start typing to search for file" />
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <DropdownElement.DropdownWrapper
            actionElement={<Button variant="outline">Upload file</Button>}
          >
            <DropdownElement.DropdownItem>
              <FaRegFolder size={16} /> New folder
            </DropdownElement.DropdownItem>
            <DropdownElement.DropdownItem>
              <CiFileOn size={20} />
              Upload file
            </DropdownElement.DropdownItem>
          </DropdownElement.DropdownWrapper>
        </div>
      </div>
    </div>
  );
};
