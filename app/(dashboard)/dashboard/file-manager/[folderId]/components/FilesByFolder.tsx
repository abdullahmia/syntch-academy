"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { File } from "../../components/File";

export const FilesByFolder = () => {
  // hooks
  const router = useRouter();

  // Navigate to the folder page
  const navigateToFolder = () => {
    router.push("/dashboard/file-manager");
  };

  return (
    <div>
      <div>
        <div className="flex items-center gap-3">
          <Button variant="text" onClick={navigateToFolder}>
            <BsArrowLeft />
          </Button>
          <h2 className="text-md font-semibold text-primary">Files</h2>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-3">
          <File />
          <File />
          <File />
          <File />
          <File />
          <File />
          <File />
        </div>
      </div>
    </div>
  );
};
