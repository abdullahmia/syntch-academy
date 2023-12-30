"use client";

import { Button } from "@/app/components/ui/button";
import { Loader } from "@/app/components/ui/loader/loader";
import { constants } from "@/app/constants";
import { useVerifyEmailMutation } from "@/app/features/auth/auth.api";
import { updateToken, updateUser } from "@/app/features/auth/auth.slice";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useAppDispatch } from "@/app/redux";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const VerifyEmail = () => {
  // Local State
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);

  // hooks
  const dispatch = useAppDispatch();
  const { setItem } = useLocalStorage();

  // get the token from the url
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  console.log(token);

  const [verfiyEmail, { isLoading, isError, isSuccess }] =
    useVerifyEmailMutation();

  const handleVerifyEmail = async () => {
    setIsEmailVerified(false);
    const res: any = await verfiyEmail(token);

    if (res.data) {
      console.log(res.data);

      // update local storage
      setItem(constants.TOKEN, res.data.token);
      setItem(constants.USER, JSON.stringify(res.data.user));
      dispatch(updateToken(res.data.token));
      dispatch(
        updateUser({
          status: res?.data?.user?.status,
        })
      );

      setIsEmailVerified(true);
    }
    if (res?.error) {
      setIsEmailVerified(false);
    }
  };

  useEffect(() => {
    if (token) {
      handleVerifyEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-[18px] text-primary font-semibold">
          {isEmailVerified ? "Email Verified" : "Verifying Email"}
        </h2>
        {isLoading ? <Loader /> : ""}
      </div>

      {isEmailVerified && (
        <Button linkButton to="/dashboard" variant="primary">
          Go to Dashboard
        </Button>
      )}
    </div>
  );
};
