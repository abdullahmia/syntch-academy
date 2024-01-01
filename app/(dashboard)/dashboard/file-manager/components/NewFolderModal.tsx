"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Modal from "@/app/components/ui/modal";
import {
  useAddFolderMutation,
  useRenameFolderMutation,
} from "@/app/features/media/media.api";
import { IFolder } from "@/app/types/media";
import toast from "cogo-toast";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

export interface NewFolderModalProps {
  isOpen: boolean;
  toggoleModal: () => void;
  isEdit?: boolean;
  folder?: IFolder;
}

interface IFolderFormState {
  name: string;
}

export const NewFolderModal = (props: NewFolderModalProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IFolderFormState>({
    defaultValues: {
      name: "",
    },
  });

  // Add folder handler
  const [addFolder, { isLoading }] = useAddFolderMutation();
  const onSubmit = async (data: IFolderFormState) => {
    const response: any = await addFolder(data);
    if (response?.data) {
      toast.success("Folder created successfully", {
        position: "top-right",
      });
      reset();
      props.toggoleModal();
    }
    if (response?.error) {
      toast.error(response.error?.message, {
        position: "top-right",
      });
    }
  };

  // Rename folder handler
  const [renameFolder, { isLoading: renameLoading }] =
    useRenameFolderMutation();

  const renameFolderhandler = async (data: IFolderFormState) => {
    const response: any = await renameFolder({
      id: props.folder?.id,
      body: {
        name: data.name,
      },
    });
    if (response?.data) {
      toast.success("Folder renamed successfully", {
        position: "top-right",
      });
      reset();
      props.toggoleModal();
    }
    if (response?.error) {
      toast.error(response.error?.message, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    reset();
  }, [props.isOpen, reset]);

  useEffect(() => {
    if (props.folder) {
      setValue("name", props.folder.name);
    }
  }, [setValue, props.isOpen, props.isEdit, props.folder]);

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
          <h2 className="text-md font-semibold text-primary">
            {props.isEdit ? "Rename" : "New"} folder
          </h2>
          <Button variant="text" onClick={props.toggoleModal}>
            <IoCloseOutline />
          </Button>
        </div>

        <form
          className="p-4 space-y-5"
          onSubmit={handleSubmit(props.isEdit ? renameFolderhandler : onSubmit)}
        >
          <div>
            <FormElements.Label withAsterisk>Folder name</FormElements.Label>

            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormElements.Input
                  placeholder="Enter folder name"
                  onChange={onChange}
                  value={value}
                />
              )}
              rules={{
                required: "Folder name is required",
              }}
            />
            {errors.name && (
              <FormElements.Error>{errors.name.message}</FormElements.Error>
            )}
          </div>

          <div className="">
            <Button
              variant="primary"
              type="submit"
              loading={props.isEdit ? renameLoading : isLoading}
              disabled={props.isEdit ? renameLoading : isLoading}
            >
              {props.isEdit ? "Rename" : "Create"} folder
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
