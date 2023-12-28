"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { useResetPasswordMutation } from "@/app/features/auth/auth.api";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type TResetPasswordFormState = {
  password: string;
};

export const ResetPasswordForm = () => {
  // Local State
  const [respnseError, setResponseError] = useState<string>("");

  // get the token from the url
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TResetPasswordFormState>({
    defaultValues: {
      password: "",
    },
  });

  // hooks
  const router = useRouter();

  // hook for password reset
  const [resetPassword, { isLoading, isError, isSuccess, error }] =
    useResetPasswordMutation();

  // Handle form submission
  const onSubmit = (data: TResetPasswordFormState) => {
    resetPassword({ ...data, token });
    // router.push("/auth/forgot-password/reset/success");
  };

  // if no token redirect to forgot password page
  useEffect(() => {
    if (!token) {
      router.push("/auth/forgot-password");
    }
  }, [token, router]);

  // handle server respnse
  useEffect(() => {
    if (isSuccess) {
      router.push("/auth/forgot-password/reset/success");
    }
    if (isError) {
      // @ts-ignore
      setResponseError(error?.data?.message);
    }
  }, [isSuccess, isError, error, router]);

  return (
    <div>
      <div className="mb-4">
        <div className="mb-6">
          <Link href={"/"} className="text-fill-primary">
            Synth Academy
          </Link>
        </div>
        <h2 className="text-[20px] text-primary font-semibold">
          Forgot Password
        </h2>
      </div>
      <div className="py-4">
        <FormElements.Error>{respnseError}</FormElements.Error>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormElements.Label withAsterisk>New Password</FormElements.Label>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input value={value} onChange={onChange} />
            )}
            rules={{
              required: {
                value: true,
                message: "Password is required",
              },
              validate: {
                password: (value) =>
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                    value
                  ) ||
                  "Password should be at least 8 characters long one uppercase letter, one lowercase letter, one number and one special character",
              },
            }}
          />
          {errors.password && (
            <FormElements.Error>{errors.password.message}</FormElements.Error>
          )}
        </div>

        <Button variant="primary" type="submit" loading={isLoading}>
          Reset Password
        </Button>
      </form>
    </div>
  );
};
