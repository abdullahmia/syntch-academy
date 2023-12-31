"use client";

import { useRouter } from "next/navigation";
import { FaFolder } from "react-icons/fa";

export const Folder = () => {
  // hooks
  const router = useRouter();

  // Navigate to the folder page
  const navigateToFolder = () => {
    router.push("/dashboard/file-manager/asdfasdfasfd");
  };

  return (
    <div
      onClick={navigateToFolder}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
      className="flex items-center gap-3 border border-lightGray rounded p-3 cursor-pointer"
    >
      <div className="text-[#FCD333]">
        <FaFolder size={40} />
      </div>
      <div>
        <h2 className="text-{13px} text-primary">Picture</h2>
        <p className="text-[10px] text-secondary">12 items</p>
      </div>
    </div>
  );
};
