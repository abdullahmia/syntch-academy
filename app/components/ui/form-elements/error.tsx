"use client";

export interface FromErrorProps {
  children?: string;
}

export const FormError = (props: FromErrorProps) => {
  return (
    <div className="mt-1">
      <p className="text-[12px] text-[#b43c3c]">{props.children}</p>
    </div>
  );
};
