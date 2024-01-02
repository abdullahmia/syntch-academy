"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { setSearch } from "@/app/features/media/media.slice";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { NewFolderModal } from "./NewFolderModal";
import { UploadFileModal } from "./UploadFileModal";

export const SearchAction = () => {
  // Local state
  const [isNewFolderModalOpen, setIsNewFolderModalOpen] =
    useState<boolean>(false);

  const [isUploadFileModalOpen, setIsUploadFileModalOpen] =
    useState<boolean>(false);

  // hooks
  const dispatch = useAppDispatch();

  // Redux state
  const { search: searchValue } = useAppSelector((state) => state.media);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <div className="p-6 border-b border-lightGray">
        <div className="flex items-center justify-between gap-4">
          <div className="w-2/3">
            <FormElements.Input
              placeholder="Start typing to search for file"
              value={searchValue}
              onChange={handleSearch}
              type="search"
            />
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <Button
              variant="outline"
              onClick={() => setIsUploadFileModalOpen(true)}
            >
              <CiFileOn size={20} />
              Upload file
            </Button>
          </div>
        </div>
      </div>
      {/* new folder modal */}
      <NewFolderModal
        isOpen={isNewFolderModalOpen}
        toggoleModal={() => setIsNewFolderModalOpen(!isNewFolderModalOpen)}
      />

      {/* Upload file modal */}
      <UploadFileModal
        isOpen={isUploadFileModalOpen}
        toggoleModal={() => setIsUploadFileModalOpen(!isUploadFileModalOpen)}
      />
    </>
  );
};
