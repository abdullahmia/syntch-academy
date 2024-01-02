"use client";

import { useGetFilesAndFoldersQuery } from "@/app/features/media/media.api";
import { useAppSelector } from "@/app/redux";
import { IFile, IFolder } from "@/app/types/media";
import { File } from "./File";
import { Folder } from "./Folder";

export const FileAndFolders = () => {
  const { data } = useGetFilesAndFoldersQuery();

  // redux
  const { search: searchValue } = useAppSelector((state) => state.media);

  // Render folder items
  const renderFolders = () => {
    return data?.folders.map((folder: IFolder, key: number) => {
      return <Folder key={key} folder={folder} />;
    });
  };

  // render file items
  const renderFiles = () => {
    if (data?.media?.length === 0) {
      return <p className="text-sm text-gray-400">No files found</p>;
    }
    return data?.media.map((file: IFile, key: number) => {
      if (file.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return <File key={key} file={file} />;
      }
    });
  };

  return (
    <>
      <div className="p-6">
        {/* Folders */}
        {/* <div>
          <h2 className="text-md font-semibold text-primary">Folders</h2>
          <div className="grid grid-cols-4 gap-4 mt-3">{renderFolders()}</div>
        </div> */}

        {/* Files */}
        <div className="mt-6">
          <h2 className="text-md font-semibold text-primary">Files</h2>
          <div className="grid grid-cols-4 gap-4 mt-3">{renderFiles()}</div>
        </div>
      </div>
    </>
  );
};
