import Link from "next/link";

export interface DropdownItemProps {
  type?: "button" | "link";
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const DropdownItem = ({
  type,
  to,
  onClick,
  children,
}: DropdownItemProps) => {
  switch (type) {
    case "button":
      return (
        <button
          onClick={onClick}
          className="w-full px-4 flex items-center  gap-2 py-2 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-gray-900"
          role="menuitem"
        >
          {children}
        </button>
      );
    case "link":
      return (
        <Link
          href={to as string}
          className="w-full px-4 flex items-center  gap-2 py-2 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-gray-900"
          role="menuitem"
        >
          {children}
        </Link>
      );

    default:
      return (
        <button
          onClick={onClick}
          className="w-full px-4 flex items-center  gap-2 py-2 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-gray-900"
          role="menuitem"
        >
          {children}
        </button>
      );
  }
};
