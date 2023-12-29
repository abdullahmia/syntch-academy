"use client";

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

  // hooks
  const dispatch = useAppDispatch();

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (window !== undefined) {
      setIsLoaded(true);
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      if (user !== undefined && token !== undefined)
        dispatch(setUser({ user: JSON?.parse(user as string), token }));
      setIsLoaded(false);
    } else {
      setIsLoaded(false);
    }
  }, [dispatch]);

  return isLoaded ? <PageLoader /> : props.children;
}
