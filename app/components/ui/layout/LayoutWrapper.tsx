"use client";

import { useAppSelector } from "@/app/redux";
import { Avatar } from "../avatar";
import { Sidebar } from "../sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <main className="container py-6">
      {/* Profile Header */}
      <div className="bg-white rounded mb-8 p-6">
        <div className=" h-20 w-full flex items-center gap-3">
          <div>
            <Avatar
              name={`${user?.firstName as string} ${user?.lastName as string}`}
              image={
                user?.profilePicture?.url
                  ? user?.profilePicture?.url
                  : undefined
              }
              size="large"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {user?.firstName} {user?.lastName}{" "}
              <span className="text-sm">
                ({user?.role === "user" ? "Student" : user?.role})
              </span>
            </h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <Sidebar />
        <div className="bg-white h-full w-full rounded-md">{children}</div>
      </div>
    </main>
  );
};
