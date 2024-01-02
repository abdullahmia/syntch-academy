"use client";

import { USER_ROLES } from "@/app/constants";
import { useAppSelector } from "@/app/redux";
import { redirect } from "next/navigation";
import { useState } from "react";

export interface AccessLayerProps {
  children: React.ReactNode;
}

export const AccessLayer = (props: AccessLayerProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);

  console.log("user", user);

  return user?.role === USER_ROLES.INSTRUCTOR ? (
    <main className="p-6">{props.children}</main>
  ) : (
    redirect("/dashboard/profile")
  );
};
