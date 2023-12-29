"use client";

import { useIsAuthenticated, useLogout } from "@/app/hooks";
import { useAppSelector } from "@/app/redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGear, FaUser } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownElement } from "../ui/dropdown";

export const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const { user } = useAppSelector((state) => state.auth);

  // hooks
  const { logout } = useLogout();
  const router = useRouter();

  // handle logout
  const logoutHandler = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <header className="shadow py-3 bg-white">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-8 text-primary">
          <Link href={"/"} className="text-2xl font-semibold">
            Synth Academy
          </Link>
          <div className="space-x-4 text-[15px]">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/">Courses</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About us</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {isAuthenticated ? (
          <DropdownElement.DropdownWrapper
            actionElement={
              <Avatar
                name={user?.firstName as string}
                image={
                  user?.profilePicture?.url
                    ? user?.profilePicture?.url
                    : undefined
                }
                size="medium"
              />
            }
            width="xl"
          >
            <div className="px-4 flex items-center gap-2">
              <div>
                <Avatar
                  name={user?.firstName as string}
                  image={
                    user?.profilePicture?.url
                      ? user?.profilePicture?.url
                      : undefined
                  }
                  size="small"
                />
              </div>
              <div>
                <h2 className="capitalize">
                  {user?.displayName
                    ? user?.displayName
                    : user?.firstName + " " + user?.lastName}
                </h2>
                <p className="text-sm">{user?.email}</p>
              </div>
            </div>

            <div className="py-3">
              <hr className="border-lightGray" />
            </div>

            <DropdownElement.DropdownItem type="link" to="/admin/appearance">
              <FaUser size={16} /> Account
            </DropdownElement.DropdownItem>
            <DropdownElement.DropdownItem type="link" to="/settings">
              <FaGear size={16} /> Settings
            </DropdownElement.DropdownItem>

            <div className="py-3">
              <hr className="border-lightGray" />
            </div>

            <DropdownElement.DropdownItem type="button" onClick={logoutHandler}>
              <IoLogOutOutline size={16} /> Logout
            </DropdownElement.DropdownItem>
          </DropdownElement.DropdownWrapper>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="secondary" linkButton to="/auth/login">
              Sign in
            </Button>
            <Button variant="primary" linkButton to="/auth/signup">
              Sign up
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
