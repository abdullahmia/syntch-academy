"use client";

import { Button } from "@/app/components/ui/button";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { IFolder } from "@/app/types/media";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FaFolder, FaRegTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdFolderOpen } from "react-icons/io";
import { NewFolderModal } from "./NewFolderModal";

interface IFolderProps {
  folder: IFolder;
}

export const Folder = (props: IFolderProps) => {
  // Local stete
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isFolderUpdateOpen, setIsFolderUpdateOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  // hooks
  const router = useRouter();

  // menucon

  // Navigate to the folder page
  const navigateToFolder = () => {
    router.push(`/dashboard/file-manager/${props.folder.id}`);
  };

  useOutsideClick(divRef, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <>
      <div
        ref={divRef}
        onClick={navigateToFolder}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsMenuOpen(true);
        }}
        className="flex items-center gap-3 border border-lightGray rounded p-3 cursor-pointer relative"
      >
        <div className="text-[#FCD333]">
          <FaFolder size={40} />
        </div>
        <div>
          <h2 className="text-{13px} text-primary">{props.folder.name}</h2>
          <p className="text-[10px] text-secondary">12 items</p>
        </div>
        {isMenuOpen && (
          <div className="w-[250px] z-[100] absolute shadow -right-28 top-0 mt-10 p-2 origin-top-right rounded bg-white border border-lightGray space-y-3">
            <Button variant="text" size="sm" fullWidth>
              <IoMdFolderOpen size={18} />
              <span className="text-sm">Open</span>
            </Button>
            <Button
              variant="text"
              size="sm"
              fullWidth
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setIsFolderUpdateOpen(true);
                setIsMenuOpen(false);
              }}
            >
              <FaRegPenToSquare size={18} />
              <span className="text-sm">Rename</span>
            </Button>
            <Button
              variant="text"
              customClass="text-dangerColor"
              size="sm"
              fullWidth
            >
              <FaRegTrashAlt size={18} />
              <span className="text-sm">Delete</span>
            </Button>
          </div>
        )}
      </div>

      {/* Update Folder modal */}
      <NewFolderModal
        isOpen={isFolderUpdateOpen}
        toggoleModal={() => setIsFolderUpdateOpen(!isFolderUpdateOpen)}
        isEdit
        folder={props.folder}
      />
    </>
  );
};
