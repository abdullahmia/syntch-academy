"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Modal from "@/app/components/ui/modal";
import {
  useAddFileMutation,
  useGetFilesAndFoldersQuery,
} from "@/app/features/media/media.api";
import toast from "cogo-toast";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaFileAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

export interface UploadModalProps {
  isOpen: boolean;
  toggoleModal: () => void;
}

interface IFolderFormState {
  folderId: string;
}

export const UploadFileModal = (props: UploadModalProps) => {
  const [file, setFile] = useState<File | null>(null);
  const filePickerRef = useRef(null);
  const [folders, setFolders] = useState<
    { label: string; value: string }[] | null
  >(null);

  const { data } = useGetFilesAndFoldersQuery();

  // add photo to image
  const uploadFile = (e: any) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFolderFormState>({
    defaultValues: {
      folderId: "",
    },
  });

  const [addFile, { isLoading }] = useAddFileMutation();

  const onSubmit = async (data: IFolderFormState) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folderId", data.folderId);
      const res: any = await addFile(formData);

      if (res.data) {
        toast.success("File uploaded successfully!", {
          position: "top-right",
        });
        props.toggoleModal();
      }
      if (res.error) {
        toast.error("Something went wrong! Please try again.", {
          position: "top-right",
        });
      }
    }
  };

  useEffect(() => {
    reset();
    setFile(null);
  }, [props.isOpen, reset]);

  useEffect(() => {
    if (data) {
      setFolders(
        data.folders.map((folder) => {
          return {
            label: folder.name,
            value: folder.id,
          };
        })
      );
    }
  }, [data]);

  return (
    <Modal
      isOpen={props.isOpen}
      toggoleModal={props.toggoleModal}
      width="500px"
      height="auto"
      rounded="md"
      maxHeight="none"
    >
      <div className="p-2">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-semibold text-primary">Upload a file</h2>
          <Button variant="text">
            <IoCloseOutline />
          </Button>
        </div>

        <form className="p-4 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <FormElements.Label withAsterisk>Select folder</FormElements.Label>
            <Controller
              name="folderId"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormElements.Select
                  onChange={onChange}
                  value={value}
                  options={folders || []}
                  placeholder="Select folder"
                />
              )}
            />
          </div>

          <div>
            {file && (
              <div className="w-full h-72 flex items-center justify-center border border-lightGray border-dashed relative">
                {file.type.includes("image") ? (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="Selected Image"
                    width={200}
                    height={300}
                  />
                ) : file.type.includes("video") ? (
                  // Render video if the file type is a video
                  <video controls className="w-full h-full">
                    <source src={URL.createObjectURL(file)} type={file.type} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Render a generic document with an icon for other file types
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <FaFileAlt size={50} />
                    <p>{file.name}</p>
                  </div>
                )}
                <div
                  className="absolute top-2 right-2 border border-primary rounded-full cursor-pointer"
                  onClick={() => setFile(null)}
                >
                  <IoCloseOutline size={20} />
                </div>
              </div>
            )}

            {!file && (
              <div className="w-full h-72 flex items-center justify-center py-7 border border-lightGray border-das">
                <div className="flex flex-col gap-3 justify-center items-center">
                  <svg
                    aria-label="Icon to represent media such as images or videos"
                    className="dark:text-gray-400"
                    color="#262626"
                    fill="#262626"
                    height="77"
                    role="img"
                    viewBox="0 0 97.6 77.3"
                    width="96"
                  >
                    <path
                      d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <input
                    type="file"
                    hidden
                    onChange={uploadFile}
                    ref={filePickerRef}
                  />
                  <button
                    className="underline"
                    onClick={(e) => {
                      e.preventDefault();
                      if (filePickerRef.current) {
                        // @ts-ignore
                        filePickerRef.current?.click();
                      }
                    }}
                  >
                    Select from computer
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <Button
              variant="primary"
              type="submit"
              loading={isLoading}
              disabled={!file || isLoading}
            >
              Upload file
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
