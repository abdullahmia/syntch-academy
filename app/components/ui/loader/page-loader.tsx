import { BiLoaderAlt } from "react-icons/bi";

export const PageLoader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <BiLoaderAlt className="animate-spin text-[#727a80]" size={30} />
    </div>
  );
};
