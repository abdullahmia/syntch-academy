"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Modal from "@/app/components/ui/modal";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

export interface NewFolderModalProps {
  isOpen: boolean;
  toggoleModal: () => void;
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
  } = useForm<IFolderFormState>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: IFolderFormState) => {
    console.log(data);
  };

  useEffect(() => {
    reset();
  }, [props.isOpen, reset]);

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
          <h2 className="text-md font-semibold text-primary">New folder</h2>
          <Button variant="text">
            <IoCloseOutline />
          </Button>
        </div>

        <form className="p-4 space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
            <Button variant="primary" type="submit">
              Create folder
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
