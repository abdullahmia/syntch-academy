"use client";

import { useSendVarificationEmailMutation } from "@/app/features/auth/auth.api";
import toast from "cogo-toast";
import { useEffect } from "react";

export const VerifyAccount = () => {
  const [sendVarificationEmail, { isLoading, isSuccess, isError }] =
    useSendVarificationEmailMutation();

  const handleSendVarificationEmail = () => {
    sendVarificationEmail({});
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        "Email has been sent! if you did not recieve an email, please check your spam folder.",
        {
          position: "top-center",
          hideAfter: 5,
        }
      );
    }
    if (isError) {
      toast.error("Something went wrong, please try again later.", {
        position: "top-center",
        hideAfter: 5,
      });
    }
  }, [isSuccess, isError]);

  return (
    <div className="text-center bg-fill-primary text-sm py-2 text-white">
      Your account is not verfied! Click{" "}
      <span
        onClick={handleSendVarificationEmail}
        className="cursor-pointer uppercase font-semibold underline"
      >
        {isLoading ? "loading..." : "here"}
      </span>{" "}
      to verify your account.
    </div>
  );
};
