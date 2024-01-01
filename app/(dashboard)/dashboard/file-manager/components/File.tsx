"use client";

import { Button } from "@/app/components/ui/button";
import Offcanvas from "@/app/components/ui/offcanvas";
import { useDeleteMediaMutation } from "@/app/features/media/media.api";
import { useAppSelector } from "@/app/redux";
/* eslint-disable @next/next/no-img-element */
import { IFile } from "@/app/types/media";
import { formatDate } from "@/app/utils";
import toast from "cogo-toast";
import { useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { LuTrash } from "react-icons/lu";

export interface FileProps {
  file: IFile;
}

export const File = ({ file }: FileProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Redux
  const { user } = useAppSelector((state) => state.auth);

  // handle download file
  const downloadHandler = async () => {
    try {
      const response = await fetch(file?.url);
      const blob = await response.blob();
      const link = document.createElement("a");
      const blobUrl = window.URL.createObjectURL(blob);
      link.href = blobUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  // handle delete file
  const [deleteFile, { isLoading }] = useDeleteMediaMutation();
  const deleteHandler = async () => {
    try {
      const res: any = await deleteFile(file.id);
      toast.success("File deleted successfully", {
        position: "top-right",
      });
      setIsOpen(false);
    } catch (error) {
      toast.error("Error deleting file", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="border border-lightGray rounded cursor-pointer"
      >
        <div className="group cursor-pointer">
          <div className="flex items-center justify-center border-b border-lightGray">
            <div
              className="flex items-center justify-center border-b border-lightGray"
              style={{ height: "140px", width: "100%" }}
            >
              <img
                src={file?.url}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-center p-2 group-hover:bg-[#f0f0f8] transition">
            <h2 className="text-primary font-semibold">
              {file?.name?.slice(0, 20)}
            </h2>
            <p className="text-[11px] text-deepGray">1.2 MB</p>
          </div>
        </div>
      </div>

      {/* File View Offcanvas */}
      <Offcanvas isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <div>
          <h2>{file.name}</h2>
        </div>

        <div
          className="mt-10 flex items-center justify-center border-lightGray border rounded"
          style={{ height: "300px", width: "100%" }}
        >
          <img
            src={file?.url}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="mt-6 pr-10 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm">Name</p>
            <p className="text-sm">{file?.name}</p>
          </div>

          <div className="flex items-center justify-between gap-24">
            <p className="text-sm">Size</p>
            <p className="text-sm">NaN</p>
          </div>

          <div className="flex items-center justify-between gap-24">
            <p className="text-sm">Owner</p>
            <p className="text-sm">
              {user?.displayName
                ? user?.displayName
                : `${user?.firstName} ${user?.lastName}`}
            </p>
          </div>

          <div className="flex items-center justify-between gap-24">
            <p className="text-sm ">Modified</p>
            <p className="text-sm ">
              {file?.folder ? file?.folder : "Current"}
            </p>
          </div>

          <div className="flex items-center justify-between gap-24">
            <p className="text-sm ">Modified</p>
            <p className="text-sm ">{formatDate(file?.updatedAt)}</p>
          </div>

          <div className="flex items-center justify-between gap-24">
            <p className="text-sm ">Created</p>
            <p className="text-sm ">{formatDate(file?.createdAt)}</p>
          </div>
        </div>

        {/* File action */}
        <div className="mt-10 flex items-center gap-4">
          <Button
            onClick={downloadHandler}
            variant="primary"
            size="md"
            fullWidth
          >
            <IoDownloadOutline />
            Download
          </Button>
          <Button
            variant="danger"
            size="md"
            fullWidth
            onClick={deleteHandler}
            loading={isLoading}
            disabled={isLoading}
          >
            <LuTrash />
            Delete
          </Button>
        </div>
      </Offcanvas>
    </>
  );
};
