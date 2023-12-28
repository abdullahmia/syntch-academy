"use client";

import { useIsAuthenticated } from "@/app/hooks";
import { useAppSelector } from "@/app/redux";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);
  return (
    <header className="shadow py-3">
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
          <Button onClick={() => signOut()}>Logout</Button>
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
