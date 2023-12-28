"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { useForgotPasswordMutation } from "@/app/features/auth/auth.api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type TForgotPasswordFormState = {
  email: string;
};

export const ForgotPasswordForm = () => {
  // Local state
  const [respnseError, setResponseError] = useState<string>("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TForgotPasswordFormState>({
    defaultValues: {
      email: "",
    },
  });

  // hooks
  const router = useRouter();

  // Hook for handling form submission
  const [forgotPassword, { isLoading, isSuccess, isError, error }] =
    useForgotPasswordMutation();

  // Handle form submission
  const onSubmit = (data: TForgotPasswordFormState) => {
    setResponseError("");
    forgotPassword(data);
    // router.push("/auth/forgot-password/email-sent");
  };

  // handle server respnse
  useEffect(() => {
    if (isSuccess) {
      router.push("/auth/forgot-password/email-sent");
    }
    if (isError) {
      // @ts-ignore
      setResponseError(error?.data?.message);
    }
  }, [isSuccess, isError, error, router]);

  return (
    <div>
      <div>
        <div className="mb-6">
          <Link href={"/"} className="text-fill-primary">
            Synth Academy
          </Link>
        </div>
        <h2 className="text-[32px] text-primary font-semibold">
          Forgot Password
        </h2>
        <p className="text-sm text-secondary">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
      </div>
      <div className="py-4">
        <FormElements.Error>{respnseError}</FormElements.Error>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormElements.Label withAsterisk>Email</FormElements.Label>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input value={value} onChange={onChange} />
            )}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
              validate: {
                email: (value) =>
                  /\S+@\S+\.\S+/.test(value) || "Email is invalid",
              },
            }}
          />
          {errors.email && (
            <FormElements.Error>{errors.email.message}</FormElements.Error>
          )}
        </div>

        <Button variant="primary" type="submit" loading={isLoading}>
          Reset Password
        </Button>
      </form>
    </div>
  );
};
