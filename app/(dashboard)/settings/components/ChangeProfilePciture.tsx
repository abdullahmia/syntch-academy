"use client";

import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { constants } from "@/app/constants";
import { setUser, updateUser } from "@/app/features/auth/auth.slice";
import {
  useDeleteProfilePictureMutation,
  useUpdateProfilePictureMutation,
} from "@/app/features/users/users.api";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import toast from "cogo-toast";
import { useEffect, useRef, useState } from "react";

export const ChangeProfilePciture = () => {
  // Local state
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);

  const { user, token } = useAppSelector((state) => state.auth);

  // Hooks
  const dispatch = useAppDispatch();
  const { setItem } = useLocalStorage();

  // api hooks
  const [updateProfilePicture, { isLoading }] =
    useUpdateProfilePictureMutation();

  const selectPicture = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      // validate file size
      if (e.target.files[0].size > 1000000) {
        toast.error("Image size must be less than 1MB.", {
          position: "top-right",
        });
        return;
      }
      setProfilePicture(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Update profile picture
  const handleUpdateProfilePicture = async () => {
    if (!profilePicture) {
      return;
    }
    const formData = new FormData();
    formData.append("image", profilePicture);
    const res: any = await updateProfilePicture(formData);
    if (res?.data) {
      setProfilePicture(null);
      const udatedUser = {
        ...user,
        ...res.data,
      };

      // update local storage
      setItem(constants.USER, JSON.stringify(udatedUser));

      dispatch(updateUser(udatedUser));

      toast.success("Profile picture updated successfully.", {
        position: "top-right",
      });
    } else {
      setProfilePicture(null);
      toast.error("Something went wrong, please try again later.", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    if (profilePicture) {
      handleUpdateProfilePicture();
    }
  }, [profilePicture, updateProfilePicture]);

  // handle upload click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  // Delete profile picture handler
  const [deleteProfilePicture, { isLoading: deleteProfileLoading }] =
    useDeleteProfilePictureMutation();

  const handleDeleteProfilePicture = async () => {
    const res: any = await deleteProfilePicture({});
    if (res?.data) {
      const udatedUser = {
        ...user,
        profilePicture: null,
      };

      // Update local storage
      setItem(constants.USER, JSON.stringify(udatedUser));
      ``;

      dispatch(
        setUser({
          user: udatedUser,
          token,
        })
      );
    } else {
      toast.error("Something went wrong, please try again later.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="w-full p-6 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Avatar
          name={`${user?.firstName} ${user?.lastName}`}
          image={
            user?.profilePicture?.url ? user?.profilePicture?.url : undefined
          }
          size="large"
        />
        <div>
          <p className="text-primary font-semibold">Your avatar</p>
          <p className="text-sm text-deepGray">
            {" "}
            PNG or JPG no bigger than 800px wide and tall.{" "}
          </p>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        hidden
        onChange={selectPicture}
        ref={filePickerRef}
      />

      <div className="flex items-center gap-3">
        <Button
          variant="outline-secondary"
          onClick={handleClick as any}
          disabled={isLoading}
          loading={isLoading}
        >
          Update
        </Button>
        <Button
          variant="danger"
          onClick={handleDeleteProfilePicture}
          loading={deleteProfileLoading}
          disabled={deleteProfileLoading || !user?.profilePicture?.url}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
