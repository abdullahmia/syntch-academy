"use client";

import { useSession } from "next-auth/react";

interface SocialProfile {
  linkedIn: string;
  github: string;
  website: string;
}

interface ProfilePicture {
  public_id: string;
  url: string;
}

interface IUser {
  socialProfile: SocialProfile;
  profilePicture: ProfilePicture;
  firstName: string;
  lastName: string;
  username: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  token: string;
}
interface ISession {
  data: IUser;
  status: string;
  update: any;
}

export const useIsAuthenticated = () => {
  const session = useSession();
  if (session?.data?.user && session?.status === "authenticated") {
    return true;
  } else {
    return false;
  }
};

export const useGetUser = () => {
  const session = useSession();
  if (session?.data?.user && session?.status === "authenticated") {
    const user = session.data.user as IUser;
    // @ts-ignore
    const token = session.data?.token as string;
    return { ...user, token } as IUser;
  } else {
    return null;
  }
};
