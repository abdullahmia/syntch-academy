import Link from "next/link";
import { Loader } from "../loader/loader";

export interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "text"
    | "outline-secondary"
    | "danger";
  type?: "button" | "submit" | "reset" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  to?: string;
  onClick?: () => void | any;
  linkButton?: boolean;
  fullWidth?: boolean;
}

export const Button = (props: ButtonProps) => {
  let classess = `
    px-6 py-3.5
    rounded
    font-semibold
    transition
    duration-200
    ease-in-out
    flex items-center justify-center gap-2
    ${
      props.variant === "secondary"
        ? "shadow bg-white"
        : props.variant === "primary"
        ? "bg-fill-primary text-white"
        : props.variant === "outline"
        ? "border border-primary hover:bg-primary hover:text-white"
        : props.variant === "outline-secondary"
        ? "border border-lightGray hover:border-deepGray"
        : props.variant === "danger"
        ? "border border-dangerColor text-dangerColor"
        : ""
    }
    ${props.fullWidth ? "w-full" : ""}
  `;
  return !props.linkButton ? (
    <button
      className={classess}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.loading && <Loader />}
      {props.children}
    </button>
  ) : (
    <Link href={props.to ? (props.to as string) : "/"} className={classess}>
      {props.children}
    </Link>
  );
};
