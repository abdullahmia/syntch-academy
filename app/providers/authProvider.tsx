"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { PageLoader } from "../components/ui/loader/page-loader";
import { setUser } from "../features/auth/auth.slice";
import { useAppDispatch } from "../redux";

export interface authProviderProps {
  children: React.ReactNode;
  // session: any;
}

export function AuthProvider(props: authProviderProps) {
  // Local State
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  const session: any = useSession();
  // hooks
  const dispatch = useAppDispatch();

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (session.status === "authenticated") {
      setIsLoaded(true);
      dispatch(
        setUser({
          user: session.data.user,
          token: session.data.token,
        })
      );
      setIsLoaded(false);
    } else if (session.status === "unauthenticated") {
      setIsLoaded(false);
    }
  }, [session, dispatch]);

  return isLoaded ? <PageLoader /> : props.children;
}
