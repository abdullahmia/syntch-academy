"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { useChangePasswordMutation } from "@/app/features/auth/auth.api";
import toast from "cogo-toast";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type TResetPasswordFormState = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const ResetPasswordForm = () => {
  // Local state
  const [responseError, setResponseError] = useState<string>("");

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<TResetPasswordFormState>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [changePassword, { isLoading, isError, error, data, isSuccess }] =
    useChangePasswordMutation();
  const onSubmit = (data: TResetPasswordFormState) => {
    setResponseError("");
    if (data.newPassword !== data.confirmPassword) {
      setResponseError("Passwords do not match");
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    changePassword({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    });
  };

  useEffect(() => {
    if (isError) {
      //@ts-ignore
      const message: any = error?.data?.message as any;
      setResponseError(message);
    }
    if (isSuccess) {
      toast.success("Password has been changed!", {
        position: "top-right",
      });
      reset();
    }
  }, [isSuccess, isError, error, data, reset]);

  return (
    <div className="p-6 pb-8">
      <form className="w-1/2 space-y-7" onSubmit={handleSubmit(onSubmit)}>
        {responseError && (
          <FormElements.Error>{responseError}</FormElements.Error>
        )}
        <div>
          <FormElements.Label withAsterisk>Current password</FormElements.Label>
          <Controller
            name="oldPassword"
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
          {errors.oldPassword && (
            <FormElements.Error>
              {errors.oldPassword.message}
            </FormElements.Error>
          )}
        </div>
        <div>
          <FormElements.Label withAsterisk>New password</FormElements.Label>
          <Controller
            name="newPassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input
                value={value}
                onChange={onChange}
                placeholder="Type password"
              />
            )}
            rules={{
              required: {
                value: true,
                message: "New password is required",
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
          {errors.newPassword && (
            <FormElements.Error>
              {errors.newPassword.message}
            </FormElements.Error>
          )}
        </div>

        <div>
          <FormElements.Label withAsterisk>Confrim password</FormElements.Label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormElements.Input value={value} onChange={onChange} />
            )}
            rules={{
              required: {
                value: true,
                message: "Confirm password is required",
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
          {errors.confirmPassword && (
            <FormElements.Error>
              {errors.confirmPassword.message}
            </FormElements.Error>
          )}
        </div>
        <div>
          <Button
            type="submit"
            variant="primary"
            loading={isLoading}
            disabled={isLoading}
          >
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
};
