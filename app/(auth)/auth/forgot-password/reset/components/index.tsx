"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

type TResetPasswordFormState = {
  password: string;
};

export const ResetPasswordForm = () => {
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

  // Handle form submission
  const onSubmit = (data: TResetPasswordFormState) => {
    console.log(data);
    router.push("/auth/forgot-password/reset/success");
  };
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

        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
};
