"use client";

import { useIsAuthenticated } from "@/app/hooks";
import { redirect } from "next/navigation";

export interface VerifiedAuthProps {
  children: React.ReactNode;
}

export const VerifiedAuth = ({ children }: VerifiedAuthProps) => {
  const isAtuhenicated = useIsAuthenticated();

  if (isAtuhenicated) redirect("/");
  return children;
};
