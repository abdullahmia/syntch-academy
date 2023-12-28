"use client";

import { SessionProvider } from "next-auth/react";
import { setUser } from "../features/auth/auth.slice";
import { useAppDispatch } from "../redux";

export interface authProviderProps {
  children: React.ReactNode;
  session: any;
}

// @ts-ignore
export function AuthProvider(props: authProviderProps) {
  console.log("Session: ", props.session);

  // hooks
  const dispatch = useAppDispatch();
  if (props.session) {
    dispatch(
      setUser({
        user: props.session.user,
        token: props.session.token,
      })
    );
  }

  return <SessionProvider>{props.children}</SessionProvider>;
}
