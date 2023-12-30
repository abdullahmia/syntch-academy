"use client";

import { useAppSelector } from "@/app/redux";
import { convertTimestamp } from "@/app/utils/date-times";

export const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.auth);

  console.log(user);

  console.log();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-primary font-semibold text-[.9rem]">
          Registration Date
        </h2>
        <p className="text-[.875rem] text-secondary">
          {convertTimestamp(user?.createdAt as string)}
        </p>
      </div>
      <div>
        <h2 className="text-primary font-semibold text-[.9rem]">First Name</h2>
        <p className="text-[.875rem] text-secondary">
          {user?.firstName ? user?.firstName : "________"}
        </p>
      </div>
      <div>
        <h2 className="text-primary font-semibold text-[.9rem]">Last Name</h2>
        <p className="text-[.875rem] text-secondary">
          {user?.lastName ? user?.lastName : "________"}
        </p>
      </div>

      <div>
        <h2 className="text-primary font-semibold text-[.9rem]">Email</h2>
        <p className="text-[.875rem] text-secondary">
          {user?.email ? user?.email : "________"}
        </p>
      </div>
      <div>
        <h2 className="text-primary font-semibold text-[.9rem]">Username</h2>
        <p className="text-[.875rem] text-secondary">
          {user?.username ? user?.username : "________"}
        </p>
      </div>
      <div>
        <h2 className="text-primary font-semibold text-[.9rem]">Role</h2>
        <p className="text-[.875rem] text-secondary">
          {user?.role === "user" ? "Student" : user?.role}
        </p>
      </div>
      <div>
        <h2 className="text-primary font-semibold text-[.9rem]">Occupation</h2>
        <p className="text-[.875rem] text-secondary">
          {user?.occupation ? user?.occupation : "________"}
        </p>
      </div>
    </div>
  );
};
