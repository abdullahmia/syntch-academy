"use client";

import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { useRef, useState } from "react";

export interface DropdownProps {
  children?: React.ReactNode;
  actionElement?: React.ReactNode;
  width?: "sm" | "md" | "lg" | "xl";
}

export const Dropdown = ({ children, actionElement, width }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const outsideRef = useRef(null);

  useOutsideClick(outsideRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggleDropdown = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div ref={outsideRef} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {actionElement}
        </button>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 rounded-md shadow-lg ${
          isOpen ? "block" : "hidden"
        }
        ${
          width === "sm"
            ? "w-36"
            : width === "md"
            ? "w-48"
            : width === "lg"
            ? "w-60"
            : width === "xl"
            ? "w-72"
            : "w-48"
        }
        `}
      >
        <div
          className="py-2 px-2 rounded-sm bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          onClick={toggleDropdown}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
