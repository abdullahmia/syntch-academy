"use client";

import { useSession } from "next-auth/react";
import { IUser } from "../features/auth/auth.interface";
import { useAppSelector } from "../redux";

export const useUpdateSessoin = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const { update } = useSession();

  // Update session
  const updateSession = async (payload: IUser) => {
    try {
      const updatedUser = {
        ...user,
        ...payload,
      };
      const respnse = await update({ user: updatedUser });
      console.log("Session updated successfully!", respnse);
      return { user: updatedUser, token };
    } catch (error) {
      console.error("Error updating session:", error);
      // Handle error appropriately
      throw error; // Rethrow to allow handling in calling component
    }
  };

  return { updateSession };
};
