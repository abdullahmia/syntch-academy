import { TbLoader2 } from "react-icons/tb";

interface LoaderProps {
  size?: number;
  color?: string;
}

export const Loader = ({ size, color }: LoaderProps) => {
  return (
    <TbLoader2
      className={`animate-spin text-[${color || "#ddd"}]`}
      size={size || 17}
    />
  );
};
