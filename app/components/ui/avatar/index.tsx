import Image from "next/image";

interface AvatarProps {
  size: "small" | "medium" | "large";
  image?: string | null | undefined;
  name: string;
  rounded?: boolean;
}

const getInitials = (name: string): string => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return initials;
};

export const Avatar = ({ size, image, name, rounded = true }: AvatarProps) => {
  const sizeClass = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  }[size];

  const roundedClass = rounded ? "rounded-full" : "";

  return (
    <div
      className={`bg-[#222B40] dark:bg-[#171718] flex items-center justify-center ${sizeClass} ${roundedClass}`}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          className={`w-full h-full object-cover ring-2 ring-opacity-10 ${
            rounded ? "rounded-full" : "rounded-none"
          }`}
          height={64}
          width={64}
        />
      ) : (
        <span className="text-white text-sm font-semibold">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
};
