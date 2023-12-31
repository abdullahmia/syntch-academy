"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  extraClasses?: string;
  activeClassName?: string;
}

export const NavLink = ({
  children,
  href,
  extraClasses,
  activeClassName,
}: NavLinkProps) => {
  const isLinkActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 ${
        isLinkActive ? `${activeClassName}` : ""
      } ${extraClasses}`}
    >
      {children}
    </Link>
  );
};
