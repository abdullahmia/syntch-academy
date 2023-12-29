"use client";

import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { useAppSelector } from "@/app/redux";

export const ChangeProfilePciture = () => {
  const { user } = useAppSelector((state) => state.auth);

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

      <div className="flex items-center gap-3">
        <Button variant="outline-secondary">Update</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};
